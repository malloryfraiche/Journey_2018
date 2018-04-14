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


    var active = true;
    var defaultVehicle = false;

    $scope.switchModel = {
        registrationNumber: '',
        // userId: /* have the Users GUID that is logged in be here to fill out this field in DB... */
        active: true,
        defaultVehicle: false
    };



    // Activate and inactivate vehicle with switch button.
    $scope.onActivationChange = function () {

        active = !active;
        if (active === false) {
            $scope.switchModel.defaultVehicle = false;
            defaultVehicle = false;

        }
        console.log("Activation switch: " + active);
        return active;
    };

    // Set vehicle as Default (or not) with switch button.
    $scope.onDefaultChange = function () {

        defaultVehicle = !defaultVehicle;
        if (defaultVehicle === true) {
            $scope.switchModel.active = true;
            active = true;
        }
        console.log("Default switch: " + defaultVehicle);
        //console.log("Activation switch: " + activeVal);
        return defaultVehicle;
    };


    //$scope.addNewVehicleInput = {
    //    registrationNumber: '',
    //    active: activeVal,
    //    defaultVehicle: defaultVal
    //};

    //console.log($scope.addNewVehicleInput.active);
    //console.log($scope.addNewVehicleInput.defaultVehicle);

    // ADD NEW VEHICLE
    // controls the action after clicking 'save' in the addVehicle dialog box.
    $scope.addNewVehicle = function () {

        console.log($scope.switchModel);

        $http({
            method: 'POST',
            url: vehicleApi,
            data: $scope.switchModel,
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

