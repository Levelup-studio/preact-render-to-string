import { options as t, Fragment as e } from 'preact';
if ('function' != typeof Symbol) {
	var n = 0;
	(Symbol = function (t) {
		return '@@' + t + ++n;
	}),
		(Symbol.for = function (t) {
			return '@@' + t;
		});
}
var r = /^(?:area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,
	o = /[\s\n\\/='"\0<>]/,
	i = /^(xlink|xmlns|xml)([A-Z])/,
	a = /^(?:accessK|auto[A-Z]|cell|ch|col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|src[A-Z]|tabI|useM|item[A-Z])/,
	c = /^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,
	l = /["&<]/;
function s(t) {
	if (0 === t.length || !1 === l.test(t)) return t;
	for (var e = 0, n = 0, r = '', o = ''; n < t.length; n++) {
		switch (t.charCodeAt(n)) {
			case 34:
				o = '&quot;';
				break;
			case 38:
				o = '&amp;';
				break;
			case 60:
				o = '&lt;';
				break;
			default:
				continue;
		}
		n !== e && (r += t.slice(e, n)), (r += o), (e = n + 1);
	}
	return n !== e && (r += t.slice(e, n)), r;
}
var u = function (t, e) {
		return String(t).replace(/(\n+)/g, '$1' + (e || '\t'));
	},
	f = function (t, e, n) {
		return (
			String(t).length > (e || 40) ||
			(!n && -1 !== String(t).indexOf('\n')) ||
			-1 !== String(t).indexOf('<')
		);
	},
	p = {},
	d = new Set([
		'animation-iteration-count',
		'border-image-outset',
		'border-image-slice',
		'border-image-width',
		'box-flex',
		'box-flex-group',
		'box-ordinal-group',
		'column-count',
		'fill-opacity',
		'flex',
		'flex-grow',
		'flex-negative',
		'flex-order',
		'flex-positive',
		'flex-shrink',
		'flood-opacity',
		'font-weight',
		'grid-column',
		'grid-row',
		'line-clamp',
		'line-height',
		'opacity',
		'order',
		'orphans',
		'stop-opacity',
		'stroke-dasharray',
		'stroke-dashoffset',
		'stroke-miterlimit',
		'stroke-opacity',
		'stroke-width',
		'tab-size',
		'widows',
		'z-index',
		'zoom'
	]),
	g = /[A-Z]/g;
function y(t) {
	var e = '';
	for (var n in t) {
		var r = t[n];
		if (null != r && '' !== r) {
			var o =
					'-' == n[0] ? n : p[n] || (p[n] = n.replace(g, '-$&').toLowerCase()),
				i = ';';
			'number' != typeof r || o.startsWith('--') || d.has(o) || (i = 'px;'),
				(e = e + o + ':' + r + i);
		}
	}
	return e || void 0;
}
function b(t, e) {
	return (
		Array.isArray(e) ? e.reduce(b, t) : null != e && !1 !== e && t.push(e), t
	);
}
function m() {
	this.__d = !0;
}
function h(t, e) {
	return {
		__v: t,
		context: e,
		props: t.props,
		setState: m,
		forceUpdate: m,
		__d: !0,
		__h: new Array(0)
	};
}
function v(t, e) {
	var n = t.contextType,
		r = n && e[n.__c];
	return null != n ? (r ? r.props.value : n.__) : e;
}
var _ = [],
	x = [];
function j(e, n, r, o) {
	var i = t.__s;
	t.__s = !0;
	try {
		return S(e, n || {}, r, o);
	} finally {
		t.__c && t.__c(e, x), (t.__s = i), (x.length = 0);
	}
}
function S(n, l, p, d, g, m) {
	if (null == n || 'boolean' == typeof n) return '';
	if ('object' != typeof n) return 'function' == typeof n ? '' : s(n + '');
	var _ = p.pretty,
		x = _ && 'string' == typeof _ ? _ : '\t';
	if (Array.isArray(n)) {
		for (var j = '', A = 0; A < n.length; A++)
			_ && A > 0 && (j += '\n'), (j += S(n[A], l, p, d, g, m));
		return j;
	}
	if (void 0 !== n.constructor) return '';
	t.__b && t.__b(n);
	var w,
		O = n.type,
		C = n.props,
		F = !1;
	if ('function' == typeof O) {
		if (
			((F = !0), !p.shallow || (!d && !1 !== p.renderRootComponent) || O === e)
		) {
			if (O === e) {
				var E = [];
				return (
					b(E, n.props.children), S(E, l, p, !1 !== p.shallowHighOrder, g, m)
				);
			}
			var M,
				$ = (n.__c = h(n, l)),
				H = t.__r;
			if (O.prototype && 'function' == typeof O.prototype.render) {
				var L = v(O, l);
				(($ = n.__c = new O(C, L)).__v = n),
					($._dirty = $.__d = !0),
					($.props = C),
					null == $.state && ($.state = {}),
					null == $._nextState &&
						null == $.__s &&
						($._nextState = $.__s = $.state),
					($.context = L),
					O.getDerivedStateFromProps
						? ($.state = Object.assign(
								{},
								$.state,
								O.getDerivedStateFromProps($.props, $.state)
						  ))
						: $.componentWillMount &&
						  ($.componentWillMount(),
						  ($.state =
								$._nextState !== $.state
									? $._nextState
									: $.__s !== $.state
									? $.__s
									: $.state)),
					H && H(n),
					(M = $.render($.props, $.state, $.context));
			} else
				for (var I = v(O, l), N = 0; $.__d && N++ < 25; )
					($.__d = !1), H && H(n), (M = O.call(n.__c, C, I));
			$.getChildContext && (l = Object.assign({}, l, $.getChildContext()));
			var D = S(M, l, p, !1 !== p.shallowHighOrder, g, m);
			return t.diffed && t.diffed(n), D;
		}
		O = (w = O).displayName || (w !== Function && w.name) || k(w);
	}
	var W,
		T,
		U = '<' + O;
	if (C) {
		var Z = Object.keys(C);
		p && !0 === p.sortAttributes && Z.sort();
		for (var P = 0; P < Z.length; P++) {
			var R = Z[P],
				z = C[R];
			if ('children' !== R) {
				if (
					!o.test(R) &&
					((p && p.allAttributes) ||
						('key' !== R && 'ref' !== R && '__self' !== R && '__source' !== R))
				) {
					if ('defaultValue' === R) R = 'value';
					else if ('defaultChecked' === R) R = 'checked';
					else if ('defaultSelected' === R) R = 'selected';
					else if ('className' === R) {
						if (void 0 !== C.class) continue;
						R = 'class';
					} else
						'acceptCharset' === R
							? (R = 'accept-charset')
							: 'httpEquiv' === R
							? (R = 'http-equiv')
							: i.test(R)
							? (R = R.replace(i, '$1:$2').toLowerCase())
							: g
							? c.test(R) &&
							  (R =
									'panose1' === R
										? 'panose-1'
										: R.replace(/([A-Z])/g, '-$1').toLowerCase())
							: a.test(R) && (R = R.toLowerCase());
					if ('htmlFor' === R) {
						if (C.for) continue;
						R = 'for';
					}
					'style' === R && z && 'object' == typeof z && (z = y(z)),
						'a' === R[0] &&
							'r' === R[1] &&
							'boolean' == typeof z &&
							(z = String(z));
					var q = p.attributeHook && p.attributeHook(R, z, l, p, F);
					if (q || '' === q) U += q;
					else if ('dangerouslySetInnerHTML' === R) T = z && z.__html;
					else if ('textarea' === O && 'value' === R) W = z;
					else if ((z || 0 === z || '' === z) && 'function' != typeof z) {
						if (!((!0 !== z && '' !== z) || ((z = R), p && p.xml))) {
							U = U + ' ' + R;
							continue;
						}
						if ('value' === R) {
							if ('select' === O) {
								m = z;
								continue;
							}
							'option' === O &&
								m == z &&
								void 0 === C.selected &&
								(U += ' selected');
						}
						U = U + ' ' + R + '="' + s(z + '') + '"';
					}
				}
			} else W = z;
		}
	}
	if (_) {
		var J = U.replace(/\n\s*/, ' ');
		J === U || ~J.indexOf('\n')
			? _ && ~U.indexOf('\n') && (U += '\n')
			: (U = J);
	}
	if (((U += '>'), o.test(O)))
		throw new Error(O + ' is not a valid HTML tag name in ' + U);
	var V,
		B = r.test(O) || (p.voidElements && p.voidElements.test(O)),
		G = [];
	if (T) _ && f(T) && (T = '\n' + x + u(T, x)), (U += T);
	else if (null != W && b((V = []), W).length) {
		for (var K = _ && ~U.indexOf('\n'), Q = !1, X = 0; X < V.length; X++) {
			var Y = V[X];
			if (null != Y && !1 !== Y) {
				var tt = S(Y, l, p, !0, 'svg' === O || ('foreignObject' !== O && g), m);
				if ((_ && !K && f(tt) && (K = !0), tt))
					if (_) {
						var et = tt.length > 0 && '<' != tt[0];
						Q && et ? (G[G.length - 1] += tt) : G.push(tt), (Q = et);
					} else G.push(tt);
			}
		}
		if (_ && K) for (var nt = G.length; nt--; ) G[nt] = '\n' + x + u(G[nt], x);
	}
	if ((t.diffed && t.diffed(n), G.length || T)) U += G.join('');
	else if (p && p.xml) return U.substring(0, U.length - 1) + ' />';
	return (
		!B || V || T
			? (_ && ~U.indexOf('\n') && (U += '\n'), (U = U + '</' + O + '>'))
			: (U = U.replace(/>$/, ' />')),
		U
	);
}
function k(t) {
	var e = (Function.prototype.toString
		.call(t)
		.match(/^\s*function\s+([^( ]+)/) || '')[1];
	if (!e) {
		for (var n = -1, r = _.length; r--; )
			if (_[r] === t) {
				n = r;
				break;
			}
		n < 0 && (n = _.push(t) - 1), (e = 'UnnamedComponent' + n);
	}
	return e;
}
const A = /(\\|\"|\')/g;
var w = function (t) {
	return t.replace(A, '\\$1');
};
const O = Object.prototype.toString,
	C = Date.prototype.toISOString,
	F = Error.prototype.toString,
	E = RegExp.prototype.toString,
	M = Symbol.prototype.toString,
	$ = /^Symbol\((.*)\)(.*)$/,
	H = /\n/gi,
	L = Object.getOwnPropertySymbols || ((t) => []);
function I(t) {
	return (
		'[object Array]' === t ||
		'[object ArrayBuffer]' === t ||
		'[object DataView]' === t ||
		'[object Float32Array]' === t ||
		'[object Float64Array]' === t ||
		'[object Int8Array]' === t ||
		'[object Int16Array]' === t ||
		'[object Int32Array]' === t ||
		'[object Uint8Array]' === t ||
		'[object Uint8ClampedArray]' === t ||
		'[object Uint16Array]' === t ||
		'[object Uint32Array]' === t
	);
}
function N(t) {
	return t != +t ? 'NaN' : 0 === t && 1 / t < 0 ? '-0' : '' + t;
}
function D(t) {
	return '' === t.name ? '[Function anonymous]' : '[Function ' + t.name + ']';
}
function W(t) {
	return M.call(t).replace($, 'Symbol($1)');
}
function T(t) {
	return '[' + F.call(t) + ']';
}
function U(t) {
	if (!0 === t || !1 === t) return '' + t;
	if (void 0 === t) return 'undefined';
	if (null === t) return 'null';
	const e = typeof t;
	if ('number' === e) return N(t);
	if ('string' === e) return '"' + w(t) + '"';
	if ('function' === e) return D(t);
	if ('symbol' === e) return W(t);
	const n = O.call(t);
	return '[object WeakMap]' === n
		? 'WeakMap {}'
		: '[object WeakSet]' === n
		? 'WeakSet {}'
		: '[object Function]' === n || '[object GeneratorFunction]' === n
		? D(t, min)
		: '[object Symbol]' === n
		? W(t)
		: '[object Date]' === n
		? C.call(t)
		: '[object Error]' === n
		? T(t)
		: '[object RegExp]' === n
		? E.call(t)
		: '[object Arguments]' === n && 0 === t.length
		? 'Arguments []'
		: I(n) && 0 === t.length
		? t.constructor.name + ' []'
		: t instanceof Error && T(t);
}
function Z(t, e, n, r, o, i, a, c, l, s) {
	let u = '';
	if (t.length) {
		u += o;
		const f = n + e;
		for (let n = 0; n < t.length; n++)
			(u += f + G(t[n], e, f, r, o, i, a, c, l, s)),
				n < t.length - 1 && (u += ',' + r);
		u += o + n;
	}
	return '[' + u + ']';
}
function P(t, e, n, r, o, i, a, c, l, s) {
	return (s ? '' : 'Arguments ') + Z(t, e, n, r, o, i, a, c, l, s);
}
function R(t, e, n, r, o, i, a, c, l, s) {
	return (s ? '' : t.constructor.name + ' ') + Z(t, e, n, r, o, i, a, c, l, s);
}
function z(t, e, n, r, o, i, a, c, l, s) {
	let u = 'Map {';
	const f = t.entries();
	let p = f.next();
	if (!p.done) {
		u += o;
		const t = n + e;
		for (; !p.done; )
			(u +=
				t +
				G(p.value[0], e, t, r, o, i, a, c, l, s) +
				' => ' +
				G(p.value[1], e, t, r, o, i, a, c, l, s)),
				(p = f.next()),
				p.done || (u += ',' + r);
		u += o + n;
	}
	return u + '}';
}
function q(t, e, n, r, o, i, a, c, l, s) {
	let u = (s ? '' : t.constructor ? t.constructor.name + ' ' : 'Object ') + '{',
		f = Object.keys(t).sort();
	const p = L(t);
	if (
		(p.length &&
			(f = f
				.filter(
					(t) => !('symbol' == typeof t || '[object Symbol]' === O.call(t))
				)
				.concat(p)),
		f.length)
	) {
		u += o;
		const p = n + e;
		for (let n = 0; n < f.length; n++) {
			const d = f[n];
			(u +=
				p +
				G(d, e, p, r, o, i, a, c, l, s) +
				': ' +
				G(t[d], e, p, r, o, i, a, c, l, s)),
				n < f.length - 1 && (u += ',' + r);
		}
		u += o + n;
	}
	return u + '}';
}
function J(t, e, n, r, o, i, a, c, l, s) {
	let u = 'Set {';
	const f = t.entries();
	let p = f.next();
	if (!p.done) {
		u += o;
		const t = n + e;
		for (; !p.done; )
			(u += t + G(p.value[1], e, t, r, o, i, a, c, l, s)),
				(p = f.next()),
				p.done || (u += ',' + r);
		u += o + n;
	}
	return u + '}';
}
function V(t, e, n, r, o, i, a, c, l, s) {
	if ((i = i.slice()).indexOf(t) > -1) return '[Circular]';
	i.push(t);
	const u = ++c > a;
	if (!u && t.toJSON && 'function' == typeof t.toJSON)
		return G(t.toJSON(), e, n, r, o, i, a, c, l, s);
	const f = O.call(t);
	return '[object Arguments]' === f
		? u
			? '[Arguments]'
			: P(t, e, n, r, o, i, a, c, l, s)
		: I(f)
		? u
			? '[Array]'
			: R(t, e, n, r, o, i, a, c, l, s)
		: '[object Map]' === f
		? u
			? '[Map]'
			: z(t, e, n, r, o, i, a, c, l, s)
		: '[object Set]' === f
		? u
			? '[Set]'
			: J(t, e, n, r, o, i, a, c, l, s)
		: 'object' == typeof t
		? u
			? '[Object]'
			: q(t, e, n, r, o, i, a, c, l, s)
		: void 0;
}
function B(t, e, n, r, o, i, a, c, l, s) {
	let u,
		f = !1;
	for (let e = 0; e < l.length; e++)
		if (((u = l[e]), u.test(t))) {
			f = !0;
			break;
		}
	return (
		!!f &&
		u.print(
			t,
			function (t) {
				return G(t, e, n, r, o, i, a, c, l, s);
			},
			function (t) {
				const r = n + e;
				return r + t.replace(H, '\n' + r);
			},
			{ edgeSpacing: o, spacing: r }
		)
	);
}
function G(t, e, n, r, o, i, a, c, l, s) {
	return (
		U(t) || B(t, e, n, r, o, i, a, c, l, s) || V(t, e, n, r, o, i, a, c, l, s)
	);
}
const K = { indent: 2, min: !1, maxDepth: Infinity, plugins: [] };
function Q(t) {
	if (
		(Object.keys(t).forEach((t) => {
			if (!K.hasOwnProperty(t))
				throw new Error('prettyFormat: Invalid option: ' + t);
		}),
		t.min && void 0 !== t.indent && 0 !== t.indent)
	)
		throw new Error('prettyFormat: Cannot run with min option and indent');
}
function X(t) {
	const e = {};
	return (
		Object.keys(K).forEach((n) => (e[n] = t.hasOwnProperty(n) ? t[n] : K[n])),
		e.min && (e.indent = 0),
		e
	);
}
function Y(t) {
	return new Array(t + 1).join(' ');
}
var tt = function (t, e) {
		let n, r;
		e ? (Q(e), (e = X(e))) : (e = K);
		const o = e.min ? ' ' : '\n',
			i = e.min ? '' : '\n';
		if (e && e.plugins.length) {
			(n = Y(e.indent)), (r = []);
			var a = B(t, n, '', o, i, r, e.maxDepth, 0, e.plugins, e.min);
			if (a) return a;
		}
		return (
			U(t) ||
			(n || (n = Y(e.indent)),
			r || (r = []),
			V(t, n, '', o, i, r, e.maxDepth, 0, e.plugins, e.min))
		);
	},
	et = {
		test: function (t) {
			return (
				t && 'object' == typeof t && 'type' in t && 'props' in t && 'key' in t
			);
		},
		print: function (t, e, n) {
			return j(t, et.context, et.opts, !0);
		}
	},
	nt = { plugins: [et] },
	rt = {
		attributeHook: function (t, e, n, r, o) {
			var i = typeof e;
			if ('dangerouslySetInnerHTML' === t) return !1;
			if (null == e || ('function' === i && !r.functions)) return '';
			if (
				r.skipFalseAttributes &&
				!o &&
				(!1 === e || (('class' === t || 'style' === t) && '' === e))
			)
				return '';
			var a = 'string' == typeof r.pretty ? r.pretty : '\t';
			return 'string' !== i
				? ('function' !== i || r.functionNames
						? ((et.context = n),
						  (et.opts = r),
						  ~(e = tt(e, nt)).indexOf('\n') && (e = u('\n' + e, a) + '\n'))
						: (e = 'Function'),
				  u('\n' + t + '={' + e + '}', a))
				: '\n' + a + t + '="' + s(e) + '"';
		},
		jsx: !0,
		xml: !1,
		functions: !0,
		functionNames: !0,
		skipFalseAttributes: !0,
		pretty: '  '
	};
function ot(t, e, n) {
	var r = Object.assign({}, rt, n || {});
	return r.jsx || (r.attributeHook = null), j(t, e, r);
}
var it = { shallow: !0 };
function at(t, e, n) {
	return ot(t, e, Object.assign({}, it, n || {}));
}
export default ot;
export { ot as render, at as shallowRender };
//# sourceMappingURL=index.module.js.map
