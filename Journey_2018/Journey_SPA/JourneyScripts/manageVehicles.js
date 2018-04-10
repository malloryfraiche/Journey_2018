angular.module('app').controller('manageVehicles', function ($scope, $location, $mdDialog, $timeout) {


    $scope.showEditPromtDialog = function (ev) {
        $mdDialog
            .show({
                controller: DialogController,
                templateUrl: 'Dialogs/editVehiclesDialog.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: false,
                fullscreen: false
            })
            // controls the action after clicking 'update' in the edit dialog box.
            .then(
            $scope.message = function () {
                $scope.info = 'This is a simple message.';
                $timeout(function () { $scope.info = false; }, 3000);
            });
    };

    $scope.showAddVehicleDialog = function (ev) {
        $mdDialog
            .show({
                controller: DialogController,
                templateUrl: 'Dialogs/addVehicleDialog.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: false,
                fullscreen: false
            })
            // controls the action after clicking 'save' in the addVehicle dialog box.
            .then(
            $scope.message = function () {
                $scope.info = 'This is a simple message.';
                $timeout(function () { $scope.info = false; }, 3000);
            });
    };

    
    // data for testing.
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


// to control the dialog boxes.
function DialogController($scope, $mdDialog) {
    
    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.message = function (message) {
        $mdDialog.hide(message);
    };

    // Activate and inactive vehicle.
    $scope.activationData = true;
    $scope.activationStatus = 'Vehicle is ACTIVE';
    $scope.onActivationChange = function () {
        if ($scope.activationData === true)
        {
            $scope.activationStatus = 'Vehicle is ACTIVE';
        } else
        {
            $scope.activationData = false;
            $scope.activationStatus = 'Vehicle is INACTIVE';
        }
    };

    // Set vehicle as Default.
    $scope.defaultData = false;
    $scope.defaultStatus = '(not your default vehicle)';
    $scope.onDefaultChange = function () {
        if ($scope.defaultData === false) {
            $scope.defaultStatus = '(not your default vehicle)';
        } else 
        {
            $scope.defaultData = true;
            $scope.defaultStatus = 'Default vehicle';
            // if vehicle is your default, it must also be active.
            $scope.activationData = true;
            $scope.activationStatus = 'Vehicle is ACTIVE';
        }
    };

}

