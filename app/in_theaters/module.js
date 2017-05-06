(function(angular) {
    var app = angular.module("moviecat.in_theaters", ['ngRoute']);
    // 配置路由
    app.config(["$routeProvider", function($routeProvider) {
            $routeProvider.when("/in_theaters", {
                templateUrl: "in_theaters/view.html", //模板地址，后期有ajax获取
                controller: "in_theatersController" //正在热映控制器
            })
        }])
        //创建控制器
    app.controller("in_theatersController", ['$scope', '$http', 'MyJsonp', function($scope, $http, MyJsonp) {
        // $http.get("./in_theaters/in_theaters.json").then(function(res) {
        //     // $scope.data = res.data;
        //     console.log(res);
        // }, function() {
        //     // 失败的回调函数
        // })
        // 简单的 GET 请求，可以改为 POST
        // $http.jsonp("http://api.douban.com/v2/movie/in_theaters?callback=JSON_CALLBACK").success(function(data) {
        //     console.log(data);　　 // 数据
        // });
        MyJsonp.jsonp("https://api.douban.com/v2/movie/in_theaters", { start: 0, count: 10 }, function(data) {
            $scope.data = data; //暴露数据到全局作用域
            $scope.$apply(); // 强制刷新整个viewmodel，视图发生变化时
        })

    }])

})(angular)