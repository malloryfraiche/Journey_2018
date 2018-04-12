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

    var vehicleApi = "http://localhost:54542/api/Vehicles";
    $scope.addNewVehicleInput = {
        registrationNumber: '',
        activationDataInput: '',
        defaultDataInput: ''
    };

    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    // Activate and inactivate vehicle with switch button.
    $scope.addNewVehicleInput.activationDataInput = true;
    console.log("Activation switch: " + $scope.addNewVehicleInput.activationDataInput);
    $scope.onActivationChange = function () {
        if ($(".md-checked") === true)
        {
            $scope.addNewVehicleInput.activationDataInput = true;
        }
        else if (!$(".md-checked"))
        {
            $scope.addNewVehicleInput.activationDataInput = false;

            // if vehicle is inactive, it cannot be your default. 
        }
        console.log("Activation switch: " + $scope.addNewVehicleInput.activationDataInput);
    };

    // Set vehicle as Default with switch button.
    $scope.addNewVehicleInput.defaultDataInput = false;
    console.log("Default switch: " + $scope.addNewVehicleInput.defaultDataInput);
    $scope.onDefaultChange = function () {
        if ($(".md-checked") === true) 
        {
            $scope.addNewVehicleInput.defaultDataInput = true;
        }
        else if (!$(".md-checked")) 
        {
            $scope.addNewVehicleInput.defaultDataInput = false;
            // if vehicle is your default, it must also be active.
        }
        console.log("Default switch: " + $scope.addNewVehicleInput.defaultDataInput);
    };

    
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

