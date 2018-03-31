angular.module('app').controller('manageVehicles', function ($scope, $location) {

    $scope.vehicles = [
        { registrationNumber: 'LOL123' },
        { registrationNumber: 'TES238' },
        { registrationNumber: 'MUG586' }
    ];


    $scope.go = function (path) {
        $location.path(path);
    };

});
