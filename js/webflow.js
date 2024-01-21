/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var L_ = Object.create;
  var tn = Object.defineProperty;
  var P_ = Object.getOwnPropertyDescriptor;
  var q_ = Object.getOwnPropertyNames;
  var M_ = Object.getPrototypeOf,
    D_ = Object.prototype.hasOwnProperty;
  var se = (e, t) => () => (e && (t = e((e = 0))), t);
  var u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Re = (e, t) => {
      for (var r in t) tn(e, r, { get: t[r], enumerable: !0 });
    },
    Os = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of q_(t))
          !D_.call(e, i) &&
            i !== r &&
            tn(e, i, {
              get: () => t[i],
              enumerable: !(n = P_(t, i)) || n.enumerable,
            });
      return e;
    };
  var ee = (e, t, r) => (
      (r = e != null ? L_(M_(e)) : {}),
      Os(
        t || !e || !e.__esModule
          ? tn(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    Ye = (e) => Os(tn({}, "__esModule", { value: !0 }), e);
  var Si = u(() => {
    "use strict";
    window.tram = (function (e) {
      function t(l, g) {
        var y = new q.Bare();
        return y.init(l, g);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (g) {
          return "-" + g.toLowerCase();
        });
      }
      function n(l) {
        var g = parseInt(l.slice(1), 16),
          y = (g >> 16) & 255,
          I = (g >> 8) & 255,
          R = 255 & g;
        return [y, I, R];
      }
      function i(l, g, y) {
        return (
          "#" + ((1 << 24) | (l << 16) | (g << 8) | y).toString(16).slice(1)
        );
      }
      function o() {}
      function a(l, g) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof g + "] " + g);
      }
      function s(l, g, y) {
        f("Units do not match [" + l + "]: " + g + ", " + y);
      }
      function c(l, g, y) {
        if ((g !== void 0 && (y = g), l === void 0)) return y;
        var I = y;
        return (
          xt.test(l) || !Jr.test(l)
            ? (I = parseInt(l, 10))
            : Jr.test(l) && (I = 1e3 * parseFloat(l)),
          0 > I && (I = 0),
          I === I ? I : y
        );
      }
      function f(l) {
        ue.debug && window && window.console.warn(l);
      }
      function h(l) {
        for (var g = -1, y = l ? l.length : 0, I = []; ++g < y; ) {
          var R = l[g];
          R && I.push(R);
        }
        return I;
      }
      var p = (function (l, g, y) {
          function I(Y) {
            return typeof Y == "object";
          }
          function R(Y) {
            return typeof Y == "function";
          }
          function A() {}
          function W(Y, ae) {
            function F() {
              var be = new $();
              return R(be.init) && be.init.apply(be, arguments), be;
            }
            function $() {}
            ae === y && ((ae = Y), (Y = Object)), (F.Bare = $);
            var Z,
              pe = (A[l] = Y[l]),
              Ke = ($[l] = F[l] = new A());
            return (
              (Ke.constructor = F),
              (F.mixin = function (be) {
                return ($[l] = F[l] = W(F, be)[l]), F;
              }),
              (F.open = function (be) {
                if (
                  ((Z = {}),
                  R(be) ? (Z = be.call(F, Ke, pe, F, Y)) : I(be) && (Z = be),
                  I(Z))
                )
                  for (var vr in Z) g.call(Z, vr) && (Ke[vr] = Z[vr]);
                return R(Ke.init) || (Ke.init = Y), F;
              }),
              F.open(ae)
            );
          }
          return W;
        })("prototype", {}.hasOwnProperty),
        v = {
          ease: [
            "ease",
            function (l, g, y, I) {
              var R = (l /= I) * l,
                A = R * l;
              return (
                g +
                y * (-2.75 * A * R + 11 * R * R + -15.5 * A + 8 * R + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, g, y, I) {
              var R = (l /= I) * l,
                A = R * l;
              return g + y * (-1 * A * R + 3 * R * R + -3 * A + 2 * R);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, g, y, I) {
              var R = (l /= I) * l,
                A = R * l;
              return (
                g +
                y * (0.3 * A * R + -1.6 * R * R + 2.2 * A + -1.8 * R + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, g, y, I) {
              var R = (l /= I) * l,
                A = R * l;
              return g + y * (2 * A * R + -5 * R * R + 2 * A + 2 * R);
            },
          ],
          linear: [
            "linear",
            function (l, g, y, I) {
              return (y * l) / I + g;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, g, y, I) {
              return y * (l /= I) * l + g;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, g, y, I) {
              return -y * (l /= I) * (l - 2) + g;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, g, y, I) {
              return (l /= I / 2) < 1
                ? (y / 2) * l * l + g
                : (-y / 2) * (--l * (l - 2) - 1) + g;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, g, y, I) {
              return y * (l /= I) * l * l + g;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, g, y, I) {
              return y * ((l = l / I - 1) * l * l + 1) + g;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, g, y, I) {
              return (l /= I / 2) < 1
                ? (y / 2) * l * l * l + g
                : (y / 2) * ((l -= 2) * l * l + 2) + g;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, g, y, I) {
              return y * (l /= I) * l * l * l + g;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, g, y, I) {
              return -y * ((l = l / I - 1) * l * l * l - 1) + g;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, g, y, I) {
              return (l /= I / 2) < 1
                ? (y / 2) * l * l * l * l + g
                : (-y / 2) * ((l -= 2) * l * l * l - 2) + g;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, g, y, I) {
              return y * (l /= I) * l * l * l * l + g;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, g, y, I) {
              return y * ((l = l / I - 1) * l * l * l * l + 1) + g;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, g, y, I) {
              return (l /= I / 2) < 1
                ? (y / 2) * l * l * l * l * l + g
                : (y / 2) * ((l -= 2) * l * l * l * l + 2) + g;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, g, y, I) {
              return -y * Math.cos((l / I) * (Math.PI / 2)) + y + g;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, g, y, I) {
              return y * Math.sin((l / I) * (Math.PI / 2)) + g;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, g, y, I) {
              return (-y / 2) * (Math.cos((Math.PI * l) / I) - 1) + g;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, g, y, I) {
              return l === 0 ? g : y * Math.pow(2, 10 * (l / I - 1)) + g;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, g, y, I) {
              return l === I
                ? g + y
                : y * (-Math.pow(2, (-10 * l) / I) + 1) + g;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, g, y, I) {
              return l === 0
                ? g
                : l === I
                ? g + y
                : (l /= I / 2) < 1
                ? (y / 2) * Math.pow(2, 10 * (l - 1)) + g
                : (y / 2) * (-Math.pow(2, -10 * --l) + 2) + g;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, g, y, I) {
              return -y * (Math.sqrt(1 - (l /= I) * l) - 1) + g;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, g, y, I) {
              return y * Math.sqrt(1 - (l = l / I - 1) * l) + g;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, g, y, I) {
              return (l /= I / 2) < 1
                ? (-y / 2) * (Math.sqrt(1 - l * l) - 1) + g
                : (y / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + g;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, g, y, I, R) {
              return (
                R === void 0 && (R = 1.70158),
                y * (l /= I) * l * ((R + 1) * l - R) + g
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, g, y, I, R) {
              return (
                R === void 0 && (R = 1.70158),
                y * ((l = l / I - 1) * l * ((R + 1) * l + R) + 1) + g
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, g, y, I, R) {
              return (
                R === void 0 && (R = 1.70158),
                (l /= I / 2) < 1
                  ? (y / 2) * l * l * (((R *= 1.525) + 1) * l - R) + g
                  : (y / 2) *
                      ((l -= 2) * l * (((R *= 1.525) + 1) * l + R) + 2) +
                    g
              );
            },
          ],
        },
        m = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        T = document,
        E = window,
        L = "bkwld-tram",
        x = /[\-\.0-9]/g,
        w = /[A-Z]/,
        O = "number",
        M = /^(rgb|#)/,
        D = /(em|cm|mm|in|pt|pc|px)$/,
        C = /(em|cm|mm|in|pt|pc|px|%)$/,
        X = /(deg|rad|turn)$/,
        U = "unitless",
        H = /(all|none) 0s ease 0s/,
        B = /^(width|height)$/,
        j = " ",
        P = T.createElement("a"),
        _ = ["Webkit", "Moz", "O", "ms"],
        N = ["-webkit-", "-moz-", "-o-", "-ms-"],
        V = function (l) {
          if (l in P.style) return { dom: l, css: l };
          var g,
            y,
            I = "",
            R = l.split("-");
          for (g = 0; g < R.length; g++)
            I += R[g].charAt(0).toUpperCase() + R[g].slice(1);
          for (g = 0; g < _.length; g++)
            if (((y = _[g] + I), y in P.style))
              return { dom: y, css: N[g] + l };
        },
        G = (t.support = {
          bind: Function.prototype.bind,
          transform: V("transform"),
          transition: V("transition"),
          backface: V("backface-visibility"),
          timing: V("transition-timing-function"),
        });
      if (G.transition) {
        var z = G.timing.dom;
        if (((P.style[z] = v["ease-in-back"][0]), !P.style[z]))
          for (var K in m) v[K][0] = m[K];
      }
      var te = (t.frame = (function () {
          var l =
            E.requestAnimationFrame ||
            E.webkitRequestAnimationFrame ||
            E.mozRequestAnimationFrame ||
            E.oRequestAnimationFrame ||
            E.msRequestAnimationFrame;
          return l && G.bind
            ? l.bind(E)
            : function (g) {
                E.setTimeout(g, 16);
              };
        })()),
        Ie = (t.now = (function () {
          var l = E.performance,
            g = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return g && G.bind
            ? g.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        d = p(function (l) {
          function g(k, J) {
            var le = h(("" + k).split(j)),
              ne = le[0];
            J = J || {};
            var Oe = vt[ne];
            if (!Oe) return f("Unsupported property: " + ne);
            if (!J.weak || !this.props[ne]) {
              var Ge = Oe[0],
                we = this.props[ne];
              return (
                we || (we = this.props[ne] = new Ge.Bare()),
                we.init(this.$el, le, Oe, J),
                we
              );
            }
          }
          function y(k, J, le) {
            if (k) {
              var ne = typeof k;
              if (
                (J ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                ne == "number" && J)
              )
                return (
                  (this.timer = new ze({
                    duration: k,
                    context: this,
                    complete: A,
                  })),
                  void (this.active = !0)
                );
              if (ne == "string" && J) {
                switch (k) {
                  case "hide":
                    F.call(this);
                    break;
                  case "stop":
                    W.call(this);
                    break;
                  case "redraw":
                    $.call(this);
                    break;
                  default:
                    g.call(this, k, le && le[1]);
                }
                return A.call(this);
              }
              if (ne == "function") return void k.call(this, this);
              if (ne == "object") {
                var Oe = 0;
                Ke.call(
                  this,
                  k,
                  function (he, N_) {
                    he.span > Oe && (Oe = he.span), he.stop(), he.animate(N_);
                  },
                  function (he) {
                    "wait" in he && (Oe = c(he.wait, 0));
                  }
                ),
                  pe.call(this),
                  Oe > 0 &&
                    ((this.timer = new ze({ duration: Oe, context: this })),
                    (this.active = !0),
                    J && (this.timer.complete = A));
                var Ge = this,
                  we = !1,
                  en = {};
                te(function () {
                  Ke.call(Ge, k, function (he) {
                    he.active && ((we = !0), (en[he.name] = he.nextStyle));
                  }),
                    we && Ge.$el.css(en);
                });
              }
            }
          }
          function I(k) {
            (k = c(k, 0)),
              this.active
                ? this.queue.push({ options: k })
                : ((this.timer = new ze({
                    duration: k,
                    context: this,
                    complete: A,
                  })),
                  (this.active = !0));
          }
          function R(k) {
            return this.active
              ? (this.queue.push({ options: k, args: arguments }),
                void (this.timer.complete = A))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function A() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var k = this.queue.shift();
              y.call(this, k.options, !0, k.args);
            }
          }
          function W(k) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var J;
            typeof k == "string"
              ? ((J = {}), (J[k] = 1))
              : (J = typeof k == "object" && k != null ? k : this.props),
              Ke.call(this, J, be),
              pe.call(this);
          }
          function Y(k) {
            W.call(this, k), Ke.call(this, k, vr, R_);
          }
          function ae(k) {
            typeof k != "string" && (k = "block"), (this.el.style.display = k);
          }
          function F() {
            W.call(this), (this.el.style.display = "none");
          }
          function $() {
            this.el.offsetHeight;
          }
          function Z() {
            W.call(this), e.removeData(this.el, L), (this.$el = this.el = null);
          }
          function pe() {
            var k,
              J,
              le = [];
            this.upstream && le.push(this.upstream);
            for (k in this.props)
              (J = this.props[k]), J.active && le.push(J.string);
            (le = le.join(",")),
              this.style !== le &&
                ((this.style = le), (this.el.style[G.transition.dom] = le));
          }
          function Ke(k, J, le) {
            var ne,
              Oe,
              Ge,
              we,
              en = J !== be,
              he = {};
            for (ne in k)
              (Ge = k[ne]),
                ne in Me
                  ? (he.transform || (he.transform = {}),
                    (he.transform[ne] = Ge))
                  : (w.test(ne) && (ne = r(ne)),
                    ne in vt
                      ? (he[ne] = Ge)
                      : (we || (we = {}), (we[ne] = Ge)));
            for (ne in he) {
              if (((Ge = he[ne]), (Oe = this.props[ne]), !Oe)) {
                if (!en) continue;
                Oe = g.call(this, ne);
              }
              J.call(this, Oe, Ge);
            }
            le && we && le.call(this, we);
          }
          function be(k) {
            k.stop();
          }
          function vr(k, J) {
            k.set(J);
          }
          function R_(k) {
            this.$el.css(k);
          }
          function Fe(k, J) {
            l[k] = function () {
              return this.children
                ? C_.call(this, J, arguments)
                : (this.el && J.apply(this, arguments), this);
            };
          }
          function C_(k, J) {
            var le,
              ne = this.children.length;
            for (le = 0; ne > le; le++) k.apply(this.children[le], J);
            return this;
          }
          (l.init = function (k) {
            if (
              ((this.$el = e(k)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              ue.keepInherited && !ue.fallback)
            ) {
              var J = ot(this.el, "transition");
              J && !H.test(J) && (this.upstream = J);
            }
            G.backface &&
              ue.hideBackface &&
              de(this.el, G.backface.css, "hidden");
          }),
            Fe("add", g),
            Fe("start", y),
            Fe("wait", I),
            Fe("then", R),
            Fe("next", A),
            Fe("stop", W),
            Fe("set", Y),
            Fe("show", ae),
            Fe("hide", F),
            Fe("redraw", $),
            Fe("destroy", Z);
        }),
        q = p(d, function (l) {
          function g(y, I) {
            var R = e.data(y, L) || e.data(y, L, new d.Bare());
            return R.el || R.init(y), I ? R.start(I) : R;
          }
          l.init = function (y, I) {
            var R = e(y);
            if (!R.length) return this;
            if (R.length === 1) return g(R[0], I);
            var A = [];
            return (
              R.each(function (W, Y) {
                A.push(g(Y, I));
              }),
              (this.children = A),
              this
            );
          };
        }),
        S = p(function (l) {
          function g() {
            var A = this.get();
            this.update("auto");
            var W = this.get();
            return this.update(A), W;
          }
          function y(A, W, Y) {
            return W !== void 0 && (Y = W), A in v ? A : Y;
          }
          function I(A) {
            var W = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(A);
            return (W ? i(W[1], W[2], W[3]) : A).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var R = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (A, W, Y, ae) {
            (this.$el = A), (this.el = A[0]);
            var F = W[0];
            Y[2] && (F = Y[2]),
              at[F] && (F = at[F]),
              (this.name = F),
              (this.type = Y[1]),
              (this.duration = c(W[1], this.duration, R.duration)),
              (this.ease = y(W[2], this.ease, R.ease)),
              (this.delay = c(W[3], this.delay, R.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = B.test(this.name)),
              (this.unit = ae.unit || this.unit || ue.defaultUnit),
              (this.angle = ae.angle || this.angle || ue.defaultAngle),
              ue.fallback || ae.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    j +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? j + v[this.ease][0] : "") +
                    (this.delay ? j + this.delay + "ms" : "")));
          }),
            (l.set = function (A) {
              (A = this.convert(A, this.type)), this.update(A), this.redraw();
            }),
            (l.transition = function (A) {
              (this.active = !0),
                (A = this.convert(A, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  A == "auto" && (A = g.call(this))),
                (this.nextStyle = A);
            }),
            (l.fallback = function (A) {
              var W =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (A = this.convert(A, this.type)),
                this.auto &&
                  (W == "auto" && (W = this.convert(this.get(), this.type)),
                  A == "auto" && (A = g.call(this))),
                (this.tween = new ye({
                  from: W,
                  to: A,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return ot(this.el, this.name);
            }),
            (l.update = function (A) {
              de(this.el, this.name, A);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                de(this.el, this.name, this.get()));
              var A = this.tween;
              A && A.context && A.destroy();
            }),
            (l.convert = function (A, W) {
              if (A == "auto" && this.auto) return A;
              var Y,
                ae = typeof A == "number",
                F = typeof A == "string";
              switch (W) {
                case O:
                  if (ae) return A;
                  if (F && A.replace(x, "") === "") return +A;
                  Y = "number(unitless)";
                  break;
                case M:
                  if (F) {
                    if (A === "" && this.original) return this.original;
                    if (W.test(A))
                      return A.charAt(0) == "#" && A.length == 7 ? A : I(A);
                  }
                  Y = "hex or rgb string";
                  break;
                case D:
                  if (ae) return A + this.unit;
                  if (F && W.test(A)) return A;
                  Y = "number(px) or string(unit)";
                  break;
                case C:
                  if (ae) return A + this.unit;
                  if (F && W.test(A)) return A;
                  Y = "number(px) or string(unit or %)";
                  break;
                case X:
                  if (ae) return A + this.angle;
                  if (F && W.test(A)) return A;
                  Y = "number(deg) or string(angle)";
                  break;
                case U:
                  if (ae || (F && C.test(A))) return A;
                  Y = "number(unitless) or string(unit or %)";
              }
              return a(Y, A), A;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        b = p(S, function (l, g) {
          l.init = function () {
            g.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), M));
          };
        }),
        Q = p(S, function (l, g) {
          (l.init = function () {
            g.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (y) {
              this.$el[this.name](y);
            });
        }),
        re = p(S, function (l, g) {
          function y(I, R) {
            var A, W, Y, ae, F;
            for (A in I)
              (ae = Me[A]),
                (Y = ae[0]),
                (W = ae[1] || A),
                (F = this.convert(I[A], Y)),
                R.call(this, W, F, Y);
          }
          (l.init = function () {
            g.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                Me.perspective &&
                  ue.perspective &&
                  ((this.current.perspective = ue.perspective),
                  de(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (I) {
              y.call(this, I, function (R, A) {
                this.current[R] = A;
              }),
                de(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (I) {
              var R = this.values(I);
              this.tween = new qe({
                current: this.current,
                values: R,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var A,
                W = {};
              for (A in this.current) W[A] = A in R ? R[A] : this.current[A];
              (this.active = !0), (this.nextStyle = this.style(W));
            }),
            (l.fallback = function (I) {
              var R = this.values(I);
              this.tween = new qe({
                current: this.current,
                values: R,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              de(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (I) {
              var R,
                A = "";
              for (R in I) A += R + "(" + I[R] + ") ";
              return A;
            }),
            (l.values = function (I) {
              var R,
                A = {};
              return (
                y.call(this, I, function (W, Y, ae) {
                  (A[W] = Y),
                    this.current[W] === void 0 &&
                      ((R = 0),
                      ~W.indexOf("scale") && (R = 1),
                      (this.current[W] = this.convert(R, ae)));
                }),
                A
              );
            });
        }),
        ye = p(function (l) {
          function g(F) {
            Y.push(F) === 1 && te(y);
          }
          function y() {
            var F,
              $,
              Z,
              pe = Y.length;
            if (pe)
              for (te(y), $ = Ie(), F = pe; F--; ) (Z = Y[F]), Z && Z.render($);
          }
          function I(F) {
            var $,
              Z = e.inArray(F, Y);
            Z >= 0 &&
              (($ = Y.slice(Z + 1)),
              (Y.length = Z),
              $.length && (Y = Y.concat($)));
          }
          function R(F) {
            return Math.round(F * ae) / ae;
          }
          function A(F, $, Z) {
            return i(
              F[0] + Z * ($[0] - F[0]),
              F[1] + Z * ($[1] - F[1]),
              F[2] + Z * ($[2] - F[2])
            );
          }
          var W = { ease: v.ease[1], from: 0, to: 1 };
          (l.init = function (F) {
            (this.duration = F.duration || 0), (this.delay = F.delay || 0);
            var $ = F.ease || W.ease;
            v[$] && ($ = v[$][1]),
              typeof $ != "function" && ($ = W.ease),
              (this.ease = $),
              (this.update = F.update || o),
              (this.complete = F.complete || o),
              (this.context = F.context || this),
              (this.name = F.name);
            var Z = F.from,
              pe = F.to;
            Z === void 0 && (Z = W.from),
              pe === void 0 && (pe = W.to),
              (this.unit = F.unit || ""),
              typeof Z == "number" && typeof pe == "number"
                ? ((this.begin = Z), (this.change = pe - Z))
                : this.format(pe, Z),
              (this.value = this.begin + this.unit),
              (this.start = Ie()),
              F.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = Ie()),
                (this.active = !0),
                g(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), I(this));
            }),
            (l.render = function (F) {
              var $,
                Z = F - this.start;
              if (this.delay) {
                if (Z <= this.delay) return;
                Z -= this.delay;
              }
              if (Z < this.duration) {
                var pe = this.ease(Z, 0, 1, this.duration);
                return (
                  ($ = this.startRGB
                    ? A(this.startRGB, this.endRGB, pe)
                    : R(this.begin + pe * this.change)),
                  (this.value = $ + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              ($ = this.endHex || this.begin + this.change),
                (this.value = $ + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (F, $) {
              if ((($ += ""), (F += ""), F.charAt(0) == "#"))
                return (
                  (this.startRGB = n($)),
                  (this.endRGB = n(F)),
                  (this.endHex = F),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var Z = $.replace(x, ""),
                  pe = F.replace(x, "");
                Z !== pe && s("tween", $, F), (this.unit = Z);
              }
              ($ = parseFloat($)),
                (F = parseFloat(F)),
                (this.begin = this.value = $),
                (this.change = F - $);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var Y = [],
            ae = 1e3;
        }),
        ze = p(ye, function (l) {
          (l.init = function (g) {
            (this.duration = g.duration || 0),
              (this.complete = g.complete || o),
              (this.context = g.context),
              this.play();
          }),
            (l.render = function (g) {
              var y = g - this.start;
              y < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        qe = p(ye, function (l, g) {
          (l.init = function (y) {
            (this.context = y.context),
              (this.update = y.update),
              (this.tweens = []),
              (this.current = y.current);
            var I, R;
            for (I in y.values)
              (R = y.values[I]),
                this.current[I] !== R &&
                  this.tweens.push(
                    new ye({
                      name: I,
                      from: this.current[I],
                      to: R,
                      duration: y.duration,
                      delay: y.delay,
                      ease: y.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (y) {
              var I,
                R,
                A = this.tweens.length,
                W = !1;
              for (I = A; I--; )
                (R = this.tweens[I]),
                  R.context &&
                    (R.render(y), (this.current[R.name] = R.value), (W = !0));
              return W
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((g.destroy.call(this), this.tweens)) {
                var y,
                  I = this.tweens.length;
                for (y = I; y--; ) this.tweens[y].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        ue = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !G.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!G.transition) return (ue.fallback = !0);
        ue.agentTests.push("(" + l + ")");
        var g = new RegExp(ue.agentTests.join("|"), "i");
        ue.fallback = g.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new ye(l);
        }),
        (t.delay = function (l, g, y) {
          return new ze({ complete: g, duration: l, context: y });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var de = e.style,
        ot = e.css,
        at = { transform: G.transform && G.transform.css },
        vt = {
          color: [b, M],
          background: [b, M, "background-color"],
          "outline-color": [b, M],
          "border-color": [b, M],
          "border-top-color": [b, M],
          "border-right-color": [b, M],
          "border-bottom-color": [b, M],
          "border-left-color": [b, M],
          "border-width": [S, D],
          "border-top-width": [S, D],
          "border-right-width": [S, D],
          "border-bottom-width": [S, D],
          "border-left-width": [S, D],
          "border-spacing": [S, D],
          "letter-spacing": [S, D],
          margin: [S, D],
          "margin-top": [S, D],
          "margin-right": [S, D],
          "margin-bottom": [S, D],
          "margin-left": [S, D],
          padding: [S, D],
          "padding-top": [S, D],
          "padding-right": [S, D],
          "padding-bottom": [S, D],
          "padding-left": [S, D],
          "outline-width": [S, D],
          opacity: [S, O],
          top: [S, C],
          right: [S, C],
          bottom: [S, C],
          left: [S, C],
          "font-size": [S, C],
          "text-indent": [S, C],
          "word-spacing": [S, C],
          width: [S, C],
          "min-width": [S, C],
          "max-width": [S, C],
          height: [S, C],
          "min-height": [S, C],
          "max-height": [S, C],
          "line-height": [S, U],
          "scroll-top": [Q, O, "scrollTop"],
          "scroll-left": [Q, O, "scrollLeft"],
        },
        Me = {};
      G.transform &&
        ((vt.transform = [re]),
        (Me = {
          x: [C, "translateX"],
          y: [C, "translateY"],
          rotate: [X],
          rotateX: [X],
          rotateY: [X],
          scale: [O],
          scaleX: [O],
          scaleY: [O],
          skew: [X],
          skewX: [X],
          skewY: [X],
        })),
        G.transform &&
          G.backface &&
          ((Me.z = [C, "translateZ"]),
          (Me.rotateZ = [X]),
          (Me.scaleZ = [O]),
          (Me.perspective = [D]));
      var xt = /ms/,
        Jr = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var As = u((mX, xs) => {
    "use strict";
    var F_ = window.$,
      G_ = Si() && F_.tram;
    xs.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        c = n.toString,
        f = n.hasOwnProperty,
        h = r.forEach,
        p = r.map,
        v = r.reduce,
        m = r.reduceRight,
        T = r.filter,
        E = r.every,
        L = r.some,
        x = r.indexOf,
        w = r.lastIndexOf,
        O = Array.isArray,
        M = Object.keys,
        D = i.bind,
        C =
          (e.each =
          e.forEach =
            function (_, N, V) {
              if (_ == null) return _;
              if (h && _.forEach === h) _.forEach(N, V);
              else if (_.length === +_.length) {
                for (var G = 0, z = _.length; G < z; G++)
                  if (N.call(V, _[G], G, _) === t) return;
              } else
                for (var K = e.keys(_), G = 0, z = K.length; G < z; G++)
                  if (N.call(V, _[K[G]], K[G], _) === t) return;
              return _;
            });
      (e.map = e.collect =
        function (_, N, V) {
          var G = [];
          return _ == null
            ? G
            : p && _.map === p
            ? _.map(N, V)
            : (C(_, function (z, K, te) {
                G.push(N.call(V, z, K, te));
              }),
              G);
        }),
        (e.find = e.detect =
          function (_, N, V) {
            var G;
            return (
              X(_, function (z, K, te) {
                if (N.call(V, z, K, te)) return (G = z), !0;
              }),
              G
            );
          }),
        (e.filter = e.select =
          function (_, N, V) {
            var G = [];
            return _ == null
              ? G
              : T && _.filter === T
              ? _.filter(N, V)
              : (C(_, function (z, K, te) {
                  N.call(V, z, K, te) && G.push(z);
                }),
                G);
          });
      var X =
        (e.some =
        e.any =
          function (_, N, V) {
            N || (N = e.identity);
            var G = !1;
            return _ == null
              ? G
              : L && _.some === L
              ? _.some(N, V)
              : (C(_, function (z, K, te) {
                  if (G || (G = N.call(V, z, K, te))) return t;
                }),
                !!G);
          });
      (e.contains = e.include =
        function (_, N) {
          return _ == null
            ? !1
            : x && _.indexOf === x
            ? _.indexOf(N) != -1
            : X(_, function (V) {
                return V === N;
              });
        }),
        (e.delay = function (_, N) {
          var V = a.call(arguments, 2);
          return setTimeout(function () {
            return _.apply(null, V);
          }, N);
        }),
        (e.defer = function (_) {
          return e.delay.apply(e, [_, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (_) {
          var N, V, G;
          return function () {
            N ||
              ((N = !0),
              (V = arguments),
              (G = this),
              G_.frame(function () {
                (N = !1), _.apply(G, V);
              }));
          };
        }),
        (e.debounce = function (_, N, V) {
          var G,
            z,
            K,
            te,
            Ie,
            d = function () {
              var q = e.now() - te;
              q < N
                ? (G = setTimeout(d, N - q))
                : ((G = null), V || ((Ie = _.apply(K, z)), (K = z = null)));
            };
          return function () {
            (K = this), (z = arguments), (te = e.now());
            var q = V && !G;
            return (
              G || (G = setTimeout(d, N)),
              q && ((Ie = _.apply(K, z)), (K = z = null)),
              Ie
            );
          };
        }),
        (e.defaults = function (_) {
          if (!e.isObject(_)) return _;
          for (var N = 1, V = arguments.length; N < V; N++) {
            var G = arguments[N];
            for (var z in G) _[z] === void 0 && (_[z] = G[z]);
          }
          return _;
        }),
        (e.keys = function (_) {
          if (!e.isObject(_)) return [];
          if (M) return M(_);
          var N = [];
          for (var V in _) e.has(_, V) && N.push(V);
          return N;
        }),
        (e.has = function (_, N) {
          return f.call(_, N);
        }),
        (e.isObject = function (_) {
          return _ === Object(_);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var U = /(.)^/,
        H = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        B = /\\|'|\r|\n|\u2028|\u2029/g,
        j = function (_) {
          return "\\" + H[_];
        },
        P = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (_, N, V) {
          !N && V && (N = V), (N = e.defaults({}, N, e.templateSettings));
          var G = RegExp(
              [
                (N.escape || U).source,
                (N.interpolate || U).source,
                (N.evaluate || U).source,
              ].join("|") + "|$",
              "g"
            ),
            z = 0,
            K = "__p+='";
          _.replace(G, function (q, S, b, Q, re) {
            return (
              (K += _.slice(z, re).replace(B, j)),
              (z = re + q.length),
              S
                ? (K +=
                    `'+
((__t=(` +
                    S +
                    `))==null?'':_.escape(__t))+
'`)
                : b
                ? (K +=
                    `'+
((__t=(` +
                    b +
                    `))==null?'':__t)+
'`)
                : Q &&
                  (K +=
                    `';
` +
                    Q +
                    `
__p+='`),
              q
            );
          }),
            (K += `';
`);
          var te = N.variable;
          if (te) {
            if (!P.test(te))
              throw new Error("variable is not a bare identifier: " + te);
          } else
            (K =
              `with(obj||{}){
` +
              K +
              `}
`),
              (te = "obj");
          K =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            K +
            `return __p;
`;
          var Ie;
          try {
            Ie = new Function(N.variable || "obj", "_", K);
          } catch (q) {
            throw ((q.source = K), q);
          }
          var d = function (q) {
            return Ie.call(this, q, e);
          };
          return (
            (d.source =
              "function(" +
              te +
              `){
` +
              K +
              "}"),
            d
          );
        }),
        e
      );
    })();
  });
  var st = u((_X, qs) => {
    "use strict";
    var ie = {},
      Ft = {},
      Gt = [],
      Ri = window.Webflow || [],
      gt = window.jQuery,
      Ue = gt(window),
      V_ = gt(document),
      $e = gt.isFunction,
      Ve = (ie._ = As()),
      ws = (ie.tram = Si() && gt.tram),
      nn = !1,
      Ci = !1;
    ws.config.hideBackface = !1;
    ws.config.keepInherited = !0;
    ie.define = function (e, t, r) {
      Ft[e] && Cs(Ft[e]);
      var n = (Ft[e] = t(gt, Ve, r) || {});
      return Rs(n), n;
    };
    ie.require = function (e) {
      return Ft[e];
    };
    function Rs(e) {
      ie.env() &&
        ($e(e.design) && Ue.on("__wf_design", e.design),
        $e(e.preview) && Ue.on("__wf_preview", e.preview)),
        $e(e.destroy) && Ue.on("__wf_destroy", e.destroy),
        e.ready && $e(e.ready) && U_(e);
    }
    function U_(e) {
      if (nn) {
        e.ready();
        return;
      }
      Ve.contains(Gt, e.ready) || Gt.push(e.ready);
    }
    function Cs(e) {
      $e(e.design) && Ue.off("__wf_design", e.design),
        $e(e.preview) && Ue.off("__wf_preview", e.preview),
        $e(e.destroy) && Ue.off("__wf_destroy", e.destroy),
        e.ready && $e(e.ready) && X_(e);
    }
    function X_(e) {
      Gt = Ve.filter(Gt, function (t) {
        return t !== e.ready;
      });
    }
    ie.push = function (e) {
      if (nn) {
        $e(e) && e();
        return;
      }
      Ri.push(e);
    };
    ie.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var rn = navigator.userAgent.toLowerCase(),
      Ns = (ie.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      H_ = (ie.env.chrome =
        /chrome/.test(rn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(rn.match(/chrome\/(\d+)\./)[1], 10)),
      W_ = (ie.env.ios = /(ipod|iphone|ipad)/.test(rn));
    ie.env.safari = /safari/.test(rn) && !H_ && !W_;
    var wi;
    Ns &&
      V_.on("touchstart mousedown", function (e) {
        wi = e.target;
      });
    ie.validClick = Ns
      ? function (e) {
          return e === wi || gt.contains(e, wi);
        }
      : function () {
          return !0;
        };
    var Ls = "resize.webflow orientationchange.webflow load.webflow",
      B_ = "scroll.webflow " + Ls;
    ie.resize = Ni(Ue, Ls);
    ie.scroll = Ni(Ue, B_);
    ie.redraw = Ni();
    function Ni(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = Ve.throttle(function (i) {
          Ve.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (Ve.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = Ve.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    ie.location = function (e) {
      window.location = e;
    };
    ie.env() && (ie.location = function () {});
    ie.ready = function () {
      (nn = !0), Ci ? k_() : Ve.each(Gt, Ss), Ve.each(Ri, Ss), ie.resize.up();
    };
    function Ss(e) {
      $e(e) && e();
    }
    function k_() {
      (Ci = !1), Ve.each(Ft, Rs);
    }
    var At;
    ie.load = function (e) {
      At.then(e);
    };
    function Ps() {
      At && (At.reject(), Ue.off("load", At.resolve)),
        (At = new gt.Deferred()),
        Ue.on("load", At.resolve);
    }
    ie.destroy = function (e) {
      (e = e || {}),
        (Ci = !0),
        Ue.triggerHandler("__wf_destroy"),
        e.domready != null && (nn = e.domready),
        Ve.each(Ft, Cs),
        ie.resize.off(),
        ie.scroll.off(),
        ie.redraw.off(),
        (Gt = []),
        (Ri = []),
        At.state() === "pending" && Ps();
    };
    gt(ie.ready);
    Ps();
    qs.exports = window.Webflow = ie;
  });
  var Fs = u((TX, Ds) => {
    "use strict";
    var Ms = st();
    Ms.define(
      "brand",
      (Ds.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          c =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var m = n.attr("data-wf-status"),
            T = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(T) && a.hostname !== T && (m = !0),
            m &&
              !s &&
              ((f = f || p()),
              v(),
              setTimeout(v, 500),
              e(r).off(c, h).on(c, h));
        };
        function h() {
          var m =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", m ? "display: none !important;" : "");
        }
        function p() {
          var m = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            T = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            E = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return m.append(T, E), m[0];
        }
        function v() {
          var m = i.children(o),
            T = m.length && m.get(0) === f,
            E = Ms.env("editor");
          if (T) {
            E && m.remove();
            return;
          }
          m.length && m.remove(), E || i.append(f);
        }
        return t;
      })
    );
  });
  var Vs = u((IX, Gs) => {
    "use strict";
    var j_ = st();
    j_.define(
      "focus-visible",
      (Gs.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(O) {
            return !!(
              O &&
              O !== document &&
              O.nodeName !== "HTML" &&
              O.nodeName !== "BODY" &&
              "classList" in O &&
              "contains" in O.classList
            );
          }
          function c(O) {
            var M = O.type,
              D = O.tagName;
            return !!(
              (D === "INPUT" && a[M] && !O.readOnly) ||
              (D === "TEXTAREA" && !O.readOnly) ||
              O.isContentEditable
            );
          }
          function f(O) {
            O.getAttribute("data-wf-focus-visible") ||
              O.setAttribute("data-wf-focus-visible", "true");
          }
          function h(O) {
            O.getAttribute("data-wf-focus-visible") &&
              O.removeAttribute("data-wf-focus-visible");
          }
          function p(O) {
            O.metaKey ||
              O.altKey ||
              O.ctrlKey ||
              (s(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function v() {
            n = !1;
          }
          function m(O) {
            s(O.target) && (n || c(O.target)) && f(O.target);
          }
          function T(O) {
            s(O.target) &&
              O.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              h(O.target));
          }
          function E() {
            document.visibilityState === "hidden" && (i && (n = !0), L());
          }
          function L() {
            document.addEventListener("mousemove", w),
              document.addEventListener("mousedown", w),
              document.addEventListener("mouseup", w),
              document.addEventListener("pointermove", w),
              document.addEventListener("pointerdown", w),
              document.addEventListener("pointerup", w),
              document.addEventListener("touchmove", w),
              document.addEventListener("touchstart", w),
              document.addEventListener("touchend", w);
          }
          function x() {
            document.removeEventListener("mousemove", w),
              document.removeEventListener("mousedown", w),
              document.removeEventListener("mouseup", w),
              document.removeEventListener("pointermove", w),
              document.removeEventListener("pointerdown", w),
              document.removeEventListener("pointerup", w),
              document.removeEventListener("touchmove", w),
              document.removeEventListener("touchstart", w),
              document.removeEventListener("touchend", w);
          }
          function w(O) {
            (O.target.nodeName && O.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), x());
          }
          document.addEventListener("keydown", p, !0),
            document.addEventListener("mousedown", v, !0),
            document.addEventListener("pointerdown", v, !0),
            document.addEventListener("touchstart", v, !0),
            document.addEventListener("visibilitychange", E, !0),
            L(),
            r.addEventListener("focus", m, !0),
            r.addEventListener("blur", T, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Hs = u((bX, Xs) => {
    "use strict";
    var Us = st();
    Us.define(
      "focus",
      (Xs.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            c = s.tagName;
          return (
            (/^a$/i.test(c) && s.href != null) ||
            (/^(button|textarea)$/i.test(c) && s.disabled !== !0) ||
            (/^input$/i.test(c) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(c) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(c) ||
            (/^video$/i.test(c) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Us.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var ks = u((OX, Bs) => {
    "use strict";
    var Li = window.jQuery,
      Qe = {},
      on = [],
      Ws = ".w-ix",
      an = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Li(t).triggerHandler(Qe.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Li(t).triggerHandler(Qe.types.OUTRO));
        },
      };
    Qe.triggers = {};
    Qe.types = { INTRO: "w-ix-intro" + Ws, OUTRO: "w-ix-outro" + Ws };
    Qe.init = function () {
      for (var e = on.length, t = 0; t < e; t++) {
        var r = on[t];
        r[0](0, r[1]);
      }
      (on = []), Li.extend(Qe.triggers, an);
    };
    Qe.async = function () {
      for (var e in an) {
        var t = an[e];
        an.hasOwnProperty(e) &&
          (Qe.triggers[e] = function (r, n) {
            on.push([t, n]);
          });
      }
    };
    Qe.async();
    Bs.exports = Qe;
  });
  var qi = u((xX, Ks) => {
    "use strict";
    var Pi = ks();
    function js(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var z_ = window.jQuery,
      sn = {},
      zs = ".w-ix",
      K_ = {
        reset: function (e, t) {
          Pi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Pi.triggers.intro(e, t), js(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Pi.triggers.outro(e, t), js(t, "COMPONENT_INACTIVE");
        },
      };
    sn.triggers = {};
    sn.types = { INTRO: "w-ix-intro" + zs, OUTRO: "w-ix-outro" + zs };
    z_.extend(sn.triggers, K_);
    Ks.exports = sn;
  });
  var Ys = u((AX, ut) => {
    function Mi(e) {
      return (
        (ut.exports = Mi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (ut.exports.__esModule = !0),
        (ut.exports.default = ut.exports),
        Mi(e)
      );
    }
    (ut.exports = Mi),
      (ut.exports.__esModule = !0),
      (ut.exports.default = ut.exports);
  });
  var un = u((SX, gr) => {
    var Y_ = Ys().default;
    function $s(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return ($s = function (i) {
        return i ? r : t;
      })(e);
    }
    function $_(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (Y_(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = $s(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (gr.exports = $_),
      (gr.exports.__esModule = !0),
      (gr.exports.default = gr.exports);
  });
  var Qs = u((wX, yr) => {
    function Q_(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (yr.exports = Q_),
      (yr.exports.__esModule = !0),
      (yr.exports.default = yr.exports);
  });
  var ce = u((RX, Zs) => {
    var cn = function (e) {
      return e && e.Math == Math && e;
    };
    Zs.exports =
      cn(typeof globalThis == "object" && globalThis) ||
      cn(typeof window == "object" && window) ||
      cn(typeof self == "object" && self) ||
      cn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Vt = u((CX, Js) => {
    Js.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var St = u((NX, eu) => {
    var Z_ = Vt();
    eu.exports = !Z_(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var ln = u((LX, tu) => {
    var Er = Function.prototype.call;
    tu.exports = Er.bind
      ? Er.bind(Er)
      : function () {
          return Er.apply(Er, arguments);
        };
  });
  var ou = u((iu) => {
    "use strict";
    var ru = {}.propertyIsEnumerable,
      nu = Object.getOwnPropertyDescriptor,
      J_ = nu && !ru.call({ 1: 2 }, 1);
    iu.f = J_
      ? function (t) {
          var r = nu(this, t);
          return !!r && r.enumerable;
        }
      : ru;
  });
  var Di = u((qX, au) => {
    au.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Xe = u((MX, uu) => {
    var su = Function.prototype,
      Fi = su.bind,
      Gi = su.call,
      eT = Fi && Fi.bind(Gi);
    uu.exports = Fi
      ? function (e) {
          return e && eT(Gi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Gi.apply(e, arguments);
            }
          );
        };
  });
  var fu = u((DX, lu) => {
    var cu = Xe(),
      tT = cu({}.toString),
      rT = cu("".slice);
    lu.exports = function (e) {
      return rT(tT(e), 8, -1);
    };
  });
  var pu = u((FX, du) => {
    var nT = ce(),
      iT = Xe(),
      oT = Vt(),
      aT = fu(),
      Vi = nT.Object,
      sT = iT("".split);
    du.exports = oT(function () {
      return !Vi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return aT(e) == "String" ? sT(e, "") : Vi(e);
        }
      : Vi;
  });
  var Ui = u((GX, hu) => {
    var uT = ce(),
      cT = uT.TypeError;
    hu.exports = function (e) {
      if (e == null) throw cT("Can't call method on " + e);
      return e;
    };
  });
  var mr = u((VX, vu) => {
    var lT = pu(),
      fT = Ui();
    vu.exports = function (e) {
      return lT(fT(e));
    };
  });
  var Ze = u((UX, gu) => {
    gu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Ut = u((XX, yu) => {
    var dT = Ze();
    yu.exports = function (e) {
      return typeof e == "object" ? e !== null : dT(e);
    };
  });
  var _r = u((HX, Eu) => {
    var Xi = ce(),
      pT = Ze(),
      hT = function (e) {
        return pT(e) ? e : void 0;
      };
    Eu.exports = function (e, t) {
      return arguments.length < 2 ? hT(Xi[e]) : Xi[e] && Xi[e][t];
    };
  });
  var _u = u((WX, mu) => {
    var vT = Xe();
    mu.exports = vT({}.isPrototypeOf);
  });
  var Iu = u((BX, Tu) => {
    var gT = _r();
    Tu.exports = gT("navigator", "userAgent") || "";
  });
  var Ru = u((kX, wu) => {
    var Su = ce(),
      Hi = Iu(),
      bu = Su.process,
      Ou = Su.Deno,
      xu = (bu && bu.versions) || (Ou && Ou.version),
      Au = xu && xu.v8,
      He,
      fn;
    Au &&
      ((He = Au.split(".")),
      (fn = He[0] > 0 && He[0] < 4 ? 1 : +(He[0] + He[1])));
    !fn &&
      Hi &&
      ((He = Hi.match(/Edge\/(\d+)/)),
      (!He || He[1] >= 74) &&
        ((He = Hi.match(/Chrome\/(\d+)/)), He && (fn = +He[1])));
    wu.exports = fn;
  });
  var Wi = u((jX, Nu) => {
    var Cu = Ru(),
      yT = Vt();
    Nu.exports =
      !!Object.getOwnPropertySymbols &&
      !yT(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Cu && Cu < 41)
        );
      });
  });
  var Bi = u((zX, Lu) => {
    var ET = Wi();
    Lu.exports = ET && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var ki = u((KX, Pu) => {
    var mT = ce(),
      _T = _r(),
      TT = Ze(),
      IT = _u(),
      bT = Bi(),
      OT = mT.Object;
    Pu.exports = bT
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = _T("Symbol");
          return TT(t) && IT(t.prototype, OT(e));
        };
  });
  var Mu = u((YX, qu) => {
    var xT = ce(),
      AT = xT.String;
    qu.exports = function (e) {
      try {
        return AT(e);
      } catch {
        return "Object";
      }
    };
  });
  var Fu = u(($X, Du) => {
    var ST = ce(),
      wT = Ze(),
      RT = Mu(),
      CT = ST.TypeError;
    Du.exports = function (e) {
      if (wT(e)) return e;
      throw CT(RT(e) + " is not a function");
    };
  });
  var Vu = u((QX, Gu) => {
    var NT = Fu();
    Gu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : NT(r);
    };
  });
  var Xu = u((ZX, Uu) => {
    var LT = ce(),
      ji = ln(),
      zi = Ze(),
      Ki = Ut(),
      PT = LT.TypeError;
    Uu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && zi((r = e.toString)) && !Ki((n = ji(r, e)))) ||
        (zi((r = e.valueOf)) && !Ki((n = ji(r, e)))) ||
        (t !== "string" && zi((r = e.toString)) && !Ki((n = ji(r, e))))
      )
        return n;
      throw PT("Can't convert object to primitive value");
    };
  });
  var Wu = u((JX, Hu) => {
    Hu.exports = !1;
  });
  var dn = u((e5, ku) => {
    var Bu = ce(),
      qT = Object.defineProperty;
    ku.exports = function (e, t) {
      try {
        qT(Bu, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        Bu[e] = t;
      }
      return t;
    };
  });
  var pn = u((t5, zu) => {
    var MT = ce(),
      DT = dn(),
      ju = "__core-js_shared__",
      FT = MT[ju] || DT(ju, {});
    zu.exports = FT;
  });
  var Yi = u((r5, Yu) => {
    var GT = Wu(),
      Ku = pn();
    (Yu.exports = function (e, t) {
      return Ku[e] || (Ku[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: GT ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var Qu = u((n5, $u) => {
    var VT = ce(),
      UT = Ui(),
      XT = VT.Object;
    $u.exports = function (e) {
      return XT(UT(e));
    };
  });
  var yt = u((i5, Zu) => {
    var HT = Xe(),
      WT = Qu(),
      BT = HT({}.hasOwnProperty);
    Zu.exports =
      Object.hasOwn ||
      function (t, r) {
        return BT(WT(t), r);
      };
  });
  var $i = u((o5, Ju) => {
    var kT = Xe(),
      jT = 0,
      zT = Math.random(),
      KT = kT((1).toString);
    Ju.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + KT(++jT + zT, 36);
    };
  });
  var Qi = u((a5, ic) => {
    var YT = ce(),
      $T = Yi(),
      ec = yt(),
      QT = $i(),
      tc = Wi(),
      nc = Bi(),
      Xt = $T("wks"),
      wt = YT.Symbol,
      rc = wt && wt.for,
      ZT = nc ? wt : (wt && wt.withoutSetter) || QT;
    ic.exports = function (e) {
      if (!ec(Xt, e) || !(tc || typeof Xt[e] == "string")) {
        var t = "Symbol." + e;
        tc && ec(wt, e)
          ? (Xt[e] = wt[e])
          : nc && rc
          ? (Xt[e] = rc(t))
          : (Xt[e] = ZT(t));
      }
      return Xt[e];
    };
  });
  var uc = u((s5, sc) => {
    var JT = ce(),
      eI = ln(),
      oc = Ut(),
      ac = ki(),
      tI = Vu(),
      rI = Xu(),
      nI = Qi(),
      iI = JT.TypeError,
      oI = nI("toPrimitive");
    sc.exports = function (e, t) {
      if (!oc(e) || ac(e)) return e;
      var r = tI(e, oI),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = eI(r, e, t)), !oc(n) || ac(n))
        )
          return n;
        throw iI("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), rI(e, t);
    };
  });
  var Zi = u((u5, cc) => {
    var aI = uc(),
      sI = ki();
    cc.exports = function (e) {
      var t = aI(e, "string");
      return sI(t) ? t : t + "";
    };
  });
  var eo = u((c5, fc) => {
    var uI = ce(),
      lc = Ut(),
      Ji = uI.document,
      cI = lc(Ji) && lc(Ji.createElement);
    fc.exports = function (e) {
      return cI ? Ji.createElement(e) : {};
    };
  });
  var to = u((l5, dc) => {
    var lI = St(),
      fI = Vt(),
      dI = eo();
    dc.exports =
      !lI &&
      !fI(function () {
        return (
          Object.defineProperty(dI("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var ro = u((hc) => {
    var pI = St(),
      hI = ln(),
      vI = ou(),
      gI = Di(),
      yI = mr(),
      EI = Zi(),
      mI = yt(),
      _I = to(),
      pc = Object.getOwnPropertyDescriptor;
    hc.f = pI
      ? pc
      : function (t, r) {
          if (((t = yI(t)), (r = EI(r)), _I))
            try {
              return pc(t, r);
            } catch {}
          if (mI(t, r)) return gI(!hI(vI.f, t, r), t[r]);
        };
  });
  var Tr = u((d5, gc) => {
    var vc = ce(),
      TI = Ut(),
      II = vc.String,
      bI = vc.TypeError;
    gc.exports = function (e) {
      if (TI(e)) return e;
      throw bI(II(e) + " is not an object");
    };
  });
  var Ir = u((mc) => {
    var OI = ce(),
      xI = St(),
      AI = to(),
      yc = Tr(),
      SI = Zi(),
      wI = OI.TypeError,
      Ec = Object.defineProperty;
    mc.f = xI
      ? Ec
      : function (t, r, n) {
          if ((yc(t), (r = SI(r)), yc(n), AI))
            try {
              return Ec(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw wI("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var hn = u((h5, _c) => {
    var RI = St(),
      CI = Ir(),
      NI = Di();
    _c.exports = RI
      ? function (e, t, r) {
          return CI.f(e, t, NI(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var io = u((v5, Tc) => {
    var LI = Xe(),
      PI = Ze(),
      no = pn(),
      qI = LI(Function.toString);
    PI(no.inspectSource) ||
      (no.inspectSource = function (e) {
        return qI(e);
      });
    Tc.exports = no.inspectSource;
  });
  var Oc = u((g5, bc) => {
    var MI = ce(),
      DI = Ze(),
      FI = io(),
      Ic = MI.WeakMap;
    bc.exports = DI(Ic) && /native code/.test(FI(Ic));
  });
  var oo = u((y5, Ac) => {
    var GI = Yi(),
      VI = $i(),
      xc = GI("keys");
    Ac.exports = function (e) {
      return xc[e] || (xc[e] = VI(e));
    };
  });
  var vn = u((E5, Sc) => {
    Sc.exports = {};
  });
  var Pc = u((m5, Lc) => {
    var UI = Oc(),
      Nc = ce(),
      ao = Xe(),
      XI = Ut(),
      HI = hn(),
      so = yt(),
      uo = pn(),
      WI = oo(),
      BI = vn(),
      wc = "Object already initialized",
      lo = Nc.TypeError,
      kI = Nc.WeakMap,
      gn,
      br,
      yn,
      jI = function (e) {
        return yn(e) ? br(e) : gn(e, {});
      },
      zI = function (e) {
        return function (t) {
          var r;
          if (!XI(t) || (r = br(t)).type !== e)
            throw lo("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    UI || uo.state
      ? ((Et = uo.state || (uo.state = new kI())),
        (Rc = ao(Et.get)),
        (co = ao(Et.has)),
        (Cc = ao(Et.set)),
        (gn = function (e, t) {
          if (co(Et, e)) throw new lo(wc);
          return (t.facade = e), Cc(Et, e, t), t;
        }),
        (br = function (e) {
          return Rc(Et, e) || {};
        }),
        (yn = function (e) {
          return co(Et, e);
        }))
      : ((Rt = WI("state")),
        (BI[Rt] = !0),
        (gn = function (e, t) {
          if (so(e, Rt)) throw new lo(wc);
          return (t.facade = e), HI(e, Rt, t), t;
        }),
        (br = function (e) {
          return so(e, Rt) ? e[Rt] : {};
        }),
        (yn = function (e) {
          return so(e, Rt);
        }));
    var Et, Rc, co, Cc, Rt;
    Lc.exports = { set: gn, get: br, has: yn, enforce: jI, getterFor: zI };
  });
  var Dc = u((_5, Mc) => {
    var fo = St(),
      KI = yt(),
      qc = Function.prototype,
      YI = fo && Object.getOwnPropertyDescriptor,
      po = KI(qc, "name"),
      $I = po && function () {}.name === "something",
      QI = po && (!fo || (fo && YI(qc, "name").configurable));
    Mc.exports = { EXISTS: po, PROPER: $I, CONFIGURABLE: QI };
  });
  var Xc = u((T5, Uc) => {
    var ZI = ce(),
      Fc = Ze(),
      JI = yt(),
      Gc = hn(),
      eb = dn(),
      tb = io(),
      Vc = Pc(),
      rb = Dc().CONFIGURABLE,
      nb = Vc.get,
      ib = Vc.enforce,
      ob = String(String).split("String");
    (Uc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        c;
      if (
        (Fc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!JI(r, "name") || (rb && r.name !== s)) && Gc(r, "name", s),
          (c = ib(r)),
          c.source || (c.source = ob.join(typeof s == "string" ? s : ""))),
        e === ZI)
      ) {
        o ? (e[t] = r) : eb(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : Gc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Fc(this) && nb(this).source) || tb(this);
    });
  });
  var ho = u((I5, Hc) => {
    var ab = Math.ceil,
      sb = Math.floor;
    Hc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? sb : ab)(t);
    };
  });
  var Bc = u((b5, Wc) => {
    var ub = ho(),
      cb = Math.max,
      lb = Math.min;
    Wc.exports = function (e, t) {
      var r = ub(e);
      return r < 0 ? cb(r + t, 0) : lb(r, t);
    };
  });
  var jc = u((O5, kc) => {
    var fb = ho(),
      db = Math.min;
    kc.exports = function (e) {
      return e > 0 ? db(fb(e), 9007199254740991) : 0;
    };
  });
  var Kc = u((x5, zc) => {
    var pb = jc();
    zc.exports = function (e) {
      return pb(e.length);
    };
  });
  var vo = u((A5, $c) => {
    var hb = mr(),
      vb = Bc(),
      gb = Kc(),
      Yc = function (e) {
        return function (t, r, n) {
          var i = hb(t),
            o = gb(i),
            a = vb(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    $c.exports = { includes: Yc(!0), indexOf: Yc(!1) };
  });
  var yo = u((S5, Zc) => {
    var yb = Xe(),
      go = yt(),
      Eb = mr(),
      mb = vo().indexOf,
      _b = vn(),
      Qc = yb([].push);
    Zc.exports = function (e, t) {
      var r = Eb(e),
        n = 0,
        i = [],
        o;
      for (o in r) !go(_b, o) && go(r, o) && Qc(i, o);
      for (; t.length > n; ) go(r, (o = t[n++])) && (~mb(i, o) || Qc(i, o));
      return i;
    };
  });
  var En = u((w5, Jc) => {
    Jc.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var tl = u((el) => {
    var Tb = yo(),
      Ib = En(),
      bb = Ib.concat("length", "prototype");
    el.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return Tb(t, bb);
      };
  });
  var nl = u((rl) => {
    rl.f = Object.getOwnPropertySymbols;
  });
  var ol = u((N5, il) => {
    var Ob = _r(),
      xb = Xe(),
      Ab = tl(),
      Sb = nl(),
      wb = Tr(),
      Rb = xb([].concat);
    il.exports =
      Ob("Reflect", "ownKeys") ||
      function (t) {
        var r = Ab.f(wb(t)),
          n = Sb.f;
        return n ? Rb(r, n(t)) : r;
      };
  });
  var sl = u((L5, al) => {
    var Cb = yt(),
      Nb = ol(),
      Lb = ro(),
      Pb = Ir();
    al.exports = function (e, t) {
      for (var r = Nb(t), n = Pb.f, i = Lb.f, o = 0; o < r.length; o++) {
        var a = r[o];
        Cb(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var cl = u((P5, ul) => {
    var qb = Vt(),
      Mb = Ze(),
      Db = /#|\.prototype\./,
      Or = function (e, t) {
        var r = Gb[Fb(e)];
        return r == Ub ? !0 : r == Vb ? !1 : Mb(t) ? qb(t) : !!t;
      },
      Fb = (Or.normalize = function (e) {
        return String(e).replace(Db, ".").toLowerCase();
      }),
      Gb = (Or.data = {}),
      Vb = (Or.NATIVE = "N"),
      Ub = (Or.POLYFILL = "P");
    ul.exports = Or;
  });
  var fl = u((q5, ll) => {
    var Eo = ce(),
      Xb = ro().f,
      Hb = hn(),
      Wb = Xc(),
      Bb = dn(),
      kb = sl(),
      jb = cl();
    ll.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        c,
        f,
        h;
      if (
        (n
          ? (a = Eo)
          : i
          ? (a = Eo[r] || Bb(r, {}))
          : (a = (Eo[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((f = t[s]),
            e.noTargetGet ? ((h = Xb(a, s)), (c = h && h.value)) : (c = a[s]),
            (o = jb(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && c !== void 0)
          ) {
            if (typeof f == typeof c) continue;
            kb(f, c);
          }
          (e.sham || (c && c.sham)) && Hb(f, "sham", !0), Wb(a, s, f, e);
        }
    };
  });
  var pl = u((M5, dl) => {
    var zb = yo(),
      Kb = En();
    dl.exports =
      Object.keys ||
      function (t) {
        return zb(t, Kb);
      };
  });
  var vl = u((D5, hl) => {
    var Yb = St(),
      $b = Ir(),
      Qb = Tr(),
      Zb = mr(),
      Jb = pl();
    hl.exports = Yb
      ? Object.defineProperties
      : function (t, r) {
          Qb(t);
          for (var n = Zb(r), i = Jb(r), o = i.length, a = 0, s; o > a; )
            $b.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var yl = u((F5, gl) => {
    var eO = _r();
    gl.exports = eO("document", "documentElement");
  });
  var xl = u((G5, Ol) => {
    var tO = Tr(),
      rO = vl(),
      El = En(),
      nO = vn(),
      iO = yl(),
      oO = eo(),
      aO = oo(),
      ml = ">",
      _l = "<",
      _o = "prototype",
      To = "script",
      Il = aO("IE_PROTO"),
      mo = function () {},
      bl = function (e) {
        return _l + To + ml + e + _l + "/" + To + ml;
      },
      Tl = function (e) {
        e.write(bl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      sO = function () {
        var e = oO("iframe"),
          t = "java" + To + ":",
          r;
        return (
          (e.style.display = "none"),
          iO.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(bl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      mn,
      _n = function () {
        try {
          mn = new ActiveXObject("htmlfile");
        } catch {}
        _n =
          typeof document < "u"
            ? document.domain && mn
              ? Tl(mn)
              : sO()
            : Tl(mn);
        for (var e = El.length; e--; ) delete _n[_o][El[e]];
        return _n();
      };
    nO[Il] = !0;
    Ol.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((mo[_o] = tO(t)), (n = new mo()), (mo[_o] = null), (n[Il] = t))
            : (n = _n()),
          r === void 0 ? n : rO(n, r)
        );
      };
  });
  var Sl = u((V5, Al) => {
    var uO = Qi(),
      cO = xl(),
      lO = Ir(),
      Io = uO("unscopables"),
      bo = Array.prototype;
    bo[Io] == null && lO.f(bo, Io, { configurable: !0, value: cO(null) });
    Al.exports = function (e) {
      bo[Io][e] = !0;
    };
  });
  var wl = u(() => {
    "use strict";
    var fO = fl(),
      dO = vo().includes,
      pO = Sl();
    fO(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return dO(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    pO("includes");
  });
  var Cl = u((H5, Rl) => {
    var hO = ce(),
      vO = Xe();
    Rl.exports = function (e, t) {
      return vO(hO[e].prototype[t]);
    };
  });
  var Ll = u((W5, Nl) => {
    wl();
    var gO = Cl();
    Nl.exports = gO("Array", "includes");
  });
  var ql = u((B5, Pl) => {
    var yO = Ll();
    Pl.exports = yO;
  });
  var Dl = u((k5, Ml) => {
    var EO = ql();
    Ml.exports = EO;
  });
  var Oo = u((j5, Fl) => {
    var mO =
      typeof global == "object" && global && global.Object === Object && global;
    Fl.exports = mO;
  });
  var We = u((z5, Gl) => {
    var _O = Oo(),
      TO = typeof self == "object" && self && self.Object === Object && self,
      IO = _O || TO || Function("return this")();
    Gl.exports = IO;
  });
  var Ht = u((K5, Vl) => {
    var bO = We(),
      OO = bO.Symbol;
    Vl.exports = OO;
  });
  var Wl = u((Y5, Hl) => {
    var Ul = Ht(),
      Xl = Object.prototype,
      xO = Xl.hasOwnProperty,
      AO = Xl.toString,
      xr = Ul ? Ul.toStringTag : void 0;
    function SO(e) {
      var t = xO.call(e, xr),
        r = e[xr];
      try {
        e[xr] = void 0;
        var n = !0;
      } catch {}
      var i = AO.call(e);
      return n && (t ? (e[xr] = r) : delete e[xr]), i;
    }
    Hl.exports = SO;
  });
  var kl = u(($5, Bl) => {
    var wO = Object.prototype,
      RO = wO.toString;
    function CO(e) {
      return RO.call(e);
    }
    Bl.exports = CO;
  });
  var mt = u((Q5, Kl) => {
    var jl = Ht(),
      NO = Wl(),
      LO = kl(),
      PO = "[object Null]",
      qO = "[object Undefined]",
      zl = jl ? jl.toStringTag : void 0;
    function MO(e) {
      return e == null
        ? e === void 0
          ? qO
          : PO
        : zl && zl in Object(e)
        ? NO(e)
        : LO(e);
    }
    Kl.exports = MO;
  });
  var xo = u((Z5, Yl) => {
    function DO(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    Yl.exports = DO;
  });
  var Ao = u((J5, $l) => {
    var FO = xo(),
      GO = FO(Object.getPrototypeOf, Object);
    $l.exports = GO;
  });
  var ct = u((eH, Ql) => {
    function VO(e) {
      return e != null && typeof e == "object";
    }
    Ql.exports = VO;
  });
  var So = u((tH, Jl) => {
    var UO = mt(),
      XO = Ao(),
      HO = ct(),
      WO = "[object Object]",
      BO = Function.prototype,
      kO = Object.prototype,
      Zl = BO.toString,
      jO = kO.hasOwnProperty,
      zO = Zl.call(Object);
    function KO(e) {
      if (!HO(e) || UO(e) != WO) return !1;
      var t = XO(e);
      if (t === null) return !0;
      var r = jO.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && Zl.call(r) == zO;
    }
    Jl.exports = KO;
  });
  var ef = u((wo) => {
    "use strict";
    Object.defineProperty(wo, "__esModule", { value: !0 });
    wo.default = YO;
    function YO(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var tf = u((Co, Ro) => {
    "use strict";
    Object.defineProperty(Co, "__esModule", { value: !0 });
    var $O = ef(),
      QO = ZO($O);
    function ZO(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Wt;
    typeof self < "u"
      ? (Wt = self)
      : typeof window < "u"
      ? (Wt = window)
      : typeof global < "u"
      ? (Wt = global)
      : typeof Ro < "u"
      ? (Wt = Ro)
      : (Wt = Function("return this")());
    var JO = (0, QO.default)(Wt);
    Co.default = JO;
  });
  var No = u((Ar) => {
    "use strict";
    Ar.__esModule = !0;
    Ar.ActionTypes = void 0;
    Ar.default = af;
    var ex = So(),
      tx = of(ex),
      rx = tf(),
      rf = of(rx);
    function of(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var nf = (Ar.ActionTypes = { INIT: "@@redux/INIT" });
    function af(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(af)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        c = !1;
      function f() {
        s === a && (s = a.slice());
      }
      function h() {
        return o;
      }
      function p(E) {
        if (typeof E != "function")
          throw new Error("Expected listener to be a function.");
        var L = !0;
        return (
          f(),
          s.push(E),
          function () {
            if (L) {
              (L = !1), f();
              var w = s.indexOf(E);
              s.splice(w, 1);
            }
          }
        );
      }
      function v(E) {
        if (!(0, tx.default)(E))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof E.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (c) throw new Error("Reducers may not dispatch actions.");
        try {
          (c = !0), (o = i(o, E));
        } finally {
          c = !1;
        }
        for (var L = (a = s), x = 0; x < L.length; x++) L[x]();
        return E;
      }
      function m(E) {
        if (typeof E != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = E), v({ type: nf.INIT });
      }
      function T() {
        var E,
          L = p;
        return (
          (E = {
            subscribe: function (w) {
              if (typeof w != "object")
                throw new TypeError("Expected the observer to be an object.");
              function O() {
                w.next && w.next(h());
              }
              O();
              var M = L(O);
              return { unsubscribe: M };
            },
          }),
          (E[rf.default] = function () {
            return this;
          }),
          E
        );
      }
      return (
        v({ type: nf.INIT }),
        (n = { dispatch: v, subscribe: p, getState: h, replaceReducer: m }),
        (n[rf.default] = T),
        n
      );
    }
  });
  var Po = u((Lo) => {
    "use strict";
    Lo.__esModule = !0;
    Lo.default = nx;
    function nx(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var cf = u((qo) => {
    "use strict";
    qo.__esModule = !0;
    qo.default = ux;
    var sf = No(),
      ix = So(),
      oH = uf(ix),
      ox = Po(),
      aH = uf(ox);
    function uf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function ax(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function sx(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: sf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                sf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function ux(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        sx(r);
      } catch (c) {
        s = c;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          h = arguments[1];
        if (s) throw s;
        if (!1) var p;
        for (var v = !1, m = {}, T = 0; T < o.length; T++) {
          var E = o[T],
            L = r[E],
            x = f[E],
            w = L(x, h);
          if (typeof w > "u") {
            var O = ax(E, h);
            throw new Error(O);
          }
          (m[E] = w), (v = v || w !== x);
        }
        return v ? m : f;
      };
    }
  });
  var ff = u((Mo) => {
    "use strict";
    Mo.__esModule = !0;
    Mo.default = cx;
    function lf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function cx(e, t) {
      if (typeof e == "function") return lf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = lf(a, t));
      }
      return n;
    }
  });
  var Fo = u((Do) => {
    "use strict";
    Do.__esModule = !0;
    Do.default = lx;
    function lx() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var df = u((Go) => {
    "use strict";
    Go.__esModule = !0;
    var fx =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Go.default = vx;
    var dx = Fo(),
      px = hx(dx);
    function hx(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function vx() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            c = s.dispatch,
            f = [],
            h = {
              getState: s.getState,
              dispatch: function (v) {
                return c(v);
              },
            };
          return (
            (f = t.map(function (p) {
              return p(h);
            })),
            (c = px.default.apply(void 0, f)(s.dispatch)),
            fx({}, s, { dispatch: c })
          );
        };
      };
    }
  });
  var Vo = u((De) => {
    "use strict";
    De.__esModule = !0;
    De.compose =
      De.applyMiddleware =
      De.bindActionCreators =
      De.combineReducers =
      De.createStore =
        void 0;
    var gx = No(),
      yx = Bt(gx),
      Ex = cf(),
      mx = Bt(Ex),
      _x = ff(),
      Tx = Bt(_x),
      Ix = df(),
      bx = Bt(Ix),
      Ox = Fo(),
      xx = Bt(Ox),
      Ax = Po(),
      fH = Bt(Ax);
    function Bt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    De.createStore = yx.default;
    De.combineReducers = mx.default;
    De.bindActionCreators = Tx.default;
    De.applyMiddleware = bx.default;
    De.compose = xx.default;
  });
  var Be,
    Uo,
    Je,
    Sx,
    wx,
    Tn,
    Rx,
    Xo = se(() => {
      "use strict";
      (Be = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (Uo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (Je = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (Sx = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (wx = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (Tn = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (Rx = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Ce,
    Cx,
    In = se(() => {
      "use strict";
      (Ce = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (Cx = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var Nx,
    pf = se(() => {
      "use strict";
      Nx = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var Lx,
    Px,
    qx,
    Mx,
    Dx,
    Fx,
    Gx,
    Ho,
    hf = se(() => {
      "use strict";
      In();
      ({
        TRANSFORM_MOVE: Lx,
        TRANSFORM_SCALE: Px,
        TRANSFORM_ROTATE: qx,
        TRANSFORM_SKEW: Mx,
        STYLE_SIZE: Dx,
        STYLE_FILTER: Fx,
        STYLE_FONT_VARIATION: Gx,
      } = Ce),
        (Ho = {
          [Lx]: !0,
          [Px]: !0,
          [qx]: !0,
          [Mx]: !0,
          [Dx]: !0,
          [Fx]: !0,
          [Gx]: !0,
        });
    });
  var ve = {};
  Re(ve, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => tA,
    IX2_ANIMATION_FRAME_CHANGED: () => Yx,
    IX2_CLEAR_REQUESTED: () => jx,
    IX2_ELEMENT_STATE_CHANGED: () => eA,
    IX2_EVENT_LISTENER_ADDED: () => zx,
    IX2_EVENT_STATE_CHANGED: () => Kx,
    IX2_INSTANCE_ADDED: () => Qx,
    IX2_INSTANCE_REMOVED: () => Jx,
    IX2_INSTANCE_STARTED: () => Zx,
    IX2_MEDIA_QUERIES_DEFINED: () => nA,
    IX2_PARAMETER_CHANGED: () => $x,
    IX2_PLAYBACK_REQUESTED: () => Bx,
    IX2_PREVIEW_REQUESTED: () => Wx,
    IX2_RAW_DATA_IMPORTED: () => Vx,
    IX2_SESSION_INITIALIZED: () => Ux,
    IX2_SESSION_STARTED: () => Xx,
    IX2_SESSION_STOPPED: () => Hx,
    IX2_STOP_REQUESTED: () => kx,
    IX2_TEST_FRAME_RENDERED: () => iA,
    IX2_VIEWPORT_WIDTH_CHANGED: () => rA,
  });
  var Vx,
    Ux,
    Xx,
    Hx,
    Wx,
    Bx,
    kx,
    jx,
    zx,
    Kx,
    Yx,
    $x,
    Qx,
    Zx,
    Jx,
    eA,
    tA,
    rA,
    nA,
    iA,
    vf = se(() => {
      "use strict";
      (Vx = "IX2_RAW_DATA_IMPORTED"),
        (Ux = "IX2_SESSION_INITIALIZED"),
        (Xx = "IX2_SESSION_STARTED"),
        (Hx = "IX2_SESSION_STOPPED"),
        (Wx = "IX2_PREVIEW_REQUESTED"),
        (Bx = "IX2_PLAYBACK_REQUESTED"),
        (kx = "IX2_STOP_REQUESTED"),
        (jx = "IX2_CLEAR_REQUESTED"),
        (zx = "IX2_EVENT_LISTENER_ADDED"),
        (Kx = "IX2_EVENT_STATE_CHANGED"),
        (Yx = "IX2_ANIMATION_FRAME_CHANGED"),
        ($x = "IX2_PARAMETER_CHANGED"),
        (Qx = "IX2_INSTANCE_ADDED"),
        (Zx = "IX2_INSTANCE_STARTED"),
        (Jx = "IX2_INSTANCE_REMOVED"),
        (eA = "IX2_ELEMENT_STATE_CHANGED"),
        (tA = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (rA = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (nA = "IX2_MEDIA_QUERIES_DEFINED"),
        (iA = "IX2_TEST_FRAME_RENDERED");
    });
  var Te = {};
  Re(Te, {
    ABSTRACT_NODE: () => rS,
    AUTO: () => kA,
    BACKGROUND: () => VA,
    BACKGROUND_COLOR: () => GA,
    BAR_DELIMITER: () => KA,
    BORDER_COLOR: () => UA,
    BOUNDARY_SELECTOR: () => cA,
    CHILDREN: () => YA,
    COLON_DELIMITER: () => zA,
    COLOR: () => XA,
    COMMA_DELIMITER: () => jA,
    CONFIG_UNIT: () => yA,
    CONFIG_VALUE: () => pA,
    CONFIG_X_UNIT: () => hA,
    CONFIG_X_VALUE: () => lA,
    CONFIG_Y_UNIT: () => vA,
    CONFIG_Y_VALUE: () => fA,
    CONFIG_Z_UNIT: () => gA,
    CONFIG_Z_VALUE: () => dA,
    DISPLAY: () => HA,
    FILTER: () => qA,
    FLEX: () => WA,
    FONT_VARIATION_SETTINGS: () => MA,
    HEIGHT: () => FA,
    HTML_ELEMENT: () => eS,
    IMMEDIATE_CHILDREN: () => $A,
    IX2_ID_DELIMITER: () => oA,
    OPACITY: () => PA,
    PARENT: () => ZA,
    PLAIN_OBJECT: () => tS,
    PRESERVE_3D: () => JA,
    RENDER_GENERAL: () => iS,
    RENDER_PLUGIN: () => aS,
    RENDER_STYLE: () => oS,
    RENDER_TRANSFORM: () => nS,
    ROTATE_X: () => SA,
    ROTATE_Y: () => wA,
    ROTATE_Z: () => RA,
    SCALE_3D: () => AA,
    SCALE_X: () => bA,
    SCALE_Y: () => OA,
    SCALE_Z: () => xA,
    SIBLINGS: () => QA,
    SKEW: () => CA,
    SKEW_X: () => NA,
    SKEW_Y: () => LA,
    TRANSFORM: () => EA,
    TRANSLATE_3D: () => IA,
    TRANSLATE_X: () => mA,
    TRANSLATE_Y: () => _A,
    TRANSLATE_Z: () => TA,
    WF_PAGE: () => aA,
    WIDTH: () => DA,
    WILL_CHANGE: () => BA,
    W_MOD_IX: () => uA,
    W_MOD_JS: () => sA,
  });
  var oA,
    aA,
    sA,
    uA,
    cA,
    lA,
    fA,
    dA,
    pA,
    hA,
    vA,
    gA,
    yA,
    EA,
    mA,
    _A,
    TA,
    IA,
    bA,
    OA,
    xA,
    AA,
    SA,
    wA,
    RA,
    CA,
    NA,
    LA,
    PA,
    qA,
    MA,
    DA,
    FA,
    GA,
    VA,
    UA,
    XA,
    HA,
    WA,
    BA,
    kA,
    jA,
    zA,
    KA,
    YA,
    $A,
    QA,
    ZA,
    JA,
    eS,
    tS,
    rS,
    nS,
    iS,
    oS,
    aS,
    gf = se(() => {
      "use strict";
      (oA = "|"),
        (aA = "data-wf-page"),
        (sA = "w-mod-js"),
        (uA = "w-mod-ix"),
        (cA = ".w-dyn-item"),
        (lA = "xValue"),
        (fA = "yValue"),
        (dA = "zValue"),
        (pA = "value"),
        (hA = "xUnit"),
        (vA = "yUnit"),
        (gA = "zUnit"),
        (yA = "unit"),
        (EA = "transform"),
        (mA = "translateX"),
        (_A = "translateY"),
        (TA = "translateZ"),
        (IA = "translate3d"),
        (bA = "scaleX"),
        (OA = "scaleY"),
        (xA = "scaleZ"),
        (AA = "scale3d"),
        (SA = "rotateX"),
        (wA = "rotateY"),
        (RA = "rotateZ"),
        (CA = "skew"),
        (NA = "skewX"),
        (LA = "skewY"),
        (PA = "opacity"),
        (qA = "filter"),
        (MA = "font-variation-settings"),
        (DA = "width"),
        (FA = "height"),
        (GA = "backgroundColor"),
        (VA = "background"),
        (UA = "borderColor"),
        (XA = "color"),
        (HA = "display"),
        (WA = "flex"),
        (BA = "willChange"),
        (kA = "AUTO"),
        (jA = ","),
        (zA = ":"),
        (KA = "|"),
        (YA = "CHILDREN"),
        ($A = "IMMEDIATE_CHILDREN"),
        (QA = "SIBLINGS"),
        (ZA = "PARENT"),
        (JA = "preserve-3d"),
        (eS = "HTML_ELEMENT"),
        (tS = "PLAIN_OBJECT"),
        (rS = "ABSTRACT_NODE"),
        (nS = "RENDER_TRANSFORM"),
        (iS = "RENDER_GENERAL"),
        (oS = "RENDER_STYLE"),
        (aS = "RENDER_PLUGIN");
    });
  var yf = {};
  Re(yf, {
    ActionAppliesTo: () => Cx,
    ActionTypeConsts: () => Ce,
    EventAppliesTo: () => Uo,
    EventBasedOn: () => Je,
    EventContinuousMouseAxes: () => Sx,
    EventLimitAffectedElements: () => wx,
    EventTypeConsts: () => Be,
    IX2EngineActionTypes: () => ve,
    IX2EngineConstants: () => Te,
    InteractionTypeConsts: () => Nx,
    QuickEffectDirectionConsts: () => Rx,
    QuickEffectIds: () => Tn,
    ReducedMotionTypes: () => Ho,
  });
  var Ne = se(() => {
    "use strict";
    Xo();
    In();
    pf();
    hf();
    vf();
    gf();
    In();
    Xo();
  });
  var sS,
    Ef,
    mf = se(() => {
      "use strict";
      Ne();
      ({ IX2_RAW_DATA_IMPORTED: sS } = ve),
        (Ef = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case sS:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var kt = u((fe) => {
    "use strict";
    Object.defineProperty(fe, "__esModule", { value: !0 });
    var uS =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    fe.clone = On;
    fe.addLast = If;
    fe.addFirst = bf;
    fe.removeLast = Of;
    fe.removeFirst = xf;
    fe.insert = Af;
    fe.removeAt = Sf;
    fe.replaceAt = wf;
    fe.getIn = xn;
    fe.set = An;
    fe.setIn = Sn;
    fe.update = Cf;
    fe.updateIn = Nf;
    fe.merge = Lf;
    fe.mergeDeep = Pf;
    fe.mergeIn = qf;
    fe.omit = Mf;
    fe.addDefaults = Df;
    var _f = "INVALID_ARGS";
    function Tf(e) {
      throw new Error(e);
    }
    function Wo(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var cS = {}.hasOwnProperty;
    function On(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Wo(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Le(e, t, r) {
      var n = r;
      n == null && Tf(_f);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var c = 0; c < a.length; c++) {
        var f = a[c];
        if (f != null) {
          var h = Wo(f);
          if (h.length)
            for (var p = 0; p <= h.length; p++) {
              var v = h[p];
              if (!(e && n[v] !== void 0)) {
                var m = f[v];
                t && bn(n[v]) && bn(m) && (m = Le(e, t, n[v], m)),
                  !(m === void 0 || m === n[v]) &&
                    (i || ((i = !0), (n = On(n))), (n[v] = m));
              }
            }
        }
      }
      return n;
    }
    function bn(e) {
      var t = typeof e > "u" ? "undefined" : uS(e);
      return e != null && (t === "object" || t === "function");
    }
    function If(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function bf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Of(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function xf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Af(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Sf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function wf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function xn(e, t) {
      if ((!Array.isArray(t) && Tf(_f), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function An(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = On(i);
      return (o[t] = r), o;
    }
    function Rf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          bn(e) && bn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Rf(a, t, r, n + 1);
      }
      return An(e, o, i);
    }
    function Sn(e, t, r) {
      return t.length ? Rf(e, t, r, 0) : r;
    }
    function Cf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return An(e, t, i);
    }
    function Nf(e, t, r) {
      var n = xn(e, t),
        i = r(n);
      return Sn(e, t, i);
    }
    function Lf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Le.call.apply(Le, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : Le(!1, !1, e, t, r, n, i, o);
    }
    function Pf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Le.call.apply(Le, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : Le(!1, !0, e, t, r, n, i, o);
    }
    function qf(e, t, r, n, i, o, a) {
      var s = xn(e, t);
      s == null && (s = {});
      for (
        var c = void 0,
          f = arguments.length,
          h = Array(f > 7 ? f - 7 : 0),
          p = 7;
        p < f;
        p++
      )
        h[p - 7] = arguments[p];
      return (
        h.length
          ? (c = Le.call.apply(Le, [null, !1, !1, s, r, n, i, o, a].concat(h)))
          : (c = Le(!1, !1, s, r, n, i, o, a)),
        Sn(e, t, c)
      );
    }
    function Mf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (cS.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = Wo(e), s = 0; s < a.length; s++) {
        var c = a[s];
        r.indexOf(c) >= 0 || (o[c] = e[c]);
      }
      return o;
    }
    function Df(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? Le.call.apply(Le, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : Le(!0, !1, e, t, r, n, i, o);
    }
    var lS = {
      clone: On,
      addLast: If,
      addFirst: bf,
      removeLast: Of,
      removeFirst: xf,
      insert: Af,
      removeAt: Sf,
      replaceAt: wf,
      getIn: xn,
      set: An,
      setIn: Sn,
      update: Cf,
      updateIn: Nf,
      merge: Lf,
      mergeDeep: Pf,
      mergeIn: qf,
      omit: Mf,
      addDefaults: Df,
    };
    fe.default = lS;
  });
  var Gf,
    fS,
    dS,
    pS,
    hS,
    vS,
    Ff,
    Vf,
    Uf = se(() => {
      "use strict";
      Ne();
      (Gf = ee(kt())),
        ({
          IX2_PREVIEW_REQUESTED: fS,
          IX2_PLAYBACK_REQUESTED: dS,
          IX2_STOP_REQUESTED: pS,
          IX2_CLEAR_REQUESTED: hS,
        } = ve),
        (vS = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Ff = Object.create(null, {
          [fS]: { value: "preview" },
          [dS]: { value: "playback" },
          [pS]: { value: "stop" },
          [hS]: { value: "clear" },
        })),
        (Vf = (e = vS, t) => {
          if (t.type in Ff) {
            let r = [Ff[t.type]];
            return (0, Gf.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var xe,
    gS,
    yS,
    ES,
    mS,
    _S,
    TS,
    IS,
    bS,
    OS,
    xS,
    Xf,
    AS,
    Hf,
    Wf = se(() => {
      "use strict";
      Ne();
      (xe = ee(kt())),
        ({
          IX2_SESSION_INITIALIZED: gS,
          IX2_SESSION_STARTED: yS,
          IX2_TEST_FRAME_RENDERED: ES,
          IX2_SESSION_STOPPED: mS,
          IX2_EVENT_LISTENER_ADDED: _S,
          IX2_EVENT_STATE_CHANGED: TS,
          IX2_ANIMATION_FRAME_CHANGED: IS,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: bS,
          IX2_VIEWPORT_WIDTH_CHANGED: OS,
          IX2_MEDIA_QUERIES_DEFINED: xS,
        } = ve),
        (Xf = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (AS = 20),
        (Hf = (e = Xf, t) => {
          switch (t.type) {
            case gS: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, xe.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case yS:
              return (0, xe.set)(e, "active", !0);
            case ES: {
              let {
                payload: { step: r = AS },
              } = t;
              return (0, xe.set)(e, "tick", e.tick + r);
            }
            case mS:
              return Xf;
            case IS: {
              let {
                payload: { now: r },
              } = t;
              return (0, xe.set)(e, "tick", r);
            }
            case _S: {
              let r = (0, xe.addLast)(e.eventListeners, t.payload);
              return (0, xe.set)(e, "eventListeners", r);
            }
            case TS: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, xe.setIn)(e, ["eventState", r], n);
            }
            case bS: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, xe.setIn)(e, ["playbackState", r], n);
            }
            case OS: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: c, max: f } = n[a];
                if (r >= c && r <= f) {
                  o = s;
                  break;
                }
              }
              return (0, xe.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case xS:
              return (0, xe.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var kf = u((NH, Bf) => {
    function SS() {
      (this.__data__ = []), (this.size = 0);
    }
    Bf.exports = SS;
  });
  var wn = u((LH, jf) => {
    function wS(e, t) {
      return e === t || (e !== e && t !== t);
    }
    jf.exports = wS;
  });
  var Sr = u((PH, zf) => {
    var RS = wn();
    function CS(e, t) {
      for (var r = e.length; r--; ) if (RS(e[r][0], t)) return r;
      return -1;
    }
    zf.exports = CS;
  });
  var Yf = u((qH, Kf) => {
    var NS = Sr(),
      LS = Array.prototype,
      PS = LS.splice;
    function qS(e) {
      var t = this.__data__,
        r = NS(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : PS.call(t, r, 1), --this.size, !0;
    }
    Kf.exports = qS;
  });
  var Qf = u((MH, $f) => {
    var MS = Sr();
    function DS(e) {
      var t = this.__data__,
        r = MS(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    $f.exports = DS;
  });
  var Jf = u((DH, Zf) => {
    var FS = Sr();
    function GS(e) {
      return FS(this.__data__, e) > -1;
    }
    Zf.exports = GS;
  });
  var td = u((FH, ed) => {
    var VS = Sr();
    function US(e, t) {
      var r = this.__data__,
        n = VS(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    ed.exports = US;
  });
  var wr = u((GH, rd) => {
    var XS = kf(),
      HS = Yf(),
      WS = Qf(),
      BS = Jf(),
      kS = td();
    function jt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    jt.prototype.clear = XS;
    jt.prototype.delete = HS;
    jt.prototype.get = WS;
    jt.prototype.has = BS;
    jt.prototype.set = kS;
    rd.exports = jt;
  });
  var id = u((VH, nd) => {
    var jS = wr();
    function zS() {
      (this.__data__ = new jS()), (this.size = 0);
    }
    nd.exports = zS;
  });
  var ad = u((UH, od) => {
    function KS(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    od.exports = KS;
  });
  var ud = u((XH, sd) => {
    function YS(e) {
      return this.__data__.get(e);
    }
    sd.exports = YS;
  });
  var ld = u((HH, cd) => {
    function $S(e) {
      return this.__data__.has(e);
    }
    cd.exports = $S;
  });
  var et = u((WH, fd) => {
    function QS(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    fd.exports = QS;
  });
  var Bo = u((BH, dd) => {
    var ZS = mt(),
      JS = et(),
      e0 = "[object AsyncFunction]",
      t0 = "[object Function]",
      r0 = "[object GeneratorFunction]",
      n0 = "[object Proxy]";
    function i0(e) {
      if (!JS(e)) return !1;
      var t = ZS(e);
      return t == t0 || t == r0 || t == e0 || t == n0;
    }
    dd.exports = i0;
  });
  var hd = u((kH, pd) => {
    var o0 = We(),
      a0 = o0["__core-js_shared__"];
    pd.exports = a0;
  });
  var yd = u((jH, gd) => {
    var ko = hd(),
      vd = (function () {
        var e = /[^.]+$/.exec((ko && ko.keys && ko.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function s0(e) {
      return !!vd && vd in e;
    }
    gd.exports = s0;
  });
  var jo = u((zH, Ed) => {
    var u0 = Function.prototype,
      c0 = u0.toString;
    function l0(e) {
      if (e != null) {
        try {
          return c0.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Ed.exports = l0;
  });
  var _d = u((KH, md) => {
    var f0 = Bo(),
      d0 = yd(),
      p0 = et(),
      h0 = jo(),
      v0 = /[\\^$.*+?()[\]{}|]/g,
      g0 = /^\[object .+?Constructor\]$/,
      y0 = Function.prototype,
      E0 = Object.prototype,
      m0 = y0.toString,
      _0 = E0.hasOwnProperty,
      T0 = RegExp(
        "^" +
          m0
            .call(_0)
            .replace(v0, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function I0(e) {
      if (!p0(e) || d0(e)) return !1;
      var t = f0(e) ? T0 : g0;
      return t.test(h0(e));
    }
    md.exports = I0;
  });
  var Id = u((YH, Td) => {
    function b0(e, t) {
      return e?.[t];
    }
    Td.exports = b0;
  });
  var _t = u(($H, bd) => {
    var O0 = _d(),
      x0 = Id();
    function A0(e, t) {
      var r = x0(e, t);
      return O0(r) ? r : void 0;
    }
    bd.exports = A0;
  });
  var Rn = u((QH, Od) => {
    var S0 = _t(),
      w0 = We(),
      R0 = S0(w0, "Map");
    Od.exports = R0;
  });
  var Rr = u((ZH, xd) => {
    var C0 = _t(),
      N0 = C0(Object, "create");
    xd.exports = N0;
  });
  var wd = u((JH, Sd) => {
    var Ad = Rr();
    function L0() {
      (this.__data__ = Ad ? Ad(null) : {}), (this.size = 0);
    }
    Sd.exports = L0;
  });
  var Cd = u((eW, Rd) => {
    function P0(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Rd.exports = P0;
  });
  var Ld = u((tW, Nd) => {
    var q0 = Rr(),
      M0 = "__lodash_hash_undefined__",
      D0 = Object.prototype,
      F0 = D0.hasOwnProperty;
    function G0(e) {
      var t = this.__data__;
      if (q0) {
        var r = t[e];
        return r === M0 ? void 0 : r;
      }
      return F0.call(t, e) ? t[e] : void 0;
    }
    Nd.exports = G0;
  });
  var qd = u((rW, Pd) => {
    var V0 = Rr(),
      U0 = Object.prototype,
      X0 = U0.hasOwnProperty;
    function H0(e) {
      var t = this.__data__;
      return V0 ? t[e] !== void 0 : X0.call(t, e);
    }
    Pd.exports = H0;
  });
  var Dd = u((nW, Md) => {
    var W0 = Rr(),
      B0 = "__lodash_hash_undefined__";
    function k0(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = W0 && t === void 0 ? B0 : t),
        this
      );
    }
    Md.exports = k0;
  });
  var Gd = u((iW, Fd) => {
    var j0 = wd(),
      z0 = Cd(),
      K0 = Ld(),
      Y0 = qd(),
      $0 = Dd();
    function zt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    zt.prototype.clear = j0;
    zt.prototype.delete = z0;
    zt.prototype.get = K0;
    zt.prototype.has = Y0;
    zt.prototype.set = $0;
    Fd.exports = zt;
  });
  var Xd = u((oW, Ud) => {
    var Vd = Gd(),
      Q0 = wr(),
      Z0 = Rn();
    function J0() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Vd(),
          map: new (Z0 || Q0)(),
          string: new Vd(),
        });
    }
    Ud.exports = J0;
  });
  var Wd = u((aW, Hd) => {
    function ew(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Hd.exports = ew;
  });
  var Cr = u((sW, Bd) => {
    var tw = Wd();
    function rw(e, t) {
      var r = e.__data__;
      return tw(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Bd.exports = rw;
  });
  var jd = u((uW, kd) => {
    var nw = Cr();
    function iw(e) {
      var t = nw(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    kd.exports = iw;
  });
  var Kd = u((cW, zd) => {
    var ow = Cr();
    function aw(e) {
      return ow(this, e).get(e);
    }
    zd.exports = aw;
  });
  var $d = u((lW, Yd) => {
    var sw = Cr();
    function uw(e) {
      return sw(this, e).has(e);
    }
    Yd.exports = uw;
  });
  var Zd = u((fW, Qd) => {
    var cw = Cr();
    function lw(e, t) {
      var r = cw(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    Qd.exports = lw;
  });
  var Cn = u((dW, Jd) => {
    var fw = Xd(),
      dw = jd(),
      pw = Kd(),
      hw = $d(),
      vw = Zd();
    function Kt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Kt.prototype.clear = fw;
    Kt.prototype.delete = dw;
    Kt.prototype.get = pw;
    Kt.prototype.has = hw;
    Kt.prototype.set = vw;
    Jd.exports = Kt;
  });
  var tp = u((pW, ep) => {
    var gw = wr(),
      yw = Rn(),
      Ew = Cn(),
      mw = 200;
    function _w(e, t) {
      var r = this.__data__;
      if (r instanceof gw) {
        var n = r.__data__;
        if (!yw || n.length < mw - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new Ew(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    ep.exports = _w;
  });
  var zo = u((hW, rp) => {
    var Tw = wr(),
      Iw = id(),
      bw = ad(),
      Ow = ud(),
      xw = ld(),
      Aw = tp();
    function Yt(e) {
      var t = (this.__data__ = new Tw(e));
      this.size = t.size;
    }
    Yt.prototype.clear = Iw;
    Yt.prototype.delete = bw;
    Yt.prototype.get = Ow;
    Yt.prototype.has = xw;
    Yt.prototype.set = Aw;
    rp.exports = Yt;
  });
  var ip = u((vW, np) => {
    var Sw = "__lodash_hash_undefined__";
    function ww(e) {
      return this.__data__.set(e, Sw), this;
    }
    np.exports = ww;
  });
  var ap = u((gW, op) => {
    function Rw(e) {
      return this.__data__.has(e);
    }
    op.exports = Rw;
  });
  var up = u((yW, sp) => {
    var Cw = Cn(),
      Nw = ip(),
      Lw = ap();
    function Nn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new Cw(); ++t < r; ) this.add(e[t]);
    }
    Nn.prototype.add = Nn.prototype.push = Nw;
    Nn.prototype.has = Lw;
    sp.exports = Nn;
  });
  var lp = u((EW, cp) => {
    function Pw(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    cp.exports = Pw;
  });
  var dp = u((mW, fp) => {
    function qw(e, t) {
      return e.has(t);
    }
    fp.exports = qw;
  });
  var Ko = u((_W, pp) => {
    var Mw = up(),
      Dw = lp(),
      Fw = dp(),
      Gw = 1,
      Vw = 2;
    function Uw(e, t, r, n, i, o) {
      var a = r & Gw,
        s = e.length,
        c = t.length;
      if (s != c && !(a && c > s)) return !1;
      var f = o.get(e),
        h = o.get(t);
      if (f && h) return f == t && h == e;
      var p = -1,
        v = !0,
        m = r & Vw ? new Mw() : void 0;
      for (o.set(e, t), o.set(t, e); ++p < s; ) {
        var T = e[p],
          E = t[p];
        if (n) var L = a ? n(E, T, p, t, e, o) : n(T, E, p, e, t, o);
        if (L !== void 0) {
          if (L) continue;
          v = !1;
          break;
        }
        if (m) {
          if (
            !Dw(t, function (x, w) {
              if (!Fw(m, w) && (T === x || i(T, x, r, n, o))) return m.push(w);
            })
          ) {
            v = !1;
            break;
          }
        } else if (!(T === E || i(T, E, r, n, o))) {
          v = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), v;
    }
    pp.exports = Uw;
  });
  var vp = u((TW, hp) => {
    var Xw = We(),
      Hw = Xw.Uint8Array;
    hp.exports = Hw;
  });
  var yp = u((IW, gp) => {
    function Ww(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    gp.exports = Ww;
  });
  var mp = u((bW, Ep) => {
    function Bw(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Ep.exports = Bw;
  });
  var Op = u((OW, bp) => {
    var _p = Ht(),
      Tp = vp(),
      kw = wn(),
      jw = Ko(),
      zw = yp(),
      Kw = mp(),
      Yw = 1,
      $w = 2,
      Qw = "[object Boolean]",
      Zw = "[object Date]",
      Jw = "[object Error]",
      eR = "[object Map]",
      tR = "[object Number]",
      rR = "[object RegExp]",
      nR = "[object Set]",
      iR = "[object String]",
      oR = "[object Symbol]",
      aR = "[object ArrayBuffer]",
      sR = "[object DataView]",
      Ip = _p ? _p.prototype : void 0,
      Yo = Ip ? Ip.valueOf : void 0;
    function uR(e, t, r, n, i, o, a) {
      switch (r) {
        case sR:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case aR:
          return !(e.byteLength != t.byteLength || !o(new Tp(e), new Tp(t)));
        case Qw:
        case Zw:
        case tR:
          return kw(+e, +t);
        case Jw:
          return e.name == t.name && e.message == t.message;
        case rR:
        case iR:
          return e == t + "";
        case eR:
          var s = zw;
        case nR:
          var c = n & Yw;
          if ((s || (s = Kw), e.size != t.size && !c)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= $w), a.set(e, t);
          var h = jw(s(e), s(t), n, i, o, a);
          return a.delete(e), h;
        case oR:
          if (Yo) return Yo.call(e) == Yo.call(t);
      }
      return !1;
    }
    bp.exports = uR;
  });
  var Ln = u((xW, xp) => {
    function cR(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    xp.exports = cR;
  });
  var Ee = u((AW, Ap) => {
    var lR = Array.isArray;
    Ap.exports = lR;
  });
  var $o = u((SW, Sp) => {
    var fR = Ln(),
      dR = Ee();
    function pR(e, t, r) {
      var n = t(e);
      return dR(e) ? n : fR(n, r(e));
    }
    Sp.exports = pR;
  });
  var Rp = u((wW, wp) => {
    function hR(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    wp.exports = hR;
  });
  var Qo = u((RW, Cp) => {
    function vR() {
      return [];
    }
    Cp.exports = vR;
  });
  var Zo = u((CW, Lp) => {
    var gR = Rp(),
      yR = Qo(),
      ER = Object.prototype,
      mR = ER.propertyIsEnumerable,
      Np = Object.getOwnPropertySymbols,
      _R = Np
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                gR(Np(e), function (t) {
                  return mR.call(e, t);
                }));
          }
        : yR;
    Lp.exports = _R;
  });
  var qp = u((NW, Pp) => {
    function TR(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Pp.exports = TR;
  });
  var Dp = u((LW, Mp) => {
    var IR = mt(),
      bR = ct(),
      OR = "[object Arguments]";
    function xR(e) {
      return bR(e) && IR(e) == OR;
    }
    Mp.exports = xR;
  });
  var Nr = u((PW, Vp) => {
    var Fp = Dp(),
      AR = ct(),
      Gp = Object.prototype,
      SR = Gp.hasOwnProperty,
      wR = Gp.propertyIsEnumerable,
      RR = Fp(
        (function () {
          return arguments;
        })()
      )
        ? Fp
        : function (e) {
            return AR(e) && SR.call(e, "callee") && !wR.call(e, "callee");
          };
    Vp.exports = RR;
  });
  var Xp = u((qW, Up) => {
    function CR() {
      return !1;
    }
    Up.exports = CR;
  });
  var Pn = u((Lr, $t) => {
    var NR = We(),
      LR = Xp(),
      Bp = typeof Lr == "object" && Lr && !Lr.nodeType && Lr,
      Hp = Bp && typeof $t == "object" && $t && !$t.nodeType && $t,
      PR = Hp && Hp.exports === Bp,
      Wp = PR ? NR.Buffer : void 0,
      qR = Wp ? Wp.isBuffer : void 0,
      MR = qR || LR;
    $t.exports = MR;
  });
  var qn = u((MW, kp) => {
    var DR = 9007199254740991,
      FR = /^(?:0|[1-9]\d*)$/;
    function GR(e, t) {
      var r = typeof e;
      return (
        (t = t ?? DR),
        !!t &&
          (r == "number" || (r != "symbol" && FR.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    kp.exports = GR;
  });
  var Mn = u((DW, jp) => {
    var VR = 9007199254740991;
    function UR(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= VR;
    }
    jp.exports = UR;
  });
  var Kp = u((FW, zp) => {
    var XR = mt(),
      HR = Mn(),
      WR = ct(),
      BR = "[object Arguments]",
      kR = "[object Array]",
      jR = "[object Boolean]",
      zR = "[object Date]",
      KR = "[object Error]",
      YR = "[object Function]",
      $R = "[object Map]",
      QR = "[object Number]",
      ZR = "[object Object]",
      JR = "[object RegExp]",
      eC = "[object Set]",
      tC = "[object String]",
      rC = "[object WeakMap]",
      nC = "[object ArrayBuffer]",
      iC = "[object DataView]",
      oC = "[object Float32Array]",
      aC = "[object Float64Array]",
      sC = "[object Int8Array]",
      uC = "[object Int16Array]",
      cC = "[object Int32Array]",
      lC = "[object Uint8Array]",
      fC = "[object Uint8ClampedArray]",
      dC = "[object Uint16Array]",
      pC = "[object Uint32Array]",
      oe = {};
    oe[oC] =
      oe[aC] =
      oe[sC] =
      oe[uC] =
      oe[cC] =
      oe[lC] =
      oe[fC] =
      oe[dC] =
      oe[pC] =
        !0;
    oe[BR] =
      oe[kR] =
      oe[nC] =
      oe[jR] =
      oe[iC] =
      oe[zR] =
      oe[KR] =
      oe[YR] =
      oe[$R] =
      oe[QR] =
      oe[ZR] =
      oe[JR] =
      oe[eC] =
      oe[tC] =
      oe[rC] =
        !1;
    function hC(e) {
      return WR(e) && HR(e.length) && !!oe[XR(e)];
    }
    zp.exports = hC;
  });
  var $p = u((GW, Yp) => {
    function vC(e) {
      return function (t) {
        return e(t);
      };
    }
    Yp.exports = vC;
  });
  var Zp = u((Pr, Qt) => {
    var gC = Oo(),
      Qp = typeof Pr == "object" && Pr && !Pr.nodeType && Pr,
      qr = Qp && typeof Qt == "object" && Qt && !Qt.nodeType && Qt,
      yC = qr && qr.exports === Qp,
      Jo = yC && gC.process,
      EC = (function () {
        try {
          var e = qr && qr.require && qr.require("util").types;
          return e || (Jo && Jo.binding && Jo.binding("util"));
        } catch {}
      })();
    Qt.exports = EC;
  });
  var Dn = u((VW, th) => {
    var mC = Kp(),
      _C = $p(),
      Jp = Zp(),
      eh = Jp && Jp.isTypedArray,
      TC = eh ? _C(eh) : mC;
    th.exports = TC;
  });
  var ea = u((UW, rh) => {
    var IC = qp(),
      bC = Nr(),
      OC = Ee(),
      xC = Pn(),
      AC = qn(),
      SC = Dn(),
      wC = Object.prototype,
      RC = wC.hasOwnProperty;
    function CC(e, t) {
      var r = OC(e),
        n = !r && bC(e),
        i = !r && !n && xC(e),
        o = !r && !n && !i && SC(e),
        a = r || n || i || o,
        s = a ? IC(e.length, String) : [],
        c = s.length;
      for (var f in e)
        (t || RC.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (i && (f == "offset" || f == "parent")) ||
              (o &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              AC(f, c))
          ) &&
          s.push(f);
      return s;
    }
    rh.exports = CC;
  });
  var Fn = u((XW, nh) => {
    var NC = Object.prototype;
    function LC(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || NC;
      return e === r;
    }
    nh.exports = LC;
  });
  var oh = u((HW, ih) => {
    var PC = xo(),
      qC = PC(Object.keys, Object);
    ih.exports = qC;
  });
  var Gn = u((WW, ah) => {
    var MC = Fn(),
      DC = oh(),
      FC = Object.prototype,
      GC = FC.hasOwnProperty;
    function VC(e) {
      if (!MC(e)) return DC(e);
      var t = [];
      for (var r in Object(e)) GC.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    ah.exports = VC;
  });
  var Ct = u((BW, sh) => {
    var UC = Bo(),
      XC = Mn();
    function HC(e) {
      return e != null && XC(e.length) && !UC(e);
    }
    sh.exports = HC;
  });
  var Mr = u((kW, uh) => {
    var WC = ea(),
      BC = Gn(),
      kC = Ct();
    function jC(e) {
      return kC(e) ? WC(e) : BC(e);
    }
    uh.exports = jC;
  });
  var lh = u((jW, ch) => {
    var zC = $o(),
      KC = Zo(),
      YC = Mr();
    function $C(e) {
      return zC(e, YC, KC);
    }
    ch.exports = $C;
  });
  var ph = u((zW, dh) => {
    var fh = lh(),
      QC = 1,
      ZC = Object.prototype,
      JC = ZC.hasOwnProperty;
    function eN(e, t, r, n, i, o) {
      var a = r & QC,
        s = fh(e),
        c = s.length,
        f = fh(t),
        h = f.length;
      if (c != h && !a) return !1;
      for (var p = c; p--; ) {
        var v = s[p];
        if (!(a ? v in t : JC.call(t, v))) return !1;
      }
      var m = o.get(e),
        T = o.get(t);
      if (m && T) return m == t && T == e;
      var E = !0;
      o.set(e, t), o.set(t, e);
      for (var L = a; ++p < c; ) {
        v = s[p];
        var x = e[v],
          w = t[v];
        if (n) var O = a ? n(w, x, v, t, e, o) : n(x, w, v, e, t, o);
        if (!(O === void 0 ? x === w || i(x, w, r, n, o) : O)) {
          E = !1;
          break;
        }
        L || (L = v == "constructor");
      }
      if (E && !L) {
        var M = e.constructor,
          D = t.constructor;
        M != D &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof M == "function" &&
            M instanceof M &&
            typeof D == "function" &&
            D instanceof D
          ) &&
          (E = !1);
      }
      return o.delete(e), o.delete(t), E;
    }
    dh.exports = eN;
  });
  var vh = u((KW, hh) => {
    var tN = _t(),
      rN = We(),
      nN = tN(rN, "DataView");
    hh.exports = nN;
  });
  var yh = u((YW, gh) => {
    var iN = _t(),
      oN = We(),
      aN = iN(oN, "Promise");
    gh.exports = aN;
  });
  var mh = u(($W, Eh) => {
    var sN = _t(),
      uN = We(),
      cN = sN(uN, "Set");
    Eh.exports = cN;
  });
  var ta = u((QW, _h) => {
    var lN = _t(),
      fN = We(),
      dN = lN(fN, "WeakMap");
    _h.exports = dN;
  });
  var Vn = u((ZW, Sh) => {
    var ra = vh(),
      na = Rn(),
      ia = yh(),
      oa = mh(),
      aa = ta(),
      Ah = mt(),
      Zt = jo(),
      Th = "[object Map]",
      pN = "[object Object]",
      Ih = "[object Promise]",
      bh = "[object Set]",
      Oh = "[object WeakMap]",
      xh = "[object DataView]",
      hN = Zt(ra),
      vN = Zt(na),
      gN = Zt(ia),
      yN = Zt(oa),
      EN = Zt(aa),
      Nt = Ah;
    ((ra && Nt(new ra(new ArrayBuffer(1))) != xh) ||
      (na && Nt(new na()) != Th) ||
      (ia && Nt(ia.resolve()) != Ih) ||
      (oa && Nt(new oa()) != bh) ||
      (aa && Nt(new aa()) != Oh)) &&
      (Nt = function (e) {
        var t = Ah(e),
          r = t == pN ? e.constructor : void 0,
          n = r ? Zt(r) : "";
        if (n)
          switch (n) {
            case hN:
              return xh;
            case vN:
              return Th;
            case gN:
              return Ih;
            case yN:
              return bh;
            case EN:
              return Oh;
          }
        return t;
      });
    Sh.exports = Nt;
  });
  var Mh = u((JW, qh) => {
    var sa = zo(),
      mN = Ko(),
      _N = Op(),
      TN = ph(),
      wh = Vn(),
      Rh = Ee(),
      Ch = Pn(),
      IN = Dn(),
      bN = 1,
      Nh = "[object Arguments]",
      Lh = "[object Array]",
      Un = "[object Object]",
      ON = Object.prototype,
      Ph = ON.hasOwnProperty;
    function xN(e, t, r, n, i, o) {
      var a = Rh(e),
        s = Rh(t),
        c = a ? Lh : wh(e),
        f = s ? Lh : wh(t);
      (c = c == Nh ? Un : c), (f = f == Nh ? Un : f);
      var h = c == Un,
        p = f == Un,
        v = c == f;
      if (v && Ch(e)) {
        if (!Ch(t)) return !1;
        (a = !0), (h = !1);
      }
      if (v && !h)
        return (
          o || (o = new sa()),
          a || IN(e) ? mN(e, t, r, n, i, o) : _N(e, t, c, r, n, i, o)
        );
      if (!(r & bN)) {
        var m = h && Ph.call(e, "__wrapped__"),
          T = p && Ph.call(t, "__wrapped__");
        if (m || T) {
          var E = m ? e.value() : e,
            L = T ? t.value() : t;
          return o || (o = new sa()), i(E, L, r, n, o);
        }
      }
      return v ? (o || (o = new sa()), TN(e, t, r, n, i, o)) : !1;
    }
    qh.exports = xN;
  });
  var ua = u((eB, Gh) => {
    var AN = Mh(),
      Dh = ct();
    function Fh(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Dh(e) && !Dh(t))
        ? e !== e && t !== t
        : AN(e, t, r, n, Fh, i);
    }
    Gh.exports = Fh;
  });
  var Uh = u((tB, Vh) => {
    var SN = zo(),
      wN = ua(),
      RN = 1,
      CN = 2;
    function NN(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var c = s[0],
          f = e[c],
          h = s[1];
        if (a && s[2]) {
          if (f === void 0 && !(c in e)) return !1;
        } else {
          var p = new SN();
          if (n) var v = n(f, h, c, e, t, p);
          if (!(v === void 0 ? wN(h, f, RN | CN, n, p) : v)) return !1;
        }
      }
      return !0;
    }
    Vh.exports = NN;
  });
  var ca = u((rB, Xh) => {
    var LN = et();
    function PN(e) {
      return e === e && !LN(e);
    }
    Xh.exports = PN;
  });
  var Wh = u((nB, Hh) => {
    var qN = ca(),
      MN = Mr();
    function DN(e) {
      for (var t = MN(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, qN(i)];
      }
      return t;
    }
    Hh.exports = DN;
  });
  var la = u((iB, Bh) => {
    function FN(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Bh.exports = FN;
  });
  var jh = u((oB, kh) => {
    var GN = Uh(),
      VN = Wh(),
      UN = la();
    function XN(e) {
      var t = VN(e);
      return t.length == 1 && t[0][2]
        ? UN(t[0][0], t[0][1])
        : function (r) {
            return r === e || GN(r, e, t);
          };
    }
    kh.exports = XN;
  });
  var Dr = u((aB, zh) => {
    var HN = mt(),
      WN = ct(),
      BN = "[object Symbol]";
    function kN(e) {
      return typeof e == "symbol" || (WN(e) && HN(e) == BN);
    }
    zh.exports = kN;
  });
  var Xn = u((sB, Kh) => {
    var jN = Ee(),
      zN = Dr(),
      KN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      YN = /^\w*$/;
    function $N(e, t) {
      if (jN(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        zN(e)
        ? !0
        : YN.test(e) || !KN.test(e) || (t != null && e in Object(t));
    }
    Kh.exports = $N;
  });
  var Qh = u((uB, $h) => {
    var Yh = Cn(),
      QN = "Expected a function";
    function fa(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(QN);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (fa.Cache || Yh)()), r;
    }
    fa.Cache = Yh;
    $h.exports = fa;
  });
  var Jh = u((cB, Zh) => {
    var ZN = Qh(),
      JN = 500;
    function eL(e) {
      var t = ZN(e, function (n) {
          return r.size === JN && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    Zh.exports = eL;
  });
  var tv = u((lB, ev) => {
    var tL = Jh(),
      rL =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      nL = /\\(\\)?/g,
      iL = tL(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(rL, function (r, n, i, o) {
            t.push(i ? o.replace(nL, "$1") : n || r);
          }),
          t
        );
      });
    ev.exports = iL;
  });
  var da = u((fB, rv) => {
    function oL(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    rv.exports = oL;
  });
  var uv = u((dB, sv) => {
    var nv = Ht(),
      aL = da(),
      sL = Ee(),
      uL = Dr(),
      cL = 1 / 0,
      iv = nv ? nv.prototype : void 0,
      ov = iv ? iv.toString : void 0;
    function av(e) {
      if (typeof e == "string") return e;
      if (sL(e)) return aL(e, av) + "";
      if (uL(e)) return ov ? ov.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -cL ? "-0" : t;
    }
    sv.exports = av;
  });
  var lv = u((pB, cv) => {
    var lL = uv();
    function fL(e) {
      return e == null ? "" : lL(e);
    }
    cv.exports = fL;
  });
  var Fr = u((hB, fv) => {
    var dL = Ee(),
      pL = Xn(),
      hL = tv(),
      vL = lv();
    function gL(e, t) {
      return dL(e) ? e : pL(e, t) ? [e] : hL(vL(e));
    }
    fv.exports = gL;
  });
  var Jt = u((vB, dv) => {
    var yL = Dr(),
      EL = 1 / 0;
    function mL(e) {
      if (typeof e == "string" || yL(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -EL ? "-0" : t;
    }
    dv.exports = mL;
  });
  var Hn = u((gB, pv) => {
    var _L = Fr(),
      TL = Jt();
    function IL(e, t) {
      t = _L(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[TL(t[r++])];
      return r && r == n ? e : void 0;
    }
    pv.exports = IL;
  });
  var Wn = u((yB, hv) => {
    var bL = Hn();
    function OL(e, t, r) {
      var n = e == null ? void 0 : bL(e, t);
      return n === void 0 ? r : n;
    }
    hv.exports = OL;
  });
  var gv = u((EB, vv) => {
    function xL(e, t) {
      return e != null && t in Object(e);
    }
    vv.exports = xL;
  });
  var Ev = u((mB, yv) => {
    var AL = Fr(),
      SL = Nr(),
      wL = Ee(),
      RL = qn(),
      CL = Mn(),
      NL = Jt();
    function LL(e, t, r) {
      t = AL(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = NL(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && CL(i) && RL(a, i) && (wL(e) || SL(e)));
    }
    yv.exports = LL;
  });
  var _v = u((_B, mv) => {
    var PL = gv(),
      qL = Ev();
    function ML(e, t) {
      return e != null && qL(e, t, PL);
    }
    mv.exports = ML;
  });
  var Iv = u((TB, Tv) => {
    var DL = ua(),
      FL = Wn(),
      GL = _v(),
      VL = Xn(),
      UL = ca(),
      XL = la(),
      HL = Jt(),
      WL = 1,
      BL = 2;
    function kL(e, t) {
      return VL(e) && UL(t)
        ? XL(HL(e), t)
        : function (r) {
            var n = FL(r, e);
            return n === void 0 && n === t ? GL(r, e) : DL(t, n, WL | BL);
          };
    }
    Tv.exports = kL;
  });
  var Bn = u((IB, bv) => {
    function jL(e) {
      return e;
    }
    bv.exports = jL;
  });
  var pa = u((bB, Ov) => {
    function zL(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Ov.exports = zL;
  });
  var Av = u((OB, xv) => {
    var KL = Hn();
    function YL(e) {
      return function (t) {
        return KL(t, e);
      };
    }
    xv.exports = YL;
  });
  var wv = u((xB, Sv) => {
    var $L = pa(),
      QL = Av(),
      ZL = Xn(),
      JL = Jt();
    function eP(e) {
      return ZL(e) ? $L(JL(e)) : QL(e);
    }
    Sv.exports = eP;
  });
  var Tt = u((AB, Rv) => {
    var tP = jh(),
      rP = Iv(),
      nP = Bn(),
      iP = Ee(),
      oP = wv();
    function aP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? nP
        : typeof e == "object"
        ? iP(e)
          ? rP(e[0], e[1])
          : tP(e)
        : oP(e);
    }
    Rv.exports = aP;
  });
  var ha = u((SB, Cv) => {
    var sP = Tt(),
      uP = Ct(),
      cP = Mr();
    function lP(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!uP(t)) {
          var o = sP(r, 3);
          (t = cP(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Cv.exports = lP;
  });
  var va = u((wB, Nv) => {
    function fP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Nv.exports = fP;
  });
  var Pv = u((RB, Lv) => {
    var dP = /\s/;
    function pP(e) {
      for (var t = e.length; t-- && dP.test(e.charAt(t)); );
      return t;
    }
    Lv.exports = pP;
  });
  var Mv = u((CB, qv) => {
    var hP = Pv(),
      vP = /^\s+/;
    function gP(e) {
      return e && e.slice(0, hP(e) + 1).replace(vP, "");
    }
    qv.exports = gP;
  });
  var kn = u((NB, Gv) => {
    var yP = Mv(),
      Dv = et(),
      EP = Dr(),
      Fv = 0 / 0,
      mP = /^[-+]0x[0-9a-f]+$/i,
      _P = /^0b[01]+$/i,
      TP = /^0o[0-7]+$/i,
      IP = parseInt;
    function bP(e) {
      if (typeof e == "number") return e;
      if (EP(e)) return Fv;
      if (Dv(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Dv(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = yP(e);
      var r = _P.test(e);
      return r || TP.test(e) ? IP(e.slice(2), r ? 2 : 8) : mP.test(e) ? Fv : +e;
    }
    Gv.exports = bP;
  });
  var Xv = u((LB, Uv) => {
    var OP = kn(),
      Vv = 1 / 0,
      xP = 17976931348623157e292;
    function AP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = OP(e)), e === Vv || e === -Vv)) {
        var t = e < 0 ? -1 : 1;
        return t * xP;
      }
      return e === e ? e : 0;
    }
    Uv.exports = AP;
  });
  var ga = u((PB, Hv) => {
    var SP = Xv();
    function wP(e) {
      var t = SP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    Hv.exports = wP;
  });
  var Bv = u((qB, Wv) => {
    var RP = va(),
      CP = Tt(),
      NP = ga(),
      LP = Math.max;
    function PP(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : NP(r);
      return i < 0 && (i = LP(n + i, 0)), RP(e, CP(t, 3), i);
    }
    Wv.exports = PP;
  });
  var ya = u((MB, kv) => {
    var qP = ha(),
      MP = Bv(),
      DP = qP(MP);
    kv.exports = DP;
  });
  var Kv = {};
  Re(Kv, {
    ELEMENT_MATCHES: () => FP,
    FLEX_PREFIXED: () => Ea,
    IS_BROWSER_ENV: () => ke,
    TRANSFORM_PREFIXED: () => It,
    TRANSFORM_STYLE_PREFIXED: () => zn,
    withBrowser: () => jn,
  });
  var zv,
    ke,
    jn,
    FP,
    Ea,
    It,
    jv,
    zn,
    Kn = se(() => {
      "use strict";
      (zv = ee(ya())),
        (ke = typeof window < "u"),
        (jn = (e, t) => (ke ? e() : t)),
        (FP = jn(() =>
          (0, zv.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (Ea = jn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (It = jn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (jv = It.split("transform")[0]),
        (zn = jv ? jv + "TransformStyle" : "transformStyle");
    });
  var ma = u((DB, Jv) => {
    var GP = 4,
      VP = 0.001,
      UP = 1e-7,
      XP = 10,
      Gr = 11,
      Yn = 1 / (Gr - 1),
      HP = typeof Float32Array == "function";
    function Yv(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function $v(e, t) {
      return 3 * t - 6 * e;
    }
    function Qv(e) {
      return 3 * e;
    }
    function $n(e, t, r) {
      return ((Yv(t, r) * e + $v(t, r)) * e + Qv(t)) * e;
    }
    function Zv(e, t, r) {
      return 3 * Yv(t, r) * e * e + 2 * $v(t, r) * e + Qv(t);
    }
    function WP(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = $n(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > UP && ++s < XP);
      return a;
    }
    function BP(e, t, r, n) {
      for (var i = 0; i < GP; ++i) {
        var o = Zv(t, r, n);
        if (o === 0) return t;
        var a = $n(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    Jv.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = HP ? new Float32Array(Gr) : new Array(Gr);
      if (t !== r || n !== i)
        for (var a = 0; a < Gr; ++a) o[a] = $n(a * Yn, t, n);
      function s(c) {
        for (var f = 0, h = 1, p = Gr - 1; h !== p && o[h] <= c; ++h) f += Yn;
        --h;
        var v = (c - o[h]) / (o[h + 1] - o[h]),
          m = f + v * Yn,
          T = Zv(m, t, n);
        return T >= VP ? BP(c, m, t, n) : T === 0 ? m : WP(c, f, f + Yn, t, n);
      }
      return function (f) {
        return t === r && n === i
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : $n(s(f), r, i);
      };
    };
  });
  var Ur = {};
  Re(Ur, {
    bounce: () => Aq,
    bouncePast: () => Sq,
    ease: () => kP,
    easeIn: () => jP,
    easeInOut: () => KP,
    easeOut: () => zP,
    inBack: () => yq,
    inCirc: () => pq,
    inCubic: () => ZP,
    inElastic: () => _q,
    inExpo: () => lq,
    inOutBack: () => mq,
    inOutCirc: () => vq,
    inOutCubic: () => eq,
    inOutElastic: () => Iq,
    inOutExpo: () => dq,
    inOutQuad: () => QP,
    inOutQuart: () => nq,
    inOutQuint: () => aq,
    inOutSine: () => cq,
    inQuad: () => YP,
    inQuart: () => tq,
    inQuint: () => iq,
    inSine: () => sq,
    outBack: () => Eq,
    outBounce: () => gq,
    outCirc: () => hq,
    outCubic: () => JP,
    outElastic: () => Tq,
    outExpo: () => fq,
    outQuad: () => $P,
    outQuart: () => rq,
    outQuint: () => oq,
    outSine: () => uq,
    swingFrom: () => Oq,
    swingFromTo: () => bq,
    swingTo: () => xq,
  });
  function YP(e) {
    return Math.pow(e, 2);
  }
  function $P(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function QP(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function ZP(e) {
    return Math.pow(e, 3);
  }
  function JP(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function eq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function tq(e) {
    return Math.pow(e, 4);
  }
  function rq(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function nq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function iq(e) {
    return Math.pow(e, 5);
  }
  function oq(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function aq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function sq(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function uq(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function cq(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function lq(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function fq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function dq(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function pq(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function hq(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function vq(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function gq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function yq(e) {
    let t = lt;
    return e * e * ((t + 1) * e - t);
  }
  function Eq(e) {
    let t = lt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function mq(e) {
    let t = lt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function _q(e) {
    let t = lt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function Tq(e) {
    let t = lt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function Iq(e) {
    let t = lt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function bq(e) {
    let t = lt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Oq(e) {
    let t = lt;
    return e * e * ((t + 1) * e - t);
  }
  function xq(e) {
    let t = lt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Aq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Sq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var Vr,
    lt,
    kP,
    jP,
    zP,
    KP,
    _a = se(() => {
      "use strict";
      (Vr = ee(ma())),
        (lt = 1.70158),
        (kP = (0, Vr.default)(0.25, 0.1, 0.25, 1)),
        (jP = (0, Vr.default)(0.42, 0, 1, 1)),
        (zP = (0, Vr.default)(0, 0, 0.58, 1)),
        (KP = (0, Vr.default)(0.42, 0, 0.58, 1));
    });
  var tg = {};
  Re(tg, {
    applyEasing: () => Rq,
    createBezierEasing: () => wq,
    optimizeFloat: () => Xr,
  });
  function Xr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function wq(e) {
    return (0, eg.default)(...e);
  }
  function Rq(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : Xr(r ? (t > 0 ? r(t) : t) : t > 0 && e && Ur[e] ? Ur[e](t) : t);
  }
  var eg,
    Ta = se(() => {
      "use strict";
      _a();
      eg = ee(ma());
    });
  var ig = {};
  Re(ig, {
    createElementState: () => ng,
    ixElements: () => Wq,
    mergeActionState: () => Ia,
  });
  function ng(e, t, r, n, i) {
    let o =
      r === Cq ? (0, er.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, er.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function Ia(e, t, r, n, i) {
    let o = kq(i);
    return (0, er.mergeIn)(e, [t, Hq, r], n, o);
  }
  function kq(e) {
    let { config: t } = e;
    return Bq.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var er,
    GB,
    Cq,
    VB,
    Nq,
    Lq,
    Pq,
    qq,
    Mq,
    Dq,
    Fq,
    Gq,
    Vq,
    Uq,
    Xq,
    rg,
    Hq,
    Wq,
    Bq,
    og = se(() => {
      "use strict";
      er = ee(kt());
      Ne();
      ({
        HTML_ELEMENT: GB,
        PLAIN_OBJECT: Cq,
        ABSTRACT_NODE: VB,
        CONFIG_X_VALUE: Nq,
        CONFIG_Y_VALUE: Lq,
        CONFIG_Z_VALUE: Pq,
        CONFIG_VALUE: qq,
        CONFIG_X_UNIT: Mq,
        CONFIG_Y_UNIT: Dq,
        CONFIG_Z_UNIT: Fq,
        CONFIG_UNIT: Gq,
      } = Te),
        ({
          IX2_SESSION_STOPPED: Vq,
          IX2_INSTANCE_ADDED: Uq,
          IX2_ELEMENT_STATE_CHANGED: Xq,
        } = ve),
        (rg = {}),
        (Hq = "refState"),
        (Wq = (e = rg, t = {}) => {
          switch (t.type) {
            case Vq:
              return rg;
            case Uq: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                c = e;
              return (
                (0, er.getIn)(c, [r, n]) !== n && (c = ng(c, n, a, r, o)),
                Ia(c, r, s, i, o)
              );
            }
            case Xq: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return Ia(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      Bq = [
        [Nq, Mq],
        [Lq, Dq],
        [Pq, Fq],
        [qq, Gq],
      ];
    });
  var ag = u((me) => {
    "use strict";
    Object.defineProperty(me, "__esModule", { value: !0 });
    me.renderPlugin =
      me.getPluginOrigin =
      me.getPluginDuration =
      me.getPluginDestination =
      me.getPluginConfig =
      me.createPluginInstance =
      me.clearPlugin =
        void 0;
    var jq = (e) => e.value;
    me.getPluginConfig = jq;
    var zq = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    me.getPluginDuration = zq;
    var Kq = (e) => e || { value: 0 };
    me.getPluginOrigin = Kq;
    var Yq = (e) => ({ value: e.value });
    me.getPluginDestination = Yq;
    var $q = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    me.createPluginInstance = $q;
    var Qq = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    me.renderPlugin = Qq;
    var Zq = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    me.clearPlugin = Zq;
  });
  var ug = u((_e) => {
    "use strict";
    Object.defineProperty(_e, "__esModule", { value: !0 });
    _e.renderPlugin =
      _e.getPluginOrigin =
      _e.getPluginDuration =
      _e.getPluginDestination =
      _e.getPluginConfig =
      _e.createPluginInstance =
      _e.clearPlugin =
        void 0;
    var Jq = (e) => document.querySelector(`[data-w-id="${e}"]`),
      eM = () => window.Webflow.require("spline"),
      tM = (e, t) => e.filter((r) => !t.includes(r)),
      rM = (e, t) => e.value[t];
    _e.getPluginConfig = rM;
    var nM = () => null;
    _e.getPluginDuration = nM;
    var sg = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      iM = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = tM(n, o);
          return a.length ? a.reduce((c, f) => ((c[f] = sg[f]), c), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = sg[a]), o), {});
      };
    _e.getPluginOrigin = iM;
    var oM = (e) => e.value;
    _e.getPluginDestination = oM;
    var aM = (e, t) => {
      var r, n;
      let i =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (n = r.target) === null ||
        n === void 0
          ? void 0
          : n.pluginElement;
      return i ? Jq(i) : null;
    };
    _e.createPluginInstance = aM;
    var sM = (e, t, r) => {
      let n = eM(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let c = o && s.findObjectById(o);
          if (!c) return;
          let { PLUGIN_SPLINE: f } = t;
          f.positionX != null && (c.position.x = f.positionX),
            f.positionY != null && (c.position.y = f.positionY),
            f.positionZ != null && (c.position.z = f.positionZ),
            f.rotationX != null && (c.rotation.x = f.rotationX),
            f.rotationY != null && (c.rotation.y = f.rotationY),
            f.rotationZ != null && (c.rotation.z = f.rotationZ),
            f.scaleX != null && (c.scale.x = f.scaleX),
            f.scaleY != null && (c.scale.y = f.scaleY),
            f.scaleZ != null && (c.scale.z = f.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    _e.renderPlugin = sM;
    var uM = () => null;
    _e.clearPlugin = uM;
  });
  var lg = u((ge) => {
    "use strict";
    Object.defineProperty(ge, "__esModule", { value: !0 });
    ge.getPluginOrigin =
      ge.getPluginDuration =
      ge.getPluginDestination =
      ge.getPluginConfig =
      ge.createPluginInstance =
      ge.clearPlugin =
        void 0;
    ge.normalizeColor = cg;
    ge.renderPlugin = void 0;
    function cg(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase();
      if (o.startsWith("#")) {
        let a = o.substring(1);
        a.length === 3
          ? ((t = parseInt(a[0] + a[0], 16)),
            (r = parseInt(a[1] + a[1], 16)),
            (n = parseInt(a[2] + a[2], 16)))
          : a.length === 6 &&
            ((t = parseInt(a.substring(0, 2), 16)),
            (r = parseInt(a.substring(2, 4), 16)),
            (n = parseInt(a.substring(4, 6), 16)));
      } else if (o.startsWith("rgba")) {
        let a = o.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10)),
          (i = parseFloat(a[3]));
      } else if (o.startsWith("rgb")) {
        let a = o.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10));
      } else if (o.startsWith("hsla")) {
        let a = o.match(/hsla\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          c = parseFloat(a[1].replace("%", "")) / 100,
          f = parseFloat(a[2].replace("%", "")) / 100;
        i = parseFloat(a[3]);
        let h = (1 - Math.abs(2 * f - 1)) * c,
          p = h * (1 - Math.abs(((s / 60) % 2) - 1)),
          v = f - h / 2,
          m,
          T,
          E;
        s >= 0 && s < 60
          ? ((m = h), (T = p), (E = 0))
          : s >= 60 && s < 120
          ? ((m = p), (T = h), (E = 0))
          : s >= 120 && s < 180
          ? ((m = 0), (T = h), (E = p))
          : s >= 180 && s < 240
          ? ((m = 0), (T = p), (E = h))
          : s >= 240 && s < 300
          ? ((m = p), (T = 0), (E = h))
          : ((m = h), (T = 0), (E = p)),
          (t = Math.round((m + v) * 255)),
          (r = Math.round((T + v) * 255)),
          (n = Math.round((E + v) * 255));
      } else if (o.startsWith("hsl")) {
        let a = o.match(/hsl\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          c = parseFloat(a[1].replace("%", "")) / 100,
          f = parseFloat(a[2].replace("%", "")) / 100,
          h = (1 - Math.abs(2 * f - 1)) * c,
          p = h * (1 - Math.abs(((s / 60) % 2) - 1)),
          v = f - h / 2,
          m,
          T,
          E;
        s >= 0 && s < 60
          ? ((m = h), (T = p), (E = 0))
          : s >= 60 && s < 120
          ? ((m = p), (T = h), (E = 0))
          : s >= 120 && s < 180
          ? ((m = 0), (T = h), (E = p))
          : s >= 180 && s < 240
          ? ((m = 0), (T = p), (E = h))
          : s >= 240 && s < 300
          ? ((m = p), (T = 0), (E = h))
          : ((m = h), (T = 0), (E = p)),
          (t = Math.round((m + v) * 255)),
          (r = Math.round((T + v) * 255)),
          (n = Math.round((E + v) * 255));
      }
      return (
        (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`,
        { red: t, green: r, blue: n, alpha: i }
      );
    }
    var cM = (e, t) => e.value[t];
    ge.getPluginConfig = cM;
    var lM = () => null;
    ge.getPluginDuration = lM;
    var fM = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null) return cg(i);
    };
    ge.getPluginOrigin = fM;
    var dM = (e) => e.value;
    ge.getPluginDestination = dM;
    var pM = () => null;
    ge.createPluginInstance = pM;
    var hM = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: s, green: c, blue: f, alpha: h } = o,
        p;
      a != null && (p = a + i),
        s != null &&
          f != null &&
          c != null &&
          h != null &&
          (p = `rgba(${s}, ${c}, ${f}, ${h})`),
        p != null && document.documentElement.style.setProperty(n, p);
    };
    ge.renderPlugin = hM;
    var vM = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    ge.clearPlugin = vM;
  });
  var fg = u((Qn) => {
    "use strict";
    var Oa = un().default;
    Object.defineProperty(Qn, "__esModule", { value: !0 });
    Qn.pluginMethodMap = void 0;
    var ba = (Ne(), Ye(yf)),
      gM = Oa(ag()),
      yM = Oa(ug()),
      EM = Oa(lg()),
      WB = (Qn.pluginMethodMap = new Map([
        [ba.ActionTypeConsts.PLUGIN_LOTTIE, { ...gM }],
        [ba.ActionTypeConsts.PLUGIN_SPLINE, { ...yM }],
        [ba.ActionTypeConsts.PLUGIN_VARIABLE, { ...EM }],
      ]));
  });
  var dg = {};
  Re(dg, {
    clearPlugin: () => Ca,
    createPluginInstance: () => _M,
    getPluginConfig: () => Aa,
    getPluginDestination: () => wa,
    getPluginDuration: () => mM,
    getPluginOrigin: () => Sa,
    isPluginType: () => Lt,
    renderPlugin: () => Ra,
  });
  function Lt(e) {
    return xa.pluginMethodMap.has(e);
  }
  var xa,
    Pt,
    Aa,
    Sa,
    mM,
    wa,
    _M,
    Ra,
    Ca,
    Na = se(() => {
      "use strict";
      Kn();
      xa = ee(fg());
      (Pt = (e) => (t) => {
        if (!ke) return () => null;
        let r = xa.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (Aa = Pt("getPluginConfig")),
        (Sa = Pt("getPluginOrigin")),
        (mM = Pt("getPluginDuration")),
        (wa = Pt("getPluginDestination")),
        (_M = Pt("createPluginInstance")),
        (Ra = Pt("renderPlugin")),
        (Ca = Pt("clearPlugin"));
    });
  var hg = u((jB, pg) => {
    function TM(e, t) {
      return e == null || e !== e ? t : e;
    }
    pg.exports = TM;
  });
  var gg = u((zB, vg) => {
    function IM(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    vg.exports = IM;
  });
  var Eg = u((KB, yg) => {
    function bM(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var c = a[e ? s : ++i];
          if (r(o[c], c, o) === !1) break;
        }
        return t;
      };
    }
    yg.exports = bM;
  });
  var _g = u((YB, mg) => {
    var OM = Eg(),
      xM = OM();
    mg.exports = xM;
  });
  var La = u(($B, Tg) => {
    var AM = _g(),
      SM = Mr();
    function wM(e, t) {
      return e && AM(e, t, SM);
    }
    Tg.exports = wM;
  });
  var bg = u((QB, Ig) => {
    var RM = Ct();
    function CM(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!RM(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    Ig.exports = CM;
  });
  var Pa = u((ZB, Og) => {
    var NM = La(),
      LM = bg(),
      PM = LM(NM);
    Og.exports = PM;
  });
  var Ag = u((JB, xg) => {
    function qM(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    xg.exports = qM;
  });
  var wg = u((ek, Sg) => {
    var MM = gg(),
      DM = Pa(),
      FM = Tt(),
      GM = Ag(),
      VM = Ee();
    function UM(e, t, r) {
      var n = VM(e) ? MM : GM,
        i = arguments.length < 3;
      return n(e, FM(t, 4), r, i, DM);
    }
    Sg.exports = UM;
  });
  var Cg = u((tk, Rg) => {
    var XM = va(),
      HM = Tt(),
      WM = ga(),
      BM = Math.max,
      kM = Math.min;
    function jM(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = WM(r)), (i = r < 0 ? BM(n + i, 0) : kM(i, n - 1))),
        XM(e, HM(t, 3), i, !0)
      );
    }
    Rg.exports = jM;
  });
  var Lg = u((rk, Ng) => {
    var zM = ha(),
      KM = Cg(),
      YM = zM(KM);
    Ng.exports = YM;
  });
  function Pg(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function QM(e, t) {
    if (Pg(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!$M.call(t, r[i]) || !Pg(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var $M,
    qa,
    qg = se(() => {
      "use strict";
      $M = Object.prototype.hasOwnProperty;
      qa = QM;
    });
  var Qg = {};
  Re(Qg, {
    cleanupHTMLElement: () => K1,
    clearAllStyles: () => z1,
    clearObjectCache: () => h1,
    getActionListProgress: () => $1,
    getAffectedElements: () => Va,
    getComputedStyle: () => I1,
    getDestinationValues: () => R1,
    getElementId: () => E1,
    getInstanceId: () => g1,
    getInstanceOrigin: () => x1,
    getItemConfigByKey: () => w1,
    getMaxDurationItemIndex: () => $g,
    getNamespacedParameterId: () => J1,
    getRenderType: () => zg,
    getStyleProp: () => C1,
    mediaQueriesEqual: () => tD,
    observeStore: () => T1,
    reduceListToGroup: () => Q1,
    reifyState: () => m1,
    renderHTMLElement: () => N1,
    shallowEqual: () => qa,
    shouldAllowMediaQuery: () => eD,
    shouldNamespaceEventParameter: () => Z1,
    stringifyTarget: () => rD,
  });
  function h1() {
    Zn.clear();
  }
  function g1() {
    return "i" + v1++;
  }
  function E1(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + y1++;
  }
  function m1({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, ri.default)(
        e,
        (a, s) => {
          let { eventTypeId: c } = s;
          return a[c] || (a[c] = {}), (a[c][s.id] = s), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function T1({ store: e, select: t, onChange: r, comparator: n = _1 }) {
    let { getState: i, subscribe: o } = e,
      a = o(c),
      s = t(i());
    function c() {
      let f = t(i());
      if (f == null) {
        a();
        return;
      }
      n(f, s) || ((s = f), r(s, e));
    }
    return a;
  }
  function Fg(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function Va({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (P, _) =>
          P.concat(
            Va({
              config: { target: _ },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: c,
        getChildElements: f,
        getSiblingElements: h,
        matchSelector: p,
        elementContains: v,
        isSiblingNode: m,
      } = i,
      { target: T } = e;
    if (!T) return [];
    let {
      id: E,
      objectId: L,
      selector: x,
      selectorGuids: w,
      appliesTo: O,
      useEventTarget: M,
    } = Fg(T);
    if (L) return [Zn.has(L) ? Zn.get(L) : Zn.set(L, {}).get(L)];
    if (O === Uo.PAGE) {
      let P = a(E);
      return P ? [P] : [];
    }
    let C = (t?.action?.config?.affectedElements ?? {})[E || x] || {},
      X = !!(C.id || C.selector),
      U,
      H,
      B,
      j = t && s(Fg(t.target));
    if (
      (X
        ? ((U = C.limitAffectedElements), (H = j), (B = s(C)))
        : (H = B = s({ id: E, selector: x, selectorGuids: w })),
      t && M)
    ) {
      let P = r && (B || M === !0) ? [r] : c(j);
      if (B) {
        if (M === f1) return c(B).filter((_) => P.some((N) => v(_, N)));
        if (M === Mg) return c(B).filter((_) => P.some((N) => v(N, _)));
        if (M === Dg) return c(B).filter((_) => P.some((N) => m(N, _)));
      }
      return P;
    }
    return H == null || B == null
      ? []
      : ke && n
      ? c(B).filter((P) => n.contains(P))
      : U === Mg
      ? c(H, B)
      : U === l1
      ? f(c(H)).filter(p(B))
      : U === Dg
      ? h(c(H)).filter(p(B))
      : c(B);
  }
  function I1({ element: e, actionItem: t }) {
    if (!ke) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case or:
      case ar:
      case sr:
      case ur:
      case ii:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function x1(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (Lt(a)) return Sa(a)(t[a], n);
    switch (n.actionTypeId) {
      case rr:
      case nr:
      case ir:
      case kr:
        return t[n.actionTypeId] || Ua[n.actionTypeId];
      case jr:
        return b1(t[n.actionTypeId], n.config.filters);
      case zr:
        return O1(t[n.actionTypeId], n.config.fontVariations);
      case Bg:
        return { value: (0, ft.default)(parseFloat(o(e, ei)), 1) };
      case or: {
        let s = o(e, tt),
          c = o(e, rt),
          f,
          h;
        return (
          n.config.widthUnit === bt
            ? (f = Gg.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (f = (0, ft.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === bt
            ? (h = Gg.test(c) ? parseFloat(c) : parseFloat(r.height))
            : (h = (0, ft.default)(parseFloat(c), parseFloat(r.height))),
          { widthValue: f, heightValue: h }
        );
      }
      case ar:
      case sr:
      case ur:
        return B1({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case ii:
        return { value: (0, ft.default)(o(e, ti), r.display) };
      case p1:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function R1({ element: e, actionItem: t, elementApi: r }) {
    if (Lt(t.actionTypeId)) return wa(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case rr:
      case nr:
      case ir:
      case kr: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case or: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: c, heightValue: f } = t.config;
        if (!ke) return { widthValue: c, heightValue: f };
        if (a === bt) {
          let h = n(e, tt);
          i(e, tt, ""), (c = o(e, "offsetWidth")), i(e, tt, h);
        }
        if (s === bt) {
          let h = n(e, rt);
          i(e, rt, ""), (f = o(e, "offsetHeight")), i(e, rt, h);
        }
        return { widthValue: c, heightValue: f };
      }
      case ar:
      case sr:
      case ur: {
        let { rValue: n, gValue: i, bValue: o, aValue: a } = t.config;
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case jr:
        return t.config.filters.reduce(A1, {});
      case zr:
        return t.config.fontVariations.reduce(S1, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function zg(e) {
    if (/^TRANSFORM_/.test(e)) return Hg;
    if (/^STYLE_/.test(e)) return Fa;
    if (/^GENERAL_/.test(e)) return Da;
    if (/^PLUGIN_/.test(e)) return Wg;
  }
  function C1(e, t) {
    return e === Fa ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function N1(e, t, r, n, i, o, a, s, c) {
    switch (s) {
      case Hg:
        return D1(e, t, r, i, a);
      case Fa:
        return k1(e, t, r, i, o, a);
      case Da:
        return j1(e, i, a);
      case Wg: {
        let { actionTypeId: f } = i;
        if (Lt(f)) return Ra(f)(c, t, i);
      }
    }
  }
  function D1(e, t, r, n, i) {
    let o = M1.map((s) => {
        let c = Ua[s],
          {
            xValue: f = c.xValue,
            yValue: h = c.yValue,
            zValue: p = c.zValue,
            xUnit: v = "",
            yUnit: m = "",
            zUnit: T = "",
          } = t[s] || {};
        switch (s) {
          case rr:
            return `${e1}(${f}${v}, ${h}${m}, ${p}${T})`;
          case nr:
            return `${t1}(${f}${v}, ${h}${m}, ${p}${T})`;
          case ir:
            return `${r1}(${f}${v}) ${n1}(${h}${m}) ${i1}(${p}${T})`;
          case kr:
            return `${o1}(${f}${v}, ${h}${m})`;
          default:
            return "";
        }
      }).join(" "),
      { setStyle: a } = i;
    qt(e, It, i), a(e, It, o), V1(n, r) && a(e, zn, a1);
  }
  function F1(e, t, r, n) {
    let i = (0, ri.default)(t, (a, s, c) => `${a} ${c}(${s}${q1(c, r)})`, ""),
      { setStyle: o } = n;
    qt(e, Hr, n), o(e, Hr, i);
  }
  function G1(e, t, r, n) {
    let i = (0, ri.default)(
        t,
        (a, s, c) => (a.push(`"${c}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    qt(e, Wr, n), o(e, Wr, i);
  }
  function V1({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === rr && n !== void 0) ||
      (e === nr && n !== void 0) ||
      (e === ir && (t !== void 0 || r !== void 0))
    );
  }
  function W1(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function B1({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = Ga[t],
      o = n(e, i),
      a = X1.test(o) ? o : r[i],
      s = W1(H1, a).split(Br);
    return {
      rValue: (0, ft.default)(parseInt(s[0], 10), 255),
      gValue: (0, ft.default)(parseInt(s[1], 10), 255),
      bValue: (0, ft.default)(parseInt(s[2], 10), 255),
      aValue: (0, ft.default)(parseFloat(s[3]), 1),
    };
  }
  function k1(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case or: {
        let { widthUnit: s = "", heightUnit: c = "" } = n.config,
          { widthValue: f, heightValue: h } = r;
        f !== void 0 && (s === bt && (s = "px"), qt(e, tt, o), a(e, tt, f + s)),
          h !== void 0 &&
            (c === bt && (c = "px"), qt(e, rt, o), a(e, rt, h + c));
        break;
      }
      case jr: {
        F1(e, r, n.config, o);
        break;
      }
      case zr: {
        G1(e, r, n.config, o);
        break;
      }
      case ar:
      case sr:
      case ur: {
        let s = Ga[n.actionTypeId],
          c = Math.round(r.rValue),
          f = Math.round(r.gValue),
          h = Math.round(r.bValue),
          p = r.aValue;
        qt(e, s, o),
          a(e, s, p >= 1 ? `rgb(${c},${f},${h})` : `rgba(${c},${f},${h},${p})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        qt(e, i, o), a(e, i, r.value + s);
        break;
      }
    }
  }
  function j1(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case ii: {
        let { value: i } = t.config;
        i === s1 && ke ? n(e, ti, Ea) : n(e, ti, i);
        return;
      }
    }
  }
  function qt(e, t, r) {
    if (!ke) return;
    let n = jg[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, tr);
    if (!a) {
      o(e, tr, n);
      return;
    }
    let s = a.split(Br).map(kg);
    s.indexOf(n) === -1 && o(e, tr, s.concat(n).join(Br));
  }
  function Kg(e, t, r) {
    if (!ke) return;
    let n = jg[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, tr);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        tr,
        a
          .split(Br)
          .map(kg)
          .filter((s) => s !== n)
          .join(Br)
      );
  }
  function z1({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: s } = a.action,
        { actionListId: c } = s,
        f = i[c];
      f && Vg({ actionList: f, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        Vg({ actionList: i[o], elementApi: t });
      });
  }
  function Vg({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        Ug({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            Ug({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function Ug({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      Lt(o)
        ? (s = (c) => Ca(o)(c, i))
        : (s = Yg({ effect: Y1, actionTypeId: o, elementApi: r })),
        Va({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function K1(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === or) {
      let { config: a } = t;
      a.widthUnit === bt && n(e, tt, ""), a.heightUnit === bt && n(e, rt, "");
    }
    i(e, tr) && Yg({ effect: Kg, actionTypeId: o, elementApi: r })(e);
  }
  function Y1(e, t, r) {
    let { setStyle: n } = r;
    Kg(e, t, r), n(e, t, ""), t === It && n(e, zn, "");
  }
  function $g(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function $1(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((c, f) => {
        if (n && f === 0) return;
        let { actionItems: h } = c,
          p = h[$g(h)],
          { config: v, actionTypeId: m } = p;
        i.id === p.id && (s = a + o);
        let T = zg(m) === Da ? 0 : v.duration;
        a += v.delay + T;
      }),
      a > 0 ? Xr(s / a) : 0
    );
  }
  function Q1({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, ni.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: c } = s;
          return c.some(({ actionItems: f }) => f.some(a));
        }),
      (0, ni.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function Z1(e, { basedOn: t }) {
    return (
      (e === Be.SCROLLING_IN_VIEW && (t === Je.ELEMENT || t == null)) ||
      (e === Be.MOUSE_MOVE && t === Je.ELEMENT)
    );
  }
  function J1(e, t) {
    return e + d1 + t;
  }
  function eD(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function tD(e, t) {
    return qa(e && e.sort(), t && t.sort());
  }
  function rD(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Ma + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Ma + r + Ma + n;
  }
  var ft,
    ri,
    Jn,
    ni,
    ZM,
    JM,
    e1,
    t1,
    r1,
    n1,
    i1,
    o1,
    a1,
    s1,
    ei,
    Hr,
    Wr,
    tt,
    rt,
    Xg,
    u1,
    c1,
    Mg,
    l1,
    Dg,
    f1,
    ti,
    tr,
    bt,
    Br,
    d1,
    Ma,
    Hg,
    Da,
    Fa,
    Wg,
    rr,
    nr,
    ir,
    kr,
    Bg,
    jr,
    zr,
    or,
    ar,
    sr,
    ur,
    ii,
    p1,
    kg,
    Ga,
    jg,
    Zn,
    v1,
    y1,
    _1,
    Gg,
    b1,
    O1,
    A1,
    S1,
    w1,
    Ua,
    L1,
    P1,
    q1,
    M1,
    U1,
    X1,
    H1,
    Yg,
    Zg = se(() => {
      "use strict";
      (ft = ee(hg())), (ri = ee(wg())), (Jn = ee(Lg())), (ni = ee(kt()));
      Ne();
      qg();
      Ta();
      Na();
      Kn();
      ({
        BACKGROUND: ZM,
        TRANSFORM: JM,
        TRANSLATE_3D: e1,
        SCALE_3D: t1,
        ROTATE_X: r1,
        ROTATE_Y: n1,
        ROTATE_Z: i1,
        SKEW: o1,
        PRESERVE_3D: a1,
        FLEX: s1,
        OPACITY: ei,
        FILTER: Hr,
        FONT_VARIATION_SETTINGS: Wr,
        WIDTH: tt,
        HEIGHT: rt,
        BACKGROUND_COLOR: Xg,
        BORDER_COLOR: u1,
        COLOR: c1,
        CHILDREN: Mg,
        IMMEDIATE_CHILDREN: l1,
        SIBLINGS: Dg,
        PARENT: f1,
        DISPLAY: ti,
        WILL_CHANGE: tr,
        AUTO: bt,
        COMMA_DELIMITER: Br,
        COLON_DELIMITER: d1,
        BAR_DELIMITER: Ma,
        RENDER_TRANSFORM: Hg,
        RENDER_GENERAL: Da,
        RENDER_STYLE: Fa,
        RENDER_PLUGIN: Wg,
      } = Te),
        ({
          TRANSFORM_MOVE: rr,
          TRANSFORM_SCALE: nr,
          TRANSFORM_ROTATE: ir,
          TRANSFORM_SKEW: kr,
          STYLE_OPACITY: Bg,
          STYLE_FILTER: jr,
          STYLE_FONT_VARIATION: zr,
          STYLE_SIZE: or,
          STYLE_BACKGROUND_COLOR: ar,
          STYLE_BORDER: sr,
          STYLE_TEXT_COLOR: ur,
          GENERAL_DISPLAY: ii,
          OBJECT_VALUE: p1,
        } = Ce),
        (kg = (e) => e.trim()),
        (Ga = Object.freeze({ [ar]: Xg, [sr]: u1, [ur]: c1 })),
        (jg = Object.freeze({
          [It]: JM,
          [Xg]: ZM,
          [ei]: ei,
          [Hr]: Hr,
          [tt]: tt,
          [rt]: rt,
          [Wr]: Wr,
        })),
        (Zn = new Map());
      v1 = 1;
      y1 = 1;
      _1 = (e, t) => e === t;
      (Gg = /px/),
        (b1 = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = L1[n.type]), r),
            e || {}
          )),
        (O1 = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = P1[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (A1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (S1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (w1 = (e, t, r) => {
          if (Lt(e)) return Aa(e)(r, t);
          switch (e) {
            case jr: {
              let n = (0, Jn.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case zr: {
              let n = (0, Jn.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Ua = {
        [rr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [nr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [ir]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [kr]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (L1 = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (P1 = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (q1 = (e, t) => {
          let r = (0, Jn.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (M1 = Object.keys(Ua));
      (U1 = "\\(([^)]+)\\)"), (X1 = /^rgb/), (H1 = RegExp(`rgba?${U1}`));
      Yg =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case rr:
            case nr:
            case ir:
            case kr:
              e(n, It, r);
              break;
            case jr:
              e(n, Hr, r);
              break;
            case zr:
              e(n, Wr, r);
              break;
            case Bg:
              e(n, ei, r);
              break;
            case or:
              e(n, tt, r), e(n, rt, r);
              break;
            case ar:
            case sr:
            case ur:
              e(n, Ga[t], r);
              break;
            case ii:
              e(n, ti, r);
              break;
          }
        };
    });
  var Mt = u((Ae) => {
    "use strict";
    var cr = un().default;
    Object.defineProperty(Ae, "__esModule", { value: !0 });
    Ae.IX2VanillaUtils =
      Ae.IX2VanillaPlugins =
      Ae.IX2ElementsReducer =
      Ae.IX2Easings =
      Ae.IX2EasingUtils =
      Ae.IX2BrowserSupport =
        void 0;
    var nD = cr((Kn(), Ye(Kv)));
    Ae.IX2BrowserSupport = nD;
    var iD = cr((_a(), Ye(Ur)));
    Ae.IX2Easings = iD;
    var oD = cr((Ta(), Ye(tg)));
    Ae.IX2EasingUtils = oD;
    var aD = cr((og(), Ye(ig)));
    Ae.IX2ElementsReducer = aD;
    var sD = cr((Na(), Ye(dg)));
    Ae.IX2VanillaPlugins = sD;
    var uD = cr((Zg(), Ye(Qg)));
    Ae.IX2VanillaUtils = uD;
  });
  var ai,
    dt,
    cD,
    lD,
    fD,
    dD,
    pD,
    hD,
    oi,
    Jg,
    vD,
    gD,
    Xa,
    yD,
    ED,
    mD,
    _D,
    ey,
    ty = se(() => {
      "use strict";
      Ne();
      (ai = ee(Mt())),
        (dt = ee(kt())),
        ({
          IX2_RAW_DATA_IMPORTED: cD,
          IX2_SESSION_STOPPED: lD,
          IX2_INSTANCE_ADDED: fD,
          IX2_INSTANCE_STARTED: dD,
          IX2_INSTANCE_REMOVED: pD,
          IX2_ANIMATION_FRAME_CHANGED: hD,
        } = ve),
        ({
          optimizeFloat: oi,
          applyEasing: Jg,
          createBezierEasing: vD,
        } = ai.IX2EasingUtils),
        ({ RENDER_GENERAL: gD } = Te),
        ({
          getItemConfigByKey: Xa,
          getRenderType: yD,
          getStyleProp: ED,
        } = ai.IX2VanillaUtils),
        (mD = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: c,
              customEasingFn: f,
              skipMotion: h,
              skipToValue: p,
            } = e,
            { parameters: v } = t.payload,
            m = Math.max(1 - a, 0.01),
            T = v[n];
          T == null && ((m = 1), (T = s));
          let E = Math.max(T, 0) || 0,
            L = oi(E - r),
            x = h ? p : oi(r + L * m),
            w = x * 100;
          if (x === r && e.current) return e;
          let O, M, D, C;
          for (let U = 0, { length: H } = i; U < H; U++) {
            let { keyframe: B, actionItems: j } = i[U];
            if ((U === 0 && (O = j[0]), w >= B)) {
              O = j[0];
              let P = i[U + 1],
                _ = P && w !== B;
              (M = _ ? P.actionItems[0] : null),
                _ && ((D = B / 100), (C = (P.keyframe - B) / 100));
            }
          }
          let X = {};
          if (O && !M)
            for (let U = 0, { length: H } = o; U < H; U++) {
              let B = o[U];
              X[B] = Xa(c, B, O.config);
            }
          else if (O && M && D !== void 0 && C !== void 0) {
            let U = (x - D) / C,
              H = O.config.easing,
              B = Jg(H, U, f);
            for (let j = 0, { length: P } = o; j < P; j++) {
              let _ = o[j],
                N = Xa(c, _, O.config),
                z = (Xa(c, _, M.config) - N) * B + N;
              X[_] = z;
            }
          }
          return (0, dt.merge)(e, { position: x, current: X });
        }),
        (_D = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: c,
              destination: f,
              destinationKeys: h,
              pluginDuration: p,
              instanceDelay: v,
              customEasingFn: m,
              skipMotion: T,
            } = e,
            E = c.config.easing,
            { duration: L, delay: x } = c.config;
          p != null && (L = p),
            (x = v ?? x),
            a === gD ? (L = 0) : (o || T) && (L = x = 0);
          let { now: w } = t.payload;
          if (r && n) {
            let O = w - (i + x);
            if (s) {
              let U = w - i,
                H = L + x,
                B = oi(Math.min(Math.max(0, U / H), 1));
              e = (0, dt.set)(e, "verboseTimeElapsed", H * B);
            }
            if (O < 0) return e;
            let M = oi(Math.min(Math.max(0, O / L), 1)),
              D = Jg(E, M, m),
              C = {},
              X = null;
            return (
              h.length &&
                (X = h.reduce((U, H) => {
                  let B = f[H],
                    j = parseFloat(n[H]) || 0,
                    _ = (parseFloat(B) - j) * D + j;
                  return (U[H] = _), U;
                }, {})),
              (C.current = X),
              (C.position = M),
              M === 1 && ((C.active = !1), (C.complete = !0)),
              (0, dt.merge)(e, C)
            );
          }
          return e;
        }),
        (ey = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case cD:
              return t.payload.ixInstances || Object.freeze({});
            case lD:
              return Object.freeze({});
            case fD: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: c,
                  groupIndex: f,
                  isCarrier: h,
                  origin: p,
                  destination: v,
                  immediate: m,
                  verbose: T,
                  continuous: E,
                  parameterId: L,
                  actionGroups: x,
                  smoothing: w,
                  restingValue: O,
                  pluginInstance: M,
                  pluginDuration: D,
                  instanceDelay: C,
                  skipMotion: X,
                  skipToValue: U,
                } = t.payload,
                { actionTypeId: H } = i,
                B = yD(H),
                j = ED(B, H),
                P = Object.keys(v).filter(
                  (N) => v[N] != null && typeof v[N] != "string"
                ),
                { easing: _ } = i.config;
              return (0, dt.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: p,
                destination: v,
                destinationKeys: P,
                immediate: m,
                verbose: T,
                current: null,
                actionItem: i,
                actionTypeId: H,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: c,
                groupIndex: f,
                renderType: B,
                isCarrier: h,
                styleProp: j,
                continuous: E,
                parameterId: L,
                actionGroups: x,
                smoothing: w,
                restingValue: O,
                pluginInstance: M,
                pluginDuration: D,
                instanceDelay: C,
                skipMotion: X,
                skipToValue: U,
                customEasingFn:
                  Array.isArray(_) && _.length === 4 ? vD(_) : void 0,
              });
            }
            case dD: {
              let { instanceId: r, time: n } = t.payload;
              return (0, dt.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case pD: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case hD: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  c = s.continuous ? mD : _D;
                r = (0, dt.set)(r, a, c(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var TD,
    ID,
    bD,
    ry,
    ny = se(() => {
      "use strict";
      Ne();
      ({
        IX2_RAW_DATA_IMPORTED: TD,
        IX2_SESSION_STOPPED: ID,
        IX2_PARAMETER_CHANGED: bD,
      } = ve),
        (ry = (e = {}, t) => {
          switch (t.type) {
            case TD:
              return t.payload.ixParameters || {};
            case ID:
              return {};
            case bD: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var ay = {};
  Re(ay, { default: () => xD });
  var iy,
    oy,
    OD,
    xD,
    sy = se(() => {
      "use strict";
      iy = ee(Vo());
      mf();
      Uf();
      Wf();
      oy = ee(Mt());
      ty();
      ny();
      ({ ixElements: OD } = oy.IX2ElementsReducer),
        (xD = (0, iy.combineReducers)({
          ixData: Ef,
          ixRequest: Vf,
          ixSession: Hf,
          ixElements: OD,
          ixInstances: ey,
          ixParameters: ry,
        }));
    });
  var cy = u((mk, uy) => {
    var AD = mt(),
      SD = Ee(),
      wD = ct(),
      RD = "[object String]";
    function CD(e) {
      return typeof e == "string" || (!SD(e) && wD(e) && AD(e) == RD);
    }
    uy.exports = CD;
  });
  var fy = u((_k, ly) => {
    var ND = pa(),
      LD = ND("length");
    ly.exports = LD;
  });
  var py = u((Tk, dy) => {
    var PD = "\\ud800-\\udfff",
      qD = "\\u0300-\\u036f",
      MD = "\\ufe20-\\ufe2f",
      DD = "\\u20d0-\\u20ff",
      FD = qD + MD + DD,
      GD = "\\ufe0e\\ufe0f",
      VD = "\\u200d",
      UD = RegExp("[" + VD + PD + FD + GD + "]");
    function XD(e) {
      return UD.test(e);
    }
    dy.exports = XD;
  });
  var Iy = u((Ik, Ty) => {
    var vy = "\\ud800-\\udfff",
      HD = "\\u0300-\\u036f",
      WD = "\\ufe20-\\ufe2f",
      BD = "\\u20d0-\\u20ff",
      kD = HD + WD + BD,
      jD = "\\ufe0e\\ufe0f",
      zD = "[" + vy + "]",
      Ha = "[" + kD + "]",
      Wa = "\\ud83c[\\udffb-\\udfff]",
      KD = "(?:" + Ha + "|" + Wa + ")",
      gy = "[^" + vy + "]",
      yy = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Ey = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      YD = "\\u200d",
      my = KD + "?",
      _y = "[" + jD + "]?",
      $D = "(?:" + YD + "(?:" + [gy, yy, Ey].join("|") + ")" + _y + my + ")*",
      QD = _y + my + $D,
      ZD = "(?:" + [gy + Ha + "?", Ha, yy, Ey, zD].join("|") + ")",
      hy = RegExp(Wa + "(?=" + Wa + ")|" + ZD + QD, "g");
    function JD(e) {
      for (var t = (hy.lastIndex = 0); hy.test(e); ) ++t;
      return t;
    }
    Ty.exports = JD;
  });
  var Oy = u((bk, by) => {
    var e2 = fy(),
      t2 = py(),
      r2 = Iy();
    function n2(e) {
      return t2(e) ? r2(e) : e2(e);
    }
    by.exports = n2;
  });
  var Ay = u((Ok, xy) => {
    var i2 = Gn(),
      o2 = Vn(),
      a2 = Ct(),
      s2 = cy(),
      u2 = Oy(),
      c2 = "[object Map]",
      l2 = "[object Set]";
    function f2(e) {
      if (e == null) return 0;
      if (a2(e)) return s2(e) ? u2(e) : e.length;
      var t = o2(e);
      return t == c2 || t == l2 ? e.size : i2(e).length;
    }
    xy.exports = f2;
  });
  var wy = u((xk, Sy) => {
    var d2 = "Expected a function";
    function p2(e) {
      if (typeof e != "function") throw new TypeError(d2);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Sy.exports = p2;
  });
  var Ba = u((Ak, Ry) => {
    var h2 = _t(),
      v2 = (function () {
        try {
          var e = h2(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Ry.exports = v2;
  });
  var ka = u((Sk, Ny) => {
    var Cy = Ba();
    function g2(e, t, r) {
      t == "__proto__" && Cy
        ? Cy(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Ny.exports = g2;
  });
  var Py = u((wk, Ly) => {
    var y2 = ka(),
      E2 = wn(),
      m2 = Object.prototype,
      _2 = m2.hasOwnProperty;
    function T2(e, t, r) {
      var n = e[t];
      (!(_2.call(e, t) && E2(n, r)) || (r === void 0 && !(t in e))) &&
        y2(e, t, r);
    }
    Ly.exports = T2;
  });
  var Dy = u((Rk, My) => {
    var I2 = Py(),
      b2 = Fr(),
      O2 = qn(),
      qy = et(),
      x2 = Jt();
    function A2(e, t, r, n) {
      if (!qy(e)) return e;
      t = b2(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var c = x2(t[i]),
          f = r;
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return e;
        if (i != a) {
          var h = s[c];
          (f = n ? n(h, c, s) : void 0),
            f === void 0 && (f = qy(h) ? h : O2(t[i + 1]) ? [] : {});
        }
        I2(s, c, f), (s = s[c]);
      }
      return e;
    }
    My.exports = A2;
  });
  var Gy = u((Ck, Fy) => {
    var S2 = Hn(),
      w2 = Dy(),
      R2 = Fr();
    function C2(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = S2(e, a);
        r(s, a) && w2(o, R2(a, e), s);
      }
      return o;
    }
    Fy.exports = C2;
  });
  var Uy = u((Nk, Vy) => {
    var N2 = Ln(),
      L2 = Ao(),
      P2 = Zo(),
      q2 = Qo(),
      M2 = Object.getOwnPropertySymbols,
      D2 = M2
        ? function (e) {
            for (var t = []; e; ) N2(t, P2(e)), (e = L2(e));
            return t;
          }
        : q2;
    Vy.exports = D2;
  });
  var Hy = u((Lk, Xy) => {
    function F2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    Xy.exports = F2;
  });
  var By = u((Pk, Wy) => {
    var G2 = et(),
      V2 = Fn(),
      U2 = Hy(),
      X2 = Object.prototype,
      H2 = X2.hasOwnProperty;
    function W2(e) {
      if (!G2(e)) return U2(e);
      var t = V2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !H2.call(e, n))) || r.push(n);
      return r;
    }
    Wy.exports = W2;
  });
  var jy = u((qk, ky) => {
    var B2 = ea(),
      k2 = By(),
      j2 = Ct();
    function z2(e) {
      return j2(e) ? B2(e, !0) : k2(e);
    }
    ky.exports = z2;
  });
  var Ky = u((Mk, zy) => {
    var K2 = $o(),
      Y2 = Uy(),
      $2 = jy();
    function Q2(e) {
      return K2(e, $2, Y2);
    }
    zy.exports = Q2;
  });
  var $y = u((Dk, Yy) => {
    var Z2 = da(),
      J2 = Tt(),
      eF = Gy(),
      tF = Ky();
    function rF(e, t) {
      if (e == null) return {};
      var r = Z2(tF(e), function (n) {
        return [n];
      });
      return (
        (t = J2(t)),
        eF(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    Yy.exports = rF;
  });
  var Zy = u((Fk, Qy) => {
    var nF = Tt(),
      iF = wy(),
      oF = $y();
    function aF(e, t) {
      return oF(e, iF(nF(t)));
    }
    Qy.exports = aF;
  });
  var eE = u((Gk, Jy) => {
    var sF = Gn(),
      uF = Vn(),
      cF = Nr(),
      lF = Ee(),
      fF = Ct(),
      dF = Pn(),
      pF = Fn(),
      hF = Dn(),
      vF = "[object Map]",
      gF = "[object Set]",
      yF = Object.prototype,
      EF = yF.hasOwnProperty;
    function mF(e) {
      if (e == null) return !0;
      if (
        fF(e) &&
        (lF(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          dF(e) ||
          hF(e) ||
          cF(e))
      )
        return !e.length;
      var t = uF(e);
      if (t == vF || t == gF) return !e.size;
      if (pF(e)) return !sF(e).length;
      for (var r in e) if (EF.call(e, r)) return !1;
      return !0;
    }
    Jy.exports = mF;
  });
  var rE = u((Vk, tE) => {
    var _F = ka(),
      TF = La(),
      IF = Tt();
    function bF(e, t) {
      var r = {};
      return (
        (t = IF(t, 3)),
        TF(e, function (n, i, o) {
          _F(r, i, t(n, i, o));
        }),
        r
      );
    }
    tE.exports = bF;
  });
  var iE = u((Uk, nE) => {
    function OF(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    nE.exports = OF;
  });
  var aE = u((Xk, oE) => {
    var xF = Bn();
    function AF(e) {
      return typeof e == "function" ? e : xF;
    }
    oE.exports = AF;
  });
  var uE = u((Hk, sE) => {
    var SF = iE(),
      wF = Pa(),
      RF = aE(),
      CF = Ee();
    function NF(e, t) {
      var r = CF(e) ? SF : wF;
      return r(e, RF(t));
    }
    sE.exports = NF;
  });
  var lE = u((Wk, cE) => {
    var LF = We(),
      PF = function () {
        return LF.Date.now();
      };
    cE.exports = PF;
  });
  var pE = u((Bk, dE) => {
    var qF = et(),
      ja = lE(),
      fE = kn(),
      MF = "Expected a function",
      DF = Math.max,
      FF = Math.min;
    function GF(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        c,
        f = 0,
        h = !1,
        p = !1,
        v = !0;
      if (typeof e != "function") throw new TypeError(MF);
      (t = fE(t) || 0),
        qF(r) &&
          ((h = !!r.leading),
          (p = "maxWait" in r),
          (o = p ? DF(fE(r.maxWait) || 0, t) : o),
          (v = "trailing" in r ? !!r.trailing : v));
      function m(C) {
        var X = n,
          U = i;
        return (n = i = void 0), (f = C), (a = e.apply(U, X)), a;
      }
      function T(C) {
        return (f = C), (s = setTimeout(x, t)), h ? m(C) : a;
      }
      function E(C) {
        var X = C - c,
          U = C - f,
          H = t - X;
        return p ? FF(H, o - U) : H;
      }
      function L(C) {
        var X = C - c,
          U = C - f;
        return c === void 0 || X >= t || X < 0 || (p && U >= o);
      }
      function x() {
        var C = ja();
        if (L(C)) return w(C);
        s = setTimeout(x, E(C));
      }
      function w(C) {
        return (s = void 0), v && n ? m(C) : ((n = i = void 0), a);
      }
      function O() {
        s !== void 0 && clearTimeout(s), (f = 0), (n = c = i = s = void 0);
      }
      function M() {
        return s === void 0 ? a : w(ja());
      }
      function D() {
        var C = ja(),
          X = L(C);
        if (((n = arguments), (i = this), (c = C), X)) {
          if (s === void 0) return T(c);
          if (p) return clearTimeout(s), (s = setTimeout(x, t)), m(c);
        }
        return s === void 0 && (s = setTimeout(x, t)), a;
      }
      return (D.cancel = O), (D.flush = M), D;
    }
    dE.exports = GF;
  });
  var vE = u((kk, hE) => {
    var VF = pE(),
      UF = et(),
      XF = "Expected a function";
    function HF(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(XF);
      return (
        UF(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        VF(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    hE.exports = HF;
  });
  var yE = {};
  Re(yE, {
    actionListPlaybackChanged: () => fr,
    animationFrameChanged: () => ui,
    clearRequested: () => pG,
    elementStateChanged: () => es,
    eventListenerAdded: () => si,
    eventStateChanged: () => Qa,
    instanceAdded: () => Za,
    instanceRemoved: () => Ja,
    instanceStarted: () => ci,
    mediaQueriesDefined: () => rs,
    parameterChanged: () => lr,
    playbackRequested: () => fG,
    previewRequested: () => lG,
    rawDataImported: () => za,
    sessionInitialized: () => Ka,
    sessionStarted: () => Ya,
    sessionStopped: () => $a,
    stopRequested: () => dG,
    testFrameRendered: () => hG,
    viewportWidthChanged: () => ts,
  });
  var gE,
    WF,
    BF,
    kF,
    jF,
    zF,
    KF,
    YF,
    $F,
    QF,
    ZF,
    JF,
    eG,
    tG,
    rG,
    nG,
    iG,
    oG,
    aG,
    sG,
    uG,
    cG,
    za,
    Ka,
    Ya,
    $a,
    lG,
    fG,
    dG,
    pG,
    si,
    hG,
    Qa,
    ui,
    lr,
    Za,
    ci,
    Ja,
    es,
    fr,
    ts,
    rs,
    li = se(() => {
      "use strict";
      Ne();
      (gE = ee(Mt())),
        ({
          IX2_RAW_DATA_IMPORTED: WF,
          IX2_SESSION_INITIALIZED: BF,
          IX2_SESSION_STARTED: kF,
          IX2_SESSION_STOPPED: jF,
          IX2_PREVIEW_REQUESTED: zF,
          IX2_PLAYBACK_REQUESTED: KF,
          IX2_STOP_REQUESTED: YF,
          IX2_CLEAR_REQUESTED: $F,
          IX2_EVENT_LISTENER_ADDED: QF,
          IX2_TEST_FRAME_RENDERED: ZF,
          IX2_EVENT_STATE_CHANGED: JF,
          IX2_ANIMATION_FRAME_CHANGED: eG,
          IX2_PARAMETER_CHANGED: tG,
          IX2_INSTANCE_ADDED: rG,
          IX2_INSTANCE_STARTED: nG,
          IX2_INSTANCE_REMOVED: iG,
          IX2_ELEMENT_STATE_CHANGED: oG,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: aG,
          IX2_VIEWPORT_WIDTH_CHANGED: sG,
          IX2_MEDIA_QUERIES_DEFINED: uG,
        } = ve),
        ({ reifyState: cG } = gE.IX2VanillaUtils),
        (za = (e) => ({ type: WF, payload: { ...cG(e) } })),
        (Ka = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: BF,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (Ya = () => ({ type: kF })),
        ($a = () => ({ type: jF })),
        (lG = ({ rawData: e, defer: t }) => ({
          type: zF,
          payload: { defer: t, rawData: e },
        })),
        (fG = ({
          actionTypeId: e = Ce.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: c,
        }) => ({
          type: KF,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: c,
          },
        })),
        (dG = (e) => ({ type: YF, payload: { actionListId: e } })),
        (pG = () => ({ type: $F })),
        (si = (e, t) => ({
          type: QF,
          payload: { target: e, listenerParams: t },
        })),
        (hG = (e = 1) => ({ type: ZF, payload: { step: e } })),
        (Qa = (e, t) => ({ type: JF, payload: { stateKey: e, newState: t } })),
        (ui = (e, t) => ({ type: eG, payload: { now: e, parameters: t } })),
        (lr = (e, t) => ({ type: tG, payload: { key: e, value: t } })),
        (Za = (e) => ({ type: rG, payload: { ...e } })),
        (ci = (e, t) => ({ type: nG, payload: { instanceId: e, time: t } })),
        (Ja = (e) => ({ type: iG, payload: { instanceId: e } })),
        (es = (e, t, r, n) => ({
          type: oG,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (fr = ({ actionListId: e, isPlaying: t }) => ({
          type: aG,
          payload: { actionListId: e, isPlaying: t },
        })),
        (ts = ({ width: e, mediaQueries: t }) => ({
          type: sG,
          payload: { width: e, mediaQueries: t },
        })),
        (rs = () => ({ type: uG }));
    });
  var Se = {};
  Re(Se, {
    elementContains: () => os,
    getChildElements: () => OG,
    getClosestElement: () => Kr,
    getProperty: () => mG,
    getQuerySelector: () => is,
    getRefType: () => as,
    getSiblingElements: () => xG,
    getStyle: () => EG,
    getValidDocument: () => TG,
    isSiblingNode: () => bG,
    matchSelector: () => _G,
    queryDocument: () => IG,
    setStyle: () => yG,
  });
  function yG(e, t, r) {
    e.style[t] = r;
  }
  function EG(e, t) {
    return e.style[t];
  }
  function mG(e, t) {
    return e[t];
  }
  function _G(e) {
    return (t) => t[ns](e);
  }
  function is({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(EE) !== -1) {
        let n = e.split(EE),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(_E)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function TG(e) {
    return e == null || e === document.documentElement.getAttribute(_E)
      ? document
      : null;
  }
  function IG(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function os(e, t) {
    return e.contains(t);
  }
  function bG(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function OG(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function xG(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function as(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? vG
        : gG
      : null;
  }
  var mE,
    ns,
    EE,
    vG,
    gG,
    _E,
    Kr,
    TE = se(() => {
      "use strict";
      mE = ee(Mt());
      Ne();
      ({ ELEMENT_MATCHES: ns } = mE.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: EE,
          HTML_ELEMENT: vG,
          PLAIN_OBJECT: gG,
          WF_PAGE: _E,
        } = Te);
      Kr = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[ns] && r[ns](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var ss = u((Kk, bE) => {
    var AG = et(),
      IE = Object.create,
      SG = (function () {
        function e() {}
        return function (t) {
          if (!AG(t)) return {};
          if (IE) return IE(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    bE.exports = SG;
  });
  var fi = u((Yk, OE) => {
    function wG() {}
    OE.exports = wG;
  });
  var pi = u(($k, xE) => {
    var RG = ss(),
      CG = fi();
    function di(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    di.prototype = RG(CG.prototype);
    di.prototype.constructor = di;
    xE.exports = di;
  });
  var RE = u((Qk, wE) => {
    var AE = Ht(),
      NG = Nr(),
      LG = Ee(),
      SE = AE ? AE.isConcatSpreadable : void 0;
    function PG(e) {
      return LG(e) || NG(e) || !!(SE && e && e[SE]);
    }
    wE.exports = PG;
  });
  var LE = u((Zk, NE) => {
    var qG = Ln(),
      MG = RE();
    function CE(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = MG), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? CE(s, t - 1, r, n, i)
            : qG(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    NE.exports = CE;
  });
  var qE = u((Jk, PE) => {
    var DG = LE();
    function FG(e) {
      var t = e == null ? 0 : e.length;
      return t ? DG(e, 1) : [];
    }
    PE.exports = FG;
  });
  var DE = u((ej, ME) => {
    function GG(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    ME.exports = GG;
  });
  var VE = u((tj, GE) => {
    var VG = DE(),
      FE = Math.max;
    function UG(e, t, r) {
      return (
        (t = FE(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = FE(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), VG(e, this, s);
        }
      );
    }
    GE.exports = UG;
  });
  var XE = u((rj, UE) => {
    function XG(e) {
      return function () {
        return e;
      };
    }
    UE.exports = XG;
  });
  var BE = u((nj, WE) => {
    var HG = XE(),
      HE = Ba(),
      WG = Bn(),
      BG = HE
        ? function (e, t) {
            return HE(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: HG(t),
              writable: !0,
            });
          }
        : WG;
    WE.exports = BG;
  });
  var jE = u((ij, kE) => {
    var kG = 800,
      jG = 16,
      zG = Date.now;
    function KG(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = zG(),
          i = jG - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= kG) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    kE.exports = KG;
  });
  var KE = u((oj, zE) => {
    var YG = BE(),
      $G = jE(),
      QG = $G(YG);
    zE.exports = QG;
  });
  var $E = u((aj, YE) => {
    var ZG = qE(),
      JG = VE(),
      eV = KE();
    function tV(e) {
      return eV(JG(e, void 0, ZG), e + "");
    }
    YE.exports = tV;
  });
  var JE = u((sj, ZE) => {
    var QE = ta(),
      rV = QE && new QE();
    ZE.exports = rV;
  });
  var tm = u((uj, em) => {
    function nV() {}
    em.exports = nV;
  });
  var us = u((cj, nm) => {
    var rm = JE(),
      iV = tm(),
      oV = rm
        ? function (e) {
            return rm.get(e);
          }
        : iV;
    nm.exports = oV;
  });
  var om = u((lj, im) => {
    var aV = {};
    im.exports = aV;
  });
  var cs = u((fj, sm) => {
    var am = om(),
      sV = Object.prototype,
      uV = sV.hasOwnProperty;
    function cV(e) {
      for (
        var t = e.name + "", r = am[t], n = uV.call(am, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    sm.exports = cV;
  });
  var vi = u((dj, um) => {
    var lV = ss(),
      fV = fi(),
      dV = 4294967295;
    function hi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = dV),
        (this.__views__ = []);
    }
    hi.prototype = lV(fV.prototype);
    hi.prototype.constructor = hi;
    um.exports = hi;
  });
  var lm = u((pj, cm) => {
    function pV(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    cm.exports = pV;
  });
  var dm = u((hj, fm) => {
    var hV = vi(),
      vV = pi(),
      gV = lm();
    function yV(e) {
      if (e instanceof hV) return e.clone();
      var t = new vV(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = gV(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    fm.exports = yV;
  });
  var vm = u((vj, hm) => {
    var EV = vi(),
      pm = pi(),
      mV = fi(),
      _V = Ee(),
      TV = ct(),
      IV = dm(),
      bV = Object.prototype,
      OV = bV.hasOwnProperty;
    function gi(e) {
      if (TV(e) && !_V(e) && !(e instanceof EV)) {
        if (e instanceof pm) return e;
        if (OV.call(e, "__wrapped__")) return IV(e);
      }
      return new pm(e);
    }
    gi.prototype = mV.prototype;
    gi.prototype.constructor = gi;
    hm.exports = gi;
  });
  var ym = u((gj, gm) => {
    var xV = vi(),
      AV = us(),
      SV = cs(),
      wV = vm();
    function RV(e) {
      var t = SV(e),
        r = wV[t];
      if (typeof r != "function" || !(t in xV.prototype)) return !1;
      if (e === r) return !0;
      var n = AV(r);
      return !!n && e === n[0];
    }
    gm.exports = RV;
  });
  var Tm = u((yj, _m) => {
    var Em = pi(),
      CV = $E(),
      NV = us(),
      ls = cs(),
      LV = Ee(),
      mm = ym(),
      PV = "Expected a function",
      qV = 8,
      MV = 32,
      DV = 128,
      FV = 256;
    function GV(e) {
      return CV(function (t) {
        var r = t.length,
          n = r,
          i = Em.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(PV);
          if (i && !a && ls(o) == "wrapper") var a = new Em([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = ls(o),
            c = s == "wrapper" ? NV(o) : void 0;
          c &&
          mm(c[0]) &&
          c[1] == (DV | qV | MV | FV) &&
          !c[4].length &&
          c[9] == 1
            ? (a = a[ls(c[0])].apply(a, c[3]))
            : (a = o.length == 1 && mm(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var f = arguments,
            h = f[0];
          if (a && f.length == 1 && LV(h)) return a.plant(h).value();
          for (var p = 0, v = r ? t[p].apply(this, f) : h; ++p < r; )
            v = t[p].call(this, v);
          return v;
        };
      });
    }
    _m.exports = GV;
  });
  var bm = u((Ej, Im) => {
    var VV = Tm(),
      UV = VV();
    Im.exports = UV;
  });
  var xm = u((mj, Om) => {
    function XV(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Om.exports = XV;
  });
  var Sm = u((_j, Am) => {
    var HV = xm(),
      fs = kn();
    function WV(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = fs(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = fs(t)), (t = t === t ? t : 0)),
        HV(fs(e), t, r)
      );
    }
    Am.exports = WV;
  });
  var Dm,
    Fm,
    Gm,
    Vm,
    BV,
    kV,
    jV,
    zV,
    KV,
    YV,
    $V,
    QV,
    ZV,
    JV,
    eU,
    tU,
    rU,
    nU,
    iU,
    Um,
    Xm,
    oU,
    aU,
    sU,
    Hm,
    uU,
    cU,
    Wm,
    lU,
    ds,
    Bm,
    wm,
    Rm,
    km,
    $r,
    fU,
    nt,
    jm,
    dU,
    Pe,
    je,
    Qr,
    zm,
    ps,
    Cm,
    hs,
    pU,
    Yr,
    hU,
    vU,
    gU,
    Km,
    Nm,
    yU,
    Lm,
    EU,
    mU,
    _U,
    Pm,
    yi,
    Ei,
    qm,
    Mm,
    Ym,
    $m = se(() => {
      "use strict";
      (Dm = ee(bm())), (Fm = ee(Wn())), (Gm = ee(Sm()));
      Ne();
      vs();
      li();
      (Vm = ee(Mt())),
        ({
          MOUSE_CLICK: BV,
          MOUSE_SECOND_CLICK: kV,
          MOUSE_DOWN: jV,
          MOUSE_UP: zV,
          MOUSE_OVER: KV,
          MOUSE_OUT: YV,
          DROPDOWN_CLOSE: $V,
          DROPDOWN_OPEN: QV,
          SLIDER_ACTIVE: ZV,
          SLIDER_INACTIVE: JV,
          TAB_ACTIVE: eU,
          TAB_INACTIVE: tU,
          NAVBAR_CLOSE: rU,
          NAVBAR_OPEN: nU,
          MOUSE_MOVE: iU,
          PAGE_SCROLL_DOWN: Um,
          SCROLL_INTO_VIEW: Xm,
          SCROLL_OUT_OF_VIEW: oU,
          PAGE_SCROLL_UP: aU,
          SCROLLING_IN_VIEW: sU,
          PAGE_FINISH: Hm,
          ECOMMERCE_CART_CLOSE: uU,
          ECOMMERCE_CART_OPEN: cU,
          PAGE_START: Wm,
          PAGE_SCROLL: lU,
        } = Be),
        (ds = "COMPONENT_ACTIVE"),
        (Bm = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: wm } = Te),
        ({ getNamespacedParameterId: Rm } = Vm.IX2VanillaUtils),
        (km = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        ($r = km(({ element: e, nativeEvent: t }) => e === t.target)),
        (fU = km(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (nt = (0, Dm.default)([$r, fU])),
        (jm = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !pU[i.eventTypeId]) return i;
          }
          return null;
        }),
        (dU = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!jm(e, n);
        }),
        (Pe = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: c } = o.config,
            f = jm(e, c);
          return (
            f &&
              dr({
                store: e,
                eventId: c,
                eventTarget: r,
                eventStateKey: c + wm + n.split(wm)[1],
                actionListId: (0, Fm.default)(f, "action.config.actionListId"),
              }),
            dr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            Zr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        }),
        (je = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (Qr = { handler: je(nt, Pe) }),
        (zm = { ...Qr, types: [ds, Bm].join(" ") }),
        (ps = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (Cm = "mouseover mouseout"),
        (hs = { types: ps }),
        (pU = { PAGE_START: Wm, PAGE_FINISH: Hm }),
        (Yr = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, Gm.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (hU = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (vU = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (gU = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = Yr(),
            o = r.scrollOffsetValue,
            c = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return hU(t.getBoundingClientRect(), {
            left: 0,
            top: c,
            right: n,
            bottom: i - c,
          });
        }),
        (Km = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [ds, Bm].indexOf(n) !== -1 ? n === ds : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (Nm = (e) => (t, r) => {
          let n = { elementHovered: vU(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (yU = (e) => (t, r) => {
          let n = { ...r, elementVisible: gU(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (Lm =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = Yr(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: c, scrollOffsetUnit: f } = a,
              h = f === "PX",
              p = i - o,
              v = Number((n / p).toFixed(2));
            if (r && r.percentTop === v) return r;
            let m = (h ? c : (o * (c || 0)) / 100) / p,
              T,
              E,
              L = 0;
            r &&
              ((T = v > r.percentTop),
              (E = r.scrollingDown !== T),
              (L = E ? v : r.anchorTop));
            let x = s === Um ? v >= L + m : v <= L - m,
              w = {
                ...r,
                percentTop: v,
                inBounds: x,
                anchorTop: L,
                scrollingDown: T,
              };
            return (r && x && (E || w.inBounds !== r.inBounds) && e(t, w)) || w;
          }),
        (EU = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (mU = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (_U = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (Pm =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (yi = (e = !0) => ({
          ...zm,
          handler: je(
            e ? nt : $r,
            Km((t, r) => (r.isActive ? Qr.handler(t, r) : r))
          ),
        })),
        (Ei = (e = !0) => ({
          ...zm,
          handler: je(
            e ? nt : $r,
            Km((t, r) => (r.isActive ? r : Qr.handler(t, r)))
          ),
        })),
        (qm = {
          ...hs,
          handler: yU((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === Xm) === r
              ? (Pe(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Mm = 0.05),
        (Ym = {
          [ZV]: yi(),
          [JV]: Ei(),
          [QV]: yi(),
          [$V]: Ei(),
          [nU]: yi(!1),
          [rU]: Ei(!1),
          [eU]: yi(),
          [tU]: Ei(),
          [cU]: { types: "ecommerce-cart-open", handler: je(nt, Pe) },
          [uU]: { types: "ecommerce-cart-close", handler: je(nt, Pe) },
          [BV]: {
            types: "click",
            handler: je(
              nt,
              Pm((e, { clickCount: t }) => {
                dU(e) ? t === 1 && Pe(e) : Pe(e);
              })
            ),
          },
          [kV]: {
            types: "click",
            handler: je(
              nt,
              Pm((e, { clickCount: t }) => {
                t === 2 && Pe(e);
              })
            ),
          },
          [jV]: { ...Qr, types: "mousedown" },
          [zV]: { ...Qr, types: "mouseup" },
          [KV]: {
            types: Cm,
            handler: je(
              nt,
              Nm((e, t) => {
                t.elementHovered && Pe(e);
              })
            ),
          },
          [YV]: {
            types: Cm,
            handler: je(
              nt,
              Nm((e, t) => {
                t.elementHovered || Pe(e);
              })
            ),
          },
          [iU]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: c,
                  reverse: f,
                  restingState: h = 0,
                } = r,
                {
                  clientX: p = o.clientX,
                  clientY: v = o.clientY,
                  pageX: m = o.pageX,
                  pageY: T = o.pageY,
                } = n,
                E = s === "X_AXIS",
                L = n.type === "mouseout",
                x = h / 100,
                w = c,
                O = !1;
              switch (a) {
                case Je.VIEWPORT: {
                  x = E
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(v, window.innerHeight) / window.innerHeight;
                  break;
                }
                case Je.PAGE: {
                  let {
                    scrollLeft: M,
                    scrollTop: D,
                    scrollWidth: C,
                    scrollHeight: X,
                  } = Yr();
                  x = E ? Math.min(M + m, C) / C : Math.min(D + T, X) / X;
                  break;
                }
                case Je.ELEMENT:
                default: {
                  w = Rm(i, c);
                  let M = n.type.indexOf("mouse") === 0;
                  if (M && nt({ element: t, nativeEvent: n }) !== !0) break;
                  let D = t.getBoundingClientRect(),
                    { left: C, top: X, width: U, height: H } = D;
                  if (!M && !EU({ left: p, top: v }, D)) break;
                  (O = !0), (x = E ? (p - C) / U : (v - X) / H);
                  break;
                }
              }
              return (
                L && (x > 1 - Mm || x < Mm) && (x = Math.round(x)),
                (a !== Je.ELEMENT || O || O !== o.elementHovered) &&
                  ((x = f ? 1 - x : x), e.dispatch(lr(w, x))),
                {
                  elementHovered: O,
                  clientX: p,
                  clientY: v,
                  pageX: m,
                  pageY: T,
                }
              );
            },
          },
          [lU]: {
            types: ps,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = Yr(),
                s = i / (o - a);
              (s = n ? 1 - s : s), e.dispatch(lr(r, s));
            },
          },
          [sU]: {
            types: ps,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: c,
                  clientHeight: f,
                } = Yr(),
                {
                  basedOn: h,
                  selectedAxis: p,
                  continuousParameterGroupId: v,
                  startsEntering: m,
                  startsExiting: T,
                  addEndOffset: E,
                  addStartOffset: L,
                  addOffsetValue: x = 0,
                  endOffsetValue: w = 0,
                } = r,
                O = p === "X_AXIS";
              if (h === Je.VIEWPORT) {
                let M = O ? o / s : a / c;
                return (
                  M !== i.scrollPercent && t.dispatch(lr(v, M)),
                  { scrollPercent: M }
                );
              } else {
                let M = Rm(n, v),
                  D = e.getBoundingClientRect(),
                  C = (L ? x : 0) / 100,
                  X = (E ? w : 0) / 100;
                (C = m ? C : 1 - C), (X = T ? X : 1 - X);
                let U = D.top + Math.min(D.height * C, f),
                  B = D.top + D.height * X - U,
                  j = Math.min(f + B, c),
                  _ = Math.min(Math.max(0, f - U), j) / j;
                return (
                  _ !== i.scrollPercent && t.dispatch(lr(M, _)),
                  { scrollPercent: _ }
                );
              }
            },
          },
          [Xm]: qm,
          [oU]: qm,
          [Um]: {
            ...hs,
            handler: Lm((e, t) => {
              t.scrollingDown && Pe(e);
            }),
          },
          [aU]: {
            ...hs,
            handler: Lm((e, t) => {
              t.scrollingDown || Pe(e);
            }),
          },
          [Hm]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: je($r, mU(Pe)),
          },
          [Wm]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: je($r, _U(Pe)),
          },
        });
    });
  var p_ = {};
  Re(p_, {
    observeRequests: () => UU,
    startActionGroup: () => Zr,
    startEngine: () => Oi,
    stopActionGroup: () => dr,
    stopAllActionGroups: () => l_,
    stopEngine: () => xi,
  });
  function UU(e) {
    Dt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: WU }),
      Dt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: BU }),
      Dt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: kU }),
      Dt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: jU });
  }
  function XU(e) {
    Dt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        xi(e),
          a_({ store: e, elementApi: Se }),
          Oi({ store: e, allowEvents: !0 }),
          s_();
      },
    });
  }
  function HU(e, t) {
    let r = Dt({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function WU({ rawData: e, defer: t }, r) {
    let n = () => {
      Oi({ store: r, rawData: e, allowEvents: !0 }), s_();
    };
    t ? setTimeout(n, 0) : n();
  }
  function s_() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function BU(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: c,
        verbose: f = !0,
      } = e,
      { rawData: h } = e;
    if (n && i && h && s) {
      let p = h.actionLists[n];
      p && (h = RU({ actionList: p, actionItemId: i, rawData: h }));
    }
    if (
      (Oi({ store: t, rawData: h, allowEvents: a, testManual: c }),
      (n && r === Ce.GENERAL_START_ACTION) || gs(r))
    ) {
      dr({ store: t, actionListId: n }),
        c_({ store: t, actionListId: n, eventId: o });
      let p = Zr({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: f,
      });
      f && p && t.dispatch(fr({ actionListId: n, isPlaying: !s }));
    }
  }
  function kU({ actionListId: e }, t) {
    e ? dr({ store: t, actionListId: e }) : l_({ store: t }), xi(t);
  }
  function jU(e, t) {
    xi(t), a_({ store: t, elementApi: Se });
  }
  function Oi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(za(t)),
      i.active ||
        (e.dispatch(
          Ka({
            hasBoundaryNodes: !!document.querySelector(_i),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (ZU(e), zU(), e.getState().ixSession.hasDefinedMediaQueries && XU(e)),
        e.dispatch(Ya()),
        KU(e, n));
  }
  function zU() {
    let { documentElement: e } = document;
    e.className.indexOf(Qm) === -1 && (e.className += ` ${Qm}`);
  }
  function KU(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(ui(n, o)), t ? HU(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function xi(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(YU), PU(), e.dispatch($a());
    }
  }
  function YU({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function $U({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: c,
  }) {
    let { ixData: f, ixSession: h } = e.getState(),
      { events: p } = f,
      v = p[n],
      { eventTypeId: m } = v,
      T = {},
      E = {},
      L = [],
      { continuousActionGroups: x } = a,
      { id: w } = a;
    CU(m, i) && (w = NU(t, w));
    let O = h.hasBoundaryNodes && r ? Kr(r, _i) : null;
    x.forEach((M) => {
      let { keyframe: D, actionItems: C } = M;
      C.forEach((X) => {
        let { actionTypeId: U } = X,
          { target: H } = X.config;
        if (!H) return;
        let B = H.boundaryMode ? O : null,
          j = qU(H) + ys + U;
        if (((E[j] = QU(E[j], D, X)), !T[j])) {
          T[j] = !0;
          let { config: P } = X;
          Ti({
            config: P,
            event: v,
            eventTarget: r,
            elementRoot: B,
            elementApi: Se,
          }).forEach((_) => {
            L.push({ element: _, key: j });
          });
        }
      });
    }),
      L.forEach(({ element: M, key: D }) => {
        let C = E[D],
          X = (0, pt.default)(C, "[0].actionItems[0]", {}),
          { actionTypeId: U } = X,
          H = bi(U) ? ms(U)(M, X) : null,
          B = Es({ element: M, actionItem: X, elementApi: Se }, H);
        _s({
          store: e,
          element: M,
          eventId: n,
          actionListId: o,
          actionItem: X,
          destination: B,
          continuous: !0,
          parameterId: w,
          actionGroups: C,
          smoothing: s,
          restingValue: c,
          pluginInstance: H,
        });
      });
  }
  function QU(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function ZU(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    u_(e),
      (0, pr.default)(r, (i, o) => {
        let a = Ym[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        iX({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && eX(e);
  }
  function eX(e) {
    let t = () => {
      u_(e);
    };
    JU.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(si(window, [r, t]));
    }),
      t();
  }
  function u_(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(ts({ width: n, mediaQueries: i }));
    }
  }
  function iX({ logic: e, store: t, events: r }) {
    oX(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = tX(r, nX);
    if (!(0, e_.default)(s)) return;
    (0, pr.default)(s, (p, v) => {
      let m = r[v],
        { action: T, id: E, mediaQueries: L = o.mediaQueryKeys } = m,
        { actionListId: x } = T.config;
      MU(L, o.mediaQueryKeys) || t.dispatch(rs()),
        T.actionTypeId === Ce.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(m.config) ? m.config : [m.config]).forEach((O) => {
            let { continuousParameterGroupId: M } = O,
              D = (0, pt.default)(a, `${x}.continuousParameterGroups`, []),
              C = (0, Jm.default)(D, ({ id: H }) => H === M),
              X = (O.smoothing || 0) / 100,
              U = (O.restingState || 0) / 100;
            C &&
              p.forEach((H, B) => {
                let j = E + ys + B;
                $U({
                  store: t,
                  eventStateKey: j,
                  eventTarget: H,
                  eventId: E,
                  eventConfig: O,
                  actionListId: x,
                  parameterGroup: C,
                  smoothing: X,
                  restingValue: U,
                });
              });
          }),
        (T.actionTypeId === Ce.GENERAL_START_ACTION || gs(T.actionTypeId)) &&
          c_({ store: t, actionListId: x, eventId: E });
    });
    let c = (p) => {
        let { ixSession: v } = t.getState();
        rX(s, (m, T, E) => {
          let L = r[T],
            x = v.eventState[E],
            { action: w, mediaQueries: O = o.mediaQueryKeys } = L;
          if (!Ii(O, v.mediaQueryKey)) return;
          let M = (D = {}) => {
            let C = i(
              {
                store: t,
                element: m,
                event: L,
                eventConfig: D,
                nativeEvent: p,
                eventStateKey: E,
              },
              x
            );
            DU(C, x) || t.dispatch(Qa(E, C));
          };
          w.actionTypeId === Ce.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(L.config) ? L.config : [L.config]).forEach(M)
            : M();
        });
      },
      f = (0, i_.default)(c, VU),
      h = ({ target: p = document, types: v, throttle: m }) => {
        v.split(" ")
          .filter(Boolean)
          .forEach((T) => {
            let E = m ? f : c;
            p.addEventListener(T, E), t.dispatch(si(p, [T, E]));
          });
      };
    Array.isArray(n) ? n.forEach(h) : typeof n == "string" && h(e);
  }
  function oX(e) {
    if (!GU) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = is(o);
      t[a] ||
        ((i === Be.MOUSE_CLICK || i === Be.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function c_({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      s = a[r],
      c = o[t];
    if (c && c.useFirstGroupAsInitialState) {
      let f = (0, pt.default)(c, "actionItemGroups[0].actionItems", []),
        h = (0, pt.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!Ii(h, i.mediaQueryKey)) return;
      f.forEach((p) => {
        let { config: v, actionTypeId: m } = p,
          T =
            v?.target?.useEventTarget === !0 && v?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : v,
          E = Ti({ config: T, event: s, elementApi: Se }),
          L = bi(m);
        E.forEach((x) => {
          let w = L ? ms(m)(x, p) : null;
          _s({
            destination: Es({ element: x, actionItem: p, elementApi: Se }, w),
            immediate: !0,
            store: e,
            element: x,
            eventId: r,
            actionItem: p,
            actionListId: t,
            pluginInstance: w,
          });
        });
      });
    }
  }
  function l_({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, pr.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        Ts(r, e), i && e.dispatch(fr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function dr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? Kr(r, _i) : null;
    (0, pr.default)(o, (c) => {
      let f = (0, pt.default)(c, "actionItem.config.target.boundaryMode"),
        h = n ? c.eventStateKey === n : !0;
      if (c.actionListId === i && c.eventId === t && h) {
        if (s && f && !os(s, c.element)) return;
        Ts(c, e),
          c.verbose && e.dispatch(fr({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function Zr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: c, ixSession: f } = e.getState(),
      { events: h } = c,
      p = h[t] || {},
      { mediaQueries: v = c.mediaQueryKeys } = p,
      m = (0, pt.default)(c, `actionLists.${i}`, {}),
      { actionItemGroups: T, useFirstGroupAsInitialState: E } = m;
    if (!T || !T.length) return !1;
    o >= T.length && (0, pt.default)(p, "config.loop") && (o = 0),
      o === 0 && E && o++;
    let x =
        (o === 0 || (o === 1 && E)) && gs(p.action?.actionTypeId)
          ? p.config.delay
          : void 0,
      w = (0, pt.default)(T, [o, "actionItems"], []);
    if (!w.length || !Ii(v, f.mediaQueryKey)) return !1;
    let O = f.hasBoundaryNodes && r ? Kr(r, _i) : null,
      M = AU(w),
      D = !1;
    return (
      w.forEach((C, X) => {
        let { config: U, actionTypeId: H } = C,
          B = bi(H),
          { target: j } = U;
        if (!j) return;
        let P = j.boundaryMode ? O : null;
        Ti({
          config: U,
          event: p,
          eventTarget: r,
          elementRoot: P,
          elementApi: Se,
        }).forEach((N, V) => {
          let G = B ? ms(H)(N, C) : null,
            z = B ? FU(H)(N, C) : null;
          D = !0;
          let K = M === X && V === 0,
            te = SU({ element: N, actionItem: C }),
            Ie = Es({ element: N, actionItem: C, elementApi: Se }, G);
          _s({
            store: e,
            element: N,
            actionItem: C,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: K,
            computedStyle: te,
            destination: Ie,
            immediate: a,
            verbose: s,
            pluginInstance: G,
            pluginDuration: z,
            instanceDelay: x,
          });
        });
      }),
      D
    );
  }
  function _s(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: c,
        restingValue: f,
        eventId: h,
      } = n,
      p = !c,
      v = OU(),
      { ixElements: m, ixSession: T, ixData: E } = t.getState(),
      L = bU(m, i),
      { refState: x } = m[L] || {},
      w = as(i),
      O = T.reducedMotion && Ho[o.actionTypeId],
      M;
    if (O && c)
      switch (E.events[h]?.eventTypeId) {
        case Be.MOUSE_MOVE:
        case Be.MOUSE_MOVE_IN_VIEWPORT:
          M = f;
          break;
        default:
          M = 0.5;
          break;
      }
    let D = wU(i, x, r, o, Se, s);
    if (
      (t.dispatch(
        Za({
          instanceId: v,
          elementId: L,
          origin: D,
          refType: w,
          skipMotion: O,
          skipToValue: M,
          ...n,
        })
      ),
      f_(document.body, "ix2-animation-started", v),
      a)
    ) {
      aX(t, v);
      return;
    }
    Dt({ store: t, select: ({ ixInstances: C }) => C[v], onChange: d_ }),
      p && t.dispatch(ci(v, T.tick));
  }
  function Ts(e, t) {
    f_(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === o_ && LU(o, n, Se), t.dispatch(Ja(e.id));
  }
  function f_(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function aX(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(ci(t, 0)), e.dispatch(ui(performance.now(), r));
    let { ixInstances: n } = e.getState();
    d_(n[t], e);
  }
  function d_(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: c,
        current: f,
        groupIndex: h,
        eventId: p,
        eventTarget: v,
        eventStateKey: m,
        actionListId: T,
        isCarrier: E,
        styleProp: L,
        verbose: x,
        pluginInstance: w,
      } = e,
      { ixData: O, ixSession: M } = t.getState(),
      { events: D } = O,
      C = D[p] || {},
      { mediaQueries: X = O.mediaQueryKeys } = C;
    if (Ii(X, M.mediaQueryKey) && (n || r || i)) {
      if (f || (c === IU && i)) {
        t.dispatch(es(o, s, f, a));
        let { ixElements: U } = t.getState(),
          { ref: H, refType: B, refState: j } = U[o] || {},
          P = j && j[s];
        (B === o_ || bi(s)) && xU(H, j, P, p, a, L, Se, c, w);
      }
      if (i) {
        if (E) {
          let U = Zr({
            store: t,
            eventId: p,
            eventTarget: v,
            eventStateKey: m,
            actionListId: T,
            groupIndex: h + 1,
            verbose: x,
          });
          x && !U && t.dispatch(fr({ actionListId: T, isPlaying: !1 }));
        }
        Ts(e, t);
      }
    }
  }
  var Jm,
    pt,
    e_,
    t_,
    r_,
    n_,
    pr,
    i_,
    mi,
    TU,
    gs,
    ys,
    _i,
    o_,
    IU,
    Qm,
    Ti,
    bU,
    Es,
    Dt,
    OU,
    xU,
    a_,
    AU,
    SU,
    wU,
    RU,
    CU,
    NU,
    Ii,
    LU,
    PU,
    qU,
    MU,
    DU,
    bi,
    ms,
    FU,
    Zm,
    GU,
    VU,
    JU,
    tX,
    rX,
    nX,
    vs = se(() => {
      "use strict";
      (Jm = ee(ya())),
        (pt = ee(Wn())),
        (e_ = ee(Ay())),
        (t_ = ee(Zy())),
        (r_ = ee(eE())),
        (n_ = ee(rE())),
        (pr = ee(uE())),
        (i_ = ee(vE()));
      Ne();
      mi = ee(Mt());
      li();
      TE();
      $m();
      (TU = Object.keys(Tn)),
        (gs = (e) => TU.includes(e)),
        ({
          COLON_DELIMITER: ys,
          BOUNDARY_SELECTOR: _i,
          HTML_ELEMENT: o_,
          RENDER_GENERAL: IU,
          W_MOD_IX: Qm,
        } = Te),
        ({
          getAffectedElements: Ti,
          getElementId: bU,
          getDestinationValues: Es,
          observeStore: Dt,
          getInstanceId: OU,
          renderHTMLElement: xU,
          clearAllStyles: a_,
          getMaxDurationItemIndex: AU,
          getComputedStyle: SU,
          getInstanceOrigin: wU,
          reduceListToGroup: RU,
          shouldNamespaceEventParameter: CU,
          getNamespacedParameterId: NU,
          shouldAllowMediaQuery: Ii,
          cleanupHTMLElement: LU,
          clearObjectCache: PU,
          stringifyTarget: qU,
          mediaQueriesEqual: MU,
          shallowEqual: DU,
        } = mi.IX2VanillaUtils),
        ({
          isPluginType: bi,
          createPluginInstance: ms,
          getPluginDuration: FU,
        } = mi.IX2VanillaPlugins),
        (Zm = navigator.userAgent),
        (GU = Zm.match(/iPad/i) || Zm.match(/iPhone/)),
        (VU = 12);
      JU = ["resize", "orientationchange"];
      (tX = (e, t) => (0, t_.default)((0, n_.default)(e, t), r_.default)),
        (rX = (e, t) => {
          (0, pr.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + ys + o;
              t(i, n, a);
            });
          });
        }),
        (nX = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Ti({ config: t, elementApi: Se });
        });
    });
  var v_ = u((ht) => {
    "use strict";
    var sX = un().default,
      uX = Qs().default;
    Object.defineProperty(ht, "__esModule", { value: !0 });
    ht.actions = void 0;
    ht.destroy = h_;
    ht.init = pX;
    ht.setEnv = dX;
    ht.store = void 0;
    Dl();
    var cX = Vo(),
      lX = uX((sy(), Ye(ay))),
      Is = (vs(), Ye(p_)),
      fX = sX((li(), Ye(yE)));
    ht.actions = fX;
    var bs = (ht.store = (0, cX.createStore)(lX.default));
    function dX(e) {
      e() && (0, Is.observeRequests)(bs);
    }
    function pX(e) {
      h_(), (0, Is.startEngine)({ store: bs, rawData: e, allowEvents: !0 });
    }
    function h_() {
      (0, Is.stopEngine)(bs);
    }
  });
  var m_ = u((Rj, E_) => {
    "use strict";
    var g_ = st(),
      y_ = v_();
    y_.setEnv(g_.env);
    g_.define(
      "ix2",
      (E_.exports = function () {
        return y_;
      })
    );
  });
  var T_ = u((Cj, __) => {
    "use strict";
    var hr = st();
    hr.define(
      "links",
      (__.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = hr.env(),
          a = window.location,
          s = document.createElement("a"),
          c = "w--current",
          f = /index\.(html|php)$/,
          h = /\/$/,
          p,
          v;
        r.ready = r.design = r.preview = m;
        function m() {
          (i = o && hr.env("design")),
            (v = hr.env("slug") || a.pathname || ""),
            hr.scroll.off(E),
            (p = []);
          for (var x = document.links, w = 0; w < x.length; ++w) T(x[w]);
          p.length && (hr.scroll.on(E), E());
        }
        function T(x) {
          if (!x.getAttribute("hreflang")) {
            var w =
              (i && x.getAttribute("href-disabled")) || x.getAttribute("href");
            if (((s.href = w), !(w.indexOf(":") >= 0))) {
              var O = e(x);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var M = e(s.hash);
                M.length && p.push({ link: O, sec: M, active: !1 });
                return;
              }
              if (!(w === "#" || w === "")) {
                var D =
                  s.href === a.href || w === v || (f.test(w) && h.test(v));
                L(O, c, D);
              }
            }
          }
        }
        function E() {
          var x = n.scrollTop(),
            w = n.height();
          t.each(p, function (O) {
            if (!O.link.attr("hreflang")) {
              var M = O.link,
                D = O.sec,
                C = D.offset().top,
                X = D.outerHeight(),
                U = w * 0.5,
                H = D.is(":visible") && C + X - U >= x && C + U <= x + w;
              O.active !== H && ((O.active = H), L(M, c, H));
            }
          });
        }
        function L(x, w, O) {
          var M = x.hasClass(w);
          (O && M) || (!O && !M) || (O ? x.addClass(w) : x.removeClass(w));
        }
        return r;
      })
    );
  });
  var b_ = u((Nj, I_) => {
    "use strict";
    var Ai = st();
    Ai.define(
      "scroll",
      (I_.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = T() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (P) {
              window.setTimeout(P, 15);
            },
          c = Ai.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            c +
            " > .header, " +
            c +
            " > .w-nav:not([data-no-scroll])",
          h = 'a[href="#"]',
          p = 'a[href*="#"]:not(.w-tab-link):not(' + h + ")",
          v = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          m = document.createElement("style");
        m.appendChild(document.createTextNode(v));
        function T() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var E = /^#[a-zA-Z0-9][\w:.-]*$/;
        function L(P) {
          return E.test(P.hash) && P.host + P.pathname === r.host + r.pathname;
        }
        let x =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function w() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            x.matches
          );
        }
        function O(P, _) {
          var N;
          switch (_) {
            case "add":
              (N = P.attr("tabindex")),
                N
                  ? P.attr("data-wf-tabindex-swap", N)
                  : P.attr("tabindex", "-1");
              break;
            case "remove":
              (N = P.attr("data-wf-tabindex-swap")),
                N
                  ? (P.attr("tabindex", N),
                    P.removeAttr("data-wf-tabindex-swap"))
                  : P.removeAttr("tabindex");
              break;
          }
          P.toggleClass("wf-force-outline-none", _ === "add");
        }
        function M(P) {
          var _ = P.currentTarget;
          if (
            !(
              Ai.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(_.className))
            )
          ) {
            var N = L(_) ? _.hash : "";
            if (N !== "") {
              var V = e(N);
              V.length &&
                (P && (P.preventDefault(), P.stopPropagation()),
                D(N, P),
                window.setTimeout(
                  function () {
                    C(V, function () {
                      O(V, "add"),
                        V.get(0).focus({ preventScroll: !0 }),
                        O(V, "remove");
                    });
                  },
                  P ? 0 : 300
                ));
            }
          }
        }
        function D(P) {
          if (
            r.hash !== P &&
            n &&
            n.pushState &&
            !(Ai.env.chrome && r.protocol === "file:")
          ) {
            var _ = n.state && n.state.hash;
            _ !== P && n.pushState({ hash: P }, "", P);
          }
        }
        function C(P, _) {
          var N = i.scrollTop(),
            V = X(P);
          if (N !== V) {
            var G = U(P, N, V),
              z = Date.now(),
              K = function () {
                var te = Date.now() - z;
                window.scroll(0, H(N, V, te, G)),
                  te <= G ? s(K) : typeof _ == "function" && _();
              };
            s(K);
          }
        }
        function X(P) {
          var _ = e(f),
            N = _.css("position") === "fixed" ? _.outerHeight() : 0,
            V = P.offset().top - N;
          if (P.data("scroll") === "mid") {
            var G = i.height() - N,
              z = P.outerHeight();
            z < G && (V -= Math.round((G - z) / 2));
          }
          return V;
        }
        function U(P, _, N) {
          if (w()) return 0;
          var V = 1;
          return (
            a.add(P).each(function (G, z) {
              var K = parseFloat(z.getAttribute("data-scroll-time"));
              !isNaN(K) && K >= 0 && (V = K);
            }),
            (472.143 * Math.log(Math.abs(_ - N) + 125) - 2e3) * V
          );
        }
        function H(P, _, N, V) {
          return N > V ? _ : P + (_ - P) * B(N / V);
        }
        function B(P) {
          return P < 0.5
            ? 4 * P * P * P
            : (P - 1) * (2 * P - 2) * (2 * P - 2) + 1;
        }
        function j() {
          var { WF_CLICK_EMPTY: P, WF_CLICK_SCROLL: _ } = t;
          o.on(_, p, M),
            o.on(P, h, function (N) {
              N.preventDefault();
            }),
            document.head.insertBefore(m, document.head.firstChild);
        }
        return { ready: j };
      })
    );
  });
  var x_ = u((Lj, O_) => {
    "use strict";
    var hX = st();
    hX.define(
      "touch",
      (O_.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            c = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            h;
          o.addEventListener("touchstart", p, !1),
            o.addEventListener("touchmove", v, !1),
            o.addEventListener("touchend", m, !1),
            o.addEventListener("touchcancel", T, !1),
            o.addEventListener("mousedown", p, !1),
            o.addEventListener("mousemove", v, !1),
            o.addEventListener("mouseup", m, !1),
            o.addEventListener("mouseout", T, !1);
          function p(L) {
            var x = L.touches;
            (x && x.length > 1) ||
              ((a = !0),
              x ? ((s = !0), (f = x[0].clientX)) : (f = L.clientX),
              (h = f));
          }
          function v(L) {
            if (a) {
              if (s && L.type === "mousemove") {
                L.preventDefault(), L.stopPropagation();
                return;
              }
              var x = L.touches,
                w = x ? x[0].clientX : L.clientX,
                O = w - h;
              (h = w),
                Math.abs(O) > c &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", L, { direction: O > 0 ? "right" : "left" }), T());
            }
          }
          function m(L) {
            if (a && ((a = !1), s && L.type === "mouseup")) {
              L.preventDefault(), L.stopPropagation(), (s = !1);
              return;
            }
          }
          function T() {
            a = !1;
          }
          function E() {
            o.removeEventListener("touchstart", p, !1),
              o.removeEventListener("touchmove", v, !1),
              o.removeEventListener("touchend", m, !1),
              o.removeEventListener("touchcancel", T, !1),
              o.removeEventListener("mousedown", p, !1),
              o.removeEventListener("mousemove", v, !1),
              o.removeEventListener("mouseup", m, !1),
              o.removeEventListener("mouseout", T, !1),
              (o = null);
          }
          this.destroy = E;
        }
        function i(o, a, s) {
          var c = e.Event(o, { originalEvent: a });
          e(a.target).trigger(c, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var w_ = u((Pj, S_) => {
    "use strict";
    var Ot = st(),
      vX = qi(),
      it = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      A_ =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    Ot.define(
      "slider",
      (S_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(document),
          o,
          a,
          s = Ot.env(),
          c = ".w-slider",
          f = '<div class="w-slider-dot" data-wf-ignore />',
          h =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          p = "w-slider-force-show",
          v = vX.triggers,
          m,
          T = !1;
        (r.ready = function () {
          (a = Ot.env("design")), E();
        }),
          (r.design = function () {
            (a = !0), setTimeout(E, 1e3);
          }),
          (r.preview = function () {
            (a = !1), E();
          }),
          (r.redraw = function () {
            (T = !0), E(), (T = !1);
          }),
          (r.destroy = L);
        function E() {
          (o = i.find(c)), o.length && (o.each(O), !m && (L(), x()));
        }
        function L() {
          Ot.resize.off(w), Ot.redraw.off(r.redraw);
        }
        function x() {
          Ot.resize.on(w), Ot.redraw.on(r.redraw);
        }
        function w() {
          o.filter(":visible").each(G);
        }
        function O(d, q) {
          var S = e(q),
            b = e.data(q, c);
          b ||
            (b = e.data(q, c, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: S,
              config: {},
            })),
            (b.mask = S.children(".w-slider-mask")),
            (b.left = S.children(".w-slider-arrow-left")),
            (b.right = S.children(".w-slider-arrow-right")),
            (b.nav = S.children(".w-slider-nav")),
            (b.slides = b.mask.children(".w-slide")),
            b.slides.each(v.reset),
            T && (b.maskWidth = 0),
            S.attr("role") === void 0 && S.attr("role", "region"),
            S.attr("aria-label") === void 0 && S.attr("aria-label", "carousel");
          var Q = b.mask.attr("id");
          if (
            (Q || ((Q = "w-slider-mask-" + d), b.mask.attr("id", Q)),
            !a && !b.ariaLiveLabel && (b.ariaLiveLabel = e(h).appendTo(b.mask)),
            b.left.attr("role", "button"),
            b.left.attr("tabindex", "0"),
            b.left.attr("aria-controls", Q),
            b.left.attr("aria-label") === void 0 &&
              b.left.attr("aria-label", "previous slide"),
            b.right.attr("role", "button"),
            b.right.attr("tabindex", "0"),
            b.right.attr("aria-controls", Q),
            b.right.attr("aria-label") === void 0 &&
              b.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            b.left.hide(), b.right.hide(), b.nav.hide(), (m = !0);
            return;
          }
          b.el.off(c),
            b.left.off(c),
            b.right.off(c),
            b.nav.off(c),
            M(b),
            a
              ? (b.el.on("setting" + c, _(b)), P(b), (b.hasTimer = !1))
              : (b.el.on("swipe" + c, _(b)),
                b.left.on("click" + c, U(b)),
                b.right.on("click" + c, H(b)),
                b.left.on("keydown" + c, X(b, U)),
                b.right.on("keydown" + c, X(b, H)),
                b.nav.on("keydown" + c, "> div", _(b)),
                b.config.autoplay &&
                  !b.hasTimer &&
                  ((b.hasTimer = !0), (b.timerCount = 1), j(b)),
                b.el.on("mouseenter" + c, C(b, !0, "mouse")),
                b.el.on("focusin" + c, C(b, !0, "keyboard")),
                b.el.on("mouseleave" + c, C(b, !1, "mouse")),
                b.el.on("focusout" + c, C(b, !1, "keyboard"))),
            b.nav.on("click" + c, "> div", _(b)),
            s ||
              b.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var re = S.filter(":hidden");
          re.addClass(p);
          var ye = S.parents(":hidden");
          ye.addClass(p), T || G(d, q), re.removeClass(p), ye.removeClass(p);
        }
        function M(d) {
          var q = {};
          (q.crossOver = 0),
            (q.animation = d.el.attr("data-animation") || "slide"),
            q.animation === "outin" &&
              ((q.animation = "cross"), (q.crossOver = 0.5)),
            (q.easing = d.el.attr("data-easing") || "ease");
          var S = d.el.attr("data-duration");
          if (
            ((q.duration = S != null ? parseInt(S, 10) : 500),
            D(d.el.attr("data-infinite")) && (q.infinite = !0),
            D(d.el.attr("data-disable-swipe")) && (q.disableSwipe = !0),
            D(d.el.attr("data-hide-arrows"))
              ? (q.hideArrows = !0)
              : d.config.hideArrows && (d.left.show(), d.right.show()),
            D(d.el.attr("data-autoplay")))
          ) {
            (q.autoplay = !0),
              (q.delay = parseInt(d.el.attr("data-delay"), 10) || 2e3),
              (q.timerMax = parseInt(d.el.attr("data-autoplay-limit"), 10));
            var b = "mousedown" + c + " touchstart" + c;
            a ||
              d.el.off(b).one(b, function () {
                P(d);
              });
          }
          var Q = d.right.width();
          (q.edge = Q ? Q + 40 : 100), (d.config = q);
        }
        function D(d) {
          return d === "1" || d === "true";
        }
        function C(d, q, S) {
          return function (b) {
            if (q) d.hasFocus[S] = q;
            else if (
              e.contains(d.el.get(0), b.relatedTarget) ||
              ((d.hasFocus[S] = q),
              (d.hasFocus.mouse && S === "keyboard") ||
                (d.hasFocus.keyboard && S === "mouse"))
            )
              return;
            q
              ? (d.ariaLiveLabel.attr("aria-live", "polite"),
                d.hasTimer && P(d))
              : (d.ariaLiveLabel.attr("aria-live", "off"), d.hasTimer && j(d));
          };
        }
        function X(d, q) {
          return function (S) {
            switch (S.keyCode) {
              case it.SPACE:
              case it.ENTER:
                return q(d)(), S.preventDefault(), S.stopPropagation();
            }
          };
        }
        function U(d) {
          return function () {
            V(d, { index: d.index - 1, vector: -1 });
          };
        }
        function H(d) {
          return function () {
            V(d, { index: d.index + 1, vector: 1 });
          };
        }
        function B(d, q) {
          var S = null;
          q === d.slides.length && (E(), z(d)),
            t.each(d.anchors, function (b, Q) {
              e(b.els).each(function (re, ye) {
                e(ye).index() === q && (S = Q);
              });
            }),
            S != null && V(d, { index: S, immediate: !0 });
        }
        function j(d) {
          P(d);
          var q = d.config,
            S = q.timerMax;
          (S && d.timerCount++ > S) ||
            (d.timerId = window.setTimeout(function () {
              d.timerId == null || a || (H(d)(), j(d));
            }, q.delay));
        }
        function P(d) {
          window.clearTimeout(d.timerId), (d.timerId = null);
        }
        function _(d) {
          return function (q, S) {
            S = S || {};
            var b = d.config;
            if (a && q.type === "setting") {
              if (S.select === "prev") return U(d)();
              if (S.select === "next") return H(d)();
              if ((M(d), z(d), S.select == null)) return;
              B(d, S.select);
              return;
            }
            if (q.type === "swipe")
              return b.disableSwipe || Ot.env("editor")
                ? void 0
                : S.direction === "left"
                ? H(d)()
                : S.direction === "right"
                ? U(d)()
                : void 0;
            if (d.nav.has(q.target).length) {
              var Q = e(q.target).index();
              if (
                (q.type === "click" && V(d, { index: Q }), q.type === "keydown")
              )
                switch (q.keyCode) {
                  case it.ENTER:
                  case it.SPACE: {
                    V(d, { index: Q }), q.preventDefault();
                    break;
                  }
                  case it.ARROW_LEFT:
                  case it.ARROW_UP: {
                    N(d.nav, Math.max(Q - 1, 0)), q.preventDefault();
                    break;
                  }
                  case it.ARROW_RIGHT:
                  case it.ARROW_DOWN: {
                    N(d.nav, Math.min(Q + 1, d.pages)), q.preventDefault();
                    break;
                  }
                  case it.HOME: {
                    N(d.nav, 0), q.preventDefault();
                    break;
                  }
                  case it.END: {
                    N(d.nav, d.pages), q.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function N(d, q) {
          var S = d.children().eq(q).focus();
          d.children().not(S);
        }
        function V(d, q) {
          q = q || {};
          var S = d.config,
            b = d.anchors;
          d.previous = d.index;
          var Q = q.index,
            re = {};
          Q < 0
            ? ((Q = b.length - 1),
              S.infinite &&
                ((re.x = -d.endX), (re.from = 0), (re.to = b[0].width)))
            : Q >= b.length &&
              ((Q = 0),
              S.infinite &&
                ((re.x = b[b.length - 1].width),
                (re.from = -b[b.length - 1].x),
                (re.to = re.from - re.x))),
            (d.index = Q);
          var ye = d.nav
            .children()
            .eq(Q)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          d.nav
            .children()
            .not(ye)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            S.hideArrows &&
              (d.index === b.length - 1 ? d.right.hide() : d.right.show(),
              d.index === 0 ? d.left.hide() : d.left.show());
          var ze = d.offsetX || 0,
            qe = (d.offsetX = -b[d.index].x),
            ue = { x: qe, opacity: 1, visibility: "" },
            de = e(b[d.index].els),
            ot = e(b[d.previous] && b[d.previous].els),
            at = d.slides.not(de),
            vt = S.animation,
            Me = S.easing,
            xt = Math.round(S.duration),
            Jr = q.vector || (d.index > d.previous ? 1 : -1),
            l = "opacity " + xt + "ms " + Me,
            g = "transform " + xt + "ms " + Me;
          if (
            (de.find(A_).removeAttr("tabindex"),
            de.removeAttr("aria-hidden"),
            de.find("*").removeAttr("aria-hidden"),
            at.find(A_).attr("tabindex", "-1"),
            at.attr("aria-hidden", "true"),
            at.find("*").attr("aria-hidden", "true"),
            a || (de.each(v.intro), at.each(v.outro)),
            q.immediate && !T)
          ) {
            n(de).set(ue), R();
            return;
          }
          if (d.index === d.previous) return;
          if (
            (a || d.ariaLiveLabel.text(`Slide ${Q + 1} of ${b.length}.`),
            vt === "cross")
          ) {
            var y = Math.round(xt - xt * S.crossOver),
              I = Math.round(xt - y);
            (l = "opacity " + y + "ms " + Me),
              n(ot).set({ visibility: "" }).add(l).start({ opacity: 0 }),
              n(de)
                .set({ visibility: "", x: qe, opacity: 0, zIndex: d.depth++ })
                .add(l)
                .wait(I)
                .then({ opacity: 1 })
                .then(R);
            return;
          }
          if (vt === "fade") {
            n(ot).set({ visibility: "" }).stop(),
              n(de)
                .set({ visibility: "", x: qe, opacity: 0, zIndex: d.depth++ })
                .add(l)
                .start({ opacity: 1 })
                .then(R);
            return;
          }
          if (vt === "over") {
            (ue = { x: d.endX }),
              n(ot).set({ visibility: "" }).stop(),
              n(de)
                .set({
                  visibility: "",
                  zIndex: d.depth++,
                  x: qe + b[d.index].width * Jr,
                })
                .add(g)
                .start({ x: qe })
                .then(R);
            return;
          }
          S.infinite && re.x
            ? (n(d.slides.not(ot))
                .set({ visibility: "", x: re.x })
                .add(g)
                .start({ x: qe }),
              n(ot)
                .set({ visibility: "", x: re.from })
                .add(g)
                .start({ x: re.to }),
              (d.shifted = ot))
            : (S.infinite &&
                d.shifted &&
                (n(d.shifted).set({ visibility: "", x: ze }),
                (d.shifted = null)),
              n(d.slides).set({ visibility: "" }).add(g).start({ x: qe }));
          function R() {
            (de = e(b[d.index].els)),
              (at = d.slides.not(de)),
              vt !== "slide" && (ue.visibility = "hidden"),
              n(at).set(ue);
          }
        }
        function G(d, q) {
          var S = e.data(q, c);
          if (S) {
            if (te(S)) return z(S);
            a && Ie(S) && z(S);
          }
        }
        function z(d) {
          var q = 1,
            S = 0,
            b = 0,
            Q = 0,
            re = d.maskWidth,
            ye = re - d.config.edge;
          ye < 0 && (ye = 0),
            (d.anchors = [{ els: [], x: 0, width: 0 }]),
            d.slides.each(function (qe, ue) {
              b - S > ye &&
                (q++,
                (S += re),
                (d.anchors[q - 1] = { els: [], x: b, width: 0 })),
                (Q = e(ue).outerWidth(!0)),
                (b += Q),
                (d.anchors[q - 1].width += Q),
                d.anchors[q - 1].els.push(ue);
              var de = qe + 1 + " of " + d.slides.length;
              e(ue).attr("aria-label", de), e(ue).attr("role", "group");
            }),
            (d.endX = b),
            a && (d.pages = null),
            d.nav.length && d.pages !== q && ((d.pages = q), K(d));
          var ze = d.index;
          ze >= q && (ze = q - 1), V(d, { immediate: !0, index: ze });
        }
        function K(d) {
          var q = [],
            S,
            b = d.el.attr("data-nav-spacing");
          b && (b = parseFloat(b) + "px");
          for (var Q = 0, re = d.pages; Q < re; Q++)
            (S = e(f)),
              S.attr("aria-label", "Show slide " + (Q + 1) + " of " + re)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              d.nav.hasClass("w-num") && S.text(Q + 1),
              b != null && S.css({ "margin-left": b, "margin-right": b }),
              q.push(S);
          d.nav.empty().append(q);
        }
        function te(d) {
          var q = d.mask.width();
          return d.maskWidth !== q ? ((d.maskWidth = q), !0) : !1;
        }
        function Ie(d) {
          var q = 0;
          return (
            d.slides.each(function (S, b) {
              q += e(b).outerWidth(!0);
            }),
            d.slidesWidth !== q ? ((d.slidesWidth = q), !0) : !1
          );
        }
        return r;
      })
    );
  });
  Fs();
  Vs();
  Hs();
  qi();
  m_();
  T_();
  b_();
  x_();
  w_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "657d7e14544614f059e935f6|5e740722-1eaf-8801-cf73-fb901f349ddc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|5e740722-1eaf-8801-cf73-fb901f349ddc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-p",
          smoothing: 50,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: true,
          endOffsetValue: 51,
        },
      ],
      createdOn: 1697988793931,
    },
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-3", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|d9d7172f-531e-13ef-192d-90ca192c3b68",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|d9d7172f-531e-13ef-192d-90ca192c3b68",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-3-p",
          smoothing: 65,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1699686125698,
    },
    "e-4": {
      id: "e-4",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-5", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|dc3f14e9-11fa-59c1-ac09-8cf288c28a62",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|dc3f14e9-11fa-59c1-ac09-8cf288c28a62",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-5-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1703005243178,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-6",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1703093326112,
    },
    "e-18": {
      id: "e-18",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-6", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f7|72b7e310-06d4-5798-c26a-16aee9420a24",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f7|72b7e310-06d4-5798-c26a-16aee9420a24",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-6-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: true,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1703328615769,
    },
    "e-26": {
      id: "e-26",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-6", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".timeline_item",
        originalId:
          "657d7e14544614f059e935f7|72b7e310-06d4-5798-c26a-16aee9420adb",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".timeline_item",
          originalId:
            "657d7e14544614f059e935f7|72b7e310-06d4-5798-c26a-16aee9420adb",
          appliesTo: "CLASS",
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-6-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: true,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1703328615769,
    },
    "e-27": {
      id: "e-27",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-6", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f7|0241838f-9c93-7d7f-1be7-11d15f906276",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f7|0241838f-9c93-7d7f-1be7-11d15f906276",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-6-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: true,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1703330538645,
    },
    "e-28": {
      id: "e-28",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-6", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f7|a8c747bc-9ea9-fd54-8ab2-8b1bfbe6263a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f7|a8c747bc-9ea9-fd54-8ab2-8b1bfbe6263a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-6-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: true,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1703330655914,
    },
    "e-29": {
      id: "e-29",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-6", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f7|04633273-1eeb-28c8-0d6c-4afbf56f8b53",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f7|04633273-1eeb-28c8-0d6c-4afbf56f8b53",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-6-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: true,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1703330656117,
    },
    "e-30": {
      id: "e-30",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-6", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f7|86284550-98a9-b0c1-fc08-3c3835287a52",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f7|86284550-98a9-b0c1-fc08-3c3835287a52",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-6-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: true,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1703330656305,
    },
    "e-31": {
      id: "e-31",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-6", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f7|2e70da73-b35f-3433-0cac-3a627fb2a4b5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f7|2e70da73-b35f-3433-0cac-3a627fb2a4b5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-6-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: true,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1703330838759,
    },
    "e-32": {
      id: "e-32",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-10", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|779d8a35-78a6-67ee-9675-32f43d4af2d3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|779d8a35-78a6-67ee-9675-32f43d4af2d3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-10-p",
          smoothing: 91,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1662124256854,
    },
    "e-33": {
      id: "e-33",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-6", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|d77cb4b6-f0dc-1a3e-7bd2-3eedf527c5fe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|d77cb4b6-f0dc-1a3e-7bd2-3eedf527c5fe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-6-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: true,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1703422327722,
    },
    "e-34": {
      id: "e-34",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-6", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|d77cb4b6-f0dc-1a3e-7bd2-3eedf527c610",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|d77cb4b6-f0dc-1a3e-7bd2-3eedf527c610",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-6-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: true,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1703422327722,
    },
    "e-35": {
      id: "e-35",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-6", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|d77cb4b6-f0dc-1a3e-7bd2-3eedf527c621",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|d77cb4b6-f0dc-1a3e-7bd2-3eedf527c621",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-6-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: true,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1703422327722,
    },
    "e-36": {
      id: "e-36",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-6", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|d77cb4b6-f0dc-1a3e-7bd2-3eedf527c636",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|d77cb4b6-f0dc-1a3e-7bd2-3eedf527c636",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-6-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: true,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1703422327722,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-6", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|d77cb4b6-f0dc-1a3e-7bd2-3eedf527c642",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|d77cb4b6-f0dc-1a3e-7bd2-3eedf527c642",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-6-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: true,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1703422327722,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-6", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|d77cb4b6-f0dc-1a3e-7bd2-3eedf527c654",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|d77cb4b6-f0dc-1a3e-7bd2-3eedf527c654",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-6-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: true,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1703422327722,
    },
    "e-39": {
      id: "e-39",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-40",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|94fae446-66e6-4288-0892-ce8dae6d0519",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|94fae446-66e6-4288-0892-ce8dae6d0519",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1703611327786,
    },
    "e-41": {
      id: "e-41",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-42",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|326ba68b-9935-aad7-15c3-496fc27e9956",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|326ba68b-9935-aad7-15c3-496fc27e9956",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1703611534819,
    },
    "e-43": {
      id: "e-43",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-44",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|5992bcbf-4e9d-4baf-a4c8-4bc55cc1a04c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|5992bcbf-4e9d-4baf-a4c8-4bc55cc1a04c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1703611812451,
    },
    "e-45": {
      id: "e-45",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-13", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|79039146-10df-8461-92ee-e43165915591",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|79039146-10df-8461-92ee-e43165915591",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-13-p",
          smoothing: 67,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 69,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1686206541856,
    },
    "e-46": {
      id: "e-46",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-47",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|176b023f-6d95-2913-7777-7a440316312a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|176b023f-6d95-2913-7777-7a440316312a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1703872761429,
    },
    "e-47": {
      id: "e-47",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-46",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|176b023f-6d95-2913-7777-7a440316312a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|176b023f-6d95-2913-7777-7a440316312a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1703872761429,
    },
    "e-48": {
      id: "e-48",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-49",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".project1_uc",
        originalId:
          "657d7e14544614f059e935f6|a72dbadf-eaaa-fade-3a32-81856c6db838",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".project1_uc",
          originalId:
            "657d7e14544614f059e935f6|a72dbadf-eaaa-fade-3a32-81856c6db838",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1703881232795,
    },
    "e-49": {
      id: "e-49",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-48",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".project1_uc",
        originalId:
          "657d7e14544614f059e935f6|a72dbadf-eaaa-fade-3a32-81856c6db838",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".project1_uc",
          originalId:
            "657d7e14544614f059e935f6|a72dbadf-eaaa-fade-3a32-81856c6db838",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1703881232795,
    },
    "e-50": {
      id: "e-50",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-51",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|326ba68b-9935-aad7-15c3-496fc27e9956",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|326ba68b-9935-aad7-15c3-496fc27e9956",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1703881788040,
    },
    "e-51": {
      id: "e-51",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-50",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|326ba68b-9935-aad7-15c3-496fc27e9956",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|326ba68b-9935-aad7-15c3-496fc27e9956",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1703881788041,
    },
    "e-52": {
      id: "e-52",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-53",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|51de121a-0d82-6ed0-f33e-ce19c2356270",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|51de121a-0d82-6ed0-f33e-ce19c2356270",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1703936842799,
    },
    "e-54": {
      id: "e-54",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-55",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|b13c1146-ea06-0b41-b44d-01f566e93879",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|b13c1146-ea06-0b41-b44d-01f566e93879",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1703937313888,
    },
    "e-55": {
      id: "e-55",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-54",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|b13c1146-ea06-0b41-b44d-01f566e93879",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|b13c1146-ea06-0b41-b44d-01f566e93879",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1703937313889,
    },
    "e-56": {
      id: "e-56",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-22", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|cb2cbd24-bd97-ee35-a684-850a9cbde1f2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|cb2cbd24-bd97-ee35-a684-850a9cbde1f2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-22-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1704111681490,
    },
    "e-57": {
      id: "e-57",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-58",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|40582992-2109-c009-943e-f2e1369c1824",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|40582992-2109-c009-943e-f2e1369c1824",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704117567269,
    },
    "e-59": {
      id: "e-59",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-60",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|44094e04-a93c-8fcd-4e8b-29687066f128",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|44094e04-a93c-8fcd-4e8b-29687066f128",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704117705586,
    },
    "e-60": {
      id: "e-60",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-59",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|44094e04-a93c-8fcd-4e8b-29687066f128",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|44094e04-a93c-8fcd-4e8b-29687066f128",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704117705586,
    },
    "e-61": {
      id: "e-61",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-62",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|e1ca028b-ebf1-2be6-693f-4204fb361c44",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|e1ca028b-ebf1-2be6-693f-4204fb361c44",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704117790843,
    },
    "e-62": {
      id: "e-62",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-61",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|e1ca028b-ebf1-2be6-693f-4204fb361c44",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|e1ca028b-ebf1-2be6-693f-4204fb361c44",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704117790843,
    },
    "e-69": {
      id: "e-69",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-70",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|c0489cd5-15c0-257e-833f-ca5e815e4f6a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|c0489cd5-15c0-257e-833f-ca5e815e4f6a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704228894744,
    },
    "e-70": {
      id: "e-70",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-69",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|c0489cd5-15c0-257e-833f-ca5e815e4f6a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|c0489cd5-15c0-257e-833f-ca5e815e4f6a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704228894745,
    },
    "e-71": {
      id: "e-71",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-72",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|ad602f73-5923-dbc9-ee9a-f907a64027cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|ad602f73-5923-dbc9-ee9a-f907a64027cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704229240871,
    },
    "e-72": {
      id: "e-72",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-71",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|ad602f73-5923-dbc9-ee9a-f907a64027cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|ad602f73-5923-dbc9-ee9a-f907a64027cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704229240871,
    },
    "e-73": {
      id: "e-73",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-74",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|5809ea78-0690-3536-8475-8bb241746bb1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|5809ea78-0690-3536-8475-8bb241746bb1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704229427774,
    },
    "e-74": {
      id: "e-74",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-73",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|5809ea78-0690-3536-8475-8bb241746bb1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|5809ea78-0690-3536-8475-8bb241746bb1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704229427775,
    },
    "e-75": {
      id: "e-75",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-76",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|e52fd9d4-9045-c899-0c11-17be25cca160",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|e52fd9d4-9045-c899-0c11-17be25cca160",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704229582125,
    },
    "e-76": {
      id: "e-76",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-75",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|e52fd9d4-9045-c899-0c11-17be25cca160",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|e52fd9d4-9045-c899-0c11-17be25cca160",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704229582126,
    },
    "e-77": {
      id: "e-77",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-78",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|c8a69d91-5ca9-987e-2c22-7b3a24888b42",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|c8a69d91-5ca9-987e-2c22-7b3a24888b42",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704229667448,
    },
    "e-78": {
      id: "e-78",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-77",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|c8a69d91-5ca9-987e-2c22-7b3a24888b42",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|c8a69d91-5ca9-987e-2c22-7b3a24888b42",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704229667448,
    },
    "e-81": {
      id: "e-81",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-30",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-82",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6586e12448931d72c966c2ad",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6586e12448931d72c966c2ad",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704315644649,
    },
    "e-83": {
      id: "e-83",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-84",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|a72dbadf-eaaa-fade-3a32-81856c6db838",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|a72dbadf-eaaa-fade-3a32-81856c6db838",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704388380092,
    },
    "e-85": {
      id: "e-85",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-86",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|95f930f3-fa43-04af-3ec4-fa78faa5c3b9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|95f930f3-fa43-04af-3ec4-fa78faa5c3b9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704401503698,
    },
    "e-86": {
      id: "e-86",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-85",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f6|95f930f3-fa43-04af-3ec4-fa78faa5c3b9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f6|95f930f3-fa43-04af-3ec4-fa78faa5c3b9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704401503699,
    },
    "e-87": {
      id: "e-87",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-88",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6586e12448931d72c966c2ad|c1f86ccf-0e1a-e950-2d24-29b60751c0bd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6586e12448931d72c966c2ad|c1f86ccf-0e1a-e950-2d24-29b60751c0bd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705608898947,
    },
    "e-88": {
      id: "e-88",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-87",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6586e12448931d72c966c2ad|c1f86ccf-0e1a-e950-2d24-29b60751c0bd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6586e12448931d72c966c2ad|c1f86ccf-0e1a-e950-2d24-29b60751c0bd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705608898947,
    },
    "e-89": {
      id: "e-89",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-90",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6586e12448931d72c966c2ad|c1f86ccf-0e1a-e950-2d24-29b60751c0c7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6586e12448931d72c966c2ad|c1f86ccf-0e1a-e950-2d24-29b60751c0c7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705608898947,
    },
    "e-90": {
      id: "e-90",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-89",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6586e12448931d72c966c2ad|c1f86ccf-0e1a-e950-2d24-29b60751c0c7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6586e12448931d72c966c2ad|c1f86ccf-0e1a-e950-2d24-29b60751c0c7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705608898947,
    },
    "e-91": {
      id: "e-91",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-92",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6586e12448931d72c966c2ad|c1f86ccf-0e1a-e950-2d24-29b60751c0cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6586e12448931d72c966c2ad|c1f86ccf-0e1a-e950-2d24-29b60751c0cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705608898947,
    },
    "e-92": {
      id: "e-92",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-91",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6586e12448931d72c966c2ad|c1f86ccf-0e1a-e950-2d24-29b60751c0cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6586e12448931d72c966c2ad|c1f86ccf-0e1a-e950-2d24-29b60751c0cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705608898947,
    },
    "e-93": {
      id: "e-93",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-94",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6586e12448931d72c966c2ad|c1f86ccf-0e1a-e950-2d24-29b60751c0d3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6586e12448931d72c966c2ad|c1f86ccf-0e1a-e950-2d24-29b60751c0d3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705608898947,
    },
    "e-94": {
      id: "e-94",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-93",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6586e12448931d72c966c2ad|c1f86ccf-0e1a-e950-2d24-29b60751c0d3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6586e12448931d72c966c2ad|c1f86ccf-0e1a-e950-2d24-29b60751c0d3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705608898947,
    },
    "e-95": {
      id: "e-95",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-96",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6586e12448931d72c966c2ad|c1f86ccf-0e1a-e950-2d24-29b60751c0de",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6586e12448931d72c966c2ad|c1f86ccf-0e1a-e950-2d24-29b60751c0de",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705608898947,
    },
    "e-96": {
      id: "e-96",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-95",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6586e12448931d72c966c2ad|c1f86ccf-0e1a-e950-2d24-29b60751c0de",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6586e12448931d72c966c2ad|c1f86ccf-0e1a-e950-2d24-29b60751c0de",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705608898947,
    },
    "e-97": {
      id: "e-97",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-98",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f7|478c778d-a4c6-021e-cfca-328bd675f33b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f7|478c778d-a4c6-021e-cfca-328bd675f33b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705612010633,
    },
    "e-98": {
      id: "e-98",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-97",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "657d7e14544614f059e935f7|478c778d-a4c6-021e-cfca-328bd675f33b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "657d7e14544614f059e935f7|478c778d-a4c6-021e-cfca-328bd675f33b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705612010633,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "onScrollSubHeroArea",
      continuousParameterGroups: [
        {
          id: "a-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 5,
              actionItems: [
                {
                  id: "a-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".frame",
                      selectorGuids: ["28ae45d7-a93d-397d-deec-7d0a12f95c38"],
                    },
                    xValue: 0,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".frame",
                      selectorGuids: ["28ae45d7-a93d-397d-deec-7d0a12f95c38"],
                    },
                    xValue: -100,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1697988801916,
    },
    "a-3": {
      id: "a-3",
      title: "TypoZoomScrollAnimation",
      continuousParameterGroups: [
        {
          id: "a-3-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 2,
              actionItems: [
                {
                  id: "a-3-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inCubic",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".lastsectiontextwrapper",
                      selectorGuids: ["2657e95e-2f1b-c932-02b8-c2d7ab270be9"],
                    },
                    xValue: 0,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-3-n-3",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "inCubic",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".lastsectiontextwrapper",
                      selectorGuids: ["2657e95e-2f1b-c932-02b8-c2d7ab270be9"],
                    },
                    widthValue: 50,
                    widthUnit: "vw",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
              ],
            },
            {
              keyframe: 56,
              actionItems: [
                {
                  id: "a-3-n-5",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "SIBLINGS",
                      selector: ".blogsection",
                      selectorGuids: ["95971d3f-692c-e3a8-c0ad-543f2a758b6f"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-3-n-7",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".div-block-30",
                      selectorGuids: ["03edd9f3-265e-1466-0dd2-3ff04511b7d1"],
                    },
                    xValue: 0.5,
                    yValue: 0.5,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 61,
              actionItems: [
                {
                  id: "a-3-n-4",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".lastsectiontextwrapper",
                      selectorGuids: ["2657e95e-2f1b-c932-02b8-c2d7ab270be9"],
                    },
                    widthValue: 6000,
                    widthUnit: "vw",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
                {
                  id: "a-3-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".lastsectiontextwrapper",
                      selectorGuids: ["2657e95e-2f1b-c932-02b8-c2d7ab270be9"],
                    },
                    xValue: -940,
                    yValue: 0,
                    xUnit: "vw",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 68,
              actionItems: [
                {
                  id: "a-3-n-6",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "SIBLINGS",
                      selector: ".blogsection",
                      selectorGuids: ["95971d3f-692c-e3a8-c0ad-543f2a758b6f"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-3-n-8",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".div-block-30",
                      selectorGuids: ["03edd9f3-265e-1466-0dd2-3ff04511b7d1"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1699686149984,
    },
    "a-5": {
      id: "a-5",
      title: "new apple animation",
      continuousParameterGroups: [
        {
          id: "a-5-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 33,
              actionItems: [
                {
                  id: "a-5-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".texteffectgradient",
                      selectorGuids: ["756f0772-21a3-b589-db61-f12748219ef1"],
                    },
                    xValue: null,
                    yValue: 0,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 67,
              actionItems: [
                {
                  id: "a-5-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".texteffectgradient",
                      selectorGuids: ["756f0772-21a3-b589-db61-f12748219ef1"],
                    },
                    yValue: -57,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1703005267826,
    },
    "a-4": {
      id: "a-4",
      title: "Train animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "657d7e14544614f059e935f6|87085563-7d90-ffd9-9cf7-dd70d0cc3a16",
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-4-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 10000,
                target: {
                  id: "657d7e14544614f059e935f6|87085563-7d90-ffd9-9cf7-dd70d0cc3a16",
                },
                xValue: -130,
                xUnit: "rem",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-4-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "657d7e14544614f059e935f6|87085563-7d90-ffd9-9cf7-dd70d0cc3a16",
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1702918268005,
    },
    "a-6": {
      id: "a-6",
      title: "Timeline Animation",
      continuousParameterGroups: [
        {
          id: "a-6-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 57,
              actionItems: [
                {
                  id: "a-6-n",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".timeline_circle",
                      selectorGuids: ["4dda1241-460b-31ed-d9ea-be0bc06cf299"],
                    },
                    globalSwatchId: "",
                    rValue: 65,
                    bValue: 65,
                    gValue: 65,
                    aValue: 1,
                  },
                },
                {
                  id: "a-6-n-2",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".timeline_right",
                      selectorGuids: ["4dda1241-460b-31ed-d9ea-be0bc06cf2a2"],
                    },
                    value: 0.25,
                    unit: "",
                  },
                },
                {
                  id: "a-6-n-3",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".timeline_left",
                      selectorGuids: ["4dda1241-460b-31ed-d9ea-be0bc06cf2ba"],
                    },
                    value: 0.25,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 62,
              actionItems: [
                {
                  id: "a-6-n-4",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".timeline_circle",
                      selectorGuids: ["4dda1241-460b-31ed-d9ea-be0bc06cf299"],
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
                {
                  id: "a-6-n-5",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".timeline_right",
                      selectorGuids: ["4dda1241-460b-31ed-d9ea-be0bc06cf2a2"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-6-n-6",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".timeline_left",
                      selectorGuids: ["4dda1241-460b-31ed-d9ea-be0bc06cf2ba"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1625115912519,
    },
    "a-10": {
      id: "a-10",
      title: "Scroll Grid Animation #2",
      continuousParameterGroups: [
        {
          id: "a-10-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 11,
              actionItems: [
                {
                  id: "a-10-n",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".scroll-grid-wrapper",
                      selectorGuids: ["beb44b54-e8d7-bf49-19ae-7756e68bf9e6"],
                    },
                    widthValue: 140,
                    heightValue: 210,
                    widthUnit: "%",
                    heightUnit: "%",
                    locked: false,
                  },
                },
                {
                  id: "a-10-n-2",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".scroll-grid-wrapper",
                      selectorGuids: ["beb44b54-e8d7-bf49-19ae-7756e68bf9e6"],
                    },
                    xValue: 1.5,
                    yValue: 1.5,
                    locked: true,
                  },
                },
                {
                  id: "a-10-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".scroll-grid-row-2.is-top",
                      selectorGuids: [
                        "beb44b54-e8d7-bf49-19ae-7756e68bf9e3",
                        "beb44b54-e8d7-bf49-19ae-7756e68bf9e8",
                      ],
                    },
                    xValue: -10,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-10-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".scroll-grid-row-2.is-bottom",
                      selectorGuids: [
                        "beb44b54-e8d7-bf49-19ae-7756e68bf9e3",
                        "beb44b54-e8d7-bf49-19ae-7756e68bf9e9",
                      ],
                    },
                    xValue: 8,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 60,
              actionItems: [
                {
                  id: "a-10-n-5",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".scroll-grid-wrapper",
                      selectorGuids: ["beb44b54-e8d7-bf49-19ae-7756e68bf9e6"],
                    },
                    widthValue: 100,
                    heightValue: 100,
                    widthUnit: "%",
                    heightUnit: "%",
                    locked: false,
                  },
                },
                {
                  id: "a-10-n-6",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".scroll-grid-wrapper",
                      selectorGuids: ["beb44b54-e8d7-bf49-19ae-7756e68bf9e6"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-10-n-7",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".scroll-grid-row-2.is-top",
                      selectorGuids: [
                        "beb44b54-e8d7-bf49-19ae-7756e68bf9e3",
                        "beb44b54-e8d7-bf49-19ae-7756e68bf9e8",
                      ],
                    },
                    xValue: 9,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-10-n-8",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".scroll-grid-row-2.is-bottom",
                      selectorGuids: [
                        "beb44b54-e8d7-bf49-19ae-7756e68bf9e3",
                        "beb44b54-e8d7-bf49-19ae-7756e68bf9e9",
                      ],
                    },
                    xValue: -9,
                    xUnit: "vw",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1662124259539,
    },
    "a-11": {
      id: "a-11",
      title: "About popup on",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".wrapper_about-page",
                  selectorGuids: ["8c6a2e79-180c-d6df-03c1-b2535bbb53a8"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-11-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".wrapper_about-page",
                  selectorGuids: ["8c6a2e79-180c-d6df-03c1-b2535bbb53a8"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".wrapper_about-page",
                  selectorGuids: ["8c6a2e79-180c-d6df-03c1-b2535bbb53a8"],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 200,
                target: {
                  selector: ".wrapper_about-page",
                  selectorGuids: ["8c6a2e79-180c-d6df-03c1-b2535bbb53a8"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1703611336851,
    },
    "a-12": {
      id: "a-12",
      title: "About popup off",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".wrapper_about-page",
                  selectorGuids: ["8c6a2e79-180c-d6df-03c1-b2535bbb53a8"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".wrapper_about-page",
                  selectorGuids: ["8c6a2e79-180c-d6df-03c1-b2535bbb53a8"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1703611336851,
    },
    "a-13": {
      id: "a-13",
      title: "Text Gradient Scroll Effect – White",
      continuousParameterGroups: [
        {
          id: "a-13-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-13-n",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".text-effect-white-inner",
                      selectorGuids: ["8fced4e9-14c9-503a-e09b-8cd67f21c34f"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 2,
              actionItems: [
                {
                  id: "a-13-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".text-effect-white-gradient",
                      selectorGuids: ["8fced4e9-14c9-503a-e09b-8cd67f21c348"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-13-n-3",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".text-effect-white-inner",
                      selectorGuids: ["8fced4e9-14c9-503a-e09b-8cd67f21c34f"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 61,
              actionItems: [
                {
                  id: "a-13-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".text-effect-white-gradient",
                      selectorGuids: ["8fced4e9-14c9-503a-e09b-8cd67f21c348"],
                    },
                    yValue: -86,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-13-n-5",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".text-effect-white-inner",
                      selectorGuids: ["8fced4e9-14c9-503a-e09b-8cd67f21c34f"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 65,
              actionItems: [
                {
                  id: "a-13-n-6",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".text-effect-white-inner",
                      selectorGuids: ["8fced4e9-14c9-503a-e09b-8cd67f21c34f"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1662718229815,
    },
    "a-14": {
      id: "a-14",
      title: "Link hover on",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-14-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-5",
                  selectorGuids: ["92c09d3d-96ad-b931-0356-f7e11de2fbc2"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-5",
                  selectorGuids: ["92c09d3d-96ad-b931-0356-f7e11de2fbc2"],
                },
                zValue: 45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1703872764645,
    },
    "a-15": {
      id: "a-15",
      title: "Link hover off",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-5",
                  selectorGuids: ["92c09d3d-96ad-b931-0356-f7e11de2fbc2"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1703872764645,
    },
    "a-16": {
      id: "a-16",
      title: "project hover on",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow_right_icon",
                  selectorGuids: ["f5c47d24-21ef-aad7-34f8-d311573c69f4"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow_right_icon",
                  selectorGuids: ["f5c47d24-21ef-aad7-34f8-d311573c69f4"],
                },
                xValue: 1,
                xUnit: "rem",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1703881237179,
    },
    "a-17": {
      id: "a-17",
      title: "project hover off",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-17-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".arrow_right_icon",
                  selectorGuids: ["f5c47d24-21ef-aad7-34f8-d311573c69f4"],
                },
                xValue: 0,
                xUnit: "rem",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1703881237179,
    },
    "a-18": {
      id: "a-18",
      title: "about Link hover on",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-18-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-6",
                  selectorGuids: ["336b6a4f-0ecb-e7dc-16c5-3ced337193f5"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-18-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-6",
                  selectorGuids: ["336b6a4f-0ecb-e7dc-16c5-3ced337193f5"],
                },
                xValue: 0.5,
                xUnit: "rem",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1703872764645,
    },
    "a-19": {
      id: "a-19",
      title: "about Link hover off",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-19-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-6",
                  selectorGuids: ["336b6a4f-0ecb-e7dc-16c5-3ced337193f5"],
                },
                xValue: 0,
                xUnit: "rem",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1703872764645,
    },
    "a-20": {
      id: "a-20",
      title: "Navbar onn",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-20-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".div-block-110",
                  selectorGuids: ["7a124d03-3cef-ef03-0d20-d2b4c5a8a340"],
                },
                value: "none",
              },
            },
            {
              id: "a-20-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".div-block-110",
                  selectorGuids: ["7a124d03-3cef-ef03-0d20-d2b4c5a8a340"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-20-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".div-block-110",
                  selectorGuids: ["7a124d03-3cef-ef03-0d20-d2b4c5a8a340"],
                },
                value: "flex",
              },
            },
            {
              id: "a-20-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".div-block-110",
                  selectorGuids: ["7a124d03-3cef-ef03-0d20-d2b4c5a8a340"],
                },
                widthValue: 100,
                heightValue: 220,
                widthUnit: "%",
                heightUnit: "px",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1703937316885,
    },
    "a-21": {
      id: "a-21",
      title: "Navbar off",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-21-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".div-block-110",
                  selectorGuids: ["7a124d03-3cef-ef03-0d20-d2b4c5a8a340"],
                },
                widthValue: 100,
                heightValue: 0,
                widthUnit: "%",
                heightUnit: "px",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-21-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".div-block-110",
                  selectorGuids: ["7a124d03-3cef-ef03-0d20-d2b4c5a8a340"],
                },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1703937316885,
    },
    "a-22": {
      id: "a-22",
      title: "Navbar color change on",
      continuousParameterGroups: [
        {
          id: "a-22-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-22-n",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "SIBLINGS",
                      selector: ".headersection",
                      selectorGuids: ["bcc38601-8963-f94e-607a-8f71957ae164"],
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 0.7,
                  },
                },
                {
                  id: "a-22-n-3",
                  actionTypeId: "STYLE_BORDER",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".header",
                      selectorGuids: ["4f5e8883-7a54-5673-0bdd-73f9956b173b"],
                    },
                    globalSwatchId: "",
                    rValue: 238,
                    bValue: 238,
                    gValue: 238,
                    aValue: 0.5,
                  },
                },
                {
                  id: "a-22-n-7",
                  actionTypeId: "STYLE_TEXT_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".menulink",
                      selectorGuids: ["350261a6-bd5a-87d4-147a-469195f92157"],
                    },
                    globalSwatchId: "",
                    rValue: 105,
                    bValue: 105,
                    gValue: 105,
                    aValue: 1,
                  },
                },
                {
                  id: "a-22-n-9",
                  actionTypeId: "STYLE_TEXT_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".headerbutton.desktop",
                      selectorGuids: [
                        "f34f255d-b3b0-b53d-363d-2acee555729c",
                        "02783337-3166-44e9-7265-7dd65753d5a4",
                      ],
                    },
                    globalSwatchId: "",
                    rValue: 54,
                    bValue: 181,
                    gValue: 110,
                    aValue: 1,
                  },
                },
                {
                  id: "a-22-n-11",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".image-33",
                      selectorGuids: ["4a6b27cf-5eb4-b9f5-df0d-e4cf57f0e643"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-22-n-13",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".image-34",
                      selectorGuids: ["cd798eb8-a8a3-e1b6-1a57-df450d66a271"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-22-n-15",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".logoicon",
                      selectorGuids: ["b46ffe84-d146-5308-8e67-1c9e91df59ea"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-22-n-17",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".image-35",
                      selectorGuids: ["7252e890-2f63-1445-ca6c-349a58ad4779"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-22-n-19",
                  actionTypeId: "STYLE_TEXT_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".logotext",
                      selectorGuids: ["500d6020-7871-8e04-2df2-a67783ee99ca"],
                    },
                    globalSwatchId: "",
                    rValue: 22,
                    bValue: 31,
                    gValue: 27,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 45,
              actionItems: [
                {
                  id: "a-22-n-2",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "easeIn",
                    duration: 500,
                    target: {
                      useEventTarget: "SIBLINGS",
                      selector: ".headersection",
                      selectorGuids: ["bcc38601-8963-f94e-607a-8f71957ae164"],
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 0,
                  },
                },
                {
                  id: "a-22-n-4",
                  actionTypeId: "STYLE_BORDER",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".header",
                      selectorGuids: ["4f5e8883-7a54-5673-0bdd-73f9956b173b"],
                    },
                    globalSwatchId: "",
                    rValue: 238,
                    bValue: 238,
                    gValue: 238,
                    aValue: 0.05,
                  },
                },
                {
                  id: "a-22-n-8",
                  actionTypeId: "STYLE_TEXT_COLOR",
                  config: {
                    delay: 0,
                    easing: "easeIn",
                    duration: 500,
                    target: {
                      selector: ".menulink",
                      selectorGuids: ["350261a6-bd5a-87d4-147a-469195f92157"],
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
                {
                  id: "a-22-n-10",
                  actionTypeId: "STYLE_TEXT_COLOR",
                  config: {
                    delay: 0,
                    easing: "easeIn",
                    duration: 500,
                    target: {
                      selector: ".headerbutton.desktop",
                      selectorGuids: [
                        "f34f255d-b3b0-b53d-363d-2acee555729c",
                        "02783337-3166-44e9-7265-7dd65753d5a4",
                      ],
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
                {
                  id: "a-22-n-12",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".image-33",
                      selectorGuids: ["4a6b27cf-5eb4-b9f5-df0d-e4cf57f0e643"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-22-n-14",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".image-34",
                      selectorGuids: ["cd798eb8-a8a3-e1b6-1a57-df450d66a271"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-22-n-16",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".logoicon",
                      selectorGuids: ["b46ffe84-d146-5308-8e67-1c9e91df59ea"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-22-n-18",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".image-35",
                      selectorGuids: ["7252e890-2f63-1445-ca6c-349a58ad4779"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-22-n-20",
                  actionTypeId: "STYLE_TEXT_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".logotext",
                      selectorGuids: ["500d6020-7871-8e04-2df2-a67783ee99ca"],
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 1,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1704111688806,
    },
    "a-23": {
      id: "a-23",
      title: "cta hover on",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-23-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-33",
                  selectorGuids: ["4a6b27cf-5eb4-b9f5-df0d-e4cf57f0e643"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-34",
                  selectorGuids: ["cd798eb8-a8a3-e1b6-1a57-df450d66a271"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-23-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-33",
                  selectorGuids: ["4a6b27cf-5eb4-b9f5-df0d-e4cf57f0e643"],
                },
                xValue: 6,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-23-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-34",
                  selectorGuids: ["cd798eb8-a8a3-e1b6-1a57-df450d66a271"],
                },
                xValue: 6,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1704117708856,
    },
    "a-24": {
      id: "a-24",
      title: "cta hover off",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-24-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-33",
                  selectorGuids: ["4a6b27cf-5eb4-b9f5-df0d-e4cf57f0e643"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-34",
                  selectorGuids: ["cd798eb8-a8a3-e1b6-1a57-df450d66a271"],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1704117708856,
    },
    "a-25": {
      id: "a-25",
      title: "footer link hover on",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-25-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-39",
                  selectorGuids: ["a9623a8b-915b-6f46-cc88-1e79b3f38616"],
                },
                xValue: null,
                zValue: 0,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-25-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-39",
                  selectorGuids: ["a9623a8b-915b-6f46-cc88-1e79b3f38616"],
                },
                value: 0.7,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-25-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-39",
                  selectorGuids: ["a9623a8b-915b-6f46-cc88-1e79b3f38616"],
                },
                zValue: 15,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-25-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-39",
                  selectorGuids: ["a9623a8b-915b-6f46-cc88-1e79b3f38616"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1704228898245,
    },
    "a-26": {
      id: "a-26",
      title: "footer link hover off",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-26-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-39",
                  selectorGuids: ["a9623a8b-915b-6f46-cc88-1e79b3f38616"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-26-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-39",
                  selectorGuids: ["a9623a8b-915b-6f46-cc88-1e79b3f38616"],
                },
                value: 0.7,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1704228898245,
    },
    "a-27": {
      id: "a-27",
      title: "footer link hover on 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-27-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-38",
                  selectorGuids: ["12964368-94b5-9277-436f-16a8efe004c6"],
                },
                value: 0.7,
                unit: "",
              },
            },
            {
              id: "a-27-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-38.abs",
                  selectorGuids: [
                    "12964368-94b5-9277-436f-16a8efe004c6",
                    "d6c6c024-b1c6-1daa-1afd-6961a95ebc4c",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-27-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-38",
                  selectorGuids: ["12964368-94b5-9277-436f-16a8efe004c6"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-27-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-38.abs",
                  selectorGuids: [
                    "12964368-94b5-9277-436f-16a8efe004c6",
                    "d6c6c024-b1c6-1daa-1afd-6961a95ebc4c",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1704228898245,
    },
    "a-28": {
      id: "a-28",
      title: "footer link hover off 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-38",
                  selectorGuids: ["12964368-94b5-9277-436f-16a8efe004c6"],
                },
                value: 0.7,
                unit: "",
              },
            },
            {
              id: "a-28-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-38.abs",
                  selectorGuids: [
                    "12964368-94b5-9277-436f-16a8efe004c6",
                    "d6c6c024-b1c6-1daa-1afd-6961a95ebc4c",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1704228898245,
    },
    "a-30": {
      id: "a-30",
      title: "open page",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-30-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "6586e12448931d72c966c2ad|f243af8c-e674-9e04-6569-51acef088df5",
                },
                value: "block",
              },
            },
            {
              id: "a-30-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "6586e12448931d72c966c2ad|f243af8c-e674-9e04-6569-51acef088df6",
                },
                widthValue: 100,
                heightValue: 100,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-30-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 800,
                target: {
                  id: "6586e12448931d72c966c2ad|f243af8c-e674-9e04-6569-51acef088df6",
                },
                widthValue: 100,
                heightValue: 0,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-30-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "6586e12448931d72c966c2ad|f243af8c-e674-9e04-6569-51acef088df5",
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1704315359627,
    },
    "a-29": {
      id: "a-29",
      title: "close page",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-29-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".div-block-115",
                  selectorGuids: ["34de0f2e-e790-3b2a-3143-6e7e61530e65"],
                },
                value: "none",
              },
            },
            {
              id: "a-29-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".div-block-116",
                  selectorGuids: ["fd2d73d8-ee4f-5329-29ce-d37a28f69886"],
                },
                widthValue: 100,
                heightValue: 0,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-29-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".div-block-115",
                  selectorGuids: ["34de0f2e-e790-3b2a-3143-6e7e61530e65"],
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-29-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 500,
                target: {
                  selector: ".div-block-116",
                  selectorGuids: ["fd2d73d8-ee4f-5329-29ce-d37a28f69886"],
                },
                widthValue: 100,
                heightValue: 100,
                widthUnit: "%",
                heightUnit: "%",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1704315359627,
    },
    "a-31": {
      id: "a-31",
      title: "about link onn",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-31-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-40",
                  selectorGuids: ["21f9e2c6-d047-f7ea-0f11-80ab52a22104"],
                },
                xValue: null,
                zValue: 0,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-31-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-40",
                  selectorGuids: ["21f9e2c6-d047-f7ea-0f11-80ab52a22104"],
                },
                zValue: 45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1704401519541,
    },
    "a-32": {
      id: "a-32",
      title: "about link off",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-32-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-40",
                  selectorGuids: ["21f9e2c6-d047-f7ea-0f11-80ab52a22104"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1704401519541,
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
