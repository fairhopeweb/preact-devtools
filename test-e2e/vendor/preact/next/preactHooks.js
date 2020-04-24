!(function (n, t) {
	"object" == typeof exports && "undefined" != typeof module
		? t(exports, require("preact"))
		: "function" == typeof define && define.amd
		? define(["exports", "preact"], t)
		: t((n.preactHooks = {}), n.preact);
})(this, function (n, t) {
	var u,
		i,
		o,
		r = 0,
		f = [],
		e = t.options.__r,
		c = t.options.diffed,
		a = t.options.__c,
		v = t.options.unmount;
	function p(n, u) {
		t.options.__h && t.options.__h(i, n, r || u), (r = 0);
		var o = i.__H || (i.__H = { __: [], __h: [] });
		return n >= o.__.length && o.__.push({}), o.__[n];
	}
	function d(n) {
		return (r = 1), y(q, n);
	}
	function y(n, t, o) {
		var r = p(u++, 2);
		return (
			r.__c ||
				((r.__c = i),
				(r.__ = [
					o ? o(t) : q(void 0, t),
					function (t) {
						var u = n(r.__[0], t);
						r.__[0] !== u && ((r.__[0] = u), r.__c.setState({}));
					},
				])),
			r.__
		);
	}
	function s(n, o) {
		var r = p(u++, 4);
		!t.options.__s && T(r.__H, o) && ((r.__ = n), (r.__H = o), i.__h.push(r));
	}
	function l(n, t) {
		var i = p(u++, 7);
		return T(i.__H, t) ? ((i.__H = t), (i.__h = n), (i.__ = n())) : i.__;
	}
	function m() {
		f.some(function (n) {
			if (n.__P)
				try {
					n.__H.__h.forEach(h), n.__H.__h.forEach(x), (n.__H.__h = []);
				} catch (u) {
					return (n.__H.__h = []), t.options.__e(u, n.__v), !0;
				}
		}),
			(f = []);
	}
	function h(n) {
		"function" == typeof n.t && n.t();
	}
	function x(n) {
		n.t = n.__();
	}
	function T(n, t) {
		return (
			!n ||
			t.some(function (t, u) {
				return t !== n[u];
			})
		);
	}
	function q(n, t) {
		return "function" == typeof t ? t(n) : t;
	}
	(t.options.__r = function (n) {
		e && e(n), (u = 0);
		var t = (i = n.__c).__H;
		t && (t.__h.forEach(h), t.__h.forEach(x), (t.__h = []));
	}),
		(t.options.diffed = function (n) {
			c && c(n);
			var u = n.__c;
			u &&
				u.__H &&
				u.__H.__h.length &&
				((1 !== f.push(u) && o === t.options.requestAnimationFrame) ||
					(
						(o = t.options.requestAnimationFrame) ||
						function (n) {
							var t,
								u = function () {
									clearTimeout(i), cancelAnimationFrame(t), setTimeout(n);
								},
								i = setTimeout(u, 100);
							"undefined" != typeof window && (t = requestAnimationFrame(u));
						}
					)(m));
		}),
		(t.options.__c = function (n, u) {
			u.some(function (n) {
				try {
					n.__h.forEach(h),
						(n.__h = n.__h.filter(function (n) {
							return !n.__ || x(n);
						}));
				} catch (i) {
					u.some(function (n) {
						n.__h && (n.__h = []);
					}),
						(u = []),
						t.options.__e(i, n.__v);
				}
			}),
				a && a(n, u);
		}),
		(t.options.unmount = function (n) {
			v && v(n);
			var u = n.__c;
			if (u && u.__H)
				try {
					u.__H.__.forEach(function (n) {
						return n.t && n.t();
					});
				} catch (n) {
					t.options.__e(n, u.__v);
				}
		}),
		(n.useState = d),
		(n.useReducer = y),
		(n.useEffect = function (n, o) {
			var r = p(u++, 3);
			!t.options.__s &&
				T(r.__H, o) &&
				((r.__ = n), (r.__H = o), i.__H.__h.push(r));
		}),
		(n.useLayoutEffect = s),
		(n.useRef = function (n) {
			return (
				(r = 5),
				l(function () {
					return { current: n };
				}, [])
			);
		}),
		(n.useImperativeHandle = function (n, t, u) {
			(r = 6),
				s(
					function () {
						"function" == typeof n ? n(t()) : n && (n.current = t());
					},
					null == u ? u : u.concat(n),
				);
		}),
		(n.useMemo = l),
		(n.useCallback = function (n, t) {
			return (
				(r = 8),
				l(function () {
					return n;
				}, t)
			);
		}),
		(n.useContext = function (n) {
			var t = i.context[n.__c],
				o = p(u++, 9);
			return (
				(o.__c = n),
				t ? (null == o.__ && ((o.__ = !0), t.sub(i)), t.props.value) : n.__
			);
		}),
		(n.useDebugValue = function (n, u) {
			t.options.useDebugValue && t.options.useDebugValue(u ? u(n) : n);
		}),
		(n.useErrorBoundary = function (n) {
			var t = p(u++, 10),
				o = d();
			return (
				(t.__ = n),
				i.componentDidCatch ||
					(i.componentDidCatch = function (n) {
						t.__ && t.__(n), o[1](n);
					}),
				[
					o[0],
					function () {
						o[1](void 0);
					},
				]
			);
		});
});
//# sourceMappingURL=hooks.umd.js.map
