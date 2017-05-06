(function(angular) {
    var app = angular.module("moviecat.movie_list", ['ngRoute']);
    // 配置路由
    app.config(["$routeProvider", function($routeProvider) {
            $routeProvider.when("/:movieType/:page?", {
                //：代表通配符，可以匹配任何东西
                //这里注意加/，？0或者1个，：代表不管有没有写也可以进入下面的路由
                templateUrl: "movie_list/view.html", //模板地址，后期有ajax获取
                controller: "movie_listController" //正在热映控制器
            })
        }])
        //创建控制器
    app.controller("movie_listController", [
        '$scope',
        '$http',
        '$routeParams',
        '$route',
        'MyJsonp', //service服务依赖
        function($scope, $http, $routeParams, $route, MyJsonp) {
            // $http.get("./movie_list/movie_list.json").then(function(res) {
            //     // $scope.data = res.data;
            //     console.log(res);
            // }, function() {
            //     // 失败的回调函数
            // })
            // 简单的 GET 请求，可以改为 POST
            // $http.jsonp("http://api.douban.com/v2/movie/movie_list?callback=JSON_CALLBACK").success(function(data) {
            //     console.log(data);　　 // 数据
            // });
            $scope.pageSize = 6; //定义每一页展示的数量
            $scope.nowPage = ($routeParams.page || "1") - 0; //隐式转换成数字
            $scope.loading = true;
            var start = ($scope.nowPage - 1) * $scope.pageSize; //开始等于现在的页面-1  * 6
            MyJsonp.jsonp("https://api.douban.com/v2/movie/" + $routeParams.movieType + '?q=' + $routeParams.q, { start: start, count: $scope.pageSize }, function(data) {
                    $scope.data = data; //暴露数据到全局作用域
                    $scope.totalPage = Math.ceil(data.total / $scope.pageSize);
                    $scope.loading = false; //这里前面要给loading赋值，否则loading一致是false
                    $scope.$apply(); // 强制刷新整个viewmodel，视图发生变化时

                })
                // console.log($routeParams);
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