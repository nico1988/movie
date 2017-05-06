(function(window) {
    //    屏幕滚动头部变色
    window.onscroll = function() { //屏幕滚动事件
        var navBar = document.querySelector("header");
        var top = document.body.scrollTop; //获取页面被卷曲的高度
        var height = 2000; //获取banner高度
        var rate = top / height;
        // console.log("top----" + top)
        // console.log("height---" + height)
        // console.log(rate)
        if (rate < 1 && rate > 0) {
            var r = parseInt((135 * rate * 100) / 100); //r值
            var g = parseInt((206 * rate * 100) / 100); //g值
            var b = parseInt((235 * rate * 100) / 100); //b值
            // console.log(r + "---" + g + "---" + b)
            navBar.style.background = 'rgba(' + r + ',' + g + ',' + b + ',' + rate + ')'; //刚开始的bug这儿的错误，一直是(0,0,0,0)
        } else {
            navBar.style.background = " rgba(135, 206, 235, .8)"
        }

    }
})(window)