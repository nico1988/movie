(function(angular) {
    var app = angular.module('moviecat.home_page', ["ngRoute"]);
    app.config(["$routeProvider", function($routeProvider) {
        $routeProvider.when('/home_page', { templateUrl: 'home_page/view.html' }) //注意：路径是从主模块所在路径开始计算的
    }])
})(angular)