angular.module('app').controller('myTrips', ['$scope', '$location', function ($scope, $location) {

    $scope.tripProgress = function () {
        // check if there is a trip in progress...
        // return the result here to view in the <p>.
    };
    
    $scope.cardClicked = false;
    $scope.go = function (path) {
        $location.path(path);
        $scope.cardClicked = true;
        return false;
    };

}]);