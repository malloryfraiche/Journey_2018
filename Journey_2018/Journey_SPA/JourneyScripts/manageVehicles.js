angular.module('app').controller('manageVehicles', function ($scope, $location) {

    $scope.vehicleToBeEdited = false;

    $scope.showEditDivContents = function () {

        // build logic to disable/hide the appropriate button in the div that shows...
        //if () {
        //    $('#addVehicleButton').hide();
        //};

        $scope.vehicleToBeEdited = true;
    };


    $scope.vehicles = [
        { registrationNumber: 'LOL123' },
        { registrationNumber: 'TES238' },
        { registrationNumber: 'MUG586' }
    ];


    $scope.go = function (path) {
        $location.path(path);
    };

});
