(function () {
    var myApp = angular.module('myApp', []);

    myApp.controller('MyController', ['$scope', function($scope) {
        $scope.sort = function() {
            var numbers = $scope.numbers;
            var result = numbers.sort(function (a, b) {
                return a - b;
            });
            $scope.result = result.join(',');
        };
    }]);
})();