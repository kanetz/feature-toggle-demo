describe('MyController', function() {
    var scope;

    beforeEach(module('myApp'));
    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('MyController', {$scope: scope});
    }));

    describe('sort()', function() {
        it('should save sorted list in ascending order in $scope.result', function() {
            scope.numbers = [5,2,1,3,4];
            scope.sort();
            expect(scope.result).toEqual('1,2,3,4,5');
        });
    });
});