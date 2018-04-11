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


// to control the 'Edit' and 'Add New Vehicle' dialog boxes.
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


    
    // Activate and inactivate vehicle.
    $scope.activationDataInput = true;
    $scope.activationStatus = 'ACTIVE';
    console.log("Activation switch: " + $scope.activationDataInput);
    $scope.onActivationChange = function () {
        if ($scope.activationDataInput === true) {
            $scope.activationStatus = 'ACTIVE';
            $("#dot").addClass("activeDot");
        } else {
            $scope.activationDataInput = false;
            $scope.activationStatus = 'INACTIVE';
            // if vehicle is inactive, it cannot be your default. 
            $scope.defaultDataInput = false;
            $scope.defaultStatus = 'Standard';
        }
        console.log("Activation switch: " + $scope.activationDataInput);
    };

    
    
    // Set vehicle as Default.
    $scope.defaultDataInput = false;
    $scope.defaultStatus = 'Standard';
    console.log("Default switch: " + $scope.defaultDataInput);
    $scope.onDefaultChange = function () {
        if ($scope.defaultDataInput === false) {
            $scope.defaultStatus = 'Standard';
        } else {
            $scope.defaultDataInput = true;
            $scope.defaultStatus = 'DEFAULT';
            // if vehicle is your default, it must also be active.
            $scope.activationDataInput = true;
            $scope.activationStatus = 'ACTIVE';
        }
        console.log("Default switch: " + $scope.defaultDataInput);
    };



    //var vehicleApi = "http://localhost:54542/api/Vehicles";

    //$scope.registrationNumberInput = '';

    //$scope.addNewVehicle = function () {
    //    $http({
    //        method: 'POST',
    //        url: vehicleApi,
    //        data: $.param($scope.registrationNumberInput, $scope.activationDataInput, $scope.defaultDataInput),
    //        headers: {
    //            'Accept': 'application/json; charset=utf-8',
    //            'Content-Type': 'application/json; charset=utf-8'
    //        }
    //    }).then(function (data) {
    //        console.log(data);
    //        //$scope.addVehicleInput.trigger("reset");
    //    });
    //};

    //$scope.updateVehicle = function () {
    //    $http({
    //        method: 'PUT',
    //        url: vehicleApi,
    //        data: $.param($scope.registrationNumberInput, $scope.activationDataInput, $scope.defaultDataInput),
    //        headers: {
    //            'Accept': 'application/json; charset=utf-8',
    //            'Content-Type': 'application/json; charset=utf-8'
    //        }
    //    }).then(function (data) {
    //        console.log(data);
    //        //$scope.addVehicleInput.trigger("reset");
    //    });
    //};

}

