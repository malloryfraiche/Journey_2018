angular.module('app').controller('registerNewTrip', function ($scope, $location, $rootScope, $http) {

    tripApi = "http://localhost:54542/api/Trips";

    // maybe have this with $rootscope to reach it from report as well.
    //$scope.selectVehicle = "";
    $scope.vehicles = ['test1', 'test2', 'test3'];

    var dateVal = new Date();
    $scope.onDateChange = function () {

    };


    // the JSON data.
    $scope.registerNewTrip = {
        tripDate: dateVal,
        startAddress: '',
        destinationAddress: '',
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


