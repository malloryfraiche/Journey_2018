angular.module('app').controller('report', function ($scope, $location) {

    // maybe have this with $rootscope to reach it from registerNewTrip as well.
    $scope.selectVehicle = "test(need to have this so it works)";
    $scope.vehicles = ['test1', 'test2', 'test3'];

    // code here to take the chosen date span and get info..
    //$scope.fromDateValue = "";
    //$scope.toDateValue = "";

    $scope.go = function (path) {
        $location.path(path);
    };

});