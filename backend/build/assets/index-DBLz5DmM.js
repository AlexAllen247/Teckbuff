function Ih(e, t) {
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
function qr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Xc = { exports: {} },
  Ci = {},
  Yc = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zr = Symbol.for("react.element"),
  Dh = Symbol.for("react.portal"),
  Bh = Symbol.for("react.fragment"),
  Fh = Symbol.for("react.strict_mode"),
  zh = Symbol.for("react.profiler"),
  Mh = Symbol.for("react.provider"),
  Uh = Symbol.for("react.context"),
  $h = Symbol.for("react.forward_ref"),
  bh = Symbol.for("react.suspense"),
  Wh = Symbol.for("react.memo"),
  Hh = Symbol.for("react.lazy"),
  uu = Symbol.iterator;
function Vh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (uu && e[uu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Jc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  qc = Object.assign,
  Zc = {};
function tr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zc),
    (this.updater = n || Jc);
}
tr.prototype.isReactComponent = {};
tr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
tr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ef() {}
ef.prototype = tr.prototype;
function Ks(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zc),
    (this.updater = n || Jc);
}
var Qs = (Ks.prototype = new ef());
Qs.constructor = Ks;
qc(Qs, tr.prototype);
Qs.isPureReactComponent = !0;
var cu = Array.isArray,
  tf = Object.prototype.hasOwnProperty,
  Gs = { current: null },
  nf = { key: !0, ref: !0, __self: !0, __source: !0 };
function rf(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      tf.call(t, r) && !nf.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: Zr,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Gs.current,
  };
}
function Kh(e, t) {
  return {
    $$typeof: Zr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Xs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zr;
}
function Qh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var fu = /\/+/g;
function qi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Qh("" + e.key)
    : t.toString(36);
}
function Ro(e, t, n, r, o) {
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
          case Zr:
          case Dh:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + qi(l, 0) : r),
      cu(o)
        ? ((n = ""),
          e != null && (n = e.replace(fu, "$&/") + "/"),
          Ro(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Xs(o) &&
            (o = Kh(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(fu, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), cu(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + qi(i, s);
      l += Ro(i, t, n, a, o);
    }
  else if (((a = Vh(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + qi(i, s++)), (l += Ro(i, t, n, a, o));
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
function uo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ro(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Gh(e) {
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
var Ce = { current: null },
  To = { transition: null },
  Xh = {
    ReactCurrentDispatcher: Ce,
    ReactCurrentBatchConfig: To,
    ReactCurrentOwner: Gs,
  };
I.Children = {
  map: uo,
  forEach: function (e, t, n) {
    uo(
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
      uo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      uo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Xs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
I.Component = tr;
I.Fragment = Bh;
I.Profiler = zh;
I.PureComponent = Ks;
I.StrictMode = Fh;
I.Suspense = bh;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xh;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = qc({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Gs.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      tf.call(t, a) &&
        !nf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Zr, type: e.type, key: o, ref: i, props: r, _owner: l };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: Uh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Mh, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = rf;
I.createFactory = function (e) {
  var t = rf.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: $h, render: e };
};
I.isValidElement = Xs;
I.lazy = function (e) {
  return { $$typeof: Hh, _payload: { _status: -1, _result: e }, _init: Gh };
};
I.memo = function (e, t) {
  return { $$typeof: Wh, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = To.transition;
  To.transition = {};
  try {
    e();
  } finally {
    To.transition = t;
  }
};
I.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
I.useCallback = function (e, t) {
  return Ce.current.useCallback(e, t);
};
I.useContext = function (e) {
  return Ce.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return Ce.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return Ce.current.useEffect(e, t);
};
I.useId = function () {
  return Ce.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return Ce.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return Ce.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return Ce.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return Ce.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return Ce.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return Ce.current.useRef(e);
};
I.useState = function (e) {
  return Ce.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return Ce.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return Ce.current.useTransition();
};
I.version = "18.2.0";
Yc.exports = I;
var m = Yc.exports;
const ce = qr(m),
  Yh = Ih({ __proto__: null, default: ce }, [m]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jh = m,
  qh = Symbol.for("react.element"),
  Zh = Symbol.for("react.fragment"),
  em = Object.prototype.hasOwnProperty,
  tm = Jh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  nm = { key: !0, ref: !0, __self: !0, __source: !0 };
function of(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) em.call(t, r) && !nm.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: qh,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: tm.current,
  };
}
Ci.Fragment = Zh;
Ci.jsx = of;
Ci.jsxs = of;
Xc.exports = Ci;
var d = Xc.exports,
  Dl = {},
  lf = { exports: {} },
  Fe = {},
  sf = { exports: {} },
  af = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, _) {
    var L = R.length;
    R.push(_);
    e: for (; 0 < L; ) {
      var z = (L - 1) >>> 1,
        M = R[z];
      if (0 < o(M, _)) (R[z] = _), (R[L] = M), (L = z);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var _ = R[0],
      L = R.pop();
    if (L !== _) {
      R[0] = L;
      e: for (var z = 0, M = R.length, _e = M >>> 1; z < _e; ) {
        var ie = 2 * (z + 1) - 1,
          te = R[ie],
          we = ie + 1,
          en = R[we];
        if (0 > o(te, L))
          we < M && 0 > o(en, te)
            ? ((R[z] = en), (R[we] = L), (z = we))
            : ((R[z] = te), (R[ie] = L), (z = ie));
        else if (we < M && 0 > o(en, L)) (R[z] = en), (R[we] = L), (z = we);
        else break e;
      }
    }
    return _;
  }
  function o(R, _) {
    var L = R.sortIndex - _.sortIndex;
    return L !== 0 ? L : R.id - _.id;
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
    y = 3,
    x = !1,
    w = !1,
    g = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(R) {
    for (var _ = n(u); _ !== null; ) {
      if (_.callback === null) r(u);
      else if (_.startTime <= R)
        r(u), (_.sortIndex = _.expirationTime), t(a, _);
      else break;
      _ = n(u);
    }
  }
  function S(R) {
    if (((g = !1), v(R), !w))
      if (n(a) !== null) (w = !0), Me(j);
      else {
        var _ = n(u);
        _ !== null && G(S, _.startTime - R);
      }
  }
  function j(R, _) {
    (w = !1), g && ((g = !1), h(T), (T = -1)), (x = !0);
    var L = y;
    try {
      for (
        v(_), f = n(a);
        f !== null && (!(f.expirationTime > _) || (R && !ae()));

      ) {
        var z = f.callback;
        if (typeof z == "function") {
          (f.callback = null), (y = f.priorityLevel);
          var M = z(f.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof M == "function" ? (f.callback = M) : f === n(a) && r(a),
            v(_);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var _e = !0;
      else {
        var ie = n(u);
        ie !== null && G(S, ie.startTime - _), (_e = !1);
      }
      return _e;
    } finally {
      (f = null), (y = L), (x = !1);
    }
  }
  var k = !1,
    O = null,
    T = -1,
    $ = 5,
    A = -1;
  function ae() {
    return !(e.unstable_now() - A < $);
  }
  function Ge() {
    if (O !== null) {
      var R = e.unstable_now();
      A = R;
      var _ = !0;
      try {
        _ = O(!0, R);
      } finally {
        _ ? Pe() : ((k = !1), (O = null));
      }
    } else k = !1;
  }
  var Pe;
  if (typeof p == "function")
    Pe = function () {
      p(Ge);
    };
  else if (typeof MessageChannel < "u") {
    var ct = new MessageChannel(),
      Ot = ct.port2;
    (ct.port1.onmessage = Ge),
      (Pe = function () {
        Ot.postMessage(null);
      });
  } else
    Pe = function () {
      C(Ge, 0);
    };
  function Me(R) {
    (O = R), k || ((k = !0), Pe());
  }
  function G(R, _) {
    T = C(function () {
      R(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), Me(j));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : ($ = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return y;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (R) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = y;
      }
      var L = y;
      y = _;
      try {
        return R();
      } finally {
        y = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, _) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var L = y;
      y = R;
      try {
        return _();
      } finally {
        y = L;
      }
    }),
    (e.unstable_scheduleCallback = function (R, _, L) {
      var z = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? z + L : z))
          : (L = z),
        R)
      ) {
        case 1:
          var M = -1;
          break;
        case 2:
          M = 250;
          break;
        case 5:
          M = 1073741823;
          break;
        case 4:
          M = 1e4;
          break;
        default:
          M = 5e3;
      }
      return (
        (M = L + M),
        (R = {
          id: c++,
          callback: _,
          priorityLevel: R,
          startTime: L,
          expirationTime: M,
          sortIndex: -1,
        }),
        L > z
          ? ((R.sortIndex = L),
            t(u, R),
            n(a) === null &&
              R === n(u) &&
              (g ? (h(T), (T = -1)) : (g = !0), G(S, L - z)))
          : ((R.sortIndex = M), t(a, R), w || x || ((w = !0), Me(j))),
        R
      );
    }),
    (e.unstable_shouldYield = ae),
    (e.unstable_wrapCallback = function (R) {
      var _ = y;
      return function () {
        var L = y;
        y = _;
        try {
          return R.apply(this, arguments);
        } finally {
          y = L;
        }
      };
    });
})(af);
sf.exports = af;
var rm = sf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uf = m,
  Be = rm;
function N(e) {
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
var cf = new Set(),
  _r = {};
function gn(e, t) {
  Kn(e, t), Kn(e + "Capture", t);
}
function Kn(e, t) {
  for (_r[e] = t, e = 0; e < t.length; e++) cf.add(t[e]);
}
var wt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Bl = Object.prototype.hasOwnProperty,
  om =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  du = {},
  pu = {};
function im(e) {
  return Bl.call(pu, e)
    ? !0
    : Bl.call(du, e)
    ? !1
    : om.test(e)
    ? (pu[e] = !0)
    : ((du[e] = !0), !1);
}
function lm(e, t, n, r) {
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
function sm(e, t, n, r) {
  if (t === null || typeof t > "u" || lm(e, t, n, r)) return !0;
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
function Ee(e, t, n, r, o, i, l) {
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
    he[e] = new Ee(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  he[t] = new Ee(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  he[e] = new Ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  he[e] = new Ee(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    he[e] = new Ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  he[e] = new Ee(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  he[e] = new Ee(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  he[e] = new Ee(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  he[e] = new Ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ys = /[\-:]([a-z])/g;
function Js(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ys, Js);
    he[t] = new Ee(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ys, Js);
    he[t] = new Ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ys, Js);
  he[t] = new Ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  he[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
he.xlinkHref = new Ee(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  he[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function qs(e, t, n, r) {
  var o = he.hasOwnProperty(t) ? he[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (sm(t, n, o, r) && (n = null),
    r || o === null
      ? im(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var kt = uf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  co = Symbol.for("react.element"),
  On = Symbol.for("react.portal"),
  Rn = Symbol.for("react.fragment"),
  Zs = Symbol.for("react.strict_mode"),
  Fl = Symbol.for("react.profiler"),
  ff = Symbol.for("react.provider"),
  df = Symbol.for("react.context"),
  ea = Symbol.for("react.forward_ref"),
  zl = Symbol.for("react.suspense"),
  Ml = Symbol.for("react.suspense_list"),
  ta = Symbol.for("react.memo"),
  _t = Symbol.for("react.lazy"),
  pf = Symbol.for("react.offscreen"),
  hu = Symbol.iterator;
function sr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (hu && e[hu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var J = Object.assign,
  Zi;
function vr(e) {
  if (Zi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Zi = (t && t[1]) || "";
    }
  return (
    `
` +
    Zi +
    e
  );
}
var el = !1;
function tl(e, t) {
  if (!e || el) return "";
  el = !0;
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
    (el = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? vr(e) : "";
}
function am(e) {
  switch (e.tag) {
    case 5:
      return vr(e.type);
    case 16:
      return vr("Lazy");
    case 13:
      return vr("Suspense");
    case 19:
      return vr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = tl(e.type, !1)), e;
    case 11:
      return (e = tl(e.type.render, !1)), e;
    case 1:
      return (e = tl(e.type, !0)), e;
    default:
      return "";
  }
}
function Ul(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Rn:
      return "Fragment";
    case On:
      return "Portal";
    case Fl:
      return "Profiler";
    case Zs:
      return "StrictMode";
    case zl:
      return "Suspense";
    case Ml:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case df:
        return (e.displayName || "Context") + ".Consumer";
      case ff:
        return (e._context.displayName || "Context") + ".Provider";
      case ea:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ta:
        return (
          (t = e.displayName || null), t !== null ? t : Ul(e.type) || "Memo"
        );
      case _t:
        (t = e._payload), (e = e._init);
        try {
          return Ul(e(t));
        } catch {}
    }
  return null;
}
function um(e) {
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
      return Ul(t);
    case 8:
      return t === Zs ? "StrictMode" : "Mode";
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
function Xt(e) {
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
function hf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function cm(e) {
  var t = hf(e) ? "checked" : "value",
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
function fo(e) {
  e._valueTracker || (e._valueTracker = cm(e));
}
function mf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = hf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function bo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function $l(e, t) {
  var n = t.checked;
  return J({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function mu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Xt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function yf(e, t) {
  (t = t.checked), t != null && qs(e, "checked", t, !1);
}
function bl(e, t) {
  yf(e, t);
  var n = Xt(t.value),
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
    ? Wl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Wl(e, t.type, Xt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function yu(e, t, n) {
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
function Wl(e, t, n) {
  (t !== "number" || bo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var gr = Array.isArray;
function Un(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Xt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Hl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return J({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function vu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (gr(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Xt(n) };
}
function vf(e, t) {
  var n = Xt(t.value),
    r = Xt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function gu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function gf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Vl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? gf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var po,
  wf = (function (e) {
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
        po = po || document.createElement("div"),
          po.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = po.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Lr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Cr = {
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
  fm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Cr).forEach(function (e) {
  fm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Cr[t] = Cr[e]);
  });
});
function xf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Cr.hasOwnProperty(e) && Cr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Sf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = xf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var dm = J(
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
function Kl(e, t) {
  if (t) {
    if (dm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function Ql(e, t) {
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
var Gl = null;
function na(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Xl = null,
  $n = null,
  bn = null;
function wu(e) {
  if ((e = no(e))) {
    if (typeof Xl != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = Oi(t)), Xl(e.stateNode, e.type, t));
  }
}
function Cf(e) {
  $n ? (bn ? bn.push(e) : (bn = [e])) : ($n = e);
}
function Ef() {
  if ($n) {
    var e = $n,
      t = bn;
    if (((bn = $n = null), wu(e), t)) for (e = 0; e < t.length; e++) wu(t[e]);
  }
}
function kf(e, t) {
  return e(t);
}
function Nf() {}
var nl = !1;
function jf(e, t, n) {
  if (nl) return e(t, n);
  nl = !0;
  try {
    return kf(e, t, n);
  } finally {
    (nl = !1), ($n !== null || bn !== null) && (Nf(), Ef());
  }
}
function Ar(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Oi(n);
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
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var Yl = !1;
if (wt)
  try {
    var ar = {};
    Object.defineProperty(ar, "passive", {
      get: function () {
        Yl = !0;
      },
    }),
      window.addEventListener("test", ar, ar),
      window.removeEventListener("test", ar, ar);
  } catch {
    Yl = !1;
  }
function pm(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Er = !1,
  Wo = null,
  Ho = !1,
  Jl = null,
  hm = {
    onError: function (e) {
      (Er = !0), (Wo = e);
    },
  };
function mm(e, t, n, r, o, i, l, s, a) {
  (Er = !1), (Wo = null), pm.apply(hm, arguments);
}
function ym(e, t, n, r, o, i, l, s, a) {
  if ((mm.apply(this, arguments), Er)) {
    if (Er) {
      var u = Wo;
      (Er = !1), (Wo = null);
    } else throw Error(N(198));
    Ho || ((Ho = !0), (Jl = u));
  }
}
function wn(e) {
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
function Of(e) {
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
function xu(e) {
  if (wn(e) !== e) throw Error(N(188));
}
function vm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = wn(e)), t === null)) throw Error(N(188));
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
        if (i === n) return xu(o), e;
        if (i === r) return xu(o), t;
        i = i.sibling;
      }
      throw Error(N(188));
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
        if (!l) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Rf(e) {
  return (e = vm(e)), e !== null ? Tf(e) : null;
}
function Tf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Tf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Pf = Be.unstable_scheduleCallback,
  Su = Be.unstable_cancelCallback,
  gm = Be.unstable_shouldYield,
  wm = Be.unstable_requestPaint,
  ne = Be.unstable_now,
  xm = Be.unstable_getCurrentPriorityLevel,
  ra = Be.unstable_ImmediatePriority,
  _f = Be.unstable_UserBlockingPriority,
  Vo = Be.unstable_NormalPriority,
  Sm = Be.unstable_LowPriority,
  Lf = Be.unstable_IdlePriority,
  Ei = null,
  st = null;
function Cm(e) {
  if (st && typeof st.onCommitFiberRoot == "function")
    try {
      st.onCommitFiberRoot(Ei, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var et = Math.clz32 ? Math.clz32 : Nm,
  Em = Math.log,
  km = Math.LN2;
function Nm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Em(e) / km) | 0)) | 0;
}
var ho = 64,
  mo = 4194304;
function wr(e) {
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
function Ko(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = wr(s)) : ((i &= l), i !== 0 && (r = wr(i)));
  } else (l = n & ~o), l !== 0 ? (r = wr(l)) : i !== 0 && (r = wr(i));
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
      (n = 31 - et(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function jm(e, t) {
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
function Om(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - et(i),
      s = 1 << l,
      a = o[l];
    a === -1
      ? (!(s & n) || s & r) && (o[l] = jm(s, t))
      : a <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function ql(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Af() {
  var e = ho;
  return (ho <<= 1), !(ho & 4194240) && (ho = 64), e;
}
function rl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function eo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - et(t)),
    (e[t] = n);
}
function Rm(e, t) {
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
    var o = 31 - et(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function oa(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - et(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var U = 0;
function If(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Df,
  ia,
  Bf,
  Ff,
  zf,
  Zl = !1,
  yo = [],
  Ut = null,
  $t = null,
  bt = null,
  Ir = new Map(),
  Dr = new Map(),
  Dt = [],
  Tm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Cu(e, t) {
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
      Ir.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Dr.delete(t.pointerId);
  }
}
function ur(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = no(t)), t !== null && ia(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Pm(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Ut = ur(Ut, e, t, n, r, o)), !0;
    case "dragenter":
      return ($t = ur($t, e, t, n, r, o)), !0;
    case "mouseover":
      return (bt = ur(bt, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ir.set(i, ur(Ir.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Dr.set(i, ur(Dr.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Mf(e) {
  var t = ln(e.target);
  if (t !== null) {
    var n = wn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Of(n)), t !== null)) {
          (e.blockedOn = t),
            zf(e.priority, function () {
              Bf(n);
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
function Po(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = es(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Gl = r), n.target.dispatchEvent(r), (Gl = null);
    } else return (t = no(n)), t !== null && ia(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Eu(e, t, n) {
  Po(e) && n.delete(t);
}
function _m() {
  (Zl = !1),
    Ut !== null && Po(Ut) && (Ut = null),
    $t !== null && Po($t) && ($t = null),
    bt !== null && Po(bt) && (bt = null),
    Ir.forEach(Eu),
    Dr.forEach(Eu);
}
function cr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Zl ||
      ((Zl = !0),
      Be.unstable_scheduleCallback(Be.unstable_NormalPriority, _m)));
}
function Br(e) {
  function t(o) {
    return cr(o, e);
  }
  if (0 < yo.length) {
    cr(yo[0], e);
    for (var n = 1; n < yo.length; n++) {
      var r = yo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ut !== null && cr(Ut, e),
      $t !== null && cr($t, e),
      bt !== null && cr(bt, e),
      Ir.forEach(t),
      Dr.forEach(t),
      n = 0;
    n < Dt.length;
    n++
  )
    (r = Dt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Dt.length && ((n = Dt[0]), n.blockedOn === null); )
    Mf(n), n.blockedOn === null && Dt.shift();
}
var Wn = kt.ReactCurrentBatchConfig,
  Qo = !0;
function Lm(e, t, n, r) {
  var o = U,
    i = Wn.transition;
  Wn.transition = null;
  try {
    (U = 1), la(e, t, n, r);
  } finally {
    (U = o), (Wn.transition = i);
  }
}
function Am(e, t, n, r) {
  var o = U,
    i = Wn.transition;
  Wn.transition = null;
  try {
    (U = 4), la(e, t, n, r);
  } finally {
    (U = o), (Wn.transition = i);
  }
}
function la(e, t, n, r) {
  if (Qo) {
    var o = es(e, t, n, r);
    if (o === null) pl(e, t, r, Go, n), Cu(e, r);
    else if (Pm(o, e, t, n, r)) r.stopPropagation();
    else if ((Cu(e, r), t & 4 && -1 < Tm.indexOf(e))) {
      for (; o !== null; ) {
        var i = no(o);
        if (
          (i !== null && Df(i),
          (i = es(e, t, n, r)),
          i === null && pl(e, t, r, Go, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else pl(e, t, r, null, n);
  }
}
var Go = null;
function es(e, t, n, r) {
  if (((Go = null), (e = na(r)), (e = ln(e)), e !== null))
    if (((t = wn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Of(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Go = e), null;
}
function Uf(e) {
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
      switch (xm()) {
        case ra:
          return 1;
        case _f:
          return 4;
        case Vo:
        case Sm:
          return 16;
        case Lf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ft = null,
  sa = null,
  _o = null;
function $f() {
  if (_o) return _o;
  var e,
    t = sa,
    n = t.length,
    r,
    o = "value" in Ft ? Ft.value : Ft.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (_o = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Lo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function vo() {
  return !0;
}
function ku() {
  return !1;
}
function ze(e) {
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
        ? vo
        : ku),
      (this.isPropagationStopped = ku),
      this
    );
  }
  return (
    J(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = vo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = vo));
      },
      persist: function () {},
      isPersistent: vo,
    }),
    t
  );
}
var nr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  aa = ze(nr),
  to = J({}, nr, { view: 0, detail: 0 }),
  Im = ze(to),
  ol,
  il,
  fr,
  ki = J({}, to, {
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
    getModifierState: ua,
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
        : (e !== fr &&
            (fr && e.type === "mousemove"
              ? ((ol = e.screenX - fr.screenX), (il = e.screenY - fr.screenY))
              : (il = ol = 0),
            (fr = e)),
          ol);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : il;
    },
  }),
  Nu = ze(ki),
  Dm = J({}, ki, { dataTransfer: 0 }),
  Bm = ze(Dm),
  Fm = J({}, to, { relatedTarget: 0 }),
  ll = ze(Fm),
  zm = J({}, nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mm = ze(zm),
  Um = J({}, nr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  $m = ze(Um),
  bm = J({}, nr, { data: 0 }),
  ju = ze(bm),
  Wm = {
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
  Hm = {
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
  Vm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Km(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Vm[e]) ? !!t[e] : !1;
}
function ua() {
  return Km;
}
var Qm = J({}, to, {
    key: function (e) {
      if (e.key) {
        var t = Wm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Lo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Hm[e.keyCode] || "Unidentified"
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
    getModifierState: ua,
    charCode: function (e) {
      return e.type === "keypress" ? Lo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Lo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Gm = ze(Qm),
  Xm = J({}, ki, {
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
  Ou = ze(Xm),
  Ym = J({}, to, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ua,
  }),
  Jm = ze(Ym),
  qm = J({}, nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Zm = ze(qm),
  ey = J({}, ki, {
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
  ty = ze(ey),
  ny = [9, 13, 27, 32],
  ca = wt && "CompositionEvent" in window,
  kr = null;
wt && "documentMode" in document && (kr = document.documentMode);
var ry = wt && "TextEvent" in window && !kr,
  bf = wt && (!ca || (kr && 8 < kr && 11 >= kr)),
  Ru = " ",
  Tu = !1;
function Wf(e, t) {
  switch (e) {
    case "keyup":
      return ny.indexOf(t.keyCode) !== -1;
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
function Hf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Tn = !1;
function oy(e, t) {
  switch (e) {
    case "compositionend":
      return Hf(t);
    case "keypress":
      return t.which !== 32 ? null : ((Tu = !0), Ru);
    case "textInput":
      return (e = t.data), e === Ru && Tu ? null : e;
    default:
      return null;
  }
}
function iy(e, t) {
  if (Tn)
    return e === "compositionend" || (!ca && Wf(e, t))
      ? ((e = $f()), (_o = sa = Ft = null), (Tn = !1), e)
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
      return bf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ly = {
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
function Pu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ly[e.type] : t === "textarea";
}
function Vf(e, t, n, r) {
  Cf(r),
    (t = Xo(t, "onChange")),
    0 < t.length &&
      ((n = new aa("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Nr = null,
  Fr = null;
function sy(e) {
  nd(e, 0);
}
function Ni(e) {
  var t = Ln(e);
  if (mf(t)) return e;
}
function ay(e, t) {
  if (e === "change") return t;
}
var Kf = !1;
if (wt) {
  var sl;
  if (wt) {
    var al = "oninput" in document;
    if (!al) {
      var _u = document.createElement("div");
      _u.setAttribute("oninput", "return;"),
        (al = typeof _u.oninput == "function");
    }
    sl = al;
  } else sl = !1;
  Kf = sl && (!document.documentMode || 9 < document.documentMode);
}
function Lu() {
  Nr && (Nr.detachEvent("onpropertychange", Qf), (Fr = Nr = null));
}
function Qf(e) {
  if (e.propertyName === "value" && Ni(Fr)) {
    var t = [];
    Vf(t, Fr, e, na(e)), jf(sy, t);
  }
}
function uy(e, t, n) {
  e === "focusin"
    ? (Lu(), (Nr = t), (Fr = n), Nr.attachEvent("onpropertychange", Qf))
    : e === "focusout" && Lu();
}
function cy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ni(Fr);
}
function fy(e, t) {
  if (e === "click") return Ni(t);
}
function dy(e, t) {
  if (e === "input" || e === "change") return Ni(t);
}
function py(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var nt = typeof Object.is == "function" ? Object.is : py;
function zr(e, t) {
  if (nt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Bl.call(t, o) || !nt(e[o], t[o])) return !1;
  }
  return !0;
}
function Au(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Iu(e, t) {
  var n = Au(e);
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
    n = Au(n);
  }
}
function Gf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Gf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Xf() {
  for (var e = window, t = bo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = bo(e.document);
  }
  return t;
}
function fa(e) {
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
function hy(e) {
  var t = Xf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Gf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && fa(n)) {
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
          (o = Iu(n, i));
        var l = Iu(n, r);
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
var my = wt && "documentMode" in document && 11 >= document.documentMode,
  Pn = null,
  ts = null,
  jr = null,
  ns = !1;
function Du(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ns ||
    Pn == null ||
    Pn !== bo(r) ||
    ((r = Pn),
    "selectionStart" in r && fa(r)
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
    (jr && zr(jr, r)) ||
      ((jr = r),
      (r = Xo(ts, "onSelect")),
      0 < r.length &&
        ((t = new aa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Pn))));
}
function go(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var _n = {
    animationend: go("Animation", "AnimationEnd"),
    animationiteration: go("Animation", "AnimationIteration"),
    animationstart: go("Animation", "AnimationStart"),
    transitionend: go("Transition", "TransitionEnd"),
  },
  ul = {},
  Yf = {};
wt &&
  ((Yf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete _n.animationend.animation,
    delete _n.animationiteration.animation,
    delete _n.animationstart.animation),
  "TransitionEvent" in window || delete _n.transitionend.transition);
function ji(e) {
  if (ul[e]) return ul[e];
  if (!_n[e]) return e;
  var t = _n[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Yf) return (ul[e] = t[n]);
  return e;
}
var Jf = ji("animationend"),
  qf = ji("animationiteration"),
  Zf = ji("animationstart"),
  ed = ji("transitionend"),
  td = new Map(),
  Bu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Jt(e, t) {
  td.set(e, t), gn(t, [e]);
}
for (var cl = 0; cl < Bu.length; cl++) {
  var fl = Bu[cl],
    yy = fl.toLowerCase(),
    vy = fl[0].toUpperCase() + fl.slice(1);
  Jt(yy, "on" + vy);
}
Jt(Jf, "onAnimationEnd");
Jt(qf, "onAnimationIteration");
Jt(Zf, "onAnimationStart");
Jt("dblclick", "onDoubleClick");
Jt("focusin", "onFocus");
Jt("focusout", "onBlur");
Jt(ed, "onTransitionEnd");
Kn("onMouseEnter", ["mouseout", "mouseover"]);
Kn("onMouseLeave", ["mouseout", "mouseover"]);
Kn("onPointerEnter", ["pointerout", "pointerover"]);
Kn("onPointerLeave", ["pointerout", "pointerover"]);
gn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
gn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
gn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
gn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
gn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var xr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  gy = new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));
function Fu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), ym(r, t, void 0, e), (e.currentTarget = null);
}
function nd(e, t) {
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
          Fu(o, s, u), (i = a);
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
          Fu(o, s, u), (i = a);
        }
    }
  }
  if (Ho) throw ((e = Jl), (Ho = !1), (Jl = null), e);
}
function V(e, t) {
  var n = t[ss];
  n === void 0 && (n = t[ss] = new Set());
  var r = e + "__bubble";
  n.has(r) || (rd(t, e, 2, !1), n.add(r));
}
function dl(e, t, n) {
  var r = 0;
  t && (r |= 4), rd(n, e, r, t);
}
var wo = "_reactListening" + Math.random().toString(36).slice(2);
function Mr(e) {
  if (!e[wo]) {
    (e[wo] = !0),
      cf.forEach(function (n) {
        n !== "selectionchange" && (gy.has(n) || dl(n, !1, e), dl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[wo] || ((t[wo] = !0), dl("selectionchange", !1, t));
  }
}
function rd(e, t, n, r) {
  switch (Uf(t)) {
    case 1:
      var o = Lm;
      break;
    case 4:
      o = Am;
      break;
    default:
      o = la;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Yl ||
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
function pl(e, t, n, r, o) {
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
  jf(function () {
    var u = i,
      c = na(n),
      f = [];
    e: {
      var y = td.get(e);
      if (y !== void 0) {
        var x = aa,
          w = e;
        switch (e) {
          case "keypress":
            if (Lo(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Gm;
            break;
          case "focusin":
            (w = "focus"), (x = ll);
            break;
          case "focusout":
            (w = "blur"), (x = ll);
            break;
          case "beforeblur":
          case "afterblur":
            x = ll;
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
            x = Nu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = Bm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Jm;
            break;
          case Jf:
          case qf:
          case Zf:
            x = Mm;
            break;
          case ed:
            x = Zm;
            break;
          case "scroll":
            x = Im;
            break;
          case "wheel":
            x = ty;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = $m;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Ou;
        }
        var g = (t & 4) !== 0,
          C = !g && e === "scroll",
          h = g ? (y !== null ? y + "Capture" : null) : y;
        g = [];
        for (var p = u, v; p !== null; ) {
          v = p;
          var S = v.stateNode;
          if (
            (v.tag === 5 &&
              S !== null &&
              ((v = S),
              h !== null && ((S = Ar(p, h)), S != null && g.push(Ur(p, S, v)))),
            C)
          )
            break;
          p = p.return;
        }
        0 < g.length &&
          ((y = new x(y, w, null, n, c)), f.push({ event: y, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((y = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          y &&
            n !== Gl &&
            (w = n.relatedTarget || n.fromElement) &&
            (ln(w) || w[xt]))
        )
          break e;
        if (
          (x || y) &&
          ((y =
            c.window === c
              ? c
              : (y = c.ownerDocument)
              ? y.defaultView || y.parentWindow
              : window),
          x
            ? ((w = n.relatedTarget || n.toElement),
              (x = u),
              (w = w ? ln(w) : null),
              w !== null &&
                ((C = wn(w)), w !== C || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = u)),
          x !== w)
        ) {
          if (
            ((g = Nu),
            (S = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Ou),
              (S = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (C = x == null ? y : Ln(x)),
            (v = w == null ? y : Ln(w)),
            (y = new g(S, p + "leave", x, n, c)),
            (y.target = C),
            (y.relatedTarget = v),
            (S = null),
            ln(c) === u &&
              ((g = new g(h, p + "enter", w, n, c)),
              (g.target = v),
              (g.relatedTarget = C),
              (S = g)),
            (C = S),
            x && w)
          )
            t: {
              for (g = x, h = w, p = 0, v = g; v; v = En(v)) p++;
              for (v = 0, S = h; S; S = En(S)) v++;
              for (; 0 < p - v; ) (g = En(g)), p--;
              for (; 0 < v - p; ) (h = En(h)), v--;
              for (; p--; ) {
                if (g === h || (h !== null && g === h.alternate)) break t;
                (g = En(g)), (h = En(h));
              }
              g = null;
            }
          else g = null;
          x !== null && zu(f, y, x, g, !1),
            w !== null && C !== null && zu(f, C, w, g, !0);
        }
      }
      e: {
        if (
          ((y = u ? Ln(u) : window),
          (x = y.nodeName && y.nodeName.toLowerCase()),
          x === "select" || (x === "input" && y.type === "file"))
        )
          var j = ay;
        else if (Pu(y))
          if (Kf) j = dy;
          else {
            j = cy;
            var k = uy;
          }
        else
          (x = y.nodeName) &&
            x.toLowerCase() === "input" &&
            (y.type === "checkbox" || y.type === "radio") &&
            (j = fy);
        if (j && (j = j(e, u))) {
          Vf(f, j, n, c);
          break e;
        }
        k && k(e, y, u),
          e === "focusout" &&
            (k = y._wrapperState) &&
            k.controlled &&
            y.type === "number" &&
            Wl(y, "number", y.value);
      }
      switch (((k = u ? Ln(u) : window), e)) {
        case "focusin":
          (Pu(k) || k.contentEditable === "true") &&
            ((Pn = k), (ts = u), (jr = null));
          break;
        case "focusout":
          jr = ts = Pn = null;
          break;
        case "mousedown":
          ns = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ns = !1), Du(f, n, c);
          break;
        case "selectionchange":
          if (my) break;
        case "keydown":
        case "keyup":
          Du(f, n, c);
      }
      var O;
      if (ca)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Tn
          ? Wf(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (bf &&
          n.locale !== "ko" &&
          (Tn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Tn && (O = $f())
            : ((Ft = c),
              (sa = "value" in Ft ? Ft.value : Ft.textContent),
              (Tn = !0))),
        (k = Xo(u, T)),
        0 < k.length &&
          ((T = new ju(T, e, null, n, c)),
          f.push({ event: T, listeners: k }),
          O ? (T.data = O) : ((O = Hf(n)), O !== null && (T.data = O)))),
        (O = ry ? oy(e, n) : iy(e, n)) &&
          ((u = Xo(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new ju("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = O)));
    }
    nd(f, t);
  });
}
function Ur(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Ar(e, n)),
      i != null && r.unshift(Ur(e, i, o)),
      (i = Ar(e, t)),
      i != null && r.push(Ur(e, i, o))),
      (e = e.return);
  }
  return r;
}
function En(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function zu(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((a = Ar(n, i)), a != null && l.unshift(Ur(n, a, s)))
        : o || ((a = Ar(n, i)), a != null && l.push(Ur(n, a, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var wy = /\r\n?/g,
  xy = /\u0000|\uFFFD/g;
function Mu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      wy,
      `
`,
    )
    .replace(xy, "");
}
function xo(e, t, n) {
  if (((t = Mu(t)), Mu(e) !== t && n)) throw Error(N(425));
}
function Yo() {}
var rs = null,
  os = null;
function is(e, t) {
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
var ls = typeof setTimeout == "function" ? setTimeout : void 0,
  Sy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Uu = typeof Promise == "function" ? Promise : void 0,
  Cy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Uu < "u"
      ? function (e) {
          return Uu.resolve(null).then(e).catch(Ey);
        }
      : ls;
function Ey(e) {
  setTimeout(function () {
    throw e;
  });
}
function hl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Br(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Br(t);
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
function $u(e) {
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
var rr = Math.random().toString(36).slice(2),
  it = "__reactFiber$" + rr,
  $r = "__reactProps$" + rr,
  xt = "__reactContainer$" + rr,
  ss = "__reactEvents$" + rr,
  ky = "__reactListeners$" + rr,
  Ny = "__reactHandles$" + rr;
function ln(e) {
  var t = e[it];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[xt] || n[it])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = $u(e); e !== null; ) {
          if ((n = e[it])) return n;
          e = $u(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function no(e) {
  return (
    (e = e[it] || e[xt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ln(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Oi(e) {
  return e[$r] || null;
}
var as = [],
  An = -1;
function qt(e) {
  return { current: e };
}
function K(e) {
  0 > An || ((e.current = as[An]), (as[An] = null), An--);
}
function W(e, t) {
  An++, (as[An] = e.current), (e.current = t);
}
var Yt = {},
  ge = qt(Yt),
  je = qt(!1),
  dn = Yt;
function Qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Yt;
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
function Oe(e) {
  return (e = e.childContextTypes), e != null;
}
function Jo() {
  K(je), K(ge);
}
function bu(e, t, n) {
  if (ge.current !== Yt) throw Error(N(168));
  W(ge, t), W(je, n);
}
function od(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(N(108, um(e) || "Unknown", o));
  return J({}, n, r);
}
function qo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Yt),
    (dn = ge.current),
    W(ge, e),
    W(je, je.current),
    !0
  );
}
function Wu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = od(e, t, dn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      K(je),
      K(ge),
      W(ge, e))
    : K(je),
    W(je, n);
}
var dt = null,
  Ri = !1,
  ml = !1;
function id(e) {
  dt === null ? (dt = [e]) : dt.push(e);
}
function jy(e) {
  (Ri = !0), id(e);
}
function Zt() {
  if (!ml && dt !== null) {
    ml = !0;
    var e = 0,
      t = U;
    try {
      var n = dt;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (dt = null), (Ri = !1);
    } catch (o) {
      throw (dt !== null && (dt = dt.slice(e + 1)), Pf(ra, Zt), o);
    } finally {
      (U = t), (ml = !1);
    }
  }
  return null;
}
var In = [],
  Dn = 0,
  Zo = null,
  ei = 0,
  Ue = [],
  $e = 0,
  pn = null,
  ht = 1,
  mt = "";
function nn(e, t) {
  (In[Dn++] = ei), (In[Dn++] = Zo), (Zo = e), (ei = t);
}
function ld(e, t, n) {
  (Ue[$e++] = ht), (Ue[$e++] = mt), (Ue[$e++] = pn), (pn = e);
  var r = ht;
  e = mt;
  var o = 32 - et(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - et(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (ht = (1 << (32 - et(t) + o)) | (n << o) | r),
      (mt = i + e);
  } else (ht = (1 << i) | (n << o) | r), (mt = e);
}
function da(e) {
  e.return !== null && (nn(e, 1), ld(e, 1, 0));
}
function pa(e) {
  for (; e === Zo; )
    (Zo = In[--Dn]), (In[Dn] = null), (ei = In[--Dn]), (In[Dn] = null);
  for (; e === pn; )
    (pn = Ue[--$e]),
      (Ue[$e] = null),
      (mt = Ue[--$e]),
      (Ue[$e] = null),
      (ht = Ue[--$e]),
      (Ue[$e] = null);
}
var De = null,
  Ie = null,
  Q = !1,
  qe = null;
function sd(e, t) {
  var n = be(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Hu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (De = e), (Ie = Wt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (De = e), (Ie = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = pn !== null ? { id: ht, overflow: mt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = be(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (De = e),
            (Ie = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function us(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function cs(e) {
  if (Q) {
    var t = Ie;
    if (t) {
      var n = t;
      if (!Hu(e, t)) {
        if (us(e)) throw Error(N(418));
        t = Wt(n.nextSibling);
        var r = De;
        t && Hu(e, t)
          ? sd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Q = !1), (De = e));
      }
    } else {
      if (us(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (Q = !1), (De = e);
    }
  }
}
function Vu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  De = e;
}
function So(e) {
  if (e !== De) return !1;
  if (!Q) return Vu(e), (Q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !is(e.type, e.memoizedProps))),
    t && (t = Ie))
  ) {
    if (us(e)) throw (ad(), Error(N(418)));
    for (; t; ) sd(e, t), (t = Wt(t.nextSibling));
  }
  if ((Vu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ie = Wt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ie = null;
    }
  } else Ie = De ? Wt(e.stateNode.nextSibling) : null;
  return !0;
}
function ad() {
  for (var e = Ie; e; ) e = Wt(e.nextSibling);
}
function Gn() {
  (Ie = De = null), (Q = !1);
}
function ha(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
var Oy = kt.ReactCurrentBatchConfig;
function Ye(e, t) {
  if (e && e.defaultProps) {
    (t = J({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ti = qt(null),
  ni = null,
  Bn = null,
  ma = null;
function ya() {
  ma = Bn = ni = null;
}
function va(e) {
  var t = ti.current;
  K(ti), (e._currentValue = t);
}
function fs(e, t, n) {
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
function Hn(e, t) {
  (ni = e),
    (ma = Bn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ne = !0), (e.firstContext = null));
}
function Ke(e) {
  var t = e._currentValue;
  if (ma !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Bn === null)) {
      if (ni === null) throw Error(N(308));
      (Bn = e), (ni.dependencies = { lanes: 0, firstContext: e });
    } else Bn = Bn.next = e;
  return t;
}
var sn = null;
function ga(e) {
  sn === null ? (sn = [e]) : sn.push(e);
}
function ud(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), ga(t)) : ((n.next = o.next), (o.next = n)),
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
function wa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function cd(e, t) {
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
    o === null ? ((t.next = t), ga(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    St(e, n)
  );
}
function Ao(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), oa(e, n);
  }
}
function Ku(e, t) {
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
function ri(e, t, n, r) {
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
      var y = s.lane,
        x = s.eventTime;
      if ((r & y) === y) {
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
          var w = e,
            g = s;
          switch (((y = t), (x = n), g.tag)) {
            case 1:
              if (((w = g.payload), typeof w == "function")) {
                f = w.call(x, f, y);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = g.payload),
                (y = typeof w == "function" ? w.call(x, f, y) : w),
                y == null)
              )
                break e;
              f = J({}, f, y);
              break e;
            case 2:
              Lt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (y = o.effects),
          y === null ? (o.effects = [s]) : y.push(s));
      } else
        (x = {
          eventTime: x,
          lane: y,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = x), (a = f)) : (c = c.next = x),
          (l |= y);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (y = s),
          (s = y.next),
          (y.next = null),
          (o.lastBaseUpdate = y),
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
    (mn |= l), (e.lanes = l), (e.memoizedState = f);
  }
}
function Qu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(N(191, o));
        o.call(r);
      }
    }
}
var fd = new uf.Component().refs;
function ds(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : J({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ti = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? wn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      o = Kt(e),
      i = yt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Ht(e, i, o)),
      t !== null && (tt(t, e, o, r), Ao(t, e, o));
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
      t !== null && (tt(t, e, o, r), Ao(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Se(),
      r = Kt(e),
      o = yt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Ht(e, o, r)),
      t !== null && (tt(t, e, r, n), Ao(t, e, r));
  },
};
function Gu(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !zr(n, r) || !zr(o, i)
      : !0
  );
}
function dd(e, t, n) {
  var r = !1,
    o = Yt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ke(i))
      : ((o = Oe(t) ? dn : ge.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Qn(e, o) : Yt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ti),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Xu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ti.enqueueReplaceState(t, t.state, null);
}
function ps(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = fd), wa(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Ke(i))
    : ((i = Oe(t) ? dn : ge.current), (o.context = Qn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (ds(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ti.enqueueReplaceState(o, o.state, null),
      ri(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function dr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = o.refs;
            s === fd && (s = o.refs = {}),
              l === null ? delete s[i] : (s[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Co(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Yu(e) {
  var t = e._init;
  return t(e._payload);
}
function pd(e) {
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
  function s(h, p, v, S) {
    return p === null || p.tag !== 6
      ? ((p = Cl(v, h.mode, S)), (p.return = h), p)
      : ((p = o(p, v)), (p.return = h), p);
  }
  function a(h, p, v, S) {
    var j = v.type;
    return j === Rn
      ? c(h, p, v.props.children, S, v.key)
      : p !== null &&
        (p.elementType === j ||
          (typeof j == "object" &&
            j !== null &&
            j.$$typeof === _t &&
            Yu(j) === p.type))
      ? ((S = o(p, v.props)), (S.ref = dr(h, p, v)), (S.return = h), S)
      : ((S = Mo(v.type, v.key, v.props, null, h.mode, S)),
        (S.ref = dr(h, p, v)),
        (S.return = h),
        S);
  }
  function u(h, p, v, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== v.containerInfo ||
      p.stateNode.implementation !== v.implementation
      ? ((p = El(v, h.mode, S)), (p.return = h), p)
      : ((p = o(p, v.children || [])), (p.return = h), p);
  }
  function c(h, p, v, S, j) {
    return p === null || p.tag !== 7
      ? ((p = cn(v, h.mode, S, j)), (p.return = h), p)
      : ((p = o(p, v)), (p.return = h), p);
  }
  function f(h, p, v) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Cl("" + p, h.mode, v)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case co:
          return (
            (v = Mo(p.type, p.key, p.props, null, h.mode, v)),
            (v.ref = dr(h, null, p)),
            (v.return = h),
            v
          );
        case On:
          return (p = El(p, h.mode, v)), (p.return = h), p;
        case _t:
          var S = p._init;
          return f(h, S(p._payload), v);
      }
      if (gr(p) || sr(p))
        return (p = cn(p, h.mode, v, null)), (p.return = h), p;
      Co(h, p);
    }
    return null;
  }
  function y(h, p, v, S) {
    var j = p !== null ? p.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return j !== null ? null : s(h, p, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case co:
          return v.key === j ? a(h, p, v, S) : null;
        case On:
          return v.key === j ? u(h, p, v, S) : null;
        case _t:
          return (j = v._init), y(h, p, j(v._payload), S);
      }
      if (gr(v) || sr(v)) return j !== null ? null : c(h, p, v, S, null);
      Co(h, v);
    }
    return null;
  }
  function x(h, p, v, S, j) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (h = h.get(v) || null), s(p, h, "" + S, j);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case co:
          return (h = h.get(S.key === null ? v : S.key) || null), a(p, h, S, j);
        case On:
          return (h = h.get(S.key === null ? v : S.key) || null), u(p, h, S, j);
        case _t:
          var k = S._init;
          return x(h, p, v, k(S._payload), j);
      }
      if (gr(S) || sr(S)) return (h = h.get(v) || null), c(p, h, S, j, null);
      Co(p, S);
    }
    return null;
  }
  function w(h, p, v, S) {
    for (
      var j = null, k = null, O = p, T = (p = 0), $ = null;
      O !== null && T < v.length;
      T++
    ) {
      O.index > T ? (($ = O), (O = null)) : ($ = O.sibling);
      var A = y(h, O, v[T], S);
      if (A === null) {
        O === null && (O = $);
        break;
      }
      e && O && A.alternate === null && t(h, O),
        (p = i(A, p, T)),
        k === null ? (j = A) : (k.sibling = A),
        (k = A),
        (O = $);
    }
    if (T === v.length) return n(h, O), Q && nn(h, T), j;
    if (O === null) {
      for (; T < v.length; T++)
        (O = f(h, v[T], S)),
          O !== null &&
            ((p = i(O, p, T)), k === null ? (j = O) : (k.sibling = O), (k = O));
      return Q && nn(h, T), j;
    }
    for (O = r(h, O); T < v.length; T++)
      ($ = x(O, h, T, v[T], S)),
        $ !== null &&
          (e && $.alternate !== null && O.delete($.key === null ? T : $.key),
          (p = i($, p, T)),
          k === null ? (j = $) : (k.sibling = $),
          (k = $));
    return (
      e &&
        O.forEach(function (ae) {
          return t(h, ae);
        }),
      Q && nn(h, T),
      j
    );
  }
  function g(h, p, v, S) {
    var j = sr(v);
    if (typeof j != "function") throw Error(N(150));
    if (((v = j.call(v)), v == null)) throw Error(N(151));
    for (
      var k = (j = null), O = p, T = (p = 0), $ = null, A = v.next();
      O !== null && !A.done;
      T++, A = v.next()
    ) {
      O.index > T ? (($ = O), (O = null)) : ($ = O.sibling);
      var ae = y(h, O, A.value, S);
      if (ae === null) {
        O === null && (O = $);
        break;
      }
      e && O && ae.alternate === null && t(h, O),
        (p = i(ae, p, T)),
        k === null ? (j = ae) : (k.sibling = ae),
        (k = ae),
        (O = $);
    }
    if (A.done) return n(h, O), Q && nn(h, T), j;
    if (O === null) {
      for (; !A.done; T++, A = v.next())
        (A = f(h, A.value, S)),
          A !== null &&
            ((p = i(A, p, T)), k === null ? (j = A) : (k.sibling = A), (k = A));
      return Q && nn(h, T), j;
    }
    for (O = r(h, O); !A.done; T++, A = v.next())
      (A = x(O, h, T, A.value, S)),
        A !== null &&
          (e && A.alternate !== null && O.delete(A.key === null ? T : A.key),
          (p = i(A, p, T)),
          k === null ? (j = A) : (k.sibling = A),
          (k = A));
    return (
      e &&
        O.forEach(function (Ge) {
          return t(h, Ge);
        }),
      Q && nn(h, T),
      j
    );
  }
  function C(h, p, v, S) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Rn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case co:
          e: {
            for (var j = v.key, k = p; k !== null; ) {
              if (k.key === j) {
                if (((j = v.type), j === Rn)) {
                  if (k.tag === 7) {
                    n(h, k.sibling),
                      (p = o(k, v.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  k.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === _t &&
                    Yu(j) === k.type)
                ) {
                  n(h, k.sibling),
                    (p = o(k, v.props)),
                    (p.ref = dr(h, k, v)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, k);
                break;
              } else t(h, k);
              k = k.sibling;
            }
            v.type === Rn
              ? ((p = cn(v.props.children, h.mode, S, v.key)),
                (p.return = h),
                (h = p))
              : ((S = Mo(v.type, v.key, v.props, null, h.mode, S)),
                (S.ref = dr(h, p, v)),
                (S.return = h),
                (h = S));
          }
          return l(h);
        case On:
          e: {
            for (k = v.key; p !== null; ) {
              if (p.key === k)
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
            (p = El(v, h.mode, S)), (p.return = h), (h = p);
          }
          return l(h);
        case _t:
          return (k = v._init), C(h, p, k(v._payload), S);
      }
      if (gr(v)) return w(h, p, v, S);
      if (sr(v)) return g(h, p, v, S);
      Co(h, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = o(p, v)), (p.return = h), (h = p))
          : (n(h, p), (p = Cl(v, h.mode, S)), (p.return = h), (h = p)),
        l(h))
      : n(h, p);
  }
  return C;
}
var Xn = pd(!0),
  hd = pd(!1),
  ro = {},
  at = qt(ro),
  br = qt(ro),
  Wr = qt(ro);
function an(e) {
  if (e === ro) throw Error(N(174));
  return e;
}
function xa(e, t) {
  switch ((W(Wr, t), W(br, e), W(at, ro), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Vl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Vl(t, e));
  }
  K(at), W(at, t);
}
function Yn() {
  K(at), K(br), K(Wr);
}
function md(e) {
  an(Wr.current);
  var t = an(at.current),
    n = Vl(t, e.type);
  t !== n && (W(br, e), W(at, n));
}
function Sa(e) {
  br.current === e && (K(at), K(br));
}
var X = qt(0);
function oi(e) {
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
var yl = [];
function Ca() {
  for (var e = 0; e < yl.length; e++)
    yl[e]._workInProgressVersionPrimary = null;
  yl.length = 0;
}
var Io = kt.ReactCurrentDispatcher,
  vl = kt.ReactCurrentBatchConfig,
  hn = 0,
  Y = null,
  le = null,
  ue = null,
  ii = !1,
  Or = !1,
  Hr = 0,
  Ry = 0;
function me() {
  throw Error(N(321));
}
function Ea(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!nt(e[n], t[n])) return !1;
  return !0;
}
function ka(e, t, n, r, o, i) {
  if (
    ((hn = i),
    (Y = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Io.current = e === null || e.memoizedState === null ? Ly : Ay),
    (e = n(r, o)),
    Or)
  ) {
    i = 0;
    do {
      if (((Or = !1), (Hr = 0), 25 <= i)) throw Error(N(301));
      (i += 1),
        (ue = le = null),
        (t.updateQueue = null),
        (Io.current = Iy),
        (e = n(r, o));
    } while (Or);
  }
  if (
    ((Io.current = li),
    (t = le !== null && le.next !== null),
    (hn = 0),
    (ue = le = Y = null),
    (ii = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Na() {
  var e = Hr !== 0;
  return (Hr = 0), e;
}
function ot() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ue === null ? (Y.memoizedState = ue = e) : (ue = ue.next = e), ue;
}
function Qe() {
  if (le === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = le.next;
  var t = ue === null ? Y.memoizedState : ue.next;
  if (t !== null) (ue = t), (le = e);
  else {
    if (e === null) throw Error(N(310));
    (le = e),
      (e = {
        memoizedState: le.memoizedState,
        baseState: le.baseState,
        baseQueue: le.baseQueue,
        queue: le.queue,
        next: null,
      }),
      ue === null ? (Y.memoizedState = ue = e) : (ue = ue.next = e);
  }
  return ue;
}
function Vr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function gl(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(N(311));
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
      if ((hn & c) === c)
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
          (Y.lanes |= c),
          (mn |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (l = r) : (a.next = s),
      nt(r, t.memoizedState) || (Ne = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Y.lanes |= i), (mn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function wl(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    nt(i, t.memoizedState) || (Ne = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function yd() {}
function vd(e, t) {
  var n = Y,
    r = Qe(),
    o = t(),
    i = !nt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ne = !0)),
    (r = r.queue),
    ja(xd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ue !== null && ue.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Kr(9, wd.bind(null, n, r, o, t), void 0, null),
      fe === null)
    )
      throw Error(N(349));
    hn & 30 || gd(n, t, o);
  }
  return o;
}
function gd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function wd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Sd(t) && Cd(e);
}
function xd(e, t, n) {
  return n(function () {
    Sd(t) && Cd(e);
  });
}
function Sd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !nt(e, n);
  } catch {
    return !0;
  }
}
function Cd(e) {
  var t = St(e, 1);
  t !== null && tt(t, e, 1, -1);
}
function Ju(e) {
  var t = ot();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Vr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = _y.bind(null, Y, e)),
    [t.memoizedState, e]
  );
}
function Kr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ed() {
  return Qe().memoizedState;
}
function Do(e, t, n, r) {
  var o = ot();
  (Y.flags |= e),
    (o.memoizedState = Kr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Pi(e, t, n, r) {
  var o = Qe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (le !== null) {
    var l = le.memoizedState;
    if (((i = l.destroy), r !== null && Ea(r, l.deps))) {
      o.memoizedState = Kr(t, n, i, r);
      return;
    }
  }
  (Y.flags |= e), (o.memoizedState = Kr(1 | t, n, i, r));
}
function qu(e, t) {
  return Do(8390656, 8, e, t);
}
function ja(e, t) {
  return Pi(2048, 8, e, t);
}
function kd(e, t) {
  return Pi(4, 2, e, t);
}
function Nd(e, t) {
  return Pi(4, 4, e, t);
}
function jd(e, t) {
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
function Od(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Pi(4, 4, jd.bind(null, t, e), n)
  );
}
function Oa() {}
function Rd(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ea(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Td(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ea(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Pd(e, t, n) {
  return hn & 21
    ? (nt(n, t) || ((n = Af()), (Y.lanes |= n), (mn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ne = !0)), (e.memoizedState = n));
}
function Ty(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = vl.transition;
  vl.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (vl.transition = r);
  }
}
function _d() {
  return Qe().memoizedState;
}
function Py(e, t, n) {
  var r = Kt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ld(e))
  )
    Ad(t, n);
  else if (((n = ud(e, t, n, r)), n !== null)) {
    var o = Se();
    tt(n, e, r, o), Id(n, t, r);
  }
}
function _y(e, t, n) {
  var r = Kt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ld(e)) Ad(t, o);
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
        if (((o.hasEagerState = !0), (o.eagerState = s), nt(s, l))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), ga(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = ud(e, t, o, r)),
      n !== null && ((o = Se()), tt(n, e, r, o), Id(n, t, r));
  }
}
function Ld(e) {
  var t = e.alternate;
  return e === Y || (t !== null && t === Y);
}
function Ad(e, t) {
  Or = ii = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Id(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), oa(e, n);
  }
}
var li = {
    readContext: Ke,
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
  Ly = {
    readContext: Ke,
    useCallback: function (e, t) {
      return (ot().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ke,
    useEffect: qu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Do(4194308, 4, jd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Do(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Do(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ot();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ot();
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
        (e = e.dispatch = Py.bind(null, Y, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ot();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ju,
    useDebugValue: Oa,
    useDeferredValue: function (e) {
      return (ot().memoizedState = e);
    },
    useTransition: function () {
      var e = Ju(!1),
        t = e[0];
      return (e = Ty.bind(null, e[1])), (ot().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Y,
        o = ot();
      if (Q) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), fe === null)) throw Error(N(349));
        hn & 30 || gd(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        qu(xd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Kr(9, wd.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ot(),
        t = fe.identifierPrefix;
      if (Q) {
        var n = mt,
          r = ht;
        (n = (r & ~(1 << (32 - et(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Hr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Ry++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Ay = {
    readContext: Ke,
    useCallback: Rd,
    useContext: Ke,
    useEffect: ja,
    useImperativeHandle: Od,
    useInsertionEffect: kd,
    useLayoutEffect: Nd,
    useMemo: Td,
    useReducer: gl,
    useRef: Ed,
    useState: function () {
      return gl(Vr);
    },
    useDebugValue: Oa,
    useDeferredValue: function (e) {
      var t = Qe();
      return Pd(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = gl(Vr)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: yd,
    useSyncExternalStore: vd,
    useId: _d,
    unstable_isNewReconciler: !1,
  },
  Iy = {
    readContext: Ke,
    useCallback: Rd,
    useContext: Ke,
    useEffect: ja,
    useImperativeHandle: Od,
    useInsertionEffect: kd,
    useLayoutEffect: Nd,
    useMemo: Td,
    useReducer: wl,
    useRef: Ed,
    useState: function () {
      return wl(Vr);
    },
    useDebugValue: Oa,
    useDeferredValue: function (e) {
      var t = Qe();
      return le === null ? (t.memoizedState = e) : Pd(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = wl(Vr)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: yd,
    useSyncExternalStore: vd,
    useId: _d,
    unstable_isNewReconciler: !1,
  };
function Jn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += am(r)), (r = r.return);
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
function xl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function hs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Dy = typeof WeakMap == "function" ? WeakMap : Map;
function Dd(e, t, n) {
  (n = yt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ai || ((ai = !0), (ks = r)), hs(e, t);
    }),
    n
  );
}
function Bd(e, t, n) {
  (n = yt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        hs(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        hs(e, t),
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
function Zu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Dy();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Xy.bind(null, e, t, n)), t.then(e, e));
}
function ec(e) {
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
function tc(e, t, n, r, o) {
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
var By = kt.ReactCurrentOwner,
  Ne = !1;
function xe(e, t, n, r) {
  t.child = e === null ? hd(t, null, n, r) : Xn(t, e.child, n, r);
}
function nc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Hn(t, o),
    (r = ka(e, t, n, r, i, o)),
    (n = Na()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ct(e, t, o))
      : (Q && n && da(t), (t.flags |= 1), xe(e, t, r, o), t.child)
  );
}
function rc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Da(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Fd(e, t, i, r, o))
      : ((e = Mo(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : zr), n(l, r) && e.ref === t.ref)
    )
      return Ct(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Qt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Fd(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (zr(i, r) && e.ref === t.ref)
      if (((Ne = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ne = !0);
      else return (t.lanes = e.lanes), Ct(e, t, o);
  }
  return ms(e, t, n, r, o);
}
function zd(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        W(zn, Le),
        (Le |= n);
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
          W(zn, Le),
          (Le |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        W(zn, Le),
        (Le |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      W(zn, Le),
      (Le |= r);
  return xe(e, t, o, n), t.child;
}
function Md(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ms(e, t, n, r, o) {
  var i = Oe(n) ? dn : ge.current;
  return (
    (i = Qn(t, i)),
    Hn(t, o),
    (n = ka(e, t, n, r, i, o)),
    (r = Na()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ct(e, t, o))
      : (Q && r && da(t), (t.flags |= 1), xe(e, t, n, o), t.child)
  );
}
function oc(e, t, n, r, o) {
  if (Oe(n)) {
    var i = !0;
    qo(t);
  } else i = !1;
  if ((Hn(t, o), t.stateNode === null))
    Bo(e, t), dd(t, n, r), ps(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ke(u))
      : ((u = Oe(n) ? dn : ge.current), (u = Qn(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && Xu(t, l, r, u)),
      (Lt = !1);
    var y = t.memoizedState;
    (l.state = y),
      ri(t, r, l, o),
      (a = t.memoizedState),
      s !== r || y !== a || je.current || Lt
        ? (typeof c == "function" && (ds(t, n, c, r), (a = t.memoizedState)),
          (s = Lt || Gu(t, n, s, r, y, a, u))
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
      cd(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Ye(t.type, s)),
      (l.props = u),
      (f = t.pendingProps),
      (y = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ke(a))
        : ((a = Oe(n) ? dn : ge.current), (a = Qn(t, a)));
    var x = n.getDerivedStateFromProps;
    (c =
      typeof x == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== f || y !== a) && Xu(t, l, r, a)),
      (Lt = !1),
      (y = t.memoizedState),
      (l.state = y),
      ri(t, r, l, o);
    var w = t.memoizedState;
    s !== f || y !== w || je.current || Lt
      ? (typeof x == "function" && (ds(t, n, x, r), (w = t.memoizedState)),
        (u = Lt || Gu(t, n, u, r, y, w, a) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, w, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, w, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (l.props = r),
        (l.state = w),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ys(e, t, n, r, i, o);
}
function ys(e, t, n, r, o, i) {
  Md(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Wu(t, n, !1), Ct(e, t, i);
  (r = t.stateNode), (By.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Xn(t, e.child, null, i)), (t.child = Xn(t, null, s, i)))
      : xe(e, t, s, i),
    (t.memoizedState = r.state),
    o && Wu(t, n, !0),
    t.child
  );
}
function Ud(e) {
  var t = e.stateNode;
  t.pendingContext
    ? bu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && bu(e, t.context, !1),
    xa(e, t.containerInfo);
}
function ic(e, t, n, r, o) {
  return Gn(), ha(o), (t.flags |= 256), xe(e, t, n, r), t.child;
}
var vs = { dehydrated: null, treeContext: null, retryLane: 0 };
function gs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $d(e, t, n) {
  var r = t.pendingProps,
    o = X.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    W(X, o & 1),
    e === null)
  )
    return (
      cs(t),
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
                : (i = Ai(l, r, 0, null)),
              (e = cn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = gs(n)),
              (t.memoizedState = vs),
              e)
            : Ra(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return Fy(e, t, l, r, s, o, n);
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
      s !== null ? (i = Qt(s, i)) : ((i = cn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? gs(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = vs),
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
function Ra(e, t) {
  return (
    (t = Ai({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Eo(e, t, n, r) {
  return (
    r !== null && ha(r),
    Xn(t, e.child, null, n),
    (e = Ra(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Fy(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = xl(Error(N(422)))), Eo(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Ai({ mode: "visible", children: r.children }, o, 0, null)),
        (i = cn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Xn(t, e.child, null, l),
        (t.child.memoizedState = gs(l)),
        (t.memoizedState = vs),
        i);
  if (!(t.mode & 1)) return Eo(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(N(419))), (r = xl(i, r, void 0)), Eo(e, t, l, r);
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
          ((i.retryLane = o), St(e, o), tt(r, e, o, -1));
    }
    return Ia(), (r = xl(Error(N(421)))), Eo(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Yy.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ie = Wt(o.nextSibling)),
      (De = t),
      (Q = !0),
      (qe = null),
      e !== null &&
        ((Ue[$e++] = ht),
        (Ue[$e++] = mt),
        (Ue[$e++] = pn),
        (ht = e.id),
        (mt = e.overflow),
        (pn = t)),
      (t = Ra(t, r.children)),
      (t.flags |= 4096),
      t);
}
function lc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), fs(e.return, t, n);
}
function Sl(e, t, n, r, o) {
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
function bd(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((xe(e, t, r.children, n), (r = X.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && lc(e, n, t);
        else if (e.tag === 19) lc(e, n, t);
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
  if ((W(X, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && oi(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Sl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && oi(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Sl(t, !0, n, null, i);
        break;
      case "together":
        Sl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Bo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ct(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (mn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
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
function zy(e, t, n) {
  switch (t.tag) {
    case 3:
      Ud(t), Gn();
      break;
    case 5:
      md(t);
      break;
    case 1:
      Oe(t.type) && qo(t);
      break;
    case 4:
      xa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      W(ti, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (W(X, X.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? $d(e, t, n)
          : (W(X, X.current & 1),
            (e = Ct(e, t, n)),
            e !== null ? e.sibling : null);
      W(X, X.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return bd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        W(X, X.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), zd(e, t, n);
  }
  return Ct(e, t, n);
}
var Wd, ws, Hd, Vd;
Wd = function (e, t) {
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
ws = function () {};
Hd = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), an(at.current);
    var i = null;
    switch (n) {
      case "input":
        (o = $l(e, o)), (r = $l(e, r)), (i = []);
        break;
      case "select":
        (o = J({}, o, { value: void 0 })),
          (r = J({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Hl(e, o)), (r = Hl(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Yo);
    }
    Kl(n, r);
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
            (_r.hasOwnProperty(u)
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
              (_r.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && V("scroll", e),
                  i || s === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Vd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function pr(e, t) {
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
function My(e, t, n) {
  var r = t.pendingProps;
  switch ((pa(t), t.tag)) {
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
      return Oe(t.type) && Jo(), ye(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Yn(),
        K(je),
        K(ge),
        Ca(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (So(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), qe !== null && (Os(qe), (qe = null)))),
        ws(e, t),
        ye(t),
        null
      );
    case 5:
      Sa(t);
      var o = an(Wr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Hd(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return ye(t), null;
        }
        if (((e = an(at.current)), So(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[it] = t), (r[$r] = i), (e = (t.mode & 1) !== 0), n)) {
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
              for (o = 0; o < xr.length; o++) V(xr[o], r);
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
              mu(r, i), V("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                V("invalid", r);
              break;
            case "textarea":
              vu(r, i), V("invalid", r);
          }
          Kl(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      xo(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      xo(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : _r.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  V("scroll", r);
            }
          switch (n) {
            case "input":
              fo(r), yu(r, i, !0);
              break;
            case "textarea":
              fo(r), gu(r);
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
            e === "http://www.w3.org/1999/xhtml" && (e = gf(n)),
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
            (e[it] = t),
            (e[$r] = r),
            Wd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Ql(n, r)), n)) {
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
                for (o = 0; o < xr.length; o++) V(xr[o], e);
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
                mu(e, r), (o = $l(e, r)), V("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = J({}, r, { value: void 0 })),
                  V("invalid", e);
                break;
              case "textarea":
                vu(e, r), (o = Hl(e, r)), V("invalid", e);
                break;
              default:
                o = r;
            }
            Kl(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style"
                  ? Sf(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && wf(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Lr(e, a)
                    : typeof a == "number" && Lr(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (_r.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && V("scroll", e)
                      : a != null && qs(e, i, a, l));
              }
            switch (n) {
              case "input":
                fo(e), yu(e, r, !1);
                break;
              case "textarea":
                fo(e), gu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Xt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Un(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Un(e, !!r.multiple, r.defaultValue, !0);
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
      if (e && t.stateNode != null) Vd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = an(Wr.current)), an(at.current), So(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[it] = t),
            (i = r.nodeValue !== n) && ((e = De), e !== null))
          )
            switch (e.tag) {
              case 3:
                xo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  xo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[it] = t),
            (t.stateNode = r);
      }
      return ye(t), null;
    case 13:
      if (
        (K(X),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Q && Ie !== null && t.mode & 1 && !(t.flags & 128))
          ad(), Gn(), (t.flags |= 98560), (i = !1);
        else if (((i = So(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(N(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(N(317));
            i[it] = t;
          } else
            Gn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ye(t), (i = !1);
        } else qe !== null && (Os(qe), (qe = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || X.current & 1 ? se === 0 && (se = 3) : Ia())),
          t.updateQueue !== null && (t.flags |= 4),
          ye(t),
          null);
    case 4:
      return (
        Yn(), ws(e, t), e === null && Mr(t.stateNode.containerInfo), ye(t), null
      );
    case 10:
      return va(t.type._context), ye(t), null;
    case 17:
      return Oe(t.type) && Jo(), ye(t), null;
    case 19:
      if ((K(X), (i = t.memoizedState), i === null)) return ye(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) pr(i, !1);
        else {
          if (se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = oi(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    pr(i, !1),
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
                return W(X, (X.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ne() > qn &&
            ((t.flags |= 128), (r = !0), pr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = oi(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              pr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !Q)
            )
              return ye(t), null;
          } else
            2 * ne() - i.renderingStartTime > qn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), pr(i, !1), (t.lanes = 4194304));
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
          (n = X.current),
          W(X, r ? (n & 1) | 2 : n & 1),
          t)
        : (ye(t), null);
    case 22:
    case 23:
      return (
        Aa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Le & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ye(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function Uy(e, t) {
  switch ((pa(t), t.tag)) {
    case 1:
      return (
        Oe(t.type) && Jo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Yn(),
        K(je),
        K(ge),
        Ca(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Sa(t), null;
    case 13:
      if ((K(X), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(N(340));
        Gn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return K(X), null;
    case 4:
      return Yn(), null;
    case 10:
      return va(t.type._context), null;
    case 22:
    case 23:
      return Aa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ko = !1,
  ve = !1,
  $y = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function Fn(e, t) {
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
function xs(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var sc = !1;
function by(e, t) {
  if (((rs = Qo), (e = Xf()), fa(e))) {
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
            y = null;
          t: for (;;) {
            for (
              var x;
              f !== n || (o !== 0 && f.nodeType !== 3) || (s = l + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (a = l + r),
                f.nodeType === 3 && (l += f.nodeValue.length),
                (x = f.firstChild) !== null;

            )
              (y = f), (f = x);
            for (;;) {
              if (f === e) break t;
              if (
                (y === n && ++u === o && (s = l),
                y === i && ++c === r && (a = l),
                (x = f.nextSibling) !== null)
              )
                break;
              (f = y), (y = f.parentNode);
            }
            f = x;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (os = { focusedElem: e, selectionRange: n }, Qo = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (P = e);
    else
      for (; P !== null; ) {
        t = P;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var g = w.memoizedProps,
                    C = w.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Ye(t.type, g),
                      C,
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
                throw Error(N(163));
            }
        } catch (S) {
          Z(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (P = e);
          break;
        }
        P = t.return;
      }
  return (w = sc), (sc = !1), w;
}
function Rr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && xs(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function _i(e, t) {
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
function Ss(e) {
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
function Kd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Kd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[it], delete t[$r], delete t[ss], delete t[ky], delete t[Ny])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Qd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ac(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Qd(e.return)) return null;
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
function Cs(e, t, n) {
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
    for (Cs(e, t, n), e = e.sibling; e !== null; ) Cs(e, t, n), (e = e.sibling);
}
function Es(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Es(e, t, n), e = e.sibling; e !== null; ) Es(e, t, n), (e = e.sibling);
}
var de = null,
  Je = !1;
function Rt(e, t, n) {
  for (n = n.child; n !== null; ) Gd(e, t, n), (n = n.sibling);
}
function Gd(e, t, n) {
  if (st && typeof st.onCommitFiberUnmount == "function")
    try {
      st.onCommitFiberUnmount(Ei, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ve || Fn(n, t);
    case 6:
      var r = de,
        o = Je;
      (de = null),
        Rt(e, t, n),
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
              ? hl(e.parentNode, n)
              : e.nodeType === 1 && hl(e, n),
            Br(e))
          : hl(de, n.stateNode));
      break;
    case 4:
      (r = de),
        (o = Je),
        (de = n.stateNode.containerInfo),
        (Je = !0),
        Rt(e, t, n),
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
            l !== void 0 && (i & 2 || i & 4) && xs(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      Rt(e, t, n);
      break;
    case 1:
      if (
        !ve &&
        (Fn(n, t),
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
      Rt(e, t, n);
      break;
    case 21:
      Rt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ve = (r = ve) || n.memoizedState !== null), Rt(e, t, n), (ve = r))
        : Rt(e, t, n);
      break;
    default:
      Rt(e, t, n);
  }
}
function uc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new $y()),
      t.forEach(function (r) {
        var o = Jy.bind(null, e, r);
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
        if (de === null) throw Error(N(160));
        Gd(i, l, o), (de = null), (Je = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        Z(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Xd(t, e), (t = t.sibling);
}
function Xd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Xe(t, e), rt(e), r & 4)) {
        try {
          Rr(3, e, e.return), _i(3, e);
        } catch (g) {
          Z(e, e.return, g);
        }
        try {
          Rr(5, e, e.return);
        } catch (g) {
          Z(e, e.return, g);
        }
      }
      break;
    case 1:
      Xe(t, e), rt(e), r & 512 && n !== null && Fn(n, n.return);
      break;
    case 5:
      if (
        (Xe(t, e),
        rt(e),
        r & 512 && n !== null && Fn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Lr(o, "");
        } catch (g) {
          Z(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && yf(o, i),
              Ql(s, l);
            var u = Ql(s, i);
            for (l = 0; l < a.length; l += 2) {
              var c = a[l],
                f = a[l + 1];
              c === "style"
                ? Sf(o, f)
                : c === "dangerouslySetInnerHTML"
                ? wf(o, f)
                : c === "children"
                ? Lr(o, f)
                : qs(o, c, f, u);
            }
            switch (s) {
              case "input":
                bl(o, i);
                break;
              case "textarea":
                vf(o, i);
                break;
              case "select":
                var y = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? Un(o, !!i.multiple, x, !1)
                  : y !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Un(o, !!i.multiple, i.defaultValue, !0)
                      : Un(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[$r] = i;
          } catch (g) {
            Z(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Xe(t, e), rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          Z(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Xe(t, e), rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Br(t.containerInfo);
        } catch (g) {
          Z(e, e.return, g);
        }
      break;
    case 4:
      Xe(t, e), rt(e);
      break;
    case 13:
      Xe(t, e),
        rt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (_a = ne())),
        r & 4 && uc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ve = (u = ve) || c), Xe(t, e), (ve = u)) : Xe(t, e),
        rt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (P = e, c = e.child; c !== null; ) {
            for (f = P = c; P !== null; ) {
              switch (((y = P), (x = y.child), y.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rr(4, y, y.return);
                  break;
                case 1:
                  Fn(y, y.return);
                  var w = y.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = y), (n = y.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (g) {
                      Z(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Fn(y, y.return);
                  break;
                case 22:
                  if (y.memoizedState !== null) {
                    fc(f);
                    continue;
                  }
              }
              x !== null ? ((x.return = y), (P = x)) : fc(f);
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
                      (s.style.display = xf("display", l)));
              } catch (g) {
                Z(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (g) {
                Z(e, e.return, g);
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
      Xe(t, e), rt(e), r & 4 && uc(e);
      break;
    case 21:
      break;
    default:
      Xe(t, e), rt(e);
  }
}
function rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Qd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Lr(o, ""), (r.flags &= -33));
          var i = ac(e);
          Es(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = ac(e);
          Cs(e, s, l);
          break;
        default:
          throw Error(N(161));
      }
    } catch (a) {
      Z(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Wy(e, t, n) {
  (P = e), Yd(e);
}
function Yd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var o = P,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || ko;
      if (!l) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || ve;
        s = ko;
        var u = ve;
        if (((ko = l), (ve = a) && !u))
          for (P = o; P !== null; )
            (l = P),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? dc(o)
                : a !== null
                ? ((a.return = l), (P = a))
                : dc(o);
        for (; i !== null; ) (P = i), Yd(i), (i = i.sibling);
        (P = o), (ko = s), (ve = u);
      }
      cc(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (P = i)) : cc(e);
  }
}
function cc(e) {
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
              ve || _i(5, t);
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
              i !== null && Qu(t, i, r);
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
                Qu(t, l, n);
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
                    f !== null && Br(f);
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
              throw Error(N(163));
          }
        ve || (t.flags & 512 && Ss(t));
      } catch (y) {
        Z(t, t.return, y);
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
function fc(e) {
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
function dc(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _i(4, t);
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
            Ss(t);
          } catch (a) {
            Z(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Ss(t);
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
var Hy = Math.ceil,
  si = kt.ReactCurrentDispatcher,
  Ta = kt.ReactCurrentOwner,
  We = kt.ReactCurrentBatchConfig,
  F = 0,
  fe = null,
  re = null,
  pe = 0,
  Le = 0,
  zn = qt(0),
  se = 0,
  Qr = null,
  mn = 0,
  Li = 0,
  Pa = 0,
  Tr = null,
  ke = null,
  _a = 0,
  qn = 1 / 0,
  ft = null,
  ai = !1,
  ks = null,
  Vt = null,
  No = !1,
  zt = null,
  ui = 0,
  Pr = 0,
  Ns = null,
  Fo = -1,
  zo = 0;
function Se() {
  return F & 6 ? ne() : Fo !== -1 ? Fo : (Fo = ne());
}
function Kt(e) {
  return e.mode & 1
    ? F & 2 && pe !== 0
      ? pe & -pe
      : Oy.transition !== null
      ? (zo === 0 && (zo = Af()), zo)
      : ((e = U),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Uf(e.type))),
        e)
    : 1;
}
function tt(e, t, n, r) {
  if (50 < Pr) throw ((Pr = 0), (Ns = null), Error(N(185)));
  eo(e, n, r),
    (!(F & 2) || e !== fe) &&
      (e === fe && (!(F & 2) && (Li |= n), se === 4 && Bt(e, pe)),
      Re(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((qn = ne() + 500), Ri && Zt()));
}
function Re(e, t) {
  var n = e.callbackNode;
  Om(e, t);
  var r = Ko(e, e === fe ? pe : 0);
  if (r === 0)
    n !== null && Su(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Su(n), t === 1))
      e.tag === 0 ? jy(pc.bind(null, e)) : id(pc.bind(null, e)),
        Cy(function () {
          !(F & 6) && Zt();
        }),
        (n = null);
    else {
      switch (If(r)) {
        case 1:
          n = ra;
          break;
        case 4:
          n = _f;
          break;
        case 16:
          n = Vo;
          break;
        case 536870912:
          n = Lf;
          break;
        default:
          n = Vo;
      }
      n = op(n, Jd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Jd(e, t) {
  if (((Fo = -1), (zo = 0), F & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (Vn() && e.callbackNode !== n) return null;
  var r = Ko(e, e === fe ? pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ci(e, r);
  else {
    t = r;
    var o = F;
    F |= 2;
    var i = Zd();
    (fe !== e || pe !== t) && ((ft = null), (qn = ne() + 500), un(e, t));
    do
      try {
        Qy();
        break;
      } catch (s) {
        qd(e, s);
      }
    while (!0);
    ya(),
      (si.current = i),
      (F = o),
      re !== null ? (t = 0) : ((fe = null), (pe = 0), (t = se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = ql(e)), o !== 0 && ((r = o), (t = js(e, o)))), t === 1)
    )
      throw ((n = Qr), un(e, 0), Bt(e, r), Re(e, ne()), n);
    if (t === 6) Bt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Vy(o) &&
          ((t = ci(e, r)),
          t === 2 && ((i = ql(e)), i !== 0 && ((r = i), (t = js(e, i)))),
          t === 1))
      )
        throw ((n = Qr), un(e, 0), Bt(e, r), Re(e, ne()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          rn(e, ke, ft);
          break;
        case 3:
          if (
            (Bt(e, r), (r & 130023424) === r && ((t = _a + 500 - ne()), 10 < t))
          ) {
            if (Ko(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Se(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ls(rn.bind(null, e, ke, ft), t);
            break;
          }
          rn(e, ke, ft);
          break;
        case 4:
          if ((Bt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - et(r);
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
                : 1960 * Hy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ls(rn.bind(null, e, ke, ft), r);
            break;
          }
          rn(e, ke, ft);
          break;
        case 5:
          rn(e, ke, ft);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Re(e, ne()), e.callbackNode === n ? Jd.bind(null, e) : null;
}
function js(e, t) {
  var n = Tr;
  return (
    e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256),
    (e = ci(e, t)),
    e !== 2 && ((t = ke), (ke = n), t !== null && Os(t)),
    e
  );
}
function Os(e) {
  ke === null ? (ke = e) : ke.push.apply(ke, e);
}
function Vy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!nt(i(), o)) return !1;
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
    t &= ~Pa,
      t &= ~Li,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - et(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function pc(e) {
  if (F & 6) throw Error(N(327));
  Vn();
  var t = Ko(e, 0);
  if (!(t & 1)) return Re(e, ne()), null;
  var n = ci(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ql(e);
    r !== 0 && ((t = r), (n = js(e, r)));
  }
  if (n === 1) throw ((n = Qr), un(e, 0), Bt(e, t), Re(e, ne()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    rn(e, ke, ft),
    Re(e, ne()),
    null
  );
}
function La(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((qn = ne() + 500), Ri && Zt());
  }
}
function yn(e) {
  zt !== null && zt.tag === 0 && !(F & 6) && Vn();
  var t = F;
  F |= 1;
  var n = We.transition,
    r = U;
  try {
    if (((We.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (We.transition = n), (F = t), !(F & 6) && Zt();
  }
}
function Aa() {
  (Le = zn.current), K(zn);
}
function un(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Sy(n)), re !== null))
    for (n = re.return; n !== null; ) {
      var r = n;
      switch ((pa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Jo();
          break;
        case 3:
          Yn(), K(je), K(ge), Ca();
          break;
        case 5:
          Sa(r);
          break;
        case 4:
          Yn();
          break;
        case 13:
          K(X);
          break;
        case 19:
          K(X);
          break;
        case 10:
          va(r.type._context);
          break;
        case 22:
        case 23:
          Aa();
      }
      n = n.return;
    }
  if (
    ((fe = e),
    (re = e = Qt(e.current, null)),
    (pe = Le = t),
    (se = 0),
    (Qr = null),
    (Pa = Li = mn = 0),
    (ke = Tr = null),
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
function qd(e, t) {
  do {
    var n = re;
    try {
      if ((ya(), (Io.current = li), ii)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        ii = !1;
      }
      if (
        ((hn = 0),
        (ue = le = Y = null),
        (Or = !1),
        (Hr = 0),
        (Ta.current = null),
        n === null || n.return === null)
      ) {
        (se = 1), (Qr = t), (re = null);
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
            var y = c.alternate;
            y
              ? ((c.updateQueue = y.updateQueue),
                (c.memoizedState = y.memoizedState),
                (c.lanes = y.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var x = ec(l);
          if (x !== null) {
            (x.flags &= -257),
              tc(x, l, s, i, t),
              x.mode & 1 && Zu(i, u, t),
              (t = x),
              (a = u);
            var w = t.updateQueue;
            if (w === null) {
              var g = new Set();
              g.add(a), (t.updateQueue = g);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Zu(i, u, t), Ia();
              break e;
            }
            a = Error(N(426));
          }
        } else if (Q && s.mode & 1) {
          var C = ec(l);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              tc(C, l, s, i, t),
              ha(Jn(a, s));
            break e;
          }
        }
        (i = a = Jn(a, s)),
          se !== 4 && (se = 2),
          Tr === null ? (Tr = [i]) : Tr.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = Dd(i, a, t);
              Ku(i, h);
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
                var S = Bd(i, s, t);
                Ku(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      tp(n);
    } catch (j) {
      (t = j), re === n && n !== null && (re = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Zd() {
  var e = si.current;
  return (si.current = li), e === null ? li : e;
}
function Ia() {
  (se === 0 || se === 3 || se === 2) && (se = 4),
    fe === null || (!(mn & 268435455) && !(Li & 268435455)) || Bt(fe, pe);
}
function ci(e, t) {
  var n = F;
  F |= 2;
  var r = Zd();
  (fe !== e || pe !== t) && ((ft = null), un(e, t));
  do
    try {
      Ky();
      break;
    } catch (o) {
      qd(e, o);
    }
  while (!0);
  if ((ya(), (F = n), (si.current = r), re !== null)) throw Error(N(261));
  return (fe = null), (pe = 0), se;
}
function Ky() {
  for (; re !== null; ) ep(re);
}
function Qy() {
  for (; re !== null && !gm(); ) ep(re);
}
function ep(e) {
  var t = rp(e.alternate, e, Le);
  (e.memoizedProps = e.pendingProps),
    t === null ? tp(e) : (re = t),
    (Ta.current = null);
}
function tp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Uy(n, t)), n !== null)) {
        (n.flags &= 32767), (re = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (se = 6), (re = null);
        return;
      }
    } else if (((n = My(n, t, Le)), n !== null)) {
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
  var r = U,
    o = We.transition;
  try {
    (We.transition = null), (U = 1), Gy(e, t, n, r);
  } finally {
    (We.transition = o), (U = r);
  }
  return null;
}
function Gy(e, t, n, r) {
  do Vn();
  while (zt !== null);
  if (F & 6) throw Error(N(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Rm(e, i),
    e === fe && ((re = fe = null), (pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      No ||
      ((No = !0),
      op(Vo, function () {
        return Vn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = We.transition), (We.transition = null);
    var l = U;
    U = 1;
    var s = F;
    (F |= 4),
      (Ta.current = null),
      by(e, n),
      Xd(n, e),
      hy(os),
      (Qo = !!rs),
      (os = rs = null),
      (e.current = n),
      Wy(n),
      wm(),
      (F = s),
      (U = l),
      (We.transition = i);
  } else e.current = n;
  if (
    (No && ((No = !1), (zt = e), (ui = o)),
    (i = e.pendingLanes),
    i === 0 && (Vt = null),
    Cm(n.stateNode),
    Re(e, ne()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ai) throw ((ai = !1), (e = ks), (ks = null), e);
  return (
    ui & 1 && e.tag !== 0 && Vn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ns ? Pr++ : ((Pr = 0), (Ns = e))) : (Pr = 0),
    Zt(),
    null
  );
}
function Vn() {
  if (zt !== null) {
    var e = If(ui),
      t = We.transition,
      n = U;
    try {
      if (((We.transition = null), (U = 16 > e ? 16 : e), zt === null))
        var r = !1;
      else {
        if (((e = zt), (zt = null), (ui = 0), F & 6)) throw Error(N(331));
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
                      Rr(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (P = f);
                  else
                    for (; P !== null; ) {
                      c = P;
                      var y = c.sibling,
                        x = c.return;
                      if ((Kd(c), c === u)) {
                        P = null;
                        break;
                      }
                      if (y !== null) {
                        (y.return = x), (P = y);
                        break;
                      }
                      P = x;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var g = w.child;
                if (g !== null) {
                  w.child = null;
                  do {
                    var C = g.sibling;
                    (g.sibling = null), (g = C);
                  } while (g !== null);
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
                    Rr(9, i, i.return);
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
                      _i(9, s);
                  }
                } catch (j) {
                  Z(s, s.return, j);
                }
              if (s === l) {
                P = null;
                break e;
              }
              var S = s.sibling;
              if (S !== null) {
                (S.return = s.return), (P = S);
                break e;
              }
              P = s.return;
            }
        }
        if (
          ((F = o), Zt(), st && typeof st.onPostCommitFiberRoot == "function")
        )
          try {
            st.onPostCommitFiberRoot(Ei, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (We.transition = t);
    }
  }
  return !1;
}
function hc(e, t, n) {
  (t = Jn(n, t)),
    (t = Dd(e, t, 1)),
    (e = Ht(e, t, 1)),
    (t = Se()),
    e !== null && (eo(e, 1, t), Re(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) hc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        hc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Vt === null || !Vt.has(r)))
        ) {
          (e = Jn(n, e)),
            (e = Bd(t, e, 1)),
            (t = Ht(t, e, 1)),
            (e = Se()),
            t !== null && (eo(t, 1, e), Re(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Xy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    fe === e &&
      (pe & n) === n &&
      (se === 4 || (se === 3 && (pe & 130023424) === pe && 500 > ne() - _a)
        ? un(e, 0)
        : (Pa |= n)),
    Re(e, t);
}
function np(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = mo), (mo <<= 1), !(mo & 130023424) && (mo = 4194304))
      : (t = 1));
  var n = Se();
  (e = St(e, t)), e !== null && (eo(e, t, n), Re(e, n));
}
function Yy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), np(e, n);
}
function Jy(e, t) {
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
      throw Error(N(314));
  }
  r !== null && r.delete(t), np(e, n);
}
var rp;
rp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || je.current) Ne = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ne = !1), zy(e, t, n);
      Ne = !!(e.flags & 131072);
    }
  else (Ne = !1), Q && t.flags & 1048576 && ld(t, ei, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Bo(e, t), (e = t.pendingProps);
      var o = Qn(t, ge.current);
      Hn(t, n), (o = ka(null, t, r, e, o, n));
      var i = Na();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Oe(r) ? ((i = !0), qo(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            wa(t),
            (o.updater = Ti),
            (t.stateNode = o),
            (o._reactInternals = t),
            ps(t, r, e, n),
            (t = ys(null, t, r, !0, i, n)))
          : ((t.tag = 0), Q && i && da(t), xe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Bo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Zy(r)),
          (e = Ye(r, e)),
          o)
        ) {
          case 0:
            t = ms(null, t, r, e, n);
            break e;
          case 1:
            t = oc(null, t, r, e, n);
            break e;
          case 11:
            t = nc(null, t, r, e, n);
            break e;
          case 14:
            t = rc(null, t, r, Ye(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ye(r, o)),
        ms(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ye(r, o)),
        oc(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Ud(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          cd(e, t),
          ri(t, r, null, n);
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
            (o = Jn(Error(N(423)), t)), (t = ic(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Jn(Error(N(424)), t)), (t = ic(e, t, r, n, o));
            break e;
          } else
            for (
              Ie = Wt(t.stateNode.containerInfo.firstChild),
                De = t,
                Q = !0,
                qe = null,
                n = hd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Gn(), r === o)) {
            t = Ct(e, t, n);
            break e;
          }
          xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        md(t),
        e === null && cs(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        is(r, o) ? (l = null) : i !== null && is(r, i) && (t.flags |= 32),
        Md(e, t),
        xe(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && cs(t), null;
    case 13:
      return $d(e, t, n);
    case 4:
      return (
        xa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Xn(t, null, r, n)) : xe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ye(r, o)),
        nc(e, t, r, o, n)
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
          W(ti, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (nt(i.value, l)) {
            if (i.children === o.children && !je.current) {
              t = Ct(e, t, n);
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
                      fs(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(N(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  fs(l, n, t),
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
        Hn(t, n),
        (o = Ke(o)),
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
        rc(e, t, r, o, n)
      );
    case 15:
      return Fd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ye(r, o)),
        Bo(e, t),
        (t.tag = 1),
        Oe(r) ? ((e = !0), qo(t)) : (e = !1),
        Hn(t, n),
        dd(t, r, o),
        ps(t, r, o, n),
        ys(null, t, r, !0, e, n)
      );
    case 19:
      return bd(e, t, n);
    case 22:
      return zd(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function op(e, t) {
  return Pf(e, t);
}
function qy(e, t, n, r) {
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
function be(e, t, n, r) {
  return new qy(e, t, n, r);
}
function Da(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Zy(e) {
  if (typeof e == "function") return Da(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ea)) return 11;
    if (e === ta) return 14;
  }
  return 2;
}
function Qt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = be(e.tag, t, e.key, e.mode)),
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
function Mo(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) Da(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Rn:
        return cn(n.children, o, i, t);
      case Zs:
        (l = 8), (o |= 8);
        break;
      case Fl:
        return (
          (e = be(12, n, t, o | 2)), (e.elementType = Fl), (e.lanes = i), e
        );
      case zl:
        return (e = be(13, n, t, o)), (e.elementType = zl), (e.lanes = i), e;
      case Ml:
        return (e = be(19, n, t, o)), (e.elementType = Ml), (e.lanes = i), e;
      case pf:
        return Ai(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ff:
              l = 10;
              break e;
            case df:
              l = 9;
              break e;
            case ea:
              l = 11;
              break e;
            case ta:
              l = 14;
              break e;
            case _t:
              (l = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = be(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function cn(e, t, n, r) {
  return (e = be(7, e, r, t)), (e.lanes = n), e;
}
function Ai(e, t, n, r) {
  return (
    (e = be(22, e, r, t)),
    (e.elementType = pf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Cl(e, t, n) {
  return (e = be(6, e, null, t)), (e.lanes = n), e;
}
function El(e, t, n) {
  return (
    (t = be(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ev(e, t, n, r, o) {
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
    (this.eventTimes = rl(0)),
    (this.expirationTimes = rl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = rl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Ba(e, t, n, r, o, i, l, s, a) {
  return (
    (e = new ev(e, t, n, s, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = be(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    wa(i),
    e
  );
}
function tv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: On,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ip(e) {
  if (!e) return Yt;
  e = e._reactInternals;
  e: {
    if (wn(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Oe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Oe(n)) return od(e, n, t);
  }
  return t;
}
function lp(e, t, n, r, o, i, l, s, a) {
  return (
    (e = Ba(n, r, !0, e, o, i, l, s, a)),
    (e.context = ip(null)),
    (n = e.current),
    (r = Se()),
    (o = Kt(n)),
    (i = yt(r, o)),
    (i.callback = t ?? null),
    Ht(n, i, o),
    (e.current.lanes = o),
    eo(e, o, r),
    Re(e, r),
    e
  );
}
function Ii(e, t, n, r) {
  var o = t.current,
    i = Se(),
    l = Kt(o);
  return (
    (n = ip(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = yt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ht(o, t, l)),
    e !== null && (tt(e, o, l, i), Ao(e, o, l)),
    l
  );
}
function fi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function mc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Fa(e, t) {
  mc(e, t), (e = e.alternate) && mc(e, t);
}
function nv() {
  return null;
}
var sp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function za(e) {
  this._internalRoot = e;
}
Di.prototype.render = za.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Ii(e, t, null, null);
};
Di.prototype.unmount = za.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    yn(function () {
      Ii(null, e, null, null);
    }),
      (t[xt] = null);
  }
};
function Di(e) {
  this._internalRoot = e;
}
Di.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ff();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++);
    Dt.splice(n, 0, e), n === 0 && Mf(e);
  }
};
function Ma(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Bi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function yc() {}
function rv(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = fi(l);
        i.call(u);
      };
    }
    var l = lp(t, r, e, 0, null, !1, !1, "", yc);
    return (
      (e._reactRootContainer = l),
      (e[xt] = l.current),
      Mr(e.nodeType === 8 ? e.parentNode : e),
      yn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = fi(a);
      s.call(u);
    };
  }
  var a = Ba(e, 0, !1, null, null, !1, !1, "", yc);
  return (
    (e._reactRootContainer = a),
    (e[xt] = a.current),
    Mr(e.nodeType === 8 ? e.parentNode : e),
    yn(function () {
      Ii(t, a, n, r);
    }),
    a
  );
}
function Fi(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var a = fi(l);
        s.call(a);
      };
    }
    Ii(t, l, e, o);
  } else l = rv(n, t, e, o, r);
  return fi(l);
}
Df = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wr(t.pendingLanes);
        n !== 0 &&
          (oa(t, n | 1), Re(t, ne()), !(F & 6) && ((qn = ne() + 500), Zt()));
      }
      break;
    case 13:
      yn(function () {
        var r = St(e, 1);
        if (r !== null) {
          var o = Se();
          tt(r, e, 1, o);
        }
      }),
        Fa(e, 1);
  }
};
ia = function (e) {
  if (e.tag === 13) {
    var t = St(e, 134217728);
    if (t !== null) {
      var n = Se();
      tt(t, e, 134217728, n);
    }
    Fa(e, 134217728);
  }
};
Bf = function (e) {
  if (e.tag === 13) {
    var t = Kt(e),
      n = St(e, t);
    if (n !== null) {
      var r = Se();
      tt(n, e, t, r);
    }
    Fa(e, t);
  }
};
Ff = function () {
  return U;
};
zf = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
Xl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((bl(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = Oi(r);
            if (!o) throw Error(N(90));
            mf(r), bl(r, o);
          }
        }
      }
      break;
    case "textarea":
      vf(e, n);
      break;
    case "select":
      (t = n.value), t != null && Un(e, !!n.multiple, t, !1);
  }
};
kf = La;
Nf = yn;
var ov = { usingClientEntryPoint: !1, Events: [no, Ln, Oi, Cf, Ef, La] },
  hr = {
    findFiberByHostInstance: ln,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  iv = {
    bundleType: hr.bundleType,
    version: hr.version,
    rendererPackageName: hr.rendererPackageName,
    rendererConfig: hr.rendererConfig,
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
      return (e = Rf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: hr.findFiberByHostInstance || nv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var jo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!jo.isDisabled && jo.supportsFiber)
    try {
      (Ei = jo.inject(iv)), (st = jo);
    } catch {}
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ov;
Fe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ma(t)) throw Error(N(200));
  return tv(e, t, null, n);
};
Fe.createRoot = function (e, t) {
  if (!Ma(e)) throw Error(N(299));
  var n = !1,
    r = "",
    o = sp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Ba(e, 1, !1, null, null, n, !1, r, o)),
    (e[xt] = t.current),
    Mr(e.nodeType === 8 ? e.parentNode : e),
    new za(t)
  );
};
Fe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = Rf(t)), (e = e === null ? null : e.stateNode), e;
};
Fe.flushSync = function (e) {
  return yn(e);
};
Fe.hydrate = function (e, t, n) {
  if (!Bi(t)) throw Error(N(200));
  return Fi(null, e, t, !0, n);
};
Fe.hydrateRoot = function (e, t, n) {
  if (!Ma(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = sp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = lp(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[xt] = t.current),
    Mr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Di(t);
};
Fe.render = function (e, t, n) {
  if (!Bi(t)) throw Error(N(200));
  return Fi(null, e, t, !1, n);
};
Fe.unmountComponentAtNode = function (e) {
  if (!Bi(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (yn(function () {
        Fi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[xt] = null);
        });
      }),
      !0)
    : !1;
};
Fe.unstable_batchedUpdates = La;
Fe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Bi(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return Fi(e, t, n, !1, r);
};
Fe.version = "18.2.0-next-9e3b772b8-20220608";
function ap() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ap);
    } catch (e) {
      console.error(e);
    }
}
ap(), (lf.exports = Fe);
var up = lf.exports;
const Mn = qr(up);
var vc = up;
(Dl.createRoot = vc.createRoot), (Dl.hydrateRoot = vc.hydrateRoot);
/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Gr() {
  return (
    (Gr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Gr.apply(this, arguments)
  );
}
var Mt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Mt || (Mt = {}));
const gc = "popstate";
function lv(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: l, hash: s } = r.location;
    return Rs(
      "",
      { pathname: i, search: l, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : di(o);
  }
  return av(t, n, null, e);
}
function oe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Ua(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function sv() {
  return Math.random().toString(36).substr(2, 8);
}
function wc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Rs(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Gr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? or(t) : t,
      { state: n, key: (t && t.key) || r || sv() },
    )
  );
}
function di(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function or(e) {
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
function av(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    l = o.history,
    s = Mt.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), l.replaceState(Gr({}, l.state, { idx: u }), ""));
  function c() {
    return (l.state || { idx: null }).idx;
  }
  function f() {
    s = Mt.Pop;
    let C = c(),
      h = C == null ? null : C - u;
    (u = C), a && a({ action: s, location: g.location, delta: h });
  }
  function y(C, h) {
    s = Mt.Push;
    let p = Rs(g.location, C, h);
    u = c() + 1;
    let v = wc(p, u),
      S = g.createHref(p);
    try {
      l.pushState(v, "", S);
    } catch (j) {
      if (j instanceof DOMException && j.name === "DataCloneError") throw j;
      o.location.assign(S);
    }
    i && a && a({ action: s, location: g.location, delta: 1 });
  }
  function x(C, h) {
    s = Mt.Replace;
    let p = Rs(g.location, C, h);
    u = c();
    let v = wc(p, u),
      S = g.createHref(p);
    l.replaceState(v, "", S),
      i && a && a({ action: s, location: g.location, delta: 0 });
  }
  function w(C) {
    let h = o.location.origin !== "null" ? o.location.origin : o.location.href,
      p = typeof C == "string" ? C : di(C);
    return (
      oe(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          p,
      ),
      new URL(p, h)
    );
  }
  let g = {
    get action() {
      return s;
    },
    get location() {
      return e(o, l);
    },
    listen(C) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(gc, f),
        (a = C),
        () => {
          o.removeEventListener(gc, f), (a = null);
        }
      );
    },
    createHref(C) {
      return t(o, C);
    },
    createURL: w,
    encodeLocation(C) {
      let h = w(C);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: y,
    replace: x,
    go(C) {
      return l.go(C);
    },
  };
  return g;
}
var xc;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(xc || (xc = {}));
function uv(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? or(t) : t,
    o = $a(r.pathname || "/", n);
  if (o == null) return null;
  let i = cp(e);
  cv(i);
  let l = null;
  for (let s = 0; l == null && s < i.length; ++s) l = wv(i[s], Cv(o));
  return l;
}
function cp(e, t, n, r) {
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
      cp(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: vv(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, l) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) o(i, l);
      else for (let a of fp(i.path)) o(i, l, a);
    }),
    t
  );
}
function fp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let l = fp(r.join("/")),
    s = [];
  return (
    s.push(...l.map((a) => (a === "" ? i : [i, a].join("/")))),
    o && s.push(...l),
    s.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function cv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : gv(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const fv = /^:\w+$/,
  dv = 3,
  pv = 2,
  hv = 1,
  mv = 10,
  yv = -2,
  Sc = (e) => e === "*";
function vv(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Sc) && (r += yv),
    t && (r += pv),
    n
      .filter((o) => !Sc(o))
      .reduce((o, i) => o + (fv.test(i) ? dv : i === "" ? hv : mv), r)
  );
}
function gv(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function wv(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let l = 0; l < n.length; ++l) {
    let s = n[l],
      a = l === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      c = xv(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        u,
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let f = s.route;
    i.push({
      params: r,
      pathname: Gt([o, c.pathname]),
      pathnameBase: jv(Gt([o, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== "/" && (o = Gt([o, c.pathnameBase]));
  }
  return i;
}
function xv(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Sv(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    l = i.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      if (c === "*") {
        let y = s[f] || "";
        l = i.slice(0, i.length - y.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = Ev(s[f] || "", c)), u;
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function Sv(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Ua(
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
function Cv(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Ua(
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
function Ev(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Ua(
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
function $a(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function kv(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? or(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Nv(n, t)) : t,
    search: Ov(r),
    hash: Rv(o),
  };
}
function Nv(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function kl(e, t, n, r) {
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
function dp(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function pp(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = or(e))
    : ((o = Gr({}, e)),
      oe(
        !o.pathname || !o.pathname.includes("?"),
        kl("?", "pathname", "search", o),
      ),
      oe(
        !o.pathname || !o.pathname.includes("#"),
        kl("#", "pathname", "hash", o),
      ),
      oe(!o.search || !o.search.includes("#"), kl("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    l = i ? "/" : o.pathname,
    s;
  if (r || l == null) s = n;
  else {
    let f = t.length - 1;
    if (l.startsWith("..")) {
      let y = l.split("/");
      for (; y[0] === ".."; ) y.shift(), (f -= 1);
      o.pathname = y.join("/");
    }
    s = f >= 0 ? t[f] : "/";
  }
  let a = kv(o, s),
    u = l && l !== "/" && l.endsWith("/"),
    c = (i || l === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a;
}
const Gt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  jv = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Ov = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Rv = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Tv(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const hp = ["post", "put", "patch", "delete"];
new Set(hp);
const Pv = ["get", ...hp];
new Set(Pv);
/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pi() {
  return (
    (pi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pi.apply(this, arguments)
  );
}
const ba = m.createContext(null),
  mp = m.createContext(null),
  xn = m.createContext(null),
  zi = m.createContext(null),
  Sn = m.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  yp = m.createContext(null);
function _v(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  oo() || oe(!1);
  let { basename: r, navigator: o } = m.useContext(xn),
    { hash: i, pathname: l, search: s } = Wa(e, { relative: n }),
    a = l;
  return (
    r !== "/" && (a = l === "/" ? r : Gt([r, l])),
    o.createHref({ pathname: a, search: s, hash: i })
  );
}
function oo() {
  return m.useContext(zi) != null;
}
function ir() {
  return oo() || oe(!1), m.useContext(zi).location;
}
function vp(e) {
  m.useContext(xn).static || m.useLayoutEffect(e);
}
function Lv() {
  let { isDataRoute: e } = m.useContext(Sn);
  return e ? Vv() : Av();
}
function Av() {
  oo() || oe(!1);
  let e = m.useContext(ba),
    { basename: t, navigator: n } = m.useContext(xn),
    { matches: r } = m.useContext(Sn),
    { pathname: o } = ir(),
    i = JSON.stringify(dp(r).map((a) => a.pathnameBase)),
    l = m.useRef(!1);
  return (
    vp(() => {
      l.current = !0;
    }),
    m.useCallback(
      function (a, u) {
        if ((u === void 0 && (u = {}), !l.current)) return;
        if (typeof a == "number") {
          n.go(a);
          return;
        }
        let c = pp(a, JSON.parse(i), o, u.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : Gt([t, c.pathname])),
          (u.replace ? n.replace : n.push)(c, u.state, u);
      },
      [t, n, i, o, e],
    )
  );
}
function Wa(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = m.useContext(Sn),
    { pathname: o } = ir(),
    i = JSON.stringify(dp(r).map((l) => l.pathnameBase));
  return m.useMemo(() => pp(e, JSON.parse(i), o, n === "path"), [e, i, o, n]);
}
function Iv(e, t) {
  return Dv(e, t);
}
function Dv(e, t, n) {
  oo() || oe(!1);
  let { navigator: r } = m.useContext(xn),
    { matches: o } = m.useContext(Sn),
    i = o[o.length - 1],
    l = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : "/";
  i && i.route;
  let a = ir(),
    u;
  if (t) {
    var c;
    let g = typeof t == "string" ? or(t) : t;
    s === "/" || ((c = g.pathname) != null && c.startsWith(s)) || oe(!1),
      (u = g);
  } else u = a;
  let f = u.pathname || "/",
    y = s === "/" ? f : f.slice(s.length) || "/",
    x = uv(e, { pathname: y }),
    w = Uv(
      x &&
        x.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, l, g.params),
            pathname: Gt([
              s,
              r.encodeLocation
                ? r.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? s
                : Gt([
                    s,
                    r.encodeLocation
                      ? r.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          }),
        ),
      o,
      n,
    );
  return t && w
    ? m.createElement(
        zi.Provider,
        {
          value: {
            location: pi(
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
        w,
      )
    : w;
}
function Bv() {
  let e = Hv(),
    t = Tv(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return m.createElement(
    m.Fragment,
    null,
    m.createElement("h2", null, "Unexpected Application Error!"),
    m.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? m.createElement("pre", { style: o }, n) : null,
    null,
  );
}
const Fv = m.createElement(Bv, null);
class zv extends m.Component {
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
      ? m.createElement(
          Sn.Provider,
          { value: this.props.routeContext },
          m.createElement(yp.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Mv(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = m.useContext(ba);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    m.createElement(Sn.Provider, { value: t }, r)
  );
}
function Uv(e, t, n) {
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
    n && (f = a.route.errorElement || Fv);
    let y = t.concat(i.slice(0, u + 1)),
      x = () => {
        let w;
        return (
          c
            ? (w = f)
            : a.route.Component
            ? (w = m.createElement(a.route.Component, null))
            : a.route.element
            ? (w = a.route.element)
            : (w = s),
          m.createElement(Mv, {
            match: a,
            routeContext: { outlet: s, matches: y, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || u === 0)
      ? m.createElement(zv, {
          location: n.location,
          revalidation: n.revalidation,
          component: f,
          error: c,
          children: x(),
          routeContext: { outlet: null, matches: y, isDataRoute: !0 },
        })
      : x();
  }, null);
}
var Ts;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate");
})(Ts || (Ts = {}));
var Xr;
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
})(Xr || (Xr = {}));
function $v(e) {
  let t = m.useContext(ba);
  return t || oe(!1), t;
}
function bv(e) {
  let t = m.useContext(mp);
  return t || oe(!1), t;
}
function Wv(e) {
  let t = m.useContext(Sn);
  return t || oe(!1), t;
}
function gp(e) {
  let t = Wv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || oe(!1), n.route.id;
}
function Hv() {
  var e;
  let t = m.useContext(yp),
    n = bv(Xr.UseRouteError),
    r = gp(Xr.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Vv() {
  let { router: e } = $v(Ts.UseNavigateStable),
    t = gp(Xr.UseNavigateStable),
    n = m.useRef(!1);
  return (
    vp(() => {
      n.current = !0;
    }),
    m.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, pi({ fromRouteId: t }, i)));
      },
      [e, t],
    )
  );
}
function Pt(e) {
  oe(!1);
}
function Kv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Mt.Pop,
    navigator: i,
    static: l = !1,
  } = e;
  oo() && oe(!1);
  let s = t.replace(/^\/*/, "/"),
    a = m.useMemo(() => ({ basename: s, navigator: i, static: l }), [s, i, l]);
  typeof r == "string" && (r = or(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: f = "",
      state: y = null,
      key: x = "default",
    } = r,
    w = m.useMemo(() => {
      let g = $a(u, s);
      return g == null
        ? null
        : {
            location: { pathname: g, search: c, hash: f, state: y, key: x },
            navigationType: o,
          };
    }, [s, u, c, f, y, x, o]);
  return w == null
    ? null
    : m.createElement(
        xn.Provider,
        { value: a },
        m.createElement(zi.Provider, { children: n, value: w }),
      );
}
function Qv(e) {
  let { children: t, location: n } = e;
  return Iv(Ps(t), n);
}
var Cc;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Cc || (Cc = {}));
new Promise(() => {});
function Ps(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    m.Children.forEach(e, (r, o) => {
      if (!m.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === m.Fragment) {
        n.push.apply(n, Ps(r.props.children, i));
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
      r.props.children && (l.children = Ps(r.props.children, i)), n.push(l);
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
function wp(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Gv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Xv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Gv(e);
}
const Yv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  Jv = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ],
  qv = "startTransition",
  Ec = Yh[qv];
function Zv(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = m.useRef();
  i.current == null && (i.current = lv({ window: o, v5Compat: !0 }));
  let l = i.current,
    [s, a] = m.useState({ action: l.action, location: l.location }),
    { v7_startTransition: u } = r || {},
    c = m.useCallback(
      (f) => {
        u && Ec ? Ec(() => a(f)) : a(f);
      },
      [a, u],
    );
  return (
    m.useLayoutEffect(() => l.listen(c), [l, c]),
    m.createElement(Kv, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: l,
    })
  );
}
const eg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  tg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  vn = m.forwardRef(function (t, n) {
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
      f = wp(t, Yv),
      { basename: y } = m.useContext(xn),
      x,
      w = !1;
    if (typeof u == "string" && tg.test(u) && ((x = u), eg))
      try {
        let p = new URL(window.location.href),
          v = u.startsWith("//") ? new URL(p.protocol + u) : new URL(u),
          S = $a(v.pathname, y);
        v.origin === p.origin && S != null
          ? (u = S + v.search + v.hash)
          : (w = !0);
      } catch {}
    let g = _v(u, { relative: o }),
      C = ng(u, {
        replace: l,
        state: s,
        target: a,
        preventScrollReset: c,
        relative: o,
      });
    function h(p) {
      r && r(p), p.defaultPrevented || C(p);
    }
    return m.createElement(
      "a",
      hi({}, f, { href: x || g, onClick: w || i ? r : h, ref: n, target: a }),
    );
  }),
  kn = m.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: o = !1,
        className: i = "",
        end: l = !1,
        style: s,
        to: a,
        children: u,
      } = t,
      c = wp(t, Jv),
      f = Wa(a, { relative: c.relative }),
      y = ir(),
      x = m.useContext(mp),
      { navigator: w } = m.useContext(xn),
      g = w.encodeLocation ? w.encodeLocation(f).pathname : f.pathname,
      C = y.pathname,
      h =
        x && x.navigation && x.navigation.location
          ? x.navigation.location.pathname
          : null;
    o ||
      ((C = C.toLowerCase()),
      (h = h ? h.toLowerCase() : null),
      (g = g.toLowerCase()));
    let p = C === g || (!l && C.startsWith(g) && C.charAt(g.length) === "/"),
      v =
        h != null &&
        (h === g || (!l && h.startsWith(g) && h.charAt(g.length) === "/")),
      S = p ? r : void 0,
      j;
    typeof i == "function"
      ? (j = i({ isActive: p, isPending: v }))
      : (j = [i, p ? "active" : null, v ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let k = typeof s == "function" ? s({ isActive: p, isPending: v }) : s;
    return m.createElement(
      vn,
      hi({}, c, { "aria-current": S, className: j, ref: n, style: k, to: a }),
      typeof u == "function" ? u({ isActive: p, isPending: v }) : u,
    );
  });
var kc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(kc || (kc = {}));
var Nc;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Nc || (Nc = {}));
function ng(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: l,
    } = t === void 0 ? {} : t,
    s = Lv(),
    a = ir(),
    u = Wa(e, { relative: l });
  return m.useCallback(
    (c) => {
      if (Xv(c, n)) {
        c.preventDefault();
        let f = r !== void 0 ? r : di(a) === di(u);
        s(e, { replace: f, state: o, preventScrollReset: i, relative: l });
      }
    },
    [a, s, u, r, o, n, e, i, l],
  );
}
var xp = { exports: {} };
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
            var y = JSON.stringify(c);
            /^[\{\[]/.test(y) && (c = y);
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
          for (var w in f)
            f[w] &&
              ((x += "; " + w), f[w] !== !0 && (x += "=" + f[w].split(";")[0]));
          return (document.cookie = u + "=" + c + x);
        }
      }
      function a(u, c) {
        if (!(typeof document > "u")) {
          for (
            var f = {},
              y = document.cookie ? document.cookie.split("; ") : [],
              x = 0;
            x < y.length;
            x++
          ) {
            var w = y[x].split("="),
              g = w.slice(1).join("=");
            !c && g.charAt(0) === '"' && (g = g.slice(1, -1));
            try {
              var C = r(w[0]);
              if (((g = (i.read || i)(g, C) || r(g)), c))
                try {
                  g = JSON.parse(g);
                } catch {}
              if (((f[C] = g), u === C)) break;
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
})(xp);
var rg = xp.exports;
const mi = qr(rg);
var og = function (t) {
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
function ig(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    _s(e, t);
}
function _s(e, t) {
  return (
    (_s = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    _s(e, t)
  );
}
function lg(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Ls = { TOP: "top", BOTTOM: "bottom", NONE: "none" },
  yi;
(function (e) {
  (e.STRICT = "strict"), (e.LAX = "lax"), (e.NONE = "none");
})(yi || (yi = {}));
var As = { HIDDEN: "hidden", SHOW: "show", BY_COOKIE_VALUE: "byCookieValue" },
  Sp = "CookieConsent",
  sg = ["children"],
  ag = function (t) {
    var n = t.children,
      r = lg(t, sg);
    return ce.createElement("button", Object.assign({}, r), n);
  },
  ug = {
    disableStyles: !1,
    hideOnAccept: !0,
    hideOnDecline: !0,
    location: Ls.BOTTOM,
    visible: As.BY_COOKIE_VALUE,
    onAccept: function (t) {},
    onDecline: function () {},
    cookieName: Sp,
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
    sameSite: yi.LAX,
    ButtonComponent: ag,
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
  cg = {
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
  fg = function (t) {
    t === void 0 && (t = Sp);
    var n = mi.get(t);
    return n === void 0 ? mi.get(Cp(t)) : n;
  },
  Cp = function (t) {
    return t + "-legacy";
  },
  Ep = (function (e) {
    ig(t, e);
    function t() {
      var r;
      return (
        (r = e.apply(this, arguments) || this),
        (r.state = cg),
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
        u === yi.NONE && mi.set(Cp(o), i, f), mi.set(o, i, f);
      }),
      (n.getCookieValue = function () {
        var o = this.props.cookieName;
        return fg(o);
      }),
      (n.render = function () {
        var o = this;
        switch (this.props.visible) {
          case As.HIDDEN:
            return null;
          case As.BY_COOKIE_VALUE:
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
          y = i.buttonText,
          x = i.declineButtonText,
          w = i.containerClasses,
          g = i.contentClasses,
          C = i.buttonClasses,
          h = i.buttonWrapperClasses,
          p = i.declineButtonClasses,
          v = i.buttonId,
          S = i.declineButtonId,
          j = i.disableButtonStyles,
          k = i.enableDeclineButton,
          O = i.flipButtons,
          T = i.ButtonComponent,
          $ = i.overlay,
          A = i.overlayClasses,
          ae = i.overlayStyle,
          Ge = i.ariaAcceptLabel,
          Pe = i.ariaDeclineLabel,
          ct = i.customContainerAttributes,
          Ot = i.customContentAttributes,
          Me = i.customButtonProps,
          G = i.customDeclineButtonProps,
          R = i.customButtonWrapperAttributes,
          _ = {},
          L = {},
          z = {},
          M = {},
          _e = {};
        switch (
          (f
            ? ((_ = Object.assign({}, s)),
              (L = Object.assign({}, a)),
              (z = Object.assign({}, u)),
              (M = Object.assign({}, c)),
              (_e = Object.assign({}, ae)))
            : ((_ = Object.assign({}, At({}, this.state.style, s))),
              (M = Object.assign({}, At({}, this.state.contentStyle, c))),
              (_e = Object.assign({}, At({}, this.state.overlayStyle, ae))),
              j
                ? ((L = Object.assign({}, a)), (z = Object.assign({}, u)))
                : ((L = Object.assign({}, At({}, this.state.buttonStyle, a))),
                  (z = Object.assign(
                    {},
                    At({}, this.state.declineButtonStyle, u),
                  )))),
          l)
        ) {
          case Ls.TOP:
            _.top = "0";
            break;
          case Ls.BOTTOM:
            _.bottom = "0";
            break;
        }
        var ie = [];
        return (
          k &&
            ie.push(
              ce.createElement(
                T,
                Object.assign(
                  {
                    key: "declineButton",
                    style: z,
                    className: p,
                    id: S,
                    "aria-label": Pe,
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
              T,
              Object.assign(
                {
                  key: "acceptButton",
                  style: L,
                  className: C,
                  id: v,
                  "aria-label": Ge,
                  onClick: function () {
                    o.accept();
                  },
                },
                Me,
              ),
              y,
            ),
          ),
          O && ie.reverse(),
          ce.createElement(
            og,
            {
              condition: $,
              wrapper: function (we) {
                return ce.createElement(
                  "div",
                  {
                    style: _e,
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
              Object.assign({ className: "" + w, style: _ }, ct),
              ce.createElement(
                "div",
                Object.assign({ style: M, className: g }, Ot),
                this.props.children,
              ),
              ce.createElement(
                "div",
                Object.assign({ className: "" + h }, R),
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
  })(m.Component);
Ep.defaultProps = ug;
var kp = { exports: {} };
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
})(kp);
var dg = kp.exports;
const B = qr(dg);
function Is() {
  return (
    (Is = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Is.apply(this, arguments)
  );
}
function Np(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function jc(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function pg(e) {
  var t = hg(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function hg(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function mg(e, t, n) {
  var r = m.useRef(e !== void 0),
    o = m.useState(t),
    i = o[0],
    l = o[1],
    s = e !== void 0,
    a = r.current;
  return (
    (r.current = s),
    !s && a && i !== t && l(t),
    [
      s ? e : i,
      m.useCallback(
        function (u) {
          for (
            var c = arguments.length, f = new Array(c > 1 ? c - 1 : 0), y = 1;
            y < c;
            y++
          )
            f[y - 1] = arguments[y];
          n && n.apply(void 0, [u].concat(f)), l(u);
        },
        [n],
      ),
    ]
  );
}
function Ha(e, t) {
  return Object.keys(t).reduce(function (n, r) {
    var o,
      i = n,
      l = i[jc(r)],
      s = i[r],
      a = Np(i, [jc(r), r].map(pg)),
      u = t[r],
      c = mg(s, l, e[u]),
      f = c[0],
      y = c[1];
    return Is({}, a, ((o = {}), (o[r] = f), (o[u] = y), o));
  }, e);
}
function Ds(e, t) {
  return (
    (Ds = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Ds(e, t)
  );
}
function yg(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Ds(e, t);
}
const vg = ["xxl", "xl", "lg", "md", "sm", "xs"],
  gg = "xs",
  Va = m.createContext({ prefixes: {}, breakpoints: vg, minBreakpoint: gg });
function b(e, t) {
  const { prefixes: n } = m.useContext(Va);
  return e || n[t] || t;
}
function wg() {
  const { breakpoints: e } = m.useContext(Va);
  return e;
}
function xg() {
  const { minBreakpoint: e } = m.useContext(Va);
  return e;
}
function Ka(e) {
  return (e && e.ownerDocument) || document;
}
function Sg(e) {
  var t = Ka(e);
  return (t && t.defaultView) || window;
}
function Cg(e, t) {
  return Sg(e).getComputedStyle(e, t);
}
var Eg = /([A-Z])/g;
function kg(e) {
  return e.replace(Eg, "-$1").toLowerCase();
}
var Ng = /^ms-/;
function Oo(e) {
  return kg(e).replace(Ng, "-ms-");
}
var jg =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function Og(e) {
  return !!(e && jg.test(e));
}
function vt(e, t) {
  var n = "",
    r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(Oo(t)) || Cg(e).getPropertyValue(Oo(t));
  Object.keys(t).forEach(function (o) {
    var i = t[o];
    !i && i !== 0
      ? e.style.removeProperty(Oo(o))
      : Og(o)
      ? (r += o + "(" + i + ") ")
      : (n += Oo(o) + ": " + i + ";");
  }),
    r && (n += "transform: " + r + ";"),
    (e.style.cssText += ";" + n);
}
var jp = { exports: {} },
  Rg = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Tg = Rg,
  Pg = Tg;
function Op() {}
function Rp() {}
Rp.resetWarningCache = Op;
var _g = function () {
  function e(r, o, i, l, s, a) {
    if (a !== Pg) {
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
    checkPropTypes: Rp,
    resetWarningCache: Op,
  };
  return (n.PropTypes = n), n;
};
jp.exports = _g();
var Lg = jp.exports;
const gt = qr(Lg),
  Oc = { disabled: !1 },
  Tp = ce.createContext(null);
var Ag = function (t) {
    return t.scrollTop;
  },
  Sr = "unmounted",
  It = "exited",
  Ze = "entering",
  pt = "entered",
  Yr = "exiting",
  Nt = (function (e) {
    yg(t, e);
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
            ? ((a = It), (i.appearStatus = Ze))
            : (a = pt)
          : r.unmountOnExit || r.mountOnEnter
          ? (a = Sr)
          : (a = It),
        (i.state = { status: a }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var l = o.in;
      return l && i.status === Sr ? { status: It } : null;
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
            ? l !== Ze && l !== pt && (i = Ze)
            : (l === Ze || l === pt) && (i = Yr);
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
          if ((this.cancelNextCallback(), i === Ze)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var l = this.props.nodeRef
                ? this.props.nodeRef.current
                : Mn.findDOMNode(this);
              l && Ag(l);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === It &&
            this.setState({ status: Sr });
      }),
      (n.performEnter = function (o) {
        var i = this,
          l = this.props.enter,
          s = this.context ? this.context.isMounting : o,
          a = this.props.nodeRef ? [s] : [Mn.findDOMNode(this), s],
          u = a[0],
          c = a[1],
          f = this.getTimeouts(),
          y = s ? f.appear : f.enter;
        if ((!o && !l) || Oc.disabled) {
          this.safeSetState({ status: pt }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, c),
          this.safeSetState({ status: Ze }, function () {
            i.props.onEntering(u, c),
              i.onTransitionEnd(y, function () {
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
          s = this.props.nodeRef ? void 0 : Mn.findDOMNode(this);
        if (!i || Oc.disabled) {
          this.safeSetState({ status: It }, function () {
            o.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: Yr }, function () {
            o.props.onExiting(s),
              o.onTransitionEnd(l.exit, function () {
                o.safeSetState({ status: It }, function () {
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
            : Mn.findDOMNode(this),
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
        if (o === Sr) return null;
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
        var s = Np(i, [
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
          Tp.Provider,
          { value: null },
          typeof l == "function"
            ? l(o, s)
            : ce.cloneElement(ce.Children.only(l), s),
        );
      }),
      t
    );
  })(ce.Component);
Nt.contextType = Tp;
Nt.propTypes = {};
function Nn() {}
Nt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Nn,
  onEntering: Nn,
  onEntered: Nn,
  onExit: Nn,
  onExiting: Nn,
  onExited: Nn,
};
Nt.UNMOUNTED = Sr;
Nt.EXITED = It;
Nt.ENTERING = Ze;
Nt.ENTERED = pt;
Nt.EXITING = Yr;
const Mi = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
var Bs = !1,
  Fs = !1;
try {
  var Nl = {
    get passive() {
      return (Bs = !0);
    },
    get once() {
      return (Fs = Bs = !0);
    },
  };
  Mi &&
    (window.addEventListener("test", Nl, Nl),
    window.removeEventListener("test", Nl, !0));
} catch {}
function Ig(e, t, n, r) {
  if (r && typeof r != "boolean" && !Fs) {
    var o = r.once,
      i = r.capture,
      l = n;
    !Fs &&
      o &&
      ((l =
        n.__once ||
        function s(a) {
          this.removeEventListener(t, s, i), n.call(this, a);
        }),
      (n.__once = l)),
      e.addEventListener(t, l, Bs ? r : i);
  }
  e.addEventListener(t, n, r);
}
function Dg(e, t, n, r) {
  var o = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, o),
    n.__once && e.removeEventListener(t, n.__once, o);
}
function vi(e, t, n, r) {
  return (
    Ig(e, t, n, r),
    function () {
      Dg(e, t, n, r);
    }
  );
}
function Bg(e, t, n, r) {
  if ((r === void 0 && (r = !0), e)) {
    var o = document.createEvent("HTMLEvents");
    o.initEvent(t, n, r), e.dispatchEvent(o);
  }
}
function Fg(e) {
  var t = vt(e, "transitionDuration") || "",
    n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function zg(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1,
    o = setTimeout(function () {
      r || Bg(e, "transitionend", !0);
    }, t + n),
    i = vi(
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
function Mg(e, t, n, r) {
  n == null && (n = Fg(e) || 0);
  var o = zg(e, n, r),
    i = vi(e, "transitionend", t);
  return function () {
    o(), i();
  };
}
function Rc(e, t) {
  const n = vt(e, t) || "",
    r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function Qa(e, t) {
  const n = Rc(e, "transitionDuration"),
    r = Rc(e, "transitionDelay"),
    o = Mg(
      e,
      (i) => {
        i.target === e && (o(), t(i));
      },
      n + r,
    );
}
function mr(...e) {
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
function Pp(e) {
  e.offsetHeight;
}
var Tc = function (t) {
  return !t || typeof t == "function"
    ? t
    : function (n) {
        t.current = n;
      };
};
function Ug(e, t) {
  var n = Tc(e),
    r = Tc(t);
  return function (o) {
    n && n(o), r && r(o);
  };
}
function Ui(e, t) {
  return m.useMemo(
    function () {
      return Ug(e, t);
    },
    [e, t],
  );
}
function $g(e) {
  return e && "setState" in e ? Mn.findDOMNode(e) : e ?? null;
}
const Ga = ce.forwardRef(
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
      const f = m.useRef(null),
        y = Ui(f, a),
        x = (k) => {
          y($g(k));
        },
        w = (k) => (O) => {
          k && f.current && k(f.current, O);
        },
        g = m.useCallback(w(e), [e]),
        C = m.useCallback(w(t), [t]),
        h = m.useCallback(w(n), [n]),
        p = m.useCallback(w(r), [r]),
        v = m.useCallback(w(o), [o]),
        S = m.useCallback(w(i), [i]),
        j = m.useCallback(w(l), [l]);
      return d.jsx(Nt, {
        ref: c,
        ...u,
        onEnter: g,
        onEntered: h,
        onEntering: C,
        onExit: p,
        onExited: S,
        onExiting: v,
        addEndListener: j,
        nodeRef: f,
        children:
          typeof s == "function"
            ? (k, O) => s(k, { ...O, ref: x })
            : ce.cloneElement(s, { ref: x }),
      });
    },
  ),
  bg = {
    height: ["marginTop", "marginBottom"],
    width: ["marginLeft", "marginRight"],
  };
function Wg(e, t) {
  const n = `offset${e[0].toUpperCase()}${e.slice(1)}`,
    r = t[n],
    o = bg[e];
  return r + parseInt(vt(t, o[0]), 10) + parseInt(vt(t, o[1]), 10);
}
const Hg = {
    [It]: "collapse",
    [Yr]: "collapsing",
    [Ze]: "collapsing",
    [pt]: "collapse show",
  },
  Vg = ce.forwardRef(
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
        appear: y = !1,
        getDimensionValue: x = Wg,
        ...w
      },
      g,
    ) => {
      const C = typeof s == "function" ? s() : s,
        h = m.useMemo(
          () =>
            mr((k) => {
              k.style[C] = "0";
            }, e),
          [C, e],
        ),
        p = m.useMemo(
          () =>
            mr((k) => {
              const O = `scroll${C[0].toUpperCase()}${C.slice(1)}`;
              k.style[C] = `${k[O]}px`;
            }, t),
          [C, t],
        ),
        v = m.useMemo(
          () =>
            mr((k) => {
              k.style[C] = null;
            }, n),
          [C, n],
        ),
        S = m.useMemo(
          () =>
            mr((k) => {
              (k.style[C] = `${x(C, k)}px`), Pp(k);
            }, r),
          [r, x, C],
        ),
        j = m.useMemo(
          () =>
            mr((k) => {
              k.style[C] = null;
            }, o),
          [C, o],
        );
      return d.jsx(Ga, {
        ref: g,
        addEndListener: Qa,
        ...w,
        "aria-expanded": w.role ? a : null,
        onEnter: h,
        onEntering: p,
        onEntered: v,
        onExit: S,
        onExiting: j,
        childRef: l.ref,
        in: a,
        timeout: u,
        mountOnEnter: c,
        unmountOnExit: f,
        appear: y,
        children: (k, O) =>
          ce.cloneElement(l, {
            ...O,
            className: B(
              i,
              l.props.className,
              Hg[k],
              C === "width" && "collapse-horizontal",
            ),
          }),
      });
    },
  );
function Kg(e) {
  var t = m.useRef(e);
  return (
    m.useEffect(
      function () {
        t.current = e;
      },
      [e],
    ),
    t
  );
}
function Ae(e) {
  var t = Kg(e);
  return m.useCallback(
    function () {
      return t.current && t.current.apply(t, arguments);
    },
    [t],
  );
}
function Qg() {
  var e = m.useRef(!0),
    t = m.useRef(function () {
      return e.current;
    });
  return (
    m.useEffect(function () {
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
function Gg(e) {
  var t = m.useRef(null);
  return (
    m.useEffect(function () {
      t.current = e;
    }),
    t.current
  );
}
var Xg =
    typeof global < "u" &&
    global.navigator &&
    global.navigator.product === "ReactNative",
  Yg = typeof document < "u";
const zs = Yg || Xg ? m.useLayoutEffect : m.useEffect,
  Jg = ["as", "disabled"];
function qg(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Zg(e) {
  return !e || e.trim() === "#";
}
function Xa({
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
  const c = (y) => {
      if (((t || (e === "a" && Zg(n))) && y.preventDefault(), t)) {
        y.stopPropagation();
        return;
      }
      l == null || l(y);
    },
    f = (y) => {
      y.key === " " && (y.preventDefault(), c(y));
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
const _p = m.forwardRef((e, t) => {
  let { as: n, disabled: r } = e,
    o = qg(e, Jg);
  const [i, { tagName: l }] = Xa(Object.assign({ tagName: n, disabled: r }, o));
  return d.jsx(l, Object.assign({}, o, i, { ref: t }));
});
_p.displayName = "Button";
const e0 = ["onKeyDown"];
function t0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function n0(e) {
  return !e || e.trim() === "#";
}
const Ya = m.forwardRef((e, t) => {
  let { onKeyDown: n } = e,
    r = t0(e, e0);
  const [o] = Xa(Object.assign({ tagName: "a" }, r)),
    i = Ae((l) => {
      o.onKeyDown(l), n == null || n(l);
    });
  return n0(r.href) || r.role === "button"
    ? d.jsx("a", Object.assign({ ref: t }, r, o, { onKeyDown: i }))
    : d.jsx("a", Object.assign({ ref: t }, r, { onKeyDown: n }));
});
Ya.displayName = "Anchor";
const r0 = { [Ze]: "show", [pt]: "show" },
  gi = m.forwardRef(
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
        s = m.useCallback(
          (a, u) => {
            Pp(a), r == null || r(a, u);
          },
          [r],
        );
      return d.jsx(Ga, {
        ref: i,
        addEndListener: Qa,
        ...l,
        onEnter: s,
        childRef: t.ref,
        children: (a, u) =>
          m.cloneElement(t, {
            ...u,
            className: B("fade", e, t.props.className, r0[a], n[a]),
          }),
      });
    },
  );
gi.displayName = "Fade";
const o0 = {
    "aria-label": gt.string,
    onClick: gt.func,
    variant: gt.oneOf(["white"]),
  },
  $i = m.forwardRef(
    ({ className: e, variant: t, "aria-label": n = "Close", ...r }, o) =>
      d.jsx("button", {
        ref: o,
        type: "button",
        className: B("btn-close", t && `btn-close-${t}`, e),
        "aria-label": n,
        ...r,
      }),
  );
$i.displayName = "CloseButton";
$i.propTypes = o0;
const bi = (e) =>
  m.forwardRef((t, n) =>
    d.jsx("div", { ...t, ref: n, className: B(t.className, e) }),
  );
var i0 = /-(.)/g;
function l0(e) {
  return e.replace(i0, function (t, n) {
    return n.toUpperCase();
  });
}
const s0 = (e) => e[0].toUpperCase() + l0(e).slice(1);
function Te(e, { displayName: t = s0(e), Component: n, defaultProps: r } = {}) {
  const o = m.forwardRef(
    ({ className: i, bsPrefix: l, as: s = n || "div", ...a }, u) => {
      const c = { ...r, ...a },
        f = b(l, e);
      return d.jsx(s, { ref: u, className: B(i, f), ...c });
    },
  );
  return (o.displayName = t), o;
}
const Lp = bi("h4");
Lp.displayName = "DivStyledAsH4";
const a0 = Te("alert-heading", { Component: Lp }),
  u0 = Te("alert-link", { Component: Ya }),
  Ap = m.forwardRef((e, t) => {
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
        transition: f = gi,
        ...y
      } = Ha(e, { show: "onClose" }),
      x = b(n, "alert"),
      w = Ae((h) => {
        u && u(!1, h);
      }),
      g = f === !0 ? gi : f,
      C = d.jsxs("div", {
        role: "alert",
        ...(g ? void 0 : y),
        ref: t,
        className: B(l, x, a && `${x}-${a}`, c && `${x}-dismissible`),
        children: [
          c && d.jsx($i, { onClick: w, "aria-label": o, variant: i }),
          s,
        ],
      });
    return g
      ? d.jsx(g, { unmountOnExit: !0, ...y, ref: void 0, in: r, children: C })
      : r
      ? C
      : null;
  });
Ap.displayName = "Alert";
const c0 = Object.assign(Ap, { Link: u0, Heading: a0 }),
  Zn = m.forwardRef(
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
        [c, { tagName: f }] = Xa({ tagName: e, disabled: i, ...s }),
        y = f;
      return d.jsx(y, {
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
Zn.displayName = "Button";
const Ip = m.forwardRef(
  ({ bsPrefix: e, className: t, variant: n, as: r = "img", ...o }, i) => {
    const l = b(e, "card-img");
    return d.jsx(r, { ref: i, className: B(n ? `${l}-${n}` : l, t), ...o });
  },
);
Ip.displayName = "CardImg";
const Ja = m.createContext(null);
Ja.displayName = "CardHeaderContext";
const Dp = m.forwardRef(
  ({ bsPrefix: e, className: t, as: n = "div", ...r }, o) => {
    const i = b(e, "card-header"),
      l = m.useMemo(() => ({ cardHeaderBsPrefix: i }), [i]);
    return d.jsx(Ja.Provider, {
      value: l,
      children: d.jsx(n, { ref: o, ...r, className: B(t, i) }),
    });
  },
);
Dp.displayName = "CardHeader";
const f0 = bi("h5"),
  d0 = bi("h6"),
  Bp = Te("card-body"),
  p0 = Te("card-title", { Component: f0 }),
  h0 = Te("card-subtitle", { Component: d0 }),
  m0 = Te("card-link", { Component: "a" }),
  y0 = Te("card-text", { Component: "p" }),
  v0 = Te("card-footer"),
  g0 = Te("card-img-overlay"),
  Fp = m.forwardRef(
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
        children: i ? d.jsx(Bp, { children: l }) : l,
      });
    },
  );
Fp.displayName = "Card";
const H = Object.assign(Fp, {
  Img: Ip,
  Title: p0,
  Subtitle: h0,
  Body: Bp,
  Link: m0,
  Text: y0,
  Header: Dp,
  Footer: v0,
  ImgOverlay: g0,
});
function w0(e) {
  var t = m.useRef(e);
  return (t.current = e), t;
}
function x0(e) {
  var t = w0(e);
  m.useEffect(function () {
    return function () {
      return t.current();
    };
  }, []);
}
function S0(e, t) {
  return m.Children.toArray(e).some((n) => m.isValidElement(n) && n.type === t);
}
function C0({ as: e, bsPrefix: t, className: n, ...r }) {
  t = b(t, "col");
  const o = wg(),
    i = xg(),
    l = [],
    s = [];
  return (
    o.forEach((a) => {
      const u = r[a];
      delete r[a];
      let c, f, y;
      typeof u == "object" && u != null
        ? ({ span: c, offset: f, order: y } = u)
        : (c = u);
      const x = a !== i ? `-${a}` : "";
      c && l.push(c === !0 ? `${t}${x}` : `${t}${x}-${c}`),
        y != null && s.push(`order${x}-${y}`),
        f != null && s.push(`offset${x}-${f}`);
    }),
    [
      { ...r, className: B(n, ...l, ...s) },
      { as: e, bsPrefix: t, spans: l },
    ]
  );
}
const zp = m.forwardRef((e, t) => {
  const [{ className: n, ...r }, { as: o = "div", bsPrefix: i, spans: l }] =
    C0(e);
  return d.jsx(o, { ...r, ref: t, className: B(n, !l.length && i) });
});
zp.displayName = "Col";
var E0 = Function.prototype.bind.call(Function.prototype.call, [].slice);
function on(e, t) {
  return E0(e.querySelectorAll(t));
}
function k0() {
  var e = m.useReducer(function (n) {
      return !n;
    }, !1),
    t = e[1];
  return t;
}
function Pc(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition)
    return e === t || !!(e.compareDocumentPosition(t) & 16);
}
const N0 = m.createContext(null),
  qa = (e, t = null) => (e != null ? String(e) : t || null),
  wi = N0,
  Za = m.createContext(null);
Za.displayName = "NavContext";
const j0 = "data-rr-ui-",
  O0 = "rrUi";
function Wi(e) {
  return `${j0}${e}`;
}
function R0(e) {
  return `${O0}${e}`;
}
const Mp = m.createContext(Mi ? window : void 0);
Mp.Provider;
function Up() {
  return m.useContext(Mp);
}
const Cn = m.createContext(null);
Cn.displayName = "NavbarContext";
const T0 = { type: gt.string, tooltip: gt.bool, as: gt.elementType },
  Hi = m.forwardRef(
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
Hi.displayName = "Feedback";
Hi.propTypes = T0;
const Et = m.createContext({}),
  eu = m.forwardRef(
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
      const { controlId: u } = m.useContext(Et);
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
eu.displayName = "FormCheckInput";
const xi = m.forwardRef(
  ({ bsPrefix: e, className: t, htmlFor: n, ...r }, o) => {
    const { controlId: i } = m.useContext(Et);
    return (
      (e = b(e, "form-check-label")),
      d.jsx("label", { ...r, ref: o, htmlFor: n || i, className: B(t, e) })
    );
  },
);
xi.displayName = "FormCheckLabel";
const $p = m.forwardRef(
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
      style: y,
      title: x = "",
      type: w = "checkbox",
      label: g,
      children: C,
      as: h = "input",
      ...p
    },
    v,
  ) => {
    (t = b(t, "form-check")), (n = b(n, "form-switch"));
    const { controlId: S } = m.useContext(Et),
      j = m.useMemo(() => ({ controlId: e || S }), [S, e]),
      k = (!C && g != null && g !== !1) || S0(C, xi),
      O = d.jsx(eu, {
        ...p,
        type: w === "switch" ? "checkbox" : w,
        ref: v,
        isValid: l,
        isInvalid: s,
        disabled: i,
        as: h,
      });
    return d.jsx(Et.Provider, {
      value: j,
      children: d.jsx("div", {
        style: y,
        className: B(
          f,
          k && t,
          r && `${t}-inline`,
          o && `${t}-reverse`,
          w === "switch" && n,
        ),
        children:
          C ||
          d.jsxs(d.Fragment, {
            children: [
              O,
              k && d.jsx(xi, { title: x, children: g }),
              u && d.jsx(Hi, { type: c, tooltip: a, children: u }),
            ],
          }),
      }),
    });
  },
);
$p.displayName = "FormCheck";
const Si = Object.assign($p, { Input: eu, Label: xi }),
  bp = m.forwardRef(
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
      y,
    ) => {
      const { controlId: x } = m.useContext(Et);
      e = b(e, "form-control");
      let w;
      return (
        a
          ? (w = { [`${e}-plaintext`]: !0 })
          : (w = { [e]: !0, [`${e}-${n}`]: n }),
        d.jsx(c, {
          ...f,
          type: t,
          size: r,
          ref: y,
          readOnly: u,
          id: o || x,
          className: B(
            i,
            w,
            l && "is-valid",
            s && "is-invalid",
            t === "color" && `${e}-color`,
          ),
        })
      );
    },
  );
bp.displayName = "FormControl";
const P0 = Object.assign(bp, { Feedback: Hi }),
  _0 = Te("form-floating"),
  tu = m.forwardRef(({ controlId: e, as: t = "div", ...n }, r) => {
    const o = m.useMemo(() => ({ controlId: e }), [e]);
    return d.jsx(Et.Provider, {
      value: o,
      children: d.jsx(t, { ...n, ref: r }),
    });
  });
tu.displayName = "FormGroup";
const Wp = m.forwardRef(
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
    const { controlId: a } = m.useContext(Et);
    t = b(t, "form-label");
    let u = "col-form-label";
    typeof n == "string" && (u = `${u} ${u}-${n}`);
    const c = B(o, t, r && "visually-hidden", n && u);
    return (
      (i = i || a),
      n
        ? d.jsx(zp, { ref: s, as: "label", className: c, htmlFor: i, ...l })
        : d.jsx(e, { ref: s, className: c, htmlFor: i, ...l })
    );
  },
);
Wp.displayName = "FormLabel";
const Hp = m.forwardRef(({ bsPrefix: e, className: t, id: n, ...r }, o) => {
  const { controlId: i } = m.useContext(Et);
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
Hp.displayName = "FormRange";
const Vp = m.forwardRef(
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
    const { controlId: u } = m.useContext(Et);
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
Vp.displayName = "FormSelect";
const Kp = m.forwardRef(
  ({ bsPrefix: e, className: t, as: n = "small", muted: r, ...o }, i) => (
    (e = b(e, "form-text")),
    d.jsx(n, { ...o, ref: i, className: B(t, e, r && "text-muted") })
  ),
);
Kp.displayName = "FormText";
const Qp = m.forwardRef((e, t) => d.jsx(Si, { ...e, ref: t, type: "switch" }));
Qp.displayName = "Switch";
const L0 = Object.assign(Qp, { Input: Si.Input, Label: Si.Label }),
  Gp = m.forwardRef(
    (
      { bsPrefix: e, className: t, children: n, controlId: r, label: o, ...i },
      l,
    ) => (
      (e = b(e, "form-floating")),
      d.jsxs(tu, {
        ref: l,
        className: B(t, e),
        controlId: r,
        ...i,
        children: [n, d.jsx("label", { htmlFor: r, children: o })],
      })
    ),
  );
Gp.displayName = "FloatingLabel";
const A0 = { _ref: gt.any, validated: gt.bool, as: gt.elementType },
  nu = m.forwardRef(({ className: e, validated: t, as: n = "form", ...r }, o) =>
    d.jsx(n, { ...r, ref: o, className: B(e, t && "was-validated") }),
  );
nu.displayName = "Form";
nu.propTypes = A0;
const tn = Object.assign(nu, {
    Group: tu,
    Control: P0,
    Floating: _0,
    Check: Si,
    Switch: L0,
    Label: Wp,
    Text: Kp,
    Range: Hp,
    Select: Vp,
    FloatingLabel: Gp,
  }),
  jt = m.forwardRef(
    ({ bsPrefix: e, fluid: t = !1, as: n = "div", className: r, ...o }, i) => {
      const l = b(e, "container"),
        s = typeof t == "string" ? `-${t}` : "-fluid";
      return d.jsx(n, { ref: i, ...o, className: B(r, t ? `${l}${s}` : l) });
    },
  );
jt.displayName = "Container";
const Xp = m.createContext(null),
  I0 = ["as", "active", "eventKey"];
function D0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Yp({ key: e, onClick: t, active: n, id: r, role: o, disabled: i }) {
  const l = m.useContext(wi),
    s = m.useContext(Za),
    a = m.useContext(Xp);
  let u = n;
  const c = { role: o };
  if (s) {
    !o && s.role === "tablist" && (c.role = "tab");
    const f = s.getControllerId(e ?? null),
      y = s.getControlledId(e ?? null);
    (c[Wi("event-key")] = e),
      (c.id = f || r),
      (u = n == null && e != null ? s.activeKey === e : n),
      (u ||
        (!(a != null && a.unmountOnExit) && !(a != null && a.mountOnEnter))) &&
        (c["aria-controls"] = y);
  }
  return (
    c.role === "tab" &&
      ((c["aria-selected"] = u),
      u || (c.tabIndex = -1),
      i && ((c.tabIndex = -1), (c["aria-disabled"] = !0))),
    (c.onClick = Ae((f) => {
      i ||
        (t == null || t(f),
        e != null && l && !f.isPropagationStopped() && l(e, f));
    })),
    [c, { isActive: u }]
  );
}
const Jp = m.forwardRef((e, t) => {
  let { as: n = _p, active: r, eventKey: o } = e,
    i = D0(e, I0);
  const [l, s] = Yp(Object.assign({ key: qa(o, i.href), active: r }, i));
  return (
    (l[Wi("active")] = s.isActive),
    d.jsx(n, Object.assign({}, i, l, { ref: t }))
  );
});
Jp.displayName = "NavItem";
const B0 = Jp,
  F0 = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function z0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const _c = () => {},
  Lc = Wi("event-key"),
  qp = m.forwardRef((e, t) => {
    let { as: n = "div", onSelect: r, activeKey: o, role: i, onKeyDown: l } = e,
      s = z0(e, F0);
    const a = k0(),
      u = m.useRef(!1),
      c = m.useContext(wi),
      f = m.useContext(Xp);
    let y, x;
    f &&
      ((i = i || "tablist"),
      (o = f.activeKey),
      (y = f.getControlledId),
      (x = f.getControllerId));
    const w = m.useRef(null),
      g = (v) => {
        const S = w.current;
        if (!S) return null;
        const j = on(S, `[${Lc}]:not([aria-disabled=true])`),
          k = S.querySelector("[aria-selected=true]");
        if (!k || k !== document.activeElement) return null;
        const O = j.indexOf(k);
        if (O === -1) return null;
        let T = O + v;
        return T >= j.length && (T = 0), T < 0 && (T = j.length - 1), j[T];
      },
      C = (v, S) => {
        v != null && (r == null || r(v, S), c == null || c(v, S));
      },
      h = (v) => {
        if ((l == null || l(v), !f)) return;
        let S;
        switch (v.key) {
          case "ArrowLeft":
          case "ArrowUp":
            S = g(-1);
            break;
          case "ArrowRight":
          case "ArrowDown":
            S = g(1);
            break;
          default:
            return;
        }
        S &&
          (v.preventDefault(),
          C(S.dataset[R0("EventKey")] || null, v),
          (u.current = !0),
          a());
      };
    m.useEffect(() => {
      if (w.current && u.current) {
        const v = w.current.querySelector(`[${Lc}][aria-selected=true]`);
        v == null || v.focus();
      }
      u.current = !1;
    });
    const p = Ui(t, w);
    return d.jsx(wi.Provider, {
      value: C,
      children: d.jsx(Za.Provider, {
        value: {
          role: i,
          activeKey: qa(o),
          getControlledId: y || _c,
          getControllerId: x || _c,
        },
        children: d.jsx(
          n,
          Object.assign({}, s, { onKeyDown: h, ref: p, role: i }),
        ),
      }),
    });
  });
qp.displayName = "Nav";
const M0 = Object.assign(qp, { Item: B0 });
function jl(e) {
  e === void 0 && (e = Ka());
  try {
    var t = e.activeElement;
    return !t || !t.nodeName ? null : t;
  } catch {
    return e.body;
  }
}
function U0(e = document) {
  const t = e.defaultView;
  return Math.abs(t.innerWidth - e.documentElement.clientWidth);
}
const Ac = Wi("modal-open");
class ru {
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
    return U0(this.ownerDocument);
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
      o.setAttribute(Ac, ""),
      vt(o, n);
  }
  reset() {
    [...this.modals].forEach((t) => this.remove(t));
  }
  removeContainerStyle(t) {
    const n = this.getElement();
    n.removeAttribute(Ac), Object.assign(n.style, t.style);
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
const Ol = (e, t) =>
  Mi
    ? e == null
      ? (t || Ka()).body
      : (typeof e == "function" && (e = e()),
        e && "current" in e && (e = e.current),
        e && ("nodeType" in e || e.getBoundingClientRect) ? e : null)
    : null;
function $0(e, t) {
  const n = Up(),
    [r, o] = m.useState(() => Ol(e, n == null ? void 0 : n.document));
  if (!r) {
    const i = Ol(e);
    i && o(i);
  }
  return (
    m.useEffect(() => {}, [t, r]),
    m.useEffect(() => {
      const i = Ol(e);
      i !== r && o(i);
    }, [e, r]),
    r
  );
}
function b0({
  children: e,
  in: t,
  onExited: n,
  mountOnEnter: r,
  unmountOnExit: o,
}) {
  const i = m.useRef(null),
    l = m.useRef(t),
    s = Ae(n);
  m.useEffect(() => {
    t ? (l.current = !0) : s(i.current);
  }, [t, s]);
  const a = Ui(i, e.ref),
    u = m.cloneElement(e, { ref: a });
  return t ? u : o || (!l.current && r) ? null : u;
}
function W0({ in: e, onTransition: t }) {
  const n = m.useRef(null),
    r = m.useRef(!0),
    o = Ae(t);
  return (
    zs(() => {
      if (!n.current) return;
      let i = !1;
      return (
        o({ in: e, element: n.current, initial: r.current, isStale: () => i }),
        () => {
          i = !0;
        }
      );
    }, [e, o]),
    zs(
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
function H0({ children: e, in: t, onExited: n, onEntered: r, transition: o }) {
  const [i, l] = m.useState(!t);
  t && i && l(!1);
  const s = W0({
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
    a = Ui(s, e.ref);
  return i && !t ? null : m.cloneElement(e, { ref: a });
}
function Ic(e, t, n) {
  return e
    ? d.jsx(e, Object.assign({}, n))
    : t
    ? d.jsx(H0, Object.assign({}, n, { transition: t }))
    : d.jsx(b0, Object.assign({}, n));
}
function V0(e) {
  return e.code === "Escape" || e.keyCode === 27;
}
const K0 = [
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
let Rl;
function G0(e) {
  return (
    Rl || (Rl = new ru({ ownerDocument: e == null ? void 0 : e.document })), Rl
  );
}
function X0(e) {
  const t = Up(),
    n = e || G0(t),
    r = m.useRef({ dialog: null, backdrop: null });
  return Object.assign(r.current, {
    add: () => n.add(r.current),
    remove: () => n.remove(r.current),
    isTopModal: () => n.isTopModal(r.current),
    setDialogRef: m.useCallback((o) => {
      r.current.dialog = o;
    }, []),
    setBackdropRef: m.useCallback((o) => {
      r.current.backdrop = o;
    }, []),
  });
}
const Zp = m.forwardRef((e, t) => {
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
      runTransition: y,
      backdropTransition: x,
      runBackdropTransition: w,
      autoFocus: g = !0,
      enforceFocus: C = !0,
      restoreFocus: h = !0,
      restoreFocusOptions: p,
      renderDialog: v,
      renderBackdrop: S = (q) => d.jsx("div", Object.assign({}, q)),
      manager: j,
      container: k,
      onShow: O,
      onHide: T = () => {},
      onExit: $,
      onExited: A,
      onExiting: ae,
      onEnter: Ge,
      onEntering: Pe,
      onEntered: ct,
    } = e,
    Ot = Q0(e, K0);
  const Me = $0(k),
    G = X0(j),
    R = Qg(),
    _ = Gg(n),
    [L, z] = m.useState(!n),
    M = m.useRef(null);
  m.useImperativeHandle(t, () => G, [G]),
    Mi && !_ && n && (M.current = jl()),
    n && L && z(!1);
  const _e = Ae(() => {
      if (
        (G.add(),
        (Yi.current = vi(document, "keydown", en)),
        (Xi.current = vi(document, "focus", () => setTimeout(te), !0)),
        O && O(),
        g)
      ) {
        const q = jl(document);
        G.dialog &&
          q &&
          !Pc(G.dialog, q) &&
          ((M.current = q), G.dialog.focus());
      }
    }),
    ie = Ae(() => {
      if (
        (G.remove(),
        Yi.current == null || Yi.current(),
        Xi.current == null || Xi.current(),
        h)
      ) {
        var q;
        (q = M.current) == null || q.focus == null || q.focus(p),
          (M.current = null);
      }
    });
  m.useEffect(() => {
    !n || !Me || _e();
  }, [n, Me, _e]),
    m.useEffect(() => {
      L && ie();
    }, [L, ie]),
    x0(() => {
      ie();
    });
  const te = Ae(() => {
      if (!C || !R() || !G.isTopModal()) return;
      const q = jl();
      G.dialog && q && !Pc(G.dialog, q) && G.dialog.focus();
    }),
    we = Ae((q) => {
      q.target === q.currentTarget && (u == null || u(q), s === !0 && T());
    }),
    en = Ae((q) => {
      a &&
        V0(q) &&
        G.isTopModal() &&
        (c == null || c(q), q.defaultPrevented || T());
    }),
    Xi = m.useRef(),
    Yi = m.useRef(),
    Ah = (...q) => {
      z(!0), A == null || A(...q);
    };
  if (!Me) return null;
  const au = Object.assign(
    {
      role: r,
      ref: G.setDialogRef,
      "aria-modal": r === "dialog" ? !0 : void 0,
    },
    Ot,
    { style: i, className: o, tabIndex: -1 },
  );
  let Ji = v
    ? v(au)
    : d.jsx(
        "div",
        Object.assign({}, au, {
          children: m.cloneElement(l, { role: "document" }),
        }),
      );
  Ji = Ic(f, y, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!n,
    onExit: $,
    onExiting: ae,
    onExited: Ah,
    onEnter: Ge,
    onEntering: Pe,
    onEntered: ct,
    children: Ji,
  });
  let ao = null;
  return (
    s &&
      ((ao = S({ ref: G.setBackdropRef, onClick: we })),
      (ao = Ic(x, w, {
        in: !!n,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: ao,
      }))),
    d.jsx(d.Fragment, {
      children: Mn.createPortal(d.jsxs(d.Fragment, { children: [ao, Ji] }), Me),
    })
  );
});
Zp.displayName = "Modal";
const Y0 = Object.assign(Zp, { Manager: ru });
function J0(e, t) {
  return e.classList
    ? e.classList.contains(t)
    : (" " + (e.className.baseVal || e.className) + " ").indexOf(
        " " + t + " ",
      ) !== -1;
}
function q0(e, t) {
  e.classList
    ? e.classList.add(t)
    : J0(e, t) ||
      (typeof e.className == "string"
        ? (e.className = e.className + " " + t)
        : e.setAttribute(
            "class",
            ((e.className && e.className.baseVal) || "") + " " + t,
          ));
}
function Dc(e, t) {
  return e
    .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function Z0(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == "string"
    ? (e.className = Dc(e.className, t))
    : e.setAttribute(
        "class",
        Dc((e.className && e.className.baseVal) || "", t),
      );
}
const jn = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler",
};
class eh extends ru {
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
    if ((q0(n, "modal-open"), !t.scrollBarWidth)) return;
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
    Z0(n, "modal-open");
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      o = this.isRTL ? "marginLeft" : "marginRight";
    on(n, jn.FIXED_CONTENT).forEach((i) => this.restore(r, i)),
      on(n, jn.STICKY_CONTENT).forEach((i) => this.restore(o, i)),
      on(n, jn.NAVBAR_TOGGLER).forEach((i) => this.restore(o, i));
  }
}
let Tl;
function e1(e) {
  return Tl || (Tl = new eh(e)), Tl;
}
const th = m.createContext({ onHide() {} }),
  t1 = m.forwardRef(
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
      const s = m.useContext(th),
        a = Ae(() => {
          s == null || s.onHide(), r == null || r();
        });
      return d.jsxs("div", {
        ref: l,
        ...i,
        children: [
          o,
          n && d.jsx($i, { "aria-label": e, variant: t, onClick: a }),
        ],
      });
    },
  );
var Bc = { exports: {} },
  Ms = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
  function n(r) {
    function o(l, s, a, u, c, f) {
      var y = u || "<<anonymous>>",
        x = f || a;
      if (s[a] == null)
        return l
          ? new Error(
              "Required " +
                c +
                " `" +
                x +
                "` was not specified " +
                ("in `" + y + "`."),
            )
          : null;
      for (
        var w = arguments.length, g = Array(w > 6 ? w - 6 : 0), C = 6;
        C < w;
        C++
      )
        g[C - 6] = arguments[C];
      return r.apply(void 0, [s, a, y, c, x].concat(g));
    }
    var i = o.bind(null, !1);
    return (i.isRequired = o.bind(null, !0)), i;
  }
  e.exports = t.default;
})(Ms, Ms.exports);
var n1 = Ms.exports;
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i);
  var n = n1,
    r = o(n);
  function o(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function i() {
    for (var l = arguments.length, s = Array(l), a = 0; a < l; a++)
      s[a] = arguments[a];
    function u() {
      for (var c = arguments.length, f = Array(c), y = 0; y < c; y++)
        f[y] = arguments[y];
      var x = null;
      return (
        s.forEach(function (w) {
          if (x == null) {
            var g = w.apply(void 0, f);
            g != null && (x = g);
          }
        }),
        x
      );
    }
    return (0, r.default)(u);
  }
  e.exports = t.default;
})(Bc, Bc.exports);
const r1 = Te("nav-item"),
  nh = m.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        as: n = Ya,
        active: r,
        eventKey: o,
        disabled: i = !1,
        ...l
      },
      s,
    ) => {
      e = b(e, "nav-link");
      const [a, u] = Yp({ key: qa(o, l.href), active: r, disabled: i, ...l });
      return d.jsx(n, {
        ...l,
        ...a,
        ref: s,
        disabled: i,
        className: B(t, e, i && "disabled", u.isActive && "active"),
      });
    },
  );
nh.displayName = "NavLink";
const rh = m.forwardRef((e, t) => {
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
    } = Ha(e, { activeKey: "onSelect" }),
    y = b(r, "nav");
  let x,
    w,
    g = !1;
  const C = m.useContext(Cn),
    h = m.useContext(Ja);
  return (
    C
      ? ((x = C.bsPrefix), (g = s ?? !0))
      : h && ({ cardHeaderBsPrefix: w } = h),
    d.jsx(M0, {
      as: n,
      ref: t,
      activeKey: c,
      className: B(u, {
        [y]: !g,
        [`${x}-nav`]: g,
        [`${x}-nav-scroll`]: g && a,
        [`${w}-${o}`]: !!w,
        [`${y}-${o}`]: !!o,
        [`${y}-fill`]: i,
        [`${y}-justified`]: l,
      }),
      ...f,
    })
  );
});
rh.displayName = "Nav";
const o1 = Object.assign(rh, { Item: r1, Link: nh }),
  oh = m.forwardRef(({ bsPrefix: e, className: t, as: n, ...r }, o) => {
    e = b(e, "navbar-brand");
    const i = n || (r.href ? "a" : "span");
    return d.jsx(i, { ...r, ref: o, className: B(t, e) });
  });
oh.displayName = "NavbarBrand";
const ih = m.forwardRef(({ children: e, bsPrefix: t, ...n }, r) => {
  t = b(t, "navbar-collapse");
  const o = m.useContext(Cn);
  return d.jsx(Vg, {
    in: !!(o && o.expanded),
    ...n,
    children: d.jsx("div", { ref: r, className: t, children: e }),
  });
});
ih.displayName = "NavbarCollapse";
const lh = m.forwardRef(
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
    const { onToggle: a, expanded: u } = m.useContext(Cn) || {},
      c = Ae((f) => {
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
lh.displayName = "NavbarToggle";
var Us = new WeakMap(),
  Fc = function (t, n) {
    if (!(!t || !n)) {
      var r = Us.get(n) || new Map();
      Us.set(n, r);
      var o = r.get(t);
      return (
        o || ((o = n.matchMedia(t)), (o.refCount = 0), r.set(o.media, o)), o
      );
    }
  };
function i1(e, t) {
  t === void 0 && (t = typeof window > "u" ? void 0 : window);
  var n = Fc(e, t),
    r = m.useState(function () {
      return n ? n.matches : !1;
    }),
    o = r[0],
    i = r[1];
  return (
    zs(
      function () {
        var l = Fc(e, t);
        if (!l) return i(!1);
        var s = Us.get(t),
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
function l1(e) {
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
    var y = m.useMemo(
      function () {
        return Object.entries(c).reduce(function (x, w) {
          var g = w[0],
            C = w[1];
          return (
            (C === "up" || C === !0) && (x = n(x, i(g))),
            (C === "down" || C === !0) && (x = n(x, o(g))),
            x
          );
        }, "");
      },
      [JSON.stringify(c)],
    );
    return i1(y, u);
  }
  return l;
}
var s1 = l1({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 });
const a1 = Te("offcanvas-body"),
  u1 = { [Ze]: "show", [pt]: "show" },
  sh = m.forwardRef(
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
      d.jsx(Ga, {
        ref: a,
        addEndListener: Qa,
        in: r,
        mountOnEnter: o,
        unmountOnExit: i,
        appear: l,
        ...s,
        childRef: n.ref,
        children: (u, c) =>
          m.cloneElement(n, {
            ...c,
            className: B(
              t,
              n.props.className,
              (u === Ze || u === Yr) && `${e}-toggling`,
              u1[u],
            ),
          }),
      })
    ),
  );
sh.displayName = "OffcanvasToggling";
const ah = m.forwardRef(
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
    d.jsx(t1, {
      ref: i,
      ...o,
      className: B(t, e),
      closeLabel: n,
      closeButton: r,
    })
  ),
);
ah.displayName = "OffcanvasHeader";
const c1 = bi("h5"),
  f1 = Te("offcanvas-title", { Component: c1 });
function d1(e) {
  return d.jsx(sh, { ...e });
}
function p1(e) {
  return d.jsx(gi, { ...e });
}
const uh = m.forwardRef(
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
      onHide: y,
      container: x,
      autoFocus: w = !0,
      enforceFocus: g = !0,
      restoreFocus: C = !0,
      restoreFocusOptions: h,
      onEntered: p,
      onExit: v,
      onExiting: S,
      onEnter: j,
      onEntering: k,
      onExited: O,
      backdropClassName: T,
      manager: $,
      renderStaticNode: A = !1,
      ...ae
    },
    Ge,
  ) => {
    const Pe = m.useRef();
    e = b(e, "offcanvas");
    const { onToggle: ct } = m.useContext(Cn) || {},
      [Ot, Me] = m.useState(!1),
      G = s1(i || "xs", "up");
    m.useEffect(() => {
      Me(i ? l && !G : l);
    }, [l, i, G]);
    const R = Ae(() => {
        ct == null || ct(), y == null || y();
      }),
      _ = m.useMemo(() => ({ onHide: R }), [R]);
    function L() {
      return (
        $ ||
        (u
          ? (Pe.current ||
              (Pe.current = new eh({ handleContainerOverflow: !1 })),
            Pe.current)
          : e1())
      );
    }
    const z = (te, ...we) => {
        te && (te.style.visibility = "visible"), j == null || j(te, ...we);
      },
      M = (te, ...we) => {
        te && (te.style.visibility = ""), O == null || O(...we);
      },
      _e = m.useCallback(
        (te) => d.jsx("div", { ...te, className: B(`${e}-backdrop`, T) }),
        [T, e],
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
        !Ot && (i || A) && ie({}),
        d.jsx(th.Provider, {
          value: _,
          children: d.jsx(Y0, {
            show: Ot,
            ref: Ge,
            backdrop: s,
            container: x,
            keyboard: a,
            autoFocus: w,
            enforceFocus: g && !u,
            restoreFocus: C,
            restoreFocusOptions: h,
            onEscapeKeyDown: c,
            onShow: f,
            onHide: R,
            onEnter: z,
            onEntering: k,
            onEntered: p,
            onExit: v,
            onExiting: S,
            onExited: M,
            manager: L(),
            transition: d1,
            backdropTransition: p1,
            renderBackdrop: _e,
            renderDialog: ie,
          }),
        }),
      ],
    });
  },
);
uh.displayName = "Offcanvas";
const h1 = Object.assign(uh, { Body: a1, Header: ah, Title: f1 }),
  ch = m.forwardRef((e, t) => {
    const n = m.useContext(Cn);
    return d.jsx(h1, {
      ref: t,
      show: !!(n != null && n.expanded),
      ...e,
      renderStaticNode: !0,
    });
  });
ch.displayName = "NavbarOffcanvas";
const m1 = Te("navbar-text", { Component: "span" }),
  fh = m.forwardRef((e, t) => {
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
        onSelect: y,
        collapseOnSelect: x = !1,
        ...w
      } = Ha(e, { expanded: "onToggle" }),
      g = b(n, "navbar"),
      C = m.useCallback(
        (...v) => {
          y == null || y(...v), x && c && (f == null || f(!1));
        },
        [y, x, c, f],
      );
    w.role === void 0 && u !== "nav" && (w.role = "navigation");
    let h = `${g}-expand`;
    typeof r == "string" && (h = `${h}-${r}`);
    const p = m.useMemo(
      () => ({
        onToggle: () => (f == null ? void 0 : f(!c)),
        bsPrefix: g,
        expanded: !!c,
        expand: r,
      }),
      [g, c, r, f],
    );
    return d.jsx(Cn.Provider, {
      value: p,
      children: d.jsx(wi.Provider, {
        value: C,
        children: d.jsx(u, {
          ref: t,
          ...w,
          className: B(
            a,
            g,
            r && h,
            o && `${g}-${o}`,
            i && `bg-${i}`,
            s && `sticky-${s}`,
            l && `fixed-${l}`,
          ),
        }),
      }),
    });
  });
fh.displayName = "Navbar";
const Pl = Object.assign(fh, {
  Brand: oh,
  Collapse: ih,
  Offcanvas: ch,
  Text: m1,
  Toggle: lh,
});
function y1(e) {
  return e <= 0 ? "100%" : e < 1 ? `${e * 100}%` : `${e}%`;
}
const v1 = m.forwardRef(
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
        style: { ...o, ...(s && { "--bs-aspect-ratio": y1(r) }) },
        className: B(e, t, !s && `${e}-${r}`),
        children: m.Children.only(n),
      });
    },
  ),
  g1 = ({ notification: e }) => {
    if (e === null) return null;
    const t = e.type === "alert" ? "danger" : "success",
      n = { textAlign: "center", padding: 0, margin: 0 };
    return d.jsx(c0, {
      variant: t,
      style: n,
      id: "notification",
      "aria-label": e.type,
      children: e.message,
    });
  };
function dh(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: w1 } = Object.prototype,
  { getPrototypeOf: ou } = Object,
  Vi = ((e) => (t) => {
    const n = w1.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ut = (e) => ((e = e.toLowerCase()), (t) => Vi(t) === e),
  Ki = (e) => (t) => typeof t === e,
  { isArray: lr } = Array,
  Jr = Ki("undefined");
function x1(e) {
  return (
    e !== null &&
    !Jr(e) &&
    e.constructor !== null &&
    !Jr(e.constructor) &&
    He(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const ph = ut("ArrayBuffer");
function S1(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && ph(e.buffer)),
    t
  );
}
const C1 = Ki("string"),
  He = Ki("function"),
  hh = Ki("number"),
  Qi = (e) => e !== null && typeof e == "object",
  E1 = (e) => e === !0 || e === !1,
  Uo = (e) => {
    if (Vi(e) !== "object") return !1;
    const t = ou(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  k1 = ut("Date"),
  N1 = ut("File"),
  j1 = ut("Blob"),
  O1 = ut("FileList"),
  R1 = (e) => Qi(e) && He(e.pipe),
  T1 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (He(e.append) &&
          ((t = Vi(e)) === "formdata" ||
            (t === "object" &&
              He(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  P1 = ut("URLSearchParams"),
  _1 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function io(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), lr(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = i.length;
    let s;
    for (r = 0; r < l; r++) (s = i[r]), t.call(null, e[s], s, e);
  }
}
function mh(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const yh =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  vh = (e) => !Jr(e) && e !== yh;
function $s() {
  const { caseless: e } = (vh(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && mh(t, o)) || o;
      Uo(t[i]) && Uo(r)
        ? (t[i] = $s(t[i], r))
        : Uo(r)
        ? (t[i] = $s({}, r))
        : lr(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && io(arguments[r], n);
  return t;
}
const L1 = (e, t, n, { allOwnKeys: r } = {}) => (
    io(
      t,
      (o, i) => {
        n && He(o) ? (e[i] = dh(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  A1 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  I1 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  D1 = (e, t, n, r) => {
    let o, i, l;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (l = o[i]), (!r || r(l, e, t)) && !s[l] && ((t[l] = e[l]), (s[l] = !0));
      e = n !== !1 && ou(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  B1 = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  F1 = (e) => {
    if (!e) return null;
    if (lr(e)) return e;
    let t = e.length;
    if (!hh(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  z1 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && ou(Uint8Array)),
  M1 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  U1 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  $1 = ut("HTMLFormElement"),
  b1 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  zc = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  W1 = ut("RegExp"),
  gh = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    io(n, (o, i) => {
      let l;
      (l = t(o, i, e)) !== !1 && (r[i] = l || o);
    }),
      Object.defineProperties(e, r);
  },
  H1 = (e) => {
    gh(e, (t, n) => {
      if (He(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (He(r)) {
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
  V1 = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return lr(e) ? r(e) : r(String(e).split(t)), n;
  },
  K1 = () => {},
  Q1 = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  _l = "abcdefghijklmnopqrstuvwxyz",
  Mc = "0123456789",
  wh = { DIGIT: Mc, ALPHA: _l, ALPHA_DIGIT: _l + _l.toUpperCase() + Mc },
  G1 = (e = 16, t = wh.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function X1(e) {
  return !!(
    e &&
    He(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Y1 = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (Qi(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const i = lr(r) ? [] : {};
            return (
              io(r, (l, s) => {
                const a = n(l, o + 1);
                !Jr(a) && (i[s] = a);
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
  J1 = ut("AsyncFunction"),
  q1 = (e) => e && (Qi(e) || He(e)) && He(e.then) && He(e.catch),
  E = {
    isArray: lr,
    isArrayBuffer: ph,
    isBuffer: x1,
    isFormData: T1,
    isArrayBufferView: S1,
    isString: C1,
    isNumber: hh,
    isBoolean: E1,
    isObject: Qi,
    isPlainObject: Uo,
    isUndefined: Jr,
    isDate: k1,
    isFile: N1,
    isBlob: j1,
    isRegExp: W1,
    isFunction: He,
    isStream: R1,
    isURLSearchParams: P1,
    isTypedArray: z1,
    isFileList: O1,
    forEach: io,
    merge: $s,
    extend: L1,
    trim: _1,
    stripBOM: A1,
    inherits: I1,
    toFlatObject: D1,
    kindOf: Vi,
    kindOfTest: ut,
    endsWith: B1,
    toArray: F1,
    forEachEntry: M1,
    matchAll: U1,
    isHTMLForm: $1,
    hasOwnProperty: zc,
    hasOwnProp: zc,
    reduceDescriptors: gh,
    freezeMethods: H1,
    toObjectSet: V1,
    toCamelCase: b1,
    noop: K1,
    toFiniteNumber: Q1,
    findKey: mh,
    global: yh,
    isContextDefined: vh,
    ALPHABET: wh,
    generateString: G1,
    isSpecCompliantForm: X1,
    toJSONObject: Y1,
    isAsyncFn: J1,
    isThenable: q1,
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
    o && (this.response = o);
}
E.inherits(D, Error, {
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
      config: E.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const xh = D.prototype,
  Sh = {};
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
  Sh[e] = { value: e };
});
Object.defineProperties(D, Sh);
Object.defineProperty(xh, "isAxiosError", { value: !0 });
D.from = (e, t, n, r, o, i) => {
  const l = Object.create(xh);
  return (
    E.toFlatObject(
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
const Z1 = null;
function bs(e) {
  return E.isPlainObject(e) || E.isArray(e);
}
function Ch(e) {
  return E.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Uc(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = Ch(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function ew(e) {
  return E.isArray(e) && !e.some(bs);
}
const tw = E.toFlatObject(E, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Gi(e, t, n) {
  if (!E.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = E.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, C) {
        return !E.isUndefined(C[g]);
      },
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    l = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && E.isSpecCompliantForm(t);
  if (!E.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(w) {
    if (w === null) return "";
    if (E.isDate(w)) return w.toISOString();
    if (!a && E.isBlob(w))
      throw new D("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(w) || E.isTypedArray(w)
      ? a && typeof Blob == "function"
        ? new Blob([w])
        : Buffer.from(w)
      : w;
  }
  function c(w, g, C) {
    let h = w;
    if (w && !C && typeof w == "object") {
      if (E.endsWith(g, "{}"))
        (g = r ? g : g.slice(0, -2)), (w = JSON.stringify(w));
      else if (
        (E.isArray(w) && ew(w)) ||
        ((E.isFileList(w) || E.endsWith(g, "[]")) && (h = E.toArray(w)))
      )
        return (
          (g = Ch(g)),
          h.forEach(function (v, S) {
            !(E.isUndefined(v) || v === null) &&
              t.append(
                l === !0 ? Uc([g], S, i) : l === null ? g : g + "[]",
                u(v),
              );
          }),
          !1
        );
    }
    return bs(w) ? !0 : (t.append(Uc(C, g, i), u(w)), !1);
  }
  const f = [],
    y = Object.assign(tw, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: bs,
    });
  function x(w, g) {
    if (!E.isUndefined(w)) {
      if (f.indexOf(w) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(w),
        E.forEach(w, function (h, p) {
          (!(E.isUndefined(h) || h === null) &&
            o.call(t, h, E.isString(p) ? p.trim() : p, g, y)) === !0 &&
            x(h, g ? g.concat(p) : [p]);
        }),
        f.pop();
    }
  }
  if (!E.isObject(e)) throw new TypeError("data must be an object");
  return x(e), t;
}
function $c(e) {
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
function iu(e, t) {
  (this._pairs = []), e && Gi(e, this, t);
}
const Eh = iu.prototype;
Eh.append = function (t, n) {
  this._pairs.push([t, n]);
};
Eh.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, $c);
      }
    : $c;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function nw(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function kh(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || nw,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = E.isURLSearchParams(t) ? t.toString() : new iu(t, n).toString(r)),
    i)
  ) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class bc {
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
    E.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Nh = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  rw = typeof URLSearchParams < "u" ? URLSearchParams : iu,
  ow = typeof FormData < "u" ? FormData : null,
  iw = typeof Blob < "u" ? Blob : null,
  lw = {
    isBrowser: !0,
    classes: { URLSearchParams: rw, FormData: ow, Blob: iw },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  jh = typeof window < "u" && typeof document < "u",
  sw = ((e) => jh && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product,
  ),
  aw =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  uw = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: jh,
        hasStandardBrowserEnv: sw,
        hasStandardBrowserWebWorkerEnv: aw,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  lt = { ...uw, ...lw };
function cw(e, t) {
  return Gi(
    e,
    new lt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return lt.isNode && E.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function fw(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0],
  );
}
function dw(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function Oh(e) {
  function t(n, r, o, i) {
    let l = n[i++];
    if (l === "__proto__") return !0;
    const s = Number.isFinite(+l),
      a = i >= n.length;
    return (
      (l = !l && E.isArray(o) ? o.length : l),
      a
        ? (E.hasOwnProp(o, l) ? (o[l] = [o[l], r]) : (o[l] = r), !s)
        : ((!o[l] || !E.isObject(o[l])) && (o[l] = []),
          t(n, r, o[l], i) && E.isArray(o[l]) && (o[l] = dw(o[l])),
          !s)
    );
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const n = {};
    return (
      E.forEachEntry(e, (r, o) => {
        t(fw(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function pw(e, t, n) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const lo = {
  transitional: Nh,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = E.isObject(t);
      if ((i && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t)))
        return o ? JSON.stringify(Oh(t)) : t;
      if (
        E.isArrayBuffer(t) ||
        E.isBuffer(t) ||
        E.isStream(t) ||
        E.isFile(t) ||
        E.isBlob(t)
      )
        return t;
      if (E.isArrayBufferView(t)) return t.buffer;
      if (E.isURLSearchParams(t))
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
          return cw(t, this.formSerializer).toString();
        if ((s = E.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return Gi(
            s ? { "files[]": t } : t,
            a && new a(),
            this.formSerializer,
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), pw(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || lo.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (t && E.isString(t) && ((r && !this.responseType) || o)) {
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
  env: { FormData: lt.classes.FormData, Blob: lt.classes.Blob },
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
E.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  lo.headers[e] = {};
});
const hw = E.toObjectSet([
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
  mw = (e) => {
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
              !(!n || (t[n] && hw[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Wc = Symbol("internals");
function yr(e) {
  return e && String(e).trim().toLowerCase();
}
function $o(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map($o) : String(e);
}
function yw(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const vw = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ll(e, t, n, r, o) {
  if (E.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!E.isString(t))) {
    if (E.isString(r)) return t.indexOf(r) !== -1;
    if (E.isRegExp(r)) return r.test(t);
  }
}
function gw(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function ww(e, t) {
  const n = E.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, l) {
        return this[r].call(this, t, o, i, l);
      },
      configurable: !0,
    });
  });
}
class Ve {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(s, a, u) {
      const c = yr(a);
      if (!c) throw new Error("header name must be a non-empty string");
      const f = E.findKey(o, c);
      (!f || o[f] === void 0 || u === !0 || (u === void 0 && o[f] !== !1)) &&
        (o[f || a] = $o(s));
    }
    const l = (s, a) => E.forEach(s, (u, c) => i(u, c, a));
    return (
      E.isPlainObject(t) || t instanceof this.constructor
        ? l(t, n)
        : E.isString(t) && (t = t.trim()) && !vw(t)
        ? l(mw(t), n)
        : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = yr(t)), t)) {
      const r = E.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return yw(o);
        if (E.isFunction(n)) return n.call(this, o, r);
        if (E.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = yr(t)), t)) {
      const r = E.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ll(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(l) {
      if (((l = yr(l)), l)) {
        const s = E.findKey(r, l);
        s && (!n || Ll(r, r[s], s, n)) && (delete r[s], (o = !0));
      }
    }
    return E.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Ll(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      E.forEach(this, (o, i) => {
        const l = E.findKey(r, i);
        if (l) {
          (n[l] = $o(o)), delete n[i];
          return;
        }
        const s = t ? gw(i) : String(i).trim();
        s !== i && delete n[i], (n[s] = $o(o)), (r[s] = !0);
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
      E.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && E.isArray(r) ? r.join(", ") : r);
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
    const r = (this[Wc] = this[Wc] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(l) {
      const s = yr(l);
      r[s] || (ww(o, l), (r[s] = !0));
    }
    return E.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Ve.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
E.reduceDescriptors(Ve.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
E.freezeMethods(Ve);
function Al(e, t) {
  const n = this || lo,
    r = t || n,
    o = Ve.from(r.headers);
  let i = r.data;
  return (
    E.forEach(e, function (s) {
      i = s.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function Rh(e) {
  return !!(e && e.__CANCEL__);
}
function so(e, t, n) {
  D.call(this, e ?? "canceled", D.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
E.inherits(so, D, { __CANCEL__: !0 });
function xw(e, t, n) {
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
const Sw = lt.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, o, i) {
        const l = [e + "=" + encodeURIComponent(t)];
        E.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()),
          E.isString(r) && l.push("path=" + r),
          E.isString(o) && l.push("domain=" + o),
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
function Cw(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ew(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Th(e, t) {
  return e && !Cw(t) ? Ew(e, t) : t;
}
const kw = lt.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
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
          const s = E.isString(l) ? o(l) : l;
          return s.protocol === r.protocol && s.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function Nw(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function jw(e, t) {
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
        y = 0;
      for (; f !== o; ) (y += n[f++]), (f = f % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - l < t)) return;
      const x = c && u - c;
      return x ? Math.round((y * 1e3) / x) : void 0;
    }
  );
}
function Hc(e, t) {
  let n = 0;
  const r = jw(50, 250);
  return (o) => {
    const i = o.loaded,
      l = o.lengthComputable ? o.total : void 0,
      s = i - n,
      a = r(s),
      u = i <= l;
    n = i;
    const c = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: s,
      rate: a || void 0,
      estimated: a && l && u ? (l - i) / a : void 0,
      event: o,
    };
    (c[t ? "download" : "upload"] = !0), e(c);
  };
}
const Ow = typeof XMLHttpRequest < "u",
  Rw =
    Ow &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const i = Ve.from(e.headers).normalize();
        let { responseType: l, withXSRFToken: s } = e,
          a;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(a),
            e.signal && e.signal.removeEventListener("abort", a);
        }
        let c;
        if (E.isFormData(o)) {
          if (lt.hasStandardBrowserEnv || lt.hasStandardBrowserWebWorkerEnv)
            i.setContentType(!1);
          else if ((c = i.getContentType()) !== !1) {
            const [g, ...C] = c
              ? c
                  .split(";")
                  .map((h) => h.trim())
                  .filter(Boolean)
              : [];
            i.setContentType([g || "multipart/form-data", ...C].join("; "));
          }
        }
        let f = new XMLHttpRequest();
        if (e.auth) {
          const g = e.auth.username || "",
            C = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          i.set("Authorization", "Basic " + btoa(g + ":" + C));
        }
        const y = Th(e.baseURL, e.url);
        f.open(e.method.toUpperCase(), kh(y, e.params, e.paramsSerializer), !0),
          (f.timeout = e.timeout);
        function x() {
          if (!f) return;
          const g = Ve.from(
              "getAllResponseHeaders" in f && f.getAllResponseHeaders(),
            ),
            h = {
              data:
                !l || l === "text" || l === "json"
                  ? f.responseText
                  : f.response,
              status: f.status,
              statusText: f.statusText,
              headers: g,
              config: e,
              request: f,
            };
          xw(
            function (v) {
              n(v), u();
            },
            function (v) {
              r(v), u();
            },
            h,
          ),
            (f = null);
        }
        if (
          ("onloadend" in f
            ? (f.onloadend = x)
            : (f.onreadystatechange = function () {
                !f ||
                  f.readyState !== 4 ||
                  (f.status === 0 &&
                    !(f.responseURL && f.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(x);
              }),
          (f.onabort = function () {
            f &&
              (r(new D("Request aborted", D.ECONNABORTED, e, f)), (f = null));
          }),
          (f.onerror = function () {
            r(new D("Network Error", D.ERR_NETWORK, e, f)), (f = null);
          }),
          (f.ontimeout = function () {
            let C = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const h = e.transitional || Nh;
            e.timeoutErrorMessage && (C = e.timeoutErrorMessage),
              r(
                new D(
                  C,
                  h.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED,
                  e,
                  f,
                ),
              ),
              (f = null);
          }),
          lt.hasStandardBrowserEnv &&
            (s && E.isFunction(s) && (s = s(e)), s || (s !== !1 && kw(y))))
        ) {
          const g =
            e.xsrfHeaderName && e.xsrfCookieName && Sw.read(e.xsrfCookieName);
          g && i.set(e.xsrfHeaderName, g);
        }
        o === void 0 && i.setContentType(null),
          "setRequestHeader" in f &&
            E.forEach(i.toJSON(), function (C, h) {
              f.setRequestHeader(h, C);
            }),
          E.isUndefined(e.withCredentials) ||
            (f.withCredentials = !!e.withCredentials),
          l && l !== "json" && (f.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            f.addEventListener("progress", Hc(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            f.upload &&
            f.upload.addEventListener("progress", Hc(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((a = (g) => {
              f &&
                (r(!g || g.type ? new so(null, e, f) : g),
                f.abort(),
                (f = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(a),
            e.signal &&
              (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
        const w = Nw(y);
        if (w && lt.protocols.indexOf(w) === -1) {
          r(new D("Unsupported protocol " + w + ":", D.ERR_BAD_REQUEST, e));
          return;
        }
        f.send(o || null);
      });
    },
  Ws = { http: Z1, xhr: Rw };
E.forEach(Ws, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Vc = (e) => `- ${e}`,
  Tw = (e) => E.isFunction(e) || e === null || e === !1,
  Ph = {
    getAdapter: (e) => {
      e = E.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let l;
        if (
          ((r = n),
          !Tw(n) && ((r = Ws[(l = String(n)).toLowerCase()]), r === void 0))
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
              i.map(Vc).join(`
`)
            : " " + Vc(i[0])
          : "as no adapter specified";
        throw new D(
          "There is no suitable adapter to dispatch the request " + l,
          "ERR_NOT_SUPPORT",
        );
      }
      return r;
    },
    adapters: Ws,
  };
function Il(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new so(null, e);
}
function Kc(e) {
  return (
    Il(e),
    (e.headers = Ve.from(e.headers)),
    (e.data = Al.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Ph.getAdapter(e.adapter || lo.adapter)(e).then(
      function (r) {
        return (
          Il(e),
          (r.data = Al.call(e, e.transformResponse, r)),
          (r.headers = Ve.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Rh(r) ||
            (Il(e),
            r &&
              r.response &&
              ((r.response.data = Al.call(e, e.transformResponse, r.response)),
              (r.response.headers = Ve.from(r.response.headers)))),
          Promise.reject(r)
        );
      },
    )
  );
}
const Qc = (e) => (e instanceof Ve ? { ...e } : e);
function er(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, f) {
    return E.isPlainObject(u) && E.isPlainObject(c)
      ? E.merge.call({ caseless: f }, u, c)
      : E.isPlainObject(c)
      ? E.merge({}, c)
      : E.isArray(c)
      ? c.slice()
      : c;
  }
  function o(u, c, f) {
    if (E.isUndefined(c)) {
      if (!E.isUndefined(u)) return r(void 0, u, f);
    } else return r(u, c, f);
  }
  function i(u, c) {
    if (!E.isUndefined(c)) return r(void 0, c);
  }
  function l(u, c) {
    if (E.isUndefined(c)) {
      if (!E.isUndefined(u)) return r(void 0, u);
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
    headers: (u, c) => o(Qc(u), Qc(c), !0),
  };
  return (
    E.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const f = a[c] || o,
        y = f(e[c], t[c], c);
      (E.isUndefined(y) && f !== s) || (n[c] = y);
    }),
    n
  );
}
const _h = "1.6.8",
  lu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    lu[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const Gc = {};
lu.transitional = function (t, n, r) {
  function o(i, l) {
    return (
      "[Axios v" +
      _h +
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
        !Gc[l] &&
        ((Gc[l] = !0),
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
function Pw(e, t, n) {
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
const Hs = { assertOptions: Pw, validators: lu },
  Tt = Hs.validators;
class fn {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new bc(), response: new bc() });
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
        r.stack
          ? i &&
            !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
            (r.stack +=
              `
` + i)
          : (r.stack = i);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = er(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      Hs.assertOptions(
        r,
        {
          silentJSONParsing: Tt.transitional(Tt.boolean),
          forcedJSONParsing: Tt.transitional(Tt.boolean),
          clarifyTimeoutError: Tt.transitional(Tt.boolean),
        },
        !1,
      ),
      o != null &&
        (E.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Hs.assertOptions(
              o,
              { encode: Tt.function, serialize: Tt.function },
              !0,
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let l = i && E.merge(i.common, i[n.method]);
    i &&
      E.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (w) => {
          delete i[w];
        },
      ),
      (n.headers = Ve.concat(l, i));
    const s = [];
    let a = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
        ((a = a && g.synchronous), s.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (g) {
      u.push(g.fulfilled, g.rejected);
    });
    let c,
      f = 0,
      y;
    if (!a) {
      const w = [Kc.bind(this), void 0];
      for (
        w.unshift.apply(w, s),
          w.push.apply(w, u),
          y = w.length,
          c = Promise.resolve(n);
        f < y;

      )
        c = c.then(w[f++], w[f++]);
      return c;
    }
    y = s.length;
    let x = n;
    for (f = 0; f < y; ) {
      const w = s[f++],
        g = s[f++];
      try {
        x = w(x);
      } catch (C) {
        g.call(this, C);
        break;
      }
    }
    try {
      c = Kc.call(this, x);
    } catch (w) {
      return Promise.reject(w);
    }
    for (f = 0, y = u.length; f < y; ) c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = er(this.defaults, t);
    const n = Th(t.baseURL, t.url);
    return kh(n, t.params, t.paramsSerializer);
  }
}
E.forEach(["delete", "get", "head", "options"], function (t) {
  fn.prototype[t] = function (n, r) {
    return this.request(
      er(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
E.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, l, s) {
      return this.request(
        er(s || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: l,
        }),
      );
    };
  }
  (fn.prototype[t] = n()), (fn.prototype[t + "Form"] = n(!0));
});
class su {
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
        r.reason || ((r.reason = new so(i, l, s)), n(r.reason));
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
  static source() {
    let t;
    return {
      token: new su(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
function _w(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Lw(e) {
  return E.isObject(e) && e.isAxiosError === !0;
}
const Vs = {
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
Object.entries(Vs).forEach(([e, t]) => {
  Vs[t] = e;
});
function Lh(e) {
  const t = new fn(e),
    n = dh(fn.prototype.request, t);
  return (
    E.extend(n, fn.prototype, t, { allOwnKeys: !0 }),
    E.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Lh(er(e, o));
    }),
    n
  );
}
const ee = Lh(lo);
ee.Axios = fn;
ee.CanceledError = so;
ee.CancelToken = su;
ee.isCancel = Rh;
ee.VERSION = _h;
ee.toFormData = Gi;
ee.AxiosError = D;
ee.Cancel = ee.CanceledError;
ee.all = function (t) {
  return Promise.all(t);
};
ee.spread = _w;
ee.isAxiosError = Lw;
ee.mergeConfig = er;
ee.AxiosHeaders = Ve;
ee.formToJSON = (e) => Oh(E.isHTMLForm(e) ? new FormData(e) : e);
ee.getAdapter = Ph.getAdapter;
ee.HttpStatusCode = Vs;
ee.default = ee;
const Aw = "/api/contactforms",
  Iw = { create: async (e) => (await ee.post(Aw, e)).data },
  Dw = () => {
    const [e, t] = m.useState(""),
      [n, r] = m.useState(""),
      [o, i] = m.useState(null),
      l = (c, f = "info") => {
        i({ message: c, type: f }),
          setTimeout(() => {
            i(null);
          }, 3e3);
      },
      s = async (c) => {
        Iw.create(c)
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
      children: d.jsx(jt, {
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
                d.jsx(g1, { notification: o }),
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
                    d.jsx(Zn, {
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
  Bw = () => {
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
            d.jsxs(vn, {
              to: "/contactforms",
              "aria-label": "Link to Contact page",
              children: [" ", "here."],
            }),
          ],
        }),
      ],
    });
  },
  Fw = () => {
    const [e, t] = m.useState(!1),
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
          children: d.jsx(Zn, {
            variant: "primary",
            onClick: n,
            style: r.button,
            "aria-label": "Privacy Policy",
            className: "btn-custom",
            children: "Privacy Policy",
          }),
        }),
        e ? d.jsx(Bw, {}) : null,
      ],
    });
  },
  zw = () => {
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
      children: d.jsx(jt, {
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
  Mw = "/assets/ProfilePicture-DlqNMbGj.jpg",
  Uw = () => {
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
  $w = () => {
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
      children: d.jsx(jt, {
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
                    src: Mw,
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
                    d.jsx(Uw, {}),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  bw = "/assets/TeckbuffBanner-MpWsUAHL.png",
  Ww = () => {
    const [e, t] = m.useState(window.innerWidth),
      [n, r] = m.useState(!1);
    m.useEffect(() => {
      const i = () => t(window.innerWidth);
      return (
        window.addEventListener("resize", i),
        () => {
          window.removeEventListener("resize", i);
        }
      );
    }, []),
      m.useEffect(() => {
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
              src: bw,
              alt: "My Banner",
              style: o.image,
              "aria-label": "Banner for TeckBuff.com",
            }),
        }),
        d.jsx("div", { className: "line" }),
      ],
    });
  },
  Hw = () => {
    const { pathname: e } = ir();
    return (
      m.useEffect(() => {
        window.scrollTo(0, 0);
      }, [e]),
      null
    );
  },
  Vw = () => {
    const [e, t] = m.useState(!1),
      n = {
        navStyle: { fontSize: 26, color: "#0047ab", margin: 15 },
        navbar: { marginBottom: 60, marginTop: 15 },
      };
    return d.jsx(Pl, {
      expanded: e,
      onToggle: t,
      collapseOnSelect: !0,
      expand: "lg",
      className: "text-center",
      style: n.navbar,
      children: d.jsxs("div", {
        className: "container-fluid",
        children: [
          d.jsx(Pl.Toggle, {
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
          d.jsx(Pl.Collapse, {
            id: "basic-navbar-nav justify-content-center",
            onClick: () => t(!1),
            children: d.jsx("div", {
              className: "mx-auto",
              children: d.jsxs(o1, {
                className: "me-auto mt-2 justify-content-center mx-auto",
                children: [
                  d.jsx(kn, {
                    to: "/",
                    style: n.navStyle,
                    "aria-label": "Link to Homepage",
                    children: "Home",
                  }),
                  d.jsx(kn, {
                    to: "/articles",
                    style: n.navStyle,
                    "aria-label": "Link to Articles and Tech Content page",
                    children: "Articles",
                  }),
                  d.jsx(kn, {
                    to: "/portfolio",
                    style: n.navStyle,
                    "aria-label": "Link to Portfolio page",
                    children: "Portfolio",
                  }),
                  d.jsx(kn, {
                    to: "/profile",
                    style: n.navStyle,
                    "aria-label": "Link to Profile page",
                    children: "Profile",
                  }),
                  d.jsx(kn, {
                    to: "/certifications",
                    style: n.navStyle,
                    "aria-label": "Link to Certifications page",
                    children: "Certifications",
                  }),
                  d.jsx(kn, {
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
  Kw = () => {
    const e = { section: { textAlign: "center", padding: 50, margin: 50 } };
    return d.jsxs("section", {
      className: "not-found",
      style: e.section,
      children: [
        d.jsx("h2", {
          children: "Oops page not found, please try a different URL.",
        }),
        d.jsx(vn, {
          to: "/",
          "aria-label": "Link to Homepage",
          children: d.jsx("h3", { children: "Return to Homepage" }),
        }),
      ],
    });
  },
  Qw = "/assets/WebApplicationPic-Dgsdj6Xm.png",
  Gw = () => {
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
      children: d.jsx(jt, {
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
                    src: Qw,
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
                    d.jsx(vn, {
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
  Xw = "/assets/ConsultationTeckbuff-BlJzIGUY.png",
  Yw = () => {
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
      children: d.jsx(jt, {
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
                    src: Xw,
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
                    d.jsx(vn, {
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
                    d.jsx(vn, {
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
  Jw = "/assets/AIServices-StH9hzLc.png",
  qw = () => {
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
      children: d.jsx(jt, {
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
                    src: Jw,
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
                    d.jsx(vn, {
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
  Zw = () => {
    const e = {
      services: { display: "flex", flexDirection: "column", gap: "2rem" },
    };
    return d.jsxs("section", {
      style: e.services,
      className: "services",
      children: [d.jsx(Gw, {}), d.jsx(qw, {}), d.jsx(Yw, {})],
    });
  },
  ex = "/api/techcontents",
  tx = {
    getAll: async () => {
      try {
        return (await ee.get(ex)).data;
      } catch (e) {
        throw (console.error("Failed to fetch articles:", e), e);
      }
    },
  },
  nx = () => {
    const [e, t] = m.useState({}),
      [n, r] = m.useState([]),
      o = (a) => {
        t((u) => ({ ...u, [a]: !u[a] }));
      },
      i = async () => {
        const a = await tx.getAll();
        r(a);
      };
    m.useEffect(() => {
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
      children: d.jsx(jt, {
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
                        d.jsx(Zn, {
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
  rx = "/api/portfolioitems",
  ox = {
    getAll: async () => {
      try {
        return (await ee.get(rx)).data;
      } catch (e) {
        throw (console.error("Failed to fetch portfolio:", e), e);
      }
    },
  },
  ix = ({ portfolioItem: e }) => {
    const [t, n] = m.useState(!1),
      r = m.useRef(null),
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
      m.useEffect(() => {
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
      d.jsx(jt, {
        children: d.jsxs(H, {
          className: "my-3",
          style: o.cardStyle,
          children: [
            d.jsx(H.Header, {
              children: d.jsx("h2", { style: o.header, children: e.title }),
            }),
            d.jsxs(H.Body, {
              children: [
                d.jsx(v1, {
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
                      d.jsx(Zn, {
                        variant: "outline-secondary",
                        href: e.githubUrl,
                        target: "_blank",
                        className: "mr-2",
                        children: "GitHub",
                      }),
                    d.jsx(Zn, {
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
  lx = () => {
    const [e, t] = m.useState([]);
    m.useEffect(() => {
      (async () => {
        try {
          const o = await ox.getAll();
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
      children: e.map((r) => d.jsx(ix, { portfolioItem: r }, r.id)),
    });
  },
  sx = () => {
    const e = {
      app: { fontFamily: "Arial Unicode MS" },
      cookie: { background: "#333" },
      button: { color: "#fff", background: "#0047ab", fontSize: "13px" },
    };
    return d.jsx("main", {
      children: d.jsxs("div", {
        className: "app",
        children: [
          d.jsx(Ww, {}),
          d.jsx(Vw, {}),
          d.jsx(Hw, {}),
          d.jsxs(Qv, {
            children: [
              d.jsx(Pt, { path: "/", element: d.jsx(Zw, {}) }),
              d.jsx(Pt, { path: "/profile", element: d.jsx($w, {}) }),
              d.jsx(Pt, { path: "/articles", element: d.jsx(nx, {}) }),
              d.jsx(Pt, { path: "/portfolio", element: d.jsx(lx, {}) }),
              d.jsx(Pt, { path: "/certifications", element: d.jsx(zw, {}) }),
              d.jsx(Pt, { path: "/contactforms", element: d.jsx(Dw, {}) }),
              d.jsx(Pt, { path: "*", element: d.jsx(Kw, {}) }),
            ],
          }),
          d.jsx(Fw, {}),
          d.jsx(Ep, {
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
Dl.createRoot(document.getElementById("root")).render(
  d.jsx(Zv, { children: d.jsx(sx, {}) }),
);
