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
            // controls what happens after clicking 'save' and closing addVehicle dialog box (and coming out of the DialogController).
            .then(
            $scope.message = function () {
                $scope.info = 'You have added a new vehicle.';
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
function DialogController($scope, $mdDialog, $http) {

    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    var vehicleApi = "http://localhost:54542/api/Vehicles";
    
    $scope.startSwitchModel = {
        option1: true,
        option2: false
    };

    var activeVal;
    var defaultVal;
    
    // Activate and inactivate vehicle with switch button.
    $scope.onActivationChange = function () {
        if ($scope.startSwitchModel.option1 === true) {
            activeVal = true;
        }
        else  {
            activeVal = false;
            // if vehicle is inactive, it cannot be your default. 
            defaultVal = false;
        }
        console.log("Activation switch: " + activeVal);
        console.log("Default switch: " + defaultVal);
        return activeVal, defaultVal;
    };

    // Set vehicle as Default (or not) with switch button.
    $scope.onDefaultChange = function () {
        if ($scope.startSwitchModel.option2) {
            defaultVal = true;
        }
        else if (!$scope.startSwitchModel.option2) {
            defaultVal = false;
            // if vehicle is your default, it must also be active.
        }
        console.log("Default switch: " + defaultVal);
        console.log("Activation switch: " + activeVal);
        return defaultVal, activeVal;
    };


    $scope.addNewVehicleInput = {
        registrationNumber: '',
        active: activeVal,
        defaultVehicle: defaultVal
    };

    console.log($scope.addNewVehicleInput.active);
    console.log($scope.addNewVehicleInput.defaultVehicle);

    // ADD NEW VEHICLE
    // controls the action after clicking 'save' in the addVehicle dialog box.
    $scope.addNewVehicle = function () {
        $http({
            method: 'POST',
            url: vehicleApi,
            data: $scope.addNewVehicleInput,
            headers: {
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (data) {
            console.log(data);
            $mdDialog.hide();
            //$scope.addVehicleInput.trigger("reset");
        });
    };






    //$scope.updateVehicle = function () {
    //    $http({
    //        method: 'PUT',
    //        url: vehicleApi,
    //        data: ($scope.registrationNumberInput, $scope.activationDataInput, $scope.defaultDataInput),
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

