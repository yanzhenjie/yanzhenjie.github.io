var app = {};

app.isApp = function() {
    try {
        mmClient.isApp();
        return true;
    } catch(e) {
        return false;
    }
}

app.joinPlatform = function() {
    app.dispatchRouter(0);
}

app.joinBdt = function() {
    app.dispatchRouter(1);
}

app.shop = function(id) {
    app.dispatchRouter(2, id);
}

app.goods = function(id) {
     app.dispatchRouter(3, id);
}

app.activity = function(id) {
    app.dispatchRouter(4, id);
}

app.topic = function(id) {
    app.dispatchRouter(5, id);
}

app.post = function(id) {
    app.dispatchRouter(6, id);
}

app.closeWindow= function() {
    app.dispatchRouter(7);
}

app.shareMe = function() {
    app.dispatchRouter(8);
}

app.coupon = function() {
    app.dispatchRouter(9);
}

app.baodou = function() {
    app.dispatchRouter(10);
}

app.order = function() {
    app.dispatchRouter(11);
}

app.voucher = function() {
    app.dispatchRouter(12);
}

app.collect = function() {
    app.dispatchRouter(13);
}

app.dispatchRouter = function(cmd, id) {
    try {
        switch(cmd) {
            case 0: {
                mmClient.joinPlatform();
                break;
            }
            case 1: {
                mmClient.joinBdt();
                break;
            }
            case 2: {
                mmClient.shop(id);
                break;
            }
            case 3: {
                mmClient.goods(id);
                break;
            }
            case 4: {
                mmClient.activity(id);
                break;
            }
            case 5: {
                mmClient.topic(id);
                break;
            }
            case 6: {
                mmClient.post(id);
                break;
            }
            case 7: {
                mmClient.closeWindow();
                break;
            }
            case 8: {
                mmClient.shareMe();
                break;
            }
            case 9: {
                mmClient.coupon();
                break;
            }
            case 10: {
                 mmClient.baodou();
                break;
            }
            case 11: {
                mmClient.order();
                 break;
            }
            case 12: {
                mmClient.voucher();
                break;
            }
            case 13: {
                mmClient.collect();
                break;
            }
        }
    } catch(e) {
         if(app.isApp()) {
            alert("版本过旧，请升级App后使用");
         } else {
            alert("请在妈妈去哪儿App中打开该网页");
         }
    }
}

app.paramSignCallback = function(headerJson){}

app.paramSign = function(needLogin, paramJson, callback) {
    try {
        app.paramSignCallback = callback;
        mmClient.paramSign(needLogin, paramJson);
    } catch(e) {
         if(app.isApp()) {
            alert("版本过旧，请升级App后使用");
         } else {
            alert("请在妈妈去哪儿App中打开该网页");
         }
    }
}

app.selectAddressCallback = function(addressJson){}

app.selectAddress = function(callback) {
    try {
        app.selectAddressCallback = callback;
        mmClient.selectAddress();
    } catch(e) {
         if(app.isApp()) {
            alert("版本过旧，请升级App后使用");
         } else {
            alert("请在妈妈去哪儿App中打开该网页");
         }
    }
}