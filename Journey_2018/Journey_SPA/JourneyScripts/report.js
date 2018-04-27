angular.module('app').controller('report', function ($scope, $location, $http, $rootScope) {

    var vehicleApi = "https://localhost:44399/api/Vehicles";
    var generatePdfApi = "https://localhost:44399/api/reports/generate";
    var chartApi = "https://localhost:44399/api/chart";

    // GET - active vehicles as drop-down options.
    $http({
        method: 'GET',
        url: vehicleApi,
        headers: {
            'Authorization': 'Bearer ' + $rootScope.token
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


    $scope.getChart = function (isValid) {
        // Make sure the fields are filled out.
        if (!reportCreation.selectModel || !reportCreation.fromDate || !reportCreation.toDate) {
            $scope.noSelectionMadeMessage = true;
            return;
        }
        $scope.noSelectionMadeMessage = false;

        var fromDateVal = new Date();
        var toDateVal = new Date();
        var selectedVal = $scope.reportCreation.selectModel;

        // JSON data for the charts.
        $scope.reportCreation = {
            vehicleId: selectedVal,
            fromDate: fromDateVal,
            toDate: toDateVal
        };

        $http({
            method: 'POST',
            url: chartApi,
            data: $scope.reportCreation,
            headers: {
                'Authorization': 'Bearer ' + $rootScope.token,
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (response) {
            
            
            $scope.chartLabels = [];
            $scope.chartData = [];
            angular.forEach(response.data, function (trip, t) {

                if ((trip.stopKilometerReading - trip.startKilometerReading) <= 20) {

                }

                $scope.chartLabels.push("Trip Id: " + trip.id);
                $scope.chartData.push();
                
            }, function (error) { console.log(error); });

        });

    };






    $scope.generatePdf = function () {

        var fromDateVal = new Date();
        var toDateVal = new Date();
        var selectedVal = $scope.reportCreation.selectModel;

        // JSON data (DownloadModel.cs).
        $scope.reportCreation = {
            vehicleId: selectedVal,
            fromDate: fromDateVal,
            toDate: toDateVal
        };

        // POST - to generate the pdf and get the url to download it...
        $http({
            method: 'POST',
            url: generatePdfApi,
            data: $scope.reportCreation,
            headers: {
                'Authorization': 'Bearer ' + $rootScope.token,
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (response) {
            $scope.pdfUrl = response.data;
            // To show the Download and view PDF button.
            $scope.toDownloadThePdf = true;
        }, function (error) {
            $scope.pdfUrl = "";
            console.log(error);
        });
    };


    $scope.go = function (path) {
        $location.path(path);
    };
});