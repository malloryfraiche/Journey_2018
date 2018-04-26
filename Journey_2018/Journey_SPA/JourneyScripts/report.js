angular.module('app').controller('report', function ($scope, $location, $http, $rootScope) {

    var vehicleApi = "https://localhost:44399/api/Vehicles";


    // GET - active vehicles as drop-down options.
    $http({
        method: 'GET',
        url: vehicleApi,
        headers: {
            'Authorization': 'Bearer ' + $rootScope.token,
        }
    }).then(function (response) {
        $scope.vehicles = response.data;

        // Just testing angularJs forEach loops in a GET...
        angular.forEach(response.data, function (vehicle) {
            if (vehicle.Active === true) {
                console.log(vehicle.RegistrationNumber);
            }
            if (vehicle.DefaultVehicle === true) {
                console.log("the default vehicle: " + vehicle.RegistrationNumber);
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