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

    describe('sortNumbersOnly()', function() {
        it('should do something...', function() {
            expect(true).toBe(true);
        });

        it('should filter out non-number values and save sorted list in $scope.result', function() {
            scope.numbers = ['5','2','1','3','4','a'];
            scope.sortNumbersOnly();
            expect(scope.result).toEqual('1,2,3,4,5');
        });
    });
});