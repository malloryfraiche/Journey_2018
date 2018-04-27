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
    });

    // JSON data for the chart and pdf creation.
    var fromDateVal = new Date();
    var toDateVal = new Date();
    $scope.reportCreation = {
        vehicleId: '',
        fromDate: fromDateVal,
        toDate: toDateVal
    };

    $scope.getChart = function () {
        // POST - to post to the chart api and then get the information into the chart diagram.
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
            var trips = response.data;
            $scope.chartLabels = ["Trips between 0-20km", "Trips between 21-50km", "Trips between 51-200km"];
            $scope.chartData = [0,0,0];
            angular.forEach(response.data, function (trip) {
                var totalKmValue = trip.StopKilometerReading - trip.StartKilometerReading;
                if (totalKmValue <= 20) {
                    $scope.chartData[0]++;
                } else if (totalKmValue > 20 && totalKmValue <= 50) {
                    $scope.chartData[1]++;
                } else if (totalKmValue > 50) {
                    $scope.chartData[2]++;
                }
            }, function (error) { console.log(error); });
        });
    };
    
    $scope.generatePdf = function () {
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