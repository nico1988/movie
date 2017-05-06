(function(angular) {
    // "use strict";
    // start your ride
    //1. 创建主模块模块
    //2. 依赖了首页模块


    // .top .menu{

    // }

    // .bottom .menu{

    // }
    var app = angular.module('moviecat', [
        'moviecat.details',
        'moviecat.myjsonp',
        'moviecat.home_page',
        'moviecat.movie_list',
        "moviecat.auto_active"
    ]);
    app.config(["$routeProvider", function($routeProvider) {
        //首页默认路由规则，跳转到home_page
        //如果所有的路由规则都不满足，都会跳转到首页
        $routeProvider.otherwise({ redirectTo: 'home_page' }) //注意：路径是从主模块所在路径开始计算的
    }])
    app.controller("mainController", function($scope, $location) {
        $scope.query = "";
        $scope.search = function() {
            console.log(111);
            // 这个api和$ele.html() $ele.html('wefewf')类似，如果传参则是获取，否则则是设置
            $location.url("/search/?q=" + $scope.query)
        }
    })
})(angular);