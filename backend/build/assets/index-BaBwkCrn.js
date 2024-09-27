function Qh(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function eo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var lf = { exports: {} },
  Ni = {},
  sf = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var to = Symbol.for("react.element"),
  Gh = Symbol.for("react.portal"),
  qh = Symbol.for("react.fragment"),
  Xh = Symbol.for("react.strict_mode"),
  Yh = Symbol.for("react.profiler"),
  Jh = Symbol.for("react.provider"),
  Zh = Symbol.for("react.context"),
  em = Symbol.for("react.forward_ref"),
  tm = Symbol.for("react.suspense"),
  nm = Symbol.for("react.memo"),
  rm = Symbol.for("react.lazy"),
  yu = Symbol.iterator;
function om(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (yu && e[yu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var af = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  uf = Object.assign,
  cf = {};
function nr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = cf),
    (this.updater = n || af);
}
nr.prototype.isReactComponent = {};
nr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
nr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ff() {}
ff.prototype = nr.prototype;
function Js(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = cf),
    (this.updater = n || af);
}
var Zs = (Js.prototype = new ff());
Zs.constructor = Js;
uf(Zs, nr.prototype);
Zs.isPureReactComponent = !0;
var vu = Array.isArray,
  df = Object.prototype.hasOwnProperty,
  ea = { current: null },
  pf = { key: !0, ref: !0, __self: !0, __source: !0 };
function hf(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      df.call(t, r) && !pf.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: to,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: ea.current,
  };
}
function im(e, t) {
  return {
    $$typeof: to,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ta(e) {
  return typeof e == "object" && e !== null && e.$$typeof === to;
}
function lm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var gu = /\/+/g;
function nl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? lm("" + e.key)
    : t.toString(36);
}
function Oo(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case to:
          case Gh:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + nl(l, 0) : r),
      vu(o)
        ? ((n = ""),
          e != null && (n = e.replace(gu, "$&/") + "/"),
          Oo(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (ta(o) &&
            (o = im(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(gu, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), vu(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + nl(i, s);
      l += Oo(i, t, n, a, o);
    }
  else if (((a = om(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + nl(i, s++)), (l += Oo(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return l;
}
function co(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Oo(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function sm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ee = { current: null },
  Po = { transition: null },
  am = {
    ReactCurrentDispatcher: Ee,
    ReactCurrentBatchConfig: Po,
    ReactCurrentOwner: ea,
  };
I.Children = {
  map: co,
  forEach: function (e, t, n) {
    co(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      co(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      co(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ta(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
I.Component = nr;
I.Fragment = qh;
I.Profiler = Yh;
I.PureComponent = Js;
I.StrictMode = Xh;
I.Suspense = tm;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = am;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = uf({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = ea.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      df.call(t, a) &&
        !pf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: to, type: e.type, key: o, ref: i, props: r, _owner: l };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: Zh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Jh, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = hf;
I.createFactory = function (e) {
  var t = hf.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: em, render: e };
};
I.isValidElement = ta;
I.lazy = function (e) {
  return { $$typeof: rm, _payload: { _status: -1, _result: e }, _init: sm };
};
I.memo = function (e, t) {
  return { $$typeof: nm, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = Po.transition;
  Po.transition = {};
  try {
    e();
  } finally {
    Po.transition = t;
  }
};
I.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
I.useCallback = function (e, t) {
  return Ee.current.useCallback(e, t);
};
I.useContext = function (e) {
  return Ee.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return Ee.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return Ee.current.useEffect(e, t);
};
I.useId = function () {
  return Ee.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return Ee.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return Ee.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return Ee.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return Ee.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return Ee.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return Ee.current.useRef(e);
};
I.useState = function (e) {
  return Ee.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return Ee.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return Ee.current.useTransition();
};
I.version = "18.2.0";
sf.exports = I;
var y = sf.exports;
const ce = eo(y),
  um = Qh({ __proto__: null, default: ce }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cm = y,
  fm = Symbol.for("react.element"),
  dm = Symbol.for("react.fragment"),
  pm = Object.prototype.hasOwnProperty,
  hm = cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  mm = { key: !0, ref: !0, __self: !0, __source: !0 };
function mf(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) pm.call(t, r) && !mm.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: fm,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: hm.current,
  };
}
Ni.Fragment = dm;
Ni.jsx = mf;
Ni.jsxs = mf;
lf.exports = Ni;
var d = lf.exports,
  Ml = {},
  yf = { exports: {} },
  Ue = {},
  vf = { exports: {} },
  gf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, _) {
    var L = O.length;
    O.push(_);
    e: for (; 0 < L; ) {
      var M = (L - 1) >>> 1,
        U = O[M];
      if (0 < o(U, _)) (O[M] = _), (O[L] = U), (L = M);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var _ = O[0],
      L = O.pop();
    if (L !== _) {
      O[0] = L;
      e: for (var M = 0, U = O.length, Ae = U >>> 1; M < Ae; ) {
        var ie = 2 * (M + 1) - 1,
          te = O[ie],
          we = ie + 1,
          en = O[we];
        if (0 > o(te, L))
          we < U && 0 > o(en, te)
            ? ((O[M] = en), (O[we] = L), (M = we))
            : ((O[M] = te), (O[ie] = L), (M = ie));
        else if (we < U && 0 > o(en, L)) (O[M] = en), (O[we] = L), (M = we);
        else break e;
      }
    }
    return _;
  }
  function o(O, _) {
    var L = O.sortIndex - _.sortIndex;
    return L !== 0 ? L : O.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    m = 3,
    x = !1,
    g = !1,
    w = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(O) {
    for (var _ = n(u); _ !== null; ) {
      if (_.callback === null) r(u);
      else if (_.startTime <= O)
        r(u), (_.sortIndex = _.expirationTime), t(a, _);
      else break;
      _ = n(u);
    }
  }
  function E(O) {
    if (((w = !1), v(O), !g))
      if (n(a) !== null) (g = !0), be(k);
      else {
        var _ = n(u);
        _ !== null && G(E, _.startTime - O);
      }
  }
  function k(O, _) {
    (g = !1), w && ((w = !1), h(j), (j = -1)), (x = !0);
    var L = m;
    try {
      for (
        v(_), f = n(a);
        f !== null && (!(f.expirationTime > _) || (O && !ae()));

      ) {
        var M = f.callback;
        if (typeof M == "function") {
          (f.callback = null), (m = f.priorityLevel);
          var U = M(f.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof U == "function" ? (f.callback = U) : f === n(a) && r(a),
            v(_);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var Ae = !0;
      else {
        var ie = n(u);
        ie !== null && G(E, ie.startTime - _), (Ae = !1);
      }
      return Ae;
    } finally {
      (f = null), (m = L), (x = !1);
    }
  }
  var N = !1,
    T = null,
    j = -1,
    z = 5,
    A = -1;
  function ae() {
    return !(e.unstable_now() - A < z);
  }
  function qe() {
    if (T !== null) {
      var O = e.unstable_now();
      A = O;
      var _ = !0;
      try {
        _ = T(!0, O);
      } finally {
        _ ? Le() : ((N = !1), (T = null));
      }
    } else N = !1;
  }
  var Le;
  if (typeof p == "function")
    Le = function () {
      p(qe);
    };
  else if (typeof MessageChannel < "u") {
    var ct = new MessageChannel(),
      Tt = ct.port2;
    (ct.port1.onmessage = qe),
      (Le = function () {
        Tt.postMessage(null);
      });
  } else
    Le = function () {
      S(qe, 0);
    };
  function be(O) {
    (T = O), N || ((N = !0), Le());
  }
  function G(O, _) {
    j = S(function () {
      O(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || x || ((g = !0), be(k));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (z = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (O) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = m;
      }
      var L = m;
      m = _;
      try {
        return O();
      } finally {
        m = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, _) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var L = m;
      m = O;
      try {
        return _();
      } finally {
        m = L;
      }
    }),
    (e.unstable_scheduleCallback = function (O, _, L) {
      var M = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? M + L : M))
          : (L = M),
        O)
      ) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3;
      }
      return (
        (U = L + U),
        (O = {
          id: c++,
          callback: _,
          priorityLevel: O,
          startTime: L,
          expirationTime: U,
          sortIndex: -1,
        }),
        L > M
          ? ((O.sortIndex = L),
            t(u, O),
            n(a) === null &&
              O === n(u) &&
              (w ? (h(j), (j = -1)) : (w = !0), G(E, L - M)))
          : ((O.sortIndex = U), t(a, O), g || x || ((g = !0), be(k))),
        O
      );
    }),
    (e.unstable_shouldYield = ae),
    (e.unstable_wrapCallback = function (O) {
      var _ = m;
      return function () {
        var L = m;
        m = _;
        try {
          return O.apply(this, arguments);
        } finally {
          m = L;
        }
      };
    });
})(gf);
vf.exports = gf;
var ym = vf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wf = y,
  Me = ym;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
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
var xf = new Set(),
  Ar = {};
function xn(e, t) {
  Gn(e, t), Gn(e + "Capture", t);
}
function Gn(e, t) {
  for (Ar[e] = t, e = 0; e < t.length; e++) xf.add(t[e]);
}
var wt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ul = Object.prototype.hasOwnProperty,
  vm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  wu = {},
  xu = {};
function gm(e) {
  return Ul.call(xu, e)
    ? !0
    : Ul.call(wu, e)
    ? !1
    : vm.test(e)
    ? (xu[e] = !0)
    : ((wu[e] = !0), !1);
}
function wm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function xm(e, t, n, r) {
  if (t === null || typeof t > "u" || wm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ce(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    he[e] = new Ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  he[t] = new Ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  he[e] = new Ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  he[e] = new Ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    he[e] = new Ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  he[e] = new Ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  he[e] = new Ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  he[e] = new Ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  he[e] = new Ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var na = /[\-:]([a-z])/g;
function ra(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(na, ra);
    he[t] = new Ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(na, ra);
    he[t] = new Ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(na, ra);
  he[t] = new Ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  he[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
he.xlinkHref = new Ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  he[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function oa(e, t, n, r) {
  var o = he.hasOwnProperty(t) ? he[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (xm(t, n, o, r) && (n = null),
    r || o === null
      ? gm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var kt = wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  fo = Symbol.for("react.element"),
  On = Symbol.for("react.portal"),
  Pn = Symbol.for("react.fragment"),
  ia = Symbol.for("react.strict_mode"),
  $l = Symbol.for("react.profiler"),
  Sf = Symbol.for("react.provider"),
  Ef = Symbol.for("react.context"),
  la = Symbol.for("react.forward_ref"),
  bl = Symbol.for("react.suspense"),
  Wl = Symbol.for("react.suspense_list"),
  sa = Symbol.for("react.memo"),
  _t = Symbol.for("react.lazy"),
  Cf = Symbol.for("react.offscreen"),
  Su = Symbol.iterator;
function ur(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Su && e[Su]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Y = Object.assign,
  rl;
function wr(e) {
  if (rl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      rl = (t && t[1]) || "";
    }
  return (
    `
` +
    rl +
    e
  );
}
var ol = !1;
function il(e, t) {
  if (!e || ol) return "";
  ol = !0;
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
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          s = i.length - 1;
        1 <= l && 0 <= s && o[l] !== i[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || o[l] !== i[s])) {
                var a =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (ol = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? wr(e) : "";
}
function Sm(e) {
  switch (e.tag) {
    case 5:
      return wr(e.type);
    case 16:
      return wr("Lazy");
    case 13:
      return wr("Suspense");
    case 19:
      return wr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = il(e.type, !1)), e;
    case 11:
      return (e = il(e.type.render, !1)), e;
    case 1:
      return (e = il(e.type, !0)), e;
    default:
      return "";
  }
}
function Hl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Pn:
      return "Fragment";
    case On:
      return "Portal";
    case $l:
      return "Profiler";
    case ia:
      return "StrictMode";
    case bl:
      return "Suspense";
    case Wl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ef:
        return (e.displayName || "Context") + ".Consumer";
      case Sf:
        return (e._context.displayName || "Context") + ".Provider";
      case la:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case sa:
        return (
          (t = e.displayName || null), t !== null ? t : Hl(e.type) || "Memo"
        );
      case _t:
        (t = e._payload), (e = e._init);
        try {
          return Hl(e(t));
        } catch {}
    }
  return null;
}
function Em(e) {
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
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
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
      return Hl(t);
    case 8:
      return t === ia ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function qt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function kf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Cm(e) {
  var t = kf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function po(e) {
  e._valueTracker || (e._valueTracker = Cm(e));
}
function Nf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = kf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Wo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Vl(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Eu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = qt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Rf(e, t) {
  (t = t.checked), t != null && oa(e, "checked", t, !1);
}
function Kl(e, t) {
  Rf(e, t);
  var n = qt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ql(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ql(e, t.type, qt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Cu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ql(e, t, n) {
  (t !== "number" || Wo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var xr = Array.isArray;
function bn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + qt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Gl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ku(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (xr(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: qt(n) };
}
function Tf(e, t) {
  var n = qt(t.value),
    r = qt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Nu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function jf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ql(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? jf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ho,
  Of = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ho = ho || document.createElement("div"),
          ho.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ho.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Dr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var kr = {
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
  km = ["Webkit", "ms", "Moz", "O"];
Object.keys(kr).forEach(function (e) {
  km.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (kr[t] = kr[e]);
  });
});
function Pf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (kr.hasOwnProperty(e) && kr[e])
    ? ("" + t).trim()
    : t + "px";
}
function _f(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Pf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Nm = Y(
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
  },
);
function Xl(e, t) {
  if (t) {
    if (Nm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function Yl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var Jl = null;
function aa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Zl = null,
  Wn = null,
  Hn = null;
function Ru(e) {
  if ((e = oo(e))) {
    if (typeof Zl != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = Pi(t)), Zl(e.stateNode, e.type, t));
  }
}
function Lf(e) {
  Wn ? (Hn ? Hn.push(e) : (Hn = [e])) : (Wn = e);
}
function Af() {
  if (Wn) {
    var e = Wn,
      t = Hn;
    if (((Hn = Wn = null), Ru(e), t)) for (e = 0; e < t.length; e++) Ru(t[e]);
  }
}
function Df(e, t) {
  return e(t);
}
function If() {}
var ll = !1;
function Bf(e, t, n) {
  if (ll) return e(t, n);
  ll = !0;
  try {
    return Df(e, t, n);
  } finally {
    (ll = !1), (Wn !== null || Hn !== null) && (If(), Af());
  }
}
function Ir(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Pi(n);
  if (r === null) return null;
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
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var es = !1;
if (wt)
  try {
    var cr = {};
    Object.defineProperty(cr, "passive", {
      get: function () {
        es = !0;
      },
    }),
      window.addEventListener("test", cr, cr),
      window.removeEventListener("test", cr, cr);
  } catch {
    es = !1;
  }
function Rm(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Nr = !1,
  Ho = null,
  Vo = !1,
  ts = null,
  Tm = {
    onError: function (e) {
      (Nr = !0), (Ho = e);
    },
  };
function jm(e, t, n, r, o, i, l, s, a) {
  (Nr = !1), (Ho = null), Rm.apply(Tm, arguments);
}
function Om(e, t, n, r, o, i, l, s, a) {
  if ((jm.apply(this, arguments), Nr)) {
    if (Nr) {
      var u = Ho;
      (Nr = !1), (Ho = null);
    } else throw Error(R(198));
    Vo || ((Vo = !0), (ts = u));
  }
}
function Sn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ff(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Tu(e) {
  if (Sn(e) !== e) throw Error(R(188));
}
function Pm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Sn(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Tu(o), e;
        if (i === r) return Tu(o), t;
        i = i.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function zf(e) {
  return (e = Pm(e)), e !== null ? Mf(e) : null;
}
function Mf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Mf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Uf = Me.unstable_scheduleCallback,
  ju = Me.unstable_cancelCallback,
  _m = Me.unstable_shouldYield,
  Lm = Me.unstable_requestPaint,
  ne = Me.unstable_now,
  Am = Me.unstable_getCurrentPriorityLevel,
  ua = Me.unstable_ImmediatePriority,
  $f = Me.unstable_UserBlockingPriority,
  Ko = Me.unstable_NormalPriority,
  Dm = Me.unstable_LowPriority,
  bf = Me.unstable_IdlePriority,
  Ri = null,
  at = null;
function Im(e) {
  if (at && typeof at.onCommitFiberRoot == "function")
    try {
      at.onCommitFiberRoot(Ri, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var tt = Math.clz32 ? Math.clz32 : zm,
  Bm = Math.log,
  Fm = Math.LN2;
function zm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Bm(e) / Fm) | 0)) | 0;
}
var mo = 64,
  yo = 4194304;
function Sr(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
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
function Qo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = Sr(s)) : ((i &= l), i !== 0 && (r = Sr(i)));
  } else (l = n & ~o), l !== 0 ? (r = Sr(l)) : i !== 0 && (r = Sr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - tt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Mm(e, t) {
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
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Um(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - tt(i),
      s = 1 << l,
      a = o[l];
    a === -1
      ? (!(s & n) || s & r) && (o[l] = Mm(s, t))
      : a <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function ns(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Wf() {
  var e = mo;
  return (mo <<= 1), !(mo & 4194240) && (mo = 64), e;
}
function sl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function no(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - tt(t)),
    (e[t] = n);
}
function $m(e, t) {
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
    var o = 31 - tt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function ca(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - tt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var $ = 0;
function Hf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Vf,
  fa,
  Kf,
  Qf,
  Gf,
  rs = !1,
  vo = [],
  Ut = null,
  $t = null,
  bt = null,
  Br = new Map(),
  Fr = new Map(),
  It = [],
  bm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Ou(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ut = null;
      break;
    case "dragenter":
    case "dragleave":
      $t = null;
      break;
    case "mouseover":
    case "mouseout":
      bt = null;
      break;
    case "pointerover":
    case "pointerout":
      Br.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fr.delete(t.pointerId);
  }
}
function fr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = oo(t)), t !== null && fa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Wm(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Ut = fr(Ut, e, t, n, r, o)), !0;
    case "dragenter":
      return ($t = fr($t, e, t, n, r, o)), !0;
    case "mouseover":
      return (bt = fr(bt, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Br.set(i, fr(Br.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Fr.set(i, fr(Fr.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function qf(e) {
  var t = ln(e.target);
  if (t !== null) {
    var n = Sn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ff(n)), t !== null)) {
          (e.blockedOn = t),
            Gf(e.priority, function () {
              Kf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function _o(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = os(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Jl = r), n.target.dispatchEvent(r), (Jl = null);
    } else return (t = oo(n)), t !== null && fa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Pu(e, t, n) {
  _o(e) && n.delete(t);
}
function Hm() {
  (rs = !1),
    Ut !== null && _o(Ut) && (Ut = null),
    $t !== null && _o($t) && ($t = null),
    bt !== null && _o(bt) && (bt = null),
    Br.forEach(Pu),
    Fr.forEach(Pu);
}
function dr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    rs ||
      ((rs = !0),
      Me.unstable_scheduleCallback(Me.unstable_NormalPriority, Hm)));
}
function zr(e) {
  function t(o) {
    return dr(o, e);
  }
  if (0 < vo.length) {
    dr(vo[0], e);
    for (var n = 1; n < vo.length; n++) {
      var r = vo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ut !== null && dr(Ut, e),
      $t !== null && dr($t, e),
      bt !== null && dr(bt, e),
      Br.forEach(t),
      Fr.forEach(t),
      n = 0;
    n < It.length;
    n++
  )
    (r = It[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < It.length && ((n = It[0]), n.blockedOn === null); )
    qf(n), n.blockedOn === null && It.shift();
}
var Vn = kt.ReactCurrentBatchConfig,
  Go = !0;
function Vm(e, t, n, r) {
  var o = $,
    i = Vn.transition;
  Vn.transition = null;
  try {
    ($ = 1), da(e, t, n, r);
  } finally {
    ($ = o), (Vn.transition = i);
  }
}
function Km(e, t, n, r) {
  var o = $,
    i = Vn.transition;
  Vn.transition = null;
  try {
    ($ = 4), da(e, t, n, r);
  } finally {
    ($ = o), (Vn.transition = i);
  }
}
function da(e, t, n, r) {
  if (Go) {
    var o = os(e, t, n, r);
    if (o === null) vl(e, t, r, qo, n), Ou(e, r);
    else if (Wm(o, e, t, n, r)) r.stopPropagation();
    else if ((Ou(e, r), t & 4 && -1 < bm.indexOf(e))) {
      for (; o !== null; ) {
        var i = oo(o);
        if (
          (i !== null && Vf(i),
          (i = os(e, t, n, r)),
          i === null && vl(e, t, r, qo, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else vl(e, t, r, null, n);
  }
}
var qo = null;
function os(e, t, n, r) {
  if (((qo = null), (e = aa(r)), (e = ln(e)), e !== null))
    if (((t = Sn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ff(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (qo = e), null;
}
function Xf(e) {
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
      switch (Am()) {
        case ua:
          return 1;
        case $f:
          return 4;
        case Ko:
        case Dm:
          return 16;
        case bf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ft = null,
  pa = null,
  Lo = null;
function Yf() {
  if (Lo) return Lo;
  var e,
    t = pa,
    n = t.length,
    r,
    o = "value" in Ft ? Ft.value : Ft.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Lo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ao(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function go() {
  return !0;
}
function _u() {
  return !1;
}
function $e(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? go
        : _u),
      (this.isPropagationStopped = _u),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = go));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = go));
      },
      persist: function () {},
      isPersistent: go,
    }),
    t
  );
}
var rr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ha = $e(rr),
  ro = Y({}, rr, { view: 0, detail: 0 }),
  Qm = $e(ro),
  al,
  ul,
  pr,
  Ti = Y({}, ro, {
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
    getModifierState: ma,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== pr &&
            (pr && e.type === "mousemove"
              ? ((al = e.screenX - pr.screenX), (ul = e.screenY - pr.screenY))
              : (ul = al = 0),
            (pr = e)),
          al);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ul;
    },
  }),
  Lu = $e(Ti),
  Gm = Y({}, Ti, { dataTransfer: 0 }),
  qm = $e(Gm),
  Xm = Y({}, ro, { relatedTarget: 0 }),
  cl = $e(Xm),
  Ym = Y({}, rr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Jm = $e(Ym),
  Zm = Y({}, rr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ey = $e(Zm),
  ty = Y({}, rr, { data: 0 }),
  Au = $e(ty),
  ny = {
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
  ry = {
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
  oy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function iy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = oy[e]) ? !!t[e] : !1;
}
function ma() {
  return iy;
}
var ly = Y({}, ro, {
    key: function (e) {
      if (e.key) {
        var t = ny[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ao(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? ry[e.keyCode] || "Unidentified"
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
    getModifierState: ma,
    charCode: function (e) {
      return e.type === "keypress" ? Ao(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ao(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  sy = $e(ly),
  ay = Y({}, Ti, {
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
  }),
  Du = $e(ay),
  uy = Y({}, ro, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ma,
  }),
  cy = $e(uy),
  fy = Y({}, rr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dy = $e(fy),
  py = Y({}, Ti, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  hy = $e(py),
  my = [9, 13, 27, 32],
  ya = wt && "CompositionEvent" in window,
  Rr = null;
wt && "documentMode" in document && (Rr = document.documentMode);
var yy = wt && "TextEvent" in window && !Rr,
  Jf = wt && (!ya || (Rr && 8 < Rr && 11 >= Rr)),
  Iu = " ",
  Bu = !1;
function Zf(e, t) {
  switch (e) {
    case "keyup":
      return my.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ed(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var _n = !1;
function vy(e, t) {
  switch (e) {
    case "compositionend":
      return ed(t);
    case "keypress":
      return t.which !== 32 ? null : ((Bu = !0), Iu);
    case "textInput":
      return (e = t.data), e === Iu && Bu ? null : e;
    default:
      return null;
  }
}
function gy(e, t) {
  if (_n)
    return e === "compositionend" || (!ya && Zf(e, t))
      ? ((e = Yf()), (Lo = pa = Ft = null), (_n = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Jf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var wy = {
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
function Fu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!wy[e.type] : t === "textarea";
}
function td(e, t, n, r) {
  Lf(r),
    (t = Xo(t, "onChange")),
    0 < t.length &&
      ((n = new ha("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Tr = null,
  Mr = null;
function xy(e) {
  dd(e, 0);
}
function ji(e) {
  var t = Dn(e);
  if (Nf(t)) return e;
}
function Sy(e, t) {
  if (e === "change") return t;
}
var nd = !1;
if (wt) {
  var fl;
  if (wt) {
    var dl = "oninput" in document;
    if (!dl) {
      var zu = document.createElement("div");
      zu.setAttribute("oninput", "return;"),
        (dl = typeof zu.oninput == "function");
    }
    fl = dl;
  } else fl = !1;
  nd = fl && (!document.documentMode || 9 < document.documentMode);
}
function Mu() {
  Tr && (Tr.detachEvent("onpropertychange", rd), (Mr = Tr = null));
}
function rd(e) {
  if (e.propertyName === "value" && ji(Mr)) {
    var t = [];
    td(t, Mr, e, aa(e)), Bf(xy, t);
  }
}
function Ey(e, t, n) {
  e === "focusin"
    ? (Mu(), (Tr = t), (Mr = n), Tr.attachEvent("onpropertychange", rd))
    : e === "focusout" && Mu();
}
function Cy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ji(Mr);
}
function ky(e, t) {
  if (e === "click") return ji(t);
}
function Ny(e, t) {
  if (e === "input" || e === "change") return ji(t);
}
function Ry(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var rt = typeof Object.is == "function" ? Object.is : Ry;
function Ur(e, t) {
  if (rt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ul.call(t, o) || !rt(e[o], t[o])) return !1;
  }
  return !0;
}
function Uu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function $u(e, t) {
  var n = Uu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Uu(n);
  }
}
function od(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? od(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function id() {
  for (var e = window, t = Wo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Wo(e.document);
  }
  return t;
}
function va(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Ty(e) {
  var t = id(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    od(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && va(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = $u(n, i));
        var l = $u(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var jy = wt && "documentMode" in document && 11 >= document.documentMode,
  Ln = null,
  is = null,
  jr = null,
  ls = !1;
function bu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ls ||
    Ln == null ||
    Ln !== Wo(r) ||
    ((r = Ln),
    "selectionStart" in r && va(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (jr && Ur(jr, r)) ||
      ((jr = r),
      (r = Xo(is, "onSelect")),
      0 < r.length &&
        ((t = new ha("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ln))));
}
function wo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var An = {
    animationend: wo("Animation", "AnimationEnd"),
    animationiteration: wo("Animation", "AnimationIteration"),
    animationstart: wo("Animation", "AnimationStart"),
    transitionend: wo("Transition", "TransitionEnd"),
  },
  pl = {},
  ld = {};
wt &&
  ((ld = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete An.animationend.animation,
    delete An.animationiteration.animation,
    delete An.animationstart.animation),
  "TransitionEvent" in window || delete An.transitionend.transition);
function Oi(e) {
  if (pl[e]) return pl[e];
  if (!An[e]) return e;
  var t = An[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ld) return (pl[e] = t[n]);
  return e;
}
var sd = Oi("animationend"),
  ad = Oi("animationiteration"),
  ud = Oi("animationstart"),
  cd = Oi("transitionend"),
  fd = new Map(),
  Wu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Yt(e, t) {
  fd.set(e, t), xn(t, [e]);
}
for (var hl = 0; hl < Wu.length; hl++) {
  var ml = Wu[hl],
    Oy = ml.toLowerCase(),
    Py = ml[0].toUpperCase() + ml.slice(1);
  Yt(Oy, "on" + Py);
}
Yt(sd, "onAnimationEnd");
Yt(ad, "onAnimationIteration");
Yt(ud, "onAnimationStart");
Yt("dblclick", "onDoubleClick");
Yt("focusin", "onFocus");
Yt("focusout", "onBlur");
Yt(cd, "onTransitionEnd");
Gn("onMouseEnter", ["mouseout", "mouseover"]);
Gn("onMouseLeave", ["mouseout", "mouseover"]);
Gn("onPointerEnter", ["pointerout", "pointerover"]);
Gn("onPointerLeave", ["pointerout", "pointerover"]);
xn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
xn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
xn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
xn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
xn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
xn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Er =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  _y = new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));
function Hu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Om(r, t, void 0, e), (e.currentTarget = null);
}
function dd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== i && o.isPropagationStopped())) break e;
          Hu(o, s, u), (i = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          Hu(o, s, u), (i = a);
        }
    }
  }
  if (Vo) throw ((e = ts), (Vo = !1), (ts = null), e);
}
function V(e, t) {
  var n = t[fs];
  n === void 0 && (n = t[fs] = new Set());
  var r = e + "__bubble";
  n.has(r) || (pd(t, e, 2, !1), n.add(r));
}
function yl(e, t, n) {
  var r = 0;
  t && (r |= 4), pd(n, e, r, t);
}
var xo = "_reactListening" + Math.random().toString(36).slice(2);
function $r(e) {
  if (!e[xo]) {
    (e[xo] = !0),
      xf.forEach(function (n) {
        n !== "selectionchange" && (_y.has(n) || yl(n, !1, e), yl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xo] || ((t[xo] = !0), yl("selectionchange", !1, t));
  }
}
function pd(e, t, n, r) {
  switch (Xf(t)) {
    case 1:
      var o = Vm;
      break;
    case 4:
      o = Km;
      break;
    default:
      o = da;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !es ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function vl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = ln(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = i = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Bf(function () {
    var u = i,
      c = aa(n),
      f = [];
    e: {
      var m = fd.get(e);
      if (m !== void 0) {
        var x = ha,
          g = e;
        switch (e) {
          case "keypress":
            if (Ao(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = sy;
            break;
          case "focusin":
            (g = "focus"), (x = cl);
            break;
          case "focusout":
            (g = "blur"), (x = cl);
            break;
          case "beforeblur":
          case "afterblur":
            x = cl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Lu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = qm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = cy;
            break;
          case sd:
          case ad:
          case ud:
            x = Jm;
            break;
          case cd:
            x = dy;
            break;
          case "scroll":
            x = Qm;
            break;
          case "wheel":
            x = hy;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = ey;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Du;
        }
        var w = (t & 4) !== 0,
          S = !w && e === "scroll",
          h = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var p = u, v; p !== null; ) {
          v = p;
          var E = v.stateNode;
          if (
            (v.tag === 5 &&
              E !== null &&
              ((v = E),
              h !== null && ((E = Ir(p, h)), E != null && w.push(br(p, E, v)))),
            S)
          )
            break;
          p = p.return;
        }
        0 < w.length &&
          ((m = new x(m, g, null, n, c)), f.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Jl &&
            (g = n.relatedTarget || n.fromElement) &&
            (ln(g) || g[xt]))
        )
          break e;
        if (
          (x || m) &&
          ((m =
            c.window === c
              ? c
              : (m = c.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          x
            ? ((g = n.relatedTarget || n.toElement),
              (x = u),
              (g = g ? ln(g) : null),
              g !== null &&
                ((S = Sn(g)), g !== S || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((x = null), (g = u)),
          x !== g)
        ) {
          if (
            ((w = Lu),
            (E = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Du),
              (E = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (S = x == null ? m : Dn(x)),
            (v = g == null ? m : Dn(g)),
            (m = new w(E, p + "leave", x, n, c)),
            (m.target = S),
            (m.relatedTarget = v),
            (E = null),
            ln(c) === u &&
              ((w = new w(h, p + "enter", g, n, c)),
              (w.target = v),
              (w.relatedTarget = S),
              (E = w)),
            (S = E),
            x && g)
          )
            t: {
              for (w = x, h = g, p = 0, v = w; v; v = Nn(v)) p++;
              for (v = 0, E = h; E; E = Nn(E)) v++;
              for (; 0 < p - v; ) (w = Nn(w)), p--;
              for (; 0 < v - p; ) (h = Nn(h)), v--;
              for (; p--; ) {
                if (w === h || (h !== null && w === h.alternate)) break t;
                (w = Nn(w)), (h = Nn(h));
              }
              w = null;
            }
          else w = null;
          x !== null && Vu(f, m, x, w, !1),
            g !== null && S !== null && Vu(f, S, g, w, !0);
        }
      }
      e: {
        if (
          ((m = u ? Dn(u) : window),
          (x = m.nodeName && m.nodeName.toLowerCase()),
          x === "select" || (x === "input" && m.type === "file"))
        )
          var k = Sy;
        else if (Fu(m))
          if (nd) k = Ny;
          else {
            k = Cy;
            var N = Ey;
          }
        else
          (x = m.nodeName) &&
            x.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (k = ky);
        if (k && (k = k(e, u))) {
          td(f, k, n, c);
          break e;
        }
        N && N(e, m, u),
          e === "focusout" &&
            (N = m._wrapperState) &&
            N.controlled &&
            m.type === "number" &&
            Ql(m, "number", m.value);
      }
      switch (((N = u ? Dn(u) : window), e)) {
        case "focusin":
          (Fu(N) || N.contentEditable === "true") &&
            ((Ln = N), (is = u), (jr = null));
          break;
        case "focusout":
          jr = is = Ln = null;
          break;
        case "mousedown":
          ls = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ls = !1), bu(f, n, c);
          break;
        case "selectionchange":
          if (jy) break;
        case "keydown":
        case "keyup":
          bu(f, n, c);
      }
      var T;
      if (ya)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        _n
          ? Zf(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (Jf &&
          n.locale !== "ko" &&
          (_n || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && _n && (T = Yf())
            : ((Ft = c),
              (pa = "value" in Ft ? Ft.value : Ft.textContent),
              (_n = !0))),
        (N = Xo(u, j)),
        0 < N.length &&
          ((j = new Au(j, e, null, n, c)),
          f.push({ event: j, listeners: N }),
          T ? (j.data = T) : ((T = ed(n)), T !== null && (j.data = T)))),
        (T = yy ? vy(e, n) : gy(e, n)) &&
          ((u = Xo(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Au("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = T)));
    }
    dd(f, t);
  });
}
function br(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Ir(e, n)),
      i != null && r.unshift(br(e, i, o)),
      (i = Ir(e, t)),
      i != null && r.push(br(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Nn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Vu(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((a = Ir(n, i)), a != null && l.unshift(br(n, a, s)))
        : o || ((a = Ir(n, i)), a != null && l.push(br(n, a, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Ly = /\r\n?/g,
  Ay = /\u0000|\uFFFD/g;
function Ku(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ly,
      `
`,
    )
    .replace(Ay, "");
}
function So(e, t, n) {
  if (((t = Ku(t)), Ku(e) !== t && n)) throw Error(R(425));
}
function Yo() {}
var ss = null,
  as = null;
function us(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var cs = typeof setTimeout == "function" ? setTimeout : void 0,
  Dy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Qu = typeof Promise == "function" ? Promise : void 0,
  Iy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Qu < "u"
      ? function (e) {
          return Qu.resolve(null).then(e).catch(By);
        }
      : cs;
function By(e) {
  setTimeout(function () {
    throw e;
  });
}
function gl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), zr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  zr(t);
}
function Wt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Gu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var or = Math.random().toString(36).slice(2),
  st = "__reactFiber$" + or,
  Wr = "__reactProps$" + or,
  xt = "__reactContainer$" + or,
  fs = "__reactEvents$" + or,
  Fy = "__reactListeners$" + or,
  zy = "__reactHandles$" + or;
function ln(e) {
  var t = e[st];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[xt] || n[st])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Gu(e); e !== null; ) {
          if ((n = e[st])) return n;
          e = Gu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function oo(e) {
  return (
    (e = e[st] || e[xt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Dn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Pi(e) {
  return e[Wr] || null;
}
var ds = [],
  In = -1;
function Jt(e) {
  return { current: e };
}
function K(e) {
  0 > In || ((e.current = ds[In]), (ds[In] = null), In--);
}
function W(e, t) {
  In++, (ds[In] = e.current), (e.current = t);
}
var Xt = {},
  ge = Jt(Xt),
  Re = Jt(!1),
  pn = Xt;
function qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Xt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Te(e) {
  return (e = e.childContextTypes), e != null;
}
function Jo() {
  K(Re), K(ge);
}
function qu(e, t, n) {
  if (ge.current !== Xt) throw Error(R(168));
  W(ge, t), W(Re, n);
}
function hd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(R(108, Em(e) || "Unknown", o));
  return Y({}, n, r);
}
function Zo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Xt),
    (pn = ge.current),
    W(ge, e),
    W(Re, Re.current),
    !0
  );
}
function Xu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = hd(e, t, pn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      K(Re),
      K(ge),
      W(ge, e))
    : K(Re),
    W(Re, n);
}
var dt = null,
  _i = !1,
  wl = !1;
function md(e) {
  dt === null ? (dt = [e]) : dt.push(e);
}
function My(e) {
  (_i = !0), md(e);
}
function Zt() {
  if (!wl && dt !== null) {
    wl = !0;
    var e = 0,
      t = $;
    try {
      var n = dt;
      for ($ = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (dt = null), (_i = !1);
    } catch (o) {
      throw (dt !== null && (dt = dt.slice(e + 1)), Uf(ua, Zt), o);
    } finally {
      ($ = t), (wl = !1);
    }
  }
  return null;
}
var Bn = [],
  Fn = 0,
  ei = null,
  ti = 0,
  We = [],
  He = 0,
  hn = null,
  ht = 1,
  mt = "";
function nn(e, t) {
  (Bn[Fn++] = ti), (Bn[Fn++] = ei), (ei = e), (ti = t);
}
function yd(e, t, n) {
  (We[He++] = ht), (We[He++] = mt), (We[He++] = hn), (hn = e);
  var r = ht;
  e = mt;
  var o = 32 - tt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - tt(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (ht = (1 << (32 - tt(t) + o)) | (n << o) | r),
      (mt = i + e);
  } else (ht = (1 << i) | (n << o) | r), (mt = e);
}
function ga(e) {
  e.return !== null && (nn(e, 1), yd(e, 1, 0));
}
function wa(e) {
  for (; e === ei; )
    (ei = Bn[--Fn]), (Bn[Fn] = null), (ti = Bn[--Fn]), (Bn[Fn] = null);
  for (; e === hn; )
    (hn = We[--He]),
      (We[He] = null),
      (mt = We[--He]),
      (We[He] = null),
      (ht = We[--He]),
      (We[He] = null);
}
var Fe = null,
  Be = null,
  Q = !1,
  Ze = null;
function vd(e, t) {
  var n = Ve(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Yu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Fe = e), (Be = Wt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Fe = e), (Be = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = hn !== null ? { id: ht, overflow: mt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ve(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Fe = e),
            (Be = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ps(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function hs(e) {
  if (Q) {
    var t = Be;
    if (t) {
      var n = t;
      if (!Yu(e, t)) {
        if (ps(e)) throw Error(R(418));
        t = Wt(n.nextSibling);
        var r = Fe;
        t && Yu(e, t)
          ? vd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Q = !1), (Fe = e));
      }
    } else {
      if (ps(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (Q = !1), (Fe = e);
    }
  }
}
function Ju(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Fe = e;
}
function Eo(e) {
  if (e !== Fe) return !1;
  if (!Q) return Ju(e), (Q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !us(e.type, e.memoizedProps))),
    t && (t = Be))
  ) {
    if (ps(e)) throw (gd(), Error(R(418)));
    for (; t; ) vd(e, t), (t = Wt(t.nextSibling));
  }
  if ((Ju(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Be = Wt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Be = null;
    }
  } else Be = Fe ? Wt(e.stateNode.nextSibling) : null;
  return !0;
}
function gd() {
  for (var e = Be; e; ) e = Wt(e.nextSibling);
}
function Xn() {
  (Be = Fe = null), (Q = !1);
}
function xa(e) {
  Ze === null ? (Ze = [e]) : Ze.push(e);
}
var Uy = kt.ReactCurrentBatchConfig;
function Ye(e, t) {
  if (e && e.defaultProps) {
    (t = Y({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ni = Jt(null),
  ri = null,
  zn = null,
  Sa = null;
function Ea() {
  Sa = zn = ri = null;
}
function Ca(e) {
  var t = ni.current;
  K(ni), (e._currentValue = t);
}
function ms(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Kn(e, t) {
  (ri = e),
    (Sa = zn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ne = !0), (e.firstContext = null));
}
function Qe(e) {
  var t = e._currentValue;
  if (Sa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), zn === null)) {
      if (ri === null) throw Error(R(308));
      (zn = e), (ri.dependencies = { lanes: 0, firstContext: e });
    } else zn = zn.next = e;
  return t;
}
var sn = null;
function ka(e) {
  sn === null ? (sn = [e]) : sn.push(e);
}
function wd(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), ka(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    St(e, r)
  );
}
function St(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Lt = !1;
function Na(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function xd(e, t) {
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
function yt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ht(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      St(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), ka(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    St(e, n)
  );
}
function Do(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ca(e, n);
  }
}
function Zu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function oi(e, t, n, r) {
  var o = e.updateQueue;
  Lt = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), l === null ? (i = u) : (l.next = u), (l = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== l &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var f = o.baseState;
    (l = 0), (c = u = a = null), (s = i);
    do {
      var m = s.lane,
        x = s.eventTime;
      if ((r & m) === m) {
        c !== null &&
          (c = c.next =
            {
              eventTime: x,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var g = e,
            w = s;
          switch (((m = t), (x = n), w.tag)) {
            case 1:
              if (((g = w.payload), typeof g == "function")) {
                f = g.call(x, f, m);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = w.payload),
                (m = typeof g == "function" ? g.call(x, f, m) : g),
                m == null)
              )
                break e;
              f = Y({}, f, m);
              break e;
            case 2:
              Lt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [s]) : m.push(s));
      } else
        (x = {
          eventTime: x,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = x), (a = f)) : (c = c.next = x),
          (l |= m);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (m = s),
          (s = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = f),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (yn |= l), (e.lanes = l), (e.memoizedState = f);
  }
}
function ec(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(R(191, o));
        o.call(r);
      }
    }
}
var Sd = new wf.Component().refs;
function ys(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Li = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Sn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      o = Kt(e),
      i = yt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Ht(e, i, o)),
      t !== null && (nt(t, e, o, r), Do(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      o = Kt(e),
      i = yt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Ht(e, i, o)),
      t !== null && (nt(t, e, o, r), Do(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Se(),
      r = Kt(e),
      o = yt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Ht(e, o, r)),
      t !== null && (nt(t, e, r, n), Do(t, e, r));
  },
};
function tc(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ur(n, r) || !Ur(o, i)
      : !0
  );
}
function Ed(e, t, n) {
  var r = !1,
    o = Xt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Qe(i))
      : ((o = Te(t) ? pn : ge.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? qn(e, o) : Xt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Li),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function nc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Li.enqueueReplaceState(t, t.state, null);
}
function vs(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Sd), Na(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Qe(i))
    : ((i = Te(t) ? pn : ge.current), (o.context = qn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (ys(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Li.enqueueReplaceState(o, o.state, null),
      oi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function hr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = o.refs;
            s === Sd && (s = o.refs = {}),
              l === null ? delete s[i] : (s[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Co(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function rc(e) {
  var t = e._init;
  return t(e._payload);
}
function Cd(e) {
  function t(h, p) {
    if (e) {
      var v = h.deletions;
      v === null ? ((h.deletions = [p]), (h.flags |= 16)) : v.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function o(h, p) {
    return (h = Qt(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, p, v) {
    return (
      (h.index = v),
      e
        ? ((v = h.alternate),
          v !== null
            ? ((v = v.index), v < p ? ((h.flags |= 2), p) : v)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, p, v, E) {
    return p === null || p.tag !== 6
      ? ((p = Rl(v, h.mode, E)), (p.return = h), p)
      : ((p = o(p, v)), (p.return = h), p);
  }
  function a(h, p, v, E) {
    var k = v.type;
    return k === Pn
      ? c(h, p, v.props.children, E, v.key)
      : p !== null &&
        (p.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === _t &&
            rc(k) === p.type))
      ? ((E = o(p, v.props)), (E.ref = hr(h, p, v)), (E.return = h), E)
      : ((E = Uo(v.type, v.key, v.props, null, h.mode, E)),
        (E.ref = hr(h, p, v)),
        (E.return = h),
        E);
  }
  function u(h, p, v, E) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== v.containerInfo ||
      p.stateNode.implementation !== v.implementation
      ? ((p = Tl(v, h.mode, E)), (p.return = h), p)
      : ((p = o(p, v.children || [])), (p.return = h), p);
  }
  function c(h, p, v, E, k) {
    return p === null || p.tag !== 7
      ? ((p = fn(v, h.mode, E, k)), (p.return = h), p)
      : ((p = o(p, v)), (p.return = h), p);
  }
  function f(h, p, v) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Rl("" + p, h.mode, v)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case fo:
          return (
            (v = Uo(p.type, p.key, p.props, null, h.mode, v)),
            (v.ref = hr(h, null, p)),
            (v.return = h),
            v
          );
        case On:
          return (p = Tl(p, h.mode, v)), (p.return = h), p;
        case _t:
          var E = p._init;
          return f(h, E(p._payload), v);
      }
      if (xr(p) || ur(p))
        return (p = fn(p, h.mode, v, null)), (p.return = h), p;
      Co(h, p);
    }
    return null;
  }
  function m(h, p, v, E) {
    var k = p !== null ? p.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return k !== null ? null : s(h, p, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case fo:
          return v.key === k ? a(h, p, v, E) : null;
        case On:
          return v.key === k ? u(h, p, v, E) : null;
        case _t:
          return (k = v._init), m(h, p, k(v._payload), E);
      }
      if (xr(v) || ur(v)) return k !== null ? null : c(h, p, v, E, null);
      Co(h, v);
    }
    return null;
  }
  function x(h, p, v, E, k) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (h = h.get(v) || null), s(p, h, "" + E, k);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case fo:
          return (h = h.get(E.key === null ? v : E.key) || null), a(p, h, E, k);
        case On:
          return (h = h.get(E.key === null ? v : E.key) || null), u(p, h, E, k);
        case _t:
          var N = E._init;
          return x(h, p, v, N(E._payload), k);
      }
      if (xr(E) || ur(E)) return (h = h.get(v) || null), c(p, h, E, k, null);
      Co(p, E);
    }
    return null;
  }
  function g(h, p, v, E) {
    for (
      var k = null, N = null, T = p, j = (p = 0), z = null;
      T !== null && j < v.length;
      j++
    ) {
      T.index > j ? ((z = T), (T = null)) : (z = T.sibling);
      var A = m(h, T, v[j], E);
      if (A === null) {
        T === null && (T = z);
        break;
      }
      e && T && A.alternate === null && t(h, T),
        (p = i(A, p, j)),
        N === null ? (k = A) : (N.sibling = A),
        (N = A),
        (T = z);
    }
    if (j === v.length) return n(h, T), Q && nn(h, j), k;
    if (T === null) {
      for (; j < v.length; j++)
        (T = f(h, v[j], E)),
          T !== null &&
            ((p = i(T, p, j)), N === null ? (k = T) : (N.sibling = T), (N = T));
      return Q && nn(h, j), k;
    }
    for (T = r(h, T); j < v.length; j++)
      (z = x(T, h, j, v[j], E)),
        z !== null &&
          (e && z.alternate !== null && T.delete(z.key === null ? j : z.key),
          (p = i(z, p, j)),
          N === null ? (k = z) : (N.sibling = z),
          (N = z));
    return (
      e &&
        T.forEach(function (ae) {
          return t(h, ae);
        }),
      Q && nn(h, j),
      k
    );
  }
  function w(h, p, v, E) {
    var k = ur(v);
    if (typeof k != "function") throw Error(R(150));
    if (((v = k.call(v)), v == null)) throw Error(R(151));
    for (
      var N = (k = null), T = p, j = (p = 0), z = null, A = v.next();
      T !== null && !A.done;
      j++, A = v.next()
    ) {
      T.index > j ? ((z = T), (T = null)) : (z = T.sibling);
      var ae = m(h, T, A.value, E);
      if (ae === null) {
        T === null && (T = z);
        break;
      }
      e && T && ae.alternate === null && t(h, T),
        (p = i(ae, p, j)),
        N === null ? (k = ae) : (N.sibling = ae),
        (N = ae),
        (T = z);
    }
    if (A.done) return n(h, T), Q && nn(h, j), k;
    if (T === null) {
      for (; !A.done; j++, A = v.next())
        (A = f(h, A.value, E)),
          A !== null &&
            ((p = i(A, p, j)), N === null ? (k = A) : (N.sibling = A), (N = A));
      return Q && nn(h, j), k;
    }
    for (T = r(h, T); !A.done; j++, A = v.next())
      (A = x(T, h, j, A.value, E)),
        A !== null &&
          (e && A.alternate !== null && T.delete(A.key === null ? j : A.key),
          (p = i(A, p, j)),
          N === null ? (k = A) : (N.sibling = A),
          (N = A));
    return (
      e &&
        T.forEach(function (qe) {
          return t(h, qe);
        }),
      Q && nn(h, j),
      k
    );
  }
  function S(h, p, v, E) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Pn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case fo:
          e: {
            for (var k = v.key, N = p; N !== null; ) {
              if (N.key === k) {
                if (((k = v.type), k === Pn)) {
                  if (N.tag === 7) {
                    n(h, N.sibling),
                      (p = o(N, v.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  N.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === _t &&
                    rc(k) === N.type)
                ) {
                  n(h, N.sibling),
                    (p = o(N, v.props)),
                    (p.ref = hr(h, N, v)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, N);
                break;
              } else t(h, N);
              N = N.sibling;
            }
            v.type === Pn
              ? ((p = fn(v.props.children, h.mode, E, v.key)),
                (p.return = h),
                (h = p))
              : ((E = Uo(v.type, v.key, v.props, null, h.mode, E)),
                (E.ref = hr(h, p, v)),
                (E.return = h),
                (h = E));
          }
          return l(h);
        case On:
          e: {
            for (N = v.key; p !== null; ) {
              if (p.key === N)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === v.containerInfo &&
                  p.stateNode.implementation === v.implementation
                ) {
                  n(h, p.sibling),
                    (p = o(p, v.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = Tl(v, h.mode, E)), (p.return = h), (h = p);
          }
          return l(h);
        case _t:
          return (N = v._init), S(h, p, N(v._payload), E);
      }
      if (xr(v)) return g(h, p, v, E);
      if (ur(v)) return w(h, p, v, E);
      Co(h, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = o(p, v)), (p.return = h), (h = p))
          : (n(h, p), (p = Rl(v, h.mode, E)), (p.return = h), (h = p)),
        l(h))
      : n(h, p);
  }
  return S;
}
var Yn = Cd(!0),
  kd = Cd(!1),
  io = {},
  ut = Jt(io),
  Hr = Jt(io),
  Vr = Jt(io);
function an(e) {
  if (e === io) throw Error(R(174));
  return e;
}
function Ra(e, t) {
  switch ((W(Vr, t), W(Hr, e), W(ut, io), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ql(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ql(t, e));
  }
  K(ut), W(ut, t);
}
function Jn() {
  K(ut), K(Hr), K(Vr);
}
function Nd(e) {
  an(Vr.current);
  var t = an(ut.current),
    n = ql(t, e.type);
  t !== n && (W(Hr, e), W(ut, n));
}
function Ta(e) {
  Hr.current === e && (K(ut), K(Hr));
}
var q = Jt(0);
function ii(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var xl = [];
function ja() {
  for (var e = 0; e < xl.length; e++)
    xl[e]._workInProgressVersionPrimary = null;
  xl.length = 0;
}
var Io = kt.ReactCurrentDispatcher,
  Sl = kt.ReactCurrentBatchConfig,
  mn = 0,
  X = null,
  le = null,
  ue = null,
  li = !1,
  Or = !1,
  Kr = 0,
  $y = 0;
function me() {
  throw Error(R(321));
}
function Oa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!rt(e[n], t[n])) return !1;
  return !0;
}
function Pa(e, t, n, r, o, i) {
  if (
    ((mn = i),
    (X = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Io.current = e === null || e.memoizedState === null ? Vy : Ky),
    (e = n(r, o)),
    Or)
  ) {
    i = 0;
    do {
      if (((Or = !1), (Kr = 0), 25 <= i)) throw Error(R(301));
      (i += 1),
        (ue = le = null),
        (t.updateQueue = null),
        (Io.current = Qy),
        (e = n(r, o));
    } while (Or);
  }
  if (
    ((Io.current = si),
    (t = le !== null && le.next !== null),
    (mn = 0),
    (ue = le = X = null),
    (li = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function _a() {
  var e = Kr !== 0;
  return (Kr = 0), e;
}
function lt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ue === null ? (X.memoizedState = ue = e) : (ue = ue.next = e), ue;
}
function Ge() {
  if (le === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = le.next;
  var t = ue === null ? X.memoizedState : ue.next;
  if (t !== null) (ue = t), (le = e);
  else {
    if (e === null) throw Error(R(310));
    (le = e),
      (e = {
        memoizedState: le.memoizedState,
        baseState: le.baseState,
        baseQueue: le.baseQueue,
        queue: le.queue,
        next: null,
      }),
      ue === null ? (X.memoizedState = ue = e) : (ue = ue.next = e);
  }
  return ue;
}
function Qr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function El(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = le,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (l = null),
      a = null,
      u = i;
    do {
      var c = u.lane;
      if ((mn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = f), (l = r)) : (a = a.next = f),
          (X.lanes |= c),
          (yn |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (l = r) : (a.next = s),
      rt(r, t.memoizedState) || (Ne = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (X.lanes |= i), (yn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Cl(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    rt(i, t.memoizedState) || (Ne = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Rd() {}
function Td(e, t) {
  var n = X,
    r = Ge(),
    o = t(),
    i = !rt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ne = !0)),
    (r = r.queue),
    La(Pd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ue !== null && ue.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Gr(9, Od.bind(null, n, r, o, t), void 0, null),
      fe === null)
    )
      throw Error(R(349));
    mn & 30 || jd(n, t, o);
  }
  return o;
}
function jd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Od(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), _d(t) && Ld(e);
}
function Pd(e, t, n) {
  return n(function () {
    _d(t) && Ld(e);
  });
}
function _d(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !rt(e, n);
  } catch {
    return !0;
  }
}
function Ld(e) {
  var t = St(e, 1);
  t !== null && nt(t, e, 1, -1);
}
function oc(e) {
  var t = lt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Hy.bind(null, X, e)),
    [t.memoizedState, e]
  );
}
function Gr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ad() {
  return Ge().memoizedState;
}
function Bo(e, t, n, r) {
  var o = lt();
  (X.flags |= e),
    (o.memoizedState = Gr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ai(e, t, n, r) {
  var o = Ge();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (le !== null) {
    var l = le.memoizedState;
    if (((i = l.destroy), r !== null && Oa(r, l.deps))) {
      o.memoizedState = Gr(t, n, i, r);
      return;
    }
  }
  (X.flags |= e), (o.memoizedState = Gr(1 | t, n, i, r));
}
function ic(e, t) {
  return Bo(8390656, 8, e, t);
}
function La(e, t) {
  return Ai(2048, 8, e, t);
}
function Dd(e, t) {
  return Ai(4, 2, e, t);
}
function Id(e, t) {
  return Ai(4, 4, e, t);
}
function Bd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Fd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ai(4, 4, Bd.bind(null, t, e), n)
  );
}
function Aa() {}
function zd(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Oa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Md(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Oa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ud(e, t, n) {
  return mn & 21
    ? (rt(n, t) || ((n = Wf()), (X.lanes |= n), (yn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ne = !0)), (e.memoizedState = n));
}
function by(e, t) {
  var n = $;
  ($ = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Sl.transition;
  Sl.transition = {};
  try {
    e(!1), t();
  } finally {
    ($ = n), (Sl.transition = r);
  }
}
function $d() {
  return Ge().memoizedState;
}
function Wy(e, t, n) {
  var r = Kt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    bd(e))
  )
    Wd(t, n);
  else if (((n = wd(e, t, n, r)), n !== null)) {
    var o = Se();
    nt(n, e, r, o), Hd(n, t, r);
  }
}
function Hy(e, t, n) {
  var r = Kt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (bd(e)) Wd(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), rt(s, l))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), ka(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = wd(e, t, o, r)),
      n !== null && ((o = Se()), nt(n, e, r, o), Hd(n, t, r));
  }
}
function bd(e) {
  var t = e.alternate;
  return e === X || (t !== null && t === X);
}
function Wd(e, t) {
  Or = li = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Hd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ca(e, n);
  }
}
var si = {
    readContext: Qe,
    useCallback: me,
    useContext: me,
    useEffect: me,
    useImperativeHandle: me,
    useInsertionEffect: me,
    useLayoutEffect: me,
    useMemo: me,
    useReducer: me,
    useRef: me,
    useState: me,
    useDebugValue: me,
    useDeferredValue: me,
    useTransition: me,
    useMutableSource: me,
    useSyncExternalStore: me,
    useId: me,
    unstable_isNewReconciler: !1,
  },
  Vy = {
    readContext: Qe,
    useCallback: function (e, t) {
      return (lt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Qe,
    useEffect: ic,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Bo(4194308, 4, Bd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Bo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Bo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = lt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = lt();
      return (
        (t = n !== void 0 ? n(t) : t),
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
        (e = e.dispatch = Wy.bind(null, X, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = lt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: oc,
    useDebugValue: Aa,
    useDeferredValue: function (e) {
      return (lt().memoizedState = e);
    },
    useTransition: function () {
      var e = oc(!1),
        t = e[0];
      return (e = by.bind(null, e[1])), (lt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = X,
        o = lt();
      if (Q) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), fe === null)) throw Error(R(349));
        mn & 30 || jd(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        ic(Pd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Gr(9, Od.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = lt(),
        t = fe.identifierPrefix;
      if (Q) {
        var n = mt,
          r = ht;
        (n = (r & ~(1 << (32 - tt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Kr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = $y++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Ky = {
    readContext: Qe,
    useCallback: zd,
    useContext: Qe,
    useEffect: La,
    useImperativeHandle: Fd,
    useInsertionEffect: Dd,
    useLayoutEffect: Id,
    useMemo: Md,
    useReducer: El,
    useRef: Ad,
    useState: function () {
      return El(Qr);
    },
    useDebugValue: Aa,
    useDeferredValue: function (e) {
      var t = Ge();
      return Ud(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = El(Qr)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: Rd,
    useSyncExternalStore: Td,
    useId: $d,
    unstable_isNewReconciler: !1,
  },
  Qy = {
    readContext: Qe,
    useCallback: zd,
    useContext: Qe,
    useEffect: La,
    useImperativeHandle: Fd,
    useInsertionEffect: Dd,
    useLayoutEffect: Id,
    useMemo: Md,
    useReducer: Cl,
    useRef: Ad,
    useState: function () {
      return Cl(Qr);
    },
    useDebugValue: Aa,
    useDeferredValue: function (e) {
      var t = Ge();
      return le === null ? (t.memoizedState = e) : Ud(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = Cl(Qr)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: Rd,
    useSyncExternalStore: Td,
    useId: $d,
    unstable_isNewReconciler: !1,
  };
function Zn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Sm(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function kl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function gs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Gy = typeof WeakMap == "function" ? WeakMap : Map;
function Vd(e, t, n) {
  (n = yt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ui || ((ui = !0), (js = r)), gs(e, t);
    }),
    n
  );
}
function Kd(e, t, n) {
  (n = yt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        gs(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        gs(e, t),
          typeof r != "function" &&
            (Vt === null ? (Vt = new Set([this])) : Vt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function lc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Gy();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = av.bind(null, e, t, n)), t.then(e, e));
}
function sc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ac(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = yt(-1, 1)), (t.tag = 2), Ht(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var qy = kt.ReactCurrentOwner,
  Ne = !1;
function xe(e, t, n, r) {
  t.child = e === null ? kd(t, null, n, r) : Yn(t, e.child, n, r);
}
function uc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Kn(t, o),
    (r = Pa(e, t, n, r, i, o)),
    (n = _a()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Et(e, t, o))
      : (Q && n && ga(t), (t.flags |= 1), xe(e, t, r, o), t.child)
  );
}
function cc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !$a(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Qd(e, t, i, r, o))
      : ((e = Uo(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ur), n(l, r) && e.ref === t.ref)
    )
      return Et(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Qt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Qd(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ur(i, r) && e.ref === t.ref)
      if (((Ne = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ne = !0);
      else return (t.lanes = e.lanes), Et(e, t, o);
  }
  return ws(e, t, n, r, o);
}
function Gd(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        W(Un, De),
        (De |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          W(Un, De),
          (De |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        W(Un, De),
        (De |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      W(Un, De),
      (De |= r);
  return xe(e, t, o, n), t.child;
}
function qd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ws(e, t, n, r, o) {
  var i = Te(n) ? pn : ge.current;
  return (
    (i = qn(t, i)),
    Kn(t, o),
    (n = Pa(e, t, n, r, i, o)),
    (r = _a()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Et(e, t, o))
      : (Q && r && ga(t), (t.flags |= 1), xe(e, t, n, o), t.child)
  );
}
function fc(e, t, n, r, o) {
  if (Te(n)) {
    var i = !0;
    Zo(t);
  } else i = !1;
  if ((Kn(t, o), t.stateNode === null))
    Fo(e, t), Ed(t, n, r), vs(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Qe(u))
      : ((u = Te(n) ? pn : ge.current), (u = qn(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && nc(t, l, r, u)),
      (Lt = !1);
    var m = t.memoizedState;
    (l.state = m),
      oi(t, r, l, o),
      (a = t.memoizedState),
      s !== r || m !== a || Re.current || Lt
        ? (typeof c == "function" && (ys(t, n, c, r), (a = t.memoizedState)),
          (s = Lt || tc(t, n, s, r, m, a, u))
            ? (f ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      xd(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Ye(t.type, s)),
      (l.props = u),
      (f = t.pendingProps),
      (m = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Qe(a))
        : ((a = Te(n) ? pn : ge.current), (a = qn(t, a)));
    var x = n.getDerivedStateFromProps;
    (c =
      typeof x == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== f || m !== a) && nc(t, l, r, a)),
      (Lt = !1),
      (m = t.memoizedState),
      (l.state = m),
      oi(t, r, l, o);
    var g = t.memoizedState;
    s !== f || m !== g || Re.current || Lt
      ? (typeof x == "function" && (ys(t, n, x, r), (g = t.memoizedState)),
        (u = Lt || tc(t, n, u, r, m, g, a) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, g, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, g, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (l.props = r),
        (l.state = g),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return xs(e, t, n, r, i, o);
}
function xs(e, t, n, r, o, i) {
  qd(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Xu(t, n, !1), Et(e, t, i);
  (r = t.stateNode), (qy.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Yn(t, e.child, null, i)), (t.child = Yn(t, null, s, i)))
      : xe(e, t, s, i),
    (t.memoizedState = r.state),
    o && Xu(t, n, !0),
    t.child
  );
}
function Xd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? qu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && qu(e, t.context, !1),
    Ra(e, t.containerInfo);
}
function dc(e, t, n, r, o) {
  return Xn(), xa(o), (t.flags |= 256), xe(e, t, n, r), t.child;
}
var Ss = { dehydrated: null, treeContext: null, retryLane: 0 };
function Es(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Yd(e, t, n) {
  var r = t.pendingProps,
    o = q.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    W(q, o & 1),
    e === null)
  )
    return (
      hs(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Bi(l, r, 0, null)),
              (e = fn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Es(n)),
              (t.memoizedState = Ss),
              e)
            : Da(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return Xy(e, t, l, r, s, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Qt(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = Qt(s, i)) : ((i = fn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Es(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ss),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Qt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Da(e, t) {
  return (
    (t = Bi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ko(e, t, n, r) {
  return (
    r !== null && xa(r),
    Yn(t, e.child, null, n),
    (e = Da(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Xy(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = kl(Error(R(422)))), ko(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Bi({ mode: "visible", children: r.children }, o, 0, null)),
        (i = fn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Yn(t, e.child, null, l),
        (t.child.memoizedState = Es(l)),
        (t.memoizedState = Ss),
        i);
  if (!(t.mode & 1)) return ko(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(R(419))), (r = kl(i, r, void 0)), ko(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), Ne || s)) {
    if (((r = fe), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), St(e, o), nt(r, e, o, -1));
    }
    return Ua(), (r = kl(Error(R(421)))), ko(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = uv.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Be = Wt(o.nextSibling)),
      (Fe = t),
      (Q = !0),
      (Ze = null),
      e !== null &&
        ((We[He++] = ht),
        (We[He++] = mt),
        (We[He++] = hn),
        (ht = e.id),
        (mt = e.overflow),
        (hn = t)),
      (t = Da(t, r.children)),
      (t.flags |= 4096),
      t);
}
function pc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ms(e.return, t, n);
}
function Nl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Jd(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((xe(e, t, r.children, n), (r = q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && pc(e, n, t);
        else if (e.tag === 19) pc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((W(q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && ii(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Nl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ii(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Nl(t, !0, n, null, i);
        break;
      case "together":
        Nl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Fo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Et(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (yn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Qt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Qt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Yy(e, t, n) {
  switch (t.tag) {
    case 3:
      Xd(t), Xn();
      break;
    case 5:
      Nd(t);
      break;
    case 1:
      Te(t.type) && Zo(t);
      break;
    case 4:
      Ra(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      W(ni, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (W(q, q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Yd(e, t, n)
          : (W(q, q.current & 1),
            (e = Et(e, t, n)),
            e !== null ? e.sibling : null);
      W(q, q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Jd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        W(q, q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Gd(e, t, n);
  }
  return Et(e, t, n);
}
var Zd, Cs, ep, tp;
Zd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Cs = function () {};
ep = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), an(ut.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Vl(e, o)), (r = Vl(e, r)), (i = []);
        break;
      case "select":
        (o = Y({}, o, { value: void 0 })),
          (r = Y({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Gl(e, o)), (r = Gl(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Yo);
    }
    Xl(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ar.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                s[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ar.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && V("scroll", e),
                  i || s === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
tp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function mr(e, t) {
  if (!Q)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Jy(e, t, n) {
  var r = t.pendingProps;
  switch ((wa(t), t.tag)) {
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
      return ye(t), null;
    case 1:
      return Te(t.type) && Jo(), ye(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Jn(),
        K(Re),
        K(ge),
        ja(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Eo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ze !== null && (_s(Ze), (Ze = null)))),
        Cs(e, t),
        ye(t),
        null
      );
    case 5:
      Ta(t);
      var o = an(Vr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ep(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return ye(t), null;
        }
        if (((e = an(ut.current)), Eo(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[st] = t), (r[Wr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              V("cancel", r), V("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              V("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Er.length; o++) V(Er[o], r);
              break;
            case "source":
              V("error", r);
              break;
            case "img":
            case "image":
            case "link":
              V("error", r), V("load", r);
              break;
            case "details":
              V("toggle", r);
              break;
            case "input":
              Eu(r, i), V("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                V("invalid", r);
              break;
            case "textarea":
              ku(r, i), V("invalid", r);
          }
          Xl(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      So(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      So(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : Ar.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  V("scroll", r);
            }
          switch (n) {
            case "input":
              po(r), Cu(r, i, !0);
              break;
            case "textarea":
              po(r), Nu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Yo);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = jf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[st] = t),
            (e[Wr] = r),
            Zd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Yl(n, r)), n)) {
              case "dialog":
                V("cancel", e), V("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                V("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Er.length; o++) V(Er[o], e);
                o = r;
                break;
              case "source":
                V("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                V("error", e), V("load", e), (o = r);
                break;
              case "details":
                V("toggle", e), (o = r);
                break;
              case "input":
                Eu(e, r), (o = Vl(e, r)), V("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Y({}, r, { value: void 0 })),
                  V("invalid", e);
                break;
              case "textarea":
                ku(e, r), (o = Gl(e, r)), V("invalid", e);
                break;
              default:
                o = r;
            }
            Xl(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style"
                  ? _f(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Of(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Dr(e, a)
                    : typeof a == "number" && Dr(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Ar.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && V("scroll", e)
                      : a != null && oa(e, i, a, l));
              }
            switch (n) {
              case "input":
                po(e), Cu(e, r, !1);
                break;
              case "textarea":
                po(e), Nu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + qt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? bn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      bn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Yo);
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
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ye(t), null;
    case 6:
      if (e && t.stateNode != null) tp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = an(Vr.current)), an(ut.current), Eo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[st] = t),
            (i = r.nodeValue !== n) && ((e = Fe), e !== null))
          )
            switch (e.tag) {
              case 3:
                So(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  So(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[st] = t),
            (t.stateNode = r);
      }
      return ye(t), null;
    case 13:
      if (
        (K(q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Q && Be !== null && t.mode & 1 && !(t.flags & 128))
          gd(), Xn(), (t.flags |= 98560), (i = !1);
        else if (((i = Eo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(R(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(R(317));
            i[st] = t;
          } else
            Xn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ye(t), (i = !1);
        } else Ze !== null && (_s(Ze), (Ze = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || q.current & 1 ? se === 0 && (se = 3) : Ua())),
          t.updateQueue !== null && (t.flags |= 4),
          ye(t),
          null);
    case 4:
      return (
        Jn(), Cs(e, t), e === null && $r(t.stateNode.containerInfo), ye(t), null
      );
    case 10:
      return Ca(t.type._context), ye(t), null;
    case 17:
      return Te(t.type) && Jo(), ye(t), null;
    case 19:
      if ((K(q), (i = t.memoizedState), i === null)) return ye(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) mr(i, !1);
        else {
          if (se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = ii(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    mr(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return W(q, (q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ne() > er &&
            ((t.flags |= 128), (r = !0), mr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ii(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              mr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !Q)
            )
              return ye(t), null;
          } else
            2 * ne() - i.renderingStartTime > er &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), mr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ne()),
          (t.sibling = null),
          (n = q.current),
          W(q, r ? (n & 1) | 2 : n & 1),
          t)
        : (ye(t), null);
    case 22:
    case 23:
      return (
        Ma(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? De & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ye(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function Zy(e, t) {
  switch ((wa(t), t.tag)) {
    case 1:
      return (
        Te(t.type) && Jo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Jn(),
        K(Re),
        K(ge),
        ja(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ta(t), null;
    case 13:
      if ((K(q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(R(340));
        Xn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return K(q), null;
    case 4:
      return Jn(), null;
    case 10:
      return Ca(t.type._context), null;
    case 22:
    case 23:
      return Ma(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var No = !1,
  ve = !1,
  ev = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function Mn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function ks(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var hc = !1;
function tv(e, t) {
  if (((ss = Go), (e = id()), va(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            m = null;
          t: for (;;) {
            for (
              var x;
              f !== n || (o !== 0 && f.nodeType !== 3) || (s = l + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (a = l + r),
                f.nodeType === 3 && (l += f.nodeValue.length),
                (x = f.firstChild) !== null;

            )
              (m = f), (f = x);
            for (;;) {
              if (f === e) break t;
              if (
                (m === n && ++u === o && (s = l),
                m === i && ++c === r && (a = l),
                (x = f.nextSibling) !== null)
              )
                break;
              (f = m), (m = f.parentNode);
            }
            f = x;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (as = { focusedElem: e, selectionRange: n }, Go = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (P = e);
    else
      for (; P !== null; ) {
        t = P;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var w = g.memoizedProps,
                    S = g.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Ye(t.type, w),
                      S,
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (E) {
          Z(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (P = e);
          break;
        }
        P = t.return;
      }
  return (g = hc), (hc = !1), g;
}
function Pr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && ks(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Di(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
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
function Ns(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function np(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), np(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[st], delete t[Wr], delete t[fs], delete t[Fy], delete t[zy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function rp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function mc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || rp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Rs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Yo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Rs(e, t, n), e = e.sibling; e !== null; ) Rs(e, t, n), (e = e.sibling);
}
function Ts(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ts(e, t, n), e = e.sibling; e !== null; ) Ts(e, t, n), (e = e.sibling);
}
var de = null,
  Je = !1;
function jt(e, t, n) {
  for (n = n.child; n !== null; ) op(e, t, n), (n = n.sibling);
}
function op(e, t, n) {
  if (at && typeof at.onCommitFiberUnmount == "function")
    try {
      at.onCommitFiberUnmount(Ri, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ve || Mn(n, t);
    case 6:
      var r = de,
        o = Je;
      (de = null),
        jt(e, t, n),
        (de = r),
        (Je = o),
        de !== null &&
          (Je
            ? ((e = de),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : de.removeChild(n.stateNode));
      break;
    case 18:
      de !== null &&
        (Je
          ? ((e = de),
            (n = n.stateNode),
            e.nodeType === 8
              ? gl(e.parentNode, n)
              : e.nodeType === 1 && gl(e, n),
            zr(e))
          : gl(de, n.stateNode));
      break;
    case 4:
      (r = de),
        (o = Je),
        (de = n.stateNode.containerInfo),
        (Je = !0),
        jt(e, t, n),
        (de = r),
        (Je = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ve &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && ks(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      jt(e, t, n);
      break;
    case 1:
      if (
        !ve &&
        (Mn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Z(n, t, s);
        }
      jt(e, t, n);
      break;
    case 21:
      jt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ve = (r = ve) || n.memoizedState !== null), jt(e, t, n), (ve = r))
        : jt(e, t, n);
      break;
    default:
      jt(e, t, n);
  }
}
function yc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ev()),
      t.forEach(function (r) {
        var o = cv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Xe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (de = s.stateNode), (Je = !1);
              break e;
            case 3:
              (de = s.stateNode.containerInfo), (Je = !0);
              break e;
            case 4:
              (de = s.stateNode.containerInfo), (Je = !0);
              break e;
          }
          s = s.return;
        }
        if (de === null) throw Error(R(160));
        op(i, l, o), (de = null), (Je = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        Z(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ip(t, e), (t = t.sibling);
}
function ip(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Xe(t, e), it(e), r & 4)) {
        try {
          Pr(3, e, e.return), Di(3, e);
        } catch (w) {
          Z(e, e.return, w);
        }
        try {
          Pr(5, e, e.return);
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      break;
    case 1:
      Xe(t, e), it(e), r & 512 && n !== null && Mn(n, n.return);
      break;
    case 5:
      if (
        (Xe(t, e),
        it(e),
        r & 512 && n !== null && Mn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Dr(o, "");
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Rf(o, i),
              Yl(s, l);
            var u = Yl(s, i);
            for (l = 0; l < a.length; l += 2) {
              var c = a[l],
                f = a[l + 1];
              c === "style"
                ? _f(o, f)
                : c === "dangerouslySetInnerHTML"
                ? Of(o, f)
                : c === "children"
                ? Dr(o, f)
                : oa(o, c, f, u);
            }
            switch (s) {
              case "input":
                Kl(o, i);
                break;
              case "textarea":
                Tf(o, i);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? bn(o, !!i.multiple, x, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? bn(o, !!i.multiple, i.defaultValue, !0)
                      : bn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Wr] = i;
          } catch (w) {
            Z(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Xe(t, e), it(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Xe(t, e), it(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          zr(t.containerInfo);
        } catch (w) {
          Z(e, e.return, w);
        }
      break;
    case 4:
      Xe(t, e), it(e);
      break;
    case 13:
      Xe(t, e),
        it(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Fa = ne())),
        r & 4 && yc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ve = (u = ve) || c), Xe(t, e), (ve = u)) : Xe(t, e),
        it(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (P = e, c = e.child; c !== null; ) {
            for (f = P = c; P !== null; ) {
              switch (((m = P), (x = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pr(4, m, m.return);
                  break;
                case 1:
                  Mn(m, m.return);
                  var g = m.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (w) {
                      Z(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Mn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    gc(f);
                    continue;
                  }
              }
              x !== null ? ((x.return = m), (P = x)) : gc(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = f.stateNode),
                      (a = f.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = Pf("display", l)));
              } catch (w) {
                Z(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (w) {
                Z(e, e.return, w);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Xe(t, e), it(e), r & 4 && yc(e);
      break;
    case 21:
      break;
    default:
      Xe(t, e), it(e);
  }
}
function it(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (rp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Dr(o, ""), (r.flags &= -33));
          var i = mc(e);
          Ts(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = mc(e);
          Rs(e, s, l);
          break;
        default:
          throw Error(R(161));
      }
    } catch (a) {
      Z(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function nv(e, t, n) {
  (P = e), lp(e);
}
function lp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var o = P,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || No;
      if (!l) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || ve;
        s = No;
        var u = ve;
        if (((No = l), (ve = a) && !u))
          for (P = o; P !== null; )
            (l = P),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? wc(o)
                : a !== null
                ? ((a.return = l), (P = a))
                : wc(o);
        for (; i !== null; ) (P = i), lp(i), (i = i.sibling);
        (P = o), (No = s), (ve = u);
      }
      vc(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (P = i)) : vc(e);
  }
}
function vc(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ve || Di(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ve)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ye(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && ec(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ec(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && zr(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        ve || (t.flags & 512 && Ns(t));
      } catch (m) {
        Z(t, t.return, m);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function gc(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function wc(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Di(4, t);
          } catch (a) {
            Z(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Z(t, o, a);
            }
          }
          var i = t.return;
          try {
            Ns(t);
          } catch (a) {
            Z(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Ns(t);
          } catch (a) {
            Z(t, l, a);
          }
      }
    } catch (a) {
      Z(t, t.return, a);
    }
    if (t === e) {
      P = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (P = s);
      break;
    }
    P = t.return;
  }
}
var rv = Math.ceil,
  ai = kt.ReactCurrentDispatcher,
  Ia = kt.ReactCurrentOwner,
  Ke = kt.ReactCurrentBatchConfig,
  F = 0,
  fe = null,
  re = null,
  pe = 0,
  De = 0,
  Un = Jt(0),
  se = 0,
  qr = null,
  yn = 0,
  Ii = 0,
  Ba = 0,
  _r = null,
  ke = null,
  Fa = 0,
  er = 1 / 0,
  ft = null,
  ui = !1,
  js = null,
  Vt = null,
  Ro = !1,
  zt = null,
  ci = 0,
  Lr = 0,
  Os = null,
  zo = -1,
  Mo = 0;
function Se() {
  return F & 6 ? ne() : zo !== -1 ? zo : (zo = ne());
}
function Kt(e) {
  return e.mode & 1
    ? F & 2 && pe !== 0
      ? pe & -pe
      : Uy.transition !== null
      ? (Mo === 0 && (Mo = Wf()), Mo)
      : ((e = $),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Xf(e.type))),
        e)
    : 1;
}
function nt(e, t, n, r) {
  if (50 < Lr) throw ((Lr = 0), (Os = null), Error(R(185)));
  no(e, n, r),
    (!(F & 2) || e !== fe) &&
      (e === fe && (!(F & 2) && (Ii |= n), se === 4 && Bt(e, pe)),
      je(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((er = ne() + 500), _i && Zt()));
}
function je(e, t) {
  var n = e.callbackNode;
  Um(e, t);
  var r = Qo(e, e === fe ? pe : 0);
  if (r === 0)
    n !== null && ju(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ju(n), t === 1))
      e.tag === 0 ? My(xc.bind(null, e)) : md(xc.bind(null, e)),
        Iy(function () {
          !(F & 6) && Zt();
        }),
        (n = null);
    else {
      switch (Hf(r)) {
        case 1:
          n = ua;
          break;
        case 4:
          n = $f;
          break;
        case 16:
          n = Ko;
          break;
        case 536870912:
          n = bf;
          break;
        default:
          n = Ko;
      }
      n = hp(n, sp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function sp(e, t) {
  if (((zo = -1), (Mo = 0), F & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (Qn() && e.callbackNode !== n) return null;
  var r = Qo(e, e === fe ? pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fi(e, r);
  else {
    t = r;
    var o = F;
    F |= 2;
    var i = up();
    (fe !== e || pe !== t) && ((ft = null), (er = ne() + 500), cn(e, t));
    do
      try {
        lv();
        break;
      } catch (s) {
        ap(e, s);
      }
    while (!0);
    Ea(),
      (ai.current = i),
      (F = o),
      re !== null ? (t = 0) : ((fe = null), (pe = 0), (t = se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = ns(e)), o !== 0 && ((r = o), (t = Ps(e, o)))), t === 1)
    )
      throw ((n = qr), cn(e, 0), Bt(e, r), je(e, ne()), n);
    if (t === 6) Bt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !ov(o) &&
          ((t = fi(e, r)),
          t === 2 && ((i = ns(e)), i !== 0 && ((r = i), (t = Ps(e, i)))),
          t === 1))
      )
        throw ((n = qr), cn(e, 0), Bt(e, r), je(e, ne()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          rn(e, ke, ft);
          break;
        case 3:
          if (
            (Bt(e, r), (r & 130023424) === r && ((t = Fa + 500 - ne()), 10 < t))
          ) {
            if (Qo(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Se(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = cs(rn.bind(null, e, ke, ft), t);
            break;
          }
          rn(e, ke, ft);
          break;
        case 4:
          if ((Bt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - tt(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ne() - r),
            (r =
              (120 > r
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
                : 1960 * rv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = cs(rn.bind(null, e, ke, ft), r);
            break;
          }
          rn(e, ke, ft);
          break;
        case 5:
          rn(e, ke, ft);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return je(e, ne()), e.callbackNode === n ? sp.bind(null, e) : null;
}
function Ps(e, t) {
  var n = _r;
  return (
    e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256),
    (e = fi(e, t)),
    e !== 2 && ((t = ke), (ke = n), t !== null && _s(t)),
    e
  );
}
function _s(e) {
  ke === null ? (ke = e) : ke.push.apply(ke, e);
}
function ov(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!rt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Bt(e, t) {
  for (
    t &= ~Ba,
      t &= ~Ii,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - tt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function xc(e) {
  if (F & 6) throw Error(R(327));
  Qn();
  var t = Qo(e, 0);
  if (!(t & 1)) return je(e, ne()), null;
  var n = fi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ns(e);
    r !== 0 && ((t = r), (n = Ps(e, r)));
  }
  if (n === 1) throw ((n = qr), cn(e, 0), Bt(e, t), je(e, ne()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    rn(e, ke, ft),
    je(e, ne()),
    null
  );
}
function za(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((er = ne() + 500), _i && Zt());
  }
}
function vn(e) {
  zt !== null && zt.tag === 0 && !(F & 6) && Qn();
  var t = F;
  F |= 1;
  var n = Ke.transition,
    r = $;
  try {
    if (((Ke.transition = null), ($ = 1), e)) return e();
  } finally {
    ($ = r), (Ke.transition = n), (F = t), !(F & 6) && Zt();
  }
}
function Ma() {
  (De = Un.current), K(Un);
}
function cn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Dy(n)), re !== null))
    for (n = re.return; n !== null; ) {
      var r = n;
      switch ((wa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Jo();
          break;
        case 3:
          Jn(), K(Re), K(ge), ja();
          break;
        case 5:
          Ta(r);
          break;
        case 4:
          Jn();
          break;
        case 13:
          K(q);
          break;
        case 19:
          K(q);
          break;
        case 10:
          Ca(r.type._context);
          break;
        case 22:
        case 23:
          Ma();
      }
      n = n.return;
    }
  if (
    ((fe = e),
    (re = e = Qt(e.current, null)),
    (pe = De = t),
    (se = 0),
    (qr = null),
    (Ba = Ii = yn = 0),
    (ke = _r = null),
    sn !== null)
  ) {
    for (t = 0; t < sn.length; t++)
      if (((n = sn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    sn = null;
  }
  return e;
}
function ap(e, t) {
  do {
    var n = re;
    try {
      if ((Ea(), (Io.current = si), li)) {
        for (var r = X.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        li = !1;
      }
      if (
        ((mn = 0),
        (ue = le = X = null),
        (Or = !1),
        (Kr = 0),
        (Ia.current = null),
        n === null || n.return === null)
      ) {
        (se = 1), (qr = t), (re = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          a = t;
        if (
          ((t = pe),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = s,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = c.alternate;
            m
              ? ((c.updateQueue = m.updateQueue),
                (c.memoizedState = m.memoizedState),
                (c.lanes = m.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var x = sc(l);
          if (x !== null) {
            (x.flags &= -257),
              ac(x, l, s, i, t),
              x.mode & 1 && lc(i, u, t),
              (t = x),
              (a = u);
            var g = t.updateQueue;
            if (g === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else g.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              lc(i, u, t), Ua();
              break e;
            }
            a = Error(R(426));
          }
        } else if (Q && s.mode & 1) {
          var S = sc(l);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              ac(S, l, s, i, t),
              xa(Zn(a, s));
            break e;
          }
        }
        (i = a = Zn(a, s)),
          se !== 4 && (se = 2),
          _r === null ? (_r = [i]) : _r.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = Vd(i, a, t);
              Zu(i, h);
              break e;
            case 1:
              s = a;
              var p = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Vt === null || !Vt.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = Kd(i, s, t);
                Zu(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      fp(n);
    } catch (k) {
      (t = k), re === n && n !== null && (re = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function up() {
  var e = ai.current;
  return (ai.current = si), e === null ? si : e;
}
function Ua() {
  (se === 0 || se === 3 || se === 2) && (se = 4),
    fe === null || (!(yn & 268435455) && !(Ii & 268435455)) || Bt(fe, pe);
}
function fi(e, t) {
  var n = F;
  F |= 2;
  var r = up();
  (fe !== e || pe !== t) && ((ft = null), cn(e, t));
  do
    try {
      iv();
      break;
    } catch (o) {
      ap(e, o);
    }
  while (!0);
  if ((Ea(), (F = n), (ai.current = r), re !== null)) throw Error(R(261));
  return (fe = null), (pe = 0), se;
}
function iv() {
  for (; re !== null; ) cp(re);
}
function lv() {
  for (; re !== null && !_m(); ) cp(re);
}
function cp(e) {
  var t = pp(e.alternate, e, De);
  (e.memoizedProps = e.pendingProps),
    t === null ? fp(e) : (re = t),
    (Ia.current = null);
}
function fp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Zy(n, t)), n !== null)) {
        (n.flags &= 32767), (re = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (se = 6), (re = null);
        return;
      }
    } else if (((n = Jy(n, t, De)), n !== null)) {
      re = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      re = t;
      return;
    }
    re = t = e;
  } while (t !== null);
  se === 0 && (se = 5);
}
function rn(e, t, n) {
  var r = $,
    o = Ke.transition;
  try {
    (Ke.transition = null), ($ = 1), sv(e, t, n, r);
  } finally {
    (Ke.transition = o), ($ = r);
  }
  return null;
}
function sv(e, t, n, r) {
  do Qn();
  while (zt !== null);
  if (F & 6) throw Error(R(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    ($m(e, i),
    e === fe && ((re = fe = null), (pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ro ||
      ((Ro = !0),
      hp(Ko, function () {
        return Qn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ke.transition), (Ke.transition = null);
    var l = $;
    $ = 1;
    var s = F;
    (F |= 4),
      (Ia.current = null),
      tv(e, n),
      ip(n, e),
      Ty(as),
      (Go = !!ss),
      (as = ss = null),
      (e.current = n),
      nv(n),
      Lm(),
      (F = s),
      ($ = l),
      (Ke.transition = i);
  } else e.current = n;
  if (
    (Ro && ((Ro = !1), (zt = e), (ci = o)),
    (i = e.pendingLanes),
    i === 0 && (Vt = null),
    Im(n.stateNode),
    je(e, ne()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ui) throw ((ui = !1), (e = js), (js = null), e);
  return (
    ci & 1 && e.tag !== 0 && Qn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Os ? Lr++ : ((Lr = 0), (Os = e))) : (Lr = 0),
    Zt(),
    null
  );
}
function Qn() {
  if (zt !== null) {
    var e = Hf(ci),
      t = Ke.transition,
      n = $;
    try {
      if (((Ke.transition = null), ($ = 16 > e ? 16 : e), zt === null))
        var r = !1;
      else {
        if (((e = zt), (zt = null), (ci = 0), F & 6)) throw Error(R(331));
        var o = F;
        for (F |= 4, P = e.current; P !== null; ) {
          var i = P,
            l = i.child;
          if (P.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (P = u; P !== null; ) {
                  var c = P;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pr(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (P = f);
                  else
                    for (; P !== null; ) {
                      c = P;
                      var m = c.sibling,
                        x = c.return;
                      if ((np(c), c === u)) {
                        P = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = x), (P = m);
                        break;
                      }
                      P = x;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var w = g.child;
                if (w !== null) {
                  g.child = null;
                  do {
                    var S = w.sibling;
                    (w.sibling = null), (w = S);
                  } while (w !== null);
                }
              }
              P = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (P = l);
          else
            e: for (; P !== null; ) {
              if (((i = P), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pr(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (P = h);
                break e;
              }
              P = i.return;
            }
        }
        var p = e.current;
        for (P = p; P !== null; ) {
          l = P;
          var v = l.child;
          if (l.subtreeFlags & 2064 && v !== null) (v.return = l), (P = v);
          else
            e: for (l = p; P !== null; ) {
              if (((s = P), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Di(9, s);
                  }
                } catch (k) {
                  Z(s, s.return, k);
                }
              if (s === l) {
                P = null;
                break e;
              }
              var E = s.sibling;
              if (E !== null) {
                (E.return = s.return), (P = E);
                break e;
              }
              P = s.return;
            }
        }
        if (
          ((F = o), Zt(), at && typeof at.onPostCommitFiberRoot == "function")
        )
          try {
            at.onPostCommitFiberRoot(Ri, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ($ = n), (Ke.transition = t);
    }
  }
  return !1;
}
function Sc(e, t, n) {
  (t = Zn(n, t)),
    (t = Vd(e, t, 1)),
    (e = Ht(e, t, 1)),
    (t = Se()),
    e !== null && (no(e, 1, t), je(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) Sc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Sc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Vt === null || !Vt.has(r)))
        ) {
          (e = Zn(n, e)),
            (e = Kd(t, e, 1)),
            (t = Ht(t, e, 1)),
            (e = Se()),
            t !== null && (no(t, 1, e), je(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function av(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    fe === e &&
      (pe & n) === n &&
      (se === 4 || (se === 3 && (pe & 130023424) === pe && 500 > ne() - Fa)
        ? cn(e, 0)
        : (Ba |= n)),
    je(e, t);
}
function dp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = yo), (yo <<= 1), !(yo & 130023424) && (yo = 4194304))
      : (t = 1));
  var n = Se();
  (e = St(e, t)), e !== null && (no(e, t, n), je(e, n));
}
function uv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), dp(e, n);
}
function cv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), dp(e, n);
}
var pp;
pp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Re.current) Ne = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ne = !1), Yy(e, t, n);
      Ne = !!(e.flags & 131072);
    }
  else (Ne = !1), Q && t.flags & 1048576 && yd(t, ti, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Fo(e, t), (e = t.pendingProps);
      var o = qn(t, ge.current);
      Kn(t, n), (o = Pa(null, t, r, e, o, n));
      var i = _a();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Te(r) ? ((i = !0), Zo(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Na(t),
            (o.updater = Li),
            (t.stateNode = o),
            (o._reactInternals = t),
            vs(t, r, e, n),
            (t = xs(null, t, r, !0, i, n)))
          : ((t.tag = 0), Q && i && ga(t), xe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Fo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = dv(r)),
          (e = Ye(r, e)),
          o)
        ) {
          case 0:
            t = ws(null, t, r, e, n);
            break e;
          case 1:
            t = fc(null, t, r, e, n);
            break e;
          case 11:
            t = uc(null, t, r, e, n);
            break e;
          case 14:
            t = cc(null, t, r, Ye(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ye(r, o)),
        ws(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ye(r, o)),
        fc(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Xd(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          xd(e, t),
          oi(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
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
            t.flags & 256)
          ) {
            (o = Zn(Error(R(423)), t)), (t = dc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Zn(Error(R(424)), t)), (t = dc(e, t, r, n, o));
            break e;
          } else
            for (
              Be = Wt(t.stateNode.containerInfo.firstChild),
                Fe = t,
                Q = !0,
                Ze = null,
                n = kd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Xn(), r === o)) {
            t = Et(e, t, n);
            break e;
          }
          xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Nd(t),
        e === null && hs(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        us(r, o) ? (l = null) : i !== null && us(r, i) && (t.flags |= 32),
        qd(e, t),
        xe(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && hs(t), null;
    case 13:
      return Yd(e, t, n);
    case 4:
      return (
        Ra(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Yn(t, null, r, n)) : xe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ye(r, o)),
        uc(e, t, r, o, n)
      );
    case 7:
      return xe(e, t, t.pendingProps, n), t.child;
    case 8:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          W(ni, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (rt(i.value, l)) {
            if (i.children === o.children && !Re.current) {
              t = Et(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                l = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = yt(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      ms(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(R(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  ms(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        xe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Kn(t, n),
        (o = Qe(o)),
        (r = r(o)),
        (t.flags |= 1),
        xe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Ye(r, t.pendingProps)),
        (o = Ye(r.type, o)),
        cc(e, t, r, o, n)
      );
    case 15:
      return Qd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ye(r, o)),
        Fo(e, t),
        (t.tag = 1),
        Te(r) ? ((e = !0), Zo(t)) : (e = !1),
        Kn(t, n),
        Ed(t, r, o),
        vs(t, r, o, n),
        xs(null, t, r, !0, e, n)
      );
    case 19:
      return Jd(e, t, n);
    case 22:
      return Gd(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function hp(e, t) {
  return Uf(e, t);
}
function fv(e, t, n, r) {
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
function Ve(e, t, n, r) {
  return new fv(e, t, n, r);
}
function $a(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function dv(e) {
  if (typeof e == "function") return $a(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === la)) return 11;
    if (e === sa) return 14;
  }
  return 2;
}
function Qt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ve(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Uo(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) $a(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Pn:
        return fn(n.children, o, i, t);
      case ia:
        (l = 8), (o |= 8);
        break;
      case $l:
        return (
          (e = Ve(12, n, t, o | 2)), (e.elementType = $l), (e.lanes = i), e
        );
      case bl:
        return (e = Ve(13, n, t, o)), (e.elementType = bl), (e.lanes = i), e;
      case Wl:
        return (e = Ve(19, n, t, o)), (e.elementType = Wl), (e.lanes = i), e;
      case Cf:
        return Bi(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Sf:
              l = 10;
              break e;
            case Ef:
              l = 9;
              break e;
            case la:
              l = 11;
              break e;
            case sa:
              l = 14;
              break e;
            case _t:
              (l = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ve(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function fn(e, t, n, r) {
  return (e = Ve(7, e, r, t)), (e.lanes = n), e;
}
function Bi(e, t, n, r) {
  return (
    (e = Ve(22, e, r, t)),
    (e.elementType = Cf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Rl(e, t, n) {
  return (e = Ve(6, e, null, t)), (e.lanes = n), e;
}
function Tl(e, t, n) {
  return (
    (t = Ve(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function pv(e, t, n, r, o) {
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
    (this.eventTimes = sl(0)),
    (this.expirationTimes = sl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = sl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function ba(e, t, n, r, o, i, l, s, a) {
  return (
    (e = new pv(e, t, n, s, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ve(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Na(i),
    e
  );
}
function hv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: On,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function mp(e) {
  if (!e) return Xt;
  e = e._reactInternals;
  e: {
    if (Sn(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Te(n)) return hd(e, n, t);
  }
  return t;
}
function yp(e, t, n, r, o, i, l, s, a) {
  return (
    (e = ba(n, r, !0, e, o, i, l, s, a)),
    (e.context = mp(null)),
    (n = e.current),
    (r = Se()),
    (o = Kt(n)),
    (i = yt(r, o)),
    (i.callback = t ?? null),
    Ht(n, i, o),
    (e.current.lanes = o),
    no(e, o, r),
    je(e, r),
    e
  );
}
function Fi(e, t, n, r) {
  var o = t.current,
    i = Se(),
    l = Kt(o);
  return (
    (n = mp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = yt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ht(o, t, l)),
    e !== null && (nt(e, o, l, i), Do(e, o, l)),
    l
  );
}
function di(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ec(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Wa(e, t) {
  Ec(e, t), (e = e.alternate) && Ec(e, t);
}
function mv() {
  return null;
}
var vp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ha(e) {
  this._internalRoot = e;
}
zi.prototype.render = Ha.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Fi(e, t, null, null);
};
zi.prototype.unmount = Ha.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    vn(function () {
      Fi(null, e, null, null);
    }),
      (t[xt] = null);
  }
};
function zi(e) {
  this._internalRoot = e;
}
zi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Qf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < It.length && t !== 0 && t < It[n].priority; n++);
    It.splice(n, 0, e), n === 0 && qf(e);
  }
};
function Va(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Mi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Cc() {}
function yv(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = di(l);
        i.call(u);
      };
    }
    var l = yp(t, r, e, 0, null, !1, !1, "", Cc);
    return (
      (e._reactRootContainer = l),
      (e[xt] = l.current),
      $r(e.nodeType === 8 ? e.parentNode : e),
      vn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = di(a);
      s.call(u);
    };
  }
  var a = ba(e, 0, !1, null, null, !1, !1, "", Cc);
  return (
    (e._reactRootContainer = a),
    (e[xt] = a.current),
    $r(e.nodeType === 8 ? e.parentNode : e),
    vn(function () {
      Fi(t, a, n, r);
    }),
    a
  );
}
function Ui(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var a = di(l);
        s.call(a);
      };
    }
    Fi(t, l, e, o);
  } else l = yv(n, t, e, o, r);
  return di(l);
}
Vf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Sr(t.pendingLanes);
        n !== 0 &&
          (ca(t, n | 1), je(t, ne()), !(F & 6) && ((er = ne() + 500), Zt()));
      }
      break;
    case 13:
      vn(function () {
        var r = St(e, 1);
        if (r !== null) {
          var o = Se();
          nt(r, e, 1, o);
        }
      }),
        Wa(e, 1);
  }
};
fa = function (e) {
  if (e.tag === 13) {
    var t = St(e, 134217728);
    if (t !== null) {
      var n = Se();
      nt(t, e, 134217728, n);
    }
    Wa(e, 134217728);
  }
};
Kf = function (e) {
  if (e.tag === 13) {
    var t = Kt(e),
      n = St(e, t);
    if (n !== null) {
      var r = Se();
      nt(n, e, t, r);
    }
    Wa(e, t);
  }
};
Qf = function () {
  return $;
};
Gf = function (e, t) {
  var n = $;
  try {
    return ($ = e), t();
  } finally {
    $ = n;
  }
};
Zl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Kl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Pi(r);
            if (!o) throw Error(R(90));
            Nf(r), Kl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Tf(e, n);
      break;
    case "select":
      (t = n.value), t != null && bn(e, !!n.multiple, t, !1);
  }
};
Df = za;
If = vn;
var vv = { usingClientEntryPoint: !1, Events: [oo, Dn, Pi, Lf, Af, za] },
  yr = {
    findFiberByHostInstance: ln,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  gv = {
    bundleType: yr.bundleType,
    version: yr.version,
    rendererPackageName: yr.rendererPackageName,
    rendererConfig: yr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: kt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = zf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: yr.findFiberByHostInstance || mv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var To = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!To.isDisabled && To.supportsFiber)
    try {
      (Ri = To.inject(gv)), (at = To);
    } catch {}
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vv;
Ue.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Va(t)) throw Error(R(200));
  return hv(e, t, null, n);
};
Ue.createRoot = function (e, t) {
  if (!Va(e)) throw Error(R(299));
  var n = !1,
    r = "",
    o = vp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ba(e, 1, !1, null, null, n, !1, r, o)),
    (e[xt] = t.current),
    $r(e.nodeType === 8 ? e.parentNode : e),
    new Ha(t)
  );
};
Ue.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = zf(t)), (e = e === null ? null : e.stateNode), e;
};
Ue.flushSync = function (e) {
  return vn(e);
};
Ue.hydrate = function (e, t, n) {
  if (!Mi(t)) throw Error(R(200));
  return Ui(null, e, t, !0, n);
};
Ue.hydrateRoot = function (e, t, n) {
  if (!Va(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = vp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = yp(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[xt] = t.current),
    $r(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new zi(t);
};
Ue.render = function (e, t, n) {
  if (!Mi(t)) throw Error(R(200));
  return Ui(null, e, t, !1, n);
};
Ue.unmountComponentAtNode = function (e) {
  if (!Mi(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (vn(function () {
        Ui(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[xt] = null);
        });
      }),
      !0)
    : !1;
};
Ue.unstable_batchedUpdates = za;
Ue.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Mi(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return Ui(e, t, n, !1, r);
};
Ue.version = "18.2.0-next-9e3b772b8-20220608";
function gp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gp);
    } catch (e) {
      console.error(e);
    }
}
gp(), (yf.exports = Ue);
var wp = yf.exports;
const $n = eo(wp);
var kc = wp;
(Ml.createRoot = kc.createRoot), (Ml.hydrateRoot = kc.hydrateRoot);
/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Xr() {
  return (
    (Xr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Xr.apply(this, arguments)
  );
}
var Mt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Mt || (Mt = {}));
const Nc = "popstate";
function wv(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: l, hash: s } = r.location;
    return Ls(
      "",
      { pathname: i, search: l, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : pi(o);
  }
  return Sv(t, n, null, e);
}
function oe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Ka(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function xv() {
  return Math.random().toString(36).substr(2, 8);
}
function Rc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ls(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Xr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? ir(t) : t,
      { state: n, key: (t && t.key) || r || xv() },
    )
  );
}
function pi(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function ir(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Sv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    l = o.history,
    s = Mt.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), l.replaceState(Xr({}, l.state, { idx: u }), ""));
  function c() {
    return (l.state || { idx: null }).idx;
  }
  function f() {
    s = Mt.Pop;
    let S = c(),
      h = S == null ? null : S - u;
    (u = S), a && a({ action: s, location: w.location, delta: h });
  }
  function m(S, h) {
    s = Mt.Push;
    let p = Ls(w.location, S, h);
    u = c() + 1;
    let v = Rc(p, u),
      E = w.createHref(p);
    try {
      l.pushState(v, "", E);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      o.location.assign(E);
    }
    i && a && a({ action: s, location: w.location, delta: 1 });
  }
  function x(S, h) {
    s = Mt.Replace;
    let p = Ls(w.location, S, h);
    u = c();
    let v = Rc(p, u),
      E = w.createHref(p);
    l.replaceState(v, "", E),
      i && a && a({ action: s, location: w.location, delta: 0 });
  }
  function g(S) {
    let h = o.location.origin !== "null" ? o.location.origin : o.location.href,
      p = typeof S == "string" ? S : pi(S);
    return (
      oe(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          p,
      ),
      new URL(p, h)
    );
  }
  let w = {
    get action() {
      return s;
    },
    get location() {
      return e(o, l);
    },
    listen(S) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Nc, f),
        (a = S),
        () => {
          o.removeEventListener(Nc, f), (a = null);
        }
      );
    },
    createHref(S) {
      return t(o, S);
    },
    createURL: g,
    encodeLocation(S) {
      let h = g(S);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: m,
    replace: x,
    go(S) {
      return l.go(S);
    },
  };
  return w;
}
var Tc;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Tc || (Tc = {}));
function Ev(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? ir(t) : t,
    o = Qa(r.pathname || "/", n);
  if (o == null) return null;
  let i = xp(e);
  Cv(i);
  let l = null;
  for (let s = 0; l == null && s < i.length; ++s) l = Lv(i[s], Iv(o));
  return l;
}
function xp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, l, s) => {
    let a = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    a.relativePath.startsWith("/") &&
      (oe(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Gt([r, a.relativePath]),
      c = n.concat(a);
    i.children &&
      i.children.length > 0 &&
      (oe(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      xp(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: Pv(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, l) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) o(i, l);
      else for (let a of Sp(i.path)) o(i, l, a);
    }),
    t
  );
}
function Sp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let l = Sp(r.join("/")),
    s = [];
  return (
    s.push(...l.map((a) => (a === "" ? i : [i, a].join("/")))),
    o && s.push(...l),
    s.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Cv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : _v(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const kv = /^:\w+$/,
  Nv = 3,
  Rv = 2,
  Tv = 1,
  jv = 10,
  Ov = -2,
  jc = (e) => e === "*";
function Pv(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(jc) && (r += Ov),
    t && (r += Rv),
    n
      .filter((o) => !jc(o))
      .reduce((o, i) => o + (kv.test(i) ? Nv : i === "" ? Tv : jv), r)
  );
}
function _v(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Lv(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let l = 0; l < n.length; ++l) {
    let s = n[l],
      a = l === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      c = Av(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        u,
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let f = s.route;
    i.push({
      params: r,
      pathname: Gt([o, c.pathname]),
      pathnameBase: Mv(Gt([o, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== "/" && (o = Gt([o, c.pathnameBase]));
  }
  return i;
}
function Av(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Dv(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    l = i.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      if (c === "*") {
        let m = s[f] || "";
        l = i.slice(0, i.length - m.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = Bv(s[f] || "", c)), u;
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function Dv(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Ka(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (l, s) => (r.push(s), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function Iv(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Ka(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function Bv(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Ka(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ")."),
      ),
      e
    );
  }
}
function Qa(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Fv(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? ir(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : zv(n, t)) : t,
    search: Uv(r),
    hash: $v(o),
  };
}
function zv(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function jl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Ep(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Cp(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = ir(e))
    : ((o = Xr({}, e)),
      oe(
        !o.pathname || !o.pathname.includes("?"),
        jl("?", "pathname", "search", o),
      ),
      oe(
        !o.pathname || !o.pathname.includes("#"),
        jl("#", "pathname", "hash", o),
      ),
      oe(!o.search || !o.search.includes("#"), jl("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    l = i ? "/" : o.pathname,
    s;
  if (r || l == null) s = n;
  else {
    let f = t.length - 1;
    if (l.startsWith("..")) {
      let m = l.split("/");
      for (; m[0] === ".."; ) m.shift(), (f -= 1);
      o.pathname = m.join("/");
    }
    s = f >= 0 ? t[f] : "/";
  }
  let a = Fv(o, s),
    u = l && l !== "/" && l.endsWith("/"),
    c = (i || l === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a;
}
const Gt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Mv = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Uv = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  $v = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function bv(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const kp = ["post", "put", "patch", "delete"];
new Set(kp);
const Wv = ["get", ...kp];
new Set(Wv);
/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function hi() {
  return (
    (hi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    hi.apply(this, arguments)
  );
}
const Ga = y.createContext(null),
  Np = y.createContext(null),
  En = y.createContext(null),
  $i = y.createContext(null),
  Cn = y.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Rp = y.createContext(null);
function Hv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  lo() || oe(!1);
  let { basename: r, navigator: o } = y.useContext(En),
    { hash: i, pathname: l, search: s } = qa(e, { relative: n }),
    a = l;
  return (
    r !== "/" && (a = l === "/" ? r : Gt([r, l])),
    o.createHref({ pathname: a, search: s, hash: i })
  );
}
function lo() {
  return y.useContext($i) != null;
}
function lr() {
  return lo() || oe(!1), y.useContext($i).location;
}
function Tp(e) {
  y.useContext(En).static || y.useLayoutEffect(e);
}
function Vv() {
  let { isDataRoute: e } = y.useContext(Cn);
  return e ? og() : Kv();
}
function Kv() {
  lo() || oe(!1);
  let e = y.useContext(Ga),
    { basename: t, navigator: n } = y.useContext(En),
    { matches: r } = y.useContext(Cn),
    { pathname: o } = lr(),
    i = JSON.stringify(Ep(r).map((a) => a.pathnameBase)),
    l = y.useRef(!1);
  return (
    Tp(() => {
      l.current = !0;
    }),
    y.useCallback(
      function (a, u) {
        if ((u === void 0 && (u = {}), !l.current)) return;
        if (typeof a == "number") {
          n.go(a);
          return;
        }
        let c = Cp(a, JSON.parse(i), o, u.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : Gt([t, c.pathname])),
          (u.replace ? n.replace : n.push)(c, u.state, u);
      },
      [t, n, i, o, e],
    )
  );
}
function qa(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = y.useContext(Cn),
    { pathname: o } = lr(),
    i = JSON.stringify(Ep(r).map((l) => l.pathnameBase));
  return y.useMemo(() => Cp(e, JSON.parse(i), o, n === "path"), [e, i, o, n]);
}
function Qv(e, t) {
  return Gv(e, t);
}
function Gv(e, t, n) {
  lo() || oe(!1);
  let { navigator: r } = y.useContext(En),
    { matches: o } = y.useContext(Cn),
    i = o[o.length - 1],
    l = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : "/";
  i && i.route;
  let a = lr(),
    u;
  if (t) {
    var c;
    let w = typeof t == "string" ? ir(t) : t;
    s === "/" || ((c = w.pathname) != null && c.startsWith(s)) || oe(!1),
      (u = w);
  } else u = a;
  let f = u.pathname || "/",
    m = s === "/" ? f : f.slice(s.length) || "/",
    x = Ev(e, { pathname: m }),
    g = Zv(
      x &&
        x.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, l, w.params),
            pathname: Gt([
              s,
              r.encodeLocation
                ? r.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? s
                : Gt([
                    s,
                    r.encodeLocation
                      ? r.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          }),
        ),
      o,
      n,
    );
  return t && g
    ? y.createElement(
        $i.Provider,
        {
          value: {
            location: hi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u,
            ),
            navigationType: Mt.Pop,
          },
        },
        g,
      )
    : g;
}
function qv() {
  let e = rg(),
    t = bv(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return y.createElement(
    y.Fragment,
    null,
    y.createElement("h2", null, "Unexpected Application Error!"),
    y.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? y.createElement("pre", { style: o }, n) : null,
    null,
  );
}
const Xv = y.createElement(qv, null);
class Yv extends y.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error
      ? y.createElement(
          Cn.Provider,
          { value: this.props.routeContext },
          y.createElement(Rp.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Jv(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = y.useContext(Ga);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(Cn.Provider, { value: t }, r)
  );
}
function Zv(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    l = (r = n) == null ? void 0 : r.errors;
  if (l != null) {
    let s = i.findIndex(
      (a) => a.route.id && (l == null ? void 0 : l[a.route.id]),
    );
    s >= 0 || oe(!1), (i = i.slice(0, Math.min(i.length, s + 1)));
  }
  return i.reduceRight((s, a, u) => {
    let c = a.route.id ? (l == null ? void 0 : l[a.route.id]) : null,
      f = null;
    n && (f = a.route.errorElement || Xv);
    let m = t.concat(i.slice(0, u + 1)),
      x = () => {
        let g;
        return (
          c
            ? (g = f)
            : a.route.Component
            ? (g = y.createElement(a.route.Component, null))
            : a.route.element
            ? (g = a.route.element)
            : (g = s),
          y.createElement(Jv, {
            match: a,
            routeContext: { outlet: s, matches: m, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || u === 0)
      ? y.createElement(Yv, {
          location: n.location,
          revalidation: n.revalidation,
          component: f,
          error: c,
          children: x(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : x();
  }, null);
}
var As;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate");
})(As || (As = {}));
var Yr;
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
})(Yr || (Yr = {}));
function eg(e) {
  let t = y.useContext(Ga);
  return t || oe(!1), t;
}
function tg(e) {
  let t = y.useContext(Np);
  return t || oe(!1), t;
}
function ng(e) {
  let t = y.useContext(Cn);
  return t || oe(!1), t;
}
function jp(e) {
  let t = ng(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || oe(!1), n.route.id;
}
function rg() {
  var e;
  let t = y.useContext(Rp),
    n = tg(Yr.UseRouteError),
    r = jp(Yr.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function og() {
  let { router: e } = eg(As.UseNavigateStable),
    t = jp(Yr.UseNavigateStable),
    n = y.useRef(!1);
  return (
    Tp(() => {
      n.current = !0;
    }),
    y.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, hi({ fromRouteId: t }, i)));
      },
      [e, t],
    )
  );
}
function Pt(e) {
  oe(!1);
}
function ig(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Mt.Pop,
    navigator: i,
    static: l = !1,
  } = e;
  lo() && oe(!1);
  let s = t.replace(/^\/*/, "/"),
    a = y.useMemo(() => ({ basename: s, navigator: i, static: l }), [s, i, l]);
  typeof r == "string" && (r = ir(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: f = "",
      state: m = null,
      key: x = "default",
    } = r,
    g = y.useMemo(() => {
      let w = Qa(u, s);
      return w == null
        ? null
        : {
            location: { pathname: w, search: c, hash: f, state: m, key: x },
            navigationType: o,
          };
    }, [s, u, c, f, m, x, o]);
  return g == null
    ? null
    : y.createElement(
        En.Provider,
        { value: a },
        y.createElement($i.Provider, { children: n, value: g }),
      );
}
function lg(e) {
  let { children: t, location: n } = e;
  return Qv(Ds(t), n);
}
var Oc;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Oc || (Oc = {}));
new Promise(() => {});
function Ds(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    y.Children.forEach(e, (r, o) => {
      if (!y.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === y.Fragment) {
        n.push.apply(n, Ds(r.props.children, i));
        return;
      }
      r.type !== Pt && oe(!1), !r.props.index || !r.props.children || oe(!1);
      let l = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (l.children = Ds(r.props.children, i)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function mi() {
  return (
    (mi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    mi.apply(this, arguments)
  );
}
function Op(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function sg(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ag(e, t) {
  return e.button === 0 && (!t || t === "_self") && !sg(e);
}
const ug = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  cg = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ],
  fg = "startTransition",
  Pc = um[fg];
function dg(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = y.useRef();
  i.current == null && (i.current = wv({ window: o, v5Compat: !0 }));
  let l = i.current,
    [s, a] = y.useState({ action: l.action, location: l.location }),
    { v7_startTransition: u } = r || {},
    c = y.useCallback(
      (f) => {
        u && Pc ? Pc(() => a(f)) : a(f);
      },
      [a, u],
    );
  return (
    y.useLayoutEffect(() => l.listen(c), [l, c]),
    y.createElement(ig, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: l,
    })
  );
}
const pg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  hg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  gn = y.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: l,
        state: s,
        target: a,
        to: u,
        preventScrollReset: c,
      } = t,
      f = Op(t, ug),
      { basename: m } = y.useContext(En),
      x,
      g = !1;
    if (typeof u == "string" && hg.test(u) && ((x = u), pg))
      try {
        let p = new URL(window.location.href),
          v = u.startsWith("//") ? new URL(p.protocol + u) : new URL(u),
          E = Qa(v.pathname, m);
        v.origin === p.origin && E != null
          ? (u = E + v.search + v.hash)
          : (g = !0);
      } catch {}
    let w = Hv(u, { relative: o }),
      S = mg(u, {
        replace: l,
        state: s,
        target: a,
        preventScrollReset: c,
        relative: o,
      });
    function h(p) {
      r && r(p), p.defaultPrevented || S(p);
    }
    return y.createElement(
      "a",
      mi({}, f, { href: x || w, onClick: g || i ? r : h, ref: n, target: a }),
    );
  }),
  Rn = y.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: o = !1,
        className: i = "",
        end: l = !1,
        style: s,
        to: a,
        children: u,
      } = t,
      c = Op(t, cg),
      f = qa(a, { relative: c.relative }),
      m = lr(),
      x = y.useContext(Np),
      { navigator: g } = y.useContext(En),
      w = g.encodeLocation ? g.encodeLocation(f).pathname : f.pathname,
      S = m.pathname,
      h =
        x && x.navigation && x.navigation.location
          ? x.navigation.location.pathname
          : null;
    o ||
      ((S = S.toLowerCase()),
      (h = h ? h.toLowerCase() : null),
      (w = w.toLowerCase()));
    let p = S === w || (!l && S.startsWith(w) && S.charAt(w.length) === "/"),
      v =
        h != null &&
        (h === w || (!l && h.startsWith(w) && h.charAt(w.length) === "/")),
      E = p ? r : void 0,
      k;
    typeof i == "function"
      ? (k = i({ isActive: p, isPending: v }))
      : (k = [i, p ? "active" : null, v ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let N = typeof s == "function" ? s({ isActive: p, isPending: v }) : s;
    return y.createElement(
      gn,
      mi({}, c, { "aria-current": E, className: k, ref: n, style: N, to: a }),
      typeof u == "function" ? u({ isActive: p, isPending: v }) : u,
    );
  });
var _c;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(_c || (_c = {}));
var Lc;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Lc || (Lc = {}));
function mg(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: l,
    } = t === void 0 ? {} : t,
    s = Vv(),
    a = lr(),
    u = qa(e, { relative: l });
  return y.useCallback(
    (c) => {
      if (ag(c, n)) {
        c.preventDefault();
        let f = r !== void 0 ? r : pi(a) === pi(u);
        s(e, { replace: f, state: o, preventScrollReset: i, relative: l });
      }
    },
    [a, s, u, r, o, n, e, i, l],
  );
}
var Pp = { exports: {} };
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */ (function (e, t) {
  (function (n) {
    var r;
    if (((e.exports = n()), (r = !0), !r)) {
      var o = window.Cookies,
        i = (window.Cookies = n());
      i.noConflict = function () {
        return (window.Cookies = o), i;
      };
    }
  })(function () {
    function n() {
      for (var i = 0, l = {}; i < arguments.length; i++) {
        var s = arguments[i];
        for (var a in s) l[a] = s[a];
      }
      return l;
    }
    function r(i) {
      return i.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    function o(i) {
      function l() {}
      function s(u, c, f) {
        if (!(typeof document > "u")) {
          (f = n({ path: "/" }, l.defaults, f)),
            typeof f.expires == "number" &&
              (f.expires = new Date(new Date() * 1 + f.expires * 864e5)),
            (f.expires = f.expires ? f.expires.toUTCString() : "");
          try {
            var m = JSON.stringify(c);
            /^[\{\[]/.test(m) && (c = m);
          } catch {}
          (c = i.write
            ? i.write(c, u)
            : encodeURIComponent(String(c)).replace(
                /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                decodeURIComponent,
              )),
            (u = encodeURIComponent(String(u))
              .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
              .replace(/[\(\)]/g, escape));
          var x = "";
          for (var g in f)
            f[g] &&
              ((x += "; " + g), f[g] !== !0 && (x += "=" + f[g].split(";")[0]));
          return (document.cookie = u + "=" + c + x);
        }
      }
      function a(u, c) {
        if (!(typeof document > "u")) {
          for (
            var f = {},
              m = document.cookie ? document.cookie.split("; ") : [],
              x = 0;
            x < m.length;
            x++
          ) {
            var g = m[x].split("="),
              w = g.slice(1).join("=");
            !c && w.charAt(0) === '"' && (w = w.slice(1, -1));
            try {
              var S = r(g[0]);
              if (((w = (i.read || i)(w, S) || r(w)), c))
                try {
                  w = JSON.parse(w);
                } catch {}
              if (((f[S] = w), u === S)) break;
            } catch {}
          }
          return u ? f[u] : f;
        }
      }
      return (
        (l.set = s),
        (l.get = function (u) {
          return a(u, !1);
        }),
        (l.getJSON = function (u) {
          return a(u, !0);
        }),
        (l.remove = function (u, c) {
          s(u, "", n(c, { expires: -1 }));
        }),
        (l.defaults = {}),
        (l.withConverter = o),
        l
      );
    }
    return o(function () {});
  });
})(Pp);
var yg = Pp.exports;
const yi = eo(yg);
var vg = function (t) {
  var n = t.condition,
    r = t.wrapper,
    o = t.children;
  return n ? r(o) : o;
};
function At() {
  return (
    (At = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    At.apply(this, arguments)
  );
}
function gg(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Is(e, t);
}
function Is(e, t) {
  return (
    (Is = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Is(e, t)
  );
}
function wg(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Bs = { TOP: "top", BOTTOM: "bottom", NONE: "none" },
  vi;
(function (e) {
  (e.STRICT = "strict"), (e.LAX = "lax"), (e.NONE = "none");
})(vi || (vi = {}));
var Fs = { HIDDEN: "hidden", SHOW: "show", BY_COOKIE_VALUE: "byCookieValue" },
  _p = "CookieConsent",
  xg = ["children"],
  Sg = function (t) {
    var n = t.children,
      r = wg(t, xg);
    return ce.createElement("button", Object.assign({}, r), n);
  },
  Eg = {
    disableStyles: !1,
    hideOnAccept: !0,
    hideOnDecline: !0,
    location: Bs.BOTTOM,
    visible: Fs.BY_COOKIE_VALUE,
    onAccept: function (t) {},
    onDecline: function () {},
    cookieName: _p,
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
    sameSite: vi.LAX,
    ButtonComponent: Sg,
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
  Cg = {
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
  kg = function (t) {
    t === void 0 && (t = _p);
    var n = yi.get(t);
    return n === void 0 ? yi.get(Lp(t)) : n;
  },
  Lp = function (t) {
    return t + "-legacy";
  },
  Ap = (function (e) {
    gg(t, e);
    function t() {
      var r;
      return (
        (r = e.apply(this, arguments) || this),
        (r.state = Cg),
        (r.handleScroll = function () {
          var o = r.props.acceptOnScrollPercentage,
            i = document.documentElement,
            l = document.body,
            s = "scrollTop",
            a = "scrollHeight",
            u = ((i[s] || l[s]) / ((i[a] || l[a]) - i.clientHeight)) * 100;
          u > o && r.accept(!0);
        }),
        (r.removeScrollListener = function () {
          var o = r.props.acceptOnScroll;
          o && window.removeEventListener("scroll", r.handleScroll);
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        var o = this.props.debug;
        (this.getCookieValue() === void 0 || o) &&
          (this.setState({ visible: !0 }),
          this.props.acceptOnScroll &&
            window.addEventListener("scroll", this.handleScroll, {
              passive: !0,
            }));
      }),
      (n.componentWillUnmount = function () {
        this.removeScrollListener();
      }),
      (n.accept = function (o) {
        var i;
        o === void 0 && (o = !1);
        var l = this.props,
          s = l.cookieName,
          a = l.cookieValue,
          u = l.hideOnAccept,
          c = l.onAccept;
        this.setCookie(s, a),
          c((i = o) != null ? i : !1),
          u && (this.setState({ visible: !1 }), this.removeScrollListener());
      }),
      (n.overlayClick = function () {
        var o = this.props,
          i = o.acceptOnOverlayClick,
          l = o.onOverlayClick;
        i && this.accept(), l();
      }),
      (n.decline = function () {
        var o = this.props,
          i = o.cookieName,
          l = o.declineCookieValue,
          s = o.hideOnDecline,
          a = o.onDecline,
          u = o.setDeclineCookie;
        u && this.setCookie(i, l), a(), s && this.setState({ visible: !1 });
      }),
      (n.setCookie = function (o, i) {
        var l = this.props,
          s = l.extraCookieOptions,
          a = l.expires,
          u = l.sameSite,
          c = this.props.cookieSecurity;
        c === void 0 &&
          (c = window.location ? window.location.protocol === "https:" : !0);
        var f = At({ expires: a }, s, { sameSite: u, secure: c });
        u === vi.NONE && yi.set(Lp(o), i, f), yi.set(o, i, f);
      }),
      (n.getCookieValue = function () {
        var o = this.props.cookieName;
        return kg(o);
      }),
      (n.render = function () {
        var o = this;
        switch (this.props.visible) {
          case Fs.HIDDEN:
            return null;
          case Fs.BY_COOKIE_VALUE:
            if (!this.state.visible) return null;
            break;
        }
        var i = this.props,
          l = i.location,
          s = i.style,
          a = i.buttonStyle,
          u = i.declineButtonStyle,
          c = i.contentStyle,
          f = i.disableStyles,
          m = i.buttonText,
          x = i.declineButtonText,
          g = i.containerClasses,
          w = i.contentClasses,
          S = i.buttonClasses,
          h = i.buttonWrapperClasses,
          p = i.declineButtonClasses,
          v = i.buttonId,
          E = i.declineButtonId,
          k = i.disableButtonStyles,
          N = i.enableDeclineButton,
          T = i.flipButtons,
          j = i.ButtonComponent,
          z = i.overlay,
          A = i.overlayClasses,
          ae = i.overlayStyle,
          qe = i.ariaAcceptLabel,
          Le = i.ariaDeclineLabel,
          ct = i.customContainerAttributes,
          Tt = i.customContentAttributes,
          be = i.customButtonProps,
          G = i.customDeclineButtonProps,
          O = i.customButtonWrapperAttributes,
          _ = {},
          L = {},
          M = {},
          U = {},
          Ae = {};
        switch (
          (f
            ? ((_ = Object.assign({}, s)),
              (L = Object.assign({}, a)),
              (M = Object.assign({}, u)),
              (U = Object.assign({}, c)),
              (Ae = Object.assign({}, ae)))
            : ((_ = Object.assign({}, At({}, this.state.style, s))),
              (U = Object.assign({}, At({}, this.state.contentStyle, c))),
              (Ae = Object.assign({}, At({}, this.state.overlayStyle, ae))),
              k
                ? ((L = Object.assign({}, a)), (M = Object.assign({}, u)))
                : ((L = Object.assign({}, At({}, this.state.buttonStyle, a))),
                  (M = Object.assign(
                    {},
                    At({}, this.state.declineButtonStyle, u),
                  )))),
          l)
        ) {
          case Bs.TOP:
            _.top = "0";
            break;
          case Bs.BOTTOM:
            _.bottom = "0";
            break;
        }
        var ie = [];
        return (
          N &&
            ie.push(
              ce.createElement(
                j,
                Object.assign(
                  {
                    key: "declineButton",
                    style: M,
                    className: p,
                    id: E,
                    "aria-label": Le,
                    onClick: function () {
                      o.decline();
                    },
                  },
                  G,
                ),
                x,
              ),
            ),
          ie.push(
            ce.createElement(
              j,
              Object.assign(
                {
                  key: "acceptButton",
                  style: L,
                  className: S,
                  id: v,
                  "aria-label": qe,
                  onClick: function () {
                    o.accept();
                  },
                },
                be,
              ),
              m,
            ),
          ),
          T && ie.reverse(),
          ce.createElement(
            vg,
            {
              condition: z,
              wrapper: function (we) {
                return ce.createElement(
                  "div",
                  {
                    style: Ae,
                    className: A,
                    onClick: function () {
                      o.overlayClick();
                    },
                  },
                  we,
                );
              },
            },
            ce.createElement(
              "div",
              Object.assign({ className: "" + g, style: _ }, ct),
              ce.createElement(
                "div",
                Object.assign({ style: U, className: w }, Tt),
                this.props.children,
              ),
              ce.createElement(
                "div",
                Object.assign({ className: "" + h }, O),
                ie.map(function (te) {
                  return te;
                }),
              ),
            ),
          )
        );
      }),
      t
    );
  })(y.Component);
Ap.defaultProps = Eg;
var Dp = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], o = 0; o < arguments.length; o++) {
        var i = arguments[o];
        if (i) {
          var l = typeof i;
          if (l === "string" || l === "number") r.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var s = n.apply(null, i);
              s && r.push(s);
            }
          } else if (l === "object") {
            if (
              i.toString !== Object.prototype.toString &&
              !i.toString.toString().includes("[native code]")
            ) {
              r.push(i.toString());
              continue;
            }
            for (var a in i) t.call(i, a) && i[a] && r.push(a);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(Dp);
var Ng = Dp.exports;
const B = eo(Ng);
function zs() {
  return (
    (zs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zs.apply(this, arguments)
  );
}
function Ip(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Ac(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function Rg(e) {
  var t = Tg(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function Tg(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function jg(e, t, n) {
  var r = y.useRef(e !== void 0),
    o = y.useState(t),
    i = o[0],
    l = o[1],
    s = e !== void 0,
    a = r.current;
  return (
    (r.current = s),
    !s && a && i !== t && l(t),
    [
      s ? e : i,
      y.useCallback(
        function (u) {
          for (
            var c = arguments.length, f = new Array(c > 1 ? c - 1 : 0), m = 1;
            m < c;
            m++
          )
            f[m - 1] = arguments[m];
          n && n.apply(void 0, [u].concat(f)), l(u);
        },
        [n],
      ),
    ]
  );
}
function Xa(e, t) {
  return Object.keys(t).reduce(function (n, r) {
    var o,
      i = n,
      l = i[Ac(r)],
      s = i[r],
      a = Ip(i, [Ac(r), r].map(Rg)),
      u = t[r],
      c = jg(s, l, e[u]),
      f = c[0],
      m = c[1];
    return zs({}, a, ((o = {}), (o[r] = f), (o[u] = m), o));
  }, e);
}
function Ms(e, t) {
  return (
    (Ms = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Ms(e, t)
  );
}
function Og(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Ms(e, t);
}
const Pg = ["xxl", "xl", "lg", "md", "sm", "xs"],
  _g = "xs",
  Ya = y.createContext({ prefixes: {}, breakpoints: Pg, minBreakpoint: _g });
function b(e, t) {
  const { prefixes: n } = y.useContext(Ya);
  return e || n[t] || t;
}
function Lg() {
  const { breakpoints: e } = y.useContext(Ya);
  return e;
}
function Ag() {
  const { minBreakpoint: e } = y.useContext(Ya);
  return e;
}
function Ja(e) {
  return (e && e.ownerDocument) || document;
}
function Dg(e) {
  var t = Ja(e);
  return (t && t.defaultView) || window;
}
function Ig(e, t) {
  return Dg(e).getComputedStyle(e, t);
}
var Bg = /([A-Z])/g;
function Fg(e) {
  return e.replace(Bg, "-$1").toLowerCase();
}
var zg = /^ms-/;
function jo(e) {
  return Fg(e).replace(zg, "-ms-");
}
var Mg =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function Ug(e) {
  return !!(e && Mg.test(e));
}
function vt(e, t) {
  var n = "",
    r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(jo(t)) || Ig(e).getPropertyValue(jo(t));
  Object.keys(t).forEach(function (o) {
    var i = t[o];
    !i && i !== 0
      ? e.style.removeProperty(jo(o))
      : Ug(o)
      ? (r += o + "(" + i + ") ")
      : (n += jo(o) + ": " + i + ";");
  }),
    r && (n += "transform: " + r + ";"),
    (e.style.cssText += ";" + n);
}
var Bp = { exports: {} },
  $g = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  bg = $g,
  Wg = bg;
function Fp() {}
function zp() {}
zp.resetWarningCache = Fp;
var Hg = function () {
  function e(r, o, i, l, s, a) {
    if (a !== Wg) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
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
    checkPropTypes: zp,
    resetWarningCache: Fp,
  };
  return (n.PropTypes = n), n;
};
Bp.exports = Hg();
var Vg = Bp.exports;
const gt = eo(Vg),
  Dc = { disabled: !1 },
  Mp = ce.createContext(null);
var Kg = function (t) {
    return t.scrollTop;
  },
  Cr = "unmounted",
  Dt = "exited",
  et = "entering",
  pt = "entered",
  Jr = "exiting",
  Nt = (function (e) {
    Og(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var l = o,
        s = l && !l.isMounting ? r.enter : r.appear,
        a;
      return (
        (i.appearStatus = null),
        r.in
          ? s
            ? ((a = Dt), (i.appearStatus = et))
            : (a = pt)
          : r.unmountOnExit || r.mountOnEnter
          ? (a = Cr)
          : (a = Dt),
        (i.state = { status: a }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var l = o.in;
      return l && i.status === Cr ? { status: Dt } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var l = this.state.status;
          this.props.in
            ? l !== et && l !== pt && (i = et)
            : (l === et || l === pt) && (i = Jr);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          l,
          s;
        return (
          (i = l = s = o),
          o != null &&
            typeof o != "number" &&
            ((i = o.exit),
            (l = o.enter),
            (s = o.appear !== void 0 ? o.appear : l)),
          { exit: i, enter: l, appear: s }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === et)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var l = this.props.nodeRef
                ? this.props.nodeRef.current
                : $n.findDOMNode(this);
              l && Kg(l);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Dt &&
            this.setState({ status: Cr });
      }),
      (n.performEnter = function (o) {
        var i = this,
          l = this.props.enter,
          s = this.context ? this.context.isMounting : o,
          a = this.props.nodeRef ? [s] : [$n.findDOMNode(this), s],
          u = a[0],
          c = a[1],
          f = this.getTimeouts(),
          m = s ? f.appear : f.enter;
        if ((!o && !l) || Dc.disabled) {
          this.safeSetState({ status: pt }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, c),
          this.safeSetState({ status: et }, function () {
            i.props.onEntering(u, c),
              i.onTransitionEnd(m, function () {
                i.safeSetState({ status: pt }, function () {
                  i.props.onEntered(u, c);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          l = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : $n.findDOMNode(this);
        if (!i || Dc.disabled) {
          this.safeSetState({ status: Dt }, function () {
            o.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: Jr }, function () {
            o.props.onExiting(s),
              o.onTransitionEnd(l.exit, function () {
                o.safeSetState({ status: Dt }, function () {
                  o.props.onExited(s);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          l = !0;
        return (
          (this.nextCallback = function (s) {
            l && ((l = !1), (i.nextCallback = null), o(s));
          }),
          (this.nextCallback.cancel = function () {
            l = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var l = this.props.nodeRef
            ? this.props.nodeRef.current
            : $n.findDOMNode(this),
          s = o == null && !this.props.addEndListener;
        if (!l || s) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var a = this.props.nodeRef
              ? [this.nextCallback]
              : [l, this.nextCallback],
            u = a[0],
            c = a[1];
          this.props.addEndListener(u, c);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === Cr) return null;
        var i = this.props,
          l = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var s = Ip(i, [
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
        ]);
        return ce.createElement(
          Mp.Provider,
          { value: null },
          typeof l == "function"
            ? l(o, s)
            : ce.cloneElement(ce.Children.only(l), s),
        );
      }),
      t
    );
  })(ce.Component);
Nt.contextType = Mp;
Nt.propTypes = {};
function Tn() {}
Nt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Tn,
  onEntering: Tn,
  onEntered: Tn,
  onExit: Tn,
  onExiting: Tn,
  onExited: Tn,
};
Nt.UNMOUNTED = Cr;
Nt.EXITED = Dt;
Nt.ENTERING = et;
Nt.ENTERED = pt;
Nt.EXITING = Jr;
const bi = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
var Us = !1,
  $s = !1;
try {
  var Ol = {
    get passive() {
      return (Us = !0);
    },
    get once() {
      return ($s = Us = !0);
    },
  };
  bi &&
    (window.addEventListener("test", Ol, Ol),
    window.removeEventListener("test", Ol, !0));
} catch {}
function Qg(e, t, n, r) {
  if (r && typeof r != "boolean" && !$s) {
    var o = r.once,
      i = r.capture,
      l = n;
    !$s &&
      o &&
      ((l =
        n.__once ||
        function s(a) {
          this.removeEventListener(t, s, i), n.call(this, a);
        }),
      (n.__once = l)),
      e.addEventListener(t, l, Us ? r : i);
  }
  e.addEventListener(t, n, r);
}
function Gg(e, t, n, r) {
  var o = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, o),
    n.__once && e.removeEventListener(t, n.__once, o);
}
function gi(e, t, n, r) {
  return (
    Qg(e, t, n, r),
    function () {
      Gg(e, t, n, r);
    }
  );
}
function qg(e, t, n, r) {
  if ((r === void 0 && (r = !0), e)) {
    var o = document.createEvent("HTMLEvents");
    o.initEvent(t, n, r), e.dispatchEvent(o);
  }
}
function Xg(e) {
  var t = vt(e, "transitionDuration") || "",
    n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function Yg(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1,
    o = setTimeout(function () {
      r || qg(e, "transitionend", !0);
    }, t + n),
    i = gi(
      e,
      "transitionend",
      function () {
        r = !0;
      },
      { once: !0 },
    );
  return function () {
    clearTimeout(o), i();
  };
}
function Jg(e, t, n, r) {
  n == null && (n = Xg(e) || 0);
  var o = Yg(e, n, r),
    i = gi(e, "transitionend", t);
  return function () {
    o(), i();
  };
}
function Ic(e, t) {
  const n = vt(e, t) || "",
    r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function Za(e, t) {
  const n = Ic(e, "transitionDuration"),
    r = Ic(e, "transitionDelay"),
    o = Jg(
      e,
      (i) => {
        i.target === e && (o(), t(i));
      },
      n + r,
    );
}
function vr(...e) {
  return e
    .filter((t) => t != null)
    .reduce((t, n) => {
      if (typeof n != "function")
        throw new Error(
          "Invalid Argument Type, must only provide functions, undefined, or null.",
        );
      return t === null
        ? n
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          };
    }, null);
}
function Up(e) {
  e.offsetHeight;
}
var Bc = function (t) {
  return !t || typeof t == "function"
    ? t
    : function (n) {
        t.current = n;
      };
};
function Zg(e, t) {
  var n = Bc(e),
    r = Bc(t);
  return function (o) {
    n && n(o), r && r(o);
  };
}
function Wi(e, t) {
  return y.useMemo(
    function () {
      return Zg(e, t);
    },
    [e, t],
  );
}
function e0(e) {
  return e && "setState" in e ? $n.findDOMNode(e) : e ?? null;
}
const eu = ce.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: o,
        onExited: i,
        addEndListener: l,
        children: s,
        childRef: a,
        ...u
      },
      c,
    ) => {
      const f = y.useRef(null),
        m = Wi(f, a),
        x = (N) => {
          m(e0(N));
        },
        g = (N) => (T) => {
          N && f.current && N(f.current, T);
        },
        w = y.useCallback(g(e), [e]),
        S = y.useCallback(g(t), [t]),
        h = y.useCallback(g(n), [n]),
        p = y.useCallback(g(r), [r]),
        v = y.useCallback(g(o), [o]),
        E = y.useCallback(g(i), [i]),
        k = y.useCallback(g(l), [l]);
      return d.jsx(Nt, {
        ref: c,
        ...u,
        onEnter: w,
        onEntered: h,
        onEntering: S,
        onExit: p,
        onExited: E,
        onExiting: v,
        addEndListener: k,
        nodeRef: f,
        children:
          typeof s == "function"
            ? (N, T) => s(N, { ...T, ref: x })
            : ce.cloneElement(s, { ref: x }),
      });
    },
  ),
  t0 = {
    height: ["marginTop", "marginBottom"],
    width: ["marginLeft", "marginRight"],
  };
function n0(e, t) {
  const n = `offset${e[0].toUpperCase()}${e.slice(1)}`,
    r = t[n],
    o = t0[e];
  return r + parseInt(vt(t, o[0]), 10) + parseInt(vt(t, o[1]), 10);
}
const r0 = {
    [Dt]: "collapse",
    [Jr]: "collapsing",
    [et]: "collapsing",
    [pt]: "collapse show",
  },
  o0 = ce.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: o,
        className: i,
        children: l,
        dimension: s = "height",
        in: a = !1,
        timeout: u = 300,
        mountOnEnter: c = !1,
        unmountOnExit: f = !1,
        appear: m = !1,
        getDimensionValue: x = n0,
        ...g
      },
      w,
    ) => {
      const S = typeof s == "function" ? s() : s,
        h = y.useMemo(
          () =>
            vr((N) => {
              N.style[S] = "0";
            }, e),
          [S, e],
        ),
        p = y.useMemo(
          () =>
            vr((N) => {
              const T = `scroll${S[0].toUpperCase()}${S.slice(1)}`;
              N.style[S] = `${N[T]}px`;
            }, t),
          [S, t],
        ),
        v = y.useMemo(
          () =>
            vr((N) => {
              N.style[S] = null;
            }, n),
          [S, n],
        ),
        E = y.useMemo(
          () =>
            vr((N) => {
              (N.style[S] = `${x(S, N)}px`), Up(N);
            }, r),
          [r, x, S],
        ),
        k = y.useMemo(
          () =>
            vr((N) => {
              N.style[S] = null;
            }, o),
          [S, o],
        );
      return d.jsx(eu, {
        ref: w,
        addEndListener: Za,
        ...g,
        "aria-expanded": g.role ? a : null,
        onEnter: h,
        onEntering: p,
        onEntered: v,
        onExit: E,
        onExiting: k,
        childRef: l.ref,
        in: a,
        timeout: u,
        mountOnEnter: c,
        unmountOnExit: f,
        appear: m,
        children: (N, T) =>
          ce.cloneElement(l, {
            ...T,
            className: B(
              i,
              l.props.className,
              r0[N],
              S === "width" && "collapse-horizontal",
            ),
          }),
      });
    },
  );
function i0(e) {
  var t = y.useRef(e);
  return (
    y.useEffect(
      function () {
        t.current = e;
      },
      [e],
    ),
    t
  );
}
function Ie(e) {
  var t = i0(e);
  return y.useCallback(
    function () {
      return t.current && t.current.apply(t, arguments);
    },
    [t],
  );
}
function l0() {
  var e = y.useRef(!0),
    t = y.useRef(function () {
      return e.current;
    });
  return (
    y.useEffect(function () {
      return (
        (e.current = !0),
        function () {
          e.current = !1;
        }
      );
    }, []),
    t.current
  );
}
function s0(e) {
  var t = y.useRef(null);
  return (
    y.useEffect(function () {
      t.current = e;
    }),
    t.current
  );
}
var a0 =
    typeof global < "u" &&
    global.navigator &&
    global.navigator.product === "ReactNative",
  u0 = typeof document < "u";
const bs = u0 || a0 ? y.useLayoutEffect : y.useEffect,
  c0 = ["as", "disabled"];
function f0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function d0(e) {
  return !e || e.trim() === "#";
}
function tu({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: o,
  role: i,
  onClick: l,
  tabIndex: s = 0,
  type: a,
}) {
  e || (n != null || r != null || o != null ? (e = "a") : (e = "button"));
  const u = { tagName: e };
  if (e === "button") return [{ type: a || "button", disabled: t }, u];
  const c = (m) => {
      if (((t || (e === "a" && d0(n))) && m.preventDefault(), t)) {
        m.stopPropagation();
        return;
      }
      l == null || l(m);
    },
    f = (m) => {
      m.key === " " && (m.preventDefault(), c(m));
    };
  return (
    e === "a" && (n || (n = "#"), t && (n = void 0)),
    [
      {
        role: i ?? "button",
        disabled: void 0,
        tabIndex: t ? void 0 : s,
        href: n,
        target: e === "a" ? r : void 0,
        "aria-disabled": t || void 0,
        rel: e === "a" ? o : void 0,
        onClick: c,
        onKeyDown: f,
      },
      u,
    ]
  );
}
const $p = y.forwardRef((e, t) => {
  let { as: n, disabled: r } = e,
    o = f0(e, c0);
  const [i, { tagName: l }] = tu(Object.assign({ tagName: n, disabled: r }, o));
  return d.jsx(l, Object.assign({}, o, i, { ref: t }));
});
$p.displayName = "Button";
const p0 = ["onKeyDown"];
function h0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function m0(e) {
  return !e || e.trim() === "#";
}
const nu = y.forwardRef((e, t) => {
  let { onKeyDown: n } = e,
    r = h0(e, p0);
  const [o] = tu(Object.assign({ tagName: "a" }, r)),
    i = Ie((l) => {
      o.onKeyDown(l), n == null || n(l);
    });
  return m0(r.href) || r.role === "button"
    ? d.jsx("a", Object.assign({ ref: t }, r, o, { onKeyDown: i }))
    : d.jsx("a", Object.assign({ ref: t }, r, { onKeyDown: n }));
});
nu.displayName = "Anchor";
const y0 = { [et]: "show", [pt]: "show" },
  wi = y.forwardRef(
    (
      {
        className: e,
        children: t,
        transitionClasses: n = {},
        onEnter: r,
        ...o
      },
      i,
    ) => {
      const l = {
          in: !1,
          timeout: 300,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          ...o,
        },
        s = y.useCallback(
          (a, u) => {
            Up(a), r == null || r(a, u);
          },
          [r],
        );
      return d.jsx(eu, {
        ref: i,
        addEndListener: Za,
        ...l,
        onEnter: s,
        childRef: t.ref,
        children: (a, u) =>
          y.cloneElement(t, {
            ...u,
            className: B("fade", e, t.props.className, y0[a], n[a]),
          }),
      });
    },
  );
wi.displayName = "Fade";
const v0 = {
    "aria-label": gt.string,
    onClick: gt.func,
    variant: gt.oneOf(["white"]),
  },
  Hi = y.forwardRef(
    ({ className: e, variant: t, "aria-label": n = "Close", ...r }, o) =>
      d.jsx("button", {
        ref: o,
        type: "button",
        className: B("btn-close", t && `btn-close-${t}`, e),
        "aria-label": n,
        ...r,
      }),
  );
Hi.displayName = "CloseButton";
Hi.propTypes = v0;
const Vi = (e) =>
  y.forwardRef((t, n) =>
    d.jsx("div", { ...t, ref: n, className: B(t.className, e) }),
  );
var g0 = /-(.)/g;
function w0(e) {
  return e.replace(g0, function (t, n) {
    return n.toUpperCase();
  });
}
const x0 = (e) => e[0].toUpperCase() + w0(e).slice(1);
function _e(e, { displayName: t = x0(e), Component: n, defaultProps: r } = {}) {
  const o = y.forwardRef(
    ({ className: i, bsPrefix: l, as: s = n || "div", ...a }, u) => {
      const c = { ...r, ...a },
        f = b(l, e);
      return d.jsx(s, { ref: u, className: B(i, f), ...c });
    },
  );
  return (o.displayName = t), o;
}
const bp = Vi("h4");
bp.displayName = "DivStyledAsH4";
const S0 = _e("alert-heading", { Component: bp }),
  E0 = _e("alert-link", { Component: nu }),
  Wp = y.forwardRef((e, t) => {
    const {
        bsPrefix: n,
        show: r = !0,
        closeLabel: o = "Close alert",
        closeVariant: i,
        className: l,
        children: s,
        variant: a = "primary",
        onClose: u,
        dismissible: c,
        transition: f = wi,
        ...m
      } = Xa(e, { show: "onClose" }),
      x = b(n, "alert"),
      g = Ie((h) => {
        u && u(!1, h);
      }),
      w = f === !0 ? wi : f,
      S = d.jsxs("div", {
        role: "alert",
        ...(w ? void 0 : m),
        ref: t,
        className: B(l, x, a && `${x}-${a}`, c && `${x}-dismissible`),
        children: [
          c && d.jsx(Hi, { onClick: g, "aria-label": o, variant: i }),
          s,
        ],
      });
    return w
      ? d.jsx(w, { unmountOnExit: !0, ...m, ref: void 0, in: r, children: S })
      : r
      ? S
      : null;
  });
Wp.displayName = "Alert";
const C0 = Object.assign(Wp, { Link: E0, Heading: S0 }),
  tr = y.forwardRef(
    (
      {
        as: e,
        bsPrefix: t,
        variant: n = "primary",
        size: r,
        active: o = !1,
        disabled: i = !1,
        className: l,
        ...s
      },
      a,
    ) => {
      const u = b(t, "btn"),
        [c, { tagName: f }] = tu({ tagName: e, disabled: i, ...s }),
        m = f;
      return d.jsx(m, {
        ...c,
        ...s,
        ref: a,
        disabled: i,
        className: B(
          l,
          u,
          o && "active",
          n && `${u}-${n}`,
          r && `${u}-${r}`,
          s.href && i && "disabled",
        ),
      });
    },
  );
tr.displayName = "Button";
const Hp = y.forwardRef(
  ({ bsPrefix: e, className: t, variant: n, as: r = "img", ...o }, i) => {
    const l = b(e, "card-img");
    return d.jsx(r, { ref: i, className: B(n ? `${l}-${n}` : l, t), ...o });
  },
);
Hp.displayName = "CardImg";
const ru = y.createContext(null);
ru.displayName = "CardHeaderContext";
const Vp = y.forwardRef(
  ({ bsPrefix: e, className: t, as: n = "div", ...r }, o) => {
    const i = b(e, "card-header"),
      l = y.useMemo(() => ({ cardHeaderBsPrefix: i }), [i]);
    return d.jsx(ru.Provider, {
      value: l,
      children: d.jsx(n, { ref: o, ...r, className: B(t, i) }),
    });
  },
);
Vp.displayName = "CardHeader";
const k0 = Vi("h5"),
  N0 = Vi("h6"),
  Kp = _e("card-body"),
  R0 = _e("card-title", { Component: k0 }),
  T0 = _e("card-subtitle", { Component: N0 }),
  j0 = _e("card-link", { Component: "a" }),
  O0 = _e("card-text", { Component: "p" }),
  P0 = _e("card-footer"),
  _0 = _e("card-img-overlay"),
  Qp = y.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        bg: n,
        text: r,
        border: o,
        body: i = !1,
        children: l,
        as: s = "div",
        ...a
      },
      u,
    ) => {
      const c = b(e, "card");
      return d.jsx(s, {
        ref: u,
        ...a,
        className: B(
          t,
          c,
          n && `bg-${n}`,
          r && `text-${r}`,
          o && `border-${o}`,
        ),
        children: i ? d.jsx(Kp, { children: l }) : l,
      });
    },
  );
Qp.displayName = "Card";
const H = Object.assign(Qp, {
  Img: Hp,
  Title: R0,
  Subtitle: T0,
  Body: Kp,
  Link: j0,
  Text: O0,
  Header: Vp,
  Footer: P0,
  ImgOverlay: _0,
});
function L0(e) {
  var t = y.useRef(e);
  return (t.current = e), t;
}
function A0(e) {
  var t = L0(e);
  y.useEffect(function () {
    return function () {
      return t.current();
    };
  }, []);
}
function D0(e, t) {
  return y.Children.toArray(e).some((n) => y.isValidElement(n) && n.type === t);
}
function I0({ as: e, bsPrefix: t, className: n, ...r }) {
  t = b(t, "col");
  const o = Lg(),
    i = Ag(),
    l = [],
    s = [];
  return (
    o.forEach((a) => {
      const u = r[a];
      delete r[a];
      let c, f, m;
      typeof u == "object" && u != null
        ? ({ span: c, offset: f, order: m } = u)
        : (c = u);
      const x = a !== i ? `-${a}` : "";
      c && l.push(c === !0 ? `${t}${x}` : `${t}${x}-${c}`),
        m != null && s.push(`order${x}-${m}`),
        f != null && s.push(`offset${x}-${f}`);
    }),
    [
      { ...r, className: B(n, ...l, ...s) },
      { as: e, bsPrefix: t, spans: l },
    ]
  );
}
const Gp = y.forwardRef((e, t) => {
  const [{ className: n, ...r }, { as: o = "div", bsPrefix: i, spans: l }] =
    I0(e);
  return d.jsx(o, { ...r, ref: t, className: B(n, !l.length && i) });
});
Gp.displayName = "Col";
var B0 = Function.prototype.bind.call(Function.prototype.call, [].slice);
function on(e, t) {
  return B0(e.querySelectorAll(t));
}
function F0() {
  var e = y.useReducer(function (n) {
      return !n;
    }, !1),
    t = e[1];
  return t;
}
function Fc(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition)
    return e === t || !!(e.compareDocumentPosition(t) & 16);
}
const xi = y.createContext(null),
  ou = (e, t = null) => (e != null ? String(e) : t || null),
  iu = y.createContext(null);
iu.displayName = "NavContext";
const z0 = "data-rr-ui-",
  M0 = "rrUi";
function Ki(e) {
  return `${z0}${e}`;
}
function U0(e) {
  return `${M0}${e}`;
}
const qp = y.createContext(bi ? window : void 0);
qp.Provider;
function Xp() {
  return y.useContext(qp);
}
const kn = y.createContext(null);
kn.displayName = "NavbarContext";
const $0 = { type: gt.string, tooltip: gt.bool, as: gt.elementType },
  Qi = y.forwardRef(
    (
      { as: e = "div", className: t, type: n = "valid", tooltip: r = !1, ...o },
      i,
    ) =>
      d.jsx(e, {
        ...o,
        ref: i,
        className: B(t, `${n}-${r ? "tooltip" : "feedback"}`),
      }),
  );
Qi.displayName = "Feedback";
Qi.propTypes = $0;
const Ct = y.createContext({}),
  lu = y.forwardRef(
    (
      {
        id: e,
        bsPrefix: t,
        className: n,
        type: r = "checkbox",
        isValid: o = !1,
        isInvalid: i = !1,
        as: l = "input",
        ...s
      },
      a,
    ) => {
      const { controlId: u } = y.useContext(Ct);
      return (
        (t = b(t, "form-check-input")),
        d.jsx(l, {
          ...s,
          ref: a,
          type: r,
          id: e || u,
          className: B(n, t, o && "is-valid", i && "is-invalid"),
        })
      );
    },
  );
lu.displayName = "FormCheckInput";
const Si = y.forwardRef(
  ({ bsPrefix: e, className: t, htmlFor: n, ...r }, o) => {
    const { controlId: i } = y.useContext(Ct);
    return (
      (e = b(e, "form-check-label")),
      d.jsx("label", { ...r, ref: o, htmlFor: n || i, className: B(t, e) })
    );
  },
);
Si.displayName = "FormCheckLabel";
const Yp = y.forwardRef(
  (
    {
      id: e,
      bsPrefix: t,
      bsSwitchPrefix: n,
      inline: r = !1,
      reverse: o = !1,
      disabled: i = !1,
      isValid: l = !1,
      isInvalid: s = !1,
      feedbackTooltip: a = !1,
      feedback: u,
      feedbackType: c,
      className: f,
      style: m,
      title: x = "",
      type: g = "checkbox",
      label: w,
      children: S,
      as: h = "input",
      ...p
    },
    v,
  ) => {
    (t = b(t, "form-check")), (n = b(n, "form-switch"));
    const { controlId: E } = y.useContext(Ct),
      k = y.useMemo(() => ({ controlId: e || E }), [E, e]),
      N = (!S && w != null && w !== !1) || D0(S, Si),
      T = d.jsx(lu, {
        ...p,
        type: g === "switch" ? "checkbox" : g,
        ref: v,
        isValid: l,
        isInvalid: s,
        disabled: i,
        as: h,
      });
    return d.jsx(Ct.Provider, {
      value: k,
      children: d.jsx("div", {
        style: m,
        className: B(
          f,
          N && t,
          r && `${t}-inline`,
          o && `${t}-reverse`,
          g === "switch" && n,
        ),
        children:
          S ||
          d.jsxs(d.Fragment, {
            children: [
              T,
              N && d.jsx(Si, { title: x, children: w }),
              u && d.jsx(Qi, { type: c, tooltip: a, children: u }),
            ],
          }),
      }),
    });
  },
);
Yp.displayName = "FormCheck";
const Ei = Object.assign(Yp, { Input: lu, Label: Si }),
  Jp = y.forwardRef(
    (
      {
        bsPrefix: e,
        type: t,
        size: n,
        htmlSize: r,
        id: o,
        className: i,
        isValid: l = !1,
        isInvalid: s = !1,
        plaintext: a,
        readOnly: u,
        as: c = "input",
        ...f
      },
      m,
    ) => {
      const { controlId: x } = y.useContext(Ct);
      e = b(e, "form-control");
      let g;
      return (
        a
          ? (g = { [`${e}-plaintext`]: !0 })
          : (g = { [e]: !0, [`${e}-${n}`]: n }),
        d.jsx(c, {
          ...f,
          type: t,
          size: r,
          ref: m,
          readOnly: u,
          id: o || x,
          className: B(
            i,
            g,
            l && "is-valid",
            s && "is-invalid",
            t === "color" && `${e}-color`,
          ),
        })
      );
    },
  );
Jp.displayName = "FormControl";
const b0 = Object.assign(Jp, { Feedback: Qi }),
  W0 = _e("form-floating"),
  su = y.forwardRef(({ controlId: e, as: t = "div", ...n }, r) => {
    const o = y.useMemo(() => ({ controlId: e }), [e]);
    return d.jsx(Ct.Provider, {
      value: o,
      children: d.jsx(t, { ...n, ref: r }),
    });
  });
su.displayName = "FormGroup";
const Zp = y.forwardRef(
  (
    {
      as: e = "label",
      bsPrefix: t,
      column: n = !1,
      visuallyHidden: r = !1,
      className: o,
      htmlFor: i,
      ...l
    },
    s,
  ) => {
    const { controlId: a } = y.useContext(Ct);
    t = b(t, "form-label");
    let u = "col-form-label";
    typeof n == "string" && (u = `${u} ${u}-${n}`);
    const c = B(o, t, r && "visually-hidden", n && u);
    return (
      (i = i || a),
      n
        ? d.jsx(Gp, { ref: s, as: "label", className: c, htmlFor: i, ...l })
        : d.jsx(e, { ref: s, className: c, htmlFor: i, ...l })
    );
  },
);
Zp.displayName = "FormLabel";
const eh = y.forwardRef(({ bsPrefix: e, className: t, id: n, ...r }, o) => {
  const { controlId: i } = y.useContext(Ct);
  return (
    (e = b(e, "form-range")),
    d.jsx("input", {
      ...r,
      type: "range",
      ref: o,
      className: B(t, e),
      id: n || i,
    })
  );
});
eh.displayName = "FormRange";
const th = y.forwardRef(
  (
    {
      bsPrefix: e,
      size: t,
      htmlSize: n,
      className: r,
      isValid: o = !1,
      isInvalid: i = !1,
      id: l,
      ...s
    },
    a,
  ) => {
    const { controlId: u } = y.useContext(Ct);
    return (
      (e = b(e, "form-select")),
      d.jsx("select", {
        ...s,
        size: n,
        ref: a,
        className: B(
          r,
          e,
          t && `${e}-${t}`,
          o && "is-valid",
          i && "is-invalid",
        ),
        id: l || u,
      })
    );
  },
);
th.displayName = "FormSelect";
const nh = y.forwardRef(
  ({ bsPrefix: e, className: t, as: n = "small", muted: r, ...o }, i) => (
    (e = b(e, "form-text")),
    d.jsx(n, { ...o, ref: i, className: B(t, e, r && "text-muted") })
  ),
);
nh.displayName = "FormText";
const rh = y.forwardRef((e, t) => d.jsx(Ei, { ...e, ref: t, type: "switch" }));
rh.displayName = "Switch";
const H0 = Object.assign(rh, { Input: Ei.Input, Label: Ei.Label }),
  oh = y.forwardRef(
    (
      { bsPrefix: e, className: t, children: n, controlId: r, label: o, ...i },
      l,
    ) => (
      (e = b(e, "form-floating")),
      d.jsxs(su, {
        ref: l,
        className: B(t, e),
        controlId: r,
        ...i,
        children: [n, d.jsx("label", { htmlFor: r, children: o })],
      })
    ),
  );
oh.displayName = "FloatingLabel";
const V0 = { _ref: gt.any, validated: gt.bool, as: gt.elementType },
  au = y.forwardRef(({ className: e, validated: t, as: n = "form", ...r }, o) =>
    d.jsx(n, { ...r, ref: o, className: B(e, t && "was-validated") }),
  );
au.displayName = "Form";
au.propTypes = V0;
const tn = Object.assign(au, {
    Group: su,
    Control: b0,
    Floating: W0,
    Check: Ei,
    Switch: H0,
    Label: Zp,
    Text: nh,
    Range: eh,
    Select: th,
    FloatingLabel: oh,
  }),
  Rt = y.forwardRef(
    ({ bsPrefix: e, fluid: t = !1, as: n = "div", className: r, ...o }, i) => {
      const l = b(e, "container"),
        s = typeof t == "string" ? `-${t}` : "-fluid";
      return d.jsx(n, { ref: i, ...o, className: B(r, t ? `${l}${s}` : l) });
    },
  );
Rt.displayName = "Container";
const ih = y.createContext(null),
  K0 = ["as", "active", "eventKey"];
function Q0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function lh({ key: e, onClick: t, active: n, id: r, role: o, disabled: i }) {
  const l = y.useContext(xi),
    s = y.useContext(iu),
    a = y.useContext(ih);
  let u = n;
  const c = { role: o };
  if (s) {
    !o && s.role === "tablist" && (c.role = "tab");
    const f = s.getControllerId(e ?? null),
      m = s.getControlledId(e ?? null);
    (c[Ki("event-key")] = e),
      (c.id = f || r),
      (u = n == null && e != null ? s.activeKey === e : n),
      (u ||
        (!(a != null && a.unmountOnExit) && !(a != null && a.mountOnEnter))) &&
        (c["aria-controls"] = m);
  }
  return (
    c.role === "tab" &&
      ((c["aria-selected"] = u),
      u || (c.tabIndex = -1),
      i && ((c.tabIndex = -1), (c["aria-disabled"] = !0))),
    (c.onClick = Ie((f) => {
      i ||
        (t == null || t(f),
        e != null && l && !f.isPropagationStopped() && l(e, f));
    })),
    [c, { isActive: u }]
  );
}
const sh = y.forwardRef((e, t) => {
  let { as: n = $p, active: r, eventKey: o } = e,
    i = Q0(e, K0);
  const [l, s] = lh(Object.assign({ key: ou(o, i.href), active: r }, i));
  return (
    (l[Ki("active")] = s.isActive),
    d.jsx(n, Object.assign({}, i, l, { ref: t }))
  );
});
sh.displayName = "NavItem";
const G0 = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function q0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const zc = () => {},
  Mc = Ki("event-key"),
  ah = y.forwardRef((e, t) => {
    let { as: n = "div", onSelect: r, activeKey: o, role: i, onKeyDown: l } = e,
      s = q0(e, G0);
    const a = F0(),
      u = y.useRef(!1),
      c = y.useContext(xi),
      f = y.useContext(ih);
    let m, x;
    f &&
      ((i = i || "tablist"),
      (o = f.activeKey),
      (m = f.getControlledId),
      (x = f.getControllerId));
    const g = y.useRef(null),
      w = (v) => {
        const E = g.current;
        if (!E) return null;
        const k = on(E, `[${Mc}]:not([aria-disabled=true])`),
          N = E.querySelector("[aria-selected=true]");
        if (!N || N !== document.activeElement) return null;
        const T = k.indexOf(N);
        if (T === -1) return null;
        let j = T + v;
        return j >= k.length && (j = 0), j < 0 && (j = k.length - 1), k[j];
      },
      S = (v, E) => {
        v != null && (r == null || r(v, E), c == null || c(v, E));
      },
      h = (v) => {
        if ((l == null || l(v), !f)) return;
        let E;
        switch (v.key) {
          case "ArrowLeft":
          case "ArrowUp":
            E = w(-1);
            break;
          case "ArrowRight":
          case "ArrowDown":
            E = w(1);
            break;
          default:
            return;
        }
        E &&
          (v.preventDefault(),
          S(E.dataset[U0("EventKey")] || null, v),
          (u.current = !0),
          a());
      };
    y.useEffect(() => {
      if (g.current && u.current) {
        const v = g.current.querySelector(`[${Mc}][aria-selected=true]`);
        v == null || v.focus();
      }
      u.current = !1;
    });
    const p = Wi(t, g);
    return d.jsx(xi.Provider, {
      value: S,
      children: d.jsx(iu.Provider, {
        value: {
          role: i,
          activeKey: ou(o),
          getControlledId: m || zc,
          getControllerId: x || zc,
        },
        children: d.jsx(
          n,
          Object.assign({}, s, { onKeyDown: h, ref: p, role: i }),
        ),
      }),
    });
  });
ah.displayName = "Nav";
const X0 = Object.assign(ah, { Item: sh });
function Pl(e) {
  e === void 0 && (e = Ja());
  try {
    var t = e.activeElement;
    return !t || !t.nodeName ? null : t;
  } catch {
    return e.body;
  }
}
function Y0(e = document) {
  const t = e.defaultView;
  return Math.abs(t.innerWidth - e.documentElement.clientWidth);
}
const Uc = Ki("modal-open");
class uu {
  constructor({
    ownerDocument: t,
    handleContainerOverflow: n = !0,
    isRTL: r = !1,
  } = {}) {
    (this.handleContainerOverflow = n),
      (this.isRTL = r),
      (this.modals = []),
      (this.ownerDocument = t);
  }
  getScrollbarWidth() {
    return Y0(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(t) {}
  removeModalAttributes(t) {}
  setContainerStyle(t) {
    const n = { overflow: "hidden" },
      r = this.isRTL ? "paddingLeft" : "paddingRight",
      o = this.getElement();
    (t.style = { overflow: o.style.overflow, [r]: o.style[r] }),
      t.scrollBarWidth &&
        (n[r] = `${parseInt(vt(o, r) || "0", 10) + t.scrollBarWidth}px`),
      o.setAttribute(Uc, ""),
      vt(o, n);
  }
  reset() {
    [...this.modals].forEach((t) => this.remove(t));
  }
  removeContainerStyle(t) {
    const n = this.getElement();
    n.removeAttribute(Uc), Object.assign(n.style, t.style);
  }
  add(t) {
    let n = this.modals.indexOf(t);
    return (
      n !== -1 ||
        ((n = this.modals.length),
        this.modals.push(t),
        this.setModalAttributes(t),
        n !== 0) ||
        ((this.state = { scrollBarWidth: this.getScrollbarWidth(), style: {} }),
        this.handleContainerOverflow && this.setContainerStyle(this.state)),
      n
    );
  }
  remove(t) {
    const n = this.modals.indexOf(t);
    n !== -1 &&
      (this.modals.splice(n, 1),
      !this.modals.length &&
        this.handleContainerOverflow &&
        this.removeContainerStyle(this.state),
      this.removeModalAttributes(t));
  }
  isTopModal(t) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === t;
  }
}
const _l = (e, t) =>
  bi
    ? e == null
      ? (t || Ja()).body
      : (typeof e == "function" && (e = e()),
        e && "current" in e && (e = e.current),
        e && ("nodeType" in e || e.getBoundingClientRect) ? e : null)
    : null;
function J0(e, t) {
  const n = Xp(),
    [r, o] = y.useState(() => _l(e, n == null ? void 0 : n.document));
  if (!r) {
    const i = _l(e);
    i && o(i);
  }
  return (
    y.useEffect(() => {}, [t, r]),
    y.useEffect(() => {
      const i = _l(e);
      i !== r && o(i);
    }, [e, r]),
    r
  );
}
function Z0({
  children: e,
  in: t,
  onExited: n,
  mountOnEnter: r,
  unmountOnExit: o,
}) {
  const i = y.useRef(null),
    l = y.useRef(t),
    s = Ie(n);
  y.useEffect(() => {
    t ? (l.current = !0) : s(i.current);
  }, [t, s]);
  const a = Wi(i, e.ref),
    u = y.cloneElement(e, { ref: a });
  return t ? u : o || (!l.current && r) ? null : u;
}
function e1({ in: e, onTransition: t }) {
  const n = y.useRef(null),
    r = y.useRef(!0),
    o = Ie(t);
  return (
    bs(() => {
      if (!n.current) return;
      let i = !1;
      return (
        o({ in: e, element: n.current, initial: r.current, isStale: () => i }),
        () => {
          i = !0;
        }
      );
    }, [e, o]),
    bs(
      () => (
        (r.current = !1),
        () => {
          r.current = !0;
        }
      ),
      [],
    ),
    n
  );
}
function t1({ children: e, in: t, onExited: n, onEntered: r, transition: o }) {
  const [i, l] = y.useState(!t);
  t && i && l(!1);
  const s = e1({
      in: !!t,
      onTransition: (u) => {
        const c = () => {
          u.isStale() ||
            (u.in
              ? r == null || r(u.element, u.initial)
              : (l(!0), n == null || n(u.element)));
        };
        Promise.resolve(o(u)).then(c, (f) => {
          throw (u.in || l(!0), f);
        });
      },
    }),
    a = Wi(s, e.ref);
  return i && !t ? null : y.cloneElement(e, { ref: a });
}
function $c(e, t, n) {
  return e
    ? d.jsx(e, Object.assign({}, n))
    : t
    ? d.jsx(t1, Object.assign({}, n, { transition: t }))
    : d.jsx(Z0, Object.assign({}, n));
}
function n1(e) {
  return e.code === "Escape" || e.keyCode === 27;
}
const r1 = [
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
function o1(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
let Ll;
function i1(e) {
  return (
    Ll || (Ll = new uu({ ownerDocument: e == null ? void 0 : e.document })), Ll
  );
}
function l1(e) {
  const t = Xp(),
    n = e || i1(t),
    r = y.useRef({ dialog: null, backdrop: null });
  return Object.assign(r.current, {
    add: () => n.add(r.current),
    remove: () => n.remove(r.current),
    isTopModal: () => n.isTopModal(r.current),
    setDialogRef: y.useCallback((o) => {
      r.current.dialog = o;
    }, []),
    setBackdropRef: y.useCallback((o) => {
      r.current.backdrop = o;
    }, []),
  });
}
const uh = y.forwardRef((e, t) => {
  let {
      show: n = !1,
      role: r = "dialog",
      className: o,
      style: i,
      children: l,
      backdrop: s = !0,
      keyboard: a = !0,
      onBackdropClick: u,
      onEscapeKeyDown: c,
      transition: f,
      runTransition: m,
      backdropTransition: x,
      runBackdropTransition: g,
      autoFocus: w = !0,
      enforceFocus: S = !0,
      restoreFocus: h = !0,
      restoreFocusOptions: p,
      renderDialog: v,
      renderBackdrop: E = (J) => d.jsx("div", Object.assign({}, J)),
      manager: k,
      container: N,
      onShow: T,
      onHide: j = () => {},
      onExit: z,
      onExited: A,
      onExiting: ae,
      onEnter: qe,
      onEntering: Le,
      onEntered: ct,
    } = e,
    Tt = o1(e, r1);
  const be = J0(N),
    G = l1(k),
    O = l0(),
    _ = s0(n),
    [L, M] = y.useState(!n),
    U = y.useRef(null);
  y.useImperativeHandle(t, () => G, [G]),
    bi && !_ && n && (U.current = Pl()),
    n && L && M(!1);
  const Ae = Ie(() => {
      if (
        (G.add(),
        (el.current = gi(document, "keydown", en)),
        (Zi.current = gi(document, "focus", () => setTimeout(te), !0)),
        T && T(),
        w)
      ) {
        const J = Pl(document);
        G.dialog &&
          J &&
          !Fc(G.dialog, J) &&
          ((U.current = J), G.dialog.focus());
      }
    }),
    ie = Ie(() => {
      if (
        (G.remove(),
        el.current == null || el.current(),
        Zi.current == null || Zi.current(),
        h)
      ) {
        var J;
        (J = U.current) == null || J.focus == null || J.focus(p),
          (U.current = null);
      }
    });
  y.useEffect(() => {
    !n || !be || Ae();
  }, [n, be, Ae]),
    y.useEffect(() => {
      L && ie();
    }, [L, ie]),
    A0(() => {
      ie();
    });
  const te = Ie(() => {
      if (!S || !O() || !G.isTopModal()) return;
      const J = Pl();
      G.dialog && J && !Fc(G.dialog, J) && G.dialog.focus();
    }),
    we = Ie((J) => {
      J.target === J.currentTarget && (u == null || u(J), s === !0 && j());
    }),
    en = Ie((J) => {
      a &&
        n1(J) &&
        G.isTopModal() &&
        (c == null || c(J), J.defaultPrevented || j());
    }),
    Zi = y.useRef(),
    el = y.useRef(),
    Kh = (...J) => {
      M(!0), A == null || A(...J);
    };
  if (!be) return null;
  const mu = Object.assign(
    {
      role: r,
      ref: G.setDialogRef,
      "aria-modal": r === "dialog" ? !0 : void 0,
    },
    Tt,
    { style: i, className: o, tabIndex: -1 },
  );
  let tl = v
    ? v(mu)
    : d.jsx(
        "div",
        Object.assign({}, mu, {
          children: y.cloneElement(l, { role: "document" }),
        }),
      );
  tl = $c(f, m, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!n,
    onExit: z,
    onExiting: ae,
    onExited: Kh,
    onEnter: qe,
    onEntering: Le,
    onEntered: ct,
    children: tl,
  });
  let uo = null;
  return (
    s &&
      ((uo = E({ ref: G.setBackdropRef, onClick: we })),
      (uo = $c(x, g, {
        in: !!n,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: uo,
      }))),
    d.jsx(d.Fragment, {
      children: $n.createPortal(d.jsxs(d.Fragment, { children: [uo, tl] }), be),
    })
  );
});
uh.displayName = "Modal";
const s1 = Object.assign(uh, { Manager: uu });
function a1(e, t) {
  return e.classList
    ? e.classList.contains(t)
    : (" " + (e.className.baseVal || e.className) + " ").indexOf(
        " " + t + " ",
      ) !== -1;
}
function u1(e, t) {
  e.classList
    ? e.classList.add(t)
    : a1(e, t) ||
      (typeof e.className == "string"
        ? (e.className = e.className + " " + t)
        : e.setAttribute(
            "class",
            ((e.className && e.className.baseVal) || "") + " " + t,
          ));
}
function bc(e, t) {
  return e
    .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function c1(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == "string"
    ? (e.className = bc(e.className, t))
    : e.setAttribute(
        "class",
        bc((e.className && e.className.baseVal) || "", t),
      );
}
const jn = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler",
};
class ch extends uu {
  adjustAndStore(t, n, r) {
    const o = n.style[t];
    (n.dataset[t] = o), vt(n, { [t]: `${parseFloat(vt(n, t)) + r}px` });
  }
  restore(t, n) {
    const r = n.dataset[t];
    r !== void 0 && (delete n.dataset[t], vt(n, { [t]: r }));
  }
  setContainerStyle(t) {
    super.setContainerStyle(t);
    const n = this.getElement();
    if ((u1(n, "modal-open"), !t.scrollBarWidth)) return;
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      o = this.isRTL ? "marginLeft" : "marginRight";
    on(n, jn.FIXED_CONTENT).forEach((i) =>
      this.adjustAndStore(r, i, t.scrollBarWidth),
    ),
      on(n, jn.STICKY_CONTENT).forEach((i) =>
        this.adjustAndStore(o, i, -t.scrollBarWidth),
      ),
      on(n, jn.NAVBAR_TOGGLER).forEach((i) =>
        this.adjustAndStore(o, i, t.scrollBarWidth),
      );
  }
  removeContainerStyle(t) {
    super.removeContainerStyle(t);
    const n = this.getElement();
    c1(n, "modal-open");
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      o = this.isRTL ? "marginLeft" : "marginRight";
    on(n, jn.FIXED_CONTENT).forEach((i) => this.restore(r, i)),
      on(n, jn.STICKY_CONTENT).forEach((i) => this.restore(o, i)),
      on(n, jn.NAVBAR_TOGGLER).forEach((i) => this.restore(o, i));
  }
}
let Al;
function f1(e) {
  return Al || (Al = new ch(e)), Al;
}
const fh = y.createContext({ onHide() {} }),
  d1 = y.forwardRef(
    (
      {
        closeLabel: e = "Close",
        closeVariant: t,
        closeButton: n = !1,
        onHide: r,
        children: o,
        ...i
      },
      l,
    ) => {
      const s = y.useContext(fh),
        a = Ie(() => {
          s == null || s.onHide(), r == null || r();
        });
      return d.jsxs("div", {
        ref: l,
        ...i,
        children: [
          o,
          n && d.jsx(Hi, { "aria-label": e, variant: t, onClick: a }),
        ],
      });
    },
  );
var Wc = { exports: {} },
  Ws = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
  function n(r) {
    function o(l, s, a, u, c, f) {
      var m = u || "<<anonymous>>",
        x = f || a;
      if (s[a] == null)
        return l
          ? new Error(
              "Required " +
                c +
                " `" +
                x +
                "` was not specified " +
                ("in `" + m + "`."),
            )
          : null;
      for (
        var g = arguments.length, w = Array(g > 6 ? g - 6 : 0), S = 6;
        S < g;
        S++
      )
        w[S - 6] = arguments[S];
      return r.apply(void 0, [s, a, m, c, x].concat(w));
    }
    var i = o.bind(null, !1);
    return (i.isRequired = o.bind(null, !0)), i;
  }
  e.exports = t.default;
})(Ws, Ws.exports);
var p1 = Ws.exports;
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i);
  var n = p1,
    r = o(n);
  function o(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function i() {
    for (var l = arguments.length, s = Array(l), a = 0; a < l; a++)
      s[a] = arguments[a];
    function u() {
      for (var c = arguments.length, f = Array(c), m = 0; m < c; m++)
        f[m] = arguments[m];
      var x = null;
      return (
        s.forEach(function (g) {
          if (x == null) {
            var w = g.apply(void 0, f);
            w != null && (x = w);
          }
        }),
        x
      );
    }
    return (0, r.default)(u);
  }
  e.exports = t.default;
})(Wc, Wc.exports);
const h1 = _e("nav-item"),
  dh = y.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        as: n = nu,
        active: r,
        eventKey: o,
        disabled: i = !1,
        ...l
      },
      s,
    ) => {
      e = b(e, "nav-link");
      const [a, u] = lh({ key: ou(o, l.href), active: r, disabled: i, ...l });
      return d.jsx(n, {
        ...l,
        ...a,
        ref: s,
        disabled: i,
        className: B(t, e, i && "disabled", u.isActive && "active"),
      });
    },
  );
dh.displayName = "NavLink";
const ph = y.forwardRef((e, t) => {
  const {
      as: n = "div",
      bsPrefix: r,
      variant: o,
      fill: i = !1,
      justify: l = !1,
      navbar: s,
      navbarScroll: a,
      className: u,
      activeKey: c,
      ...f
    } = Xa(e, { activeKey: "onSelect" }),
    m = b(r, "nav");
  let x,
    g,
    w = !1;
  const S = y.useContext(kn),
    h = y.useContext(ru);
  return (
    S
      ? ((x = S.bsPrefix), (w = s ?? !0))
      : h && ({ cardHeaderBsPrefix: g } = h),
    d.jsx(X0, {
      as: n,
      ref: t,
      activeKey: c,
      className: B(u, {
        [m]: !w,
        [`${x}-nav`]: w,
        [`${x}-nav-scroll`]: w && a,
        [`${g}-${o}`]: !!g,
        [`${m}-${o}`]: !!o,
        [`${m}-fill`]: i,
        [`${m}-justified`]: l,
      }),
      ...f,
    })
  );
});
ph.displayName = "Nav";
const m1 = Object.assign(ph, { Item: h1, Link: dh }),
  hh = y.forwardRef(({ bsPrefix: e, className: t, as: n, ...r }, o) => {
    e = b(e, "navbar-brand");
    const i = n || (r.href ? "a" : "span");
    return d.jsx(i, { ...r, ref: o, className: B(t, e) });
  });
hh.displayName = "NavbarBrand";
const mh = y.forwardRef(({ children: e, bsPrefix: t, ...n }, r) => {
  t = b(t, "navbar-collapse");
  const o = y.useContext(kn);
  return d.jsx(o0, {
    in: !!(o && o.expanded),
    ...n,
    children: d.jsx("div", { ref: r, className: t, children: e }),
  });
});
mh.displayName = "NavbarCollapse";
const yh = y.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      children: n,
      label: r = "Toggle navigation",
      as: o = "button",
      onClick: i,
      ...l
    },
    s,
  ) => {
    e = b(e, "navbar-toggler");
    const { onToggle: a, expanded: u } = y.useContext(kn) || {},
      c = Ie((f) => {
        i && i(f), a && a();
      });
    return (
      o === "button" && (l.type = "button"),
      d.jsx(o, {
        ...l,
        ref: s,
        onClick: c,
        "aria-label": r,
        className: B(t, e, !u && "collapsed"),
        children: n || d.jsx("span", { className: `${e}-icon` }),
      })
    );
  },
);
yh.displayName = "NavbarToggle";
var Hs = new WeakMap(),
  Hc = function (t, n) {
    if (!(!t || !n)) {
      var r = Hs.get(n) || new Map();
      Hs.set(n, r);
      var o = r.get(t);
      return (
        o || ((o = n.matchMedia(t)), (o.refCount = 0), r.set(o.media, o)), o
      );
    }
  };
function y1(e, t) {
  t === void 0 && (t = typeof window > "u" ? void 0 : window);
  var n = Hc(e, t),
    r = y.useState(function () {
      return n ? n.matches : !1;
    }),
    o = r[0],
    i = r[1];
  return (
    bs(
      function () {
        var l = Hc(e, t);
        if (!l) return i(!1);
        var s = Hs.get(t),
          a = function () {
            i(l.matches);
          };
        return (
          l.refCount++,
          l.addListener(a),
          a(),
          function () {
            l.removeListener(a),
              l.refCount--,
              l.refCount <= 0 && (s == null || s.delete(l.media)),
              (l = void 0);
          }
        );
      },
      [e],
    ),
    o
  );
}
function v1(e) {
  var t = Object.keys(e);
  function n(s, a) {
    return s === a ? a : s ? s + " and " + a : a;
  }
  function r(s) {
    return t[Math.min(t.indexOf(s) + 1, t.length - 1)];
  }
  function o(s) {
    var a = r(s),
      u = e[a];
    return (
      typeof u == "number"
        ? (u = u - 0.2 + "px")
        : (u = "calc(" + u + " - 0.2px)"),
      "(max-width: " + u + ")"
    );
  }
  function i(s) {
    var a = e[s];
    return typeof a == "number" && (a = a + "px"), "(min-width: " + a + ")";
  }
  function l(s, a, u) {
    var c;
    if (typeof s == "object") (c = s), (u = a), (a = !0);
    else {
      var f;
      (a = a || !0), (c = ((f = {}), (f[s] = a), f));
    }
    var m = y.useMemo(
      function () {
        return Object.entries(c).reduce(function (x, g) {
          var w = g[0],
            S = g[1];
          return (
            (S === "up" || S === !0) && (x = n(x, i(w))),
            (S === "down" || S === !0) && (x = n(x, o(w))),
            x
          );
        }, "");
      },
      [JSON.stringify(c)],
    );
    return y1(m, u);
  }
  return l;
}
var g1 = v1({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 });
const w1 = _e("offcanvas-body"),
  x1 = { [et]: "show", [pt]: "show" },
  vh = y.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        children: n,
        in: r = !1,
        mountOnEnter: o = !1,
        unmountOnExit: i = !1,
        appear: l = !1,
        ...s
      },
      a,
    ) => (
      (e = b(e, "offcanvas")),
      d.jsx(eu, {
        ref: a,
        addEndListener: Za,
        in: r,
        mountOnEnter: o,
        unmountOnExit: i,
        appear: l,
        ...s,
        childRef: n.ref,
        children: (u, c) =>
          y.cloneElement(n, {
            ...c,
            className: B(
              t,
              n.props.className,
              (u === et || u === Jr) && `${e}-toggling`,
              x1[u],
            ),
          }),
      })
    ),
  );
vh.displayName = "OffcanvasToggling";
const gh = y.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      closeLabel: n = "Close",
      closeButton: r = !1,
      ...o
    },
    i,
  ) => (
    (e = b(e, "offcanvas-header")),
    d.jsx(d1, {
      ref: i,
      ...o,
      className: B(t, e),
      closeLabel: n,
      closeButton: r,
    })
  ),
);
gh.displayName = "OffcanvasHeader";
const S1 = Vi("h5"),
  E1 = _e("offcanvas-title", { Component: S1 });
function C1(e) {
  return d.jsx(vh, { ...e });
}
function k1(e) {
  return d.jsx(wi, { ...e });
}
const wh = y.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      children: n,
      "aria-labelledby": r,
      placement: o = "start",
      responsive: i,
      show: l = !1,
      backdrop: s = !0,
      keyboard: a = !0,
      scroll: u = !1,
      onEscapeKeyDown: c,
      onShow: f,
      onHide: m,
      container: x,
      autoFocus: g = !0,
      enforceFocus: w = !0,
      restoreFocus: S = !0,
      restoreFocusOptions: h,
      onEntered: p,
      onExit: v,
      onExiting: E,
      onEnter: k,
      onEntering: N,
      onExited: T,
      backdropClassName: j,
      manager: z,
      renderStaticNode: A = !1,
      ...ae
    },
    qe,
  ) => {
    const Le = y.useRef();
    e = b(e, "offcanvas");
    const { onToggle: ct } = y.useContext(kn) || {},
      [Tt, be] = y.useState(!1),
      G = g1(i || "xs", "up");
    y.useEffect(() => {
      be(i ? l && !G : l);
    }, [l, i, G]);
    const O = Ie(() => {
        ct == null || ct(), m == null || m();
      }),
      _ = y.useMemo(() => ({ onHide: O }), [O]);
    function L() {
      return (
        z ||
        (u
          ? (Le.current ||
              (Le.current = new ch({ handleContainerOverflow: !1 })),
            Le.current)
          : f1())
      );
    }
    const M = (te, ...we) => {
        te && (te.style.visibility = "visible"), k == null || k(te, ...we);
      },
      U = (te, ...we) => {
        te && (te.style.visibility = ""), T == null || T(...we);
      },
      Ae = y.useCallback(
        (te) => d.jsx("div", { ...te, className: B(`${e}-backdrop`, j) }),
        [j, e],
      ),
      ie = (te) =>
        d.jsx("div", {
          ...te,
          ...ae,
          className: B(t, i ? `${e}-${i}` : e, `${e}-${o}`),
          "aria-labelledby": r,
          children: n,
        });
    return d.jsxs(d.Fragment, {
      children: [
        !Tt && (i || A) && ie({}),
        d.jsx(fh.Provider, {
          value: _,
          children: d.jsx(s1, {
            show: Tt,
            ref: qe,
            backdrop: s,
            container: x,
            keyboard: a,
            autoFocus: g,
            enforceFocus: w && !u,
            restoreFocus: S,
            restoreFocusOptions: h,
            onEscapeKeyDown: c,
            onShow: f,
            onHide: O,
            onEnter: M,
            onEntering: N,
            onEntered: p,
            onExit: v,
            onExiting: E,
            onExited: U,
            manager: L(),
            transition: C1,
            backdropTransition: k1,
            renderBackdrop: Ae,
            renderDialog: ie,
          }),
        }),
      ],
    });
  },
);
wh.displayName = "Offcanvas";
const N1 = Object.assign(wh, { Body: w1, Header: gh, Title: E1 }),
  xh = y.forwardRef((e, t) => {
    const n = y.useContext(kn);
    return d.jsx(N1, {
      ref: t,
      show: !!(n != null && n.expanded),
      ...e,
      renderStaticNode: !0,
    });
  });
xh.displayName = "NavbarOffcanvas";
const R1 = _e("navbar-text", { Component: "span" }),
  Sh = y.forwardRef((e, t) => {
    const {
        bsPrefix: n,
        expand: r = !0,
        variant: o = "light",
        bg: i,
        fixed: l,
        sticky: s,
        className: a,
        as: u = "nav",
        expanded: c,
        onToggle: f,
        onSelect: m,
        collapseOnSelect: x = !1,
        ...g
      } = Xa(e, { expanded: "onToggle" }),
      w = b(n, "navbar"),
      S = y.useCallback(
        (...v) => {
          m == null || m(...v), x && c && (f == null || f(!1));
        },
        [m, x, c, f],
      );
    g.role === void 0 && u !== "nav" && (g.role = "navigation");
    let h = `${w}-expand`;
    typeof r == "string" && (h = `${h}-${r}`);
    const p = y.useMemo(
      () => ({
        onToggle: () => (f == null ? void 0 : f(!c)),
        bsPrefix: w,
        expanded: !!c,
        expand: r,
      }),
      [w, c, r, f],
    );
    return d.jsx(kn.Provider, {
      value: p,
      children: d.jsx(xi.Provider, {
        value: S,
        children: d.jsx(u, {
          ref: t,
          ...g,
          className: B(
            a,
            w,
            r && h,
            o && `${w}-${o}`,
            i && `bg-${i}`,
            s && `sticky-${s}`,
            l && `fixed-${l}`,
          ),
        }),
      }),
    });
  });
Sh.displayName = "Navbar";
const Dl = Object.assign(Sh, {
  Brand: hh,
  Collapse: mh,
  Offcanvas: xh,
  Text: R1,
  Toggle: yh,
});
function T1(e) {
  return e <= 0 ? "100%" : e < 1 ? `${e * 100}%` : `${e}%`;
}
const j1 = y.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        children: n,
        aspectRatio: r = "1x1",
        style: o,
        ...i
      },
      l,
    ) => {
      e = b(e, "ratio");
      const s = typeof r == "number";
      return d.jsx("div", {
        ref: l,
        ...i,
        style: { ...o, ...(s && { "--bs-aspect-ratio": T1(r) }) },
        className: B(e, t, !s && `${e}-${r}`),
        children: y.Children.only(n),
      });
    },
  ),
  O1 = ({ notification: e }) => {
    if (e === null) return null;
    const t = e.type === "alert" ? "danger" : "success",
      n = { textAlign: "center", padding: 0, margin: 0 };
    return d.jsx(C0, {
      variant: t,
      style: n,
      id: "notification",
      "aria-label": e.type,
      children: e.message,
    });
  };
function Eh(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: P1 } = Object.prototype,
  { getPrototypeOf: cu } = Object,
  Gi = ((e) => (t) => {
    const n = P1.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ot = (e) => ((e = e.toLowerCase()), (t) => Gi(t) === e),
  qi = (e) => (t) => typeof t === e,
  { isArray: sr } = Array,
  Zr = qi("undefined");
function _1(e) {
  return (
    e !== null &&
    !Zr(e) &&
    e.constructor !== null &&
    !Zr(e.constructor) &&
    ze(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Ch = ot("ArrayBuffer");
function L1(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Ch(e.buffer)),
    t
  );
}
const A1 = qi("string"),
  ze = qi("function"),
  kh = qi("number"),
  Xi = (e) => e !== null && typeof e == "object",
  D1 = (e) => e === !0 || e === !1,
  $o = (e) => {
    if (Gi(e) !== "object") return !1;
    const t = cu(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  I1 = ot("Date"),
  B1 = ot("File"),
  F1 = ot("Blob"),
  z1 = ot("FileList"),
  M1 = (e) => Xi(e) && ze(e.pipe),
  U1 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (ze(e.append) &&
          ((t = Gi(e)) === "formdata" ||
            (t === "object" &&
              ze(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  $1 = ot("URLSearchParams"),
  [b1, W1, H1, V1] = ["ReadableStream", "Request", "Response", "Headers"].map(
    ot,
  ),
  K1 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function so(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), sr(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = i.length;
    let s;
    for (r = 0; r < l; r++) (s = i[r]), t.call(null, e[s], s, e);
  }
}
function Nh(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const un =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Rh = (e) => !Zr(e) && e !== un;
function Vs() {
  const { caseless: e } = (Rh(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && Nh(t, o)) || o;
      $o(t[i]) && $o(r)
        ? (t[i] = Vs(t[i], r))
        : $o(r)
        ? (t[i] = Vs({}, r))
        : sr(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && so(arguments[r], n);
  return t;
}
const Q1 = (e, t, n, { allOwnKeys: r } = {}) => (
    so(
      t,
      (o, i) => {
        n && ze(o) ? (e[i] = Eh(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  G1 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  q1 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  X1 = (e, t, n, r) => {
    let o, i, l;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (l = o[i]), (!r || r(l, e, t)) && !s[l] && ((t[l] = e[l]), (s[l] = !0));
      e = n !== !1 && cu(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Y1 = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  J1 = (e) => {
    if (!e) return null;
    if (sr(e)) return e;
    let t = e.length;
    if (!kh(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Z1 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && cu(Uint8Array)),
  ew = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  tw = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  nw = ot("HTMLFormElement"),
  rw = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  Vc = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  ow = ot("RegExp"),
  Th = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    so(n, (o, i) => {
      let l;
      (l = t(o, i, e)) !== !1 && (r[i] = l || o);
    }),
      Object.defineProperties(e, r);
  },
  iw = (e) => {
    Th(e, (t, n) => {
      if (ze(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (ze(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  lw = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return sr(e) ? r(e) : r(String(e).split(t)), n;
  },
  sw = () => {},
  aw = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Il = "abcdefghijklmnopqrstuvwxyz",
  Kc = "0123456789",
  jh = { DIGIT: Kc, ALPHA: Il, ALPHA_DIGIT: Il + Il.toUpperCase() + Kc },
  uw = (e = 16, t = jh.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function cw(e) {
  return !!(
    e &&
    ze(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const fw = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (Xi(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const i = sr(r) ? [] : {};
            return (
              so(r, (l, s) => {
                const a = n(l, o + 1);
                !Zr(a) && (i[s] = a);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  dw = ot("AsyncFunction"),
  pw = (e) => e && (Xi(e) || ze(e)) && ze(e.then) && ze(e.catch),
  Oh = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          un.addEventListener(
            "message",
            ({ source: o, data: i }) => {
              o === un && i === n && r.length && r.shift()();
            },
            !1,
          ),
          (o) => {
            r.push(o), un.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    ze(un.postMessage),
  ),
  hw =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(un)
      : (typeof process < "u" && process.nextTick) || Oh,
  C = {
    isArray: sr,
    isArrayBuffer: Ch,
    isBuffer: _1,
    isFormData: U1,
    isArrayBufferView: L1,
    isString: A1,
    isNumber: kh,
    isBoolean: D1,
    isObject: Xi,
    isPlainObject: $o,
    isReadableStream: b1,
    isRequest: W1,
    isResponse: H1,
    isHeaders: V1,
    isUndefined: Zr,
    isDate: I1,
    isFile: B1,
    isBlob: F1,
    isRegExp: ow,
    isFunction: ze,
    isStream: M1,
    isURLSearchParams: $1,
    isTypedArray: Z1,
    isFileList: z1,
    forEach: so,
    merge: Vs,
    extend: Q1,
    trim: K1,
    stripBOM: G1,
    inherits: q1,
    toFlatObject: X1,
    kindOf: Gi,
    kindOfTest: ot,
    endsWith: Y1,
    toArray: J1,
    forEachEntry: ew,
    matchAll: tw,
    isHTMLForm: nw,
    hasOwnProperty: Vc,
    hasOwnProp: Vc,
    reduceDescriptors: Th,
    freezeMethods: iw,
    toObjectSet: lw,
    toCamelCase: rw,
    noop: sw,
    toFiniteNumber: aw,
    findKey: Nh,
    global: un,
    isContextDefined: Rh,
    ALPHABET: jh,
    generateString: uw,
    isSpecCompliantForm: cw,
    toJSONObject: fw,
    isAsyncFn: dw,
    isThenable: pw,
    setImmediate: Oh,
    asap: hw,
  };
function D(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
C.inherits(D, Error, {
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
      config: C.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Ph = D.prototype,
  _h = {};
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
].forEach((e) => {
  _h[e] = { value: e };
});
Object.defineProperties(D, _h);
Object.defineProperty(Ph, "isAxiosError", { value: !0 });
D.from = (e, t, n, r, o, i) => {
  const l = Object.create(Ph);
  return (
    C.toFlatObject(
      e,
      l,
      function (a) {
        return a !== Error.prototype;
      },
      (s) => s !== "isAxiosError",
    ),
    D.call(l, e.message, t, n, r, o),
    (l.cause = e),
    (l.name = e.name),
    i && Object.assign(l, i),
    l
  );
};
const mw = null;
function Ks(e) {
  return C.isPlainObject(e) || C.isArray(e);
}
function Lh(e) {
  return C.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Qc(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = Lh(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function yw(e) {
  return C.isArray(e) && !e.some(Ks);
}
const vw = C.toFlatObject(C, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Yi(e, t, n) {
  if (!C.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = C.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (w, S) {
        return !C.isUndefined(S[w]);
      },
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    l = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && C.isSpecCompliantForm(t);
  if (!C.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null) return "";
    if (C.isDate(g)) return g.toISOString();
    if (!a && C.isBlob(g))
      throw new D("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(g) || C.isTypedArray(g)
      ? a && typeof Blob == "function"
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function c(g, w, S) {
    let h = g;
    if (g && !S && typeof g == "object") {
      if (C.endsWith(w, "{}"))
        (w = r ? w : w.slice(0, -2)), (g = JSON.stringify(g));
      else if (
        (C.isArray(g) && yw(g)) ||
        ((C.isFileList(g) || C.endsWith(w, "[]")) && (h = C.toArray(g)))
      )
        return (
          (w = Lh(w)),
          h.forEach(function (v, E) {
            !(C.isUndefined(v) || v === null) &&
              t.append(
                l === !0 ? Qc([w], E, i) : l === null ? w : w + "[]",
                u(v),
              );
          }),
          !1
        );
    }
    return Ks(g) ? !0 : (t.append(Qc(S, w, i), u(g)), !1);
  }
  const f = [],
    m = Object.assign(vw, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: Ks,
    });
  function x(g, w) {
    if (!C.isUndefined(g)) {
      if (f.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      f.push(g),
        C.forEach(g, function (h, p) {
          (!(C.isUndefined(h) || h === null) &&
            o.call(t, h, C.isString(p) ? p.trim() : p, w, m)) === !0 &&
            x(h, w ? w.concat(p) : [p]);
        }),
        f.pop();
    }
  }
  if (!C.isObject(e)) throw new TypeError("data must be an object");
  return x(e), t;
}
function Gc(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function fu(e, t) {
  (this._pairs = []), e && Yi(e, this, t);
}
const Ah = fu.prototype;
Ah.append = function (t, n) {
  this._pairs.push([t, n]);
};
Ah.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Gc);
      }
    : Gc;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function gw(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Dh(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || gw,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = C.isURLSearchParams(t) ? t.toString() : new fu(t, n).toString(r)),
    i)
  ) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class qc {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    C.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Ih = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  ww = typeof URLSearchParams < "u" ? URLSearchParams : fu,
  xw = typeof FormData < "u" ? FormData : null,
  Sw = typeof Blob < "u" ? Blob : null,
  Ew = {
    isBrowser: !0,
    classes: { URLSearchParams: ww, FormData: xw, Blob: Sw },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  du = typeof window < "u" && typeof document < "u",
  Qs = (typeof navigator == "object" && navigator) || void 0,
  Cw =
    du &&
    (!Qs || ["ReactNative", "NativeScript", "NS"].indexOf(Qs.product) < 0),
  kw =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Nw = (du && window.location.href) || "http://localhost",
  Rw = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: du,
        hasStandardBrowserEnv: Cw,
        hasStandardBrowserWebWorkerEnv: kw,
        navigator: Qs,
        origin: Nw,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Oe = { ...Rw, ...Ew };
function Tw(e, t) {
  return Yi(
    e,
    new Oe.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return Oe.isNode && C.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function jw(e) {
  return C.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0],
  );
}
function Ow(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function Bh(e) {
  function t(n, r, o, i) {
    let l = n[i++];
    if (l === "__proto__") return !0;
    const s = Number.isFinite(+l),
      a = i >= n.length;
    return (
      (l = !l && C.isArray(o) ? o.length : l),
      a
        ? (C.hasOwnProp(o, l) ? (o[l] = [o[l], r]) : (o[l] = r), !s)
        : ((!o[l] || !C.isObject(o[l])) && (o[l] = []),
          t(n, r, o[l], i) && C.isArray(o[l]) && (o[l] = Ow(o[l])),
          !s)
    );
  }
  if (C.isFormData(e) && C.isFunction(e.entries)) {
    const n = {};
    return (
      C.forEachEntry(e, (r, o) => {
        t(jw(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function Pw(e, t, n) {
  if (C.isString(e))
    try {
      return (t || JSON.parse)(e), C.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const ao = {
  transitional: Ih,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = C.isObject(t);
      if ((i && C.isHTMLForm(t) && (t = new FormData(t)), C.isFormData(t)))
        return o ? JSON.stringify(Bh(t)) : t;
      if (
        C.isArrayBuffer(t) ||
        C.isBuffer(t) ||
        C.isStream(t) ||
        C.isFile(t) ||
        C.isBlob(t) ||
        C.isReadableStream(t)
      )
        return t;
      if (C.isArrayBufferView(t)) return t.buffer;
      if (C.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let s;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Tw(t, this.formSerializer).toString();
        if ((s = C.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return Yi(
            s ? { "files[]": t } : t,
            a && new a(),
            this.formSerializer,
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), Pw(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ao.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (C.isResponse(t) || C.isReadableStream(t)) return t;
      if (t && C.isString(t) && ((r && !this.responseType) || o)) {
        const l = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (s) {
          if (l)
            throw s.name === "SyntaxError"
              ? D.from(s, D.ERR_BAD_RESPONSE, this, null, this.response)
              : s;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Oe.classes.FormData, Blob: Oe.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
C.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ao.headers[e] = {};
});
const _w = C.toObjectSet([
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
  Lw = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (l) {
            (o = l.indexOf(":")),
              (n = l.substring(0, o).trim().toLowerCase()),
              (r = l.substring(o + 1).trim()),
              !(!n || (t[n] && _w[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Xc = Symbol("internals");
function gr(e) {
  return e && String(e).trim().toLowerCase();
}
function bo(e) {
  return e === !1 || e == null ? e : C.isArray(e) ? e.map(bo) : String(e);
}
function Aw(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Dw = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Bl(e, t, n, r, o) {
  if (C.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!C.isString(t))) {
    if (C.isString(r)) return t.indexOf(r) !== -1;
    if (C.isRegExp(r)) return r.test(t);
  }
}
function Iw(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Bw(e, t) {
  const n = C.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, l) {
        return this[r].call(this, t, o, i, l);
      },
      configurable: !0,
    });
  });
}
class Pe {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(s, a, u) {
      const c = gr(a);
      if (!c) throw new Error("header name must be a non-empty string");
      const f = C.findKey(o, c);
      (!f || o[f] === void 0 || u === !0 || (u === void 0 && o[f] !== !1)) &&
        (o[f || a] = bo(s));
    }
    const l = (s, a) => C.forEach(s, (u, c) => i(u, c, a));
    if (C.isPlainObject(t) || t instanceof this.constructor) l(t, n);
    else if (C.isString(t) && (t = t.trim()) && !Dw(t)) l(Lw(t), n);
    else if (C.isHeaders(t)) for (const [s, a] of t.entries()) i(a, s, r);
    else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = gr(t)), t)) {
      const r = C.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return Aw(o);
        if (C.isFunction(n)) return n.call(this, o, r);
        if (C.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = gr(t)), t)) {
      const r = C.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Bl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(l) {
      if (((l = gr(l)), l)) {
        const s = C.findKey(r, l);
        s && (!n || Bl(r, r[s], s, n)) && (delete r[s], (o = !0));
      }
    }
    return C.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Bl(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      C.forEach(this, (o, i) => {
        const l = C.findKey(r, i);
        if (l) {
          (n[l] = bo(o)), delete n[i];
          return;
        }
        const s = t ? Iw(i) : String(i).trim();
        s !== i && delete n[i], (n[s] = bo(o)), (r[s] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      C.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && C.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Xc] = this[Xc] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(l) {
      const s = gr(l);
      r[s] || (Bw(o, l), (r[s] = !0));
    }
    return C.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Pe.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
C.reduceDescriptors(Pe.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
C.freezeMethods(Pe);
function Fl(e, t) {
  const n = this || ao,
    r = t || n,
    o = Pe.from(r.headers);
  let i = r.data;
  return (
    C.forEach(e, function (s) {
      i = s.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function Fh(e) {
  return !!(e && e.__CANCEL__);
}
function ar(e, t, n) {
  D.call(this, e ?? "canceled", D.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
C.inherits(ar, D, { __CANCEL__: !0 });
function zh(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new D(
          "Request failed with status code " + n.status,
          [D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
function Fw(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function zw(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    l;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (a) {
      const u = Date.now(),
        c = r[i];
      l || (l = u), (n[o] = a), (r[o] = u);
      let f = i,
        m = 0;
      for (; f !== o; ) (m += n[f++]), (f = f % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - l < t)) return;
      const x = c && u - c;
      return x ? Math.round((m * 1e3) / x) : void 0;
    }
  );
}
function Mw(e, t) {
  let n = 0,
    r = 1e3 / t,
    o,
    i;
  const l = (u, c = Date.now()) => {
    (n = c), (o = null), i && (clearTimeout(i), (i = null)), e.apply(null, u);
  };
  return [
    (...u) => {
      const c = Date.now(),
        f = c - n;
      f >= r
        ? l(u, c)
        : ((o = u),
          i ||
            (i = setTimeout(() => {
              (i = null), l(o);
            }, r - f)));
    },
    () => o && l(o),
  ];
}
const Ci = (e, t, n = 3) => {
    let r = 0;
    const o = zw(50, 250);
    return Mw((i) => {
      const l = i.loaded,
        s = i.lengthComputable ? i.total : void 0,
        a = l - r,
        u = o(a),
        c = l <= s;
      r = l;
      const f = {
        loaded: l,
        total: s,
        progress: s ? l / s : void 0,
        bytes: a,
        rate: u || void 0,
        estimated: u && s && c ? (s - l) / u : void 0,
        event: i,
        lengthComputable: s != null,
        [t ? "download" : "upload"]: !0,
      };
      e(f);
    }, n);
  },
  Yc = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Jc =
    (e) =>
    (...t) =>
      C.asap(() => e(...t)),
  Uw = Oe.hasStandardBrowserEnv
    ? (function () {
        const t =
            Oe.navigator && /(msie|trident)/i.test(Oe.navigator.userAgent),
          n = document.createElement("a");
        let r;
        function o(i) {
          let l = i;
          return (
            t && (n.setAttribute("href", l), (l = n.href)),
            n.setAttribute("href", l),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = o(window.location.href)),
          function (l) {
            const s = C.isString(l) ? o(l) : l;
            return s.protocol === r.protocol && s.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  $w = Oe.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, i) {
          const l = [e + "=" + encodeURIComponent(t)];
          C.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()),
            C.isString(r) && l.push("path=" + r),
            C.isString(o) && l.push("domain=" + o),
            i === !0 && l.push("secure"),
            (document.cookie = l.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function bw(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ww(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Mh(e, t) {
  return e && !bw(t) ? Ww(e, t) : t;
}
const Zc = (e) => (e instanceof Pe ? { ...e } : e);
function wn(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, f) {
    return C.isPlainObject(u) && C.isPlainObject(c)
      ? C.merge.call({ caseless: f }, u, c)
      : C.isPlainObject(c)
      ? C.merge({}, c)
      : C.isArray(c)
      ? c.slice()
      : c;
  }
  function o(u, c, f) {
    if (C.isUndefined(c)) {
      if (!C.isUndefined(u)) return r(void 0, u, f);
    } else return r(u, c, f);
  }
  function i(u, c) {
    if (!C.isUndefined(c)) return r(void 0, c);
  }
  function l(u, c) {
    if (C.isUndefined(c)) {
      if (!C.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function s(u, c, f) {
    if (f in t) return r(u, c);
    if (f in e) return r(void 0, u);
  }
  const a = {
    url: i,
    method: i,
    data: i,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: s,
    headers: (u, c) => o(Zc(u), Zc(c), !0),
  };
  return (
    C.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const f = a[c] || o,
        m = f(e[c], t[c], c);
      (C.isUndefined(m) && f !== s) || (n[c] = m);
    }),
    n
  );
}
const Uh = (e) => {
    const t = wn({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: i,
      headers: l,
      auth: s,
    } = t;
    (t.headers = l = Pe.from(l)),
      (t.url = Dh(Mh(t.baseURL, t.url), e.params, e.paramsSerializer)),
      s &&
        l.set(
          "Authorization",
          "Basic " +
            btoa(
              (s.username || "") +
                ":" +
                (s.password ? unescape(encodeURIComponent(s.password)) : ""),
            ),
        );
    let a;
    if (C.isFormData(n)) {
      if (Oe.hasStandardBrowserEnv || Oe.hasStandardBrowserWebWorkerEnv)
        l.setContentType(void 0);
      else if ((a = l.getContentType()) !== !1) {
        const [u, ...c] = a
          ? a
              .split(";")
              .map((f) => f.trim())
              .filter(Boolean)
          : [];
        l.setContentType([u || "multipart/form-data", ...c].join("; "));
      }
    }
    if (
      Oe.hasStandardBrowserEnv &&
      (r && C.isFunction(r) && (r = r(t)), r || (r !== !1 && Uw(t.url)))
    ) {
      const u = o && i && $w.read(i);
      u && l.set(o, u);
    }
    return t;
  },
  Hw = typeof XMLHttpRequest < "u",
  Vw =
    Hw &&
    function (e) {
      return new Promise(function (n, r) {
        const o = Uh(e);
        let i = o.data;
        const l = Pe.from(o.headers).normalize();
        let { responseType: s, onUploadProgress: a, onDownloadProgress: u } = o,
          c,
          f,
          m,
          x,
          g;
        function w() {
          x && x(),
            g && g(),
            o.cancelToken && o.cancelToken.unsubscribe(c),
            o.signal && o.signal.removeEventListener("abort", c);
        }
        let S = new XMLHttpRequest();
        S.open(o.method.toUpperCase(), o.url, !0), (S.timeout = o.timeout);
        function h() {
          if (!S) return;
          const v = Pe.from(
              "getAllResponseHeaders" in S && S.getAllResponseHeaders(),
            ),
            k = {
              data:
                !s || s === "text" || s === "json"
                  ? S.responseText
                  : S.response,
              status: S.status,
              statusText: S.statusText,
              headers: v,
              config: e,
              request: S,
            };
          zh(
            function (T) {
              n(T), w();
            },
            function (T) {
              r(T), w();
            },
            k,
          ),
            (S = null);
        }
        "onloadend" in S
          ? (S.onloadend = h)
          : (S.onreadystatechange = function () {
              !S ||
                S.readyState !== 4 ||
                (S.status === 0 &&
                  !(S.responseURL && S.responseURL.indexOf("file:") === 0)) ||
                setTimeout(h);
            }),
          (S.onabort = function () {
            S &&
              (r(new D("Request aborted", D.ECONNABORTED, e, S)), (S = null));
          }),
          (S.onerror = function () {
            r(new D("Network Error", D.ERR_NETWORK, e, S)), (S = null);
          }),
          (S.ontimeout = function () {
            let E = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const k = o.transitional || Ih;
            o.timeoutErrorMessage && (E = o.timeoutErrorMessage),
              r(
                new D(
                  E,
                  k.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED,
                  e,
                  S,
                ),
              ),
              (S = null);
          }),
          i === void 0 && l.setContentType(null),
          "setRequestHeader" in S &&
            C.forEach(l.toJSON(), function (E, k) {
              S.setRequestHeader(k, E);
            }),
          C.isUndefined(o.withCredentials) ||
            (S.withCredentials = !!o.withCredentials),
          s && s !== "json" && (S.responseType = o.responseType),
          u && (([m, g] = Ci(u, !0)), S.addEventListener("progress", m)),
          a &&
            S.upload &&
            (([f, x] = Ci(a)),
            S.upload.addEventListener("progress", f),
            S.upload.addEventListener("loadend", x)),
          (o.cancelToken || o.signal) &&
            ((c = (v) => {
              S &&
                (r(!v || v.type ? new ar(null, e, S) : v),
                S.abort(),
                (S = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(c),
            o.signal &&
              (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
        const p = Fw(o.url);
        if (p && Oe.protocols.indexOf(p) === -1) {
          r(new D("Unsupported protocol " + p + ":", D.ERR_BAD_REQUEST, e));
          return;
        }
        S.send(i || null);
      });
    },
  Kw = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        o;
      const i = function (u) {
        if (!o) {
          (o = !0), s();
          const c = u instanceof Error ? u : this.reason;
          r.abort(
            c instanceof D ? c : new ar(c instanceof Error ? c.message : c),
          );
        }
      };
      let l =
        t &&
        setTimeout(() => {
          (l = null), i(new D(`timeout ${t} of ms exceeded`, D.ETIMEDOUT));
        }, t);
      const s = () => {
        e &&
          (l && clearTimeout(l),
          (l = null),
          e.forEach((u) => {
            u.unsubscribe
              ? u.unsubscribe(i)
              : u.removeEventListener("abort", i);
          }),
          (e = null));
      };
      e.forEach((u) => u.addEventListener("abort", i));
      const { signal: a } = r;
      return (a.unsubscribe = () => C.asap(s)), a;
    }
  },
  Qw = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o);
  },
  Gw = async function* (e, t) {
    for await (const n of qw(e)) yield* Qw(n, t);
  },
  qw = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  ef = (e, t, n, r) => {
    const o = Gw(e, t);
    let i = 0,
      l,
      s = (a) => {
        l || ((l = !0), r && r(a));
      };
    return new ReadableStream(
      {
        async pull(a) {
          try {
            const { done: u, value: c } = await o.next();
            if (u) {
              s(), a.close();
              return;
            }
            let f = c.byteLength;
            if (n) {
              let m = (i += f);
              n(m);
            }
            a.enqueue(new Uint8Array(c));
          } catch (u) {
            throw (s(u), u);
          }
        },
        cancel(a) {
          return s(a), o.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  Ji =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  $h = Ji && typeof ReadableStream == "function",
  Xw =
    Ji &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  bh = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  Yw =
    $h &&
    bh(() => {
      let e = !1;
      const t = new Request(Oe.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  tf = 64 * 1024,
  Gs = $h && bh(() => C.isReadableStream(new Response("").body)),
  ki = { stream: Gs && ((e) => e.body) };
Ji &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !ki[t] &&
        (ki[t] = C.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new D(
                `Response type '${t}' is not supported`,
                D.ERR_NOT_SUPPORT,
                r,
              );
            });
    });
  })(new Response());
const Jw = async (e) => {
    if (e == null) return 0;
    if (C.isBlob(e)) return e.size;
    if (C.isSpecCompliantForm(e))
      return (
        await new Request(Oe.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (C.isArrayBufferView(e) || C.isArrayBuffer(e)) return e.byteLength;
    if ((C.isURLSearchParams(e) && (e = e + ""), C.isString(e)))
      return (await Xw(e)).byteLength;
  },
  Zw = async (e, t) => {
    const n = C.toFiniteNumber(e.getContentLength());
    return n ?? Jw(t);
  },
  ex =
    Ji &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: o,
        cancelToken: i,
        timeout: l,
        onDownloadProgress: s,
        onUploadProgress: a,
        responseType: u,
        headers: c,
        withCredentials: f = "same-origin",
        fetchOptions: m,
      } = Uh(e);
      u = u ? (u + "").toLowerCase() : "text";
      let x = Kw([o, i && i.toAbortSignal()], l),
        g;
      const w =
        x &&
        x.unsubscribe &&
        (() => {
          x.unsubscribe();
        });
      let S;
      try {
        if (
          a &&
          Yw &&
          n !== "get" &&
          n !== "head" &&
          (S = await Zw(c, r)) !== 0
        ) {
          let k = new Request(t, { method: "POST", body: r, duplex: "half" }),
            N;
          if (
            (C.isFormData(r) &&
              (N = k.headers.get("content-type")) &&
              c.setContentType(N),
            k.body)
          ) {
            const [T, j] = Yc(S, Ci(Jc(a)));
            r = ef(k.body, tf, T, j);
          }
        }
        C.isString(f) || (f = f ? "include" : "omit");
        const h = "credentials" in Request.prototype;
        g = new Request(t, {
          ...m,
          signal: x,
          method: n.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: h ? f : void 0,
        });
        let p = await fetch(g);
        const v = Gs && (u === "stream" || u === "response");
        if (Gs && (s || (v && w))) {
          const k = {};
          ["status", "statusText", "headers"].forEach((z) => {
            k[z] = p[z];
          });
          const N = C.toFiniteNumber(p.headers.get("content-length")),
            [T, j] = (s && Yc(N, Ci(Jc(s), !0))) || [];
          p = new Response(
            ef(p.body, tf, T, () => {
              j && j(), w && w();
            }),
            k,
          );
        }
        u = u || "text";
        let E = await ki[C.findKey(ki, u) || "text"](p, e);
        return (
          !v && w && w(),
          await new Promise((k, N) => {
            zh(k, N, {
              data: E,
              headers: Pe.from(p.headers),
              status: p.status,
              statusText: p.statusText,
              config: e,
              request: g,
            });
          })
        );
      } catch (h) {
        throw (
          (w && w(),
          h && h.name === "TypeError" && /fetch/i.test(h.message)
            ? Object.assign(new D("Network Error", D.ERR_NETWORK, e, g), {
                cause: h.cause || h,
              })
            : D.from(h, h && h.code, e, g))
        );
      }
    }),
  qs = { http: mw, xhr: Vw, fetch: ex };
C.forEach(qs, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const nf = (e) => `- ${e}`,
  tx = (e) => C.isFunction(e) || e === null || e === !1,
  Wh = {
    getAdapter: (e) => {
      e = C.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let l;
        if (
          ((r = n),
          !tx(n) && ((r = qs[(l = String(n)).toLowerCase()]), r === void 0))
        )
          throw new D(`Unknown adapter '${l}'`);
        if (r) break;
        o[l || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([s, a]) =>
            `adapter ${s} ` +
            (a === !1
              ? "is not supported by the environment"
              : "is not available in the build"),
        );
        let l = t
          ? i.length > 1
            ? `since :
` +
              i.map(nf).join(`
`)
            : " " + nf(i[0])
          : "as no adapter specified";
        throw new D(
          "There is no suitable adapter to dispatch the request " + l,
          "ERR_NOT_SUPPORT",
        );
      }
      return r;
    },
    adapters: qs,
  };
function zl(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new ar(null, e);
}
function rf(e) {
  return (
    zl(e),
    (e.headers = Pe.from(e.headers)),
    (e.data = Fl.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Wh.getAdapter(e.adapter || ao.adapter)(e).then(
      function (r) {
        return (
          zl(e),
          (r.data = Fl.call(e, e.transformResponse, r)),
          (r.headers = Pe.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Fh(r) ||
            (zl(e),
            r &&
              r.response &&
              ((r.response.data = Fl.call(e, e.transformResponse, r.response)),
              (r.response.headers = Pe.from(r.response.headers)))),
          Promise.reject(r)
        );
      },
    )
  );
}
const Hh = "1.7.7",
  pu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    pu[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const of = {};
pu.transitional = function (t, n, r) {
  function o(i, l) {
    return (
      "[Axios v" +
      Hh +
      "] Transitional option '" +
      i +
      "'" +
      l +
      (r ? ". " + r : "")
    );
  }
  return (i, l, s) => {
    if (t === !1)
      throw new D(
        o(l, " has been removed" + (n ? " in " + n : "")),
        D.ERR_DEPRECATED,
      );
    return (
      n &&
        !of[l] &&
        ((of[l] = !0),
        console.warn(
          o(
            l,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future",
          ),
        )),
      t ? t(i, l, s) : !0
    );
  };
};
function nx(e, t, n) {
  if (typeof e != "object")
    throw new D("options must be an object", D.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      l = t[i];
    if (l) {
      const s = e[i],
        a = s === void 0 || l(s, i, e);
      if (a !== !0)
        throw new D("option " + i + " must be " + a, D.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new D("Unknown option " + i, D.ERR_BAD_OPTION);
  }
}
const Xs = { assertOptions: nx, validators: pu },
  Ot = Xs.validators;
class dn {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new qc(), response: new qc() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? i &&
              !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + i)
            : (r.stack = i);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = wn(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      Xs.assertOptions(
        r,
        {
          silentJSONParsing: Ot.transitional(Ot.boolean),
          forcedJSONParsing: Ot.transitional(Ot.boolean),
          clarifyTimeoutError: Ot.transitional(Ot.boolean),
        },
        !1,
      ),
      o != null &&
        (C.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Xs.assertOptions(
              o,
              { encode: Ot.function, serialize: Ot.function },
              !0,
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let l = i && C.merge(i.common, i[n.method]);
    i &&
      C.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (g) => {
          delete i[g];
        },
      ),
      (n.headers = Pe.concat(l, i));
    const s = [];
    let a = !0;
    this.interceptors.request.forEach(function (w) {
      (typeof w.runWhen == "function" && w.runWhen(n) === !1) ||
        ((a = a && w.synchronous), s.unshift(w.fulfilled, w.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (w) {
      u.push(w.fulfilled, w.rejected);
    });
    let c,
      f = 0,
      m;
    if (!a) {
      const g = [rf.bind(this), void 0];
      for (
        g.unshift.apply(g, s),
          g.push.apply(g, u),
          m = g.length,
          c = Promise.resolve(n);
        f < m;

      )
        c = c.then(g[f++], g[f++]);
      return c;
    }
    m = s.length;
    let x = n;
    for (f = 0; f < m; ) {
      const g = s[f++],
        w = s[f++];
      try {
        x = g(x);
      } catch (S) {
        w.call(this, S);
        break;
      }
    }
    try {
      c = rf.call(this, x);
    } catch (g) {
      return Promise.reject(g);
    }
    for (f = 0, m = u.length; f < m; ) c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = wn(this.defaults, t);
    const n = Mh(t.baseURL, t.url);
    return Dh(n, t.params, t.paramsSerializer);
  }
}
C.forEach(["delete", "get", "head", "options"], function (t) {
  dn.prototype[t] = function (n, r) {
    return this.request(
      wn(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
C.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, l, s) {
      return this.request(
        wn(s || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: l,
        }),
      );
    };
  }
  (dn.prototype[t] = n()), (dn.prototype[t + "Form"] = n(!0));
});
class hu {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const l = new Promise((s) => {
          r.subscribe(s), (i = s);
        }).then(o);
        return (
          (l.cancel = function () {
            r.unsubscribe(i);
          }),
          l
        );
      }),
      t(function (i, l, s) {
        r.reason || ((r.reason = new ar(i, l, s)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new hu(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
function rx(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function ox(e) {
  return C.isObject(e) && e.isAxiosError === !0;
}
const Ys = {
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
Object.entries(Ys).forEach(([e, t]) => {
  Ys[t] = e;
});
function Vh(e) {
  const t = new dn(e),
    n = Eh(dn.prototype.request, t);
  return (
    C.extend(n, dn.prototype, t, { allOwnKeys: !0 }),
    C.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Vh(wn(e, o));
    }),
    n
  );
}
const ee = Vh(ao);
ee.Axios = dn;
ee.CanceledError = ar;
ee.CancelToken = hu;
ee.isCancel = Fh;
ee.VERSION = Hh;
ee.toFormData = Yi;
ee.AxiosError = D;
ee.Cancel = ee.CanceledError;
ee.all = function (t) {
  return Promise.all(t);
};
ee.spread = rx;
ee.isAxiosError = ox;
ee.mergeConfig = wn;
ee.AxiosHeaders = Pe;
ee.formToJSON = (e) => Bh(C.isHTMLForm(e) ? new FormData(e) : e);
ee.getAdapter = Wh.getAdapter;
ee.HttpStatusCode = Ys;
ee.default = ee;
const ix = "/api/contactforms",
  lx = { create: async (e) => (await ee.post(ix, e)).data },
  sx = () => {
    const [e, t] = y.useState(""),
      [n, r] = y.useState(""),
      [o, i] = y.useState(null),
      l = (c, f = "info") => {
        i({ message: c, type: f }),
          setTimeout(() => {
            i(null);
          }, 3e3);
      },
      s = async (c) => {
        lx.create(c)
          .then(() => {
            l("A new message by has been sent.");
          })
          .catch((f) => {
            l("Creating a message failed: " + f.response.data.error, "alert");
          });
      },
      a = (c) => {
        if ((c.preventDefault(), !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))) {
          l("Please enter a valid email address.", "alert");
          return;
        }
        console.log("Form submitted!"),
          s({ email: e, message: n }),
          t(""),
          r("");
      },
      u = {
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
    return d.jsx("section", {
      className: "contact form",
      children: d.jsx(Rt, {
        children: d.jsxs(H, {
          className: "my-3",
          style: u.cardStyle,
          children: [
            d.jsx(H.Header, {
              children: d.jsx("h2", {
                style: u.header,
                children: "Contact Form",
              }),
            }),
            d.jsxs(H.Body, {
              children: [
                d.jsx("p", {
                  style: u.paragraph,
                  children:
                    "If you have any questions or inquiries, please don't hesitate to reach out using the contact form below. We'll get back to you as soon as possible.",
                }),
                d.jsx(O1, { notification: o }),
                d.jsxs(tn, {
                  onSubmit: a,
                  children: [
                    d.jsxs(tn.Group, {
                      className: "mb-3",
                      children: [
                        d.jsx(tn.Label, {
                          htmlFor: "email",
                          style: u.label,
                          children: "Email",
                        }),
                        d.jsx(tn.Control, {
                          value: e,
                          onChange: ({ target: c }) => t(c.value),
                          id: "email",
                          placeholder: "Place your email here",
                          style: u.form,
                          "aria-label": "Email",
                        }),
                      ],
                    }),
                    d.jsxs(tn.Group, {
                      className: "mb-3",
                      children: [
                        d.jsx(tn.Label, {
                          htmlFor: "message",
                          style: u.label,
                          children: "Message",
                        }),
                        d.jsx(tn.Control, {
                          as: "textarea",
                          rows: 5,
                          value: n,
                          onChange: ({ target: c }) => r(c.value),
                          id: "message",
                          placeholder: "Place your message here",
                          style: u.form,
                          "aria-label": "Message",
                        }),
                      ],
                    }),
                    d.jsx(tr, {
                      "aria-label": "Submit",
                      type: "submit",
                      variant: "primary",
                      style: u.button,
                      className: "btn-custom",
                      children: "Submit",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  ax = () => {
    const e = {
      section: {
        maxWidth: 500,
        margin: "auto",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
    };
    return d.jsxs("section", {
      className: "privacy policy",
      style: e.section,
      children: [
        d.jsx("h3", { children: "Privacy Policy" }),
        d.jsx("p", {
          children:
            "This Privacy Policy outlines the types of personal data that we collect, how we use and protect that data, and your rights regarding your personal data. We are committed to protecting your privacy in accordance with the General Data Protection Regulation (GDPR).",
        }),
        d.jsx("h3", { children: "Collection of Personal Data" }),
        d.jsx("p", {
          children:
            "We may collect personal data from you when you submit a contact form or request information from us. The personal data we may collect could include your name, email address and any other information that you provide for us.",
        }),
        d.jsx("h3", { children: "Use of Personal Data" }),
        d.jsx("p", {
          children:
            "We may use your personal data to provide you with services, to communicate with you and to comply with legal obligations. We will never sell, rent, or share your personal data with any third parties without your consent, except as required by law.",
        }),
        d.jsx("h3", { children: "Protection of Personal Data" }),
        d.jsx("p", {
          children:
            "We take appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. We limit access to your personal data to employees, contractors, and agents who need to know the data to perform their duties and who are bound by confidentiality obligations.",
        }),
        d.jsx("h3", { children: "Your Rights" }),
        d.jsx("p", {
          children:
            "You have the right to access and receive a copy of your personal data that we hold. Request correction or erasure of your personal data. Object to the processing of your personal data. Restrict the processing of your personal data. Request a transfer of your personal data to another controller. To exercise your rights, please contact us using the contact information below.",
        }),
        d.jsx("h3", { children: "Changes to this Privacy Policy" }),
        d.jsx("p", {
          children:
            "We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on our website with the effective date of the revised policy.",
        }),
        d.jsx("h3", { children: "Contact Information" }),
        d.jsxs("p", {
          children: [
            "If you have any questions or concerns about this Privacy Policy or our handling of your personal data, please contact TeckBuff at alexanderallen032@gmail.com or use the contact form",
            " ",
            d.jsxs(gn, {
              to: "/contactforms",
              "aria-label": "Link to Contact page",
              children: [" ", "here."],
            }),
          ],
        }),
      ],
    });
  },
  ux = () => {
    const [e, t] = y.useState(!1),
      n = () => {
        t((i) => !i);
      },
      r = {
        section: { textAlign: "center", padding: 15 },
        button: { margin: 10 },
        navbarSvg: { margin: 10 },
        space: { margin: 10 },
      },
      o = new Date().getFullYear();
    return d.jsxs("section", {
      className: "footer",
      style: r.section,
      children: [
        d.jsx("div", {
          style: r.space,
          children: d.jsxs("h4", { children: ["Copyright Alex Allen ", o] }),
        }),
        d.jsx("div", {
          children: d.jsx("h5", {
            style: r.space,
            children: "Connect with us on these platforms:",
          }),
        }),
        d.jsxs("div", {
          style: r.space,
          children: [
            d.jsx("a", {
              href: "https://www.linkedin.com/in/alex-allen-392225251/",
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "LinkedIn Profile",
              children: d.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "28",
                height: "28",
                fill: "#0E76A8",
                className: "bi bi-linkedin",
                viewBox: "0 0 16 16",
                style: r.navbarSvg,
                children: d.jsx("path", {
                  d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
                }),
              }),
            }),
            d.jsx("a", {
              href: "https://github.com/AlexAllen247",
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "Github Profile",
              children: d.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "28",
                height: "28",
                fill: "#000000",
                className: "bi bi-github",
                viewBox: "0 0 16 16",
                style: r.navbarSvg,
                children: d.jsx("path", {
                  d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",
                }),
              }),
            }),
            d.jsx("a", {
              href: "https://twitter.com/AlexAllen247",
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "Twitter Profile",
              children: d.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "28",
                height: "28",
                fill: "#000000",
                className: "bi bi-twitter-x",
                viewBox: "0 0 16 16",
                style: r.navbarSvg,
                children: d.jsx("path", {
                  d: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z",
                }),
              }),
            }),
          ],
        }),
        d.jsx("div", {
          style: r.space,
          children: d.jsx(tr, {
            variant: "primary",
            onClick: n,
            style: r.button,
            "aria-label": "Privacy Policy",
            className: "btn-custom",
            children: "Privacy Policy",
          }),
        }),
        e ? d.jsx(ax, {}) : null,
      ],
    });
  },
  cx = () => {
    const e = [
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
      ],
      t = {
        cardStyle: {
          boxShadow: "10px 10px 10px 10px rgba(0, 71, 171, 0.15)",
          textAlign: "center",
        },
        containerStyle: { marginBottom: 30 },
        ulStyle: { listStyleType: "none", padding: 0 },
      };
    return d.jsx("section", {
      className: "certifications",
      children: d.jsx(Rt, {
        style: t.containerStyle,
        children: d.jsx("div", {
          className: "tech-certifications",
          children: e.map((n) =>
            d.jsxs(
              H,
              {
                className: "my-3",
                style: t.cardStyle,
                children: [
                  d.jsx(H.Header, {
                    children: d.jsx("h3", { children: n.issuer }),
                  }),
                  d.jsx(H.Body, {
                    children: d.jsx("ul", {
                      style: t.ulStyle,
                      children: n.certifications.map((r) =>
                        d.jsx(
                          "li",
                          {
                            children: d.jsx("a", {
                              href: r.url,
                              target: "_blank",
                              rel: "noreferrer",
                              "aria-label": `View ${r.name} certification`,
                              children: r.name,
                            }),
                          },
                          r.url,
                        ),
                      ),
                    }),
                  }),
                ],
              },
              n.issuer,
            ),
          ),
        }),
      }),
    });
  },
  fx = "/assets/ProfilePicture-DlqNMbGj.jpg",
  dx = () => {
    const e = {
      h2: { marginBottom: 10, marginTop: 20 },
      ul: {
        marginBottom: 15,
        listStyleType: "none",
        padding: 10,
        fontSize: 20,
      },
      li: { marginBottom: 10 },
    };
    return d.jsxs("section", {
      className: "about",
      children: [
        d.jsx("h3", { style: e.h2, children: "Key Competencies" }),
        d.jsxs("ul", {
          style: e.ul,
          children: [
            d.jsxs("li", {
              style: e.li,
              children: [
                d.jsx("strong", { children: "Full Stack Web Development:" }),
                " Proficient in front-end and back-end technologies, with a strong foundation in web design, coding, and testing.",
              ],
            }),
            d.jsxs("li", {
              style: e.li,
              children: [
                d.jsx("strong", {
                  children: "Problem Solving and Adaptability:",
                }),
                " Adept at tackling complex challenges and adapting to new situations with creativity and resourcefulness.",
              ],
            }),
          ],
        }),
      ],
    });
  },
  px = () => {
    const e = {
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
    return d.jsx("section", {
      className: "profile",
      children: d.jsx(Rt, {
        children: d.jsxs(H, {
          className: "my-3",
          style: e.cardStyle,
          children: [
            d.jsx(H.Header, {
              children: d.jsx("h2", {
                style: e.header,
                children: "Alex Allen",
              }),
            }),
            d.jsxs(H.Body, {
              children: [
                d.jsx("div", {
                  children: d.jsx("img", {
                    src: fx,
                    alt: "profile",
                    "aria-label": "Profile picture",
                    style: e.image,
                  }),
                }),
                d.jsxs("div", {
                  children: [
                    d.jsx("p", {
                      style: e.paragraph,
                      children:
                        "Hi, I'm Alex, Full Stack Developer and TeckBuff.",
                    }),
                    d.jsx("p", {
                      style: e.paragraph,
                      children:
                        "Why TeckBuff? That's what my friends and family call me.",
                    }),
                    d.jsx("p", {
                      style: e.paragraph,
                      children:
                        "I am driven by commitment to create innovative and user-friendly web applications tailored to the needs of diverse clients.",
                    }),
                    d.jsx(dx, {}),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  hx = "/assets/TeckbuffBanner-MpWsUAHL.png",
  mx = () => {
    const [e, t] = y.useState(window.innerWidth),
      [n, r] = y.useState(!1);
    y.useEffect(() => {
      const i = () => t(window.innerWidth);
      return (
        window.addEventListener("resize", i),
        () => {
          window.removeEventListener("resize", i);
        }
      );
    }, []),
      y.useEffect(() => {
        r(!0);
      }, []);
    const o = {
      section: { textAlign: "center" },
      image: {
        maxWidth: "100%",
        width: e <= 767 ? "100%" : "initial",
        height: e <= 767 ? "auto" : "initial",
      },
    };
    return d.jsxs("section", {
      style: o.section,
      className: "header",
      children: [
        d.jsx("div", {
          className: "container",
          children:
            n &&
            d.jsx("img", {
              src: hx,
              alt: "My Banner",
              style: o.image,
              "aria-label": "Banner for TeckBuff.com",
            }),
        }),
        d.jsx("div", { className: "line" }),
      ],
    });
  },
  yx = () => {
    const { pathname: e } = lr();
    return (
      y.useEffect(() => {
        window.scrollTo(0, 0);
      }, [e]),
      null
    );
  },
  vx = () => {
    const [e, t] = y.useState(!1),
      n = {
        navStyle: { fontSize: 26, color: "#0047ab", margin: 15 },
        navbar: { marginBottom: 60, marginTop: 15 },
      };
    return d.jsx(Dl, {
      expanded: e,
      onToggle: t,
      collapseOnSelect: !0,
      expand: "lg",
      className: "text-center",
      style: n.navbar,
      children: d.jsxs("div", {
        className: "container-fluid",
        children: [
          d.jsx(Dl.Toggle, {
            "aria-controls": "navbar",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation",
            children: d.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "30",
              height: "30",
              fill: "#0047ab",
              viewBox: "0 0 16 16",
              children: d.jsx("path", {
                fillRule: "evenodd",
                d: "M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75zM1.75 12a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H1.75z",
              }),
            }),
          }),
          d.jsx(Dl.Collapse, {
            id: "basic-navbar-nav justify-content-center",
            onClick: () => t(!1),
            children: d.jsx("div", {
              className: "mx-auto",
              children: d.jsxs(m1, {
                className: "me-auto mt-2 justify-content-center mx-auto",
                children: [
                  d.jsx(Rn, {
                    to: "/",
                    style: n.navStyle,
                    "aria-label": "Link to Homepage",
                    children: "Home",
                  }),
                  d.jsx(Rn, {
                    to: "/articles",
                    style: n.navStyle,
                    "aria-label": "Link to Articles and Tech Content page",
                    children: "Articles",
                  }),
                  d.jsx(Rn, {
                    to: "/portfolio",
                    style: n.navStyle,
                    "aria-label": "Link to Portfolio page",
                    children: "Portfolio",
                  }),
                  d.jsx(Rn, {
                    to: "/profile",
                    style: n.navStyle,
                    "aria-label": "Link to Profile page",
                    children: "Profile",
                  }),
                  d.jsx(Rn, {
                    to: "/certifications",
                    style: n.navStyle,
                    "aria-label": "Link to Certifications page",
                    children: "Certifications",
                  }),
                  d.jsx(Rn, {
                    to: "/contactforms",
                    style: n.navStyle,
                    "aria-label": "Link to Contact page",
                    children: "Contact",
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    });
  },
  gx = () => {
    const e = { section: { textAlign: "center", padding: 50, margin: 50 } };
    return d.jsxs("section", {
      className: "not-found",
      style: e.section,
      children: [
        d.jsx("h2", {
          children: "Oops page not found, please try a different URL.",
        }),
        d.jsx(gn, {
          to: "/",
          "aria-label": "Link to Homepage",
          children: d.jsx("h3", { children: "Return to Homepage" }),
        }),
      ],
    });
  },
  wx = "/assets/WebApplicationPic-Dgsdj6Xm.png",
  xx = () => {
    const e = {
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
      image: { width: "80%", height: "80%", border: "none", marginBottom: 20 },
      linkToContact: { color: "#007bff", textDecoration: "none" },
    };
    return d.jsx("section", {
      className: "web-application-services",
      children: d.jsx(Rt, {
        children: d.jsxs(H, {
          className: "my-3",
          style: e.cardStyle,
          children: [
            d.jsx(H.Header, {
              children: d.jsx("h2", {
                style: e.header,
                children: "Custom Built Web Applications",
              }),
            }),
            d.jsxs(H.Body, {
              children: [
                d.jsx("div", {
                  children: d.jsx("img", {
                    src: wx,
                    title: "Web Applications",
                    "aria-label": "Web Applications",
                    alt: "Web Applications",
                    style: e.image,
                  }),
                }),
                d.jsx("p", {
                  style: e.paragraph,
                  children:
                    "Websites and innovative web applications tailored specifically for your business needs. Whether you're looking to improve the design, functionality, or overall website performance, TeckBuff offers one-on-one guidance to enhance your web presence.",
                }),
                d.jsxs("p", {
                  style: e.paragraph,
                  children: [
                    " ",
                    d.jsx(gn, {
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
  Sx = "/assets/ConsultationTeckbuff-BlJzIGUY.png",
  Ex = () => {
    const e = {
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
      image: { width: "80%", height: "80%", border: "none", marginBottom: 20 },
      linkToContact: { color: "#007bff", textDecoration: "none" },
    };
    return d.jsx("section", {
      className: "consultation",
      children: d.jsx(Rt, {
        children: d.jsxs(H, {
          className: "my-3",
          style: e.cardStyle,
          children: [
            d.jsx(H.Header, {
              children: d.jsx("h2", {
                style: e.header,
                children: "Consultation and Writing Services",
              }),
            }),
            d.jsxs(H.Body, {
              children: [
                d.jsx("div", {
                  children: d.jsx("img", {
                    src: Sx,
                    title: "Consultation Image",
                    "aria-label": "Consultation Image",
                    style: e.image,
                    loading: "lazy",
                  }),
                }),
                d.jsx("h4", { style: e.header, children: "Website update" }),
                d.jsx("p", {
                  style: e.paragraph,
                  children:
                    "If you are considering updating your website TeckBuff can offer assistance to ensure your digital platform reflects your vision and engages your audience effectively.",
                }),
                d.jsx("h4", {
                  style: e.header,
                  children: "Website performance",
                }),
                d.jsx("p", {
                  style: e.paragraph,
                  children:
                    "Concerned about the performance of your website or web applications? Sign up for a TeckBuff Web Check. Our sophisticated diagnostics can quickly identify potentially troublesome issues compromising performance and security.",
                }),
                d.jsx("h4", {
                  style: e.header,
                  children: "Reports, seminars and articles",
                }),
                d.jsxs("p", {
                  style: e.paragraph,
                  children: [
                    "TeckBuff specializes in bridging the gap between business and IT. Whether it be written reports, seminar briefings or",
                    " ",
                    d.jsx(gn, {
                      to: "/articles",
                      style: e.linkToContact,
                      "aria-label": "Link to Articles and Tech Content page",
                      children: "articles",
                    }),
                    " ",
                    "for publication, TeckBuff can provide insightful, well written briefs and presentations for a general business audience.",
                  ],
                }),
                d.jsxs("p", {
                  style: e.paragraph,
                  children: [
                    " ",
                    d.jsx(gn, {
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
  Cx = "/assets/AIServices-StH9hzLc.png",
  kx = () => {
    const e = {
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
      image: { width: "80%", height: "80%", border: "none", marginBottom: 20 },
      linkToContact: { color: "#007bff", textDecoration: "none" },
    };
    return d.jsx("section", {
      className: "ai-services",
      children: d.jsx(Rt, {
        children: d.jsxs(H, {
          className: "my-3",
          style: e.cardStyle,
          children: [
            d.jsx(H.Header, {
              children: d.jsx("h2", {
                style: e.header,
                children: "AI Integrations",
              }),
            }),
            d.jsxs(H.Body, {
              children: [
                d.jsx("div", {
                  children: d.jsx("img", {
                    src: Cx,
                    title: "AI Services",
                    "aria-label": "AI Services",
                    alt: "AI Services",
                    style: e.image,
                  }),
                }),
                d.jsx("h4", {
                  style: e.header,
                  children: "Integrate AI into your website",
                }),
                d.jsx("p", {
                  style: e.paragraph,
                  children:
                    "We specialize in integrating AI technologies into digital platforms and web applications. With our AI integration services, your applications will actively drive your success.",
                }),
                d.jsx("h4", {
                  style: e.header,
                  children: "AI for Productivity",
                }),
                d.jsx("p", {
                  style: e.paragraph,
                  children:
                    "Leverage AI to supercharge your data analytics and information retrieval processes. Our tailored AI solutions will empower your digital platforms to harness data effectively, aligning them with your strategic goals. Through AI-powered analytics and intelligent retrieval, we'll transform your raw data into meaningful insights. Our AI integration services turn your platforms into powerhouses of productivity, reducing costs, driving growth and enhancing decision-making.",
                }),
                d.jsxs("p", {
                  style: e.paragraph,
                  children: [
                    " ",
                    d.jsx(gn, {
                      to: "/contactforms",
                      "aria-label": "Link to Contact page",
                      style: e.linkToContact,
                      children: "Contact TeckBuff",
                    }),
                    " ",
                    "to learn more about our AI Integration services.",
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  Nx = () => {
    const e = {
      services: { display: "flex", flexDirection: "column", gap: "2rem" },
    };
    return d.jsxs("section", {
      style: e.services,
      className: "services",
      children: [d.jsx(xx, {}), d.jsx(kx, {}), d.jsx(Ex, {})],
    });
  },
  Rx = "/api/techcontents",
  Tx = {
    getAll: async () => {
      try {
        return (await ee.get(Rx)).data;
      } catch (e) {
        throw (console.error("Failed to fetch articles:", e), e);
      }
    },
  },
  jx = () => {
    const [e, t] = y.useState({}),
      [n, r] = y.useState([]),
      o = (a) => {
        t((u) => ({ ...u, [a]: !u[a] }));
      },
      i = async () => {
        const a = await Tx.getAll();
        r(a);
      };
    y.useEffect(() => {
      i();
    }, []);
    const l = [...n].sort((a, u) => a.priority - u.priority),
      s = {
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
    return d.jsx("section", {
      className: "tech-content",
      children: d.jsx(Rt, {
        role: "region",
        "aria-labelledby": "tech-content-heading",
        children: d.jsxs(H, {
          className: "my-3",
          style: s.cardStyle,
          children: [
            d.jsx(H.Header, {
              children: d.jsx("h2", {
                id: "tech-content-heading",
                style: s.header,
                children: "Articles",
              }),
            }),
            d.jsx(H.Body, {
              children: l.map((a, u) =>
                d.jsx(
                  H,
                  {
                    className: "article-card",
                    children: d.jsxs(H.Body, {
                      children: [
                        d.jsx("img", {
                          src: a.thumbnailImageUrl,
                          alt: `Thumbnail ${u + 1}`,
                          style: s.thumbnail,
                        }),
                        d.jsx("p", {
                          style: s.paragraph,
                          children: a.description,
                        }),
                        e[u] &&
                          d.jsx("iframe", {
                            src: a.embedUrl,
                            height: "1310",
                            width: "504",
                            allowFullScreen: "",
                            title: `Embedded post ${u + 1}`,
                            style: s.iframe,
                          }),
                        d.jsx(tr, {
                          onClick: () => o(u),
                          "aria-expanded": e[u],
                          className: "btn-custom btn-block btn-lg",
                          children: e[u] ? "Hide" : "Show",
                        }),
                      ],
                    }),
                  },
                  u,
                ),
              ),
            }),
          ],
        }),
      }),
    });
  },
  Ox = "/api/portfolioitems",
  Px = {
    getAll: async () => {
      try {
        return (await ee.get(Ox)).data;
      } catch (e) {
        throw (console.error("Failed to fetch portfolio:", e), e);
      }
    },
  },
  _x = ({ portfolioItem: e }) => {
    const [t, n] = y.useState(!1),
      r = y.useRef(null),
      o = {
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
        iframe: {
          width: "100%",
          height: "50vh",
          border: "none",
          marginBottom: 20,
        },
      };
    return (
      y.useEffect(() => {
        const i = new IntersectionObserver(
          (l) => {
            const [s] = l;
            s.isIntersecting && (n(!0), i.disconnect());
          },
          { threshold: 0.1 },
        );
        return (
          r.current && i.observe(r.current),
          () => {
            i.disconnect();
          }
        );
      }, []),
      d.jsx(Rt, {
        children: d.jsxs(H, {
          className: "my-3",
          style: o.cardStyle,
          children: [
            d.jsx(H.Header, {
              children: d.jsx("h2", { style: o.header, children: e.title }),
            }),
            d.jsxs(H.Body, {
              children: [
                d.jsx(j1, {
                  aspectRatio: "1x1",
                  children: d.jsx("iframe", {
                    ref: r,
                    title: e.title,
                    src: t ? e.iframeUrl : "",
                    frameBorder: "0",
                    allow:
                      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;",
                    allowFullScreen: !0,
                    loading: "lazy",
                    style: o.iframe,
                  }),
                }),
                d.jsx("p", { style: o.paragraph, children: e.description }),
                d.jsxs("div", {
                  children: [
                    e.githubUrl &&
                      d.jsx(tr, {
                        variant: "outline-secondary",
                        href: e.githubUrl,
                        target: "_blank",
                        className: "mr-2",
                        children: "GitHub",
                      }),
                    d.jsx(tr, {
                      variant: "primary",
                      href: e.liveSiteUrl,
                      target: "_blank",
                      children: "Visit the Live Site",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  Lx = () => {
    const [e, t] = y.useState([]);
    y.useEffect(() => {
      (async () => {
        try {
          const o = await Px.getAll();
          t(o);
        } catch (o) {
          console.error("Failed to fetch portfolio items:", o);
        }
      })();
    }, []);
    const n = {
      portfolioItems: { display: "flex", flexDirection: "column", gap: "2rem" },
    };
    return d.jsx("section", {
      className: "portfolio",
      style: n.portfolioItems,
      children: e.map((r) => d.jsx(_x, { portfolioItem: r }, r.id)),
    });
  },
  Ax = () => {
    const e = {
      app: { fontFamily: "Arial Unicode MS" },
      cookie: { background: "#333" },
      button: { color: "#fff", background: "#0047ab", fontSize: "13px" },
    };
    return d.jsx("main", {
      children: d.jsxs("div", {
        className: "app",
        children: [
          d.jsx(mx, {}),
          d.jsx(vx, {}),
          d.jsx(yx, {}),
          d.jsxs(lg, {
            children: [
              d.jsx(Pt, { path: "/", element: d.jsx(Nx, {}) }),
              d.jsx(Pt, { path: "/profile", element: d.jsx(px, {}) }),
              d.jsx(Pt, { path: "/articles", element: d.jsx(jx, {}) }),
              d.jsx(Pt, { path: "/portfolio", element: d.jsx(Lx, {}) }),
              d.jsx(Pt, { path: "/certifications", element: d.jsx(cx, {}) }),
              d.jsx(Pt, { path: "/contactforms", element: d.jsx(sx, {}) }),
              d.jsx(Pt, { path: "*", element: d.jsx(gx, {}) }),
            ],
          }),
          d.jsx(ux, {}),
          d.jsx(Ap, {
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
Ml.createRoot(document.getElementById("root")).render(
  d.jsx(dg, { children: d.jsx(Ax, {}) }),
);
