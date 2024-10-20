var e = require('preact'),
	t = /[\s\n\\/='"\0<>]/,
	n = /^(xlink|xmlns|xml)([A-Z])/,
	r = /^(?:accessK|auto[A-Z]|cell|ch|col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|src[A-Z]|tabI|useM|item[A-Z])/,
	o = /^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,
	i = new Set(['draggable', 'spellcheck']),
	a = /["&<]/;
function s(e) {
	if (0 === e.length || !1 === a.test(e)) return e;
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
var c = {},
	l = new Set([
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
	u = /[A-Z]/g;
function p(e) {
	var t = '';
	for (var n in e) {
		var r = e[n];
		if (null != r && '' !== r) {
			var o =
					'-' == n[0] ? n : c[n] || (c[n] = n.replace(u, '-$&').toLowerCase()),
				i = ';';
			'number' != typeof r || o.startsWith('--') || l.has(o) || (i = 'px;'),
				(t = t + o + ':' + r + i);
		}
	}
	return t || void 0;
}
function f() {
	this.__d = !0;
}
function h(e, t) {
	return {
		__v: e,
		context: t,
		props: e.props,
		setState: f,
		forceUpdate: f,
		__d: !0,
		__h: new Array(0)
	};
}
function d(e, t, n) {
	if (!e.s) {
		if (n instanceof _) {
			if (!n.s) return void (n.o = d.bind(null, e, t));
			1 & t && (t = n.s), (n = n.v);
		}
		if (n && n.then) return void n.then(d.bind(null, e, t), d.bind(null, e, 2));
		(e.s = t), (e.v = n);
		const r = e.o;
		r && r(e);
	}
}
var _ = /*#__PURE__*/ (function () {
	function e() {}
	return (
		(e.prototype.then = function (t, n) {
			var r = new e(),
				o = this.s;
			if (o) {
				var i = 1 & o ? t : n;
				if (i) {
					try {
						d(r, 1, i(this.v));
					} catch (e) {
						d(r, 2, e);
					}
					return r;
				}
				return this;
			}
			return (
				(this.o = function (e) {
					try {
						var o = e.v;
						1 & e.s ? d(r, 1, t ? t(o) : o) : n ? d(r, 1, n(o)) : d(r, 2, o);
					} catch (e) {
						d(r, 2, e);
					}
				}),
				r
			);
		}),
		e
	);
})();
function v(e) {
	return e instanceof _ && 1 & e.s;
}
function m(e, t, n) {
	for (var r; ; ) {
		var o = e();
		if ((v(o) && (o = o.v), !o)) return i;
		if (o.then) {
			r = 0;
			break;
		}
		var i = n();
		if (i && i.then) {
			if (!v(i)) {
				r = 1;
				break;
			}
			i = i.s;
		}
		if (t) {
			var a = t();
			if (a && a.then && !v(a)) {
				r = 2;
				break;
			}
		}
	}
	var s = new _(),
		c = d.bind(null, s, 2);
	return (
		(0 === r ? o.then(u) : 1 === r ? i.then(l) : a.then(p)).then(void 0, c), s
	);
	function l(r) {
		i = r;
		do {
			if (t && (a = t()) && a.then && !v(a))
				return void a.then(p).then(void 0, c);
			if (!(o = e()) || (v(o) && !o.v)) return void d(s, 1, i);
			if (o.then) return void o.then(u).then(void 0, c);
			v((i = n())) && (i = i.v);
		} while (!i || !i.then);
		i.then(l).then(void 0, c);
	}
	function u(e) {
		e ? ((i = n()) && i.then ? i.then(l).then(void 0, c) : l(i)) : d(s, 1, i);
	}
	function p() {
		(o = e()) ? (o.then ? o.then(u).then(void 0, c) : u(o)) : d(s, 1, i);
	}
}
function g(e, t) {
	try {
		var n = e();
	} catch (e) {
		return t(!0, e);
	}
	return n && n.then ? n.then(t.bind(null, !1), t.bind(null, !0)) : t(!1, n);
}
var y,
	b,
	k,
	x,
	w = {},
	C = [],
	S = Array.isArray,
	A = Object.assign;
function F(t, n, r) {
	var o = e.options.__s;
	(e.options.__s = !0),
		(y = e.options.__b),
		(b = e.options.diffed),
		(k = e.options.__r),
		(x = e.options.unmount);
	var i = e.h(e.Fragment, null);
	i.__k = [t];
	try {
		var a = T(t, n || w, !1, void 0, i, !1, r);
		return S(a) ? a.join('') : a;
	} catch (e) {
		if (e.then)
			throw new Error('Use "renderToStringAsync" for suspenseful rendering.');
		throw e;
	} finally {
		e.options.__c && e.options.__c(t, C), (e.options.__s = o), (C.length = 0);
	}
}
function L(e, t) {
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
		null == n.state && (n.state = w),
		null == n.__s && (n.__s = n.state),
		r.getDerivedStateFromProps
			? (n.state = A({}, n.state, r.getDerivedStateFromProps(n.props, n.state)))
			: o && n.componentWillMount
			? (n.componentWillMount(),
			  (n.state = n.__s !== n.state ? n.__s : n.state))
			: !o && n.componentWillUpdate && n.componentWillUpdate(),
		k && k(e),
		n.render(n.props, n.state, t)
	);
}
function T(a, c, l, u, f, d, _) {
	if (null == a || !0 === a || !1 === a || '' === a) return '';
	var v = typeof a;
	if ('object' != v)
		return 'function' == v ? '' : 'string' == v ? s(a) : a + '';
	if (S(a)) {
		var m,
			g = '';
		f.__k = a;
		for (var C = 0; C < a.length; C++) {
			var F = a[C];
			if (null != F && 'boolean' != typeof F) {
				var j,
					D = T(F, c, l, u, f, d, _);
				'string' == typeof D
					? (g += D)
					: (m || (m = []),
					  g && m.push(g),
					  (g = ''),
					  S(D) ? (j = m).push.apply(j, D) : m.push(D));
			}
		}
		return m ? (g && m.push(g), m) : g;
	}
	if (void 0 !== a.constructor) return '';
	(a.__ = f), y && y(a);
	var P = a.type,
		M = a.props;
	if ('function' == typeof P) {
		var U,
			Z,
			W,
			$ = c;
		if (P === e.Fragment) {
			if ('tpl' in M) {
				for (var q = '', z = 0; z < M.tpl.length; z++)
					if (((q += M.tpl[z]), M.exprs && z < M.exprs.length)) {
						var H = M.exprs[z];
						if (null == H) continue;
						'object' != typeof H || (void 0 !== H.constructor && !S(H))
							? (q += H)
							: (q += T(H, c, l, u, a, d, _));
					}
				return q;
			}
			if ('UNSTABLE_comment' in M)
				return '\x3c!--' + M.UNSTABLE_comment + '--\x3e';
			Z = M.children;
		} else {
			if (null != (U = P.contextType)) {
				var N = c[U.__c];
				$ = N ? N.props.value : U.__;
			}
			var B = P.prototype && 'function' == typeof P.prototype.render;
			if (B) (Z = L(a, $)), (W = a.__c);
			else {
				a.__c = W = h(a, $);
				for (var I = 0; W.__d && I++ < 25; )
					(W.__d = !1), k && k(a), (Z = P.call(W, M, $));
				W.__d = !0;
			}
			if (
				(null != W.getChildContext && (c = A({}, c, W.getChildContext())),
				B &&
					e.options.errorBoundaries &&
					(P.getDerivedStateFromError || W.componentDidCatch))
			) {
				Z =
					null != Z &&
					Z.type === e.Fragment &&
					null == Z.key &&
					null == Z.props.tpl
						? Z.props.children
						: Z;
				try {
					return T(Z, c, l, u, a, d, _);
				} catch (t) {
					return (
						P.getDerivedStateFromError &&
							(W.__s = P.getDerivedStateFromError(t)),
						W.componentDidCatch && W.componentDidCatch(t, w),
						W.__d
							? ((Z = L(a, c)),
							  null != (W = a.__c).getChildContext &&
									(c = A({}, c, W.getChildContext())),
							  T(
									(Z =
										null != Z &&
										Z.type === e.Fragment &&
										null == Z.key &&
										null == Z.props.tpl
											? Z.props.children
											: Z),
									c,
									l,
									u,
									a,
									d,
									_
							  ))
							: ''
					);
				} finally {
					b && b(a), (a.__ = null), x && x(a);
				}
			}
		}
		Z =
			null != Z && Z.type === e.Fragment && null == Z.key && null == Z.props.tpl
				? Z.props.children
				: Z;
		try {
			var O = T(Z, c, l, u, a, d, _);
			return (
				b && b(a), (a.__ = null), e.options.unmount && e.options.unmount(a), O
			);
		} catch (t) {
			if (!d && _ && _.onError) {
				var R = _.onError(t, a, function (e) {
					return T(e, c, l, u, a, d, _);
				});
				if (void 0 !== R) return R;
				var V = e.options.__e;
				return V && V(t, a), '';
			}
			if (!d) throw t;
			if (!t || 'function' != typeof t.then) throw t;
			return t.then(function e() {
				try {
					return T(Z, c, l, u, a, d, _);
				} catch (t) {
					if (!t || 'function' != typeof t.then) throw t;
					return t.then(function () {
						return T(Z, c, l, u, a, d, _);
					}, e);
				}
			});
		}
	}
	var K,
		G = '<' + P,
		J = '';
	for (var Q in M) {
		var X = M[Q];
		if ('function' != typeof X || 'class' === Q || 'className' === Q) {
			switch (Q) {
				case 'children':
					K = X;
					continue;
				case 'key':
				case 'ref':
				case '__self':
				case '__source':
					continue;
				case 'htmlFor':
					if ('for' in M) continue;
					Q = 'for';
					break;
				case 'className':
					if ('class' in M) continue;
					Q = 'class';
					break;
				case 'defaultChecked':
					Q = 'checked';
					break;
				case 'defaultSelected':
					Q = 'selected';
					break;
				case 'defaultValue':
				case 'value':
					switch (((Q = 'value'), P)) {
						case 'textarea':
							K = X;
							continue;
						case 'select':
							u = X;
							continue;
						case 'option':
							u != X || 'selected' in M || (G += ' selected');
					}
					break;
				case 'dangerouslySetInnerHTML':
					J = X && X.__html;
					continue;
				case 'style':
					'object' == typeof X && (X = p(X));
					break;
				case 'acceptCharset':
					Q = 'accept-charset';
					break;
				case 'httpEquiv':
					Q = 'http-equiv';
					break;
				default:
					if (n.test(Q)) Q = Q.replace(n, '$1:$2').toLowerCase();
					else {
						if (t.test(Q)) continue;
						('-' !== Q[4] && !i.has(Q)) || null == X
							? l
								? o.test(Q) &&
								  (Q =
										'panose1' === Q
											? 'panose-1'
											: Q.replace(/([A-Z])/g, '-$1').toLowerCase())
								: r.test(Q) && (Q = Q.toLowerCase())
							: (X += '');
					}
			}
			null != X &&
				!1 !== X &&
				(G =
					!0 === X || '' === X
						? G + ' ' + Q
						: G +
						  ' ' +
						  Q +
						  '="' +
						  ('string' == typeof X ? s(X) : X + '') +
						  '"');
		}
	}
	if (t.test(P))
		throw new Error(P + ' is not a valid HTML tag name in ' + G + '>');
	if (
		(J ||
			('string' == typeof K
				? (J = s(K))
				: null != K &&
				  !1 !== K &&
				  !0 !== K &&
				  (J = T(
						K,
						c,
						'svg' === P || ('foreignObject' !== P && l),
						u,
						a,
						d,
						_
				  ))),
		b && b(a),
		(a.__ = null),
		x && x(a),
		!J && E.has(P))
	)
		return G + '/>';
	var Y = '</' + P + '>',
		ee = G + '>';
	return S(J)
		? [ee].concat(J, [Y])
		: 'string' != typeof J
		? [ee, J, Y]
		: ee + J + Y;
}
var E = new Set([
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
	j = F,
	D = F;
(exports.default = F),
	(exports.render = j),
	(exports.renderToStaticMarkup = D),
	(exports.renderToString = F),
	(exports.renderToStringAsync = function (t, n) {
		try {
			var r = e.options.__s;
			(e.options.__s = !0),
				(y = e.options.__b),
				(b = e.options.diffed),
				(k = e.options.__r),
				(x = e.options.unmount);
			var o = e.h(e.Fragment, null);
			return (
				(o.__k = [t]),
				Promise.resolve(
					g(
						function () {
							return Promise.resolve(
								T(t, n || w, !1, void 0, o, !0, void 0)
							).then(function (e) {
								var t,
									n = (function () {
										if (S(e)) {
											var n = function () {
													var e = o.join('');
													return (t = 1), e;
												},
												r = 0,
												o = e,
												i = m(
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
								(e.options.__c && e.options.__c(t, C),
								(e.options.__s = r),
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
//# sourceMappingURL=index.js.map
