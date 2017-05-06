(function(angular) {
    var app = angular.module("moviecat.in_theaters", ['ngRoute']);
    // 配置路由
    app.config(["$routeProvider", function($routeProvider) {
            $routeProvider.when("/in_theaters/:page?", {
                //这里注意加/，？0或者1个，：代表不管有没有写也可以进入下面的路由
                templateUrl: "in_theaters/view.html", //模板地址，后期有ajax获取
                controller: "in_theatersController" //正在热映控制器
            })
        }])
        //创建控制器
    app.controller("in_theatersController", [
        '$scope',
        '$http',
        '$routeParams',
        '$route',
        'MyJsonp',
        function($scope, $http, $routeParams, $route, MyJsonp) {
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
            $scope.pageSize = 6; //定义每一页展示的数量
            $scope.nowPage = ($routeParams.page || "1") - 0; //隐式转换成数字
            var start = ($scope.nowPage - 1) * $scope.pageSize; //开始等于现在的页面-1  * 6
            MyJsonp.jsonp("https://api.douban.com/v2/movie/in_theaters", { start: start, count: $scope.pageSize }, function(data) {
                $scope.data = data; //暴露数据到全局作用域
                $scope.totalPage = Math.ceil(data.total / $scope.pageSize);
                $scope.$apply(); // 强制刷新整个viewmodel，视图发生变化时

            })
            $scope.goPage = function(nowPage) {
                //如果页面大于
                if (nowPage < 1 || nowPage > $scope.totalPage) {
                    return; //跳出函数
                }
                $route.updateParams({ page: nowPage });
            }
        }
    ])

})(angular)