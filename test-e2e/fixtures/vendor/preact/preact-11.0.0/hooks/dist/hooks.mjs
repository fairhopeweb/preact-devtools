import { options as n } from 'preact';
let t, o;
Promise.prototype.then.bind(Promise.resolve());
let c,
	u = 0,
	e = [],
	r = n.__b,
	i = n.__r,
	f = n.diffed,
	l = n.__c,
	s = n.unmount;
function m(t, c) {
	console.log('CALL OPTS', n);
	n.__h && n.__h(o, t, u || c), (u = 0);
	const e = o.data.__H || (o.data.__H = { __: [], __h: [] });
	return t >= e.__.length && e.__.push({}), e.__[t];
}
function a(n) {
	return (u = 1), p(z, n);
}
function p(n, c, u) {
	const e = m(t++, 2);
	return (
		(e.t = n),
		e.__i ||
			((e.__ = [
				u ? u(c) : z(void 0, c),
				(n) => {
					const t = e.t(e.__[0], n);
					e.__[0] !== t && ((e.__ = [t, e.__[1]]), e.__i.rerender(e.__i));
				}
			]),
			(e.__i = o)),
		e.__
	);
}
function y(c, u) {
	const e = m(t++, 3);
	!n.__s && w(e.__H, u) && ((e.__ = c), (e.__H = u), o.data.__H.__h.push(e));
}
function h(c, u) {
	const e = m(t++, 4);
	!n.__s &&
		w(e.__H, u) &&
		((e.__ = c), (e.__H = u), null == o.__h && (o.__h = []), o.__h.push(e));
}
function _(n) {
	return (u = 5), v(() => ({ current: n }), []);
}
function d(n, t, o) {
	(u = 6),
		h(
			() => {
				'function' == typeof n ? n(t()) : n && (n.current = t());
			},
			null == o ? o : o.concat(n)
		);
}
function v(n, o) {
	const c = m(t++, 7);
	return w(c.__H, o) && ((c.__ = n()), (c.__H = o), (c.__h = n)), c.__;
}
function A(n, t) {
	return (u = 8), v(() => n, t);
}
function F(n) {
	const c = (function (n) {
			let t = o.c,
				c = o.__;
			for (; null == t && c; ) (t = c.c), (c = c.__);
			return t;
		})()[n.__c],
		u = m(t++, 9);
	return (
		(u.c = n),
		c ? (null == u.__ && ((u.__ = !0), c.s.add(o)), c.props.value) : n.__
	);
}
function T(t, o) {
	n.useDebugValue && n.useDebugValue(o ? o(t) : t);
}
(n.__b = (n, t) => {
	(o = null), r && r(n, t);
}),
	(n.__r = (n) => {
		i && i(n),
			(o = n),
			(t = 0),
			o.data &&
				o.data.__H &&
				(o.data.__H.__h.forEach(j),
				o.data.__H.__h.forEach(k),
				(o.data.__H.__h = []));
	}),
	(n.diffed = (t) => {
		f && f(t),
			t.data &&
				t.data.__H &&
				t.data.__H.__h.length &&
				((1 !== e.push(t) && c === n.requestAnimationFrame) ||
					((c = n.requestAnimationFrame), (c || g)(x)));
	}),
	(n.__c = (t, o) => {
		o.some((t) => {
			try {
				t.__h.forEach(j), (t.__h = t.__h.filter((n) => !n.__ || k(n)));
			} catch (c) {
				o.some((n) => {
					n.__h && (n.__h = []);
				}),
					(o = []),
					n.__e(c, t);
			}
		}),
			l && l(t, o);
	}),
	(n.unmount = (t) => {
		if ((s && s(t), t.data && t.data.__H)) {
			let o;
			t.data.__H.__.forEach((n) => {
				try {
					j(n);
				} catch (n) {
					o = n;
				}
			}),
				o && n.__e(o, t);
		}
	});
const q = n.__e;
function P(n) {
	const c = m(t++, 10),
		u = a();
	return (
		(c.__ = n),
		o.data.__e ||
			(o.data.__e = (n) => {
				c.__ && c.__(n), u[1](n);
			}),
		[
			u[0],
			() => {
				u[1](void 0);
			}
		]
	);
}
function x() {
	let t;
	for (e.sort((n, t) => n.__b - t.__b); (t = e.pop()); )
		if (2048 & ~t.flags)
			try {
				t.data.__H.__h.forEach(j),
					t.data.__H.__h.forEach(k),
					(t.data.__H.__h = []);
			} catch (o) {
				(t.data.__H.__h = []), n.__e(o, t);
			}
}
n.__e = function (n, t) {
	let o = t;
	for (; (o = o.__); ) if (o.data && o.data.__e) return o.data.__e(n, t);
	q(n, t);
};
let b = 'function' == typeof requestAnimationFrame;
function g(n) {
	const t = () => {
			clearTimeout(o), b && cancelAnimationFrame(c), setTimeout(n);
		},
		o = setTimeout(t, 100);
	let c;
	b && (c = requestAnimationFrame(t));
}
function j(n) {
	const t = o;
	let c = n.__c;
	'function' == typeof c && ((n.__c = void 0), c()), (o = t);
}
function k(n) {
	const t = o;
	(n.__c = n.__()), (o = t);
}
function w(n, t) {
	return !n || n.length !== t.length || t.some((t, o) => t !== n[o]);
}
function z(n, t) {
	return 'function' == typeof t ? t(n) : t;
}
export {
	A as useCallback,
	F as useContext,
	T as useDebugValue,
	y as useEffect,
	P as useErrorBoundary,
	d as useImperativeHandle,
	h as useLayoutEffect,
	v as useMemo,
	p as useReducer,
	_ as useRef,
	a as useState
};
//# sourceMappingURL=hooks.mjs.map
console.log('MJS');
