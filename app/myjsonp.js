(function(angular) {
    // 创建模块
    var app = angular.module("moviecat.myjsonp", []);
    // 创建服务
    app.service("MyJsonp", ["$window", function($window) {
        // 服务的第二个参数是构造器，构造函数利用this表示实例对象
        this.jsonp = function(url, arg, fn) {
            //1拼接地址
            //?start=0&count=3
            var queryString = "";
            for (var key in arg) { //循环遍历arg参数，将其拼接
                queryString += key + "=" + arg[key] + "&"
            }
            url += "?" + queryString;
            var callbackName = "jsonp_" + Math.random().toString().substr(2);
            // 这里相当于window.jsonp_xxx = fn(data)
            $window[callbackName] = function(data) {
                console.log(data);
                fn(data);
                //fafawefa
                $window.document.body.removeChild(scriptElement);
            };
            url += "callback=" + callbackName;
            // 2,创建script标签，并且把拼接后的url放到script标签的src上
            var scriptElement = $window.document.createElement("script");
            scriptElement.src = url;
            $window.document.body.appendChild(scriptElement);
        }
    }])
})(angular)