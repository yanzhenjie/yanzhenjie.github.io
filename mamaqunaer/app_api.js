(function (window) {
        var app = {}
        app.isLogin = function () {
            return app.userInfo.userId !== null && app.userInfo.userId !== "";
        }
        app.getUserId = function () {
            return app.userInfo.userId;
        }
        app.isApp = function () {
            try {
                mmClient.isApp();
                return true
            } catch (a) {
                return false
            }
        }
        app.joinPlatform = function () {
            app.a(0)
        }
        app.joinBdt = function () {
            app.a(1)
        }
        app.shop = function (b) {
            app.a(2, b)
        }
        app.goods = function (b) {
            app.a(3, b)
        }
        app.activity = function (b) {
            app.a(4, b)
        }
        app.topic = function (b) {
            app.a(5, b)
        }
        app.post = function (b) {
            app.a(6, b)
        }
        app.closeWindow = function () {
            app.a(7)
        }
        app.shareMe = function () {
            app.a(8)
        }
        app.coupon = function () {
            app.a(9)
        }
        app.baodou = function () {
            app.a(10)
        }
        app.order = function () {
            app.a(11)
        }
        app.voucher = function () {
            app.a(12)
        }
        app.collect = function () {
            app.a(13)
        }
        app.a = function (d, c) {
            try {
                switch (d) {
                    case 0:
                        mmClient.joinPlatform();
                        break;
                    case 1:
                        mmClient.joinBdt();
                        break;
                    case 2:
                        mmClient.shop(c);
                        break;
                    case 3:
                        mmClient.goods(c);
                        break;
                    case 4:
                        mmClient.activity(c);
                        break;
                    case 5:
                        mmClient.topic(c);
                        break;
                    case 6:
                        mmClient.post(c);
                        break;
                    case 7:
                        mmClient.closeWindow();
                        break;
                    case 8:
                        mmClient.shareMe();
                        break;
                    case 9:
                        mmClient.coupon();
                        break;
                    case 10:
                        mmClient.baodou();
                        break;
                    case 11:
                        mmClient.order();
                        break;
                    case 12:
                        mmClient.voucher();
                        break;
                    case 13:
                        mmClient.collect();
                        break
                }
            } catch (f) {
                app.er();
            }
        }
        app.sa = new Array();
        app.paramSign = function (f, d, h) {
            app.paramSign(f, d, h, app.erph);
        }
        app.paramSign = function (f, d, h, e) {
            var so = new Object();
            so.f = f;
            so.d = d;
            so.h = h;
            so.e = e;
            app.sa.push(so);
            app.eso();
        }
        app.paramSignCallback = function (a) {
            if ("error" == a) {
                var so = app.sa.shift();
                console.log(so.e);
                so.e();
            } else {
                var so = app.sa.shift();
                so.h(a);
            }
            app.esoq();
        }
        app.eso = function () {
            if (app.sa.length != 1) return;
            app.esoq();
        }
        app.esoq = function () {
            if (app.sa.length <= 0) return;
            try {
                var so = app.sa[0];
                mmClient.paramSign(so.f, so.d);
            } catch (g) {
                app.er();
            }
        }
        app.aa = new Array();
        app.selectAddress = function (b) {
            app.selectAddress(b, app.erph);
        }
        app.selectAddress = function (b, e) {
            var ao = new Object();
            ao.b = b;
            ao.e = e;
            app.aa.push(ao);
            app.eao();
        }
        app.selectAddressCallback = function (a) {
            if ("error" == a) {
                var ao = app.aa.shift();
                console.log(ao.e);
                ao.e();
            } else {
                var ao = app.aa.shift();
                ao.b(a);
            }
            app.eaoq();
        }
        app.eao = function () {
            if (app.aa.length != 1) return;
            app.eaoq();
        }
        app.eaoq = function () {
            if (app.aa.length <= 0) return;
            try {
                var ao = app.aa[0];
                mmClient.selectAddress();
            } catch (g) {
                app.er();
            }
        }
        app.userInfo = {
            "userId": null
        }
        app.setUserId = function (userId) {
            app.userInfo.userId = userId;
        }
        app.initialize = function () {
            try {
                mmClient.initialize();
                app.to(100);
            } catch (e) {
            }
        }
        app.to = function (m) {
            var a = new Date();
            var e = a.getTime() + m;
            while (true) {
                n = new Date();
                if (n.getTime() > e)
                    return;
            }
        }
        app.er = function () {
            if (app.isApp()) {
                alert("版本过旧，请升级App后使用")
            } else {
                alert("请在妈妈去哪儿App中打开该网页")
            }
        }
        app.erph = function () {
        }
        window.app = app;
    }(window)
)