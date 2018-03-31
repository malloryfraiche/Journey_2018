
angular.module('app').controller('registerNewTrip', function ($scope, $location) {

    // maybe have this with $rootscope to reach it from report as well.
    $scope.selectVehicle = "test(need to have this so it works)";
    $scope.vehicles = ['test1', 'test2', 'test3'];


    $scope.myDate = new Date();

    $scope.go = function (path) {
        $location.path(path);
    };
    
});


