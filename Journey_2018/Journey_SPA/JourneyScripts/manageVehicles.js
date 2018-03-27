angular.module('app').controller('manageVehicles', function ($scope, $location) {

    $scope.go = function (path) {
        $location.path(path);
    };



});