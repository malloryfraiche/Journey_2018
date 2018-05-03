angular.module('app').controller('myTrips', ['$scope', '$location', '$http', '$rootScope', function ($scope, $location, $http, $rootScope) {
    
    var tripsApi = "https://localhost:44399/api/Trips";

    function ReloadList() {
        $http({
            method: 'GET',
            url: tripsApi,
            headers: {
                'Authorization': 'Bearer ' + $rootScope.token
            }
        }).then(function (response) {
            $scope.trips = response.data;
        });
    }
    ReloadList();

    // DELETE a trip.
    $scope.deleteTrip = function (trip) {
        $http({
            method: 'DELETE',
            url: tripsApi + "/" + trip.Id,
            headers: {
                'Authorization': 'Bearer ' + $rootScope.token
            }
        }).then(function (data) {
            console.log(data);
            ReloadList();
        });
    };
    
    $scope.go = function (path) {
        $location.path(path);
    };
}]);