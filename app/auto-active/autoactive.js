(function(angular) {
    var app = angular.module("moviecat.auto_active", []);
    app.directive("autoActive", ["$location", function($location) {
        // 这里自定义指令依赖于$location服务
        return {
            // scope 类似controller的$scope,作用范围不一样
            // elemnet: 自定义指令所在标签的对象（jqLite），
            // attributes: 获取自定义指令所在标签的属性；
            link: function(scope, element, attributes) {
                scope.loca = $location;
                console.log(element);
                scope.$watch("loca.url()", function(now, old) {
                    var a = element.children(); //自定义指令所在标签元素li的a标签
                    var hash = a[0].hash.substr(2);
                    //如果现在的url地址包含哪个，让哪个变成active
                    if (now.startsWith(hash)) {
                        element.parent().children().removeClass("active");
                        element.addClass("active");
                    }
                })
            }
        }
    }])
})(angular)