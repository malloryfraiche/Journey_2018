
angular.module('app').controller('registerNewTrip', function ($scope, $location) {

    $scope.selectVehicle = "test(need to have this so it works)";
    $scope.vehicles = ['test1', 'test2', 'test3'];


    $scope.myDate = new Date();

    $scope.go = function (path) {
        $location.path(path);
    };
    
});


