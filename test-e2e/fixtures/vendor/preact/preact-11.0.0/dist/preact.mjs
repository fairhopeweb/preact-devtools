const n = [],
	l = {
		__e(n, l) {
			for (; (l = l.__); )
				if (28 & l.flags && 1024 & ~l.flags)
					try {
						if (
							(l.type.getDerivedStateFromError &&
								l.__c.setState(l.type.getDerivedStateFromError(n)),
							l.__c.componentDidCatch && l.__c.componentDidCatch(n),
							16384 & l.flags)
						)
							return void (l.flags |= 512);
					} catch (l) {
						n = l;
					}
			throw n;
		}
	};
function t(n, l) {
	null == n.__h && (n.__h = []), n.__h.push(l);
}
function e(n, t) {
	l.__c && l.__c(t, n),
		n.some((t) => {
			try {
				for (n = t.__h.length; n--; ) t.__h.shift()();
			} catch (n) {
				l.__e(n, t);
			}
		});
}
let u = 0;
function i(n, l, t) {
	let e,
		u,
		i,
		f = {};
	for (i in l)
		'key' == i ? (e = l[i]) : 'ref' == i ? (u = l[i]) : (f[i] = l[i]);
	if (arguments.length > 3)
		for (t = [t], i = 3; arguments.length > i; i++) t.push(arguments[i]);
	return arguments.length > 2 && (f.children = t), r(n, f, e, u, 0);
}
function r(n, t, e, i, r) {
	const f = {
		type: n,
		props: t,
		key: e,
		ref: i,
		constructor: void 0,
		__v: r || ++u
	};
	return null != l.vnode && l.vnode(f), f;
}
function f(n) {
	return null == n || 'boolean' == typeof n
		? null
		: 'object' == typeof n
		? Array.isArray(n)
			? r(c, { children: n }, null, null, 0)
			: n
		: 'function' == typeof n
		? n
		: n + '';
}
function o() {
	return { current: null };
}
function c(n) {
	return n.children;
}
const s = (n) => null != n && void 0 === n.constructor;
function h(n, t, e, u) {
	if (n !== t) {
		n && h(null, n, null, u);
		try {
			'function' == typeof t ? t(e) : t && (t.current = e);
		} catch (n) {
			l.__e(n, u);
		}
	}
}
function a(n, l, t) {
	'-' === l[0] ? n.style.setProperty(l, t) : (n.style[l] = null == t ? '' : t);
}
function y(n, l, t, e, u) {
	let i;
	n: if ('style' === l)
		if ('string' == typeof t) a(n, 'cssText', t);
		else {
			if (('string' == typeof e && a(n, 'cssText', (e = '')), e))
				for (l in e) (t && l in t) || a(n, l, '');
			for (l in t) (e && t[l] === e[l]) || a(n, l, t[l]);
		}
	else if ('o' === l[0] && 'n' === l[1])
		(i = l !== (l = l.replace(/Capture$/, ''))),
			(l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2)),
			n.l || (n.l = {}),
			(n.l[l + i] = t),
			t
				? e || n.addEventListener(l, i ? p : d, i)
				: n.removeEventListener(l, i ? p : d, i);
	else if ('dangerouslySetInnerHTML' !== l) {
		if (u) l = l.replace(/xlink[H:h]/, 'h').replace(/sName$/, 's');
		else if (
			'href' !== l &&
			'list' !== l &&
			'form' !== l &&
			'tabIndex' !== l &&
			'download' !== l &&
			l in n
		)
			try {
				n[l] = null == t ? '' : t;
				break n;
			} catch (n) {}
		'function' == typeof t ||
			(null != t && (!1 !== t || ('a' === l[0] && 'r' === l[1]))
				? n.setAttribute(l, t)
				: n.removeAttribute(l));
	}
}
function d(n) {
	this.l[n.type + !1](l.event ? l.event(n) : n),
		this.t &&
			(null == this.value ||
				('input' !== n.type && 'change' !== n.type) ||
				(this.value = this.u),
			null != this.checked && 'change' === n.type && (this.checked = this.u));
}
function p(n) {
	this.l[n.type + !0](l.event ? l.event(n) : n);
}
function _(n, t, e, u) {
	let i,
		r,
		f = t.type,
		o = n ? n.props : t.props;
	return (
		t && t.__c
			? (i = t.__c)
			: ((t.__c = i = {
					props: o,
					context: u,
					forceUpdate: t.rerender.bind(null, t)
			  }),
			  (t.flags |= 16384)),
		n && n.__v === t.__v
			? ((i.props = o), void (t.flags |= 32768))
			: ((i.context = u),
			  (t.props = i.props = o),
			  (r = l.__r) && r(t),
			  (t.flags &= -16385),
			  (i.__i = t),
			  (r = f.call(i, i.props, i.context)),
			  null != i.getChildContext &&
					(t.c = Object.assign({}, e, i.getChildContext())),
			  r)
	);
}
function b(n, e, u, i) {
	let r,
		f,
		o,
		c,
		s,
		h,
		a = e.type,
		y = n ? n.props : e.props;
	if (
		(e && e.__c
			? (r = e.__c)
			: ((e.__c = r = new a(y, i)),
			  r.state || (r.state = {}),
			  (f = !0),
			  (e.flags |= 16384)),
		null == r.__s && (r.__s = r.state),
		null != a.getDerivedStateFromProps &&
			(r.__s == r.state && (r.__s = Object.assign({}, r.__s)),
			Object.assign(r.__s, a.getDerivedStateFromProps(y, r.__s))),
		(o = r.props),
		(c = r.state),
		f)
	)
		null == a.getDerivedStateFromProps &&
			null != r.componentWillMount &&
			r.componentWillMount(),
			null != r.componentDidMount && t(e, r.componentDidMount.bind(r));
	else {
		if (
			(null == a.getDerivedStateFromProps &&
				y !== o &&
				null != r.componentWillReceiveProps &&
				r.componentWillReceiveProps(y, i),
			(!(8192 & e.flags) &&
				null != r.shouldComponentUpdate &&
				!1 === r.shouldComponentUpdate(y, r.__s, i)) ||
				(n && n.__v === e.__v))
		)
			return (r.props = y), (r.state = r.__s), void (e.flags |= 32768);
		null != r.componentWillUpdate && r.componentWillUpdate(y, r.__s, i);
	}
	return (
		(r.context = i),
		(e.props = r.props = y),
		(r.state = r.__s),
		(h = l.__r) && h(e),
		(e.flags &= -16385),
		(r.__i = e),
		(h = r.render(r.props, r.state, r.context)),
		(r.state = r.__s),
		null != r.getChildContext &&
			(e.c = Object.assign({}, u, r.getChildContext())),
		f ||
			(null != r.getSnapshotBeforeUpdate &&
				(s = r.getSnapshotBeforeUpdate(o, c)),
			null != r.componentDidUpdate &&
				t(e, () => {
					r.componentDidUpdate(o, c, s);
				})),
		h
	);
}
let v = 0;
const k = new Set(),
	g = (n) => {
		k.delete(n) ||
			k.forEach((l) => {
				l.__c.s.delete(n);
			});
	},
	j = (n, l) => {
		const t = {
			__c: (l = '__cC' + v++),
			__: n,
			Consumer: (n, l) => n.children(l),
			Provider(n, t) {
				return (
					this.s
						? n.value !== this.p && this.s.forEach(C)
						: ((this.s = new Set()),
						  ((t = {})[l] = this),
						  (this.getChildContext = () => t),
						  k.add(this.__i)),
					(this.p = n.value),
					n.children
				);
			}
		};
		return (t.Provider.__ = t.Consumer.contextType = t);
	};
function w(n, t, e) {
	let u,
		i = 0;
	if (
		(l.unmount && l.unmount(n),
		(n.flags |= 2048),
		(u = n.ref) && ((u.current && u.current !== n.__e) || h(null, u, null, t)),
		(u = n.__c) && (g(n), u.componentWillUnmount))
	)
		try {
			u.componentWillUnmount();
		} catch (n) {
			l.__e(n, t);
		}
	if ((u = n.__k))
		for (; u.length > i; i++)
			u[i] && w(u[i], t, e ? 16 & ~n.flags : 3 & n.flags);
	!e && 3 & n.flags && n.__e.remove(), (n.__e = null);
}
function O(l, t, e, u) {
	let i,
		r,
		o,
		c,
		s,
		a = (e.__k && e.__k.slice()) || n,
		y = a.length,
		d = y,
		p = 0;
	const _ = [];
	for (i = 0; t.length > i; i++) {
		if (((s = f(t[i])), null == s)) {
			_[i] = null;
			continue;
		}
		let n,
			h = i + p,
			y = m(s, a, h, d);
		-1 === y ? (c = void 0) : ((c = a[y]), (a[y] = void 0), d--);
		let b = null == c;
		b
			? ((c = U(s, e)), F(l, s, c, u, z(e, h)))
			: 160 == (160 & c.flags)
			? ((n = c.ref), F(l, s, c, u, c.__e))
			: ((n = c.ref), S(l, s, c, u)),
			(r = c.__e),
			(s.ref || n) &&
				(o || (o = []),
				(c.ref = s.ref),
				o.push(n, s.ref, (28 & c.flags && c.__c) || r, c));
		n: if (b) {
			if ((-1 == y && p--, 3 & c.flags)) {
				let n = z(e, h);
				l.insertBefore(c.__e, n);
			}
		} else if (y !== h) {
			if (y === h + 1) {
				p++;
				break n;
			}
			if (y > h) {
				if (d > t.length - h) {
					p += y - h;
					break n;
				}
				p--;
			} else p = h > y && y == h - 1 ? y - h : 0;
			if (((h = i + p), y == i)) break n;
			let n = z(e, h + 1);
			3 & c.flags ? l.insertBefore(c.__e, n) : x(c, n, l);
		}
		_[i] = c;
	}
	if (((e.__k = _), d > 0)) for (i = y; i--; ) null != a[i] && w(a[i], a[i]);
	if (o) for (i = 0; o.length > i; i++) h(o[i], o[++i], o[++i], o[++i]);
}
function m(n, l, t, e) {
	const u = 'string' == typeof n ? null : n.type,
		i = null !== u ? n.key : void 0;
	let r = -1,
		f = t - 1,
		o = t + 1,
		c = l[t];
	if (null === c || (null != c && c.type === u && c.key == i)) r = t;
	else if (e > (null != c ? 1 : 0))
		for (;;) {
			if (f >= 0) {
				if (((c = l[f]), null != c && c.type === u && c.key == i)) {
					r = f;
					break;
				}
				f--;
			}
			if (l.length > o) {
				if (((c = l[o]), null != c && c.type === u && c.key == i)) {
					r = o;
					break;
				}
				o++;
			} else if (0 > f) break;
		}
	return r;
}
function x(n, l, t) {
	if (null != n.__k)
		for (let e = 0; n.__k.length > e; e++) {
			let u = n.__k[e];
			u &&
				((u.__ = n),
				28 & u.flags ? x(u, l, t) : u.__e != l && t.insertBefore(u.__e, l));
		}
}
function A(n, l) {
	if (((l = l || []), null == n || 'boolean' == typeof n));
	else if (Array.isArray(n)) for (n of n) A(n, l);
	else l.push(n);
	return l;
}
function S(n, t, e, u) {
	let i,
		r = e.__e,
		f = e.flags;
	if (1 & f) return void (t !== e.props && ((r.data = t), (e.props = t)));
	if (void 0 !== t.constructor) return null;
	l.__b && l.__b(e, t),
		2 & f &&
			(t.__v !== e.__v && (T(r, t, e, u), (e.__v = t.__v)),
			l.diffed && l.diffed(e),
			(e.flags &= -42465));
	let o = n;
	16 & f &&
		((n = t.props.__P), e.props.__P !== t.props.__P) &&
		x(e, n == o ? z(e) : null, n);
	try {
		512 & e.flags && (e.flags ^= 1536);
		const l = D(e);
		let r = t.type.contextType,
			f = r && l[r.__c],
			o = r ? (f ? f.props.value : r.__) : l,
			s = !e || !e.__c;
		if (((i = 4 & e.flags ? b(t, e, l, o) : _(t, e, l, o)), 32768 & e.flags))
			(e.props = t.props),
				(e.flags &= -32769),
				t && t.__v !== e.__v && (e.flags &= -16385);
		else {
			let l = null != i && i.type === c && null == i.key ? i.props.children : i;
			null == e.__k
				? J(
						n,
						Array.isArray(l) ? l : [l],
						e,
						u,
						160 == (160 & e.flags) ? e.__e : s || 32 & e.flags ? null : z(e)
				  )
				: O(n, Array.isArray(l) ? l : [l], e, u);
		}
		null != e.__h && e.__h.length && u.push(e);
	} catch (n) {
		(e.flags |= n.then ? 128 : 256), l.__e(n, e);
	}
	l.diffed && l.diffed(e), (e.flags &= -42465), (e.__v = t.__v);
}
function T(n, l, t, e) {
	let u,
		i,
		r,
		f,
		o,
		c,
		s = t.props,
		h = (t.props = l.props),
		a = 4096 & t.flags;
	for (u in s)
		(i = s[u]),
			'key' === u ||
				'children' === u ||
				('dangerouslySetInnerHTML' === u
					? (o = i)
					: u in h || y(n, u, null, i, a));
	for (u in h)
		(i = h[u]),
			'key' === u ||
				('children' === u
					? (c = i)
					: 'dangerouslySetInnerHTML' === u
					? (f = i)
					: (i === (r = s[u]) &&
							(('checked' !== u && 'value' !== u) ||
								null == i ||
								i === n[u])) ||
					  y(n, u, i, r, a));
	f
		? ((i = f.__html),
		  (!o || (i !== o.__html && i !== n.innerHTML)) && (n.innerHTML = i),
		  (t.__k = null))
		: (o && (n.innerHTML = ''), O(n, c && Array.isArray(c) ? c : [c], t, e)),
		null != h.value && n.t
			? (n.u = h.value)
			: null != h.checked && n.t && (n.u = h.checked);
}
function H(n, l) {
	(this.props = n), (this.context = l);
}
function I(n) {
	if (2048 & ~n.flags && 16384 & n.flags) {
		const l = [];
		S(E(n), r(n.type, n.props, n.key, n.ref, 0), n, l), e(l, n);
	}
}
(H.prototype.setState = function (n, l) {
	let e;
	(e =
		null != this.__s && this.__s !== this.state
			? this.__s
			: (this.__s = Object.assign({}, this.state))),
		'function' == typeof n && (n = n(Object.assign({}, e), this.props)),
		n && Object.assign(e, n),
		null != n &&
			this.__i &&
			(l && t(this.__i, l.bind(this)), this.__i.rerender(this.__i));
}),
	(H.prototype.forceUpdate = function (n) {
		this.__i &&
			((this.__i.flags |= 8192),
			n && t(this.__i, n.bind(this)),
			this.__i.rerender(this.__i));
	}),
	(H.prototype.render = c);
let P,
	L = [];
const M = Promise.prototype.then.bind(Promise.resolve());
function C(n) {
	((16384 & n.flags || !(n.flags |= 16384) || !L.push(n) || N.__r++) &&
		P === l.debounceRendering) ||
		((P = l.debounceRendering), (P || M)(N));
}
function N() {
	for (; ($ = N.__r = L.length); )
		for (L.sort((n, l) => n.__b - l.__b); $--; ) I(L.shift());
}
let $ = (N.__r = 0);
function U(n, t) {
	let e,
		u,
		i,
		r = null,
		f = t ? 4192 & t.flags : 0,
		o = NaN;
	'string' == typeof n
		? ((f |= 1), (e = n))
		: void 0 !== n.constructor
		? ((f |= 1), (e = ''))
		: ((r = n.type),
		  (e = n.props || {}),
		  (u = n.key),
		  (i = n.ref),
		  (o = n.__v),
		  (f |=
				'function' == typeof r
					? r.prototype && 'render' in r.prototype
						? 4
						: e.__P
						? 16
						: 8
					: 2),
		  2 & f && 'svg' === r
				? (f |= 4096)
				: t && 4096 & t.flags && 'foreignObject' === t.type && (f &= -4097));
	const c = {
		type: r,
		props: e,
		key: u,
		ref: i,
		data: 'function' == typeof r ? {} : null,
		rerender: C,
		flags: f,
		__k: null,
		__: t,
		__v: o,
		__e: null,
		__c: null,
		c: null,
		__b: t ? t.__b + 1 : 0
	};
	return l.__i && l.__i(c, n), c;
}
const q = (n) => 28 & n.flags && (!(16 & n.flags) || n.props.__P == E(n.__));
function z(n, l) {
	return null == l
		? z(n.__, n.__.__k.indexOf(n) + 1)
		: B(n, l) || (n.__ && q(n) ? z(n) : null);
}
function B(n, l) {
	if (null == n.__k) return null;
	for (l = l || 0; n.__k.length > l; l++) {
		let t = n.__k[l];
		if (null != t) {
			if (3 & t.flags) return t.__e;
			if (q(t)) {
				let n = B(t);
				if (n) return n;
			}
		}
	}
	return null;
}
function D(n) {
	let l = n.c,
		t = n.__;
	for (; null == l && t; ) (l = t.c), (t = t.__);
	return l;
}
function E(n) {
	let l = 16 & n.flags ? n.props.__P : null,
		t = n.__;
	for (; null == l && t; )
		16 & t.flags ? (l = t.props.__P) : 2 & t.flags && (l = t.__e), (t = t.__);
	return l;
}
function F(n, t, e, u, i) {
	let r;
	l.__b && l.__b(e, t);
	try {
		if (28 & e.flags) {
			let l = i,
				f = n;
			16 & e.flags && (n = t.props.__P) !== f && (i = null);
			const o = D(e);
			let s = t.type.contextType,
				h = s && o[s.__c],
				a = s ? (h ? h.props.value : s.__) : o;
			h && h.s.add(e), (r = 4 & e.flags ? b(null, e, o, a) : _(null, e, o, a));
			let y = null != r && r.type === c && null == r.key ? r.props.children : r;
			(r = J(n, Array.isArray(y) ? y : [y], e, u, i)),
				null != e.__h && e.__h.length && u.push(e),
				16 & e.flags && f !== n && (r = l);
		} else r = G(96 & e.flags ? i : null, e, u);
		l.diffed && l.diffed(e), (e.flags &= -42465);
	} catch (n) {
		(e.__v = 0),
			(e.flags |= n.then ? 128 : 256),
			32 & e.flags && ((r = i && i.nextSibling), (e.__e = i)),
			l.__e(n, e);
	}
	return r;
}
function G(n, l, t) {
	let e,
		u,
		i = l.props,
		r = l.type,
		f = l.flags,
		o = 4096 & f,
		c = 32 & ~f;
	if (96 & f)
		for (; n && (r ? n.localName !== r : 3 !== n.nodeType); ) n = n.nextSibling;
	let s = null == n;
	if (1 & f)
		s ? (n = document.createTextNode(i)) : n.data !== i && (n.data = i),
			(l.__e = n);
	else {
		if (
			(s &&
				((n = o
					? document.createElementNS('http://www.w3.org/2000/svg', r)
					: document.createElement(r, i.is && i)),
				(l.flags = f &= -42465),
				(c = 1)),
			64 & f)
		)
			for (e = 0; n.attributes.length > e; e++)
				(u = n.attributes[e].name), u in i || n.removeAttribute(u);
		let h, a, d;
		for (e in (('input' !== l.type &&
			'textarea' !== l.type &&
			'select' !== l.type) ||
			(!i.onInput && !i.onChange) ||
			(null != i.value
				? ((n.t = !0), (n.u = i.value))
				: null != i.checked && ((n.t = !0), (n.u = i.checked))),
		i))
			(u = i[e]),
				'key' === e ||
					('children' === e
						? (d = u)
						: 'dangerouslySetInnerHTML' === e
						? (h = u)
						: 'value' === e
						? (a = u)
						: null == u ||
						  (!c && 'function' != typeof u) ||
						  y(n, e, u, null, o));
		(l.__e = n),
			h
				? (c && h.__html && (n.innerHTML = h.__html), (l.__k = null))
				: null != d &&
				  J(n, d && Array.isArray(d) ? d : [d], l, t, s ? null : n.firstChild),
			c && null != a && y(n, 'value', a, null, 0);
	}
	return s ? null : n.nextSibling;
}
function J(n, l, t, e, u) {
	let i,
		r,
		o,
		c,
		s,
		a = (t.__k = []);
	for (i = 0; l.length > i; i++)
		(r = f(l[i])),
			null != r
				? ((o = U(r, t)),
				  (a[i] = o),
				  (s = F(n, r, o, e, u)),
				  (c = o.__e),
				  28 & o.flags || c == u ? (u = s) : null != c && n.insertBefore(c, u),
				  o.ref && h(null, o.ref, o.__c || c, o))
				: (a[i] = null);
	if (96 & t.flags && 2 & t.flags)
		for (; u; ) (i = u), (u = u.nextSibling), i.remove();
	return u;
}
function K(n) {
	let t,
		u,
		r,
		f = 0;
	function o(o) {
		l.__ && l.__(o, n),
			(o = i(c, { __P: n }, [o])),
			(r = n.firstChild),
			(u = []),
			t
				? S(n, o, t, u)
				: ((t = U(o)),
				  (n.__k = t),
				  r && (f = f || 64),
				  void 0 !== n.ownerSVGElement && (f |= 4096),
				  (t.flags |= f),
				  (t.c = {}),
				  F(n, o, t, u, r)),
			e(u, t);
	}
	return {
		hydrate(n) {
			(f |= 32), o(n);
		},
		render: o
	};
}
function Q(n, l) {
	let t = l && l.__;
	t || (t = K(l)), t.render(n), (l.__ = t);
}
function R(n, l) {
	let t = l && l.__;
	t || (t = K(l)), t.hydrate(n), (l.__ = t);
}
function V(n, l, t) {
	let e,
		u,
		i,
		f = Object.assign({}, n.props);
	for (i in l)
		'key' == i ? (e = l[i]) : 'ref' == i ? (u = l[i]) : (f[i] = l[i]);
	if (arguments.length > 3)
		for (t = [t], i = 3; arguments.length > i; i++) t.push(arguments[i]);
	return (
		arguments.length > 2 && (f.children = t),
		r(n.type, f, e || n.key, u || n.ref, 0)
	);
}
function W(n) {
	return n.children;
}
function X(n, l) {
	return i(W, { __P: l }, n);
}
export {
	H as Component,
	c as Fragment,
	V as cloneElement,
	j as createContext,
	i as createElement,
	X as createPortal,
	o as createRef,
	K as createRoot,
	i as h,
	R as hydrate,
	s as isValidElement,
	l as options,
	Q as render,
	A as toChildArray
};
//# sourceMappingURL=preact.mjs.map
console.log('PREACT MJS');
