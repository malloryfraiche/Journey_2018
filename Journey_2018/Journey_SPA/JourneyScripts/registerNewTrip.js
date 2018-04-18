angular.module('app').controller('registerNewTrip', function ($scope, $location, $rootScope, $http) {

    var tripApi = "http://localhost:54542/api/Trips";
    var vehicleApi = "http://localhost:54542/api/Vehicles";

    // maybe have this with $rootscope to reach it from report as well?
    //$scope.selectVehicle = "";

    // to have active vehicles as drop-down option.
    $http.get(vehicleApi).then(function (response) {
        $scope.vehicles = response.data;
        // 'vehicle' here is the value - 'Active' and 'RegistrationNumber' are keys...
        angular.forEach($scope.vehicles, function (vehicle) {
            if (vehicle.Active === true) {
                console.log(vehicle.RegistrationNumber);
            }
        });

    });

    var dateVal = new Date();
    var startKmVal = '';
    var stopKmVal = '';
    var startAddressVal = '';
    var destinationAddressVal = '';














    $scope.getLocation = function () {

        navigator.geolocation.getCurrentPosition(function (position) {
            var geocoder = new google.maps.Geocoder();
            var latLng = new google.maps.LatLng(
                position.coords.latitude, position.coords.longitude);
            geocoder.geocode({
                'location': latLng
            }, function (results, status) {
                if (status === 'OK') {
                    if (results[0]) {
                        //$scope.registerNewTrip.startAddress = results[0].formatted_address;
                        startAddressVal = results[0].formatted_address;
                        console.log(startAddressVal);
                    } else {
                        console.log("No results found.");
                    }

                } else {
                    console.log("Geocoder failed due to: " + status);
                }
                //return startAddressVal;
            });
        });
        //return false;
    };

    
    //// This function is called from the Geocode API from the index.html file.
    //function geoCallbackFunction() {

    //    var geocoder = new google.maps.Geocoder;

    //    // When user clicks the pin-icon to use their location.
    //    $scope.getLocation() = function () {
    //        geocodeLatLng(geocoder);
    //    };

    //}

    //function geocodeLatLng(geocoder) {

    //    // Function to get the Lat and Lng values from user.
    //    //function getLatitudeLongitudeVal() {
    //    if (navigator.geolocation) {
    //        navigator.geolocation.getCurrentPosition(showPosition/*, showError*/);
    //    } else {
    //        console.log("Geolocation is not supported by this browser.");
    //    }

    //    function showPosition(position) {
    //        console.log("Latitude: " + position.coords.latitude);
    //        console.log("Longitude: " + position.coords.longitude);

    //        var lat = position.coords.latitude;
    //        var lng = position.coords.longitude;
    //        var latLngStr = lat + ',' + lng;
    //        console.log(latLngStr);
    //        //return latLngStr;
    //    };

    //    geocoder.geocode({ 'location': latLngStr }, function (results, status) {
    //        if (status === 'OK') {
    //            if (results[0]) {
    //                $scope.registerNewTrip.startAddress = results[0].formatted_address;
    //                startAddressVal = results[0].formatted_address;
    //                console.log(startAddressVal);
    //            } else {
    //                console.log("No results found.");
    //            }

    //        } else {
    //            console.log("Geocoder failed due to: " + status);
    //        }
    //        //return startAddressVal;
    //    });

    //    //}
    //    //getLatitudeLongitudeVal();

    //}





    //$scope.getLocation = function () {
    //    if (navigator.geolocation) {
    //        navigator.geolocation.getCurrentPosition(showPosition, showError);
    //    } else {
    //        console.log("Geolocation is not supported by this browser.");
    //    }

    //    function showPosition(position) {
    //        console.log("Latitude: " + position.coords.latitude);
    //        console.log("Longitude: " + position.coords.longitude);

    //        var lat = position.coords.latitude;
    //        var lng = position.coords.longitude;
    //        var latLngStr = lat + ',' + lng;
    //        console.log(latLngStr);

    //        var geoCoder = new google.maps.Geocoder;

    //        geoCoder.geocode( { 'location': latLngStr }, function (results, status) {

    //            if (status === 'OK') {
    //                if (results[0]) {
    //                    $scope.registerNewTrip.startAddress = results[0].formatted_address;
    //                    startAddressVal = results[0].formatted_address;
    //                    console.log(startAddressVal);
    //                } else {
    //                    console.log("No results found.");
    //                }

    //            } else {
    //                console.log("Geocoder failed due to: " + status);
    //            }

    //        });
    //    }

    //    //return startAddressVal;
    //};

    //function showError(error) {
    //    switch (error.code) {
    //        case error.PERMISSION_DENIED:
    //            console.log("User denied the request for Geolocation.");
    //            break;
    //        case error.POSITION_UNAVAILABLE:
    //            console.log("Location information is unavailable.");
    //            break;
    //        case error.TIMEOUT:
    //            console.log("The request to get user location timed out.");
    //            break;
    //        case error.UNKNOWN_ERROR:
    //            console.log("An unknown error occurred.");
    //            break;
    //    }
    //}
















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


