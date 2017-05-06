(function(angular) {
    var app = angular.module("moviecat.auto_active", []);
    app.directive("autoActive", ["$location", function($location) {
        // 这里自定义指令依赖于$location服务
        return {
            link: function() {
                scope.loca = $location;

            }
        }
    }])
})(angular)