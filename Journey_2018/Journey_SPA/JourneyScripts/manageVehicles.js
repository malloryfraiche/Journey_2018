angular.module('app').controller('manageVehicles', function ($scope, $location, $mdDialog) {

    //$scope.vehicleToBeEdited = false;
    //$scope.showEditDivContents = function () {
    //    $scope.vehicleToBeEdited = true;
    //};

    $scope.showEditPromtDialog = function (ev) {

        $mdDialog
            .show({
                controller: DialogController,
                templateUrl: 'Dialogs/editVehiclesDialog.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: false,
                fullscreen: false
            });
            //.then(function () { }, function () { });

    };
    
    $scope.vehicles =
        [
            { registrationNumber: 'LOL123' },
            { registrationNumber: 'TES238' },
            { registrationNumber: 'MUG586' }
        ];


    $scope.go = function (path) {
        $location.path(path);
    };

});

function DialogController($scope, $mdDialog) {

    $scope.hide = function () {
        $mdDialog.hide();
    };

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

};

//function dialogController($scope, $mdDialog) {
//    $scope.hide = function () {
//        $mdDialog.hide();
//    };
//};