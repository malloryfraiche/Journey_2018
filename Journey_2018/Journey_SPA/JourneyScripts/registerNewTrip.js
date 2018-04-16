angular.module('app').controller('registerNewTrip', function ($scope, $location, $rootScope, $http) {

    var tripApi = "http://localhost:54542/api/Trips";
    var vehicleApi = "http://localhost:54542/api/Vehicles";

    // maybe have this with $rootscope to reach it from report as well?
    //$scope.selectVehicle = "";
    
    $http.get(vehicleApi).then(function (response) {
        $scope.vehicles = response.data;
    });
    
    var dateVal = new Date();
    var startKmVal = '';
    var stopKmVal = '';
    var startAddressVal = '';
    var destinationAddressVal = '';
    
    // the JSON data.
    $scope.registerNewTrip = {
        tripDate: dateVal,
        startKilometerReading: startKmVal,
        stopKilometerReading: stopKmVal,
        startAddress: startAddressVal,
        destinationAddress: destinationAddressVal,
        errand: '',
        notes: ''
    };

    // POST NEW TRIP - clicking the 'Save' button.
    $scope.saveNewTrip = function () {
        console.log($scope.registerNewTrip);
        $http({
            method: 'POST',
            url: tripApi,
            data: $scope.registerNewTrip,
            headers: {
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (data) {
            console.log(data);
        });
    };




    $scope.go = function (path) {
        $location.path(path);
    };
});


