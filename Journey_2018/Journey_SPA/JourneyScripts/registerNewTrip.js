angular.module('app').controller('registerNewTrip', function ($scope, $location, $rootScope, $http) {

    var tripApi = "http://localhost:54542/api/Trips";
    var vehicleApi = "http://localhost:54542/api/Vehicles";

    var dateVal = new Date();
    
    // the JSON data.
    $scope.registerNewTrip = {
        //vehicle_Id: $(".md-option [value='{{vehicle.Id}}']").val(),
        tripDate: dateVal,
        startKilometerReading: '',
        stopKilometerReading: '',
        startAddress: '',
        destinationAddress: '',
        errand: '',
        notes: ''
    };

    // To have active vehicles as drop-down option.
    $http.get(vehicleApi).then(function (response) {
        $scope.vehicles = response.data;

        // 'vehicle' here is the value - 'Active' and 'RegistrationNumber' are keys...
        angular.forEach($scope.vehicles, function (vehicle) {
            if (vehicle.Active === true) {
                //
            }
        });
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

