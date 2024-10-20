var e = require('preact'),
	t = /[\s\n\\/='"\0<>]/,
	r = /^(xlink|xmlns|xml)([A-Z])/,
	n = /^(?:accessK|auto[A-Z]|cell|ch|col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|src[A-Z]|tabI|useM|item[A-Z])/,
	o = /^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,
	i = new Set(['draggable', 'spellcheck']),
	a = /["&<]/;
function s(e) {
	if (0 === e.length || !1 === a.test(e)) return e;
	for (var t = 0, r = 0, n = '', o = ''; r < e.length; r++) {
		switch (e.charCodeAt(r)) {
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
		r !== t && (n += e.slice(t, r)), (n += o), (t = r + 1);
	}
	return r !== t && (n += e.slice(t, r)), n;
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
	for (var r in e) {
		var n = e[r];
		if (null != n && '' !== n) {
			var o =
					'-' == r[0] ? r : c[r] || (c[r] = r.replace(u, '-$&').toLowerCase()),
				i = ';';
			'number' != typeof n || o.startsWith('--') || l.has(o) || (i = 'px;'),
				(t = t + o + ':' + n + i);
		}
	}
	return t || void 0;
}
function f() {
	this.__d = !0;
}
function d(e, t) {
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
var h,
	v,
	_,
	m,
	g = function () {
		var e = this;
		this.promise = new Promise(function (t, r) {
			(e.resolve = t), (e.reject = r);
		});
	},
	b = {},
	y = [],
	x = Array.isArray,
	k = Object.assign;
function w(t, r, n) {
	var o = e.options.__s;
	(e.options.__s = !0),
		(h = e.options.__b),
		(v = e.options.diffed),
		(_ = e.options.__r),
		(m = e.options.unmount);
	var i = e.h(e.Fragment, null);
	i.__k = [t];
	try {
		var a = S(t, r || b, !1, void 0, i, !1, n);
		return x(a) ? a.join('') : a;
	} catch (e) {
		if (e.then)
			throw new Error('Use "renderToStringAsync" for suspenseful rendering.');
		throw e;
	} finally {
		e.options.__c && e.options.__c(t, y), (e.options.__s = o), (y.length = 0);
	}
}
function C(e, t) {
	var r,
		n = e.type,
		o = !0;
	return (
		e.__c ? ((o = !1), ((r = e.__c).state = r.__s)) : (r = new n(e.props, t)),
		(e.__c = r),
		(r.__v = e),
		(r.props = e.props),
		(r.context = t),
		(r.__d = !0),
		null == r.state && (r.state = b),
		null == r.__s && (r.__s = r.state),
		n.getDerivedStateFromProps
			? (r.state = k({}, r.state, n.getDerivedStateFromProps(r.props, r.state)))
			: o && r.componentWillMount
			? (r.componentWillMount(),
			  (r.state = r.__s !== r.state ? r.__s : r.state))
			: !o && r.componentWillUpdate && r.componentWillUpdate(),
		_ && _(e),
		r.render(r.props, r.state, t)
	);
}
function S(a, c, l, u, f, g, y) {
	if (null == a || !0 === a || !1 === a || '' === a) return '';
	var w = typeof a;
	if ('object' != w)
		return 'function' == w ? '' : 'string' == w ? s(a) : a + '';
	if (x(a)) {
		var A,
			L = '';
		f.__k = a;
		for (var P = 0; P < a.length; P++) {
			var F = a[P];
			if (null != F && 'boolean' != typeof F) {
				var T,
					j = S(F, c, l, u, f, g, y);
				'string' == typeof j
					? (L += j)
					: (A || (A = []),
					  L && A.push(L),
					  (L = ''),
					  x(j) ? (T = A).push.apply(T, j) : A.push(j));
			}
		}
		return A ? (L && A.push(L), A) : L;
	}
	if (void 0 !== a.constructor) return '';
	(a.__ = f), h && h(a);
	var W = a.type,
		D = a.props;
	if ('function' == typeof W) {
		var N,
			M,
			U,
			Z = c;
		if (W === e.Fragment) {
			if ('tpl' in D) {
				for (var q = '', $ = 0; $ < D.tpl.length; $++)
					if (((q += D.tpl[$]), D.exprs && $ < D.exprs.length)) {
						var H = D.exprs[$];
						if (null == H) continue;
						'object' != typeof H || (void 0 !== H.constructor && !x(H))
							? (q += H)
							: (q += S(H, c, l, u, a, g, y));
					}
				return q;
			}
			if ('UNSTABLE_comment' in D)
				return '\x3c!--' + D.UNSTABLE_comment + '--\x3e';
			M = D.children;
		} else {
			if (null != (N = W.contextType)) {
				var R = c[N.__c];
				Z = R ? R.props.value : N.__;
			}
			var z = W.prototype && 'function' == typeof W.prototype.render;
			if (z) (M = C(a, Z)), (U = a.__c);
			else {
				a.__c = U = d(a, Z);
				for (var I = 0; U.__d && I++ < 25; )
					(U.__d = !1), _ && _(a), (M = W.call(U, D, Z));
				U.__d = !0;
			}
			if (
				(null != U.getChildContext && (c = k({}, c, U.getChildContext())),
				z &&
					e.options.errorBoundaries &&
					(W.getDerivedStateFromError || U.componentDidCatch))
			) {
				M =
					null != M &&
					M.type === e.Fragment &&
					null == M.key &&
					null == M.props.tpl
						? M.props.children
						: M;
				try {
					return S(M, c, l, u, a, g, y);
				} catch (t) {
					return (
						W.getDerivedStateFromError &&
							(U.__s = W.getDerivedStateFromError(t)),
						U.componentDidCatch && U.componentDidCatch(t, b),
						U.__d
							? ((M = C(a, c)),
							  null != (U = a.__c).getChildContext &&
									(c = k({}, c, U.getChildContext())),
							  S(
									(M =
										null != M &&
										M.type === e.Fragment &&
										null == M.key &&
										null == M.props.tpl
											? M.props.children
											: M),
									c,
									l,
									u,
									a,
									g,
									y
							  ))
							: ''
					);
				} finally {
					v && v(a), (a.__ = null), m && m(a);
				}
			}
		}
		M =
			null != M && M.type === e.Fragment && null == M.key && null == M.props.tpl
				? M.props.children
				: M;
		try {
			var B = S(M, c, l, u, a, g, y);
			return (
				v && v(a), (a.__ = null), e.options.unmount && e.options.unmount(a), B
			);
		} catch (t) {
			if (!g && y && y.onError) {
				var O = y.onError(t, a, function (e) {
					return S(e, c, l, u, a, g, y);
				});
				if (void 0 !== O) return O;
				var V = e.options.__e;
				return V && V(t, a), '';
			}
			if (!g) throw t;
			if (!t || 'function' != typeof t.then) throw t;
			return t.then(function e() {
				try {
					return S(M, c, l, u, a, g, y);
				} catch (t) {
					if (!t || 'function' != typeof t.then) throw t;
					return t.then(function () {
						return S(M, c, l, u, a, g, y);
					}, e);
				}
			});
		}
	}
	var K,
		G = '<' + W,
		J = '';
	for (var Q in D) {
		var X = D[Q];
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
					if ('for' in D) continue;
					Q = 'for';
					break;
				case 'className':
					if ('class' in D) continue;
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
					switch (((Q = 'value'), W)) {
						case 'textarea':
							K = X;
							continue;
						case 'select':
							u = X;
							continue;
						case 'option':
							u != X || 'selected' in D || (G += ' selected');
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
					if (r.test(Q)) Q = Q.replace(r, '$1:$2').toLowerCase();
					else {
						if (t.test(Q)) continue;
						('-' !== Q[4] && !i.has(Q)) || null == X
							? l
								? o.test(Q) &&
								  (Q =
										'panose1' === Q
											? 'panose-1'
											: Q.replace(/([A-Z])/g, '-$1').toLowerCase())
								: n.test(Q) && (Q = Q.toLowerCase())
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
	if (t.test(W))
		throw new Error(W + ' is not a valid HTML tag name in ' + G + '>');
	if (
		(J ||
			('string' == typeof K
				? (J = s(K))
				: null != K &&
				  !1 !== K &&
				  !0 !== K &&
				  (J = S(
						K,
						c,
						'svg' === W || ('foreignObject' !== W && l),
						u,
						a,
						g,
						y
				  ))),
		v && v(a),
		(a.__ = null),
		m && m(a),
		!J && E.has(W))
	)
		return G + '/>';
	var Y = '</' + W + '>',
		ee = G + '>';
	return x(J)
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
]);
function A(e, t) {
	return (
		'<preact-island hidden data-target="' + e + '">' + t + '</preact-island>'
	);
}
var L = function e(t) {
		try {
			var r = (function () {
				if (t.suspended.length > 0) {
					var r = [].concat(t.suspended);
					return Promise.resolve(
						Promise.all(
							t.suspended.map(function (e) {
								return e.promise;
							})
						)
					).then(function () {
						return (
							(t.suspended = t.suspended.filter(function (e) {
								return !r.includes(e);
							})),
							Promise.resolve(e(t)).then(function () {})
						);
					});
				}
			})();
			return Promise.resolve(r && r.then ? r.then(function () {}) : void 0);
		} catch (e) {
			return Promise.reject(e);
		}
	},
	P = function (e, t) {
		var r = t.context,
			n = t.onWrite,
			o = t.abortSignal;
		try {
			r = r || {};
			var i = {
					start: Date.now(),
					abortSignal: o,
					onWrite: n,
					onError: F,
					suspended: []
				},
				a = w(e, r, i);
			n(a);
			var s = i.suspended.length,
				c = (function () {
					if (s > 0)
						return (
							n('<div hidden>'),
							n(
								'<script>(function(){class e extends HTMLElement{connectedCallback(){var e=this;if(!e.isConnected)return;let t=this.getAttribute("data-target");if(t){for(var r,a,i=document.createNodeIterator(document,128);i.nextNode();){let e=i.referenceNode;if(e.data=="preact-island:"+t?r=e:e.data=="/preact-island:"+t&&(a=e),r&&a)break}r&&a&&requestAnimationFrame((()=>{for(var t=a.previousSibling;t!=r&&t&&t!=r;)a.parentNode.removeChild(t),t=a.previousSibling;for(i=r;e.firstChild;)r=e.firstChild,e.removeChild(r),i.after(r),i=r;e.parentNode.removeChild(e)}))}}}customElements.define("preact-island",e);}())</script>'
							),
							Promise.resolve(L(i)).then(function () {
								n('</div>');
							})
						);
				})();
			return Promise.resolve(c && c.then ? c.then(function () {}) : void 0);
		} catch (e) {
			return Promise.reject(e);
		}
	};
function F(e, t, r) {
	var n = this;
	if (e && e.then) {
		for (; (t = t.__); ) {
			var o = t.__c;
			if (o && o.__c) break;
		}
		if (t) {
			var i = t.__v,
				a = this.suspended.find(function (e) {
					return e.id === i;
				}),
				s = new g(),
				c = this.abortSignal;
			c && (c.aborted ? s.resolve() : c.addEventListener('abort', s.resolve));
			var l = e.then(function () {
				if (!c || !c.aborted) {
					var e = r(t.props.children);
					e && n.onWrite(A(i, e));
				}
			}, this.onError);
			this.suspended.push({
				id: i,
				vnode: t,
				promise: Promise.race([l, s.promise])
			});
			var u = r(t.props.fallback);
			return a
				? ''
				: '\x3c!--preact-island:' +
						i +
						'--\x3e' +
						u +
						'\x3c!--/preact-island:' +
						i +
						'--\x3e';
		}
	}
}
exports.renderToReadableStream = function (e, t) {
	var r = new g(),
		n = new TextEncoder('utf-8'),
		o = new ReadableStream({
			start: function (o) {
				P(e, {
					context: t,
					onError: function (e) {
						r.reject(e), o.abort(e);
					},
					onWrite: function (e) {
						o.enqueue(n.encode(e));
					}
				})
					.then(function () {
						o.close(), r.resolve();
					})
					.catch(function (e) {
						o.error(e), r.reject(e);
					});
			}
		});
	return (o.allReady = r.promise), o;
};
//# sourceMappingURL=index.js.map
