;/* Version 0f18582aadae64fbc73c6dcb04bb96c6 v:4.5.9.2098, c:3256481e937cf611d06fcbdf9e565a27826c9df6, b:4.5.9.2098 */(function () {
    new function () {
        if (!window.ADRUM && !0 !== window["adrum-disable"]) {
            var g = window.ADRUM = {}, A = window.console, y = A && "function" == typeof A.log ? A : { log: function () { } }; window["adrum-start-time"] = window["adrum-start-time"] || (new Date).getTime(); var u = this && this.gc || function () {
                var a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, k) { a.__proto__ = k } || function (a, k) { for (var e in k) k.hasOwnProperty(e) && (a[e] = k[e]) }; return function (b, k) {
                    function e() { this.constructor = b } a(b, k); b.prototype = null === k ? Object.create(k) :
                        (e.prototype = k.prototype, new e)
                }
            }(); (function (a) { (function (a) { a.setUpMonitors = function () { for (var a = [], b = 0; b < arguments.length; b++)a[b] = arguments[b]; for (b = 0; b < a.length; b++) { var c = a[b]; c && c.setUp() } } })(a.monitor || (a.monitor = {})) })(g || (g = {})); (function (a) {
                (function (b) {
                    function k(a) { return b.l.slice.apply(a, b.l.slice.call(arguments, 1)) } function e(a, n) { return c(b.l.setTimeout.apply) ? b.l.setTimeout.apply(window, arguments) : b.l.setTimeout(a, n) } function c(a) { return "undefined" !== typeof a && null !== a } function f(a) {
                        return "object" ==
                            typeof a && !b.isArray(a) && null !== a
                    } function l(a) { return "function" == typeof a || !1 } function m(a) { return "string" == typeof a } function n(a) { return "number" == typeof a } function q(a, c) { for (var n in c) { var m = c[n]; if (t(c, n)) { var l = a[n]; f(m) && f(l) ? q(l, m) : b.isArray(l) && b.isArray(m) ? a[n] = l.concat(m) : a[n] = m } } return a } function t(a, b) { return Object.prototype.hasOwnProperty.call(a, b) && c(a[b]) } function p(a) { return m(a) ? a.replace(/^\s*/, "").replace(/\s*$/, "") : a } function r() { return b.l.cb && l(b.l.cb.now) } function s() {
                        return r() ?
                            Math.round(b.l.cb.now() + w()) : (new Date).getTime()
                    } function w() { var a = b.l.cb, a = a && a.timing && n(a.timing.navigationStart) ? a.timing.navigationStart : window["adrum-start-time"]; c(a) || (a = s()); return a } function x(a, b) { var c = Array.prototype[a]; return c ? g(c) : B(a, b) } function g(a) { return function (c) { return a.apply(c, b.l.slice.call(arguments, 1)) } } function B(a, b) {
                        return function (n, m) {
                            if (!c(n)) throw new TypeError(a + " called on null or undefined"); if (!l(m)) throw new TypeError(m + " is not a function"); return b.apply(null,
                                arguments)
                        }
                    } function C(a, b, c) { var n = Object(a), m = n.length >>> 0, f = 0; if (3 > arguments.length) { for (; f < m && !(f in n);)f++; if (f >= m) throw new TypeError("Reduce of empty array with no initial value"); c = n[f++] } for (; f < m; f++)f in n && (c = b(c, n[f], f, n)); return c } function z(a, c, n) { return b.reduce(a, function (a, b, m, f) { a[m] = c.call(n, b, m, f); return a }, Array(a.length >>> 0)) } function D(a, c, n) { return b.reduce(a, function (a, b, m, f) { c.call(n, b, m, f) && a.push(b); return a }, []) } function E(a, b, c) {
                        a = Object(a); for (var n = a.length >>> 0, m =
                            0; m < n; m++)if (m in a && b.call(c, a[m], m, a)) return !0; return !1
                    } function F(a, c, n) { return !b.some(a, function (a) { return !c.call(n, a) }) } function N(a, c, n) { b.reduce(a, function (a, b, m, f) { c.call(n, b, m, f) }, void 0) } b.l = { isArray: Array.isArray, toString: Object.prototype.toString, slice: Array.prototype.slice, setTimeout: window.setTimeout, setInterval: window.setInterval, cb: window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance, assign: Object.assign }; b.qa = k; b.oSTO = e; b.isCORSSupported = function () {
                        var a =
                            window.JSON && l(JSON.stringify); return c(window.XMLHttpRequest) && "withCredentials" in new XMLHttpRequest && a
                    }; b.isDefined = c; b.Bk = function (a) { return "number" === typeof a && !window.isNaN(a) }; b.isArray = l(b.l.isArray) && l(b.l.isArray.bind) ? b.l.isArray.bind(Array) : function (a) { return b.l.toString.call(a) === b.l.toString.call([]) }; b.isObject = f; b.isFunction = l; b.isString = m; b.isNumber = n; b.isBoolean = function (a) { return "boolean" == typeof a }; b.max = function (a, b) {
                        return Math.max(isNaN(a) ? Number.NEGATIVE_INFINITY : a, isNaN(b) ?
                            Number.NEGATIVE_INFINITY : b)
                    }; b.Rb = e; b.Jn = function (a, b) { e(a, b || 1E4) }; b.addEventListener = function (b, c, n, m) { function f() { try { return n.apply(this, k(arguments)) } catch (m) { a.exception(m, "M1", c, b, m) } } void 0 === m && (m = !1); a.isDebug && a.log("M0", c, b); f.T = !0; b.addEventListener ? b.addEventListener(c, f, m) : b.attachEvent && b.attachEvent("on" + c, f) }; b.loadScriptAsync = function (b) {
                        var c = document.createElement("script"); c.type = "text/javascript"; c.async = !0; c.src = b; var n = document.getElementsByTagName("script")[0]; n ? (n.parentNode.insertBefore(c,
                            n), a.log("M2", b)) : a.log("M3", b)
                    }; b.mergeJSON = q; b.hasOwnPropertyDefined = t; b.Je = function (a, c) { if (b.isFunction(Object.getPrototypeOf)) for (; b.isDefined(a) && !t(a, c);)a = Object.getPrototypeOf(a); return a }; b.Em = function (a) { return c(a) ? b.isArray(a) ? a : [a] : [] }; b.Nn = function (a, b) { return null != a && a.slice(0, b.length) == b }; b.generateGUID = function (a) {
                        return c(a) && l(a.getRandomValues) && function () {
                            function b(a) { a = a.toString(16); return "0000".substr(a.length) + a } var c = new Uint16Array(8); a.getRandomValues(c); return b(c[0]) +
                                b(c[1]) + "_" + b(c[2]) + "_" + b(c[3]) + "_" + b(c[4]) + "_" + b(c[5]) + b(c[6]) + b(c[7])
                        }
                    }(window.crypto || window.msCrypto) || function () { return "xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx".replace(/[xy]/g, function (a) { var b = 16 * Math.random() | 0; return ("x" == a ? b : b & 3 | 8).toString(16) }) }; b.tryExtractingErrorStack = function (a) { return a ? (a = a.stack) && "string" === typeof a ? a : null : null }; b.trim = p; b.ol = function (a) {
                        var b = {}, c, n; if (!a) return b; var m = a.split("\n"); for (n = 0; n < m.length; n++) {
                            var f = m[n]; c = f.indexOf(":"); a = p(f.substr(0, c)).toLowerCase();
                            c = p(f.substr(c + 1)); a && (b[a] = b[a] ? b[a] + (", " + c) : c)
                        } return b
                    }; b.tryPeriodically = function (a, b, c, n) { function m() { if (b()) c && c(); else { var l = a(++f); 0 < l ? e(m, l) : n && n() } } var f = 0; m() }; b.qe = function (a) { return a.charAt(0).toUpperCase() + a.slice(1) }; b.Jf = function (a) { for (var b = [], c = 1; c < arguments.length; c++)b[c - 1] = arguments[c]; return function () { for (var c = [], n = 0; n < arguments.length; n++)c[n] = arguments[n]; return a.apply(this, b.concat(c)) } }; b.un = r; b.now = s; b.Wa = w; b.en = C; b.reduce = x("reduce", C); b.dn = z; b.map = x("map", z); b.bn =
                        D; b.filter = x("filter", D); b.fn = E; b.some = x("some", E); b.an = F; b.every = x("every", F); b.cn = N; b.forEach = x("forEach", N); b.Yi = function (a) { return b.filter(a, c) }; b.kn = function (a) { return [].concat.apply([], a) }; b.ji = c(window.Reflect) && c(window.Reflect.construct) ? function (b, c, n, m) { try { return null !== c ? window.Reflect.construct(c, n, m) : b } catch (f) { return a.monitor.ErrorMonitor.H(f), b } } : function (b, c, n) { try { return null !== c && c.apply(b, n) || b } catch (m) { return a.monitor.ErrorMonitor.H(m), b } }; b.gc = function () {
                            var a = Object.setPrototypeOf ||
                                function (a, b) { var c = Object.getOwnPropertyNames(b), n; for (n in c) a[n] = b[n] }; return function (b, c) { function n() { this.constructor = b } a(b, c); b.prototype = null === c ? Object.create(c) : (n.prototype = c.prototype, new n) }
                        }(); b.hj = function (a) { if (!b.isString(a)) return a; var c = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;", "/": "&#47;" }; return a.replace(/[&<>'"/]/g, function (a) { return c[a] }) }; b.Rn = function (a) {
                            if (!b.isString(a)) return a; var c = {
                                "&amp;": "&", "&#38;": "&", "&#x26;": "&", "&lt;": "<", "&#60;": "<", "&#x3c;": "<",
                                "&gt;": ">", "&#62;": ">", "&#x3e;": ">", "&apos;": "'", "&#39;": "'", "&#x27;": "'", "&quot;": '"', "&#34;": '"', "&#x22;": '"', "&sol;": "/", "&#47;": "/", "&#x2f;": "/"
                            }; return a.replace(/&(?:amp|#0*38|#x0*26|lt|#0*60|#x0*3c|gt|#0*62|#x0*3e|apos|#0*39|#x0*27|quot|#0*34|#x0*22|sol|#0*47|#x0*2f);/g, function (a) { a = a.replace(/0+\B/g, ""); return c[a] })
                        }
                })(a.utils || (a.utils = {}))
            })(g || (g = {})); (function (a) {
                var b = a.conf || (a.conf = {}); b.userConf = window["adrum-config"] || {}; b.useHTTPSAlways = !0 === b.userConf.useHTTPSAlways; b.modernBrowserFeaturesAvailable =
                    a.utils.isDefined(window.addEventListener) && a.utils.isCORSSupported() && a.utils.isDefined(Array.prototype.forEach); b.spa2 = b.userConf.spa && b.userConf.spa.spa2 && (!0 === b.userConf.spa.spa2 || a.utils.isObject(b.userConf.spa.spa2)); b.clearResTiming = b.userConf.spa && a.utils.isObject(b.userConf.spa.spa2) && a.utils.isDefined(b.userConf.spa.spa2.clearResTiming) ? b.userConf.spa.spa2.clearResTiming : !0; b.devMode = !0 === b.userConf.devMode; b.isAngular = !0 === b.userConf.angular; b.fetch = !a.utils.isDefined(b.userConf.fetch) ||
                        !0 == b.userConf.fetch; b.neverSendImageBeacon = !a.utils.isDefined(b.userConf.beacon) || !a.utils.isDefined(b.userConf.beacon.neverSendImageBeacon) || !0 == b.userConf.beacon.neverSendImageBeacon; b.beaconUrlHttp = a.utils.isDefined(b.userConf.beaconUrlHttp) ? b.userConf.beaconUrlHttp : "http://col.eum-appdynamics.com"; b.beaconUrlHttps = a.utils.isDefined(b.userConf.beaconUrlHttps) ? b.userConf.beaconUrlHttps : "https://col.eum-appdynamics.com"; b.corsEndpointPath = "/eumcollector/beacons/browser" + (b.spa2 ? "/v2" : "/v1"); b.imageEndpointPath =
                            "/eumcollector/adrum.gif?"; b.appKey = b.userConf.appKey || window["adrum-app-key"] || "APP_KEY_NOT_SET"; a = b.useHTTPSAlways || "https:" === document.location.protocol; var k = b.userConf.adrumExtUrlHttp || "http://cdn.appdynamics.com", e = b.userConf.adrumExtUrlHttps || "https://cdn.appdynamics.com"; b.adrumExtUrl = (a ? e : k) + "/adrum-ext.0f18582aadae64fbc73c6dcb04bb96c6.js"; b.adrumXdUrl = e + "/adrum-xd.0f18582aadae64fbc73c6dcb04bb96c6.html"; b.agentVer = "4.5.9.2098"; b.sendImageBeacon = b.userConf.beacon && b.userConf.beacon.sendImageBeacon ||
                                window["adrum-send-image-beacon"]; window["adrum-geo-resolver-url"] ? (k = window["adrum-geo-resolver-url"], e = k.indexOf("://"), -1 != e && (k = k.substring(e + 3)), k = (a ? "https://" : "http://") + k) : (k = b.userConf.geoResolverUrlHttps || "", e = b.userConf.geoResolverUrlHttp || "", k = a ? k : e); b.geoResolverUrl = k; b.useStrictDomainCookies = !0 === window["adrum-use-strict-domain-cookies"]; b.Dh = 10; b.xh = 10
            })(g || (g = {})); (function (a) {
                function b(b, c, n, m) {
                    b = a.conf.beaconUrlHttps + "/eumcollector/error.gif?version=1&appKey=" + n + "&msg=" + encodeURIComponent(b.substring(0,
                        500)); m && (b += "&stack=", b += encodeURIComponent(m.substring(0, 1500 - b.length))); return b
                } function k(c, n) { 2 <= s || (document.createElement("img").src = b(c, 0, a.conf.appKey, n), s++) } function e(a) { return 0 <= a.location.search.indexOf("ADRUM_debug=true") || 0 <= a.cookie.search(/(^|;)\s*ADRUM_debug=true/) } function c(b) { a.isDebug && p.push(m(arguments).join(" | ")) } function f(a) { r.push(m(arguments).join(" | ")) } function l(a) { var b = m(arguments).join(" | "); c(b); k(b, null) } var m = a.utils.qa, n = a.utils.reduce, q = a.utils.isDefined;
                a.iDR = e; var t; (function (a) { a[a.API_ERROR = 0] = "API_ERROR"; a[a.API_ERROR_INVALID_PARAMS = 1] = "API_ERROR_INVALID_PARAMS"; a[a.API_ERROR_INVALID_CONFIG = 2] = "API_ERROR_INVALID_CONFIG"; a[a.API_WARNING = 3] = "API_WARNING"; a[a.API_WARNING_INEFFECTIVE_CONFIG = 4] = "API_WARNING_INEFFECTIVE_CONFIG" })(t = a.Q || (a.Q = {})); a.ob = ["JS Agent API Error:", "JS Agent API Error Invalid Parameters: ", "JS Agent API Error Invalid Configs: ", "JS Agent API Warning:", "JS Agent API Warning Ineffective Config:"]; a.La = " a constructor is called as a function. Don't forget keyword new.";
                a.isDebug = e(document); a.apiMessageConsoleOut = q(a.conf.userConf) && q(a.conf.userConf.log) && !0 === a.conf.userConf.log.apiMessageConsoleOut ? !0 : !1; var p = [], r = []; a.logMessages = p; a.apiMessages = r; a.log = c; a.An = f; a.error = l; a.reportAPIMessage = function (b, c, n, m) { var l = a.ul.apply(this, arguments); f(l); a.apiMessageConsoleOut && y.log(l); return l }; a.exception = function () {
                    if (!(1 > arguments.length)) {
                        var b = m(arguments), c = a.utils.tryExtractingErrorStack(b[0]), b = b.slice(1); a.utils.isArray(b) && (b = b.slice(0, 20)); b = b.join(" | ");
                        a.log(b); k(b, c)
                    }
                }; a.assert = function (a) { for (var b = 1; b < arguments.length; b++); var c = m(arguments); a || (b = c[1], (c = c.slice(2)) && 0 < c.length ? l("M4", b, c) : l("M5", b)) }; a.dumpLog = a.isDebug ? function () { return n(p, function (a, b) { return a + b.replace(/\<br\/\>/g, "\n\t") + "\n" }, "") } : function () { }; a.ul = function (b, c, n, m) {
                    var f = "", f = "", l = (new window.Error).stack, e, l = a.utils.isString(l) ? l.substring(5) : l + ""; q(e) || (e = a.utils.map(m, function (a) { return null === a ? "null" : void 0 == a ? "undefined" : "" === a ? "''" : a })); switch (b) {
                        case t.ha: case t.Om: f =
                            a.ob[b]; f = q(n) ? "" + f + c + "\n in " + n + "(" + e.join(", ") + ")\n" + l : "" + f + c + "\n" + l; break; case t.Ad: f = a.ob[b]; f = "" + f + c + "\nin " + n + "(" + e.join(", ") + ")\n" + l; break; case t.Nm: case t.Pg: f = a.ob[b]; f = "" + f + c + ", but " + n + "=" + e.join(", ") + "\n" + l; break; default: f = a.ob[t.ha], f = "" + f + c + "\nin " + n + "(" + e.join(", ") + ")\n" + l
                    }return f
                }; a.cIEBU = b; var s = 0; c("M6")
            })(g || (g = {})); (function (a) {
                var b = function () {
                    function a(b) { this.max = b; this.qc = 0 } a.prototype.ck = function () { this.Gb() || this.qc++ }; a.prototype.Gb = function () { return this.qc >= this.max };
                    a.prototype.reset = function () { this.qc = 0 }; return a
                }(), k = function () {
                    function e() { this.vb = []; this.hd = new b(e.Oh); this.Rc = new b(e.Hh) } e.prototype.submit = function (b) { this.push(b) && a.initEXTDone && this.processQ() }; e.prototype.processQ = function () { for (var b = this.bj(), f = 0; f < b.length; f++) { var l = b[f]; "function" === typeof a.commands[l[0]] ? (a.isDebug && a.log("M7", l[0], l.slice(1).join(", ")), a.commands[l[0]].apply(a, l.slice(1))) : a.error("M8", l[0]) } }; e.prototype.Kk = function (a) {
                        return "reportXhr" === a || "reportPageError" ===
                            a
                    }; e.prototype.push = function (b) { var f = b[0], l = this.Kk(f), m = l ? this.hd : this.Rc; if (m.Gb()) return a.log("M9", l ? "spontaneous" : "non spontaneous", f), !1; this.vb.push(b); m.ck(); return !0 }; e.prototype.bj = function () { var a = this.vb; this.reset(); return a }; e.prototype.size = function () { return this.vb.length }; e.prototype.reset = function () { this.vb = []; this.hd.reset(); this.Rc.reset() }; e.prototype.isSpontaneousQueueDead = function () { return this.hd.Gb() }; e.prototype.isNonSpontaneousQueueDead = function () { return this.Rc.Gb() };
                    return e
                }(); k.Oh = 100; k.Hh = 100; a.CommandExecutor = k
            })(g || (g = {})); (function (a) { a.q = new a.CommandExecutor; a.command = function (b) { for (var k = 1; k < arguments.length; k++); a.isDebug && a.log("M10", b, Array.prototype.slice.call(arguments).slice(1).join(", ")); a.q.submit(Array.prototype.slice.call(arguments)) } })(g || (g = {})); (function (a) {
                (function (a) { var k = function () { function a() { this.status = {} } a.prototype.setUp = function () { }; a.prototype.set = function (a, b) { this.status[a] = b }; return a }(); a.cc = k })(a.monitor || (a.monitor =
                    {}))
            })(g || (g = {})); (function (a) {
                (function (b) {
                    var k = a.utils.qa, e = a.utils.isDefined; window.ADRUM.aop = b; b.support = function (a) { return !a || "apply" in a }; b.around = function (c, f, l, m, n) {
                        a.assert(b.support(c), "M11"); c = c || function () { }; return function () {
                            if (a.isDebug) try { a.log("M12", m, k(arguments).join(", ")) } catch (b) { a.log("M13", e(b.stack) || b.toString()) } var t = k(arguments), p; try { f && (p = f.apply(this, t)) } catch (r) { a.exception(r, "M14", m, r) } a.assert(!p || a.utils.isArray(p)); var s = void 0; try { s = c.apply(this, p || t) } catch (w) {
                                throw a.log(w,
                                    "M15", m, w), n ? n(w) : a.monitor.ErrorMonitor.H(w), w;
                            } finally { try { l && (e(s) && (t[t.length] = { If: s }), l.apply(this, t)) } catch (g) { a.exception(g, "M16", m, g) } } return s
                        }
                    }; b.Qe = function (a) { a = a[a.length - 1]; var b; e(a) && e(a.If) && (b = a.If); return b }; b.before = function (a, f, l) { return b.around(a, f, null, l) }; b.after = function (a, f, l) { return b.around(a, null, f, l) }
                })(a.aop || (a.aop = {}))
            })(g || (g = {})); (function (a) {
                a = a.EventType || (a.EventType = {}); a[a.PageView = 0] = "PageView"; a[a.Ajax = 2] = "Ajax"; a[a.VPageView = 3] = "VPageView"; a[a.Error = 4] =
                    "Error"; a[a.IFRAME = 1] = "IFRAME"; a[a.ABSTRACT = 100] = "ABSTRACT"; a[a.ADRUM_XHR = 101] = "ADRUM_XHR"; a[a.NG_VIRTUAL_PAGE = 102] = "NG_VIRTUAL_PAGE"
            })(g || (g = {})); (function (a) {
                var b = a.events || (a.events = {}); b.O = {}; b.O[a.EventType.ABSTRACT] = { guid: "string", url: "string", parentGUID: "string", parentUrl: "string", parentType: "number", timestamp: "number" }; b.O[a.EventType.VPageView] = { resTiming: "object" }; b.O[a.EventType.NG_VIRTUAL_PAGE] = { digestCount: "number" }; b.O[a.EventType.Ajax] = {
                    method: "string", parentPhase: "string", parentPhaseId: "number",
                    error: "object", parameter: "object", xhrStatus: "number", dataObject: "object"
                }; b.O[a.EventType.ADRUM_XHR] = { allResponseHeaders: "string" }; b.O[a.EventType.Error] = { msg: "string", line: "number", stack: "string" }
            })(g || (g = {})); (function (a) {
                var b = function () {
                    function a() { this.ba = {} } a.prototype.mark = function (a, b) { k.mark.apply(this, arguments) }; a.prototype.getTiming = function (a) { return (a = this.getEntryByName(a)) && a.startTime }; a.prototype.measure = function (a, b, l) { k.measure.apply(this, arguments) }; a.prototype.getEntryByName =
                        function (a) { return k.getEntryByName.call(this, a) }; return a
                }(); b.pc = function (a) { return k.pc(a) }; a.PerformanceTracker = b; var k; (function (b) {
                    var c = a.utils.hasOwnPropertyDefined, f = a.utils.Wa(), l = a.utils.now; b.mark = function (b, c) { this.ba[b] = { name: b, entryType: "mark", startTime: a.utils.isDefined(c) ? c : l(), duration: 0 } }; b.measure = function (b, n, e) {
                    c(this.ba, n) && c(this.ba, e) ? this.ba[b] = { name: b, entryType: "measure", startTime: n ? this.ba[n].startTime : f, duration: (e ? this.ba[e].startTime : l()) - (n ? this.ba[n].startTime : f) } :
                        a.error("M17", c(this.ba, n) ? e : n)
                    }; b.getEntryByName = function (a) { return this.ba[a] || null }; b.pc = function (a) { return a + f }
                })(k || (k = {}))
            })(g || (g = {})); (function (a) {
                (function (b) {
                    function k(b, c) {
                        b = b || {}; for (var m in b) c[m] = function () {
                            var c = m, l = b[m]; return function (b) {
                                var m = "_" + c, f = this[m]; if (a.utils.isDefined(b)) if (typeof b === l) this[m] = b; else throw m = "wrong type of " + c + " value, " + typeof b + " passed in but should be a " + l + ".", a.reportAPIMessage(a.Q.Ad, m, "ADRUM.report", Array.prototype.slice.call(arguments)), TypeError(m);
                                return f
                            }
                        }()
                    } function e(a) { var b = {}, c; for (c in a) { var n = a[c]; b[n.start] = !0; b[n.end] = !0 } return b } var c = function () {
                        function b(c) { this.perf = new a.PerformanceTracker; "Object" === this.constructor.name && a.reportAPIMessage(a.Q.ha, a.La); this.timestamp(a.utils.now()); this.guid(a.utils.generateGUID()); this.url(document.URL); this.Ub(c) } b.prototype.type = function () { return a.EventType.ABSTRACT }; b.prototype.Ub = function (b) {
                            if (a.utils.isObject(b)) for (var c in b) {
                                var n = this[c] || this["mark" + a.utils.qe(c)]; n && a.utils.isFunction(n) &&
                                    n.call(this, b[c])
                            }
                        }; b.kc = function (a, b, c) { return { guid: function () { return a }, url: function () { return b }, type: function () { return c } } }; b.prototype.Jj = function () { return b.kc(this.parentGUID(), this.parentUrl(), this.parentType()) }; b.prototype.parent = function (b) {
                            var c = this.Jj(); a.utils.isDefined(b) && (a.utils.isFunction(b.guid) && a.utils.isFunction(b.url) && a.utils.isFunction(b.type) ? (this.parentGUID(b.guid()), this.parentUrl(b.url()), this.parentType(b.type())) : a.reportAPIMessage(a.Q.ha, "object is not a valid EventIdentifier",
                                "EventTracker.parent", Array.prototype.slice.call(arguments))); return c
                        }; return b
                    }(); b.EventTracker = c; b.Ea = k; b.me = function (b, c) { b = b || {}; var m = e(b), n; for (n in m) m = a.utils.qe(n), c["mark" + m] = a.utils.Jf(function (a, b) { this.perf.mark(a, b) }, n), c["get" + m] = a.utils.Jf(function (a) { return this.perf.getTiming(a) }, n) }; k(b.O[a.EventType.ABSTRACT], c.prototype)
                })(a.events || (a.events = {}))
            })(g || (g = {})); (function (a) {
                (function (b) {
                    var k = function (b) {
                        function c(f) {
                            f = b.call(this, f) || this; f.constructor != c && a.reportAPIMessage(a.Q.ha,
                                a.La, "ADRUM.events.Error", []); return f
                        } u(c, b); c.prototype.type = function () { return a.EventType.Error }; return c
                    }(b.EventTracker); b.Error = k; b.Ea(b.O[a.EventType.Error], k.prototype)
                })(a.events || (a.events = {}))
            })(g || (g = {})); (function (a) {
                (function (b) {
                    var k = function (b) {
                        function c() { var f = null !== b && b.apply(this, arguments) || this; f.Tk = function (b) { var m = b.message, n = b.filename, e = b.lineno, k = b.colno; b = b.error; a.log("M18"); if (a.utils.isDefined(b) || c.Jb) a.log("M19"), c.Jb = !0, f.ya(m, n, e, k, b) }; return f } u(c, b); c.H = function (b) {
                            a.monitor.ca.ya(b.message ||
                                b.description, b.fileName || b.filename, b.lineNumber, b.columnNumber, b)
                        }; c.prototype.setUp = function () { var c = this; b.prototype.setUp.call(this); a.utils.addEventListener(window, "error", this.Tk, !0); a.listenForErrors = function () { c.pf() }; this.pf() }; c.prototype.Hl = function () { c.yc = 0 }; c.prototype.ya = function (b, l, m, n, e) {
                        c.yc >= a.conf.Dh ? a.log("M20") : (n = a.utils.tryExtractingErrorStack(e), a.command("reportPageError", new a.events.Error(a.utils.mergeJSON({
                            msg: b + "", url: a.utils.isString(l) ? l : void 0, line: a.utils.isNumber(m) ?
                                m : void 0, stack: n
                        }, this.status))), c.yc++, c.hadErrors = !0)
                        }; c.prototype.pf = function () { var b = this; c.Jb = !1; a.aop.support(window.onerror) ? (window.onerror = a.aop.around(window.onerror, function (l, m, n, e, k) { c.Jb ? a.log("M21") : c.Pc ? a.log("M23") : (a.log("M22"), b.ya(l, m, n, e, k), c.Pc = !0) }, function () { a.log("M24"); c.Pc = !1 }, "onerror"), a.log("M25")) : a.log("M26") }; return c
                    }(b.cc); k.Pc = !1; k.yc = 0; k.hadErrors = !1; k.Jb = !1; b.ErrorMonitor = k; b.ca = new b.ErrorMonitor
                })(a.monitor || (a.monitor = {}))
            })(g || (g = {})); (function (a) {
                (function (b) {
                    var k =
                        a.log, e = a.aop.after, c = function (c) {
                            function l() { return null !== c && c.apply(this, arguments) || this } u(l, c); l.prototype.setUp = function () { a.utils.map(["error", "exception"], function (b) { var c = y[b]; a.utils.isFunction(c) && a.aop.support(c) ? (k("M27", b), y[b] = e(c, function (a) { k("M28", b, a); l.ni(a) })) : k("M29", b) }); b.ca.ya = e(b.ca.ya, function () { 0 < l.sa.length ? (k("M30"), l.sa = []) : k("M31") }) }; l.ni = function (b) { l.sa.length < a.conf.xh && a.utils.isString(b) ? (k("M32", b), l.sa.push(b), a.utils.oSTO(l.Fl)) : k("M33", typeof b) }; l.Fl = function () {
                                0 <
                                l.sa.length ? (k("M34"), b.ca.ya(l.sa.join("\n")), l.sa = []) : k("M35")
                            }; return l
                        }(b.cc); c.sa = []; b.Qm = c; b.Ni = new c
                })(a.monitor || (a.monitor = {}))
            })(g || (g = {})); (function (a) { (function (b) { var k = function () { function b() { } b.setUp = function () { b.perf = a.utils.l.cb; a.utils.isObject(b.perf) && a.utils.isObject(b.perf.timing) || (b.perf = void 0) }; return b }(); k.perf = null; b.PerformanceWrapper = k })(a.monitor || (a.monitor = {})) })(g || (g = {})); (function (a) {
                (function (b) {
                    var k = function () {
                        function e() { this.navTiming = null } e.prototype.Pi =
                            function () { var c = b.PerformanceWrapper.perf; if (c = c && c.timing) if (c.navigationStart && c.navigationStart <= c.loadEventEnd) { var f = {}, l; for (l in c) { var m = c[l]; "number" === typeof m && (f[l] = m) } this.navTiming = f } else a.log("M37"); else a.log("M36") }; e.prototype.setUp = function () { b.PerformanceWrapper.setUp() }; return e
                    }(); b.NavTimingMonitor = k; b.navMonitor = new b.NavTimingMonitor
                })(a.monitor || (a.monitor = {}))
            })(g || (g = {})); (function (a) {
                (function (b) {
                    var k = function () {
                        function e() {
                        this.Xc = null; b.PerformanceWrapper.setUp();
                            this.resourceBuffer = []; this.basePageResourceBuffer = []; this.Vd = 500; this.fc = 150; this.Yh = 3E3; this.setResourceTimingBufferSize(); this.Ul()
                        } e.prototype.setUp = function () {
                            b.PerformanceWrapper.setUp(); a.utils.isDefined(b.PerformanceWrapper.perf) && a.utils.isFunction(b.PerformanceWrapper.perf.getEntriesByType) ? a.utils.isFunction(b.PerformanceWrapper.perf.addEventListener) ? b.PerformanceWrapper.perf.addEventListener("resourcetimingbufferfull", this.Ua.bind(this)) : "onresourcetimingbufferfull" in b.PerformanceWrapper.perf ?
                                a.utils.isFunction(b.PerformanceWrapper.perf.Wc) ? b.PerformanceWrapper.perf.Wc = a.aop.around(b.PerformanceWrapper.perf.Wc, this.Ua.bind(this)) : b.PerformanceWrapper.perf.Wc = this.Ua.bind(this) : a.utils.l.setInterval.call(window, this.Kl.bind(this), this.Yh) : a.log("M38"); this.Yl(); this.Ll()
                        }; e.prototype.Yl = function () {
                            var c = a.conf.userConf && a.conf.userConf.resTiming && a.conf.userConf.resTiming.bufSize; a.utils.isDefined(b.PerformanceWrapper.perf) && a.utils.isFunction(b.PerformanceWrapper.perf.setResourceTimingBufferSize) &&
                                a.utils.isNumber(c) && 0 < c && (this.fc = c)
                        }; e.prototype.Ll = function () { var c = b.PerformanceWrapper.perf; a.utils.isDefined(c) && (a.utils.isFunction(c.setResourceTimingBufferSize) && (c.setResourceTimingBufferSize = a.aop.around(c.setResourceTimingBufferSize, function () { a.utils.isDefined(arguments) && a.utils.isDefined(arguments[0]) && (this.fc = arguments[0]) }.bind(this))), a.utils.isFunction(c.clearResourceTimings) && (c.clearResourceTimings = a.aop.around(c.clearResourceTimings, function () { this.Ua() }.bind(this)))) }; e.prototype.Oi =
                            function () { this.basePageResourceBuffer = this.Ie() }; e.prototype.Ua = function () { this.resourceBuffer = this.Ie() }; e.prototype.Kl = function () { this.Cb().length >= this.fc && this.Ua() }; e.prototype.Cb = function () { var c = b.PerformanceWrapper.perf, f = []; c && c.getEntriesByType && (c = c.getEntriesByType("resource")) && c.length && 0 < c.length && c.unshift && (f = c); 0 == f.length && a.log("M39"); return f }; e.prototype.Oj = function (b, f) { return a.utils.filter(this.resourceBuffer, function (a) { return b + a.startTime >= f }) }; e.prototype.Pj = function (a,
                                b) { this.resourceBuffer = this.resourceBuffer.concat(this.Cb()); var l = this.Oj(a, b); this.clearResourceTimings(); this.resourceBuffer = []; return l }; e.prototype.Ul = function () { var c = b.PerformanceWrapper.perf; a.utils.isDefined(c) && a.utils.isFunction(c.clearResourceTimings) && (this.Xc = c.clearResourceTimings.bind(c)) }; e.prototype.setResourceTimingBufferSize = function () {
                                    var c = b.PerformanceWrapper.perf, f = a.conf.userConf && a.conf.userConf.resTiming && a.conf.userConf.resTiming.bufSize; !a.utils.isNumber(f) || 0 >= f ? a.log("M40") :
                                        c && a.utils.isFunction(c.setResourceTimingBufferSize) ? c.setResourceTimingBufferSize(f) : a.log("M41")
                                }; e.prototype.Ie = function () { var b = this.Cb(); if (this.resourceBuffer.length + b.length > this.Vd) return a.log("M42"), this.resourceBuffer.concat(b.slice(0, this.Vd - this.resourceBuffer.length)); this.clearResourceTimings(); return this.resourceBuffer.concat(b) }; e.prototype.clearResourceTimings = function () { a.conf.clearResTiming && a.utils.isFunction(this.Xc) && this.Xc() }; return e
                    }(); b.ResourceMonitor = k; b.resourceMonitor =
                        new b.ResourceMonitor
                })(a.monitor || (a.monitor = {}))
            })(g || (g = {})); (function (a) {
                var b = function () {
                    function b() {
                    this.rk = 0.2; this.Am = a.utils.isDefined(window.innerWidth) && a.utils.isDefined(document.documentElement.clientWidth) ? Math.min(window.innerWidth, document.documentElement.clientWidth) : window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth; this.zm = a.utils.isDefined(window.innerHeight) && a.utils.isDefined(document.documentElement.clientHeight) ? Math.min(window.innerHeight,
                        document.documentElement.clientHeight) : window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight; this.viewport = { top: 0, left: 0, bottom: this.zm, right: this.Am }
                    } b.prototype.setUp = function () {
                    this.S = {}; this.Nb = {}; var b = window.MutationObserver; a.utils.isDefined(b) && (a.utils.isDefined(window.de) && a.utils.isDefined(window.de.ki("MutationObserver")) ? this.bb = new (window[window.de.ki("MutationObserver")])(this.Ef.bind(this)) : this.bb = new b(this.Ef.bind(this)),
                        this.bb.observe(document.documentElement, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["src", "href"] }))
                    }; b.prototype.Ef = function (a) { var b = this; a.forEach(function (a) { switch (a.type) { case "childList": [].slice.call(a.addedNodes).forEach(function (a) { b.Sa(a) }); break; case "attributes": b.Sa(a.target) } }) }; b.prototype.start = function () { this.setUp(); this.bb.observe(document.documentElement, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["src", "href"] }) }; b.prototype.reset = function () {
                    this.S = {};
                        this.Nb = {}
                    }; b.prototype.Sa = function (a) { this.Ak(a) && (this.kf(a) ? a.addEventListener("loadeddata", this.$a.bind(this)) : a.addEventListener("load", this.$a.bind(this)), a.addEventListener("error", this.H.bind(this))) }; b.prototype.$a = function (b) { var c = a.utils.now(), f = this.Db(b.target); a.utils.isDefined(f) && 0 < f.length && this.pi(f, c, b.target) }; b.prototype.H = function () { }; b.prototype.pi = function (b, c, f) { var l = this.cf(f) && this.lf(f); if (!a.utils.isDefined(this.S[b]) || l) this.S[b] = { Dl: c, nodeName: this.Fj(f), Yj: l } }; b.prototype.Mi =
                        function (b) { var c = this, f = 0, l; for (l in this.S) { var m = this.S[l]; m.Yj && (f = Math.max(f, m.Dl - b)) } var n = this.Lj(b); this.uj().forEach(function (b) { b = c.Nj(b); a.utils.isDefined(b) && (f = Math.max(f, b.duration * n + b.startTime)) }); y.log(this.S); y.log(n, f) }; b.prototype.Db = function (a) { var b = ""; a instanceof HTMLImageElement ? b = a.currentSrc : a instanceof HTMLEmbedElement ? b = a.src : a instanceof HTMLObjectElement ? b = a.data : a instanceof HTMLVideoElement && (b = a.currentSrc); return b }; b.prototype.Fj = function (a) {
                            var b = ""; a instanceof
                                HTMLImageElement ? b = "img" : a instanceof HTMLEmbedElement ? b = "embed" : a instanceof HTMLObjectElement ? b = "object" : a instanceof HTMLVideoElement && (b = "video"); return b
                        }; b.prototype.Gj = function (a) { a = a.getBoundingClientRect(); var b = document.documentElement || document.body, f = a.top + (window.pageYOffset || b.scrollTop) - (b.clientTop || 0), b = a.left + (window.pageXOffset || b.scrollLeft) - (b.clientLeft || 0); return { top: Math.round(f), left: Math.round(b), bottom: Math.round(f) + a.height, right: Math.round(b) + a.width } }; b.prototype.cf =
                            function (a) { a = this.Gj(a); if (this.uk(a)) return !1; var b = { top: Math.max(this.viewport.top, a.top), left: Math.max(this.viewport.left, a.left), bottom: Math.min(this.viewport.bottom, a.bottom), right: Math.min(this.viewport.right, a.right) }, b = this.Ke(b); a = this.Ke(a); return 0 != a && b / a >= this.rk ? !0 : !1 }; b.prototype.uk = function (a) { return a.top > this.viewport.bottom || a.bottom < this.viewport.top || a.right < this.viewport.left || a.left > this.viewport.right ? !0 : !1 }; b.prototype.Ke = function (a) { return (a.right - a.left) * (a.bottom - a.top) };
                    b.prototype.Ab = function (a) { return a.nodeName.toLowerCase() }; b.prototype.xk = function (a) { return "img" == this.Ab(a) }; b.prototype.Ik = function (a) { return "object" == this.Ab(a) && "image/svg+xml" == a.type }; b.prototype.Hk = function (a) { return "embed" == this.Ab(a) && "image/svg+xml" == a.type }; b.prototype.kf = function (a) { return "video" == this.Ab(a) }; b.prototype.Ak = function (a) { return this.xk(a) || this.Ik(a) || this.Hk(a) || this.kf(a) }; b.prototype.lf = function (a) {
                        a = window.getComputedStyle(a); return "none" !== a.getPropertyValue("display") &&
                            "hidden" !== a.getPropertyValue("visibility")
                    }; b.prototype.$i = function () { a.utils.isDefined(this.bb) && this.bb.disconnect() }; b.prototype.Lj = function (a) { var b = this, f = 0, l = 0; this.Se().forEach(function (m) { var n = m.name; b.S[n] && (f += (b.S[n].renderAt - a - m.startTime) / m.duration, l += 1) }); return 0 < l ? f / l : 1 }; b.prototype.uj = function () { var a = this, b = [];[].slice.call(document.getElementsByTagName("*")).forEach(function (f) { a.cf(f) && a.lf(f) && (f = a.tj(f)) && b.push(f) }); return b }; b.prototype.tj = function (a) {
                        if (a && a.style) {
                            var b =
                                window.getComputedStyle(a).getPropertyValue("background-image"); b || (b = (a.currentStyle || a.style).backgroundImage); return this.Rj(b)
                        }
                    }; b.prototype.Rj = function (a) { if (a && a.match("url")) return a.replace('url("', "").replace('")', "") }; b.prototype.Nj = function (a) { for (var b = 0, f = this.Se(); b < f.length; b++) { var l = f[b]; if (0 <= l.name.indexOf(a)) return l } }; b.prototype.Se = function () { return a.monitor.resourceMonitor.basePageResourceBuffer.concat(a.monitor.resourceMonitor.resourceBuffer) }; return b
                }(); a.Ym = b; a.Ba = new b
            })(g ||
                (g = {})); (function (a) {
                    (function (b) {
                        var k = function () {
                            function e() { this.tc = 5E3; this.ab = a.conf.userConf && a.conf.userConf.navComplete && a.conf.userConf.navComplete.maxResourceQuietTime ? a.conf.userConf.navComplete.maxResourceQuietTime : this.tc } e.prototype.kg = function () {
                                this.Ya(Element.prototype, "innerHTML", this.Pf.bind(this)); this.Ya(HTMLElement.prototype, "innerHTML", this.Pf.bind(this)); this.Ya(HTMLImageElement.prototype, "src", this.eb.bind(this)); this.Ya(HTMLScriptElement.prototype, "src", this.eb.bind(this));
                                this.Ya(HTMLLinkElement.prototype, "href", this.eb.bind(this)); this.jk(); this.Mc("append"); this.Mc("appendChild"); this.Mc("insertBefore")
                            }; e.prototype.setUp = function (a) { this.Sc = this.j = 0; this.Ga = a; this.fa = this.F = !1; this.Df = {}; this.S = {}; this.Nb = {} }; e.prototype.start = function (a) { this.setUp(a); this.fa = !0 }; e.prototype.reset = function () { this.F = !1; this.j = 0; this.fa = !1 }; e.prototype.Ya = function (a, b, l) { this.ll(a, b, Object.getOwnPropertyDescriptor(a, b), l) }; e.prototype.ll = function (b, f, l, m) {
                                if (a.utils.isDefined(l) &&
                                    a.utils.isDefined(l.set) && !a.utils.isDefined(l.T)) { var n = this; Object.defineProperty(b, f, { set: function (a) { var b; try { b = l.set.apply(this, arguments) } catch (c) { throw c; } finally { m.call(n, this) } return b } }) }
                            }; e.prototype.eb = function (b) { this.fa && (this.hc(b), a.conf.devMode && a.Ba.Sa(b)) }; e.prototype.jk = function () { var b = Element.prototype, f = this; a.utils.isDefined(b.setAttribute) && (b.setAttribute = a.aop.around(b.setAttribute, null, function () { f.eb.call(f, this) })) }; e.prototype.Mc = function (b) {
                                var f = Element.prototype,
                                l = this; a.utils.isDefined(f[b]) && (f[b] = a.aop.around(f[b], null, function () { 0 < arguments.length && l.eb.call(l, arguments[0]) }))
                            }; e.prototype.Pf = function (b) { this.fa && a.utils.isDefined(b) && a.utils.isDefined(b.childNodes) && (this.hc(b), a.conf.devMode && a.Ba.Sa(b), this.wg(b.childNodes)) }; e.prototype.wg = function (b) { for (var f = 0; f < b.length; f++) { var l = b[f]; this.hc(l); a.conf.devMode && a.Ba.Sa(l); this.wg(l.childNodes) } }; e.prototype.hc = function (b) {
                                if (!a.monitor.AnySpaMonitor.Kc() && this.sk(b)) {
                                    var f = b.attributes.getNamedItem("src") ||
                                        b.attributes.getNamedItem("href"); a.utils.isDefined(f) && (f = f.value, !a.utils.isDefined(this.Df[f]) && 0 < f.length && (this.j += 1, a.utils.addEventListener(b, "load", this.$a.bind(this), !1), a.utils.addEventListener(b, "error", this.H.bind(this), !1), this.Df[f] = !0, a.log("M43", f, this.j)))
                                }
                            }; e.prototype.zk = function (b) { return "LINK" == b.nodeName ? (b = b.attributes.getNamedItem("rel"), a.utils.isDefined(b) ? 0 <= b.value.indexOf("stylesheet") : !0) : !0 }; e.prototype.sk = function (a) { return /^(SCRIPT|IMG|LINK)$/.test(a.nodeName) && this.zk(a) };
                            e.prototype.$a = function (c) { var f = this.Db(c.target); !a.utils.isDefined(this.S[f]) && 0 < this.j && (this.j -= 1, this.S[f] = !0, a.log("M44", f, this.j)); this.Ga = a.utils.now(); this.Sc += 1; 1 == this.Sc && (b.w.pg(), this.F = !0); this.Vf(c.target) }; e.prototype.H = function (b) { var f = this.Db(b.target); a.utils.isDefined(this.Nb[f]) || (this.j -= 1, this.Nb[f] = !0); this.Vf(b.target) }; e.prototype.xi = function () { return 0 < this.j && this.F }; e.prototype.Db = function (a) {
                                var b = ""; a instanceof HTMLScriptElement ? b = a.src : a instanceof HTMLImageElement ?
                                    b = a.src : a instanceof HTMLLinkElement && (b = a.href); return b
                            }; e.prototype.Ic = function (a) { return 0 == this.j && this.F && a - this.Ga >= this.ab ? (this.reset(), this.Ga) : -1 }; e.prototype.Vf = function (a) { a.removeEventListener("load", this.$a, !1); a.removeEventListener("error", this.H, !1) }; return e
                        }(); b.bh = k
                    })(a.k || (a.k = {}))
                })(g || (g = {})); (function (a) {
                    (function (b) {
                        var k = function () {
                            function e() {
                            this.tc = 3E3; this.ab = a.conf.userConf && a.conf.userConf.navComplete && a.conf.userConf.navComplete.maxXhrQuietTime ? a.conf.userConf.navComplete.maxXhrQuietTime :
                                this.tc
                            } e.prototype.setUp = function (a) { this.Tc = this.j = 0; this.Ha = a; this.fa = this.F = !1; this.Kg = {}; this.zd = {} }; e.prototype.start = function (a) { this.setUp(a); this.fa = !0 }; e.prototype.fe = function (b) { a.monitor.AnySpaMonitor.Kc() || a.utils.isDefined(this.Kg[b]) || !this.fa || (this.j += 1, this.Kg[b] = !0, a.log("M45", b, this.j)) }; e.prototype.ri = function (c) {
                            !a.monitor.AnySpaMonitor.Kc() && this.fa && 0 < this.j && (a.utils.isDefined(this.zd) && !a.utils.isDefined(this.zd[c]) && (this.Ha = a.utils.now(), this.j -= 1, this.zd[c] = !0, a.log("M46",
                                c, this.j)), this.Tc += 1, 1 == this.Tc && (b.w.pg(), this.F = !0))
                            }; e.prototype.Ic = function (a) { return 0 == this.j && this.F && a - this.Ha >= this.ab ? (this.reset(), this.Ha) : -1 }; e.prototype.yi = function () { return 0 < this.j && this.F }; e.prototype.reset = function () { this.F = !1; this.j = 0; this.fa = !1 }; return e
                        }(); b.Sg = k
                    })(a.k || (a.k = {}))
                })(g || (g = {})); var d = g.utils.qa, h = g.utils.isFunction; (function (a) {
                    var b = a.utils.generateGUID, k; (function (a) {
                    a[a.USER = 0] = "USER"; a[a.TIMER = 1] = "TIMER"; a[a.XHR = 2] = "XHR"; a[a.RESOURCE = 3] = "RESOURCE"; a[a.PROMISE =
                        4] = "PROMISE"; a[a.FETCH = 5] = "FETCH"; a[a.OTHER = 6] = "OTHER"
                    })(k = a.CauseType || (a.CauseType = {})); var e = function () { return function (c, l, m) { this.start = a.utils.now(); this.parent = c; this.Yb = l; this.guid = b(); this.type = m } }(); a.qb = e; var c = function () {
                        function b() { } b.qn = function () { return b.events }; b.df = function (b) { return a.utils.isDefined(b) && a.utils.isFunction(b.handleEvent) }; b.Qf = function (a, c, n, q) { var e; b.ka(c); try { b.df(a) ? e = a.handleEvent.apply(n, q) : h(a) && (e = a.apply(n, q)) } catch (k) { throw k; } finally { b.I() } return e };
                        b.ac = function (c, m, n, q) { if (!a.utils.isDefined(m) || m.T) return m; var e; q || (e = b.ea()); return function (a) { var q = b.Fa(c, a, e, n); return b.Qf(m, q, this, arguments) } }; b.Fa = function (b, c, n, f) { n ? a.log("M47", b, n.Yb.action) : a.log("M48", b); a.utils.isDefined(c) ? (c = a.Hd.Vk(c.target || c.srcElement), c.action = b) : c = new a.Da(b); return new e(n, c, f) }; b.Im = function (c, m, n) { if (!a.utils.isDefined(m) || m.T) return m; var q = b.Fa(c, void 0, b.ea(), n); return function () { new a.Da(c); return b.Qf(m, q, this, arguments) } }; b.Un = function (a, c) {
                            return function () {
                                var n =
                                    c.apply(this, arguments); b.nc(a); return n
                            }
                        }; b.ea = function () { return 0 < b.events.length ? b.events[b.events.length - 1] : null }; b.ka = function (a) { b.events.push(a) }; b.I = function () { return b.events.pop() }; b.oc = function (b, c) { var n = b, f = 1, e = ""; if (!a.utils.isDefined(n)) return null; for (; a.utils.isDefined(n.parent);)e = " -> " + n.Yb.action + e, n = n.parent, f += 1; var k = a.utils.now(); a.utils.isDefined(n.Yb) && (e = n.Yb.action + e + " -> " + c); a.log("M49", e); a.log("M50", n.start, f); a.log("M51", k - n.start); return n }; b.nc = function (a) {
                            return b.oc(b.ea(),
                                a)
                        }; b.Sj = function () { var c = b.nc(void 0); if (a.utils.isDefined(c) && a.utils.isDefined(c.type)) return [k.TIMER, k.USER].some(function (a) { return c.type == a }) ? c : void 0 }; b.qk = function (a) { if (h(a)) return a; var b = "" + a; return function () { eval(b) } }; b.setUp = function () {
                        b.events = []; var c = a.utils.l;[{ Hf: c.setTimeout, Ge: "setTimeout" }, { Hf: c.setInterval, Ge: "setInterval" }].forEach(function (c) {
                            var n = c.Hf, l = c.Ge, e; try { n.call(window), a.error("M52", l), e = l } catch (p) { e = p.message } window[l] = function (a) {
                                var c = d(arguments); if (1 > c.length) throw TypeError(e);
                                var m = b.Lk(l, arguments[1]) ? k.OTHER : k.TIMER, m = b.Im(l, b.qk(a), m); c[0] = m; return n.apply(window, c)
                            }
                        })
                        }; b.Lk = function (b, c) { return "setTimeout" == b && (a.utils.isDefined(c) && 0 == c || !a.utils.isDefined(c)) }; return b
                    }(); c.events = []; a.c = c
                })(g || (g = {})); (function (a) {
                    var b = a.utils.hj, k = window.addEventListener, e = a.utils.isDefined(window.EventTarget) ? window.EventTarget.prototype.addEventListener : function () { }, c = a.utils.isDefined(window.EventTarget) ? window.EventTarget.prototype.removeEventListener : function () { }, f = function () {
                        return function (a,
                            b, c, l, f, e, k, w) { this.action = a || ""; this.kh = b || ""; this.className = c || ""; this.tagName = l || ""; this.name = f || ""; this.text = e || ""; this.src = k; this.item = w }
                    }(); a.Da = f; var l = function () {
                        function m() { } m.setUp = function () { Array.prototype.push.apply(m.uc, []); m.Fm(); a.utils.isDefined(window.EventTarget) ? (m.Gm(), m.Hm()) : m.qi(); m.bf("onload"); m.bf("onerror") }; m.Fn = function () { return [] }; m.Le = function (b, c) {
                            var l = ""; if (a.utils.isDefined(b)) if ("string" === typeof b.textContent) l = a.utils.isDefined(String.prototype.trim) ? b.textContent.trim() :
                                b.textContent, l = a.utils.isDefined(c) ? l.substring(0, c) : l; else for (b = b.firstChild; a.utils.isDefined(b) && !(l += m.Le(b, c), a.utils.isDefined(c) && l.length >= c); b = b.nextSibling); return l
                        }; m.Vk = function (c) {
                            var l = b(c.id) || "", e = b(c.className) || "", k = "", r = new f; c === document ? (k = "document", r.text = "#document") : c === window ? (k = "window", r.text = "#window") : c instanceof XMLHttpRequest ? (k = "xhr", r.src = a.utils.isObject(c._adrumAjaxT) ? encodeURI(c._adrumAjaxT.url()) : "") : c instanceof WebSocket ? (k = "websocket", r.src = encodeURI(c.url)) :
                                c instanceof HTMLScriptElement ? (k = "script", r.src = encodeURI(c.src)) : c instanceof HTMLAnchorElement ? (k = "a", r.text = b(c.text) || "") : c instanceof HTMLButtonElement ? (k = "button", r.name = b(c.name)) : c instanceof HTMLDivElement ? k = "div" : c instanceof HTMLImageElement ? (k = "img", r.src = encodeURI(c.src), r.text = b(c.title) || "") : c instanceof HTMLLIElement ? (k = "li", r.item = c.value) : c instanceof HTMLUListElement ? k = "ul" : c instanceof HTMLFormElement ? k = "form" : c instanceof HTMLFrameElement ? (k = "frame", r.src = encodeURI(c.src)) : c instanceof
                                    HTMLInputElement ? (k = b(c.type) || "input", r.text = b(c.value), r.name = b(c.name)) : c instanceof HTMLTableElement ? k = "table" : c instanceof HTMLTableCaptionElement ? k = "tcap" : c instanceof HTMLTableCellElement ? k = "td" : c instanceof HTMLTableRowElement ? k = "tr" : (k = a.utils.isDefined(c.tagName) ? b(c.tagName) : "", a.log("M53", k)); r.kh = l; r.className = e; r.tagName = k; c instanceof Node && (r.text = r.text || b(m.Le(c, 30)) || ""); a.utils.isString(r.text) && (r.text = a.utils.isDefined(String.prototype.trim) ? r.text.trim() : r.text, r.text = r.text.substring(0,
                                        30)); return r
                        }; m.Fm = function () { a.utils.forEach(m.uc, function (b) { k(b, function (c) { c = c.target || c.srcElement; (c === document || c === window || c instanceof XMLHttpRequest || c instanceof HTMLElement) && null != c && c["on" + b] && (c["on" + b] = a.c.ac(b, c["on" + b], a.CauseType.USER, !0), c["on" + b].T = !0) }, !0) }) }; m.qi = function () { a.utils.forEach(m.uc, function (b) { k(b, function (c) { c = a.c.Fa(b, c, null, a.CauseType.USER); a.c.ka(c) }, !0); k(b, function () { a.c.I() }, !1) }) }; m.Ag = function (b) {
                            var c = !1; a.utils.isBoolean(b) ? c = b : a.utils.isObject(b) &&
                                a.utils.isDefined(b.capture) && (c = !!b.capture); return c
                        }; m.eg = function (b, c, m, l) { if (!a.utils.isDefined(b.eventListenerMap) || !a.utils.isDefined(b.eventListenerMap[c]) || !a.utils.isDefined(m)) return -1; b = b.eventListenerMap[c]; for (c = 0; c < b.length; c++)if (b[c][0] == m && b[c][1] == l) return c; return -1 }; m.af = function (b, c, m, l, f) {
                            a.utils.isDefined(b) && a.utils.isDefined(f) && (a.utils.isDefined(b.eventListenerMap) || (b.eventListenerMap = {}), a.utils.isDefined(b.eventListenerMap[c]) || (b.eventListenerMap[c] = []), b.eventListenerMap[c].push([m,
                                l, f]))
                        }; m.Cl = function (a, b, c) { if (-1 < c) { var m = a.eventListenerMap[b]; delete m[c]; m.splice(c, 1); 0 == m.length && delete a.eventListenerMap[b] } }; m.Gm = function () {
                            EventTarget.prototype.addEventListener = function (b, c, l) {
                                if (a.utils.isDefined(c) && c.T || !a.c.df(c) && !h(c)) return e.call(this, b, c, l); var f = m.Ag(l), k = a.utils.isDefined(this) ? this : window; if (!(-1 < m.eg(k, b, c, f))) {
                                    var g = c; switch (b) {
                                        case "click": case "dblclick": case "auxclick": case "mousedown": case "mouseup": case "drop": case "keyup": case "keydown": case "keypress": case "contextmenu": case "pageChanged": case "scroll": case "close": g =
                                            a.c.ac(b, c, a.CauseType.USER, !0); m.af(k, b, c, f, g); break; case "load": case "error": g = a.c.ac(b, c, a.CauseType.USER, !1), m.af(k, b, c, f, g)
                                    }e.call(k, b, g, l)
                                }
                            }
                        }; m.Hm = function () { EventTarget.prototype.removeEventListener = function (b, l, f) { if (a.utils.isDefined(l) && l.T) return c.call(this, b, l, f); var e = m.Ag(f), k = a.utils.isDefined(this) ? this : window, e = m.eg(k, b, l, e); 0 <= e ? (c.call(k, b, this.eventListenerMap[b][e][2], f), m.Cl(k, b, e)) : c.call(k, b, l, f) } }; m.bf = function (b) {
                            var c = HTMLElement.prototype, m = Object.getOwnPropertyDescriptor(c,
                                b); a.utils.isDefined(m) && a.utils.isDefined(m.set) && Object.defineProperty(c, b, { set: function (c) { var l = c; a.utils.isDefined(c) && (l = a.c.ac(b, c, a.CauseType.RESOURCE, !1)); var f; try { f = m.set.call(this, l) } catch (e) { throw e; } return f } })
                        }; return m
                    }(); l.uc = "click dblclick mousedown mouseup change scroll select submit keydown keypress keyup load unload".split(" "); a.Hd = l
                })(g || (g = {})); (function (a) {
                    (function (b) {
                        var k = a.utils.map, e = a.utils.Em, c = a.utils.isDefined, f = a.utils.isString, l = a.utils.Yi, m = a.utils.isFunction;
                        b.yf = function (a, b) { for (var c = !1, m = 0; m < b.length; m++) { var l = b[m]; if (l && l.test(a)) { c = !0; break } } return c }; b.Hb = function (a, m, l) { var f = !1; if (m && l) for (var e = 0; e < l.length; e++) { var k = l[e]; if (!(c(k.method) && a !== k.method || c(k.urls) && !b.yf(m, k.urls))) { f = !0; break } } return f }; b.mb = function (a, b) { return l(k(e(b), a)) }; b.Zb = function (a) { var c = b.Bj(a); a = b.Me(a); return c || a }; b.Bj = function (b) { var m = b.method; if (c(m)) { if (f(m)) return b; a.error("M54") } }; b.wm = function (a) { var c = b.Me(a); return b.wl(a) && c }; b.wl = function (b) {
                            if (m(b.getFromBody)) return b;
                            a.error("M55")
                        }; b.Ti = function (b) { for (var c = [], m = 0; m < b.length; m++) { var l = b[m].pattern; if (f(l)) try { c.push(new RegExp(l)) } catch (e) { a.exception(e, "M56") } else a.error("M57") } return c }; b.Me = function (a) { var c = a.urls; if (c && 0 < c.length && (a.urls = b.Ti(c), 0 < a.urls.length)) return a }
                    })(a.utils || (a.utils = {}))
                })(g || (g = {})); (function (a) {
                    a = a.events || (a.events = {}); a = a.b || (a.b = {}); a.navigationStart = "navigationStart"; a.domainLookupStart = "domainLookupStart"; a.domainLookupEnd = "domainLookupEnd"; a.connectStart = "connectStart";
                    a.secureConnectionStart = "secureConnectionStart"; a.connectEnd = "connectEnd"; a.requestStart = "requestStart"; a.responseStart = "responseStart"; a.responseEnd = "responseEnd"; a.domContentLoadedEventStart = "domContentLoadedEventStart"; a.loadEventEnd = "loadEventEnd"; a.fg = "sendTime"; a.Ee = "firstByteTime"; a.$f = "respAvailTime"; a.ag = "respProcTime"; a.ud = "viewChangeStart"; a.Cg = "viewChangeEnd"; a.vd = "viewDOMLoaded"; a.Jg = "xhrRequestsCompleted"; a.Sn = "viewFragmentsLoaded"; a.Tn = "viewResourcesLoaded"; a.wd = "virtualPageStart";
                    a.Bm = "virtualPageEnd"
                })(g || (g = {})); (function (a) {
                    var b = a.events || (a.events = {}); b.metricSpec = {}; b.metricSpec[a.EventType.PageView] = {
                        gj: { start: b.b.navigationStart, end: b.b.loadEventEnd, name: "PLT" }, oj: { start: b.b.navigationStart, end: b.b.responseStart, name: "FBT" }, Ln: { start: b.b.navigationStart, end: b.b.requestStart, name: "SCT" }, Mn: { start: b.b.secureConnectionStart, end: b.b.connectEnd, name: "SHT" }, nn: { start: b.b.domainLookupStart, end: b.b.domainLookupEnd, name: "DLT" }, Pn: {
                            start: b.b.connectStart, end: b.b.connectEnd,
                            name: "TCP"
                        }, In: { start: b.b.requestStart, end: b.b.responseStart, name: "RAT" }, pn: { start: b.b.responseStart, end: b.b.loadEventEnd, name: "FET" }, sn: { start: b.b.responseStart, end: b.b.domContentLoadedEventStart, name: "DRT" }, rn: { start: b.b.responseStart, end: b.b.responseEnd, name: "DDT" }, ln: { start: b.b.responseEnd, end: b.b.domContentLoadedEventStart, name: "DPT" }, Hn: { start: b.b.domContentLoadedEventStart, end: b.b.loadEventEnd, name: "PRT" }, mn: { start: b.b.navigationStart, end: b.b.domContentLoadedEventStart, name: "DOM" }
                    }; b.metricSpec[a.EventType.Ajax] =
                        { oj: { start: b.b.fg, end: b.b.Ee, name: "FBT" }, $m: { start: b.b.Ee, end: b.b.$f, name: "DDT" }, Zm: { start: b.b.$f, end: b.b.ag, name: "DPT" }, gj: { start: b.b.fg, end: b.b.ag, name: "PLT" } }; b.metricSpec[a.EventType.VPageView] = {
                            zn: { start: b.b.wd, end: b.b.Bm, name: "PLT" }, hn: { start: b.b.ud, end: b.b.Cg, name: "DDT" }, wn: { start: b.b.ud, end: b.b.vd, name: "DRT" }, Rm: { start: b.b.Cg, end: b.b.vd, name: "DPT" }, Sm: { start: b.b.ud, end: b.b.vd, name: "DOM" }, Gn: { start: "viewChangeEnd", end: "xhrRequestsCompleted", name: null }, xn: {
                                start: "viewChangeEnd", end: "viewPartialsLoaded",
                                name: null
                            }, vn: { start: "viewPartialsLoaded", end: "viewFragmentsLoaded", name: null }, yn: { start: "viewPartialsLoaded", end: "viewResourcesLoaded", name: null }
                        }; b.metricSpec[a.EventType.NG_VIRTUAL_PAGE] = b.metricSpec[a.EventType.VPageView]
                })(g || (g = {})); (function (a) {
                    (function (b) {
                        var k = function (e) { function c(f) { f = e.call(this, f) || this; f.constructor != c && f.constructor != b.AdrumAjax && a.reportAPIMessage(a.Q.ha, a.La, "ADRUM.events.Ajax", []); return f } u(c, e); c.prototype.type = function () { return a.EventType.Ajax }; return c }(b.EventTracker);
                        b.Ajax = k; b.Ea(b.O[a.EventType.Ajax], k.prototype); b.me(b.metricSpec[a.EventType.Ajax], k.prototype)
                    })(a.events || (a.events = {}))
                })(g || (g = {})); (function (a) { (function (b) { var k = function (b) { function c(a) { return b.call(this, a) || this } u(c, b); c.prototype.type = function () { return a.EventType.Ajax }; return c }(b.Ajax); b.AdrumAjax = k; b.Ea(b.O[a.EventType.ADRUM_XHR], k.prototype) })(a.events || (a.events = {})) })(g || (g = {})); (function (a) {
                    (function (b) {
                        var k = a.utils.isDefined, e = function () {
                            function c() { } c.Ja = function (b, l) {
                                a.conf.spa2 ?
                                c.Qi(b, l) : c.dg(b, l)
                            }; c.Qi = function (f, l) { var m = a.c.oc(f.g); if (k(a.monitor.AnySpaMonitor.vp) && !a.monitor.AnySpaMonitor.ua && a.monitor.AnySpaMonitor.vp.Ta == m) { l.parent(a.monitor.AnySpaMonitor.vp); if (++a.monitor.AnySpaMonitor.vp.ne > b.oa.maxPerPageView) return; c.dg(f, l) } else k(a.monitor.AnySpaMonitor.vp) && !a.monitor.AnySpaMonitor.ua && l.parent(a.monitor.AnySpaMonitor.vp), c.$c(l, f), b.oSTO(c.El, c.Uh); delete f._adrumAjaxT; a.k.w.L.ri(l.url()) }; c.dg = function (a, l) {
                                var m = {}; a.ee = m; delete a._adrumAjaxT; b.Rb(function () {
                                a.ee ===
                                    m && c.reportXhr(a, l)
                                })
                            }; c.reportXhr = function (b, l) { c.yg(b, l); a.command("reportXhr", l) }; c.$c = function (b, l) { if (k(l.g)) { var m = a.c.oc(l.g).guid; c.yg(l, b); k(c.da[m]) || (c.da[m] = []); -1 == c.da[m].indexOf(b) && c.da[m].push(b) } else a.log("~AnySPA: error in putInParentEventWaitingQueue() as xhr.adrum_causalEvent is undefined.") }; c.yg = function (a, c) {
                                var m = a.status, n; b.isNumber(m) && c.xhrStatus(m); a instanceof XMLHttpRequest && c.allResponseHeaders(a.getAllResponseHeaders()); if (400 <= m) {
                                    if (b.isString(a.statusText)) n = a.statusText;
                                    else try { b.isString(a.responseText) && (n = a.responseText) } catch (e) { b.isString(a.responseType) && (n = a.responseType) } c.error({ status: m, msg: n })
                                }
                            }; c.sm = function (a, b) { var c = ""; a.headers.forEach(function (a, b) { c += b + ": " + a + "\r\n" }); b.allResponseHeaders(c) }; c.Uf = function (a) { c.da[a] = []; delete c.da[a] }; c.Xk = function (b, l) { var m = c.da[l]; k(m) && (m.forEach(function (c) { c.parent(b); a.command("reportXhr", c) }), c.Uf(l)) }; c.El = function () {
                                for (var f in c.da) {
                                    for (var l = 0, m = c.da[f]; l < m.length; l++) {
                                        var n = m[l]; !k(a.monitor.AnySpaMonitor.vp) &&
                                            ++c.Ai <= b.oa.maxPerPageView ? a.command("reportXhr", n) : k(a.monitor.AnySpaMonitor.vp) && ++a.monitor.AnySpaMonitor.vp.ne <= b.oa.maxPerPageView && a.command("reportXhr", n)
                                    } c.Uf(f)
                                }
                            }; return c
                        }(); e.Uh = 2E3; e.da = {}; e.Ai = 0; b.bc = e
                    })(a.utils || (a.utils = {}))
                })(g || (g = {})); (function (a) {
                    (function (b) {
                        var k = a.utils.isDefined, e = function () {
                            function c() { } c.setUp = function () {
                            c.exclude = [{ urls: [new RegExp(a.conf.beaconUrlHttp + a.conf.corsEndpointPath), new RegExp(a.conf.beaconUrlHttps + a.conf.corsEndpointPath)] }]; c.include = []; c.maxPerPageView =
                                c.vl(a.conf.userConf && a.conf.userConf.xhr); c.payloadParams = []; c.parameter = {}; c.Of(a.conf.userConf && a.conf.userConf.xhr)
                            }; c.Of = function (a) { k(a) && (c.exclude = c.exclude.concat(b.mb(b.Zb, a.exclude)), c.include = c.include.concat(b.mb(b.Zb, a.include)), c.payloadParams = c.payloadParams.concat(b.mb(b.Zb, a.payloadParams)), c.parameter = b.mb(b.wm, a.parameter)) }; c.vl = function (f) {
                                if (k(f)) {
                                    f = f.maxPerPageView; if (b.isNumber(f) && 0 < f) return f; a.reportAPIMessage(a.Q.Pg, "value is not valid; don't limit xhr", "xhr.maxPerPageView",
                                        [f])
                                } return a.conf.spa2 ? c.Yg : c.Xg
                            }; c.Vb = function (a, l) { var m = c.include, n = c.exclude; return k(m) && 0 < m.length && !b.Hb(l, a, m) || k(n) && 0 < n.length && b.Hb(l, a, n) }; c.mg = function (a, l) { var m = c.payloadParams; b.Hb(a.method(), a.url(), m) && a.dataObject({ data: l }) }; return c
                        }(); e.Xg = 50; e.Yg = 250; b.oa = e
                    })(a.utils || (a.utils = {}))
                })(g || (g = {})); (function (a) {
                    (function (b) {
                    b.parseURI = function (a) {
                        var b = String(a).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
                        a = b && null != a.match(b[1] + "//"); return b && { href: b[0] || "", protocol: b[1] || "", slash: a ? "//" : "", username: b[2] || "", password: b[3] || "", host: b[4] || "", hostname: b[5] || "", port: b[6] || "", pathname: b[7] || "", search: b[8] || "", hash: b[9] || "" }
                    }; b.absolutizeURI = function (a, e) {
                        function c(a) { var b = []; a.replace(/^(\.\.?(\/|$))+/, "").replace(/\/(\.(\/|$))+/g, "/").replace(/\/\.\.$/, "/../").replace(/\/?[^\/]*/g, function (a) { "/.." === a ? b.pop() : b.push(a) }); return b.join("").replace(/^\//, "/" === a.charAt(0) ? "/" : "") } var f, l, m, n, q, t, g,
                            r; r = e ? b.parseURI(e) : {}; g = a ? b.parseURI(a) : {}; r.protocol ? (f = r.protocol, l = r.slash, m = r.username, n = r.password, q = r.host, t = c(r.pathname), g = r.search) : r.host ? (f = g.protocol, l = g.slash, m = r.username, n = r.password, q = r.host, t = c(r.pathname), g = r.search) : (f = g.protocol, l = g.slash, m = g.username, n = g.password, q = g.host, r.pathname ? ("/" === r.pathname.charAt(0) ? t = c(r.pathname) : (t = g.pathname ? g.pathname.slice(0, g.pathname.lastIndexOf("/") + 1) + r.pathname : l ? "/" + r.pathname : r.pathname, t = c(t)), g = r.search) : (t = c(g.pathname), g = r.search ||
                                g.search)); return f + l + (m ? m + (n ? ":" + n : "") + "@" : "") + q + t + g + (r.hash ? r.hash : "")
                    }; b.getFullyQualifiedUrl = function (k) { try { var e, c = document.location.href, f; a: { for (var l = document.getElementsByTagName("base"), m = 0; m < l.length; m++) { var n = l[m].href; if (n) { f = n; break a } } f = void 0 } e = f ? b.absolutizeURI(c, f) : c; return b.absolutizeURI(e, k) } catch (q) { return a.exception(q, "M58", k, e), k } }
                    })(a.utils || (a.utils = {}))
                })(g || (g = {})); (function (a) {
                    (function (b) {
                        var k = a.utils.isString, e = function (c) {
                            function f() {
                                var a = c.call(this) || this; a.Z =
                                    0; a.Z = 0; return a
                            } u(f, c); f.prototype.Qb = function () { this.Z = 0 }; f.H = function (b) { var c = b.message || b.description, n = b.fileName || b.filename, f = b.lineNumber, e = b.columnNumber; k(b.description) && 0 <= b.description.indexOf("Access is denied.") && (c += ": maybe you have CORS XHR error in IE"); a.monitor.ca.ya(c, n, f, e, b) }; f.hf = function (a) { var c = document.createElement("a"); c.href = a; a = document.location; var n = a.protocol; return c.protocol === n && c.hostname === a.hostname && f.pl(b.XHRMonitor.Xi[n], c.port, a.port) }; f.pl = function (a,
                                b, c) { return (b || a) === (c || a) }; return f
                        }(b.cc); e.Xi = { "http:": "80", "https:": "443" }; b.pa = e
                    })(a.monitor || (a.monitor = {}))
                })(g || (g = {})); (function (a) {
                    (function (b) {
                        var k = a.utils.oa, e = a.utils.bc, c = a.utils.mergeJSON, f = a.events.AdrumAjax, l = a.utils.isString, m = a.utils.isDefined, n = a.utils.isNumber, q = a.utils.getFullyQualifiedUrl, g = a.conf.spa2, p = function (r) {
                            function s() { return null !== r && r.apply(this, arguments) || this } u(s, r); s.prototype.setUp = function () {
                                var l = this, n = window.fetch; a.log("M59"); m(n) && (window.fetch = a.aop.around(function (c) {
                                    return function (m,
                                        n) {
                                            var f = arguments; a.log("M60", l._adrumAjaxT.url(), l._adrumAjaxT.method()); var k = a.utils.now(); b.pa.hf(l._adrumAjaxT.url()) && (f = s.li(arguments)); var q = c.apply(this, f), r = new window.Promise(function (b, c) {
                                                q.then(function (c) {
                                                    a.log("M61", l._adrumAjaxT.url()); a.log("M62", k, l._adrumAjaxT.url()); e.sm(c, r._adrumAjaxT); r._adrumAjaxT.markFirstByteTime(r._adrumAjaxT.getFirstByteTime() || a.utils.now()); if (h(c.clone)) {
                                                        a.log("M63", l._adrumAjaxT.url()); var m = c.clone().text(); m["catch"](function () { s.Ac(r) }); s.Uj(m,
                                                            r)
                                                    } else a.log("M64", l._adrumAjaxT.url()), s.Zl(r, c); b(c)
                                                }); q["catch"](function (b) { a.log("M65", l._adrumAjaxT.url()); r._adrumAjaxT.markFirstByteTime(r._adrumAjaxT.getFirstByteTime() || a.utils.now()); s.Ac(r); c(b) })
                                            }); r._adrumAjaxT = l._adrumAjaxT; r.T = !0; r._adrumAjaxT.timestamp(k); r._adrumAjaxT.markSendTime(k); r._adrumAjaxT.parentPhase(a.lifecycle.getPhaseName()); s.Tl(r._adrumAjaxT, arguments); a.log("M66", k, l._adrumAjaxT.url()); g && (r.g = new a.qb(a.c.ea(), new a.Da("window.fetch"), a.CauseType.FETCH)); return r
                                    }
                                }(n),
                                    function () { var m = s.Mj(arguments); !g && ++l.Z + b.xhrMonitor.Z >= k.maxPerPageView || k.Vb(m.url, m.method) ? a.log("M67", m.url) : (l._adrumAjaxT = new f(c(m, l.status)), g && (l.g = a.c.Fa("window.fetch.send", void 0, a.c.ea(), a.CauseType.FETCH), a.c.ka(l.g))) }, function () { !g && l.Z + b.xhrMonitor.Z >= k.maxPerPageView ? a.log("M68", l._adrumAjaxT.url()) : k.Vb(l._adrumAjaxT.url(), l._adrumAjaxT.method()) ? a.log("M69", l._adrumAjaxT.url()) : g && (a.k.w.L.fe(l._adrumAjaxT.url()), a.c.I()) }, "fetch", b.pa.H))
                            }; s.Uj = function (b, c) {
                                b.then(function () {
                                    var b =
                                        a.utils.now(); if (s.Y(c)) { s.tf(c._adrumAjaxT, b); var l = c._adrumAjaxT.getRespProcTime(); m(l) || m(c._adrumAjaxT.n) && 0 !== c._adrumAjaxT.n || (a.log("M70", b, c._adrumAjaxT.url()), c._adrumAjaxT.markRespProcTime(b), e.Ja(c, c._adrumAjaxT)) }
                                })["catch"](function () { s.Ac(c) })
                            }; s.Ac = function (b) { a.log("M71", b._adrumAjaxT.url()); var c = a.utils.now(); s.Y(b) && (s.tf(b._adrumAjaxT, c), s.uf(b._adrumAjaxT, c), e.Ja(b, b._adrumAjaxT)) }; s.tf = function (b, c) { var l = b.getRespAvailTime(); m(l) || (a.log("M72", c, b.url()), b.markRespAvailTime(c)) };
                            s.uf = function (b, c) { var l = b.getRespProcTime(); if (m(l)) return !1; a.log("M73", c, b.url()); b.markRespProcTime(c); return !0 }; s.Zl = function (a, b) { b.zi = s.nb(a, b.zi); b.Fi = s.nb(a, b.Fi); b.qj = s.nb(a, b.qj); b.Sk = s.nb(a, b.Sk); b.text = s.nb(a, b.text) }; s.nb = function (b, c) { return a.aop.around(c, function () { s.Y(b) && b._adrumAjaxT.markRespAvailTime(a.utils.now()) }, function () { s.Y(b) && (b._adrumAjaxT.markRespProcTime(a.utils.now()), e.Ja(b, b._adrumAjaxT)) }, "wrapResponseReader", a.monitor.ErrorMonitor.H) }; s.li = function (a) {
                                1 == a.length ?
                                l(a[0]) ? ([].push.call(a, {}), s.lc(a[1])) : s.lc(a[0]) : 2 == a.length && s.lc(a[1]); return a
                            }; s.lc = function (b) { m(b) && (m(b.headers) || (b.headers = new Headers, a.log("M74")), b.headers instanceof Headers ? b.headers.has("ADRUM") ? b.headers.set("ADRUM", "isAjax:true") : b.headers.append("ADRUM", "isAjax:true") : b.headers.ADRUM = "isAjax:true") }; s.Tl = function (b, c) { 2 <= c.length && a.utils.isObject(c[1]) && m(c[1].body) && k.mg(b, c[1].body) }; s.Mj = function (b) {
                                var c = { url: "", method: "" }; a.utils.isObject(b[0]) ? (c.url = b[0].url, c.method = b[0].method ||
                                    "GET") : l(b[0]) && (c.url = b[0], c.method = b[1] && b[1].method || "GET"); c.url = m(c.url) ? c.url : ""; c.url = q(c.url); c.method = c.method; return c
                            }; s.ek = function (b) { var c; m(c) || (a.log("M75", b._adrumAjaxT.url()), c = 1); m(b._adrumAjaxT.n) && n(b._adrumAjaxT.n) && (b._adrumAjaxT.n += c, a.log("M76", b._adrumAjaxT.n, b._adrumAjaxT.url())) }; s.xb = function (b) { var c; m(c) || (a.log("M77", b._adrumAjaxT.url()), c = 1); m(b._adrumAjaxT.n) && n(b._adrumAjaxT.n) && (b._adrumAjaxT.n -= c, a.log("M78", b._adrumAjaxT.n, b._adrumAjaxT.url())) }; s.Y = function (a) { return m(a._adrumAjaxT) };
                            s.Eb = function (a) { return m(a._adrumAjaxT.n) }; s.um = function (b, c) { b._adrumAjaxT = c._adrumAjaxT; b._adrumAjaxT.n += b.C; a.log("M79", b._adrumAjaxT.n, c._adrumAjaxT.url()); b.C = 0 }; s.xm = function (a) { var b = !1; s.Y(a) && m(a._adrumAjaxT.n) && (s.ek(a), b = !0); return b }; s.ad = function (a) { e.Ja(a, a._adrumAjaxT) }; s.td = function (b) { var c = a.utils.now(); return 0 === b._adrumAjaxT.n && m(b._adrumAjaxT) ? s.uf(b._adrumAjaxT, c) : !1 }; s.sd = function (b) {
                                var c = !1, l = a.utils.now(), n = b._adrumAjaxT.getRespAvailTime(); m(n) || (b._adrumAjaxT.markRespAvailTime(l),
                                    c = !0); return c
                            }; s.gk = function (b) { a.log("M80", b._adrumAjaxT.url()); b._adrumAjaxT.n = 0 }; return s
                        }(b.pa); b.Jd = p; b.Xa = new b.Jd
                    })(a.monitor || (a.monitor = {}))
                })(g || (g = {})); (function (a) {
                    (function (b) {
                        var k = a.utils.isObject, e = a.utils.map, c = a.utils.reduce, f = a.utils.filter, l = a.utils.isDefined, m = a.utils.isString, n = a.utils.mergeJSON, q = a.utils.qa, g = a.utils.Rb, p = a.utils.oa, r = a.utils.bc, s = a.conf.spa2, w = function (w) {
                            function v() {
                                var b = w.call(this) || this; b.md = !1; if (!0 === window["adrum-xhr-disable"]) return a.log("M81"),
                                    b; if (!window.XMLHttpRequest) return a.log("M82"), b; b.B = window.XMLHttpRequest.prototype; if (!b.B) return a.log("M83"), b; if (!("open" in b.B && "send" in b.B)) return a.log("M84"), b; b.md = a.aop.support(b.B.open) && a.aop.support(b.B.send); b.md || a.log("M85"); return b
                            } u(v, w); v.prototype.setUp = function () {
                                if (this.md) {
                                    a.log("M86"); a.xhrConstructor = window.XMLHttpRequest; a.xhrOpen = this.xhrOpen = this.B.open; a.xhrSend = this.xhrSend = this.B.send; p.setUp(); var c = this; this.B.open = a.aop.around(this.B.open, function () {
                                        v.Gk(this) &&
                                        (4 === this.readyState ? (a.log("M87"), v.ij(this._adrumAjaxT), delete this.ee, r.reportXhr(this, this._adrumAjaxT)) : a.log("M88", this._adrumAjaxT.url())); var m = 1 <= arguments.length ? String(arguments[0]) : "", l = 2 <= arguments.length ? String(arguments[1]) : "", l = a.utils.getFullyQualifiedUrl(l); !s && c.Z + b.Xa.Z >= p.maxPerPageView || p.Vb(l, m) || (this._adrumAjaxT = new a.events.AdrumAjax(n({ method: m, url: l }, c.status)))
                                    }, null, "XHR.open", b.pa.H); this.B.send = a.aop.around(this.B.send, function (l) {
                                        var n = this, f = this._adrumAjaxT, e = !1;
                                        if (!(!f || !s && ++c.Z + b.Xa.Z >= p.maxPerPageView)) {
                                            var k = a.utils.now(), q = f.getSendTime(); a.assert(null === q, "M89"); f.timestamp(k); f.markSendTime(q || k); f.parentPhase(a.lifecycle.getPhaseName()); s && (n.g = a.c.Fa("XHR.send", void 0, a.c.ea(), a.CauseType.XHR)); b.pa.hf(f.url()) ? n.setRequestHeader("ADRUM", "isAjax:true") : a.log("M90", document.location.href, f.url()); p.mg(f, l); l = v.Ij(f.url(), p.parameter, l); f.parameter(l); var r = 0, w = function () {
                                                if (4 == n.readyState) e ? a.log("M91") : (a.log("M92"), c.$b(n)); else {
                                                    var b = null; try {
                                                        b =
                                                        n.onreadystatechange
                                                    } catch (l) { if (e) { a.log("M93", l); return } a.log("M94", l); c.$b(n); return } r++; b ? a.aop.support(b) ? (n.onreadystatechange = v.xe(b, "XHR.onReadyStateChange"), a.log("M95", r)) : m || (a.log("M96"), c.$b(n)) : r < v.hi ? g(w) : e ? a.log("M97") : (a.log("M98"), c.$b(n))
                                                }
                                            }; if (m) { a.log("M99"); try { c.Km.call(n, "readystatechange", v.Zi), e = !0 } catch (z) { a.error("M100", z) } } w()
                                        }
                                    }, function () { if (s) { var b = this._adrumAjaxT; b && a.k.w.L.fe(b.url()) } }, "XHR.send", b.pa.H); var m = "addEventListener" in this.B && "removeEventListener" in
                                        this.B && a.aop.support(this.B.addEventListener) && a.aop.support(this.B.removeEventListener); if (m) {
                                            var f = a.utils.Je(this.B, "addEventListener"); this.Km = f.addEventListener; f.addEventListener = a.aop.around(f.addEventListener, function (b, c, m) { if (l(c) && (c.T = !0, this instanceof XMLHttpRequest && /^(load|error|readystatechange)$/.test(b) && c)) { var n = v.qm(c); if (n) { var f = q(arguments); f[1] = n; a.log("M101"); return f } a.log("M102", b, c) } }, null, "XHR.addEventListener"); f = a.utils.Je(this.B, "removeEventListener"); this.Mm = f.removeEventListener;
                                            f.removeEventListener = a.aop.around(f.removeEventListener, function (b, m, l) { if (this instanceof XMLHttpRequest && this._adrumAjaxT) { var n = q(arguments); m.__adrumInterceptor ? (n[1] = m.__adrumInterceptor, a.log("M103"), c.Mm.apply(this, n)) : a.log("M104") } }, null, "XHR.removeEventListener")
                                        } else a.log("M105"); a.log("M106")
                                }
                            }; v.Ij = function (b, m, l) { if (m && (m = f(e(f(m, function (c) { return a.utils.yf(b, c.urls) }), function (a) { return a.getFromBody(l) }), k), 0 < m.length)) return c(m, n, {}) }; v.Hc = function (b) {
                                var c = b._adrumAjaxT; if (c) {
                                    var m =
                                        a.utils.now(); 2 == b.readyState ? c.markFirstByteTime(c.getFirstByteTime() || m) : 4 == b.readyState && (c.markRespAvailTime(c.getRespAvailTime() || m), c.markFirstByteTime(c.getFirstByteTime() || m), s && (b = b.g = a.c.Fa("XHR.load", void 0, b.g, a.CauseType.XHR), a.c.ka(b)))
                                }
                            }; v.Ue = function (b) { var c = b._adrumAjaxT; if (c && 4 == b.readyState) { var m = a.utils.now(), l = c.getRespProcTime(); c.markRespAvailTime(c.getRespAvailTime() || m); m > l && c.markRespProcTime(m); r.Ja(b, c); a.conf.spa2 && a.c.I() } }; v.xe = function (a, b) {
                                return v.Lm(a, function () { v.Hc(this) },
                                    function () { v.Ue(this) }, b)
                            }; v.Zi = function () { v.Hc(this); v.Ue(this) }; v.Gk = function (a) { return l(a._adrumAjaxT) && m(a._adrumAjaxT._url) }; v.ij = function (b) { var c = a.utils.now(); b.markRespAvailTime(b.getRespAvailTime() || c); b.markFirstByteTime(b.getFirstByteTime() || c); b.markRespProcTime(b.getRespProcTime() || c) }; v.prototype.$b = function (b) {
                                if (b._adrumAjaxT) {
                                    var c = a.utils.now() + 3E4, m = function () {
                                        v.Hc(b); var l = b._adrumAjaxT; if (l) {
                                            var n = a.utils.now(); 4 == b.readyState ? (a.assert(null === l.getRespProcTime(), "M107"), l.markRespProcTime(l.getRespProcTime() ||
                                                n), a.log("M108"), r.Ja(b, l), a.conf.spa2 && a.c.I()) : n < c ? a.utils.oSTO(m, v.Gd) : (delete b._adrumAjaxT, a.log("M109"))
                                        }
                                    }; m()
                                }
                            }; v.Lm = function (b, c, m, l) { var n = b; b && "object" === typeof b && "toString" in b && "[xpconnect wrapped nsIDOMEventListener]" === b.toString() && "handleEvent" in b && (n = function () { b.handleEvent.apply(this, q(arguments)) }); return a.aop.around(n, c, m, l) }; v.qm = function (b) {
                                if (b.__adrumInterceptor) return b.__adrumInterceptor; if (a.aop.support(b)) {
                                    var c = v.xe(b, "XHR.invokeEventListener"); return b.__adrumInterceptor =
                                        c
                                }
                            }; return v
                        }(b.pa); w.hi = 5; w.Gd = 50; b.XHRMonitor = w; b.xhrMonitor = new b.XHRMonitor
                    })(a.monitor || (a.monitor = {}))
                })(g || (g = {})); (function (a) {
                    (function (b) {
                        var k = a.utils.bc, e = function (c) {
                            function f(b) { b = c.call(this, b) || this; b.perf = new a.PerformanceTracker; b.ye = !1; b.ne = 0; return b } u(f, c); f.prototype.type = function () { return a.EventType.VPageView }; f.prototype.Dc = function () { return b.EventTracker.kc(this.guid(), this.url(), this.type()) }; f.prototype.jd = function () {
                                var b = this.Dc(); a.monitor.ca.set("parent", b); a.log("M110",
                                    b.guid(), b.url())
                            }; f.prototype.startCorrelatingXhrs = function () { a.log("M111"); a.utils.isDefined(this.Ta) && !a.monitor.AnySpaMonitor.ua && k.Xk(this, this.Ta.guid) }; f.prototype.start = function () { this.startCorrelatingXhrs(); this.jd() }; return f
                        }(b.EventTracker); b.AnySpaVPageView = e; b.Ea(b.O[a.EventType.VPageView], e.prototype)
                    })(a.events || (a.events = {}))
                })(g || (g = {})); (function (a) {
                a.report = function (b) {
                    a.utils.isObject(b) && a.utils.isFunction(b.type) ? -1 == [a.EventType.PageView, a.EventType.Ajax, a.EventType.VPageView,
                    a.EventType.Error].indexOf(b.type()) ? a.reportAPIMessage(a.Q.ha, b.type() + "is not a valid external event type", "ADRUM.report", Array.prototype.slice.call(arguments)) : a.conf.spa2 && a.EventType.VPageView == b.type() ? a.log("M112") : a.utils.Rb(function () { a.command("reportEvent", b) }) : a.reportAPIMessage(a.Q.Ad, "", "ADRUM.report", Array.prototype.slice.call(arguments))
                }; a.markVirtualPageBegin = function (b, k) {
                    a.conf.spa2 && (this.Jc = a.utils.isDefined(k) ? k : !0, a.log("M113", document.URL), a.monitor.AnySpaMonitor.gd(document.URL,
                        b, !0), a.monitor.AnySpaMonitor.ig())
                }; a.markVirtualPageEnd = function () { a.conf.spa2 && this.Jc && (a.log("M114", a.monitor.AnySpaMonitor.ga), a.monitor.AnySpaMonitor.vf(a.monitor.AnySpaMonitor.vp.startTime, a.utils.now()), this.Jc = !1) }
                })(g || (g = {})); (function (a) {
                    (function (b) {
                        var k = a.utils.isDefined, e = a.aop.after, c = a.aop.before, f = function () {
                            function l() { } l.prototype.setUp = function () {
                                var c = !1; l.Bi = a.utils.Wa(); a.c.setUp(); a.Hd.setUp(); l.Wl(); a.k.w.setUp(a.utils.now()); l.ga = document.URL; l.zc = []; a.utils.isDefined(window.history) &&
                                    a.utils.isFunction(window.history.pushState) && (c = !0, window.history.pushState = a.aop.around(window.history.pushState, function () { b.DOMEventsMonitor.Lb && (a.log("M115"), l.gd(document.URL)) }, function () { b.DOMEventsMonitor.Lb && (a.log("M116"), l.ig()); l.ga = document.URL }, "historyPushState")); l.zc = l.zc.concat(a.utils.mb(a.utils.Zb, a.conf.userConf && a.conf.userConf.spa && a.conf.userConf.spa.spa2 && a.utils.isObject(a.conf.userConf.spa.spa2) && a.conf.userConf.spa.spa2.vp && a.conf.userConf.spa.spa2.vp.exclude)); if (a.utils.isDefined(window.addEventListener)) {
                                        var c =
                                            !0, n = function () { l.ga != document.URL && l.jg() }; n.T = !0; window.addEventListener("popstate", n)
                                    } c || a.log("M117")
                            }; l.jg = function () { var c = document.URL; a.log("M118", l.ga, c); b.DOMEventsMonitor.Lb && (l.gd(l.ga), l.kd(c)); l.ga = c }; l.Wl = function () { var b; a.c.ka = e(a.c.ka, function () { b = location.hash }); a.c.I = c(a.c.I, function () { b != location.hash && l.ga != document.URL && l.jg() }) }; l.gd = function (a, b, c) { l.Ql(); l.ua = !1; l.we(a, b, c) }; l.ig = function () { var a = document.URL; l.kd(a); l.ga = a }; l.Ri = function () { l.ua = !0; l.we(l.ga); l.kd() }; l.Ql =
                                function () { if (!l.ua && a.utils.isDefined(l.vp) && !l.vp.Wf) { var b = l.yj(a.k.w.F); l.vf(l.vp.startTime, b) } }; l.yj = function (b) { var c = a.utils.now(); b ? (c = l.zj(a.k.w.Za), a.k.w.reset()) : c = l.vp.timestamp(); return c }; l.am = function (b, c) { return l.vp.ye ? !1 : k(c) && 0 < c.length && a.utils.Hb(void 0, b, c) }; l.zj = function (b) { var c = a.utils.now(); b ? a.k.w.M.xi() || a.k.w.L.yi() || (c = a.utils.max(a.k.w.M.Ga, a.k.w.L.Ha)) : c = a.k.w.startTime; return c }; l.vf = function (a, b) { l.wf(a, b); l.sf(a); l.report() }; l.we = function (b, c, f) {
                                    l.reset(); l.vp = new a.events.AnySpaVPageView;
                                    l.vp.startUrl = b; a.utils.isDefined(c) && (l.vp.userPageName = c); a.utils.isBoolean(f) && (l.vp.ye = f); b = a.c.nc(); l.vp.startTime = l.ua ? a.utils.Wa() : a.utils.isDefined(b) ? b.start : a.utils.now(); l.vp.Ta = b
                                }; l.kd = function (b) { a.utils.isDefined(b) && l.vp.url(b); l.vp.start(); a.Jc || a.k.w.start(a.utils.now()) }; l.wf = function (b, c) { a.utils.isDefined(l.vp) && (a.utils.isDefined(c) ? l.vp.timestamp(c) : l.vp.timestamp(b)) }; l.sf = function (c) { a.utils.isDefined(l.vp) && l.vp.resTiming(b.resourceMonitor.Pj(l.Bi, c)) }; l.Kc = function () {
                                    var b =
                                        a.c.Sj(); return a.utils.isDefined(b) && a.utils.isDefined(l.vp) && (!a.utils.isDefined(l.vp.Ta) || l.vp.Ta != b)
                                }; l.report = function () { if (a.utils.isDefined(l.vp)) if (l.am(l.vp.url(), l.zc)) a.log("M120", l.vp.url()); else { a.log("M121"); var c = l.vp; c.Wf ? a.log("M122") : (c.parentUrl(b.DOMEventsMonitor.currentBasePage.url()), a.command("call", function () { a.reporter.reportEvent(c) }), c.Wf = !0) } else a.log("M119") }; l.reset = function () { l.vp = null }; return l
                        }(); b.AnySpaMonitor = f; b.wi = new b.AnySpaMonitor
                    })(a.monitor || (a.monitor =
                        {}))
                })(g || (g = {})); (function (a) {
                    (function (b) {
                        var k = function () {
                            function e() { this.M = new b.bh; this.L = new b.Sg; this.$k = 3E3; this.maxInactiveTime = a.conf.userConf && a.conf.userConf.navComplete && a.conf.userConf.navComplete.maxInactiveTime ? a.conf.userConf.navComplete.maxInactiveTime : Math.max(this.M.ab, this.L.ab) + this.$k; this.Nf = 1E3 } e.prototype.setUp = function (a) { this.currentTime = this.startTime = a; this.F = this.Za = !1; this.M.setUp(a); this.L.setUp(a) }; e.prototype.start = function (a) {
                                this.setUp(a); this.F = !0; this.M.start(a);
                                this.L.start(a); this.re(); this.em()
                            }; e.prototype.em = function () { this.vg = a.utils.l.setInterval.call(window, function () { this.currentTime = a.utils.now(); var b = a.utils.max(this.M.Ga, this.L.Ha); this.currentTime - b >= this.maxInactiveTime && (this.navComplete(this.Za ? this.currentTime : b), this.reset()) }.bind(this), this.Nf) }; e.prototype.pg = function () { this.Za || (this.cm(), this.Za = !0) }; e.prototype.re = function () { a.utils.isDefined(this.Rf) && clearInterval(this.Rf); a.utils.isDefined(this.vg) && clearInterval(this.vg) }; e.prototype.reset =
                                function () { this.re(); this.F = this.Za = !1; this.M.reset(); this.L.reset() }; e.prototype.navComplete = function (b) {
                                    var f = a.utils.isDefined(a.monitor.AnySpaMonitor.vp && a.monitor.AnySpaMonitor.vp.startTime) ? a.monitor.AnySpaMonitor.vp.startTime : this.startTime; a.log("M123", b - f); if (a.conf.devMode) { var l = a.utils.isDefined(a.monitor.AnySpaMonitor.vp) ? f : a.utils.Wa(); a.Ba.Mi(l); a.Ba.reset() } a.monitor.resourceMonitor.basePageResourceBuffer = []; a.monitor.AnySpaMonitor.wf(f, b); a.monitor.AnySpaMonitor.ua || (a.monitor.AnySpaMonitor.sf(f),
                                        a.monitor.AnySpaMonitor.report())
                                }; e.prototype.cm = function () { this.Rf = a.utils.l.setInterval.call(window, function () { this.currentTime = a.utils.now(); var b = this.M.Ic(this.currentTime); 0 <= b && a.log("M124", b - this.startTime); b = this.L.Ic(this.currentTime); 0 <= b && a.log("M125", b - this.startTime); this.L.F || this.M.F || (this.navComplete(a.utils.max(this.L.Ha, this.M.Ga)), this.reset()) }.bind(this), this.Nf) }; return e
                        }(); b.Qh = k; b.w = new b.Qh
                    })(a.k || (a.k = {}))
                })(g || (g = {})); (function (a) {
                    var b = function () {
                        function b() {
                        this.Xb =
                            []; this.Pb(b.jc, 0)
                        } b.prototype.dl = function (a) { this.Pb(b.ge, a) }; b.prototype.fl = function (a) { this.Pb(b.oe, a) }; b.prototype.el = function (a) { this.Pb(b.ie, a) }; b.prototype.Pb = function (a, b) { this.Xb.push({ cl: (new Date).getTime(), bl: b, Kf: a }); this.Ui = a }; b.prototype.getPhaseName = function () { return this.Ui }; b.prototype.getPhaseID = function (a) { for (var c = 0; c < b.le.length; c++)if (b.le[c] === a) return c; return null }; b.prototype.getPhaseCallbackTime = function (a) {
                            for (var b = this.Xb, f = 0; f < b.length; f++)if (b[f].Kf === a) return b[f].cl;
                            return null
                        }; b.prototype.findPhaseAtNominalTime = function (e) { a.assert(0 <= e); for (var c = this.Xb, f = c.length - 1; 0 <= f; f--)if (e >= c[f].bl) return c[f].Kf; a.error("M126", e, a.utils.dumpObject(c)); return b.jc }; return b
                    }(); b.jc = "AFTER_FIRST_BYTE"; b.ge = "AFTER_DOM_INTERACTIVE"; b.oe = "AT_ONLOAD"; b.ie = "AFTER_ONLOAD"; b.le = [b.jc, b.ge, b.oe, b.ie]; a.PageLifecycleTracker = b; a.lifecycle = new b; a.lifecycle = a.lifecycle
                })(g || (g = {})); (function (a) {
                    (function (b) {
                        var k = function (b) {
                            function c() {
                                return null !== b && b.apply(this, arguments) ||
                                    this
                            } u(c, b); c.prototype.type = function () { return a.EventType.PageView }; return c
                        }(b.EventTracker); b.PageView = k
                    })(a.events || (a.events = {}))
                })(g || (g = {})); (function (a) {
                    (function (b) {
                        var k = a.utils.now, e = function () {
                            function c() { } c.prototype.setUp = function () { var b = document.readyState; if ("loading" === b) a.log("M127"), c.Xl(), c.lg(); else { var l = { timeStamp: k() }; c.Na(l); "interactive" === b ? (a.log("M128"), c.lg()) : (a.log("M129"), c.gb(l), c.Gf(l)) } }; c.lg = function () {
                                a.utils.addEventListener(window, "load", c.gb); a.utils.addEventListener(window,
                                    "load", c.Gf)
                            }; c.Gf = function (f) { c.currentBasePage = new a.events.PageView; a.lifecycle.fl(f && f.timeStamp); a.utils.Rb(function () { var l = k(); a.lifecycle.el(l); a.command("mark", "onload", l); c.Lb = !0; b.PerformanceWrapper.perf && (b.navMonitor.Pi(), b.resourceMonitor.Oi()); a.command("reportOnload", c.currentBasePage); a.conf.devMode && a.Ba.$i(); a.conf.devMode || a.k.w.M.kg(); a.conf.spa2 && b.AnySpaMonitor.Ri(); a.utils.loadScriptAsync(a.conf.adrumExtUrl) }); a.log("M130") }; c.Xl = function () {
                                if (a.utils.isFunction(document.addEventListener)) document.addEventListener("DOMContentLoaded",
                                    c.Na, !1); else if (a.utils.isObject(document.attachEvent)) { document.attachEvent("onreadystatechange", c.Na); var b = null; try { b = null === window.frameElement ? document.documentElement : null } catch (l) { } null != b && b.doScroll && function n() { if (!c.isReady) { try { b.doScroll("left") } catch (l) { a.utils.oSTO(n, 10); return } c.gb() } }() } else a.exception("M131"); a.log("M132")
                            }; c.gb = function (b) { c.xf || (a.lifecycle.dl(b && b.timeStamp), a.command("mark", "onready", k()), c.xf = !0) }; c.Na = function (a) {
                                document.addEventListener ? (document.removeEventListener("DOMContentLoaded",
                                    c.Na, !1), c.gb(a)) : "complete" === document.readyState && (document.detachEvent("onreadystatechange", c.Na), c.gb(a))
                            }; return c
                        }(); e.isReady = !1; e.xf = !1; e.Lb = !1; b.DOMEventsMonitor = e; b.domEventsMonitor = new b.DOMEventsMonitor
                    })(a.monitor || (a.monitor = {}))
                })(g || (g = {})); (function (a) {
                    var b = a.utils.isDefined, k = a.utils.isNumber, e = a.monitor.Jd; a.Gg = window.Promise; a.ub = null; a.Qn = null; a.Th = Object.defineProperty; var c = a.conf.spa2 && a.conf.modernBrowserFeaturesAvailable, f = a.conf.isAngular, l = function () {
                        function m() { } m.lk =
                            function () { Object.defineProperty = a.aop.around(a.Th, function (c, l, f) { if ("Promise" === l && b(f)) { b(window.Zone) && b(window.Zone.assertZonePatched) && (window.Zone.assertZonePatched = function () { }); var k = f.set, g = f.get; b(k) && h(k) && (f.set = function (c) { !0 !== c.agentPromise && (k.apply(this, arguments), b(a.ub) ? k.apply(this, arguments) : (m.setUp(), (new e).setUp())) }); b(g) && h(g) && (f.get = function () { var c = g.apply(this, arguments); b(a.ub) && (c = a.ub); return c }) } }) }; m.setUp = function () {
                                if (b(a.Gg)) {
                                    m.ok(); m.nk(); var l = function (l) {
                                        function f(n) {
                                            var e =
                                                this.constructor, k = n; this.W = a.utils.generateGUID(); b(n) && (k = m.mk(n, this)); n = a.utils.ji(this, l, [k], e); c && (b(this.g) && (n.g = this.g), b(this.xa) ? n.g = this.xa.g : n.g = a.c.ea()); n.W = this.W; this.xa = n; a.log("M133", n.W); c && b(n.g) && a.log("M134", n.g.guid); return n
                                        } a.utils.gc(f, l); return f
                                    }(window.Promise); l.agentPromise = !0; a.ub = l; window.Promise = l
                                }
                            }; m.ra = function (l, f) {
                                return function () {
                                    if (c) {
                                        var e, k = e = void 0; a.log("M135", l); switch (l) {
                                            case m.G.Qd: case m.G.Pd: case m.G.Dd: case m.G.Cd: a.utils.isDefined(f) && a.utils.isDefined(f.xa) &&
                                                (e = f.xa.g); e = a.c.ea() || e; k = new a.qb(e, new a.Da(l), a.CauseType.PROMISE); break; case m.G.Nd: case m.G.Od: case m.G.Md: e = f.g, k = new a.qb(e, new a.Da(l), a.CauseType.PROMISE), a.c.ka(k)
                                        }b(f) && (b(f.xa) ? (f.xa.g = k, a.log("M136", f.xa.W)) : (a.log("M137", f.W), f.g = k))
                                    }
                                }
                            }; m.mk = function (l, f) {
                                c && (l = a.aop.around(l, function () {
                                f.g = new a.qb(a.c.ea(), new a.Da(m.G.nh), a.CauseType.PROMISE); a.c.ka(f.g); a.log("M138", f.g.guid, f.W); if (b(arguments[0])) { a.log("M139"); var c = a.aop.around(arguments[0], m.ra(m.G.Qd, f)); arguments[0] = c } b(arguments[1]) &&
                                    (a.log("M140"), c = a.aop.around(arguments[1], m.ra(m.G.Pd, f)), arguments[1] = c); return a.utils.qa(arguments)
                                }, function () { a.log("M141"); a.c.I() }, "interceptPromiseExecutor", m.fb)); return l
                            }; m.nk = function () { m.Al(); m.zl() }; m.ok = function () { m.yl(); m.xl() }; m.Fk = function (b) { return b instanceof m || b instanceof a.Gg }; m.dk = function (c) { var l; b(l) || (a.log("M142"), l = 1); b(c.C) && k(c.C) && (c.C += l, a.log("M143", c.C)) }; m.Wi = function (a) { var c; b(c) || (c = 1); b(a.C) && k(a.C) && (a.C -= c) }; m.fk = function (c) {
                            b(c.C) && a.utils.Bk(c.C) ? (a.log("M144"),
                                m.dk(c)) : c.C = 1
                            }; m.tm = function (b) { e.xm(b) || (a.log("M145"), m.fk(b)) }; m.Il = function (a) { a.C = 0 }; m.gf = function (a) { return b(a.T) }; m.Nc = function (a) { return b(a) && a instanceof window.Promise }; m.Al = function () {
                                var l = null; window.Promise.prototype.then = a.aop.around(window.Promise.prototype.then, function () {
                                    var f = this; l = f; a.log("M146", f.W); if (b(arguments[0]) && !m.Nc(arguments[0])) {
                                        m.tm(f); a.log("M147", f.W); var k = a.aop.around(arguments[0], m.ra(m.G.Nd, f), function () {
                                            var l = a.aop.Qe(arguments); b(l) && b(l.C) && m.Fk(l) && e.Y(f) ?
                                                (e.um(l, f), m.Il(l)) : (e.Y(f) && !m.gf(f) && e.Eb(f) && (e.sd(f), e.xb(f), !0 === e.td(f) && (a.log("M148"), a.log("M149"), e.ad(f))), c && (a.log("M150"), a.c.I()))
                                        }, "interceptPromiseThenFulfil", function (b) { e.Y(f) && e.Eb(f) && (e.sd(f) && e.xb(f), !0 === e.td(f) && (a.log("M151"), a.log("M152"), e.ad(f))); m.fb(b) }); arguments[0] = k
                                    } b(arguments[1]) && !m.Nc(arguments[1]) && (a.log("M153", f.W), k = a.aop.around(arguments[1], m.ra(m.G.Od, f), function () { c && (a.log("M154"), a.c.I()) }), arguments[1] = k); return a.utils.qa(arguments)
                                }, function () {
                                    var l =
                                        a.aop.Qe(arguments); !b(l) || b(arguments[0]) && m.Nc(arguments[0]) || (c && (l.g = this.g), m.gf(this) && e.Y(this) && (l._adrumAjaxT = this._adrumAjaxT, e.Eb(this) || e.gk(l)))
                                }, "interceptPromiseThenInterceptor", function (b) { var c = l; e.Y(c) && e.Eb(c) && (e.sd(c) && e.xb(c), !0 === e.td(c) && (a.log("M155"), a.log("M156"), e.ad(c))); m.fb(b) })
                            }; m.zl = function () {
                            b(window.Promise.prototype["finally"]) && (window.Promise.prototype["finally"] = a.aop.around(window.Promise.prototype["finally"], function () {
                            b(this._adrumAjaxT) && b(this._adrumAjaxT.n) ?
                                e.xb(this) : b(this.C) && m.Wi(this); if (b(arguments[0])) { a.log("M157", this.W); var l = a.aop.around(arguments[0], m.ra(m.G.Md, this), function () { c && (a.log("M158"), a.c.I()) }); arguments[0] = l; return a.utils.qa(arguments) }
                            }, function () { a.log("M159"); a.c.I() }, "interceptPromiseFinally"))
                            }; m.yl = function () { window.Promise.resolve = a.aop.around(window.Promise.resolve, m.ra(m.G.Dd, null), function () { a.log("M160"); a.c.I() }, "interceptPromiseResolve", m.fb) }; m.xl = function () {
                                window.Promise.reject = a.aop.around(window.Promise.reject,
                                    m.ra(m.G.Cd, null), function () { a.log("M161"); a.c.I() }, "interceptPromiseReject", m.fb)
                            }; return m
                    }(); l.G = { nh: "PromiseInstance.init", Qd: "PromiseInstance.resolve", Pd: "PromiseInstance.reject", Nd: "PromiseInstance.onFulfilled", Od: "PromiseInstance.onRejected", Md: "PromiseInstance.finally", Dd: "PromiseConstructor.resolve", Cd: "PromiseConstructor.reject" }; l.fb = a.monitor.ErrorMonitor.H; a.Xh = l; f && l.lk()
                })(g || (g = {})); (function (a) {
                    (function (b) {
                        function k(a, b) {
                            var c = [], e = /^\s*(ADRUM_BT\w*)=(.*)\s*$/i.exec(a); if (e) {
                                var k =
                                    e[1], e = e[2].replace(/^"|"$/g, ""), e = decodeURIComponent(e).split("|"), g = e[0].split(":"); if ("R" === g[0] && Number(g[1]) === b) for (f(k), k = 1; k < e.length; k++)c.push(e[k])
                            } return c
                        } function e(a, b) { var c = /^\s*(ADRUM_(\d+)_(\d+)_(\d+))=(.*)\s*$/i.exec(a); if (c) { var e = c[1], k = c[4], g = c[5]; if (Number(c[3]) === b) return f(e), { index: Number(k), value: g } } return null } function c(b) {
                            var c = /^\s*ADRUM=s=([\d]+)&r=(.*)\s*/.exec(b); if (c) {
                                a.log("M164", b); if (3 === c.length) return f("ADRUM"), { startTime: Number(c[1]), startPage: c[2] }; a.error("M165",
                                    b); return null
                            }
                        } function f(b) { a.log("M163", b); var c = new Date; c.setTime(c.getTime() - 1E3); document.cookie = b + "=;Expires=" + c.toUTCString() } b.startTimeCookie = null; b.cookieMetadataChunks = null; b.Ae = function (l, m) {
                            a.log("M162"); for (var f = m ? m.length : 0, g = [], t = l.split(";"), p = 0; p < t.length; p++) { var r = t[p], s = e(r, f); s ? g.push(s) : (r = c(r), null != r && (b.startTimeCookie = r)) } Array.prototype.sort.call(g, function (a, b) { return a.index - b.index }); r = []; for (p = 0; p < g.length; p++)r.push(g[p].value); for (p = 0; p < t.length; p++)(g = k(t[p],
                                f)) && 0 < g.length && (r = r.concat(g)); b.cookieMetadataChunks = r
                        }; a.correlation.eck = b.Ae
                    })(a.correlation || (a.correlation = {}))
                })(g || (g = {})); (function (a) {
                "APP_KEY_NOT_SET" !== a.conf.appKey || a.utils.isDefined(window.ADEUM_js_handler) || a.utils.isDefined(window.webkit) || y.log("AppDynamics EUM cloud application key missing. Please specify window['adrum-app-key']"); a.correlation.Ae(document.cookie, document.referrer); a.command("mark", "firstbyte", window["adrum-start-time"]); a.monitor.setUpMonitors(a.monitor.ca, a.monitor.Ni,
                    a.monitor.domEventsMonitor, a.monitor.navMonitor, a.monitor.xhrMonitor, a.monitor.resourceMonitor); a.conf.fetch && !a.conf.isAngular && (a.Xh.setUp(), a.monitor.setUpMonitors(a.monitor.Xa)); a.conf.spa2 && a.conf.modernBrowserFeaturesAvailable && a.monitor.setUpMonitors(a.monitor.wi); a.conf.devMode && (a.k.w.M.kg(), a.k.w.M.start(a.utils.Wa()), a.Ba.start())
                })(g || (g = {})); (function (a) {
                    a = a.ng || (a.ng = {}); a = a.h || (a.h = {}); a.qf = "locationChangeStart"; a.Uk = "locationChangeSuccess"; a.bg = "routeChangeStart"; a.cg = "routeChangeSuccess";
                    a.qg = "stateChangeStart"; a.rg = "stateChangeSuccess"; a.Dg = "viewContentLoaded"; a.$j = "includeContentRequested"; a.Zj = "includeContentLoaded"; a.ze = "digest"; a.Cn = "outstandingRequestsComplete"; a.pe = "beforeNgXhrRequested"; a.he = "afterNgXhrRequested"; a.Bn = "ngXhrLoaded"; a.te = "$$completeOutstandingRequest"
                })(g || (g = {})); (function (a) {
                    (function (b) {
                        function k(a, c, m, n, e, k) { if (c) try { return c.apply(a, [m, n, e].concat(k)) } catch (g) { return a.error(m, n, e, k, b.Error.oh, "M166", g) } } function e(a, c) {
                            return function () {
                                var m = this.current,
                                n = c[m] || c[b.sb] || m, e = Array.prototype.slice.call(arguments); if (this.Ki(a)) return this.error(a, m, n, e, b.Error.ph, "event " + a + "M167" + this.current); if (!1 === k(this, this["onbefore" + a], a, m, n, e)) return b.rb.Bd; n === b.sb && (n = m); if (m === n) return k(this, this["onafter" + a] || this["on" + a], a, m, n, e), b.rb.Ph; var g = this; this.transition = function () { g.transition = null; g.current = n; k(g, g["onenter" + n] || g["on" + n], a, m, n, e); k(g, g["onafter" + a] || g["on" + a], a, m, n, e); return b.rb.bi }; if (!1 === k(this, this["onleave" + m], a, m, n, e)) return this.transition =
                                    null, b.rb.Bd; if (this.transition) return this.transition()
                            }
                        } var c = a.utils.hasOwnPropertyDefined; b.VERSION = "2.3.5"; b.rb = { bi: 1, Ph: 2, Bd: 3, Um: 4 }; b.Error = { ph: 100, Vm: 200, oh: 300 }; b.sb = "*"; b.create = function (a, l) {
                            function m(a) { var c = a.from instanceof Array ? a.from : a.from ? [a.from] : [b.sb]; r[a.name] = r[a.name] || {}; for (var l = 0; l < c.length; l++)s[c[l]] = s[c[l]] || [], s[c[l]].push(a.name), r[a.name][c[l]] = a.to || c[l] } var n = "string" == typeof a.initial ? { state: a.initial } : a.initial, k = l || a.target || {}, g = a.events || [], p = a.callbacks ||
                                {}, r = {}, s = {}; n && (n.event = n.event || "startup", m({ name: n.event, from: "none", to: n.state })); for (var w = 0; w < g.length; w++)m(g[w]); for (var x in r) c(r, x) && (k[x] = e(x, r[x])); for (x in p) c(p, x) && (k[x] = p[x]); k.current = "none"; k.tn = function (a) { return a instanceof Array ? 0 <= a.indexOf(this.current) : this.current === a }; k.Ji = function (a) { return !this.transition && (c(r[a], this.current) || c(r[a], b.sb)) }; k.Ki = function (a) { return !this.Ji(a) }; k.Xb = function () { return s[this.current] }; k.error = a.error || function (a, b, c, l, m, f, n) {
                                    throw n ||
                                    f;
                                }; if (n && !n.defer) k[n.event](); return k
                        }
                    })(a.$d || (a.$d = {}))
                })(g || (g = {})); (function (a) {
                    (function (b) {
                        var k = function (e) {
                            function c(b) { b = e.call(this, b) || this; a.utils.isDefined(a.ng) && b.constructor != a.ng.NgVPageView && b.constructor != c && a.reportAPIMessage(a.Q.ha, a.La, "ADRUM.events.VPageView", []); if (a.conf.spa2) return b; b.perf = new a.PerformanceTracker; b.start(); a.monitor.xhrMonitor.Qb(); a.monitor.Xa.Qb(); a.monitor.ca.Hl(); return b } u(c, e); c.prototype.type = function () { return a.EventType.VPageView }; c.prototype.Dc =
                                function () { return b.EventTracker.kc(this.guid(), this.url(), this.type()) }; c.prototype.og = function (b) { var c = this.Dc(); b.set("parent", c); a.log("M168", c.guid(), c.url()) }; c.prototype.startCorrelatingXhrs = function () { a.conf.spa2 || (a.log("M169"), this.og(a.monitor.xhrMonitor)) }; c.prototype.stopCorrelatingXhrs = function () { a.conf.spa2 || (a.monitor.xhrMonitor.set("parent", null), a.log("M170")) }; c.prototype.jd = function () { a.conf.spa2 || (a.log("M171"), this.og(a.monitor.ca)) }; c.prototype.start = function () {
                                    a.conf.spa2 ||
                                    (this.markVirtualPageStart(), this.startCorrelatingXhrs())
                                }; c.prototype.end = function () { a.conf.spa2 || (this.markVirtualPageEnd(), this.stopCorrelatingXhrs()) }; return c
                        }(b.EventTracker); b.VPageView = k; b.Ea(b.O[a.EventType.VPageView], k.prototype); b.me(b.metricSpec[a.EventType.VPageView], k.prototype)
                    })(a.events || (a.events = {}))
                })(g || (g = {})); (function (a) {
                    var b = a.ng || (a.ng = {}), b = b.conf || (b.conf = {}); b.disabled = a.conf.userConf && a.conf.userConf.spa && a.conf.userConf.spa.angular && a.conf.userConf.spa.angular.disable;
                    b.distinguishVPwithItsTemplateUrl = a.conf.userConf && a.conf.userConf.spa && a.conf.userConf.spa.angular && !0 === a.conf.userConf.spa.angular.distinguishVPwithItsTemplateUrl ? !0 : !1; b.xhr = {}; b.metrics = { includeResTimingInEndUserResponseTiming: !0 }; a.conf.userConf && a.conf.userConf.spa && a.conf.userConf.spa.angular && a.conf.userConf.spa.angular.vp && (a.conf.userConf.spa.angular.vp.xhr && a.utils.oa.Of(a.conf.userConf.spa.angular.vp.xhr), a.conf.userConf.spa.angular.vp.metrics && a.utils.mergeJSON(b.metrics, a.conf.userConf.spa.angular.vp.metrics))
                })(g ||
                    (g = {})); (function (a) {
                        (function (b) {
                            var k = a.utils.map, e = a.utils.reduce, c = a.utils.filter, f = function (l) {
                                function m(b) { b = l.call(this, b) || this; b.ff = !0; b.hb = {}; b.Ka = 0; b.Vn = []; b.digestCount(0); if (b.constructor != m) return a.reportAPIMessage(a.Q.ha, a.La, "ADRUM.events.Ajax", []), b; b.stopCorrelatingXhrs(); return b } u(m, l); m.prototype.type = function () { return a.EventType.VPageView }; m.prototype.wd = function () { this.markViewChangeStart(); this.markVirtualPageStart(this.getViewChangeStart()); this.timestamp(this.getViewChangeStart()) };
                                m.prototype.ak = function () { this.digestCount(this.digestCount() + 1) }; m.prototype.bk = function () { this.Ka++; a.log("M172", this.Ka) }; m.prototype.Vi = function () { this.Ka--; a.log("M173", this.Ka) }; m.prototype.Vj = function () { var b = this.perf.getEntryByName(a.events.b.Jg); a.log("M174", this.Ka, b); return 0 < this.Ka }; m.prototype.Gi = function () {
                                    var a = { Wb: 0 }, b = document.querySelectorAll("ng-view, [ng-view], .ng-view, [ui-view]"), b = k(b, angular.element), c; for (c in m.Zf) {
                                        var l = m.Zf[c]; k(b, function (b) {
                                            b = b.find(c); k(b, function (b) {
                                                if (b =
                                                    b[l]) b = decodeURIComponent(b), a[b] || (a[b] = c, a.Wb++)
                                            })
                                        })
                                    } this.hb = a
                                }; m.prototype.Ei = function (a) { return !!this.hb[decodeURIComponent(a.name)] }; m.prototype.Hi = function () { var b = [], c = this; 0 < this.hb.Wb && (b = a.monitor.resourceMonitor.Cb().filter(function (a) { return c.Ei(a) })); this.resTiming(b) }; m.lj = function (b) { return c(b, function (b) { return (b.eventType === a.EventType.Ajax || b.eventType === a.EventType.ADRUM_XHR) && !a.utils.oa.Vb(b.eventUrl, b.method) }) }; m.Dj = function (a) {
                                    return e(a, function (a, b) {
                                        return Math.max(a, b.timestamp +
                                            b.metrics.PLT)
                                    }, -1)
                                }; m.prototype.ti = function () { if (b.conf.xhr) { var c = m.lj(a.channel.getEventsWithParentGUID(this.guid())), c = m.Dj(c); if (0 < c) { var l = this.perf.getEntryByName(a.events.b.Jg); this.markXhrRequestsCompleted(Math.min(l && l.startTime || Number.MAX_VALUE, c)) } } }; m.prototype.adjustTimings = function () {
                                    this.ti(); var c = this.getViewDOMLoaded(), l = this.getXhrRequestsCompleted(), c = Math.max(c, l); b.conf.metrics.includeResTimingInEndUserResponseTiming && (this.si(), l = this.getViewResourcesLoaded(), l = Math.max(c,
                                        l), a.log("M175", c, l), c = l); this.markVirtualPageEnd(c)
                                }; m.prototype.si = function () { if (0 < this.hb.Wb) { this.Hi(); var b = this.resTiming(); b && b.length >= this.hb.Wb && (b = e(b, function (a, b) { return Math.max(a, b.responseEnd) }, 0), this.markViewResourcesLoaded(a.PerformanceTracker.pc(b))) } }; m.prototype.identifier = function (b) { var c = this.Fg; a.utils.isDefined(b) && (this.Fg = m.jj(b), this.url(this.Fg.url)); return c }; m.jj = function (b) {
                                    var c = {}; b && b.J ? (c.J = { Yc: "" }, a.utils.mergeJSON(c.J, { Yc: b.J.originalPath, ib: b.J.template, jb: b.J.templateUrl })) :
                                        b && b.state && (c.state = { url: "" }, a.utils.mergeJSON(c.state, { url: b.state.url, name: b.state.name, ib: b.state.template, jb: b.state.templateUrl })); return c
                                }; return m
                            }(a.events.VPageView); f.Zf = { img: "src", script: "src", link: "href" }; b.NgVPageView = f; a.events.Ea(a.events.O[a.EventType.NG_VIRTUAL_PAGE], f.prototype)
                        })(a.ng || (a.ng = {}))
                    })(g || (g = {})); (function (a) {
                        (function (b) {
                            var k = function () {
                                function e() { this.A = new b.NgVPageView } e.prototype.Ol = function () {
                                    var c = this, f = this.A; b.conf.metrics.includeResTimingInEndUserResponseTiming ?
                                        (a.log("M176"), a.utils.oSTO(function () { c.bd(f) }, e.di)) : a.utils.oSTO(function () { c.bd(f) }, e.ei)
                                }; e.prototype.bd = function (b) { a.log("M177"); b.parent(a.monitor.DOMEventsMonitor.currentBasePage); a.command("call", function () { b.adjustTimings(); a.reporter.reportEvent(b) }) }; e.prototype.Vl = function (a) { this.A = a }; return e
                            }(); k.di = 5E3; k.ei = 2 * a.monitor.XHRMonitor.Gd; b.VirtualPageStateMachine = k; a.$d.create({
                                events: [{ name: "start", from: "none", to: "ChangeView" }, { name: "viewLoaded", from: "ChangeView", to: "XhrPending" }, {
                                    name: "xhrCompleted",
                                    from: "XhrPending", to: "End"
                                }, { name: "abort", from: "*", to: "none" }, { name: "init", from: "*", to: "none" }, { name: "locChange", from: "*", to: "*" }, { name: "beforeXhrReq", from: "*", to: "*" }, { name: "afterXhrReq", from: "*", to: "*" }], error: function (b) { a.log("M178", b) }, callbacks: {
                                    onChangeView: function () { this.A.wd(); this.A.jd() }, onviewLoaded: function () { this.A.markViewDOMLoaded() }, onXhrPending: function () { this.A.ff && this.xhrCompleted() }, onleaveXhrPending: function (a, b, f) {
                                        if ("abort" === a) return this.bd(), !0; if ("xhrCompleted" === a &&
                                            "End" === f) { if (this.A.Vj()) return !1; this.A.markXhrRequestsCompleted(); return !0 }
                                    }, onEnd: function () { this.A.Gi(); this.Ol() }, oninit: function (b, c, f, l) { this.Vl(l); a.monitor.xhrMonitor.Qb(); a.monitor.Xa.Qb() }, onlocChange: function (a, b, f, l) { this.A.identifier.url = l; this.A.Ub({ url: l }) }, onbeforeXhrReq: function (b, c, f, l) {
                                        var m = this.A; m.ff = !1; a.log("M179", l && l[1] || "", m.guid()); m.bk(); m.startCorrelatingXhrs(); l[3] && (l[3] = a.aop.before(l[3], function (b, c, l) {
                                            a.log("M180"); m.Vi(); l && (b = a.utils.ol(l)["content-type"]) &&
                                                0 <= b.indexOf("text/html") && m.markViewFragmentsLoaded()
                                        })); return l
                                    }, onafterXhrReq: function () { this.A.stopCorrelatingXhrs() }
                                }
                            }, k.prototype)
                        })(a.ng || (a.ng = {}))
                    })(g || (g = {})); (function (a) {
                        (function (b) {
                            var k = function () {
                                function e() { this.K = new b.VirtualPageStateMachine; this.distinguishVPwithItsTemplateUrl = a.ng.conf.distinguishVPwithItsTemplateUrl } e.prototype.N = function (c, f) {
                                    a.log("M181", c); switch (c) {
                                        case b.h.bg: case b.h.qg: this.K.start(); var l = f.next.url || document.URL, m = new b.NgVPageView({ url: l, identifier: f.next });
                                            this.distinguishVPwithItsTemplateUrl && e.vk(this.K.A, m) ? this.K.A.Ub({ url: l, identifier: f.next }) : this.im(m); break; case b.h.cg: case b.h.rg: this.K.A.markViewChangeEnd(); break; case b.h.Dg: this.K.viewLoaded(); break; case b.h.pe: this.K.beforeXhrReq(f); break; case b.h.he: this.K.afterXhrReq(); break; case b.h.te: this.K.xhrCompleted(); break; case b.h.qf: this.K.A.Ub({ url: f.next.url }); this.K.locChange(f.next.url); break; case b.h.ze: this.K.A.ak()
                                    }
                                }; e.prototype.im = function (a) { this.K.abort(); this.K.init(a); this.K.start() };
                                e.vk = function (b, f) { var l = b.identifier(), m = f.identifier(), e = !1; return e = !a.utils.isDefined(l) && !a.utils.isDefined(m) || l === m ? !0 : a.utils.isDefined(l) && a.utils.isDefined(m) ? l.state || m.state ? a.utils.isDefined(l.state) && a.utils.isDefined(m.state) ? l.state.name === m.state.name && l.state.ib === m.state.ib && l.state.jb === m.state.jb && l.state.url === m.state.url : !1 : l.J && m.J ? l.J.Yc === m.J.Yc && l.J.ib === m.J.ib && l.J.jb === m.J.jb : l.url === m.url : !1 }; return e
                            }(); b.fi = k
                        })(a.ng || (a.ng = {}))
                    })(g || (g = {})); (function (a) {
                        (function (b) {
                            var k =
                                a.utils.addEventListener, e = function () {
                                    function c() { this.P = new b.fi; this.$e = !1 } c.prototype.setUp = function () { function b(m) { return function () { a.log(m); c.init() } } var c = this; b("M182")(); k(document, "DOMContentLoaded", b("M183")); k(window, "load", b("M184")) }; c.prototype.init = function () {
                                        if ("loading" === document.readyState) a.log("M185"); else if ("undefined" != typeof angular && !this.$e) {
                                        this.$e = !0; a.log("M186"); var b = this, c = angular.module("ng"); c.config(["$provide", function (a) { b.pk(a); b.kk(a) }]); c.run(["$browser",
                                            function (a) { b.ik(a) }]); a.log("M187")
                                        }
                                    }; c.prototype.kk = function (c) { var l = a.aop, m = this; c.decorator("$httpBackend", ["$delegate", function (a) { return a = l.around(a, function () { var a = Array.prototype.slice.call(arguments); m.P.N(b.h.pe, a); return a }, function () { m.P.N(b.h.he) }, "ng.httpBackend") }]) }; c.prototype.pk = function (c) {
                                        var l = a.aop, m = this; c.decorator("$rootScope", ["$delegate", function (a) {
                                        a.$digest = l.after(a.$digest, function () { m.P.N(b.h.ze) }, "ngevents.digest"); a.$on("$locationChangeStart", function (a, c) {
                                            var l =
                                                { url: c }, f = a && a.Va && a.Va.$state && a.Va.$state.current; f && (l.state = f); m.P.N(b.h.qf, { next: l })
                                        }); a.$on("$locationChangeSuccess", function () { m.P.N(b.h.Uk) }); a.$on("$routeChangeStart", function (a, c) { var l = { url: location.href }, f = c && c.$$route; f && (l.J = f); m.P.N(b.h.bg, { next: l }) }); a.$on("$routeChangeSuccess", function () { m.P.N(b.h.cg) }); a.$on("$stateChangeStart", function (a, c) { m.P.N(b.h.qg, { next: { state: c } }) }); a.$on("$stateChangeSuccess", function () { m.P.N(b.h.rg) }); a.$on("$viewContentLoaded", function (a) {
                                            var c = { url: location.href };
                                            if (a = a && a.Va && a.Va.$state && a.Va.$state.current) c.state = a; m.P.N(b.h.Dg, { next: c })
                                        }); a.$on("$includeContentRequested", function () { m.P.N(b.h.$j) }); a.$on("$includeContentLoaded", function () { m.P.N(b.h.Zj) }); return a
                                        }])
                                    }; c.prototype.ik = function (c) { var l = this; c.$$completeOutstandingRequest = a.aop.before(c.$$completeOutstandingRequest, function () { l.P.N(b.h.te) }) }; return c
                                }(); b.Pm = e; b.ngMonitor = new e
                        })(a.ng || (a.ng = {}))
                    })(g || (g = {})); (function (a) { var b = a.ng || (a.ng = {}); b.conf.disabled || a.conf.spa2 || a.monitor.setUpMonitors(b.ngMonitor) })(g ||
                        (g = {}))
        }
    };
})();