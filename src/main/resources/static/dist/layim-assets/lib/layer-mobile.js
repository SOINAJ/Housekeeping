/** WebIMUI-v3.9.8 */
;layui.define(function (e) {
    "use strict";
    var t = (window, document), i = "querySelectorAll", n = "getElementsByClassName", a = function (e) {
        return t[i](e)
    }, s = {type: 0, shade: !0, shadeClose: !0, fixed: !0, anim: "scale"}, l = {
        extend: function (e) {
            var t = JSON.parse(JSON.stringify(s));
            for (var i in e) t[i] = e[i];
            return t
        }, timer: {}, end: {}
    };
    l.touch = function (e, t) {
        e.addEventListener("click", function (e) {
            t.call(this, e)
        }, !1)
    };
    var o = 0, r = ["layui-m-layer"], d = function (e) {
        var t = this;
        t.config = l.extend(e), t.view()
    };
    d.prototype.view = function () {
        var e = this, i = e.config, s = t.createElement("div");
        e.id = s.id = r[0] + o, s.setAttribute("class", r[0] + " " + r[0] + (i.type || 0)), s.setAttribute("index", o);
        var l = function () {
            var e = "object" == typeof i.title;
            return i.title ? '<h3 style="' + (e ? i.title[1] : "") + '">' + (e ? i.title[0] : i.title) + "</h3>" : ""
        }(), d = function () {
            "string" == typeof i.btn && (i.btn = [i.btn]);
            var e, t = (i.btn || []).length;
            return 0 !== t && i.btn ? (e = '<span yes type="1">' + i.btn[0] + "</span>", 2 === t && (e = '<span no type="0">' + i.btn[1] + "</span>" + e), '<div class="layui-m-layerbtn">' + e + "</div>") : ""
        }();
        if (i.fixed || (i.top = i.hasOwnProperty("top") ? i.top : 100, i.style = i.style || "", i.style += " top:" + (t.body.scrollTop + i.top) + "px"), 2 === i.type && (i.content = '<i></i><i class="layui-m-layerload"></i><i></i><p>' + (i.content || "") + "</p>"), i.skin && (i.anim = "up"), "msg" === i.skin && (i.shade = !1), s.innerHTML = (i.shade ? "<div " + ("string" == typeof i.shade ? 'style="' + i.shade + '"' : "") + ' class="layui-m-layershade"></div>' : "") + '<div class="layui-m-layermain" ' + (i.fixed ? "" : 'style="position:static;"') + '><div class="layui-m-layersection"><div class="layui-m-layerchild ' + (i.skin ? "layui-m-layer-" + i.skin + " " : "") + (i.className ? i.className : "") + " " + (i.anim ? "layui-m-anim-" + i.anim : "") + '" ' + (i.style ? 'style="' + i.style + '"' : "") + ">" + l + '<div class="layui-m-layercont">' + i.content + "</div>" + d + "</div></div></div>", !i.type || 2 === i.type) {
            var y = t[n](r[0] + i.type), u = y.length;
            u >= 1 && c.close(y[0].getAttribute("index"))
        }
        document.body.appendChild(s);
        var m = e.elem = a("#" + e.id)[0];
        i.success && i.success(m), e.index = o++, e.action(i, m)
    }, d.prototype.action = function (e, t) {
        var i = this;
        e.time && (l.timer[i.index] = setTimeout(function () {
            c.close(i.index)
        }, 1e3 * e.time));
        var a = function () {
            var t = this.getAttribute("type");
            0 == t ? (e.no && e.no(), c.close(i.index)) : e.yes ? e.yes(i.index) : c.close(i.index)
        };
        if (e.btn) for (var s = t[n]("layui-m-layerbtn")[0].children, o = s.length, r = 0; r < o; r++) l.touch(s[r], a);
        if (e.shade && e.shadeClose) {
            var d = t[n]("layui-m-layershade")[0];
            l.touch(d, function () {
                c.close(i.index, e.end)
            })
        }
        e.end && (l.end[i.index] = e.end)
    };
    var c = {
        v: "2.0 m", index: o, open: function (e) {
            var t = new d(e || {});
            return t.index
        }, close: function (e) {
            var i = a("#" + r[0] + e)[0];
            i && (i.innerHTML = "", t.body.removeChild(i), clearTimeout(l.timer[e]), delete l.timer[e], "function" == typeof l.end[e] && l.end[e](), delete l.end[e])
        }, closeAll: function () {
            for (var e = t[n](r[0]), i = 0, a = e.length; i < a; i++) c.close(0 | e[0].getAttribute("index"))
        }
    };
    e("layer-mobile", c)
});