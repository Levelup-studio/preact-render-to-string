!(function (e, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? t(exports, require('preact'))
		: 'function' == typeof define && define.amd
		? define(['exports', 'preact'], t)
		: t(((e || self).preactRenderToString = {}), e.preact);
})(this, function (e, t) {
	var r = /[\s\n\\/='"\0<>]/,
		n = /^(xlink|xmlns|xml)([A-Z])/,
		o = /^(?:accessK|auto[A-Z]|cell|ch|col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|src[A-Z]|tabI|useM|item[A-Z])/,
		i = /^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,
		a = new Set(['draggable', 'spellcheck']),
		s = /["&<]/;
	function c(e) {
		if (0 === e.length || !1 === s.test(e)) return e;
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
		p = /[A-Z]/g;
	function f(e) {
		var t = '';
		for (var r in e) {
			var n = e[r];
			if (null != n && '' !== n) {
				var o =
						'-' == r[0]
							? r
							: l[r] || (l[r] = r.replace(p, '-$&').toLowerCase()),
					i = ';';
				'number' != typeof n || o.startsWith('--') || u.has(o) || (i = 'px;'),
					(t = t + o + ':' + n + i);
			}
		}
		return t || void 0;
	}
	function d() {
		this.__d = !0;
	}
	function h(e, t) {
		return {
			__v: e,
			context: t,
			props: e.props,
			setState: d,
			forceUpdate: d,
			__d: !0,
			__h: new Array(0)
		};
	}
	var v,
		_,
		m,
		g,
		y = function () {
			var e = this;
			this.promise = new Promise(function (t, r) {
				(e.resolve = t), (e.reject = r);
			});
		},
		b = {},
		x = [],
		k = Array.isArray,
		w = Object.assign,
		C = '';
	function S(e, r, n) {
		var o = t.options.__s;
		(t.options.__s = !0),
			(v = t.options.__b),
			(_ = t.options.diffed),
			(m = t.options.__r),
			(g = t.options.unmount);
		var i = t.h(t.Fragment, null);
		i.__k = [e];
		try {
			var a = A(e, r || b, !1, void 0, i, !1, n);
			return k(a) ? a.join(C) : a;
		} catch (e) {
			if (e.then)
				throw new Error('Use "renderToStringAsync" for suspenseful rendering.');
			throw e;
		} finally {
			t.options.__c && t.options.__c(e, x), (t.options.__s = o), (x.length = 0);
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
			null == r.state && (r.state = b),
			null == r.__s && (r.__s = r.state),
			n.getDerivedStateFromProps
				? (r.state = w(
						{},
						r.state,
						n.getDerivedStateFromProps(r.props, r.state)
				  ))
				: o && r.componentWillMount
				? (r.componentWillMount(),
				  (r.state = r.__s !== r.state ? r.__s : r.state))
				: !o && r.componentWillUpdate && r.componentWillUpdate(),
			m && m(e),
			r.render(r.props, r.state, t)
		);
	}
	function A(e, s, l, u, p, d, y) {
		if (null == e || !0 === e || !1 === e || e === C) return C;
		var x = typeof e;
		if ('object' != x)
			return 'function' == x ? C : 'string' == x ? c(e) : e + C;
		if (k(e)) {
			var S,
				L = C;
			p.__k = e;
			for (var P = 0; P < e.length; P++) {
				var j = e[P];
				if (null != j && 'boolean' != typeof j) {
					var F,
						W = A(j, s, l, u, p, d, y);
					'string' == typeof W
						? (L += W)
						: (S || (S = []),
						  L && S.push(L),
						  (L = C),
						  k(W) ? (F = S).push.apply(F, W) : S.push(W));
				}
			}
			return S ? (L && S.push(L), S) : L;
		}
		if (void 0 !== e.constructor) return C;
		(e.__ = p), v && v(e);
		var D = e.type,
			N = e.props;
		if ('function' == typeof D) {
			var M,
				U,
				Z,
				q = s;
			if (D === t.Fragment) {
				if ('tpl' in N) {
					for (var R = C, $ = 0; $ < N.tpl.length; $++)
						if (((R += N.tpl[$]), N.exprs && $ < N.exprs.length)) {
							var H = N.exprs[$];
							if (null == H) continue;
							'object' != typeof H || (void 0 !== H.constructor && !k(H))
								? (R += H)
								: (R += A(H, s, l, u, e, d, y));
						}
					return R;
				}
				if ('UNSTABLE_comment' in N)
					return '\x3c!--' + N.UNSTABLE_comment + '--\x3e';
				U = N.children;
			} else {
				if (null != (M = D.contextType)) {
					var z = s[M.__c];
					q = z ? z.props.value : M.__;
				}
				var I = D.prototype && 'function' == typeof D.prototype.render;
				if (I) (U = E(e, q)), (Z = e.__c);
				else {
					e.__c = Z = h(e, q);
					for (var B = 0; Z.__d && B++ < 25; )
						(Z.__d = !1), m && m(e), (U = D.call(Z, N, q));
					Z.__d = !0;
				}
				if (
					(null != Z.getChildContext && (s = w({}, s, Z.getChildContext())),
					I &&
						t.options.errorBoundaries &&
						(D.getDerivedStateFromError || Z.componentDidCatch))
				) {
					U =
						null != U &&
						U.type === t.Fragment &&
						null == U.key &&
						null == U.props.tpl
							? U.props.children
							: U;
					try {
						return A(U, s, l, u, e, d, y);
					} catch (r) {
						return (
							D.getDerivedStateFromError &&
								(Z.__s = D.getDerivedStateFromError(r)),
							Z.componentDidCatch && Z.componentDidCatch(r, b),
							Z.__d
								? ((U = E(e, s)),
								  null != (Z = e.__c).getChildContext &&
										(s = w({}, s, Z.getChildContext())),
								  A(
										(U =
											null != U &&
											U.type === t.Fragment &&
											null == U.key &&
											null == U.props.tpl
												? U.props.children
												: U),
										s,
										l,
										u,
										e,
										d,
										y
								  ))
								: C
						);
					} finally {
						_ && _(e), (e.__ = null), g && g(e);
					}
				}
			}
			U =
				null != U &&
				U.type === t.Fragment &&
				null == U.key &&
				null == U.props.tpl
					? U.props.children
					: U;
			try {
				var O = A(U, s, l, u, e, d, y);
				return (
					_ && _(e), (e.__ = null), t.options.unmount && t.options.unmount(e), O
				);
			} catch (r) {
				if (!d && y && y.onError) {
					var V = y.onError(r, e, function (t) {
						return A(t, s, l, u, e, d, y);
					});
					if (void 0 !== V) return V;
					var K = t.options.__e;
					return K && K(r, e), C;
				}
				if (!d) throw r;
				if (!r || 'function' != typeof r.then) throw r;
				return r.then(function t() {
					try {
						return A(U, s, l, u, e, d, y);
					} catch (r) {
						if (!r || 'function' != typeof r.then) throw r;
						return r.then(function () {
							return A(U, s, l, u, e, d, y);
						}, t);
					}
				});
			}
		}
		var G,
			J = '<' + D,
			Q = C;
		for (var X in N) {
			var Y = N[X];
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
						if ('for' in N) continue;
						X = 'for';
						break;
					case 'className':
						if ('class' in N) continue;
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
						switch (((X = 'value'), D)) {
							case 'textarea':
								G = Y;
								continue;
							case 'select':
								u = Y;
								continue;
							case 'option':
								u != Y || 'selected' in N || (J += ' selected');
						}
						break;
					case 'dangerouslySetInnerHTML':
						Q = Y && Y.__html;
						continue;
					case 'style':
						'object' == typeof Y && (Y = f(Y));
						break;
					case 'acceptCharset':
						X = 'accept-charset';
						break;
					case 'httpEquiv':
						X = 'http-equiv';
						break;
					default:
						if (n.test(X)) X = X.replace(n, '$1:$2').toLowerCase();
						else {
							if (r.test(X)) continue;
							('-' !== X[4] && !a.has(X)) || null == Y
								? l
									? i.test(X) &&
									  (X =
											'panose1' === X
												? 'panose-1'
												: X.replace(/([A-Z])/g, '-$1').toLowerCase())
									: o.test(X) && (X = X.toLowerCase())
								: (Y += C);
						}
				}
				null != Y &&
					!1 !== Y &&
					(J =
						!0 === Y || Y === C
							? J + ' ' + X
							: J +
							  ' ' +
							  X +
							  '="' +
							  ('string' == typeof Y ? c(Y) : Y + C) +
							  '"');
			}
		}
		if (r.test(D))
			throw new Error(D + ' is not a valid HTML tag name in ' + J + '>');
		if (
			(Q ||
				('string' == typeof G
					? (Q = c(G))
					: null != G &&
					  !1 !== G &&
					  !0 !== G &&
					  (Q = A(
							G,
							s,
							'svg' === D || ('foreignObject' !== D && l),
							u,
							e,
							d,
							y
					  ))),
			_ && _(e),
			(e.__ = null),
			g && g(e),
			!Q && T.has(D))
		)
			return J + '/>';
		var ee = '</' + D + '>',
			te = J + '>';
		return k(Q)
			? [te].concat(Q, [ee])
			: 'string' != typeof Q
			? [te, Q, ee]
			: te + Q + ee;
	}
	var T = new Set([
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
	function L(e, t) {
		return (
			'<preact-island hidden data-target="' + e + '">' + t + '</preact-island>'
		);
	}
	var P = function e(t) {
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
		j = function (e, t) {
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
					a = S(e, r, i);
				n(a);
				var s = i.suspended.length,
					c = (function () {
						if (s > 0)
							return (
								n('<div hidden>'),
								n(
									'<script>(function(){class e extends HTMLElement{connectedCallback(){var e=this;if(!e.isConnected)return;let t=this.getAttribute("data-target");if(t){for(var r,a,i=document.createNodeIterator(document,128);i.nextNode();){let e=i.referenceNode;if(e.data=="preact-island:"+t?r=e:e.data=="/preact-island:"+t&&(a=e),r&&a)break}r&&a&&requestAnimationFrame((()=>{for(var t=a.previousSibling;t!=r&&t&&t!=r;)a.parentNode.removeChild(t),t=a.previousSibling;for(i=r;e.firstChild;)r=e.firstChild,e.removeChild(r),i.after(r),i=r;e.parentNode.removeChild(e)}))}}}customElements.define("preact-island",e);}())</script>'
								),
								Promise.resolve(P(i)).then(function () {
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
					s = new y(),
					c = this.abortSignal;
				c && (c.aborted ? s.resolve() : c.addEventListener('abort', s.resolve));
				var l = e.then(function () {
					if (!c || !c.aborted) {
						var e = r(t.props.children);
						e && n.onWrite(L(i, e));
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
	e.renderToReadableStream = function (e, t) {
		var r = new y(),
			n = new TextEncoder('utf-8'),
			o = new ReadableStream({
				start: function (o) {
					j(e, {
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
});
//# sourceMappingURL=index.umd.js.map
