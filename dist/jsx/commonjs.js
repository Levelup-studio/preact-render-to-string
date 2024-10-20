var t = require('preact');
if ('function' != typeof Symbol) {
	var e = 0;
	(Symbol = function (t) {
		return '@@' + t + ++e;
	}),
		(Symbol.for = function (t) {
			return '@@' + t;
		});
}
var n = /^(?:area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,
	r = /[\s\n\\/='"\0<>]/,
	o = /^(xlink|xmlns|xml)([A-Z])/,
	i = /^(?:accessK|auto[A-Z]|cell|ch|col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|src[A-Z]|tabI|useM|item[A-Z])/,
	a = /^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,
	c = /["&<]/;
function l(t) {
	if (0 === t.length || !1 === c.test(t)) return t;
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
var s = function (t, e) {
		return String(t).replace(/(\n+)/g, '$1' + (e || '\t'));
	},
	u = function (t, e, n) {
		return (
			String(t).length > (e || 40) ||
			(!n && -1 !== String(t).indexOf('\n')) ||
			-1 !== String(t).indexOf('<')
		);
	},
	f = {},
	p = new Set([
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
	d = /[A-Z]/g;
function g(t) {
	var e = '';
	for (var n in t) {
		var r = t[n];
		if (null != r && '' !== r) {
			var o =
					'-' == n[0] ? n : f[n] || (f[n] = n.replace(d, '-$&').toLowerCase()),
				i = ';';
			'number' != typeof r || o.startsWith('--') || p.has(o) || (i = 'px;'),
				(e = e + o + ':' + r + i);
		}
	}
	return e || void 0;
}
function y(t, e) {
	return (
		Array.isArray(e) ? e.reduce(y, t) : null != e && !1 !== e && t.push(e), t
	);
}
function v() {
	this.__d = !0;
}
function b(t, e) {
	return {
		__v: t,
		context: e,
		props: t.props,
		setState: v,
		forceUpdate: v,
		__d: !0,
		__h: new Array(0)
	};
}
function m(t, e) {
	var n = t.contextType,
		r = n && e[n.__c];
	return null != n ? (r ? r.props.value : n.__) : e;
}
var h = [],
	_ = [];
function x(e, n, r, o) {
	var i = t.options.__s;
	t.options.__s = !0;
	try {
		return j(e, n || {}, r, o);
	} finally {
		t.options.__c && t.options.__c(e, _), (t.options.__s = i), (_.length = 0);
	}
}
function j(e, c, f, p, d, v) {
	if (null == e || 'boolean' == typeof e) return '';
	if ('object' != typeof e) return 'function' == typeof e ? '' : l(e + '');
	var h = f.pretty,
		_ = h && 'string' == typeof h ? h : '\t';
	if (Array.isArray(e)) {
		for (var x = '', k = 0; k < e.length; k++)
			h && k > 0 && (x += '\n'), (x += j(e[k], c, f, p, d, v));
		return x;
	}
	if (void 0 !== e.constructor) return '';
	t.options.__b && t.options.__b(e);
	var w,
		A = e.type,
		O = e.props,
		F = !1;
	if ('function' == typeof A) {
		if (
			((F = !0),
			!f.shallow || (!p && !1 !== f.renderRootComponent) || A === t.Fragment)
		) {
			if (A === t.Fragment) {
				var C = [];
				return (
					y(C, e.props.children), j(C, c, f, !1 !== f.shallowHighOrder, d, v)
				);
			}
			var E,
				M = (e.__c = b(e, c)),
				$ = t.options.__r;
			if (A.prototype && 'function' == typeof A.prototype.render) {
				var H = m(A, c);
				((M = e.__c = new A(O, H)).__v = e),
					(M._dirty = M.__d = !0),
					(M.props = O),
					null == M.state && (M.state = {}),
					null == M._nextState &&
						null == M.__s &&
						(M._nextState = M.__s = M.state),
					(M.context = H),
					A.getDerivedStateFromProps
						? (M.state = Object.assign(
								{},
								M.state,
								A.getDerivedStateFromProps(M.props, M.state)
						  ))
						: M.componentWillMount &&
						  (M.componentWillMount(),
						  (M.state =
								M._nextState !== M.state
									? M._nextState
									: M.__s !== M.state
									? M.__s
									: M.state)),
					$ && $(e),
					(E = M.render(M.props, M.state, M.context));
			} else
				for (var L = m(A, c), I = 0; M.__d && I++ < 25; )
					(M.__d = !1), $ && $(e), (E = A.call(e.__c, O, L));
			M.getChildContext && (c = Object.assign({}, c, M.getChildContext()));
			var N = j(E, c, f, !1 !== f.shallowHighOrder, d, v);
			return t.options.diffed && t.options.diffed(e), N;
		}
		A = (w = A).displayName || (w !== Function && w.name) || S(w);
	}
	var D,
		W,
		T = '<' + A;
	if (O) {
		var U = Object.keys(O);
		f && !0 === f.sortAttributes && U.sort();
		for (var Z = 0; Z < U.length; Z++) {
			var P = U[Z],
				R = O[P];
			if ('children' !== P) {
				if (
					!r.test(P) &&
					((f && f.allAttributes) ||
						('key' !== P && 'ref' !== P && '__self' !== P && '__source' !== P))
				) {
					if ('defaultValue' === P) P = 'value';
					else if ('defaultChecked' === P) P = 'checked';
					else if ('defaultSelected' === P) P = 'selected';
					else if ('className' === P) {
						if (void 0 !== O.class) continue;
						P = 'class';
					} else
						'acceptCharset' === P
							? (P = 'accept-charset')
							: 'httpEquiv' === P
							? (P = 'http-equiv')
							: o.test(P)
							? (P = P.replace(o, '$1:$2').toLowerCase())
							: d
							? a.test(P) &&
							  (P =
									'panose1' === P
										? 'panose-1'
										: P.replace(/([A-Z])/g, '-$1').toLowerCase())
							: i.test(P) && (P = P.toLowerCase());
					if ('htmlFor' === P) {
						if (O.for) continue;
						P = 'for';
					}
					'style' === P && R && 'object' == typeof R && (R = g(R)),
						'a' === P[0] &&
							'r' === P[1] &&
							'boolean' == typeof R &&
							(R = String(R));
					var q = f.attributeHook && f.attributeHook(P, R, c, f, F);
					if (q || '' === q) T += q;
					else if ('dangerouslySetInnerHTML' === P) W = R && R.__html;
					else if ('textarea' === A && 'value' === P) D = R;
					else if ((R || 0 === R || '' === R) && 'function' != typeof R) {
						if (!((!0 !== R && '' !== R) || ((R = P), f && f.xml))) {
							T = T + ' ' + P;
							continue;
						}
						if ('value' === P) {
							if ('select' === A) {
								v = R;
								continue;
							}
							'option' === A &&
								v == R &&
								void 0 === O.selected &&
								(T += ' selected');
						}
						T = T + ' ' + P + '="' + l(R + '') + '"';
					}
				}
			} else D = R;
		}
	}
	if (h) {
		var z = T.replace(/\n\s*/, ' ');
		z === T || ~z.indexOf('\n')
			? h && ~T.indexOf('\n') && (T += '\n')
			: (T = z);
	}
	if (((T += '>'), r.test(A)))
		throw new Error(A + ' is not a valid HTML tag name in ' + T);
	var J,
		V = n.test(A) || (f.voidElements && f.voidElements.test(A)),
		B = [];
	if (W) h && u(W) && (W = '\n' + _ + s(W, _)), (T += W);
	else if (null != D && y((J = []), D).length) {
		for (var G = h && ~T.indexOf('\n'), K = !1, Q = 0; Q < J.length; Q++) {
			var X = J[Q];
			if (null != X && !1 !== X) {
				var Y = j(X, c, f, !0, 'svg' === A || ('foreignObject' !== A && d), v);
				if ((h && !G && u(Y) && (G = !0), Y))
					if (h) {
						var tt = Y.length > 0 && '<' != Y[0];
						K && tt ? (B[B.length - 1] += Y) : B.push(Y), (K = tt);
					} else B.push(Y);
			}
		}
		if (h && G) for (var et = B.length; et--; ) B[et] = '\n' + _ + s(B[et], _);
	}
	if ((t.options.diffed && t.options.diffed(e), B.length || W)) T += B.join('');
	else if (f && f.xml) return T.substring(0, T.length - 1) + ' />';
	return (
		!V || J || W
			? (h && ~T.indexOf('\n') && (T += '\n'), (T = T + '</' + A + '>'))
			: (T = T.replace(/>$/, ' />')),
		T
	);
}
function S(t) {
	var e = (Function.prototype.toString
		.call(t)
		.match(/^\s*function\s+([^( ]+)/) || '')[1];
	if (!e) {
		for (var n = -1, r = h.length; r--; )
			if (h[r] === t) {
				n = r;
				break;
			}
		n < 0 && (n = h.push(t) - 1), (e = 'UnnamedComponent' + n);
	}
	return e;
}
var k = /(\\|\"|\')/g,
	w = function (t) {
		return t.replace(k, '\\$1');
	},
	A = Object.prototype.toString,
	O = Date.prototype.toISOString,
	F = Error.prototype.toString,
	C = RegExp.prototype.toString,
	E = Symbol.prototype.toString,
	M = /^Symbol\((.*)\)(.*)$/,
	$ = /\n/gi,
	H =
		Object.getOwnPropertySymbols ||
		function (t) {
			return [];
		};
function L(t) {
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
function I(t) {
	return t != +t ? 'NaN' : 0 === t && 1 / t < 0 ? '-0' : '' + t;
}
function N(t) {
	return '' === t.name ? '[Function anonymous]' : '[Function ' + t.name + ']';
}
function D(t) {
	return E.call(t).replace(M, 'Symbol($1)');
}
function W(t) {
	return '[' + F.call(t) + ']';
}
function T(t) {
	if (!0 === t || !1 === t) return '' + t;
	if (void 0 === t) return 'undefined';
	if (null === t) return 'null';
	var e = typeof t;
	if ('number' === e) return I(t);
	if ('string' === e) return '"' + w(t) + '"';
	if ('function' === e) return N(t);
	if ('symbol' === e) return D(t);
	var n = A.call(t);
	return '[object WeakMap]' === n
		? 'WeakMap {}'
		: '[object WeakSet]' === n
		? 'WeakSet {}'
		: '[object Function]' === n || '[object GeneratorFunction]' === n
		? N(t, min)
		: '[object Symbol]' === n
		? D(t)
		: '[object Date]' === n
		? O.call(t)
		: '[object Error]' === n
		? W(t)
		: '[object RegExp]' === n
		? C.call(t)
		: '[object Arguments]' === n && 0 === t.length
		? 'Arguments []'
		: L(n) && 0 === t.length
		? t.constructor.name + ' []'
		: t instanceof Error && W(t);
}
function U(t, e, n, r, o, i, a, c, l, s) {
	var u = '';
	if (t.length) {
		u += o;
		for (var f = n + e, p = 0; p < t.length; p++)
			(u += f + B(t[p], e, f, r, o, i, a, c, l, s)),
				p < t.length - 1 && (u += ',' + r);
		u += o + n;
	}
	return '[' + u + ']';
}
function Z(t, e, n, r, o, i, a, c, l, s) {
	return (s ? '' : 'Arguments ') + U(t, e, n, r, o, i, a, c, l, s);
}
function P(t, e, n, r, o, i, a, c, l, s) {
	return (s ? '' : t.constructor.name + ' ') + U(t, e, n, r, o, i, a, c, l, s);
}
function R(t, e, n, r, o, i, a, c, l, s) {
	var u = 'Map {',
		f = t.entries(),
		p = f.next();
	if (!p.done) {
		u += o;
		for (var d = n + e; !p.done; )
			(u +=
				d +
				B(p.value[0], e, d, r, o, i, a, c, l, s) +
				' => ' +
				B(p.value[1], e, d, r, o, i, a, c, l, s)),
				(p = f.next()).done || (u += ',' + r);
		u += o + n;
	}
	return u + '}';
}
function q(t, e, n, r, o, i, a, c, l, s) {
	var u = (s ? '' : t.constructor ? t.constructor.name + ' ' : 'Object ') + '{',
		f = Object.keys(t).sort(),
		p = H(t);
	if (
		(p.length &&
			(f = f
				.filter(function (t) {
					return !('symbol' == typeof t || '[object Symbol]' === A.call(t));
				})
				.concat(p)),
		f.length)
	) {
		u += o;
		for (var d = n + e, g = 0; g < f.length; g++) {
			var y = f[g];
			(u +=
				d +
				B(y, e, d, r, o, i, a, c, l, s) +
				': ' +
				B(t[y], e, d, r, o, i, a, c, l, s)),
				g < f.length - 1 && (u += ',' + r);
		}
		u += o + n;
	}
	return u + '}';
}
function z(t, e, n, r, o, i, a, c, l, s) {
	var u = 'Set {',
		f = t.entries(),
		p = f.next();
	if (!p.done) {
		u += o;
		for (var d = n + e; !p.done; )
			(u += d + B(p.value[1], e, d, r, o, i, a, c, l, s)),
				(p = f.next()).done || (u += ',' + r);
		u += o + n;
	}
	return u + '}';
}
function J(t, e, n, r, o, i, a, c, l, s) {
	if ((i = i.slice()).indexOf(t) > -1) return '[Circular]';
	i.push(t);
	var u = ++c > a;
	if (!u && t.toJSON && 'function' == typeof t.toJSON)
		return B(t.toJSON(), e, n, r, o, i, a, c, l, s);
	var f = A.call(t);
	return '[object Arguments]' === f
		? u
			? '[Arguments]'
			: Z(t, e, n, r, o, i, a, c, l, s)
		: L(f)
		? u
			? '[Array]'
			: P(t, e, n, r, o, i, a, c, l, s)
		: '[object Map]' === f
		? u
			? '[Map]'
			: R(t, e, n, r, o, i, a, c, l, s)
		: '[object Set]' === f
		? u
			? '[Set]'
			: z(t, e, n, r, o, i, a, c, l, s)
		: 'object' == typeof t
		? u
			? '[Object]'
			: q(t, e, n, r, o, i, a, c, l, s)
		: void 0;
}
function V(t, e, n, r, o, i, a, c, l, s) {
	for (var u, f = !1, p = 0; p < l.length; p++)
		if ((u = l[p]).test(t)) {
			f = !0;
			break;
		}
	return (
		!!f &&
		u.print(
			t,
			function (t) {
				return B(t, e, n, r, o, i, a, c, l, s);
			},
			function (t) {
				var r = n + e;
				return r + t.replace($, '\n' + r);
			},
			{ edgeSpacing: o, spacing: r }
		)
	);
}
function B(t, e, n, r, o, i, a, c, l, s) {
	return (
		T(t) || V(t, e, n, r, o, i, a, c, l, s) || J(t, e, n, r, o, i, a, c, l, s)
	);
}
var G = { indent: 2, min: !1, maxDepth: Infinity, plugins: [] };
function K(t) {
	if (
		(Object.keys(t).forEach(function (t) {
			if (!G.hasOwnProperty(t))
				throw new Error('prettyFormat: Invalid option: ' + t);
		}),
		t.min && void 0 !== t.indent && 0 !== t.indent)
	)
		throw new Error('prettyFormat: Cannot run with min option and indent');
}
function Q(t) {
	var e = {};
	return (
		Object.keys(G).forEach(function (n) {
			return (e[n] = t.hasOwnProperty(n) ? t[n] : G[n]);
		}),
		e.min && (e.indent = 0),
		e
	);
}
function X(t) {
	return new Array(t + 1).join(' ');
}
var Y = function (t, e) {
		var n, r;
		e ? (K(e), (e = Q(e))) : (e = G);
		var o = e.min ? ' ' : '\n',
			i = e.min ? '' : '\n';
		if (e && e.plugins.length) {
			var a = V(
				t,
				(n = X(e.indent)),
				'',
				o,
				i,
				(r = []),
				e.maxDepth,
				0,
				e.plugins,
				e.min
			);
			if (a) return a;
		}
		return (
			T(t) ||
			(n || (n = X(e.indent)),
			r || (r = []),
			J(t, n, '', o, i, r, e.maxDepth, 0, e.plugins, e.min))
		);
	},
	tt = {
		test: function (t) {
			return (
				t && 'object' == typeof t && 'type' in t && 'props' in t && 'key' in t
			);
		},
		print: function (t, e, n) {
			return x(t, tt.context, tt.opts, !0);
		}
	},
	et = { plugins: [tt] },
	nt = {
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
						? ((tt.context = n),
						  (tt.opts = r),
						  ~(e = Y(e, et)).indexOf('\n') && (e = s('\n' + e, a) + '\n'))
						: (e = 'Function'),
				  s('\n' + t + '={' + e + '}', a))
				: '\n' + a + t + '="' + l(e) + '"';
		},
		jsx: !0,
		xml: !1,
		functions: !0,
		functionNames: !0,
		skipFalseAttributes: !0,
		pretty: '  '
	};
function rt(t, e, n) {
	var r = Object.assign({}, nt, n || {});
	return r.jsx || (r.attributeHook = null), x(t, e, r);
}
var ot = { shallow: !0 };
(exports.default = rt),
	(exports.render = rt),
	(exports.shallowRender = function (t, e, n) {
		return rt(t, e, Object.assign({}, ot, n || {}));
	});
//# sourceMappingURL=index.js.map
