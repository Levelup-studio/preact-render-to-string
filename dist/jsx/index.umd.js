!(function (t, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? e(exports, require('preact'))
		: 'function' == typeof define && define.amd
		? define(['exports', 'preact'], e)
		: e(((t || self).preactRenderToString = {}), t.preact);
})(this, function (t, e) {
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
		s = /["&<]/;
	function l(t) {
		if (0 === t.length || !1 === s.test(t)) return t;
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
						'-' == n[0]
							? n
							: p[n] || (p[n] = n.replace(g, '-$&').toLowerCase()),
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
	function j(t, n, r, o) {
		var i = e.options.__s;
		e.options.__s = !0;
		try {
			return S(t, n || {}, r, o);
		} finally {
			e.options.__c && e.options.__c(t, x), (e.options.__s = i), (x.length = 0);
		}
	}
	function S(t, n, s, p, d, g) {
		if (null == t || 'boolean' == typeof t) return '';
		if ('object' != typeof t) return 'function' == typeof t ? '' : l(t + '');
		var m = s.pretty,
			_ = m && 'string' == typeof m ? m : '\t';
		if (Array.isArray(t)) {
			for (var x = '', j = 0; j < t.length; j++)
				m && j > 0 && (x += '\n'), (x += S(t[j], n, s, p, d, g));
			return x;
		}
		if (void 0 !== t.constructor) return '';
		e.options.__b && e.options.__b(t);
		var w,
			A = t.type,
			O = t.props,
			F = !1;
		if ('function' == typeof A) {
			if (
				((F = !0),
				!s.shallow || (!p && !1 !== s.renderRootComponent) || A === e.Fragment)
			) {
				if (A === e.Fragment) {
					var C = [];
					return (
						b(C, t.props.children), S(C, n, s, !1 !== s.shallowHighOrder, d, g)
					);
				}
				var E,
					M = (t.__c = h(t, n)),
					$ = e.options.__r;
				if (A.prototype && 'function' == typeof A.prototype.render) {
					var H = v(A, n);
					((M = t.__c = new A(O, H)).__v = t),
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
						$ && $(t),
						(E = M.render(M.props, M.state, M.context));
				} else
					for (var L = v(A, n), I = 0; M.__d && I++ < 25; )
						(M.__d = !1), $ && $(t), (E = A.call(t.__c, O, L));
				M.getChildContext && (n = Object.assign({}, n, M.getChildContext()));
				var T = S(E, n, s, !1 !== s.shallowHighOrder, d, g);
				return e.options.diffed && e.options.diffed(t), T;
			}
			A = (w = A).displayName || (w !== Function && w.name) || k(w);
		}
		var N,
			D,
			W = '<' + A;
		if (O) {
			var R = Object.keys(O);
			s && !0 === s.sortAttributes && R.sort();
			for (var U = 0; U < R.length; U++) {
				var Z = R[U],
					P = O[Z];
				if ('children' !== Z) {
					if (
						!o.test(Z) &&
						((s && s.allAttributes) ||
							('key' !== Z &&
								'ref' !== Z &&
								'__self' !== Z &&
								'__source' !== Z))
					) {
						if ('defaultValue' === Z) Z = 'value';
						else if ('defaultChecked' === Z) Z = 'checked';
						else if ('defaultSelected' === Z) Z = 'selected';
						else if ('className' === Z) {
							if (void 0 !== O.class) continue;
							Z = 'class';
						} else
							'acceptCharset' === Z
								? (Z = 'accept-charset')
								: 'httpEquiv' === Z
								? (Z = 'http-equiv')
								: i.test(Z)
								? (Z = Z.replace(i, '$1:$2').toLowerCase())
								: d
								? c.test(Z) &&
								  (Z =
										'panose1' === Z
											? 'panose-1'
											: Z.replace(/([A-Z])/g, '-$1').toLowerCase())
								: a.test(Z) && (Z = Z.toLowerCase());
						if ('htmlFor' === Z) {
							if (O.for) continue;
							Z = 'for';
						}
						'style' === Z && P && 'object' == typeof P && (P = y(P)),
							'a' === Z[0] &&
								'r' === Z[1] &&
								'boolean' == typeof P &&
								(P = String(P));
						var q = s.attributeHook && s.attributeHook(Z, P, n, s, F);
						if (q || '' === q) W += q;
						else if ('dangerouslySetInnerHTML' === Z) D = P && P.__html;
						else if ('textarea' === A && 'value' === Z) N = P;
						else if ((P || 0 === P || '' === P) && 'function' != typeof P) {
							if (!((!0 !== P && '' !== P) || ((P = Z), s && s.xml))) {
								W = W + ' ' + Z;
								continue;
							}
							if ('value' === Z) {
								if ('select' === A) {
									g = P;
									continue;
								}
								'option' === A &&
									g == P &&
									void 0 === O.selected &&
									(W += ' selected');
							}
							W = W + ' ' + Z + '="' + l(P + '') + '"';
						}
					}
				} else N = P;
			}
		}
		if (m) {
			var z = W.replace(/\n\s*/, ' ');
			z === W || ~z.indexOf('\n')
				? m && ~W.indexOf('\n') && (W += '\n')
				: (W = z);
		}
		if (((W += '>'), o.test(A)))
			throw new Error(A + ' is not a valid HTML tag name in ' + W);
		var J,
			V = r.test(A) || (s.voidElements && s.voidElements.test(A)),
			B = [];
		if (D) m && f(D) && (D = '\n' + _ + u(D, _)), (W += D);
		else if (null != N && b((J = []), N).length) {
			for (var G = m && ~W.indexOf('\n'), K = !1, Q = 0; Q < J.length; Q++) {
				var X = J[Q];
				if (null != X && !1 !== X) {
					var Y = S(
						X,
						n,
						s,
						!0,
						'svg' === A || ('foreignObject' !== A && d),
						g
					);
					if ((m && !G && f(Y) && (G = !0), Y))
						if (m) {
							var tt = Y.length > 0 && '<' != Y[0];
							K && tt ? (B[B.length - 1] += Y) : B.push(Y), (K = tt);
						} else B.push(Y);
				}
			}
			if (m && G)
				for (var et = B.length; et--; ) B[et] = '\n' + _ + u(B[et], _);
		}
		if ((e.options.diffed && e.options.diffed(t), B.length || D))
			W += B.join('');
		else if (s && s.xml) return W.substring(0, W.length - 1) + ' />';
		return (
			!V || J || D
				? (m && ~W.indexOf('\n') && (W += '\n'), (W = W + '</' + A + '>'))
				: (W = W.replace(/>$/, ' />')),
			W
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
	const w = /(\\|\"|\')/g;
	var A = function (t) {
		return t.replace(w, '\\$1');
	};
	const O = Object.prototype.toString,
		F = Date.prototype.toISOString,
		C = Error.prototype.toString,
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
	function T(t) {
		return t != +t ? 'NaN' : 0 === t && 1 / t < 0 ? '-0' : '' + t;
	}
	function N(t) {
		return '' === t.name ? '[Function anonymous]' : '[Function ' + t.name + ']';
	}
	function D(t) {
		return M.call(t).replace($, 'Symbol($1)');
	}
	function W(t) {
		return '[' + C.call(t) + ']';
	}
	function R(t) {
		if (!0 === t || !1 === t) return '' + t;
		if (void 0 === t) return 'undefined';
		if (null === t) return 'null';
		const e = typeof t;
		if ('number' === e) return T(t);
		if ('string' === e) return '"' + A(t) + '"';
		if ('function' === e) return N(t);
		if ('symbol' === e) return D(t);
		const n = O.call(t);
		return '[object WeakMap]' === n
			? 'WeakMap {}'
			: '[object WeakSet]' === n
			? 'WeakSet {}'
			: '[object Function]' === n || '[object GeneratorFunction]' === n
			? N(t, min)
			: '[object Symbol]' === n
			? D(t)
			: '[object Date]' === n
			? F.call(t)
			: '[object Error]' === n
			? W(t)
			: '[object RegExp]' === n
			? E.call(t)
			: '[object Arguments]' === n && 0 === t.length
			? 'Arguments []'
			: I(n) && 0 === t.length
			? t.constructor.name + ' []'
			: t instanceof Error && W(t);
	}
	function U(t, e, n, r, o, i, a, c, s, l) {
		let u = '';
		if (t.length) {
			u += o;
			const f = n + e;
			for (let n = 0; n < t.length; n++)
				(u += f + G(t[n], e, f, r, o, i, a, c, s, l)),
					n < t.length - 1 && (u += ',' + r);
			u += o + n;
		}
		return '[' + u + ']';
	}
	function Z(t, e, n, r, o, i, a, c, s, l) {
		return (l ? '' : 'Arguments ') + U(t, e, n, r, o, i, a, c, s, l);
	}
	function P(t, e, n, r, o, i, a, c, s, l) {
		return (
			(l ? '' : t.constructor.name + ' ') + U(t, e, n, r, o, i, a, c, s, l)
		);
	}
	function q(t, e, n, r, o, i, a, c, s, l) {
		let u = 'Map {';
		const f = t.entries();
		let p = f.next();
		if (!p.done) {
			u += o;
			const t = n + e;
			for (; !p.done; )
				(u +=
					t +
					G(p.value[0], e, t, r, o, i, a, c, s, l) +
					' => ' +
					G(p.value[1], e, t, r, o, i, a, c, s, l)),
					(p = f.next()),
					p.done || (u += ',' + r);
			u += o + n;
		}
		return u + '}';
	}
	function z(t, e, n, r, o, i, a, c, s, l) {
		let u =
				(l ? '' : t.constructor ? t.constructor.name + ' ' : 'Object ') + '{',
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
					G(d, e, p, r, o, i, a, c, s, l) +
					': ' +
					G(t[d], e, p, r, o, i, a, c, s, l)),
					n < f.length - 1 && (u += ',' + r);
			}
			u += o + n;
		}
		return u + '}';
	}
	function J(t, e, n, r, o, i, a, c, s, l) {
		let u = 'Set {';
		const f = t.entries();
		let p = f.next();
		if (!p.done) {
			u += o;
			const t = n + e;
			for (; !p.done; )
				(u += t + G(p.value[1], e, t, r, o, i, a, c, s, l)),
					(p = f.next()),
					p.done || (u += ',' + r);
			u += o + n;
		}
		return u + '}';
	}
	function V(t, e, n, r, o, i, a, c, s, l) {
		if ((i = i.slice()).indexOf(t) > -1) return '[Circular]';
		i.push(t);
		const u = ++c > a;
		if (!u && t.toJSON && 'function' == typeof t.toJSON)
			return G(t.toJSON(), e, n, r, o, i, a, c, s, l);
		const f = O.call(t);
		return '[object Arguments]' === f
			? u
				? '[Arguments]'
				: Z(t, e, n, r, o, i, a, c, s, l)
			: I(f)
			? u
				? '[Array]'
				: P(t, e, n, r, o, i, a, c, s, l)
			: '[object Map]' === f
			? u
				? '[Map]'
				: q(t, e, n, r, o, i, a, c, s, l)
			: '[object Set]' === f
			? u
				? '[Set]'
				: J(t, e, n, r, o, i, a, c, s, l)
			: 'object' == typeof t
			? u
				? '[Object]'
				: z(t, e, n, r, o, i, a, c, s, l)
			: void 0;
	}
	function B(t, e, n, r, o, i, a, c, s, l) {
		let u,
			f = !1;
		for (let e = 0; e < s.length; e++)
			if (((u = s[e]), u.test(t))) {
				f = !0;
				break;
			}
		return (
			!!f &&
			u.print(
				t,
				function (t) {
					return G(t, e, n, r, o, i, a, c, s, l);
				},
				function (t) {
					const r = n + e;
					return r + t.replace(H, '\n' + r);
				},
				{ edgeSpacing: o, spacing: r }
			)
		);
	}
	function G(t, e, n, r, o, i, a, c, s, l) {
		return (
			R(t) || B(t, e, n, r, o, i, a, c, s, l) || V(t, e, n, r, o, i, a, c, s, l)
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
				R(t) ||
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
					: '\n' + a + t + '="' + l(e) + '"';
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
	(t.default = ot),
		(t.render = ot),
		(t.shallowRender = function (t, e, n) {
			return ot(t, e, Object.assign({}, it, n || {}));
		});
});
//# sourceMappingURL=index.umd.js.map
