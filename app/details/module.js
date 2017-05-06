(function(angular) {
    var app = angular.module("moviecat.details", [
        'ngRoute',
        'moviecat.myjsonp'
    ]);
    // 配置路由信息
    app.config(["$routeProvider", function($routeProvider) {
            console.log(11)
            $routeProvider.when("/details/:id", {
                templateUrl: 'details/view.html',
                controller: "detailsController"
            })
        }])
        // 创建控制器
    app.controller("detailsController", ["$scope", '$routeParams', 'MyJsonp', function($scope, $routeParams, MyJsonp) {
        console.log($routeParams);
        MyJsonp.jsonp('https://api.douban.com/v2/movie/subject/' + $routeParams.id, {},
            function(data) {
                console.log(data);
                $scope.movie = data;
                $scope.$apply();
            })
    }])
})(angular)