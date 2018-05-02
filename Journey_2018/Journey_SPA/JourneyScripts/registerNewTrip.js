﻿angular.module('app').controller('registerNewTrip', ['$scope', '$location', '$rootScope', '$http', '$routeParams', function ($scope, $location, $rootScope, $http, $routeParams) {

    var tripApi = "https://localhost:44399/api/Trips";
    var vehicleApi = "https://localhost:44399/api/Vehicles";

    var dateVal = new Date();

    // JSON data.
    $scope.registerNewTrip = {
        tripDate: dateVal,
        startKilometerReading: '',
        stopKilometerReading: '',
        startAddress: '',
        destinationAddress: '',
        errand: '',
        notes: ''
    };

    // GET - active vehicles as drop-down options.
    $http({
        method: 'GET',
        url: vehicleApi,
        headers: {
            'Authorization': 'Bearer ' + $rootScope.token,
        }
    }).then(function (response) {
        $scope.vehicles = response.data;
    });

    
    $scope.getStartLocation = function () {
        navigator.geolocation.getCurrentPosition(function (position, showError) {
            var geocoder = new google.maps.Geocoder();
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            geocoder.geocode({ 'location': latLng }, function (results, status) {
                if (status === 'OK') {
                    if (results[0]) {
                        $scope.registerNewTrip.startAddress = results[0].formatted_address;
                        $scope.$apply();
                        console.log($scope.registerNewTrip.startAddress);
                    } else {
                        console.log("No results found.");
                    }
                } else {
                    console.log("Geocoder failed due to: " + status);
                }
            });
        });
    };

    $scope.getStopLocation = function () {
        navigator.geolocation.getCurrentPosition(function (position, showError) {
            var geocoder = new google.maps.Geocoder();
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            geocoder.geocode({ 'location': latLng }, function (results, status) {
                if (status === 'OK') {
                    if (results[0]) {
                        $scope.registerNewTrip.destinationAddress = results[0].formatted_address;
                        $scope.$apply();
                        console.log($scope.registerNewTrip.destinationAddress);
                    } else {
                        console.log("No results found.");
                    }
                } else {
                    console.log("Geocoder failed due to: " + status);
                }
            });
        });
    };


    // Geocoding error messages if can't find current position.
    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                console.log("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                console.log("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                console.log("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                console.log("An unknown error occurred.");
                break;
        }
    }


    // POST NEW TRIP - clicking the 'Save' button.
    $scope.saveNewTrip = function () {
        $scope.registerNewTrip.vehicle_Id = parseInt($scope.selectVehicle);
        console.log($scope.registerNewTrip);
        $http({
            method: 'POST',
            url: tripApi,
            data: $scope.registerNewTrip,
            headers: {
                'Authorization': 'Bearer ' + $rootScope.token,
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (data) {
            console.log(data);
            location.reload();
        });
    };
    
    $scope.go = function (path) {
        $location.path(path);
    };

}]);

