/** WebIMUI-v3.9.8 */
;layui.define(["laytpl", "upload", "layer-mobile", "zepto"], function (a) {
    var i = "2.7.0", e = layui.zepto, t = layui.laytpl, n = layui["layer-mobile"], l = layui.device(), s = "layui-show",
        o = "layim-this", c = 20, d = {}, r = function () {
            this.v = i, u(e("body"), "*[layim-event]", function (a) {
                var i = e(this), t = i.attr("layim-event");
                R[t] ? R[t].call(this, i, a) : ""
            })
        }, u = function (a, i, t) {
            var n, l = "function" == typeof i, s = function (a) {
                var i = e(this);
                i.data("lock") || (n || t.call(this, a), n = !1, i.data("lock", "true"), setTimeout(function () {
                    i.removeAttr("data-lock")
                }, i.data("locktime") || 0))
            };
            return l && (t = i), a = "string" == typeof a ? e(a) : a, m ? void (l ? a.on("touchmove", function () {
                n = !0
            }).on("touchend", s) : a.on("touchmove", i, function () {
                n = !0
            }).on("touchend", i, s)) : void (l ? a.on("click", s) : a.on("click", i, s))
        }, m = /Android|iPhone|SymbianOS|Windows Phone|iPad|iPod/.test(navigator.userAgent);
    n.popBottom = function (a) {
        n.close(n.popBottom.index), n.popBottom.index = n.open(e.extend({
            type: 1,
            content: a.content || "",
            shade: !1,
            className: "layim-layer"
        }, a))
    }, r.prototype.config = function (a) {
        a = a || {}, a = e.extend({
            title: "\u6211\u7684 IM",
            isgroup: 0,
            isNewFriend: !0,
            voice: "default.mp3",
            chatTitleColor: "#36373C"
        }, a), C(a)
    }, r.prototype.on = function (a, i) {
        return "function" == typeof i && (d[a] ? d[a].push(i) : d[a] = [i]), this
    }, r.prototype.chat = function (a) {
        if (window.JSON && window.JSON.parse) return S(a, -1), this
    }, r.prototype.panel = function (a) {
        return A(a)
    }, r.prototype.cache = function () {
        return w
    }, r.prototype.getMessage = function (a) {
        return D(a), this
    }, r.prototype.addList = function (a) {
        return M(a), this
    }, r.prototype.removeList = function (a) {
        return $(a), this
    }, r.prototype.setFriendStatus = function (a, i) {
        var t = e(".layim-friend" + a);
        t["online" === i ? "removeClass" : "addClass"]("layim-list-gray")
    }, r.prototype.setChatStatus = function (a) {
        var i = L(), e = i.elem.find(".layim-chat-status");
        return e.html(a), this
    }, r.prototype.showNew = function (a, i) {
        P(a, i)
    }, r.prototype.content = function (a) {
        return layui.data.content(a)
    };
    var y = function (a) {
            var i = {
                friend: "\u8be5\u5206\u7ec4\u4e0b\u6682\u65e0\u597d\u53cb",
                group: "\u6682\u65e0\u7fa4\u7ec4",
                history: "\u6682\u65e0\u4efb\u4f55\u6d88\u606f"
            };
            return a = a || {}, "history" === a.type && (a.item = a.item || "d.sortHistory"), ["{{# var length = 0; layui.each(" + a.item + ", function(i, data){ length++; }}", '<li layim-event="chat" data-type="' + a.type + '" data-index="' + (a.index ? "{{" + a.index + "}}" : ("history" === a.type ? "{{data.type}}" : a.type) + "{{data.id}}") + '" class="layim-' + ("history" === a.type ? "{{data.type}}" : a.type) + '{{data.id}} {{ data.status === "offline" ? "layim-list-gray" : "" }}"><div><img src="{{data.avatar || layui.cache.layimAssetsPath + \'images/default.png\'}}"></div><span>{{ data.username||data.groupname||data.name||"\u4f5a\u540d" }}</span><p>{{ data.remark||data.sign||"" }}</p><span class="layim-msg-status">new</span></li>', "{{# }); if(length === 0){ }}", '<li class="layim-null">' + (i[a.type] || "\u6682\u65e0\u6570\u636e") + "</li>", "{{# } }}"].join("")
        }, p = function (a, i, e) {
            return ['<div class="layim-panel' + (i ? " layui-m-anim-left" : "") + '">', '<div class="layim-title" style="background-color: {{d.base.chatTitleColor}};">', "<p>", e ? '<i class="layui-icon layim-chat-back" layim-event="back">&#xe603;</i>' : "", '{{ d.title || d.base.title }}<span class="layim-chat-status"></span>', "{{# if(d.data){ }}", '{{# if(d.data.type === "group"){ }}', '<i class="layui-icon layim-chat-detail" layim-event="detail">&#xe613;</i>', "{{# } }}", "{{# } }}", "</p>", "</div>", '<div class="layui-unselect layim-content">', a, "</div>", "</div>"].join("")
        },
        f = ['<div class="layui-layim">', '<div class="layim-tab-content layui-show">', '<ul class="layim-list-friend">', '<ul class="layui-layim-list layui-show layim-list-history">', y({type: "history"}), "</ul>", "</ul>", "</div>", '<div class="layim-tab-content">', '<ul class="layim-list-top">', "{{# if(d.base.isNewFriend){ }}", '<li layim-event="newFriend"><i class="layui-icon">&#xe654;</i>\u65b0\u7684\u670b\u53cb<i class="layim-new" id="LAY_layimNewFriend"></i></li>', "{{# } if(d.base.isgroup){ }}", '<li layim-event="group"><i class="layui-icon">&#xe613;</i>\u7fa4\u804a<i class="layim-new" id="LAY_layimNewGroup"></i></li>', "{{# } }}", "</ul>", '<ul class="layim-list-friend">', '{{# layui.each(d.friend, function(index, item){ var spread = d.local["spread"+index]; }}', "<li>", '<h5 layim-event="spread" lay-type="{{ spread }}"><i class="layui-icon">{{# if(spread === "true"){ }}&#xe61a;{{# } else {  }}&#xe602;{{# } }}</i><span>{{ item.groupname||"\u672a\u547d\u540d\u5206\u7ec4"+index }}</span><em>(<cite class="layim-count"> {{ (item.list||[]).length }}</cite>)</em></h5>', '<ul class="layui-layim-list {{# if(spread === "true"){ }}', " layui-show", '{{# } }}">', y({
            type: "friend",
            item: "item.list",
            index: "index"
        }), "</ul>", "</li>", "{{# }); if(d.friend.length === 0){ }}", '<li><ul class="layui-layim-list layui-show"><li class="layim-null">\u6682\u65e0\u8054\u7cfb\u4eba</li></ul>', "{{# } }}", "</ul>", "</div>", '<div class="layim-tab-content">', '<ul class="layim-list-top">', "{{# layui.each(d.base.moreList, function(index, item){ }}", '<li layim-event="moreList" lay-filter="{{ item.alias }}">', '<i class="layui-icon {{item.iconClass||""}}">{{item.iconUnicode||""}}</i>{{item.title}}<i class="layim-new" id="LAY_layimNew{{ item.alias }}"></i>', "</li>", "{{# }); if(!d.base.copyright){ }}", '<li layim-event="about"><i class="layui-icon">&#xe60b;</i>\u5173\u4e8e<i class="layim-new" id="LAY_layimNewAbout"></i></li>', "{{# } }}", "</ul>", "</div>", "</div>", '<ul class="layui-unselect layui-layim-tab">', '<li title="\u6d88\u606f" layim-event="tab" lay-type="message" class="layim-this"><i class="layui-icon">&#xe611;</i><span>\u6d88\u606f</span><i class="layim-new" id="LAY_layimNewMsg"></i></li>', '<li title="\u8054\u7cfb\u4eba" layim-event="tab" lay-type="friend"><i class="layui-icon">&#xe612;</i><span>\u8054\u7cfb\u4eba</span><i class="layim-new" id="LAY_layimNewList"></i></li>', '<li title="\u66f4\u591a" layim-event="tab" lay-type="more"><i class="layui-icon">&#xe670;</i><span>\u66f4\u591a</span><i class="layim-new" id="LAY_layimNewMore"></i></li>', "</ul>"].join(""),
        h = ['<div class="layim-chat layim-chat-{{d.data.type}}">', '<div class="layim-chat-main">', "<ul></ul>", "</div>", '<div class="layim-chat-footer">', '<div class="layim-chat-send"><input type="text" autocomplete="off"><button class="layim-send layui-disabled" layim-event="send">\u53d1\u9001</button></div>', '<div class="layim-chat-tool" data-json="{{encodeURIComponent(JSON.stringify(d.data))}}">', '<span class="layui-icon layim-tool-face" title="\u9009\u62e9\u8868\u60c5" layim-event="face">&#xe60c;</span>', "{{# if(d.base && d.base.uploadImage){ }}", '<span class="layui-icon layim-tool-image" title="\u4e0a\u4f20\u56fe\u7247" layim-event="image">&#xe60d;<input type="file" name="file" accept="image/*"></span>', "{{# }; }}", "{{# if(d.base && d.base.uploadFile){ }}", '<span class="layui-icon layim-tool-image" title="\u53d1\u9001\u6587\u4ef6" layim-event="image" data-type="file">&#xe61d;<input type="file" name="file"></span>', "{{# }; }}", "{{# layui.each(d.base.tool, function(index, item){ }}", '<span class="layui-icon  {{item.iconClass||""}} layim-tool-{{item.alias}}" title="{{item.title}}" layim-event="extend" lay-filter="{{ item.alias }}">{{item.iconUnicode||""}}</span>', "{{# }); }}", "</div>", "</div>", "</div>"].join(""),
        v = function (a) {
            return a < 10 ? "0" + (0 | a) : a
        };
    layui.data.date = function (a) {
        var i = new Date(a || new Date);
        return v(i.getMonth() + 1) + "-" + v(i.getDate()) + " " + v(i.getHours()) + ":" + v(i.getMinutes())
    }, layui.data.content = function (a) {
        var i = function (a) {
            return new RegExp("\\n*\\[" + (a || "") + "(pre|div|p|table|thead|th|tbody|tr|td|ul|li|ol|li|dl|dt|dd|h2|h3|h4|h5)([\\s\\S]*?)\\]\\n*", "g")
        };
        return a = (a || "").replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;").replace(/@(\S+)(\s+?|$)/g, '@<a href="javascript:;">$1</a>$2').replace(/face\[([^\s\[\]]+?)\]/g, function (a) {
            var i = a.replace(/^face/g, "");
            return '<img alt="' + i + '" title="' + i + '" src="' + J[i] + '">'
        }).replace(/img\[([^\s]+?)\]/g, function (a) {
            return '<img class="layui-layim-photos" src="' + a.replace(/(^img\[)|(\]$)/g, "") + '">'
        }).replace(/file\([\s\S]+?\)\[[\s\S]*?\]/g, function (a) {
            var i = (a.match(/file\(([\s\S]+?)\)\[/) || [])[1], e = (a.match(/\)\[([\s\S]*?)\]/) || [])[1];
            return i ? '<a class="layui-layim-file" href="' + i + '" download target="_blank"><i class="layui-icon">&#xe61e;</i><cite>' + (e || i) + "</cite></a>" : a
        }).replace(/audio\[([^\s]+?)\]/g, function (a) {
            return '<div class="layui-unselect layui-layim-audio" layim-event="playAudio" data-src="' + a.replace(/(^audio\[)|(\]$)/g, "") + '"><i class="layui-icon">&#xe652;</i><p>\u97f3\u9891\u6d88\u606f</p></div>'
        }).replace(/video\[([^\s]+?)\]/g, function (a) {
            return '<div class="layui-unselect layui-layim-video" layim-event="playVideo" data-src="' + a.replace(/(^video\[)|(\]$)/g, "") + '"><i class="layui-icon">&#xe652;</i></div>'
        }).replace(/a\([\s\S]+?\)\[[\s\S]*?\]/g, function (a) {
            var i = (a.match(/a\(([\s\S]+?)\)\[/) || [])[1], e = (a.match(/\)\[([\s\S]*?)\]/) || [])[1];
            return i ? '<a href="' + i + '" target="_blank">' + (e || i) + "</a>" : a
        }).replace(i(), "<$1 $2>").replace(i("/"), "</$1>").replace(/\n/g, "<br>")
    };
    var g, b,
        x = ['<li class="layim-chat-li{{ d.mine ? " layim-chat-mine" : "" }}">', '<div class="layim-chat-user"><img src="{{ d.avatar || layui.cache.layimAssetsPath + \'images/default.png\' }}" alt="{{ d.uid || d.id }}"><cite>', '{{ d.username||"\u4f5a\u540d" }}', "</cite></div>", '<div class="layim-chat-text">{{ layui.data.content(d.content||"&nbsp;") }}</div>', "</li>"].join(""),
        w = {message: {}, chat: []}, C = function (a) {
            var i = a.init || {};
            return mine = i.mine || {}, local = layui.data("layim-mobile")[mine.id] || {}, obj = {
                base: a,
                local: local,
                mine: mine,
                history: local.history || []
            }, create = function (i) {
                var n = i.mine || {}, l = layui.data("layim-mobile")[n.id] || {}, s = {
                    base: a,
                    local: l,
                    mine: n,
                    friend: i.friend || [],
                    group: i.group || [],
                    history: l.history || []
                };
                s.sortHistory = T(s.history, "historyTime"), w = e.extend(w, s), k(t(p(f)).render(s)), layui.each(d.ready, function (a, i) {
                    i && i(s)
                })
            }, w = e.extend(w, obj), a.brief ? layui.each(d.ready, function (a, i) {
                i && i(obj)
            }) : void create(i)
        }, k = function (a) {
            return n.open({
                type: 1, shade: !1, shadeClose: !1, anim: -1, content: a, success: function (a) {
                    g = e(a), N(g.find(".layui-layim")), w.base.tabIndex && R.tab(e(".layui-layim-tab>li").eq(w.base.tabIndex))
                }
            })
        }, A = function (a, i) {
            a = a || {};
            var l = e.extend({}, w, {title: a.title || "", data: a.data});
            return n.open({
                type: 1,
                shade: !1,
                shadeClose: !1,
                anim: -1,
                content: t(p(a.tpl, i !== -1, !0)).render(l),
                success: function (i) {
                    var t = e(i);
                    t.prev().find(".layim-panel").addClass("layui-m-anim-lout"), a.success && a.success(i), a.isChat || N(t.find(".layim-content"))
                },
                end: a.end
            })
        }, S = function (a, i, t) {
            return a = a || {}, a.id ? (n.close(S.index), S.index = A({
                tpl: h,
                data: a,
                title: a.name,
                isChat: !0,
                success: function (i) {
                    b = e(i), Y(), F(), delete w.message[a.type + a.id], P("Msg");
                    var t = L(), n = t.elem.find(".layim-chat-main");
                    layui.each(d.chatChange, function (a, i) {
                        i && i(t)
                    }), N(n), t.textarea.on("focus", function () {
                        setTimeout(function () {
                            n.scrollTop(n[0].scrollHeight + 1e3)
                        }, 500)
                    })
                },
                end: function () {
                    b = null, H.time = 0
                }
            }, i)) : n.msg("\u975e\u6cd5\u7528\u6237")
        }, N = function (a) {
            l.ios && a.on("touchmove", function (i) {
                var e = a.scrollTop();
                e <= 0 && (a.scrollTop(1), i.preventDefault(i)), this.scrollHeight - e - a.height() <= 0 && (a.scrollTop(a.scrollTop() - 1), i.preventDefault(i))
            })
        }, L = function () {
            if (!b) return {};
            var a = b.find(".layim-chat"), i = JSON.parse(decodeURIComponent(a.find(".layim-chat-tool").data("json")));
            return {elem: a, data: i, textarea: a.find("input")}
        }, T = function (a, i, e) {
            var t = [], n = function (a, e) {
                var t = a[i], n = e[i];
                return n < t ? -1 : n > t ? 1 : 0
            };
            return layui.each(a, function (a, i) {
                t.push(i)
            }), t.sort(n), e && t.reverse(), t
        }, j = function (a) {
            var i = layui.data("layim-mobile")[w.mine.id] || {}, e = {}, n = i.history || {};
            n[a.type + a.id];
            if (g) {
                var l = g.find(".layim-list-history");
                a.historyTime = (new Date).getTime(), a.sign = a.content, n[a.type + a.id] = a, i.history = n, layui.data("layim-mobile", {
                    key: w.mine.id,
                    value: i
                });
                var o = l.find(".layim-" + a.type + a.id), c = (w.message[a.type + a.id] || []).length, d = function () {
                    o = l.find(".layim-" + a.type + a.id), o.find("p").html(a.content), c > 0 && o.find(".layim-msg-status").html(c).addClass(s)
                };
                if (o.length > 0) d(), l.prepend(o.clone()), o.remove(); else {
                    e[a.type + a.id] = a;
                    var r = t(y({type: "history", item: "d.data"})).render({data: e});
                    l.prepend(r), d(), l.find(".layim-null").remove()
                }
                P("Msg")
            }
        }, P = function (a, i) {
            if (!i) {
                var i;
                layui.each(w.message, function () {
                    return i = !0, !1
                })
            }
            e("#LAY_layimNew" + a)[i ? "addClass" : "removeClass"](s)
        }, H = function () {
            var a = {
                    username: w.mine ? w.mine.username : "\u8bbf\u5ba2",
                    avatar: w.mine ? w.mine.avatar : layui.cache.layimAssetsPath + "images/default.png",
                    id: w.mine ? w.mine.id : null,
                    mine: !0
                }, i = L(), e = i.elem.find(".layim-chat-main ul"), l = i.data, s = w.base.maxLength || 3e3,
                o = (new Date).getTime(), c = i.textarea;
            if (a.content = c.val(), "" !== a.content) {
                if (a.content.length > s) return n.msg("\u5185\u5bb9\u6700\u957f\u4e0d\u80fd\u8d85\u8fc7" + s + "\u4e2a\u5b57\u7b26");
                o - (H.time || 0) > 6e4 && (e.append('<li class="layim-chat-system"><span>' + layui.data.date() + "</span></li>"), H.time = o), e.append(t(x).render(a));
                var r = {mine: a, to: l}, u = {
                    username: r.mine.username,
                    avatar: r.mine.avatar || layui.cache.layimAssetsPath + "images/default.png",
                    id: l.id,
                    type: l.type,
                    content: r.mine.content,
                    timestamp: o,
                    mine: !0
                };
                _(u), layui.each(d.sendMessage, function (a, i) {
                    i && i(r)
                }), l.content = a.content, j(l), O(), c.val(""), c.next().addClass("layui-disabled")
            }
        }, q = function () {
            var a = document.createElement("audio");
            a.src = layui.cache.layimAssetsPath + "voice/" + w.base.voice, a.play()
        }, I = {}, D = function (a) {
            a = a || {};
            var i = {}, n = L(), l = n.data || {}, s = l.id == a.id && l.type == a.type;
            a.timestamp = a.timestamp || (new Date).getTime(), a.system || _(a), console.log(a), I = JSON.parse(JSON.stringify(a)), w.base.voice && q(), (!b && a.content || !s) && (w.message[a.type + a.id] ? w.message[a.type + a.id].push(a) : w.message[a.type + a.id] = [a]);
            var i = {};
            if ("friend" === a.type) {
                var o;
                layui.each(w.friend, function (i, e) {
                    if (layui.each(e.list, function (i, e) {
                        if (e.id == a.id) return a.type = "friend", a.name = e.username, o = !0
                    }), o) return !0
                }), o || (a.temporary = !0)
            } else "group" === a.type ? layui.each(w.group, function (e, t) {
                if (t.id == a.id) return a.type = "group", a.name = a.groupname = t.groupname, i.avatar = t.avatar || layui.cache.layimAssetsPath + "images/default.png", !0
            }) : a.name = a.name || a.username || a.groupname;
            var c = e.extend({}, a, {avatar: i.avatar || a.avatar || layui.cache.layimAssetsPath + "images/default.png"});
            if ("group" === a.type && delete c.username, j(c), b && s) {
                var d = b.find(".layim-chat"), r = d.find(".layim-chat-main ul");
                a.system ? r.append('<li class="layim-chat-system"><span>' + a.content + "</span></li>") : "" !== a.content.replace(/\s/g, "") && (a.timestamp - (H.time || 0) > 6e4 && (r.append('<li class="layim-chat-system"><span>' + layui.data.date(a.timestamp) + "</span></li>"), H.time = a.timestamp), r.append(t(x).render(a))), O()
            }
        }, _ = function (a) {
            var i = layui.data("layim-mobile")[w.mine.id] || {}, e = i.chatlog || {};
            e[a.type + a.id] ? (e[a.type + a.id].push(a), e[a.type + a.id].length > c && e[a.type + a.id].shift()) : e[a.type + a.id] = [a], i.chatlog = e, layui.data("layim-mobile", {
                key: w.mine.id,
                value: i
            })
        }, F = function () {
            var a = layui.data("layim-mobile")[w.mine.id] || {}, i = L(), e = a.chatlog || {},
                n = i.elem.find(".layim-chat-main ul");
            layui.each(e[i.data.type + i.data.id], function (a, i) {
                (new Date).getTime() > i.timestamp && i.timestamp - (H.time || 0) > 6e4 && (n.append('<li class="layim-chat-system"><span>' + layui.data.date(i.timestamp) + "</span></li>"), H.time = i.timestamp), n.append(t(x).render(i))
            }), O()
        }, M = function (a) {
            var i, e = {}, l = g.find(".layim-list-" + a.type);
            if (w[a.type]) if ("friend" === a.type) layui.each(w.friend, function (t, l) {
                if (a.groupid == l.id) return layui.each(w.friend[t].list, function (e, t) {
                    if (t.id == a.id) return i = !0
                }), i ? n.msg("\u597d\u53cb [" + (a.username || "") + "] \u5df2\u7ecf\u5b58\u5728\u5217\u8868\u4e2d", {anim: 6}) : (w.friend[t].list = w.friend[t].list || [], e[w.friend[t].list.length] = a, a.groupIndex = t, w.friend[t].list.push(a), !0)
            }); else if ("group" === a.type) {
                if (layui.each(w.group, function (e, t) {
                    if (t.id == a.id) return i = !0
                }), i) return n.msg("\u60a8\u5df2\u662f [" + (a.groupname || "") + "] \u7684\u7fa4\u6210\u5458", {anim: 6});
                e[w.group.length] = a, w.group.push(a)
            }
            if (!i) {
                var s = t(y({
                    type: a.type,
                    item: "d.data",
                    index: "friend" === a.type ? "data.groupIndex" : null
                })).render({data: e});
                if ("friend" === a.type) {
                    var o = l.children("li").eq(a.groupIndex);
                    o.find(".layui-layim-list").append(s), o.find(".layim-count").html(w.friend[a.groupIndex].list.length), o.find(".layim-null")[0] && o.find(".layim-null").remove()
                } else "group" === a.type && (l.append(s), l.find(".layim-null")[0] && l.find(".layim-null").remove())
            }
        }, $ = function (a) {
            var i = g.find(".layim-list-" + a.type);
            w[a.type] && ("friend" === a.type ? layui.each(w.friend, function (e, t) {
                layui.each(t.list, function (t, n) {
                    if (a.id == n.id) {
                        var l = i.children("li").eq(e);
                        l.find(".layui-layim-list").children("li");
                        return l.find(".layui-layim-list").children("li").eq(t).remove(), w.friend[e].list.splice(t, 1), l.find(".layim-count").html(w.friend[e].list.length), 0 === w.friend[e].list.length && l.find(".layui-layim-list").html('<li class="layim-null">\u8be5\u5206\u7ec4\u4e0b\u5df2\u65e0\u597d\u53cb\u4e86</li>'), !0
                    }
                })
            }) : "group" === a.type && layui.each(w.group, function (e, t) {
                if (a.id == t.id) return i.children("li").eq(e).remove(), w.group.splice(e, 1), 0 === w.group.length && i.html('<li class="layim-null">\u6682\u65e0\u7fa4\u7ec4</li>'), !0
            }))
        }, O = function () {
            var a = L(), i = a.elem.find(".layim-chat-main"), e = i.find("ul"), t = e.children(".layim-chat-li");
            if (t.length >= c) {
                var n = t.eq(0);
                n.prev().remove(), e.prev().hasClass("layim-chat-system") || e.before('<div class="layim-chat-system"><span layim-event="chatLog">\u67e5\u770b\u66f4\u591a\u8bb0\u5f55</span></div>'), n.remove()
            }
            i.scrollTop(i[0].scrollHeight + 1e3)
        }, Y = function () {
            var a = L(), i = a.textarea, e = i.next();
            i.off("keyup").on("keyup", function (a) {
                var t = a.keyCode;
                13 === t && (a.preventDefault(), H()), e["" === i.val() ? "addClass" : "removeClass"]("layui-disabled")
            })
        }, J = function () {
            var a = ["[\u5fae\u7b11]", "[\u563b\u563b]", "[\u54c8\u54c8]", "[\u53ef\u7231]", "[\u53ef\u601c]", "[\u6316\u9f3b]", "[\u5403\u60ca]", "[\u5bb3\u7f9e]", "[\u6324\u773c]", "[\u95ed\u5634]", "[\u9119\u89c6]", "[\u7231\u4f60]", "[\u6cea]", "[\u5077\u7b11]", "[\u4eb2\u4eb2]", "[\u751f\u75c5]", "[\u592a\u5f00\u5fc3]", "[\u767d\u773c]", "[\u53f3\u54fc\u54fc]", "[\u5de6\u54fc\u54fc]", "[\u5618]", "[\u8870]", "[\u59d4\u5c48]", "[\u5410]", "[\u54c8\u6b20]", "[\u62b1\u62b1]", "[\u6012]", "[\u7591\u95ee]", "[\u998b\u5634]", "[\u62dc\u62dc]", "[\u601d\u8003]", "[\u6c57]", "[\u56f0]", "[\u7761]", "[\u94b1]", "[\u5931\u671b]", "[\u9177]", "[\u8272]", "[\u54fc]", "[\u9f13\u638c]", "[\u6655]", "[\u60b2\u4f24]", "[\u6293\u72c2]", "[\u9ed1\u7ebf]", "[\u9634\u9669]", "[\u6012\u9a82]", "[\u4e92\u7c89]", "[\u5fc3]", "[\u4f24\u5fc3]", "[\u732a\u5934]", "[\u718a\u732b]", "[\u5154\u5b50]", "[ok]", "[\u8036]", "[good]", "[NO]", "[\u8d5e]", "[\u6765]", "[\u5f31]", "[\u8349\u6ce5\u9a6c]", "[\u795e\u9a6c]", "[\u56e7]", "[\u6d6e\u4e91]", "[\u7ed9\u529b]", "[\u56f4\u89c2]", "[\u5a01\u6b66]", "[\u5965\u7279\u66fc]", "[\u793c\u7269]", "[\u949f]", "[\u8bdd\u7b52]", "[\u8721\u70db]", "[\u86cb\u7cd5]"],
                i = {};
            return layui.each(a, function (a, e) {
                i[e] = layui.cache.layimAssetsPath + "images/face/" + a + ".gif"
            }), i
        }(), B = layui.stope, E = function (a, i, e) {
            var t, n = a.value;
            e || a.focus(), document.selection ? (t = document.selection.createRange(), document.selection.empty(), t.text = i) : (t = [n.substring(0, a.selectionStart), i, n.substr(a.selectionEnd)], e || a.focus(), a.value = t.join(""))
        }, R = {
            chat: function (a) {
                var i = layui.data("layim-mobile")[w.mine.id] || {}, t = a.data("type"), n = a.data("index"),
                    l = a.attr("data-list") || a.index(), o = {};
                "friend" === t ? o = w[t][n].list[l] : "group" === t ? o = w[t][l] : "history" === t && (o = (i.history || {})[n] || {}), o.name = o.name || o.username || o.groupname, "history" !== t && (o.type = t), S(o, !0), e(".layim-" + o.type + o.id).find(".layim-msg-status").removeClass(s)
            }, spread: function (a) {
                var i = a.attr("lay-type"), e = "true" === i ? "false" : "true",
                    t = layui.data("layim-mobile")[w.mine.id] || {};
                a.next()["true" === i ? "removeClass" : "addClass"](s), t["spread" + a.parent().index()] = e, layui.data("layim-mobile", {
                    key: w.mine.id,
                    value: t
                }), a.attr("lay-type", e), a.find(".layui-icon").html("true" === e ? "&#xe61a;" : "&#xe602;")
            }, tab: function (a) {
                var i = a.index(), e = ".layim-tab-content";
                a.addClass(o).siblings().removeClass(o), g.find(e).eq(i).addClass(s).siblings(e).removeClass(s)
            }, back: function (a) {
                var i = a.parents(".layui-m-layer").eq(0), e = i.attr("index"), t = ".layim-panel";
                setTimeout(function () {
                    n.close(e)
                }, 300), a.parents(t).eq(0).removeClass("layui-m-anim-left").addClass("layui-m-anim-rout"), i.prev().find(t).eq(0).removeClass("layui-m-anim-lout").addClass("layui-m-anim-right"), layui.each(d.back, function (a, i) {
                    setTimeout(function () {
                        i && i()
                    }, 200)
                })
            }, send: function () {
                H()
            }, face: function (a, i) {
                var t = "", l = L(), s = l.textarea;
                layui.each(J, function (a, i) {
                    t += '<li title="' + a + '"><img src="' + i + '"></li>'
                }), t = '<ul class="layui-layim-face">' + t + "</ul>", n.popBottom({
                    content: t, success: function (a) {
                        var i = e(a).find(".layui-layim-face").children("li");
                        u(i, function () {
                            return E(s[0], "face" + this.title + " ", !0), s.next()["" === s.val() ? "addClass" : "removeClass"]("layui-disabled"), !1
                        })
                    }
                });
                var o = e(document);
                m ? u(o, function () {
                    R.faceHide()
                }) : o.off("click", R.faceHide).on("click", R.faceHide), B(i)
            }, faceHide: function () {
                n.close(n.popBottom.index), e(document).off("touchend", R.faceHide).off("click", R.faceHide)
            }, image: function (a) {
                var i = a.data("type") || "images", e = {images: "uploadImage", file: "uploadFile"}, t = L(),
                    l = w.base[e[i]] || {};
                layui.upload.render({
                    url: l.url || "",
                    method: l.type,
                    elem: a.find("input")[0],
                    accept: i,
                    done: function (a) {
                        0 == a.code ? (a.data = a.data || {}, "images" === i ? E(t.textarea[0], "img[" + (a.data.src || "") + "]") : "file" === i && E(t.textarea[0], "file(" + (a.data.src || "") + ")[" + (a.data.name || "\u4e0b\u8f7d\u6587\u4ef6") + "]"), H()) : n.msg(a.msg || "\u4e0a\u4f20\u5931\u8d25")
                    }
                })
            }, extend: function (a) {
                var i = a.attr("lay-filter"), e = L();
                layui.each(d["tool(" + i + ")"], function (i, t) {
                    t && t.call(a, function (a) {
                        E(e.textarea[0], a)
                    }, H, e)
                })
            }, newFriend: function () {
                layui.each(d.newFriend, function (a, i) {
                    i && i()
                })
            }, group: function () {
                A({
                    title: "\u7fa4\u804a",
                    tpl: ['<div class="layui-layim-list layim-list-group">', y({
                        type: "group",
                        item: "d.group"
                    }), "</div>"].join(""),
                    data: {}
                })
            }, detail: function () {
                var a = L();
                layui.each(d.detail, function (i, e) {
                    e && e(a.data)
                })
            }, playAudio: function (a) {
                var i = a.data("audio"), e = i || document.createElement("audio"), t = function () {
                    e.pause(), a.removeAttr("status"), a.find("i").html("&#xe652;")
                };
                return a.data("error") ? n.msg("\u64ad\u653e\u97f3\u9891\u6e90\u5f02\u5e38") : e.play ? void (a.attr("status") ? t() : (i || (e.src = a.data("src")), e.play(), a.attr("status", "pause"), a.data("audio", e), a.find("i").html("&#xe651;"), e.onended = function () {
                    t()
                }, e.onerror = function () {
                    n.msg("\u64ad\u653e\u97f3\u9891\u6e90\u5f02\u5e38"), a.data("error", !0), t()
                })) : n.msg("\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301audio")
            }, playVideo: function (a) {
                var i = a.data("src"), e = document.createElement("video");
                return e.play ? (n.close(R.playVideo.index), void (R.playVideo.index = n.open({
                    type: 1,
                    anim: !1,
                    style: "width: 100%; height: 50%;",
                    content: '<div style="background-color: #000; height: 100%;"><video style="position: absolute; width: 100%; height: 100%;" src="' + i + '" autoplay="autoplay"></video></div>'
                }))) : n.msg("\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301video")
            }, chatLog: function (a) {
                var i = L();
                layui.each(d.chatlog, function (a, e) {
                    e && e(i.data, i.elem.find(".layim-chat-main>ul"))
                })
            }, moreList: function (a) {
                var i = a.attr("lay-filter");
                layui.each(d.moreList, function (a, e) {
                    e && e({alias: i})
                })
            }, about: function () {
                n.open({
                    content: '<p style="padding-bottom: 5px;">\u7248\u672c\uff1a v' + i + "</p>",
                    className: "layim-about",
                    shadeClose: !1,
                    btn: "\u6211\u77e5\u9053\u4e86"
                })
            }
        };
    a("layim-mobile", new r)
}).link(layui.cache.layimAssetsPath + "mobile.css", "skinlayim-mobilecss");