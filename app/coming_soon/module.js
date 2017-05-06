(function(angular) {
    // 创建正在热映模块
    var app = angular.module("moviecat.coming_soon", ["ngRoute"]);
    // 配置路由
    app.config(["$routeProvider", function($routeProvider) {
            $routeProvider.when("/coming_soon", {
                templateUrl: "coming_soon/view.html",
                controller: 'coming_soonController'
            })
        }])
        // 创建控制器
    app.controller("coming_soonController", ["$scope", "$http", function($scope, $http) {

    }])
})(angular)