(function () {
    var myApp = angular.module('myApp', ['feature-flags']);

    myApp.run(['featureFlags', '$http', function(featureFlags, $http) {
        featureFlags.set($http.get('/api/feature-toggles.json'));
    }]);

    myApp.controller('MyController', ['$scope', function($scope) {
        $scope.sort = function() {
            var numbers = $scope.numbers;
            var result = numbers.sort(function (a, b) {
                return a - b;
            });
            $scope.result = result.join(',');
        };

        $scope.sortNumbersOnly = function() {
            var numbers = $scope.numbers.map(parseFloat).filter(function(v) { return !isNaN(v); });
            var result = numbers.sort(function (a, b) {
                return a - b;
            });
            $scope.result = result.join(',');
        };
    }]);
})();