angular.module('app').controller('myTrips', function ($scope, $location) {

    $scope.message = "In the myTrips controller";

    $scope.go = function (path) {
        $location.path(path);
    };

});