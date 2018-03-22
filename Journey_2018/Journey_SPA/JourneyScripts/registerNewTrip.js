angular.module('app').controller('registerNewTrip', function ($scope, $location) {

    $scope.message = "RegisterNewTrip controller (.js)";

    $scope.go = function (path) {
        $location.path(path);
    };

});