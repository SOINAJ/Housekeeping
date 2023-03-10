/** WebIMUI-v3.9.8 */
;layui.define(["layer", "laytpl", "upload"], function (a) {
    var i = "3.9.8", e = layui.$, t = layui.layer, n = layui.laytpl, l = layui.device(), s = "layui-show",
        o = "layim-this", d = 20, u = {}, c = function () {
            this.v = i, e("body").on("click", "*[layim-event]", function (a) {
                var i = e(this), t = i.attr("layim-event");
                ta[t] ? ta[t].call(this, i, a) : ""
            })
        };
    c.prototype.config = function (a) {
        var i = [];
        if (layui.each(Array(5), function (a) {
            i.push(layui.cache.layimAssetsPath + "skin/" + (a + 1) + ".jpg")
        }), a = a || {}, a.skin = a.skin || [], layui.each(a.skin, function (a, e) {
            i.unshift(e)
        }), a.skin = i, a = e.extend({
            isfriend: !0,
            isgroup: !0,
            voice: "default.mp3"
        }, a), window.JSON && window.JSON.parse) return P(a), this
    }, c.prototype.on = function (a, i) {
        return "function" == typeof i && (u[a] ? u[a].push(i) : u[a] = [i]), this
    }, c.prototype.cache = function () {
        return S
    }, c.prototype.chat = function (a) {
        if (window.JSON && window.JSON.parse) return T(a), this
    }, c.prototype.setChatMin = function () {
        return I(), this
    }, c.prototype.setChatStatus = function (a) {
        var i = q();
        if (i) {
            var e = i.elem.find(".layim-chat-status");
            return e.html(a), this
        }
    }, c.prototype.getMessage = function (a) {
        return G(a), this
    }, c.prototype.notice = function (a) {
        return D(a), this
    }, c.prototype.add = function (a) {
        return N(a), this
    }, c.prototype.setFriendGroup = function (a) {
        return N(a, "setGroup"), this
    }, c.prototype.msgbox = function (a) {
        return Y(a), this
    }, c.prototype.addList = function (a) {
        return U(a), this
    }, c.prototype.removeList = function (a) {
        return W(a), this
    }, c.prototype.setFriendStatus = function (a, i) {
        var t = e(".layim-friend" + a);
        t["online" === i ? "removeClass" : "addClass"]("layim-list-gray")
    }, c.prototype.content = function (a) {
        return layui.data.content(a)
    };
    var r = function (a) {
            var i = {
                friend: "\u8be5\u5206\u7ec4\u4e0b\u6682\u65e0\u597d\u53cb",
                group: "\u6682\u65e0\u7fa4\u7ec4",
                history: "\u6682\u65e0\u5386\u53f2\u4f1a\u8bdd"
            };
            return a = a || {}, a.item = a.item || "d." + a.type, ["{{# var length = 0; layui.each(" + a.item + ", function(i, data){ length++; }}", '<li layim-event="chat" data-type="' + a.type + '" data-index="{{ ' + (a.index || "i") + ' }}" class="layim-' + ("history" === a.type ? "{{i}}" : a.type + "{{data.id}}") + ' {{ data.status === "offline" ? "layim-list-gray" : "" }}"><img src="{{ data.avatar || layui.cache.layimAssetsPath + \'images/default.png\'}}"><span>{{ data.username||data.groupname||data.name||"\u4f5a\u540d" }}</span><p>{{ data.remark||data.sign||"" }}</p><span class="layim-msg-status">new</span></li>', "{{# }); if(length === 0){ }}", '<li class="layim-null">' + (i[a.type] || "\u6682\u65e0\u6570\u636e") + "</li>", "{{# } }}"].join("")
        },
        y = ['<div class="layui-layim-main">', '<div class="layui-layim-info">', '<div class="layui-layim-user">{{ d.mine.username }}</div>', '<div class="layui-layim-status">', '{{# if(d.mine.status === "online"){ }}', '<span class="layui-icon layim-status-online" layim-event="status" lay-type="show">&#xe617;</span>', '{{# } else if(d.mine.status === "hide") { }}', '<span class="layui-icon layim-status-hide" layim-event="status" lay-type="show">&#xe60f;</span>', "{{# } }}", '<ul class="layui-anim layim-menu-box">', '<li {{d.mine.status === "online" ? "class=layim-this" : ""}} layim-event="status" lay-type="online"><i class="layui-icon">&#xe605;</i><cite class="layui-icon layim-status-online">&#xe617;</cite>\u5728\u7ebf</li>', '<li {{d.mine.status === "hide" ? "class=layim-this" : ""}} layim-event="status" lay-type="hide"><i class="layui-icon">&#xe605;</i><cite class="layui-icon layim-status-hide">&#xe60f;</cite>\u9690\u8eab</li>', "</ul>", "</div>", '<input class="layui-layim-remark" placeholder="\u7f16\u8f91\u7b7e\u540d" value="{{ d.mine.remark||d.mine.sign||"" }}">', "</div>", '<ul class="layui-unselect layui-layim-tab{{# if(!d.base.isfriend || !d.base.isgroup){ }}', " layim-tab-two", '{{# } }}">', '<li class="layui-icon', "{{# if(!d.base.isfriend){ }}", " layim-hide", "{{# } else { }}", " layim-this", "{{# } }}", '" title="\u8054\u7cfb\u4eba" layim-event="tab" lay-type="friend">&#xe612;</li>', '<li class="layui-icon', "{{# if(!d.base.isgroup){ }}", " layim-hide", "{{# } else if(!d.base.isfriend) { }}", " layim-this", "{{# } }}", '" title="\u7fa4\u7ec4" layim-event="tab" lay-type="group">&#xe613;</li>', '<li class="layui-icon" title="\u5386\u53f2\u4f1a\u8bdd" layim-event="tab" lay-type="history">&#xe611;</li>', "</ul>", '<ul class="layui-unselect layim-tab-content {{# if(d.base.isfriend){ }}layui-show{{# } }} layim-list-friend">', '{{# layui.each(d.friend, function(index, item){ var spread = d.local["spread"+index]; }}', "<li>", '<h5 layim-event="spread" lay-type="{{ spread }}"><i class="layui-icon">{{# if(spread === "true"){ }}&#xe61a;{{# } else {  }}&#xe602;{{# } }}</i><span>{{ item.groupname||"\u672a\u547d\u540d\u5206\u7ec4"+index }}</span><em>(<cite class="layim-count"> {{ (item.list||[]).length }}</cite>)</em></h5>', '<ul class="layui-layim-list {{# if(spread === "true"){ }}', " layui-show", '{{# } }}">', r({
            type: "friend",
            item: "item.list",
            index: "index"
        }), "</ul>", "</li>", "{{# }); if(d.friend.length === 0){ }}", '<li><ul class="layui-layim-list layui-show"><li class="layim-null">\u6682\u65e0\u8054\u7cfb\u4eba</li></ul>', "{{# } }}", "</ul>", '<ul class="layui-unselect layim-tab-content {{# if(!d.base.isfriend && d.base.isgroup){ }}layui-show{{# } }}">', "<li>", '<ul class="layui-layim-list layui-show layim-list-group">', r({type: "group"}), "</ul>", "</li>", "</ul>", '<ul class="layui-unselect layim-tab-content  {{# if(!d.base.isfriend && !d.base.isgroup){ }}layui-show{{# } }}">', "<li>", '<ul class="layui-layim-list layui-show layim-list-history">', r({type: "history"}), "</ul>", "</li>", "</ul>", '<ul class="layui-unselect layim-tab-content">', "<li>", '<ul class="layui-layim-list layui-show" id="layui-layim-search"></ul>', "</li>", "</ul>", '<ul class="layui-unselect layui-layim-tool">', '<li class="layui-icon layim-tool-search" layim-event="search" title="\u641c\u7d22">&#xe615;</li>', "{{# if(d.base.msgbox){ }}", '<li class="layui-icon layim-tool-msgbox" layim-event="msgbox" title="\u6d88\u606f\u76d2\u5b50">&#xe645;<span class="layui-anim"></span></li>', "{{# } }}", "{{# if(d.base.find){ }}", '<li class="layui-icon layim-tool-find" layim-event="find" title="\u67e5\u627e">&#xe608;</li>', "{{# } }}", '<li class="layui-icon layim-tool-skin" layim-event="skin" title="\u66f4\u6362\u80cc\u666f">&#xe61b;</li>', "{{# if(!d.base.copyright){ }}", '<li class="layui-icon layim-tool-about" layim-event="about" title="\u5173\u4e8e">&#xe60b;</li>', "{{# } }}", "</ul>", '<div class="layui-layim-search"><input><label class="layui-icon" layim-event="closeSearch">&#x1007;</label></div>', "</div>"].join(""),
        m = ['<ul class="layui-layim-skin">', "{{# layui.each(d.skin, function(index, item){ }}", '<li><img layim-event="setSkin" src="{{ item }}"></li>', "{{# }); }}", '<li layim-event="setSkin"><cite>\u7b80\u7ea6</cite></li>', "</ul>"].join(""),
        f = ['<div class="layim-chat layim-chat-{{d.data.type}}{{d.first ? " layui-show" : ""}}">', '<div class="layui-unselect layim-chat-title">', '<div class="layim-chat-other">', '<img class="layim-{{ d.data.type }}{{ d.data.id }}" src="{{ d.data.avatar || layui.cache.layimAssetsPath + \'images/default.png\' }}"><span class="layim-chat-username" layim-event="{{ d.data.type==="group" ? "groupMembers" : "" }}">{{ d.data.name||"\u4f5a\u540d" }} {{d.data.temporary ? "<cite>\u4e34\u65f6\u4f1a\u8bdd</cite>" : ""}} {{# if(d.data.type==="group"){ }} <em class="layim-chat-members"></em><i class="layui-icon">&#xe61a;</i> {{# } }}</span>', '<p class="layim-chat-status"></p>', "</div>", "</div>", '<div class="layim-chat-main">', "<ul></ul>", "</div>", '<div class="layim-chat-footer">', '<div class="layui-unselect layim-chat-tool" data-json="{{encodeURIComponent(JSON.stringify(d.data))}}">', '<span class="layui-icon layim-tool-face" title="\u9009\u62e9\u8868\u60c5" layim-event="face">&#xe60c;</span>', "{{# if(d.base && d.base.uploadImage){ }}", '<span class="layui-icon layim-tool-image" title="\u4e0a\u4f20\u56fe\u7247" layim-event="image">&#xe60d;<input type="file" name="file"></span>', "{{# }; }}", "{{# if(d.base && d.base.uploadFile){ }}", '<span class="layui-icon layim-tool-image" title="\u53d1\u9001\u6587\u4ef6" layim-event="image" data-type="file">&#xe61d;<input type="file" name="file"></span>', "{{# }; }}", "{{# if(d.base && d.base.isAudio){ }}", '<span class="layui-icon layim-tool-audio" title="\u53d1\u9001\u7f51\u7edc\u97f3\u9891" layim-event="media" data-type="audio">&#xe6fc;</span>', "{{# }; }}", "{{# if(d.base && d.base.isVideo){ }}", '<span class="layui-icon layim-tool-video" title="\u53d1\u9001\u7f51\u7edc\u89c6\u9891" layim-event="media" data-type="video">&#xe6ed;</span>', "{{# }; }}", "{{# layui.each(d.base.tool, function(index, item){ }}", '<span class="layui-icon layim-tool-{{item.alias}}" title="{{item.title}}" layim-event="extend" lay-filter="{{ item.alias }}">{{item.icon}}</span>', "{{# }); }}", "{{# if(d.base && d.base.chatLog){ }}", '<span class="layim-tool-log" layim-event="chatLog"><i class="layui-icon">&#xe60e;</i>\u804a\u5929\u8bb0\u5f55</span>', "{{# }; }}", "</div>", '<div class="layim-chat-textarea"><textarea></textarea></div>', '<div class="layim-chat-bottom">', '<div class="layim-chat-send">', "{{# if(!d.base.brief){ }}", '<span class="layim-send-close" layim-event="closeThisChat">\u5173\u95ed</span>', "{{# } }}", '<span class="layim-send-btn" layim-event="send">\u53d1\u9001</span>', '<span class="layim-send-set" layim-event="setSend" lay-type="show"><em class="layui-edge"></em></span>', '<ul class="layui-anim layim-menu-box">', '<li {{d.local.sendHotKey !== "Ctrl+Enter" ? "class=layim-this" : ""}} layim-event="setSend" lay-type="Enter"><i class="layui-icon">&#xe605;</i>\u6309Enter\u952e\u53d1\u9001\u6d88\u606f</li>', '<li {{d.local.sendHotKey === "Ctrl+Enter" ? "class=layim-this" : ""}} layim-event="setSend"  lay-type="Ctrl+Enter"><i class="layui-icon">&#xe605;</i>\u6309Ctrl+Enter\u952e\u53d1\u9001\u6d88\u606f</li>', "</ul>", "</div>", "</div>", "</div>", "</div>"].join(""),
        p = ['<div class="layim-add-box">', '<div class="layim-add-img"><img class="layui-circle" src="{{ d.data.avatar || (layui.cache.layimAssetsPath + \'images/default.png\') }}"><p>{{ d.data.name||"" }}</p></div>', '<div class="layim-add-remark">', '{{# if(d.data.type === "friend" && d.type === "setGroup"){ }}', "<p>\u9009\u62e9\u5206\u7ec4</p>", '{{# } if(d.data.type === "friend"){ }}', '<select class="layui-select" id="LAY_layimGroup">', "{{# layui.each(d.data.group, function(index, item){ }}", '<option value="{{ item.id }}">{{ item.groupname }}</option>', "{{# }); }}", "</select>", "{{# } }}", '{{# if(d.data.type === "group"){ }}', "<p>\u8bf7\u8f93\u5165\u9a8c\u8bc1\u4fe1\u606f</p>", '{{# } if(d.type !== "setGroup"){ }}', '<textarea id="LAY_layimRemark" placeholder="\u9a8c\u8bc1\u4fe1\u606f" class="layui-textarea"></textarea>', "{{# } }}", "</div>", "</div>"].join(""),
        h = ['<li {{ d.mine ? "class=layim-chat-mine" : "" }} {{# if(d.cid){ }}data-cid="{{d.cid}}"{{# } }}>', '<div class="layim-chat-user"><img src="{{ d.avatar || (layui.cache.layimAssetsPath + \'images/default.png\') }}"><cite>', "{{# if(d.mine){ }}", '<i>{{ layui.data.date(d.timestamp) }}</i>{{ d.username||"\u4f5a\u540d" }}', "{{# } else { }}", '{{ d.username||"\u4f5a\u540d" }}<i>{{ layui.data.date(d.timestamp) }}</i>', "{{# } }}", "</cite></div>", '<div class="layim-chat-text">{{ layui.data.content(d.content||"&nbsp") }}</div>', "</li>"].join(""),
        g = '<li class="layim-{{ d.data.type }}{{ d.data.id }} layim-chatlist-{{ d.data.type }}{{ d.data.id }} layim-this" layim-event="tabChat"><img src="{{ d.data.avatar || (layui.cache.layimAssetsPath + \'images/default.png\') }}"><span>{{ d.data.name||"\u4f5a\u540d" }}</span>{{# if(!d.base.brief){ }}<i class="layui-icon" layim-event="closeChat">&#x1007;</i>{{# } }}</li>',
        v = function (a) {
            return a < 10 ? "0" + (0 | a) : a
        };
    layui.data.date = function (a) {
        var i = new Date(a || new Date);
        return i.getFullYear() + "-" + v(i.getMonth() + 1) + "-" + v(i.getDate()) + " " + v(i.getHours()) + ":" + v(i.getMinutes()) + ":" + v(i.getSeconds())
    }, layui.data.content = function (a) {
        var i = function (a) {
            return new RegExp("\\n*\\[" + (a || "") + "(code|pre|div|span|p|table|thead|th|tbody|tr|td|ul|li|ol|li|dl|dt|dd|h2|h3|h4|h5)([\\s\\S]*?)\\]\\n*", "g")
        };
        return a = (a || "").replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;").replace(/@(\S+)(\s+?|$)/g, '@<a href="javascript:;">$1</a>$2').replace(/face\[([^\s\[\]]+?)\]/g, function (a) {
            var i = a.replace(/^face/g, "");
            return '<img alt="' + i + '" title="' + i + '" src="' + X[i] + '">'
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
    var x, b, w, k, C, A = function (a, i, n) {
        return a = a || {}, e.ajax({
            url: a.url,
            type: a.type || "get",
            data: a.data,
            dataType: a.dataType || "json",
            headers: a.headers || {},
            cache: !1,
            success: function (a) {
                0 == a.code ? i && i(a.data || {}) : t.msg(a.msg || (n || "Error") + ": LAYIM_NOT_GET_DATA", {time: 5e3})
            },
            error: function (a, i) {
                window.console && console.log && console.error("LAYIM_DATE_ERROR\uff1a" + i)
            }
        })
    }, S = {message: {}, chat: []}, P = function (a) {
        var i = a.init || {};
        return mine = i.mine || {}, local = layui.data("layim")[mine.id] || {}, obj = {
            base: a,
            local: local,
            mine: mine,
            history: local.history || {}
        }, create = function (i) {
            var t = i.mine || {}, l = layui.data("layim")[t.id] || {}, s = {
                base: a,
                local: l,
                mine: t,
                friend: i.friend || [],
                group: i.group || [],
                history: l.history || {}
            };
            S = e.extend(S, s), H(n(y).render(s)), (l.close || a.min) && L(), layui.each(u.ready, function (a, i) {
                i && i(s)
            })
        }, S = e.extend(S, obj), a.brief ? layui.each(u.ready, function (a, i) {
            i && i(obj)
        }) : void (i.url ? A(i, create, "INIT") : create(i))
    }, H = function (a) {
        return t.open({
            type: 1,
            area: ["260px", "520px"],
            skin: "layui-box layui-layim",
            title: "&#8203;",
            offset: "rb",
            id: "layui-layim",
            shade: !1,
            anim: 2,
            resize: !1,
            content: a,
            success: function (a) {
                x = a, R(a), S.base.right && a.css("margin-left", "-" + S.base.right), b && t.close(b.attr("times"));
                var i = [], n = a.find(".layim-list-history");
                n.find("li").each(function () {
                    i.push(e(this).prop("outerHTML"))
                }), i.length > 0 && (i.reverse(), n.html(i.join(""))), j(), ta.sign()
            },
            cancel: function (a) {
                L();
                var i = layui.data("layim")[S.mine.id] || {};
                return i.close = !0, layui.data("layim", {key: S.mine.id, value: i}), !1
            }
        })
    }, j = function () {
        x.on("contextmenu", function (a) {
            return a.cancelBubble = !0, a.returnValue = !1, !1
        });
        var a = function () {
            t.closeAll("tips")
        };
        x.find(".layim-list-history").on("contextmenu", "li", function (i) {
            var n = e(this),
                l = '<ul data-id="' + n[0].id + '" data-index="' + n.data("index") + '"><li layim-event="menuHistory" data-type="one">\u79fb\u9664\u8be5\u4f1a\u8bdd</li><li layim-event="menuHistory" data-type="all">\u6e05\u7a7a\u5168\u90e8\u4f1a\u8bdd\u5217\u8868</li></ul>';
            n.hasClass("layim-null") || (t.tips(l, this, {
                tips: 1,
                time: 0,
                anim: 5,
                fixed: !0,
                skin: "layui-box layui-layim-contextmenu",
                success: function (a) {
                    var i = function (a) {
                        aa(a)
                    };
                    a.off("mousedown", i).on("mousedown", i)
                }
            }), e(document).off("mousedown", a).on("mousedown", a), e(window).off("resize", a).on("resize", a))
        })
    }, L = function (a) {
        return b && t.close(b.attr("times")), x && x.hide(), S.mine = S.mine || {}, t.open({
            type: 1,
            title: !1,
            id: "layui-layim-close",
            skin: "layui-box layui-layim-min layui-layim-close",
            shade: !1,
            closeBtn: !1,
            anim: 2,
            offset: "rb",
            resize: !1,
            content: '<img src="' + (S.mine.avatar || layui.cache.layimAssetsPath + "images/default.png") + '"><span>' + (a || S.base.title || "\u6211\u7684 IM") + "</span>",
            move: "#layui-layim-close img",
            success: function (a, i) {
                b = a, S.base.right && a.css("margin-left", "-" + S.base.right), a.on("click", function () {
                    t.close(i), x.show();
                    var a = layui.data("layim")[S.mine.id] || {};
                    delete a.close, layui.data("layim", {key: S.mine.id, value: a})
                })
            }
        })
    }, T = function (a) {
        a = a || {};
        var i = e("#layui-layim-chat"), l = {data: a, base: S.base, local: S.local};
        if (!a.id) return t.msg("\u975e\u6cd5\u7528\u6237");
        if (i[0]) {
            var s = w.find(".layim-chat-list"), o = s.find(".layim-chatlist-" + a.type + a.id),
                d = w.find(".layui-layer-max").hasClass("layui-layer-maxmin"), c = i.children(".layim-chat-box");
            return "none" === w.css("display") && w.show(), k && t.close(k.attr("times")), 1 !== s.find("li").length || o[0] || (d || w.css("width", 800), s.css({height: w.height()}).show(), c.css("margin-left", "200px")), o[0] || (s.append(n(g).render(l)), c.append(n(f).render(l)), z(a), E()), M(s.find(".layim-chatlist-" + a.type + a.id)), o[0] || B(), _(a), Q(), C
        }
        l.first = !0;
        var r = C = t.open({
            type: 1,
            area: "600px",
            skin: "layui-box layui-layim-chat",
            id: "layui-layim-chat",
            title: "&#8203;",
            shade: !1,
            maxmin: !0,
            offset: a.offset || "auto",
            anim: a.anim || 0,
            closeBtn: !S.base.brief && 1,
            content: n('<ul class="layui-unselect layim-chat-list">' + g + '</ul><div class="layim-chat-box">' + f + "</div>").render(l),
            success: function (i) {
                w = i, i.css({
                    "min-width": "500px",
                    "min-height": "420px"
                }), z(a), "function" == typeof a.success && a.success(i), Q(), R(i), _(a), B(), O(), layui.each(u.chatChange, function (a, i) {
                    i && i(q())
                }), i.on("dblclick", ".layui-layim-photos", function () {
                    var a = this.src;
                    t.close(T.photosIndex), t.photos({
                        photos: {data: [{alt: "\u5927\u56fe\u6a21\u5f0f", src: a}]},
                        shade: .01,
                        closeBtn: 2,
                        anim: 0,
                        resize: !1,
                        success: function (a, i) {
                            T.photosIndex = i
                        }
                    })
                })
            },
            full: function (a) {
                t.style(r, {width: "100%", height: "100%"}, !0), E()
            },
            resizing: E,
            restore: E,
            min: function () {
                return I(), !1
            },
            end: function () {
                t.closeAll("tips"), w = null
            }
        });
        return r
    }, z = function (a) {
        e(".layim-" + a.type + a.id).each(function () {
            e(this).hasClass("layim-list-gray") && layui.layim.setFriendStatus(a.id, "offline")
        })
    }, E = function () {
        var a = w.find(".layim-chat-list"), i = w.find(".layim-chat-main"), e = w.height();
        a.css({height: e}), i.css({height: e - 20 - 80 - 158})
    }, I = function (a) {
        var i = a || q().data, n = layui.layim.cache().base;
        w && !a && w.hide(), t.close(I.index), I.index = t.open({
            type: 1,
            title: !1,
            skin: "layui-box layui-layim-min",
            shade: !1,
            closeBtn: !1,
            anim: i.anim || 2,
            offset: "b",
            move: "#layui-layim-min",
            resize: !1,
            area: ["182px", "50px"],
            content: '<img id="layui-layim-min" src="' + (i.avatar || layui.cache.layimAssetsPath + "images/default.png") + '"><span>' + i.name + "</span>",
            success: function (i, l) {
                a || (k = i), n.minRight && t.style(l, {left: e(window).width() - i.outerWidth() - parseFloat(n.minRight)}), i.find(".layui-layer-content span").on("click", function () {
                    t.close(l), a ? layui.each(S.chat, function (a, i) {
                        T(i)
                    }) : w.show(), a && (S.chat = [], Z())
                }), i.find(".layui-layer-content img").on("click", function (a) {
                    aa(a)
                })
            }
        })
    }, N = function (a, i) {
        return a = a || {}, t.close(N.index), N.index = t.open({
            type: 1,
            area: "430px",
            title: {friend: "\u6dfb\u52a0\u597d\u53cb", group: "\u52a0\u5165\u7fa4\u7ec4"}[a.type] || "",
            shade: !1,
            resize: !1,
            btn: i ? ["\u786e\u8ba4", "\u53d6\u6d88"] : ["\u53d1\u9001\u7533\u8bf7", "\u5173\u95ed"],
            content: n(p).render({
                data: {
                    name: a.username || a.groupname,
                    avatar: a.avatar || layui.cache.layimAssetsPath + "images/default.png",
                    group: a.group || parent.layui.layim.cache().friend || [],
                    type: a.type
                }, type: i
            }),
            yes: function (e, t) {
                var n = t.find("#LAY_layimGroup"), l = t.find("#LAY_layimRemark");
                i ? a.submit && a.submit(n.val(), e) : a.submit && a.submit(n.val(), l.val(), e)
            }
        })
    }, M = function (a, i) {
        a = a || e(".layim-chat-list ." + o);
        var n = a.index() === -1 ? 0 : a.index(), l = ".layim-chat", d = w.find(l).eq(n),
            c = w.find(".layui-layer-max").hasClass("layui-layer-maxmin");
        if (i) {
            a.hasClass(o) && M(0 === n ? a.next() : a.prev());
            var r = w.find(l).length;
            return 1 === r ? t.close(C) : (a.remove(), d.remove(), 2 === r && (w.find(".layim-chat-list").hide(), c || w.css("width", "600px"), w.find(".layim-chat-box").css("margin-left", 0)), !1)
        }
        a.addClass(o).siblings().removeClass(o), d.addClass(s).siblings(l).removeClass(s), d.find("textarea").focus(), layui.each(u.chatChange, function (a, i) {
            i && i(q())
        }), O()
    }, O = function () {
        var a = q(), i = S.message[a.data.type + a.data.id];
        i && delete S.message[a.data.type + a.data.id]
    }, q = c.prototype.thisChat = function () {
        if (w) {
            var a = e(".layim-chat-list ." + o).index(), i = w.find(".layim-chat").eq(a),
                t = JSON.parse(decodeURIComponent(i.find(".layim-chat-tool").data("json")));
            return {elem: i, data: t, textarea: i.find("textarea")}
        }
    }, R = function (a) {
        var i = layui.data("layim")[S.mine.id] || {}, e = i.skin;
        a.css({
            "background-image": e ? "url(" + e + ")" : function () {
                return S.base.initSkin ? "url(" + (layui.cache.layimAssetsPath + "skin/" + S.base.initSkin) + ")" : "none"
            }()
        })
    }, _ = function (a) {
        var i = layui.data("layim")[S.mine.id] || {}, e = {}, t = i.history || {}, l = t[a.type + a.id];
        if (x) {
            var s = x.find(".layim-list-history");
            if (a.historyTime = (new Date).getTime(), t[a.type + a.id] = a, i.history = t, layui.data("layim", {
                key: S.mine.id,
                value: i
            }), !l) {
                e[a.type + a.id] = a;
                var o = n(r({type: "history", item: "d.data"})).render({data: e});
                s.prepend(o), s.find(".layim-null").remove()
            }
        }
    }, $ = function () {
        var a = {
            username: S.mine ? S.mine.username : "\u8bbf\u5ba2",
            avatar: S.mine ? S.mine.avatar : layui.cache.layimAssetsPath + "images/default.png",
            id: S.mine ? S.mine.id : null,
            mine: !0
        }, i = q(), e = i.elem.find(".layim-chat-main ul"), l = S.base.maxLength || 3e3;
        if (a.content = i.textarea.val(), "" !== a.content.replace(/\s/g, "")) {
            if (a.content.length > l) return t.msg("\u5185\u5bb9\u6700\u957f\u4e0d\u80fd\u8d85\u8fc7" + l + "\u4e2a\u5b57\u7b26");
            e.append(n(h).render(a));
            var s = {mine: a, to: i.data}, o = {
                username: s.mine.username,
                avatar: s.mine.avatar || layui.cache.layimAssetsPath + "images/default.png",
                id: s.to.id,
                type: s.to.type,
                content: s.mine.content,
                timestamp: (new Date).getTime(),
                mine: !0
            };
            V(o), layui.each(u.sendMessage, function (a, i) {
                i && i(s)
            })
        }
        Z(), i.textarea.val("").focus()
    }, D = function (a) {
        if (a = a || {}, window.Notification) if ("granted" === Notification.permission) {
            new Notification(a.title || "", {
                body: a.content || "",
                icon: a.avatar || layui.cache.layimAssetsPath + "images/default.png"
            })
        } else Notification.requestPermission()
    }, J = function () {
        if (!(l.ie && l.ie < 9)) {
            var a = document.createElement("audio");
            a.src = layui.cache.layimAssetsPath + "voice/" + S.base.voice, a.play()
        }
    }, F = {}, G = function (a) {
        a = a || {};
        var i = e(".layim-chatlist-" + a.type + a.id), t = {}, l = i.index();
        if (a.timestamp = a.timestamp || (new Date).getTime(), a.fromid == S.mine.id && (a.mine = !0), a.system || V(a), F = JSON.parse(JSON.stringify(a)), S.base.voice && J(), !w && a.content || l === -1) {
            if (S.message[a.type + a.id]) S.message[a.type + a.id].push(a); else if (S.message[a.type + a.id] = [a], "friend" === a.type) {
                var s;
                layui.each(S.friend, function (i, e) {
                    if (layui.each(e.list, function (i, e) {
                        if (e.id == a.id) return e.type = "friend", e.name = e.username, S.chat.push(e), s = !0
                    }), s) return !0
                }), s || (a.name = a.username, a.temporary = !0, S.chat.push(a))
            } else if ("group" === a.type) {
                var o;
                layui.each(S.group, function (i, e) {
                    if (e.id == a.id) return e.type = "group", e.name = e.groupname, S.chat.push(e), o = !0
                }), o || (a.name = a.groupname, S.chat.push(a))
            } else a.name = a.name || a.username || a.groupname, S.chat.push(a);
            if ("group" === a.type && layui.each(S.group, function (i, e) {
                if (e.id == a.id) return t.avatar = e.avatar || layui.cache.layimAssetsPath + "images/default.png", !0
            }), !a.system) return S.base.notice && D({
                title: "\u6765\u81ea " + a.username + " \u7684\u6d88\u606f",
                content: a.content,
                avatar: t.avatar || a.avatar || layui.cache.layimAssetsPath + "images/default.png"
            }), I({
                name: "\u6536\u5230\u65b0\u6d88\u606f",
                avatar: t.avatar || a.avatar || layui.cache.layimAssetsPath + "images/default.png",
                anim: 6
            })
        }
        if (w) {
            var d = q();
            d.data.type + d.data.id !== a.type + a.id && (i.addClass("layui-anim layer-anim-06"), setTimeout(function () {
                i.removeClass("layui-anim layer-anim-06")
            }, 300));
            var u = w.find(".layim-chat").eq(l), c = u.find(".layim-chat-main ul");
            a.system ? l !== -1 && c.append('<li class="layim-chat-system"><span>' + a.content + "</span></li>") : "" !== a.content.replace(/\s/g, "") && c.append(n(h).render(a)), Z()
        }
    }, K = "layui-anim-loop layer-anim-05", Y = function (a) {
        var i = x.find(".layim-tool-msgbox");
        i.find("span").addClass(K).html(a)
    }, V = function (a) {
        var i = layui.data("layim")[S.mine.id] || {};
        i.chatlog = i.chatlog || {};
        var e = i.chatlog[a.type + a.id];
        if (e) {
            var t;
            layui.each(e, function (i, e) {
                e.timestamp === a.timestamp && e.type === a.type && e.id === a.id && e.content === a.content && (t = !0)
            }), t || a.fromid == S.mine.id || e.push(a), e.length > d && e.shift()
        } else i.chatlog[a.type + a.id] = [a];
        layui.data("layim", {key: S.mine.id, value: i})
    }, B = function () {
        var a = layui.data("layim")[S.mine.id] || {}, i = q(), e = a.chatlog || {},
            t = i.elem.find(".layim-chat-main ul");
        layui.each(e[i.data.type + i.data.id], function (a, i) {
            t.append(n(h).render(i))
        }), Z()
    }, U = function (a) {
        var i, e = {}, l = x.find(".layim-list-" + a.type);
        if (S[a.type]) if ("friend" === a.type) layui.each(S.friend, function (n, l) {
            if (a.groupid == l.id) return layui.each(S.friend[n].list, function (e, t) {
                if (t.id == a.id) return i = !0
            }), i ? t.msg("\u597d\u53cb [" + (a.username || "") + "] \u5df2\u7ecf\u5b58\u5728\u5217\u8868\u4e2d", {anim: 6}) : (S.friend[n].list = S.friend[n].list || [], e[S.friend[n].list.length] = a, a.groupIndex = n, S.friend[n].list.push(a), !0)
        }); else if ("group" === a.type) {
            if (layui.each(S.group, function (e, t) {
                if (t.id == a.id) return i = !0
            }), i) return t.msg("\u60a8\u5df2\u662f [" + (a.groupname || "") + "] \u7684\u7fa4\u6210\u5458", {anim: 6});
            e[S.group.length] = a, S.group.push(a)
        }
        if (!i) {
            var s = n(r({
                type: a.type,
                item: "d.data",
                index: "friend" === a.type ? "data.groupIndex" : null
            })).render({data: e});
            if ("friend" === a.type) {
                var o = l.find(">li").eq(a.groupIndex);
                o.find(".layui-layim-list").append(s), o.find(".layim-count").html(S.friend[a.groupIndex].list.length), o.find(".layim-null")[0] && o.find(".layim-null").remove()
            } else "group" === a.type && (l.append(s), l.find(".layim-null")[0] && l.find(".layim-null").remove())
        }
    }, W = function (a) {
        var i = x.find(".layim-list-" + a.type);
        S[a.type] && ("friend" === a.type ? layui.each(S.friend, function (e, t) {
            layui.each(t.list, function (t, n) {
                if (a.id == n.id) {
                    var l = i.find(">li").eq(e);
                    l.find(".layui-layim-list>li");
                    return l.find(".layui-layim-list>li").eq(t).remove(), S.friend[e].list.splice(t, 1), l.find(".layim-count").html(S.friend[e].list.length), 0 === S.friend[e].list.length && l.find(".layui-layim-list").html('<li class="layim-null">\u8be5\u5206\u7ec4\u4e0b\u5df2\u65e0\u597d\u53cb\u4e86</li>'), !0
                }
            })
        }) : "group" === a.type && layui.each(S.group, function (e, t) {
            if (a.id == t.id) return i.find(">li").eq(e).remove(), S.group.splice(e, 1), 0 === S.group.length && i.html('<li class="layim-null">\u6682\u65e0\u7fa4\u7ec4</li>'), !0
        }))
    }, Z = function () {
        var a = q(), i = a.elem.find(".layim-chat-main"), e = i.find("ul"), t = e.find("li").length;
        if (t >= d) {
            var n = e.find("li").eq(0);
            e.prev().hasClass("layim-chat-system") || e.before('<div class="layim-chat-system"><span layim-event="chatLog">\u67e5\u770b\u66f4\u591a\u8bb0\u5f55</span></div>'), t > d && n.remove()
        }
        i.scrollTop(i[0].scrollHeight + 1e3), i.find("ul li:last").find("img").load(function () {
            i.scrollTop(i[0].scrollHeight + 1e3)
        })
    }, Q = function () {
        var a = q(), i = a.textarea;
        i.focus(), i.off("keydown").on("keydown", function (a) {
            var e = layui.data("layim")[S.mine.id] || {}, t = a.keyCode;
            if ("Ctrl+Enter" === e.sendHotKey) return void (a.ctrlKey && 13 === t && $());
            if (13 === t) {
                if (a.ctrlKey) return i.val(i.val() + "\n");
                if (a.shiftKey) return;
                a.preventDefault(), $()
            }
        })
    }, X = function () {
        var a = ["[\u5fae\u7b11]", "[\u563b\u563b]", "[\u54c8\u54c8]", "[\u53ef\u7231]", "[\u53ef\u601c]", "[\u6316\u9f3b]", "[\u5403\u60ca]", "[\u5bb3\u7f9e]", "[\u6324\u773c]", "[\u95ed\u5634]", "[\u9119\u89c6]", "[\u7231\u4f60]", "[\u6cea]", "[\u5077\u7b11]", "[\u4eb2\u4eb2]", "[\u751f\u75c5]", "[\u592a\u5f00\u5fc3]", "[\u767d\u773c]", "[\u53f3\u54fc\u54fc]", "[\u5de6\u54fc\u54fc]", "[\u5618]", "[\u8870]", "[\u59d4\u5c48]", "[\u5410]", "[\u54c8\u6b20]", "[\u62b1\u62b1]", "[\u6012]", "[\u7591\u95ee]", "[\u998b\u5634]", "[\u62dc\u62dc]", "[\u601d\u8003]", "[\u6c57]", "[\u56f0]", "[\u7761]", "[\u94b1]", "[\u5931\u671b]", "[\u9177]", "[\u8272]", "[\u54fc]", "[\u9f13\u638c]", "[\u6655]", "[\u60b2\u4f24]", "[\u6293\u72c2]", "[\u9ed1\u7ebf]", "[\u9634\u9669]", "[\u6012\u9a82]", "[\u4e92\u7c89]", "[\u5fc3]", "[\u4f24\u5fc3]", "[\u732a\u5934]", "[\u718a\u732b]", "[\u5154\u5b50]", "[ok]", "[\u8036]", "[good]", "[NO]", "[\u8d5e]", "[\u6765]", "[\u5f31]", "[\u8349\u6ce5\u9a6c]", "[\u795e\u9a6c]", "[\u56e7]", "[\u6d6e\u4e91]", "[\u7ed9\u529b]", "[\u56f4\u89c2]", "[\u5a01\u6b66]", "[\u5965\u7279\u66fc]", "[\u793c\u7269]", "[\u949f]", "[\u8bdd\u7b52]", "[\u8721\u70db]", "[\u86cb\u7cd5]"],
            i = {};
        return layui.each(a, function (a, e) {
            i[e] = layui.cache.layimAssetsPath + "images/face/" + a + ".gif"
        }), i
    }(), aa = layui.stope, ia = function (a, i) {
        var e, t = a.value;
        a.focus(), document.selection ? (e = document.selection.createRange(), document.selection.empty(), e.text = i) : (e = [t.substring(0, a.selectionStart), i, t.substr(a.selectionEnd)], a.focus(), a.value = e.join(""))
    }, ea = "layui-anim-upbit", ta = {
        status: function (a, i) {
            var t = function () {
                a.next().hide().removeClass(ea)
            }, n = a.attr("lay-type");
            if ("show" === n) aa(i), a.next().show().addClass(ea), e(document).off("click", t).on("click", t); else {
                var l = a.parent().prev();
                a.addClass(o).siblings().removeClass(o), l.html(a.find("cite").html()), l.removeClass("layim-status-" + ("online" === n ? "hide" : "online")).addClass("layim-status-" + n), layui.each(u.online, function (a, i) {
                    i && i(n)
                })
            }
        }, sign: function () {
            var a = x.find(".layui-layim-remark");
            a.on("change", function () {
                var a = this.value;
                layui.each(u.sign, function (i, e) {
                    e && e(a)
                })
            }), a.on("keyup", function (a) {
                var i = a.keyCode;
                13 === i && this.blur()
            })
        }, tab: function (a) {
            var i, e = ".layim-tab-content", t = x.find(".layui-layim-tab>li");
            "number" == typeof a ? (i = a, a = t.eq(i)) : i = a.index(), i > 2 ? t.removeClass(o) : (ta.tab.index = i, a.addClass(o).siblings().removeClass(o)), x.find(e).eq(i).addClass(s).siblings(e).removeClass(s)
        }, spread: function (a) {
            var i = a.attr("lay-type"), e = "true" === i ? "false" : "true", t = layui.data("layim")[S.mine.id] || {};
            a.next()["true" === i ? "removeClass" : "addClass"](s), t["spread" + a.parent().index()] = e, layui.data("layim", {
                key: S.mine.id,
                value: t
            }), a.attr("lay-type", e), a.find(".layui-icon").html("true" === e ? "&#xe61a;" : "&#xe602;")
        }, search: function (a) {
            var i = x.find(".layui-layim-search"), e = x.find("#layui-layim-search"), t = i.find("input"),
                n = function (a) {
                    var i = t.val().replace(/\s/);
                    if ("" === i) ta.tab(0 | ta.tab.index); else {
                        for (var n = [], l = S.friend || [], s = S.group || [], o = "", d = 0; d < l.length; d++) for (var u = 0; u < (l[d].list || []).length; u++) l[d].list[u].username.indexOf(i) !== -1 && (l[d].list[u].type = "friend", l[d].list[u].index = d, l[d].list[u].list = u, n.push(l[d].list[u]));
                        for (var c = 0; c < s.length; c++) s[c].groupname.indexOf(i) !== -1 && (s[c].type = "group", s[c].index = c, s[c].list = c, n.push(s[c]));
                        if (n.length > 0) for (var r = 0; r < n.length; r++) o += '<li layim-event="chat" data-type="' + n[r].type + '" data-index="' + n[r].index + '" data-list="' + n[r].list + '"><img src="' + (n[r].avatar || layui.cache.layimAssetsPath + "images/default.png") + '"><span>' + (n[r].username || n[r].groupname || "\u4f5a\u540d") + "</span><p>" + (n[r].remark || n[r].sign || "") + "</p></li>"; else o = '<li class="layim-null">\u65e0\u641c\u7d22\u7ed3\u679c</li>';
                        e.html(o), ta.tab(3)
                    }
                };
            !S.base.isfriend && S.base.isgroup ? ta.tab.index = 1 : S.base.isfriend || S.base.isgroup || (ta.tab.index = 2), i.show(), t.focus(), t.off("keyup", n).on("keyup", n)
        }, closeSearch: function (a) {
            a.parent().hide(), ta.tab(0 | ta.tab.index)
        }, msgbox: function () {
            var a = x.find(".layim-tool-msgbox");
            return t.close(ta.msgbox.index), a.find("span").removeClass(K).html(""), ta.msgbox.index = t.open({
                type: 2,
                title: "\u6d88\u606f\u76d2\u5b50",
                shade: !1,
                maxmin: !0,
                area: ["600px", "520px"],
                skin: "layui-box layui-layer-border",
                resize: !1,
                content: S.base.msgbox
            })
        }, find: function () {
            return t.close(ta.find.index), ta.find.index = t.open({
                type: 2,
                title: "\u67e5\u627e",
                shade: !1,
                maxmin: !0,
                area: ["1000px", "520px"],
                skin: "layui-box layui-layer-border",
                resize: !1,
                content: S.base.find
            })
        }, skin: function () {
            t.open({
                type: 1,
                title: "\u66f4\u6362\u80cc\u666f",
                shade: !1,
                area: "300px",
                skin: "layui-box layui-layer-border",
                id: "layui-layim-skin",
                zIndex: 66666666,
                resize: !1,
                content: n(m).render({skin: S.base.skin})
            })
        }, about: function () {
            t.alert("\u7248\u672c\uff1a v" + i, {title: "\u5173\u4e8e", shade: !1})
        }, setSkin: function (a) {
            var i = a.attr("src"), e = layui.data("layim")[S.mine.id] || {};
            e.skin = i, i || delete e.skin, layui.data("layim", {key: S.mine.id, value: e});
            try {
                x.css({"background-image": i ? "url(" + i + ")" : "none"}), w.css({"background-image": i ? "url(" + i + ")" : "none"})
            } catch (t) {
            }
            layui.each(u.setSkin, function (a, e) {
                var t = (i || "").replace(layui.cache.layimAssetsPath + "skin/", "");
                e && e(t, i)
            })
        }, chat: function (a) {
            var i = layui.data("layim")[S.mine.id] || {}, e = a.data("type"), t = a.data("index"),
                n = a.attr("data-list") || a.index(), l = {};
            "friend" === e ? l = S[e][t].list[n] : "group" === e ? l = S[e][n] : "history" === e && (l = (i.history || {})[t] || {}), l.name = l.name || l.username || l.groupname, "history" !== e && (l.type = e), T(l)
        }, tabChat: function (a) {
            M(a)
        }, closeChat: function (a, i) {
            M(a.parent(), 1), aa(i)
        }, closeThisChat: function () {
            M(null, 1)
        }, groupMembers: function (a, i) {
            var n = a.find(".layui-icon"), l = function () {
                n.html("&#xe61a;"), a.data("down", null), t.close(ta.groupMembers.index)
            }, s = function (a) {
                aa(a)
            };
            a.data("down") ? l() : (n.html("&#xe619;"), a.data("down", !0), ta.groupMembers.index = t.tips('<ul class="layim-members-list"></ul>', a, {
                tips: 3,
                time: 0,
                anim: 5,
                fixed: !0,
                skin: "layui-box layui-layim-members",
                success: function (i) {
                    var t = S.base.members || {}, n = q(), s = i.find(".layim-members-list"), o = "", d = {},
                        c = w.find(".layui-layer-max").hasClass("layui-layer-maxmin"),
                        r = "none" === w.find(".layim-chat-list").css("display");
                    c && s.css({width: e(window).width() - 22 - (r || 200)}), t.data = e.extend(t.data, {id: n.data.id}), A(t, function (i) {
                        layui.each(i.list, function (a, i) {
                            o += '<li data-uid="' + i.id + '"><a href="javascript:;"><img src="' + (i.avatar || layui.cache.layimAssetsPath + "images/default.png") + '"><cite>' + i.username + "</cite></a></li>", d[i.id] = i
                        }), s.html(o), a.find(".layim-chat-members").html(i.members || (i.list || []).length + "\u4eba"), s.find("li").on("click", function () {
                            var a = e(this).data("uid"), i = d[a];
                            T({
                                name: i.username,
                                type: "friend",
                                avatar: i.avatar || layui.cache.layimAssetsPath + "images/default.png",
                                id: i.id
                            }), l()
                        }), layui.each(u.members, function (a, e) {
                            e && e(i)
                        })
                    }), i.on("mousedown", function (a) {
                        aa(a)
                    })
                }
            }), e(document).off("mousedown", l).on("mousedown", l), e(window).off("resize", l).on("resize", l), a.off("mousedown", s).on("mousedown", s))
        }, send: function () {
            $()
        }, setSend: function (a, i) {
            var t = ta.setSend.box = a.siblings(".layim-menu-box"), n = a.attr("lay-type");
            if ("show" === n) aa(i), t.show().addClass(ea), e(document).off("click", ta.setSendHide).on("click", ta.setSendHide); else {
                a.addClass(o).siblings().removeClass(o);
                var l = layui.data("layim")[S.mine.id] || {};
                l.sendHotKey = n, layui.data("layim", {key: S.mine.id, value: l}), ta.setSendHide(i, a.parent())
            }
        }, setSendHide: function (a, i) {
            (i || ta.setSend.box).hide().removeClass(ea)
        }, face: function (a, i) {
            var n = "", l = q();
            for (var s in X) n += '<li title="' + s + '"><img src="' + X[s] + '"></li>';
            n = '<ul class="layui-clear layim-face-list">' + n + "</ul>", ta.face.index = t.tips(n, a, {
                tips: 1,
                time: 0,
                fixed: !0,
                skin: "layui-box layui-layim-face",
                success: function (a) {
                    a.find(".layim-face-list>li").on("mousedown", function (a) {
                        aa(a)
                    }).on("click", function () {
                        ia(l.textarea[0], "face" + this.title + " "), t.close(ta.face.index)
                    })
                }
            }), e(document).off("mousedown", ta.faceHide).on("mousedown", ta.faceHide), e(window).off("resize", ta.faceHide).on("resize", ta.faceHide), aa(i)
        }, faceHide: function () {
            t.close(ta.face.index)
        }, image: function (a) {
            var i = a.data("type") || "images", e = {images: "uploadImage", file: "uploadFile"}, n = q(),
                l = S.base[e[i]] || {};
            layui.upload.render({
                url: l.url || "",
                method: l.type,
                elem: a.find("input")[0],
                accept: i,
                done: function (a) {
                    0 == a.code ? (a.data = a.data || {}, "images" === i ? ia(n.textarea[0], "img[" + (a.data.src || "") + "]") : "file" === i && ia(n.textarea[0], "file(" + (a.data.src || "") + ")[" + (a.data.name || "\u4e0b\u8f7d\u6587\u4ef6") + "]"), $()) : t.msg(a.msg || "\u4e0a\u4f20\u5931\u8d25")
                }
            })
        }, media: function (a) {
            var i = a.data("type"), n = {audio: "\u97f3\u9891", video: "\u89c6\u9891"}, l = q();
            t.prompt({
                title: "\u8bf7\u8f93\u5165\u7f51\u7edc" + n[i] + "\u5730\u5740",
                shade: !1,
                offset: [a.offset().top - e(window).scrollTop() - 158 + "px", a.offset().left + "px"]
            }, function (a, e) {
                ia(l.textarea[0], i + "[" + a + "]"), $(), t.close(e)
            })
        }, extend: function (a) {
            var i = a.attr("lay-filter"), e = q();
            layui.each(u["tool(" + i + ")"], function (i, t) {
                t && t.call(a, function (a) {
                    ia(e.textarea[0], a)
                }, $, e)
            })
        }, playAudio: function (a) {
            var i = a.data("audio"), e = i || document.createElement("audio"), n = function () {
                e.pause(), a.removeAttr("status"), a.find("i").html("&#xe652;")
            };
            return a.data("error") ? t.msg("\u64ad\u653e\u97f3\u9891\u6e90\u5f02\u5e38") : e.play ? void (a.attr("status") ? n() : (i || (e.src = a.data("src")), e.play(), a.attr("status", "pause"), a.data("audio", e), a.find("i").html("&#xe651;"), e.onended = function () {
                n()
            }, e.onerror = function () {
                t.msg("\u64ad\u653e\u97f3\u9891\u6e90\u5f02\u5e38"), a.data("error", !0), n()
            })) : t.msg("\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301audio")
        }, playVideo: function (a) {
            var i = a.data("src"), e = document.createElement("video");
            return e.play ? (t.close(ta.playVideo.index), void (ta.playVideo.index = t.open({
                type: 1,
                title: "\u64ad\u653e\u89c6\u9891",
                area: ["460px", "300px"],
                maxmin: !0,
                shade: !1,
                content: '<div style="background-color: #000; height: 100%;"><video style="position: absolute; width: 100%; height: 100%;" src="' + i + '" loop="loop" autoplay="autoplay"></video></div>'
            }))) : t.msg("\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301video")
        }, chatLog: function (a) {
            var i = q();
            return S.base.chatLog ? (t.close(ta.chatLog.index), ta.chatLog.index = t.open({
                type: 2,
                maxmin: !0,
                title: "\u4e0e " + i.data.name + " \u7684\u804a\u5929\u8bb0\u5f55",
                area: ["450px", "100%"],
                shade: !1,
                offset: "rb",
                skin: "layui-box",
                anim: 2,
                id: "layui-layim-chatlog",
                content: S.base.chatLog + "?id=" + i.data.id + "&type=" + i.data.type
            })) : t.msg("\u672a\u5f00\u542f\u66f4\u591a\u804a\u5929\u8bb0\u5f55")
        }, menuHistory: function (a, i) {
            var n = layui.data("layim")[S.mine.id] || {}, l = a.parent(), s = a.data("type"),
                o = x.find(".layim-list-history"),
                d = '<li class="layim-null">\u6682\u65e0\u5386\u53f2\u4f1a\u8bdd</li>';
            if ("one" === s) {
                var u = n.history;
                delete u[l.data("index")], n.history = u, layui.data("layim", {
                    key: S.mine.id,
                    value: n
                }), e(".layim-list-history li.layim-" + l.data("index")).remove(), 0 === o.find("li").length && o.html(d)
            } else "all" === s && (delete n.history, layui.data("layim", {key: S.mine.id, value: n}), o.html(d));
            t.closeAll("tips")
        }
    };
    a("layim", new c)
}).link(layui.cache.layimAssetsPath + "layim.css", "skinlayimcss");