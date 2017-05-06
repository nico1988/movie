(function(angular) {
    // "use strict";
    // start your ride
    //1. 创建主模块模块
    //2. 依赖了首页模块


    // .top .menu{

    // }

    // .bottom .menu{

    // }
    var app = angular.module('moviecat', ['moviecat.myjsonp', 'moviecat.home_page', 'moviecat.in_theaters', "moviecat.coming_soon"]);
    app.config(["$routeProvider", function($routeProvider) {
        // $routeProvider.otherwise({ redirectTo: 'home_page' }) //注意：路径是从主模块所在路径开始计算的
    }])
})(angular);