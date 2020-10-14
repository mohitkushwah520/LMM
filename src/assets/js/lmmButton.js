! function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).MagnetMouse = t()
}(this, function () {
  "use strict";

  function e(e, t) {
      for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
  }

  function t(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : e[t] = n, e
  }

  function n(e, t) {
      var n = Object.keys(e);
      return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
      })), n
  }

  function i(e) {
      for (var i = 1; i < arguments.length; i++)
          if (i % 2) {
              var o = null != arguments[i] ? arguments[i] : {};
              n(o, !0).forEach(function (n) {
                  t(e, n, o[n])
              })
          } else Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(arguments[i])) : n(o).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(arguments[i], t))
          });
      return e
  }
  return function () {
      function t(e) {
          ! function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t);
          var n = {
                  element: ".magnet-mouse",
                  class: "magnet-mouse-active",
                  enabled: !0,
                  distance: 30,
                  position: "center"
              },
              o = {
                  element: ".follow-mouse",
                  class: "follow-mouse-active"
              },
              a = {
                  follow: o,
                  magnet: n,
                  throttle: 5,
                  inCallback: null,
                  outCallback: null
              };
          this.config = i({}, a, {}, e, {
              magnet: i({}, n, {}, e.magnet),
              follow: i({}, o, {}, e.follow)
          }), this.elementMagnet = document.querySelectorAll(this.config.magnet.element), this.elementFollow = document.querySelectorAll(this.config.follow.element)
      }
      var n, o, a;
      return n = t, a = [{
          key: "throttle",
          value: function (e, t) {
              var n, i;
              return function () {
                  var o = this,
                      a = +new Date,
                      l = arguments;
                  n && a < n + t ? (clearTimeout(i), i = setTimeout(function () {
                      n = a, e.apply(o, l)
                  }, t)) : (n = a, e.apply(o, l))
              }
          }
      }, {
          key: "mobileAndTabletcheck",
          value: function () {
              var e, t = !1;
              return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
          }
      }], (o = [{
          key: "getPositionMouse",
          value: function (e) {
              return {
                  x: e.pageX,
                  y: e.pageY
              }
          }
      }, {
          key: "getPositionElements",
          value: function () {
              var e = this,
                  t = [];
              return this.elementMagnet.forEach(function (n) {
                  var i = n.getBoundingClientRect(),
                      o = window.pageXOffset || document.documentElement.scrollLeft,
                      a = window.pageYOffset || document.documentElement.scrollTop;
                  t.push({
                      elem: {
                          node: n,
                          width: i.width,
                          height: i.height
                      },
                      xMin: i.left + o - e.config.magnet.distance,
                      xMax: i.left + o + i.width + e.config.magnet.distance,
                      yMin: i.top + a - e.config.magnet.distance,
                      yMax: i.top + a + i.height + e.config.magnet.distance
                  })
              }), t
          }
      }, {
          key: "getPosition",
          value: function (e, t) {
              var n, i;
              switch (this.config.magnet.position) {
                  case "top-left":
                      n = t.x - (e.xMin + this.config.magnet.distance), i = t.y - (e.yMin + this.config.magnet.distance);
                      break;
                  case "top-right":
                      n = t.x - (e.xMin + e.elem.width + this.config.magnet.distance), i = t.y - (e.yMin + this.config.magnet.distance);
                      break;
                  case "bottom-left":
                      n = t.x - (e.xMin + this.config.magnet.distance), i = t.y - (e.yMin + e.elem.height + this.config.magnet.distance);
                      break;
                  case "bottom-right":
                      n = t.x - (e.xMin + e.elem.width + this.config.magnet.distance), i = t.y - (e.yMin + e.elem.height + this.config.magnet.distance);
                      break;
                  case "top-center":
                      n = t.x - (e.xMin + this.config.magnet.distance + e.elem.width / 2), i = t.y - (e.yMin + this.config.magnet.distance);
                      break;
                  case "bottom-center":
                      n = t.x - (e.xMin + this.config.magnet.distance + e.elem.width / 2), i = t.y - (e.yMin + e.elem.height + this.config.magnet.distance);
                      break;
                  default:
                      n = t.x - (e.xMin + this.config.magnet.distance + e.elem.width / 2), i = t.y - (e.yMin + this.config.magnet.distance + e.elem.height / 2)
              }
              return {
                  x: n,
                  y: i
              }
          }
      }, {
          key: "defaultAction",
          value: function (e, t, n) {
              if ("onEnter" === e) {
                  if (this.elementFollow.length > 0) {
                      var i = !0,
                          o = !1,
                          a = void 0;
                      try {
                          for (var l, s = this.elementFollow[Symbol.iterator](); !(i = (l = s.next()).done); i = !0) {
                              l.value.classList.add(this.config.follow.class)
                          }
                      } catch (e) {
                          o = !0, a = e
                      } finally {
                          try {
                              i || null == s.return || s.return()
                          } finally {
                              if (o) throw a
                          }
                      }
                  }
                  n.elem.node.style.transform = "translate3d(" + t.x + "px," + t.y + "px, 0)", n.elem.node.classList.add(this.config.magnet.class)
              } else if ("onLeave" === e) {
                  if (this.elementFollow.length > 0) {
                      var c = !0,
                          r = !1,
                          m = void 0;
                      try {
                          for (var f, u = this.elementFollow[Symbol.iterator](); !(c = (f = u.next()).done); c = !0) {
                              f.value.classList.remove(this.config.follow.class)
                          }
                      } catch (e) {
                          r = !0, m = e
                      } finally {
                          try {
                              c || null == u.return || u.return()
                          } finally {
                              if (r) throw m
                          }
                      }
                  }
                  n.elem.node.style.transform = "", n.elem.node.classList.remove(this.config.magnet.class)
              }
          }
      }, {
          key: "magnetElement",
          value: function (e, t) {
              var n = !0,
                  i = !1,
                  o = void 0;
              try {
                  for (var a, l = e[Symbol.iterator](); !(n = (a = l.next()).done); n = !0) {
                      var s = a.value,
                          c = this.getPosition(s, t);
                      if (s.xMin < t.x && s.xMax > t.x && s.yMin < t.y && s.yMax > t.y) {
                          this.defaultAction("onEnter", c, s), null !== this.config.inCallback && "function" == typeof this.config.inCallback && this.config.inCallback.call(this, s);
                          break
                      }
                      this.defaultAction("onLeave", c, s), null !== this.config.outCallback && "function" == typeof this.config.outCallback && this.config.outCallback.call(this, s)
                  }
              } catch (e) {
                  i = !0, o = e
              } finally {
                  try {
                      n || null == l.return || l.return()
                  } finally {
                      if (i) throw o
                  }
              }
          }
      }, {
          key: "hoverElement",
          value: function (e, t) {
              var n = this;
              e.forEach(function (e) {
                  var i = e.elem.node;
                  e.xMin < t.x && e.xMax > t.x && e.yMin < t.y && e.yMax > t.y ? i.classList.add(n.config.magnet.class) : i.classList.remove(n.config.magnet.class)
              })
          }
      }, {
          key: "init",
          value: function () {
              var e, n, i = this;
              t.mobileAndTabletcheck() ? this.elementFollow.forEach(function (e) {
                  e.remove()
              }) : (this.resizeFunction = t.throttle(function () {
                  n = i.getPositionElements()
              }, this.config.throttle), this.mouseFunction = t.throttle(function (t) {
                  e = i.getPositionMouse(t), i.config.magnet.enabled ? i.magnetElement(n, e) : i.hoverElement(n, e), i.elementFollow.length > 0 && i.elementFollow.forEach(function (t) {
                      t.style.transform = "translate3d(" + (e.x - window.pageXOffset) + "px," + (e.y - window.pageYOffset) + "px, 0)"
                  })
              }, this.config.throttle), window.addEventListener("resize", this.resizeFunction), document.addEventListener("DOMContentLoaded", function () {
                  n = i.getPositionElements()
              }), window.addEventListener("mousemove", this.mouseFunction))
          }
      }, {
          key: "destroy",
          value: function () {
              var e = this;
              window.removeEventListener("mousemove", this.mouseFunction), window.removeEventListener("resize", this.resizeFunction), this.elementMagnet.forEach(function (t) {
                  t.classList.remove(e.config.magnet.class), t.style.transform = ""
              }), this.elementFollow.forEach(function (e) {
                  e.style.opacity = 0
              })
          }
      }]) && e(n.prototype, o), a && e(n, a), t
  }()
});
// alert('hii')
// window.setTimeout(()=>{


// let mm = new MagnetMouse({
// magnet: {
//   element: '.magnet'
// }
// });

// mm.init();
// },1000)
// window.addEventListener('load',()=>{

//   let mm = new MagnetMouse({
//     magnet: {
//       element: '.magnet'
//     }
//   });

//   mm.init();
//   })
