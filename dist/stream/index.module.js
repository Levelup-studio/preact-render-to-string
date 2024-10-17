import { options as e, h as t, Fragment as r } from 'preact';
var n = /[\s\n\\/='"\0<>]/,
	o = /^(xlink|xmlns|xml)([A-Z])/,
	a = /^(?:accessK|auto[A-Z]|cell|ch|col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|src[A-Z]|tabI|useM|item[A-Z])/,
	i = /^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,
	s = new Set(['draggable', 'spellcheck']),
	c = /["&<]/;
function l(e) {
	if (0 === e.length || !1 === c.test(e)) return e;
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
var u = {},
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
	f = /[A-Z]/g;
function d(e) {
	var t = '';
	for (var r in e) {
		var n = e[r];
		if (null != n && '' !== n) {
			var o =
					'-' == r[0] ? r : u[r] || (u[r] = r.replace(f, '-$&').toLowerCase()),
				a = ';';
			'number' != typeof n || o.startsWith('--') || p.has(o) || (a = 'px;'),
				(t = t + o + ':' + n + a);
		}
	}
	return t || void 0;
}
function h() {
	this.__d = !0;
}
function v(e, t) {
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
var _,
	m,
	g,
	y,
	b = function () {
		var e = this;
		this.promise = new Promise(function (t, r) {
			(e.resolve = t), (e.reject = r);
		});
	},
	x = {},
	k = [],
	w = Array.isArray,
	C = Object.assign;
function S(n, o, a) {
	var i = e.__s;
	(e.__s = !0), (_ = e.__b), (m = e.diffed), (g = e.__r), (y = e.unmount);
	var s = t(r, null);
	s.__k = [n];
	try {
		var c = A(n, o || x, !1, void 0, s, !1, a);
		return w(c) ? c.join('') : c;
	} catch (e) {
		if (e.then)
			throw new Error('Use "renderToStringAsync" for suspenseful rendering.');
		throw e;
	} finally {
		e.__c && e.__c(n, k), (e.__s = i), (k.length = 0);
	}
}
function E(e, t) {
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
		null == r.state && (r.state = x),
		null == r.__s && (r.__s = r.state),
		n.getDerivedStateFromProps
			? (r.state = C({}, r.state, n.getDerivedStateFromProps(r.props, r.state)))
			: o && r.componentWillMount
			? (r.componentWillMount(),
			  (r.state = r.__s !== r.state ? r.__s : r.state))
			: !o && r.componentWillUpdate && r.componentWillUpdate(),
		g && g(e),
		r.render(r.props, r.state, t)
	);
}
function A(t, c, u, p, f, h, b) {
	if (null == t || !0 === t || !1 === t || '' === t) return '';
	var k = typeof t;
	if ('object' != k)
		return 'function' == k ? '' : 'string' == k ? l(t) : t + '';
	if (w(t)) {
		var S,
			P = '';
		f.__k = t;
		for (var j = 0; j < t.length; j++) {
			var T = t[j];
			if (null != T && 'boolean' != typeof T) {
				var W,
					D = A(T, c, u, p, f, h, b);
				'string' == typeof D
					? (P += D)
					: (S || (S = []),
					  P && S.push(P),
					  (P = ''),
					  w(D) ? (W = S).push.apply(W, D) : S.push(D));
			}
		}
		return S ? (P && S.push(P), S) : P;
	}
	if (void 0 !== t.constructor) return '';
	(t.__ = f), _ && _(t);
	var N = t.type,
		F = t.props;
	if ('function' == typeof N) {
		var M,
			U,
			Z,
			$ = c;
		if (N === r) {
			if ('tpl' in F) {
				for (var q = '', H = 0; H < F.tpl.length; H++)
					if (((q += F.tpl[H]), F.exprs && H < F.exprs.length)) {
						var z = F.exprs[H];
						if (null == z) continue;
						'object' != typeof z || (void 0 !== z.constructor && !w(z))
							? (q += z)
							: (q += A(z, c, u, p, t, h, b));
					}
				return q;
			}
			if ('UNSTABLE_comment' in F)
				return '\x3c!--' + F.UNSTABLE_comment + '--\x3e';
			U = F.children;
		} else {
			if (null != (M = N.contextType)) {
				var I = c[M.__c];
				$ = I ? I.props.value : M.__;
			}
			var R = N.prototype && 'function' == typeof N.prototype.render;
			if (R) (U = E(t, $)), (Z = t.__c);
			else {
				t.__c = Z = v(t, $);
				for (var B = 0; Z.__d && B++ < 25; )
					(Z.__d = !1), g && g(t), (U = N.call(Z, F, $));
				Z.__d = !0;
			}
			if (
				(null != Z.getChildContext && (c = C({}, c, Z.getChildContext())),
				R &&
					e.errorBoundaries &&
					(N.getDerivedStateFromError || Z.componentDidCatch))
			) {
				U =
					null != U && U.type === r && null == U.key && null == U.props.tpl
						? U.props.children
						: U;
				try {
					return A(U, c, u, p, t, h, b);
				} catch (e) {
					return (
						N.getDerivedStateFromError &&
							(Z.__s = N.getDerivedStateFromError(e)),
						Z.componentDidCatch && Z.componentDidCatch(e, x),
						Z.__d
							? ((U = E(t, c)),
							  null != (Z = t.__c).getChildContext &&
									(c = C({}, c, Z.getChildContext())),
							  A(
									(U =
										null != U &&
										U.type === r &&
										null == U.key &&
										null == U.props.tpl
											? U.props.children
											: U),
									c,
									u,
									p,
									t,
									h,
									b
							  ))
							: ''
					);
				} finally {
					m && m(t), (t.__ = null), y && y(t);
				}
			}
		}
		U =
			null != U && U.type === r && null == U.key && null == U.props.tpl
				? U.props.children
				: U;
		try {
			var O = A(U, c, u, p, t, h, b);
			return m && m(t), (t.__ = null), e.unmount && e.unmount(t), O;
		} catch (r) {
			if (!h && b && b.onError) {
				var V = b.onError(r, t, function (e) {
					return A(e, c, u, p, t, h, b);
				});
				if (void 0 !== V) return V;
				var K = e.__e;
				return K && K(r, t), '';
			}
			if (!h) throw r;
			if (!r || 'function' != typeof r.then) throw r;
			return r.then(function e() {
				try {
					return A(U, c, u, p, t, h, b);
				} catch (r) {
					if (!r || 'function' != typeof r.then) throw r;
					return r.then(function () {
						return A(U, c, u, p, t, h, b);
					}, e);
				}
			});
		}
	}
	var G,
		J = '<' + N,
		Q = '';
	for (var X in F) {
		var Y = F[X];
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
					if ('for' in F) continue;
					X = 'for';
					break;
				case 'className':
					if ('class' in F) continue;
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
					switch (((X = 'value'), N)) {
						case 'textarea':
							G = Y;
							continue;
						case 'select':
							p = Y;
							continue;
						case 'option':
							p != Y || 'selected' in F || (J += ' selected');
					}
					break;
				case 'dangerouslySetInnerHTML':
					Q = Y && Y.__html;
					continue;
				case 'style':
					'object' == typeof Y && (Y = d(Y));
					break;
				case 'acceptCharset':
					X = 'accept-charset';
					break;
				case 'httpEquiv':
					X = 'http-equiv';
					break;
				default:
					if (o.test(X)) X = X.replace(o, '$1:$2').toLowerCase();
					else {
						if (n.test(X)) continue;
						('-' !== X[4] && !s.has(X)) || null == Y
							? u
								? i.test(X) &&
								  (X =
										'panose1' === X
											? 'panose-1'
											: X.replace(/([A-Z])/g, '-$1').toLowerCase())
								: a.test(X) && (X = X.toLowerCase())
							: (Y += '');
					}
			}
			null != Y &&
				!1 !== Y &&
				(J =
					!0 === Y || '' === Y
						? J + ' ' + X
						: J +
						  ' ' +
						  X +
						  '="' +
						  ('string' == typeof Y ? l(Y) : Y + '') +
						  '"');
		}
	}
	if (n.test(N))
		throw new Error(N + ' is not a valid HTML tag name in ' + J + '>');
	if (
		(Q ||
			('string' == typeof G
				? (Q = l(G))
				: null != G &&
				  !1 !== G &&
				  !0 !== G &&
				  (Q = A(
						G,
						c,
						'svg' === N || ('foreignObject' !== N && u),
						p,
						t,
						h,
						b
				  ))),
		m && m(t),
		(t.__ = null),
		y && y(t),
		!Q && L.has(N))
	)
		return J + '/>';
	var ee = '</' + N + '>',
		te = J + '>';
	return w(Q)
		? [te].concat(Q, [ee])
		: 'string' != typeof Q
		? [te, Q, ee]
		: te + Q + ee;
}
var L = new Set([
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
function P(e, t) {
	return (
		'<preact-island hidden data-target="' + e + '">' + t + '</preact-island>'
	);
}
var j = function e(t) {
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
	T = function (e, t) {
		var r = t.context,
			n = t.onWrite,
			o = t.abortSignal;
		try {
			r = r || {};
			var a = {
					start: Date.now(),
					abortSignal: o,
					onWrite: n,
					onError: W,
					suspended: []
				},
				i = S(e, r, a);
			n(i);
			var s = a.suspended.length,
				c = (function () {
					if (s > 0)
						return (
							n('<div hidden>'),
							n(
								'<script>(function(){class e extends HTMLElement{connectedCallback(){var e=this;if(!e.isConnected)return;let t=this.getAttribute("data-target");if(t){for(var r,a,i=document.createNodeIterator(document,128);i.nextNode();){let e=i.referenceNode;if(e.data=="preact-island:"+t?r=e:e.data=="/preact-island:"+t&&(a=e),r&&a)break}r&&a&&requestAnimationFrame((()=>{for(var t=a.previousSibling;t!=r&&t&&t!=r;)a.parentNode.removeChild(t),t=a.previousSibling;for(i=r;e.firstChild;)r=e.firstChild,e.removeChild(r),i.after(r),i=r;e.parentNode.removeChild(e)}))}}}customElements.define("preact-island",e);}())</script>'
							),
							Promise.resolve(j(a)).then(function () {
								n('</div>');
							})
						);
				})();
			return Promise.resolve(c && c.then ? c.then(function () {}) : void 0);
		} catch (e) {
			return Promise.reject(e);
		}
	};
function W(e, t, r) {
	var n = this;
	if (e && e.then) {
		for (; (t = t.__); ) {
			var o = t.__c;
			if (o && o.__c) break;
		}
		if (t) {
			var a = t.__v,
				i = this.suspended.find(function (e) {
					return e.id === a;
				}),
				s = new b(),
				c = this.abortSignal;
			c && (c.aborted ? s.resolve() : c.addEventListener('abort', s.resolve));
			var l = e.then(function () {
				if (!c || !c.aborted) {
					var e = r(t.props.children);
					e && n.onWrite(P(a, e));
				}
			}, this.onError);
			this.suspended.push({
				id: a,
				vnode: t,
				promise: Promise.race([l, s.promise])
			});
			var u = r(t.props.fallback);
			return i
				? ''
				: '\x3c!--preact-island:' +
						a +
						'--\x3e' +
						u +
						'\x3c!--/preact-island:' +
						a +
						'--\x3e';
		}
	}
}
function D(e, t) {
	var r = new b(),
		n = new TextEncoder('utf-8'),
		o = new ReadableStream({
			start: function (o) {
				T(e, {
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
}
export { D as renderToReadableStream };
//# sourceMappingURL=index.module.js.map
