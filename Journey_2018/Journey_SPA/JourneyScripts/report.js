angular.module('app').controller('report', function ($scope, $location, $http) {

    // maybe have this with $rootscope to reach it from registerNewTrip as well.
    //$scope.selectVehicle = "";

    var vehicleApi = "http://localhost:54542/api/Vehicles";

    $http.get(vehicleApi).then(function (response) {
        $scope.vehicles = response.data;
        // 'vehicle' here is the value - 'Active' and 'RegistrationNumber' are keys...
        angular.forEach($scope.vehicles, function (vehicle) {
            if (vehicle.Active === true) {
                console.log(vehicle.RegistrationNumber);
            }
        });

    });








    // code here to take the chosen date span and get info..
    //$scope.fromDateValue = "";
    //$scope.toDateValue = "";

    $scope.go = function (path) {
        $location.path(path);
    };
});