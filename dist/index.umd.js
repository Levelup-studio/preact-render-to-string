!(function (e, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? t(exports, require('preact'))
		: 'function' == typeof define && define.amd
		? define(['exports', 'preact'], t)
		: t(((e || self).preactRenderToString = {}), e.preact);
})(this, function (e, t) {
	var n = /[\s\n\\/='"\0<>]/,
		r = /^(xlink|xmlns|xml)([A-Z])/,
		o = /^(?:accessK|auto[A-Z]|cell|ch|col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|src[A-Z]|tabI|useM|item[A-Z])/,
		i = /^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,
		a = new Set(['draggable', 'spellcheck']),
		s = /["&<]/;
	function c(e) {
		if (0 === e.length || !1 === s.test(e)) return e;
		for (var t = 0, n = 0, r = '', o = ''; n < e.length; n++) {
			switch (e.charCodeAt(n)) {
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
			n !== t && (r += e.slice(t, n)), (r += o), (t = n + 1);
		}
		return n !== t && (r += e.slice(t, n)), r;
	}
	var l = {},
		u = new Set([
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
		f = /[A-Z]/g;
	function p(e) {
		var t = '';
		for (var n in e) {
			var r = e[n];
			if (null != r && '' !== r) {
				var o =
						'-' == n[0]
							? n
							: l[n] || (l[n] = n.replace(f, '-$&').toLowerCase()),
					i = ';';
				'number' != typeof r || o.startsWith('--') || u.has(o) || (i = 'px;'),
					(t = t + o + ':' + r + i);
			}
		}
		return t || void 0;
	}
	function h() {
		this.__d = !0;
	}
	function d(e, t) {
		return {
			__v: e,
			context: t,
			props: e.props,
			setState: h,
			forceUpdate: h,
			__d: !0,
			__h: new Array(0)
		};
	}
	function _(e, t, n) {
		if (!e.s) {
			if (n instanceof v) {
				if (!n.s) return void (n.o = _.bind(null, e, t));
				1 & t && (t = n.s), (n = n.v);
			}
			if (n && n.then)
				return void n.then(_.bind(null, e, t), _.bind(null, e, 2));
			(e.s = t), (e.v = n);
			const r = e.o;
			r && r(e);
		}
	}
	var v = /*#__PURE__*/ (function () {
		function e() {}
		return (
			(e.prototype.then = function (t, n) {
				var r = new e(),
					o = this.s;
				if (o) {
					var i = 1 & o ? t : n;
					if (i) {
						try {
							_(r, 1, i(this.v));
						} catch (e) {
							_(r, 2, e);
						}
						return r;
					}
					return this;
				}
				return (
					(this.o = function (e) {
						try {
							var o = e.v;
							1 & e.s ? _(r, 1, t ? t(o) : o) : n ? _(r, 1, n(o)) : _(r, 2, o);
						} catch (e) {
							_(r, 2, e);
						}
					}),
					r
				);
			}),
			e
		);
	})();
	function m(e) {
		return e instanceof v && 1 & e.s;
	}
	function g(e, t, n) {
		for (var r; ; ) {
			var o = e();
			if ((m(o) && (o = o.v), !o)) return i;
			if (o.then) {
				r = 0;
				break;
			}
			var i = n();
			if (i && i.then) {
				if (!m(i)) {
					r = 1;
					break;
				}
				i = i.s;
			}
			if (t) {
				var a = t();
				if (a && a.then && !m(a)) {
					r = 2;
					break;
				}
			}
		}
		var s = new v(),
			c = _.bind(null, s, 2);
		return (
			(0 === r ? o.then(u) : 1 === r ? i.then(l) : a.then(f)).then(void 0, c), s
		);
		function l(r) {
			i = r;
			do {
				if (t && (a = t()) && a.then && !m(a))
					return void a.then(f).then(void 0, c);
				if (!(o = e()) || (m(o) && !o.v)) return void _(s, 1, i);
				if (o.then) return void o.then(u).then(void 0, c);
				m((i = n())) && (i = i.v);
			} while (!i || !i.then);
			i.then(l).then(void 0, c);
		}
		function u(e) {
			e ? ((i = n()) && i.then ? i.then(l).then(void 0, c) : l(i)) : _(s, 1, i);
		}
		function f() {
			(o = e()) ? (o.then ? o.then(u).then(void 0, c) : u(o)) : _(s, 1, i);
		}
	}
	function y(e, t) {
		try {
			var n = e();
		} catch (e) {
			return t(!0, e);
		}
		return n && n.then ? n.then(t.bind(null, !1), t.bind(null, !0)) : t(!1, n);
	}
	var b,
		k,
		x,
		w,
		S = {},
		C = [],
		A = Array.isArray,
		T = Object.assign,
		F = '';
	function L(e, n, r) {
		var o = t.options.__s;
		(t.options.__s = !0),
			(b = t.options.__b),
			(k = t.options.diffed),
			(x = t.options.__r),
			(w = t.options.unmount);
		var i = t.h(t.Fragment, null);
		i.__k = [e];
		try {
			var a = j(e, n || S, !1, void 0, i, !1, r);
			return A(a) ? a.join(F) : a;
		} catch (e) {
			if (e.then)
				throw new Error('Use "renderToStringAsync" for suspenseful rendering.');
			throw e;
		} finally {
			t.options.__c && t.options.__c(e, C), (t.options.__s = o), (C.length = 0);
		}
	}
	function E(e, t) {
		var n,
			r = e.type,
			o = !0;
		return (
			e.__c ? ((o = !1), ((n = e.__c).state = n.__s)) : (n = new r(e.props, t)),
			(e.__c = n),
			(n.__v = e),
			(n.props = e.props),
			(n.context = t),
			(n.__d = !0),
			null == n.state && (n.state = S),
			null == n.__s && (n.__s = n.state),
			r.getDerivedStateFromProps
				? (n.state = T(
						{},
						n.state,
						r.getDerivedStateFromProps(n.props, n.state)
				  ))
				: o && n.componentWillMount
				? (n.componentWillMount(),
				  (n.state = n.__s !== n.state ? n.__s : n.state))
				: !o && n.componentWillUpdate && n.componentWillUpdate(),
			x && x(e),
			n.render(n.props, n.state, t)
		);
	}
	function j(e, s, l, u, f, h, _) {
		if (null == e || !0 === e || !1 === e || e === F) return F;
		var v = typeof e;
		if ('object' != v)
			return 'function' == v ? F : 'string' == v ? c(e) : e + F;
		if (A(e)) {
			var m,
				g = F;
			f.__k = e;
			for (var y = 0; y < e.length; y++) {
				var C = e[y];
				if (null != C && 'boolean' != typeof C) {
					var L,
						P = j(C, s, l, u, f, h, _);
					'string' == typeof P
						? (g += P)
						: (m || (m = []),
						  g && m.push(g),
						  (g = F),
						  A(P) ? (L = m).push.apply(L, P) : m.push(P));
				}
			}
			return m ? (g && m.push(g), m) : g;
		}
		if (void 0 !== e.constructor) return F;
		(e.__ = f), b && b(e);
		var M = e.type,
			U = e.props;
		if ('function' == typeof M) {
			var Z,
				W,
				$,
				q = s;
			if (M === t.Fragment) {
				if ('tpl' in U) {
					for (var z = F, H = 0; H < U.tpl.length; H++)
						if (((z += U.tpl[H]), U.exprs && H < U.exprs.length)) {
							var N = U.exprs[H];
							if (null == N) continue;
							'object' != typeof N || (void 0 !== N.constructor && !A(N))
								? (z += N)
								: (z += j(N, s, l, u, e, h, _));
						}
					return z;
				}
				if ('UNSTABLE_comment' in U)
					return '\x3c!--' + U.UNSTABLE_comment + '--\x3e';
				W = U.children;
			} else {
				if (null != (Z = M.contextType)) {
					var B = s[Z.__c];
					q = B ? B.props.value : Z.__;
				}
				var I = M.prototype && 'function' == typeof M.prototype.render;
				if (I) (W = E(e, q)), ($ = e.__c);
				else {
					e.__c = $ = d(e, q);
					for (var O = 0; $.__d && O++ < 25; )
						($.__d = !1), x && x(e), (W = M.call($, U, q));
					$.__d = !0;
				}
				if (
					(null != $.getChildContext && (s = T({}, s, $.getChildContext())),
					I &&
						t.options.errorBoundaries &&
						(M.getDerivedStateFromError || $.componentDidCatch))
				) {
					W =
						null != W &&
						W.type === t.Fragment &&
						null == W.key &&
						null == W.props.tpl
							? W.props.children
							: W;
					try {
						return j(W, s, l, u, e, h, _);
					} catch (n) {
						return (
							M.getDerivedStateFromError &&
								($.__s = M.getDerivedStateFromError(n)),
							$.componentDidCatch && $.componentDidCatch(n, S),
							$.__d
								? ((W = E(e, s)),
								  null != ($ = e.__c).getChildContext &&
										(s = T({}, s, $.getChildContext())),
								  j(
										(W =
											null != W &&
											W.type === t.Fragment &&
											null == W.key &&
											null == W.props.tpl
												? W.props.children
												: W),
										s,
										l,
										u,
										e,
										h,
										_
								  ))
								: F
						);
					} finally {
						k && k(e), (e.__ = null), w && w(e);
					}
				}
			}
			W =
				null != W &&
				W.type === t.Fragment &&
				null == W.key &&
				null == W.props.tpl
					? W.props.children
					: W;
			try {
				var R = j(W, s, l, u, e, h, _);
				return (
					k && k(e), (e.__ = null), t.options.unmount && t.options.unmount(e), R
				);
			} catch (n) {
				if (!h && _ && _.onError) {
					var V = _.onError(n, e, function (t) {
						return j(t, s, l, u, e, h, _);
					});
					if (void 0 !== V) return V;
					var K = t.options.__e;
					return K && K(n, e), F;
				}
				if (!h) throw n;
				if (!n || 'function' != typeof n.then) throw n;
				return n.then(function t() {
					try {
						return j(W, s, l, u, e, h, _);
					} catch (n) {
						if (!n || 'function' != typeof n.then) throw n;
						return n.then(function () {
							return j(W, s, l, u, e, h, _);
						}, t);
					}
				});
			}
		}
		var G,
			J = '<' + M,
			Q = F;
		for (var X in U) {
			var Y = U[X];
			if ('function' != typeof Y || 'class' === X || 'className' === X) {
				switch (X) {
					case 'children':
						G = Y;
						continue;
					case 'key':
					case 'ref':
					case '__self':
					case '__source':
						continue;
					case 'htmlFor':
						if ('for' in U) continue;
						X = 'for';
						break;
					case 'className':
						if ('class' in U) continue;
						X = 'class';
						break;
					case 'defaultChecked':
						X = 'checked';
						break;
					case 'defaultSelected':
						X = 'selected';
						break;
					case 'defaultValue':
					case 'value':
						switch (((X = 'value'), M)) {
							case 'textarea':
								G = Y;
								continue;
							case 'select':
								u = Y;
								continue;
							case 'option':
								u != Y || 'selected' in U || (J += ' selected');
						}
						break;
					case 'dangerouslySetInnerHTML':
						Q = Y && Y.__html;
						continue;
					case 'style':
						'object' == typeof Y && (Y = p(Y));
						break;
					case 'acceptCharset':
						X = 'accept-charset';
						break;
					case 'httpEquiv':
						X = 'http-equiv';
						break;
					default:
						if (r.test(X)) X = X.replace(r, '$1:$2').toLowerCase();
						else {
							if (n.test(X)) continue;
							('-' !== X[4] && !a.has(X)) || null == Y
								? l
									? i.test(X) &&
									  (X =
											'panose1' === X
												? 'panose-1'
												: X.replace(/([A-Z])/g, '-$1').toLowerCase())
									: o.test(X) && (X = X.toLowerCase())
								: (Y += F);
						}
				}
				null != Y &&
					!1 !== Y &&
					(J =
						!0 === Y || Y === F
							? J + ' ' + X
							: J +
							  ' ' +
							  X +
							  '="' +
							  ('string' == typeof Y ? c(Y) : Y + F) +
							  '"');
			}
		}
		if (n.test(M))
			throw new Error(M + ' is not a valid HTML tag name in ' + J + '>');
		if (
			(Q ||
				('string' == typeof G
					? (Q = c(G))
					: null != G &&
					  !1 !== G &&
					  !0 !== G &&
					  (Q = j(
							G,
							s,
							'svg' === M || ('foreignObject' !== M && l),
							u,
							e,
							h,
							_
					  ))),
			k && k(e),
			(e.__ = null),
			w && w(e),
			!Q && D.has(M))
		)
			return J + '/>';
		var ee = '</' + M + '>',
			te = J + '>';
		return A(Q)
			? [te].concat(Q, [ee])
			: 'string' != typeof Q
			? [te, Q, ee]
			: te + Q + ee;
	}
	var D = new Set([
			'area',
			'base',
			'br',
			'col',
			'command',
			'embed',
			'hr',
			'img',
			'input',
			'keygen',
			'link',
			'meta',
			'param',
			'source',
			'track',
			'wbr'
		]),
		P = L,
		M = L;
	(e.default = L),
		(e.render = P),
		(e.renderToStaticMarkup = M),
		(e.renderToString = L),
		(e.renderToStringAsync = function (e, n) {
			try {
				var r = t.options.__s;
				(t.options.__s = !0),
					(b = t.options.__b),
					(k = t.options.diffed),
					(x = t.options.__r),
					(w = t.options.unmount);
				var o = t.h(t.Fragment, null);
				return (
					(o.__k = [e]),
					Promise.resolve(
						y(
							function () {
								return Promise.resolve(
									j(e, n || S, !1, void 0, o, !0, void 0)
								).then(function (e) {
									var t,
										n = (function () {
											if (A(e)) {
												var n = function () {
														var e = o.join(F);
														return (t = 1), e;
													},
													r = 0,
													o = e,
													i = g(
														function () {
															return (
																!!o.some(function (e) {
																	return e && 'function' == typeof e.then;
																}) && r++ < 25
															);
														},
														void 0,
														function () {
															return Promise.resolve(Promise.all(o)).then(
																function (e) {
																	o = e.flat();
																}
															);
														}
													);
												return i && i.then ? i.then(n) : n();
											}
										})();
									return n && n.then
										? n.then(function (n) {
												return t ? n : e;
										  })
										: t
										? n
										: e;
								});
							},
							function (n, o) {
								if (
									(t.options.__c && t.options.__c(e, C),
									(t.options.__s = r),
									(C.length = 0),
									n)
								)
									throw o;
								return o;
							}
						)
					)
				);
			} catch (e) {
				return Promise.reject(e);
			}
		});
});
//# sourceMappingURL=index.umd.js.map
