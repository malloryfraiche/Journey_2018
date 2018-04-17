angular.module('app').controller('manageVehicles', function ($scope, $location, $mdDialog, $timeout, $http) {

    var vehicleApi = "http://localhost:54542/api/Vehicles";

    $scope.showEditPromtDialog = function (ev, vehicle) {
        $mdDialog
            .show({
                controller: DialogController,
                templateUrl: 'Dialogs/editVehiclesDialog.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: false,
                fullscreen: false,
                locals: { dataToPass: vehicle }
            })
            // controls what happens after clicking 'Update' and closing editVehicle dialog box (and coming out of the DialogController).
            .then(
            $scope.message = function () {
                $scope.info = 'You have Updated a vehicle.';
                $timeout(function () { $scope.info = false; }, 3000);
                ReloadPage();
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
                fullscreen: false,
                locals: { dataToPass: null }
            })
            // controls what happens after clicking 'Save' and closing addVehicle dialog box (and coming out of the DialogController).
            .then(
            $scope.message = function () {
                $scope.info = 'You have added a vehicle to the list.';
                $timeout(function () { $scope.info = false; }, 3000);
                ReloadPage();
            });
    };

    function ReloadPage() {
        $http.get(vehicleApi).then(function (response) {
            $scope.vehicles = response.data;
        });
    }
    ReloadPage();

    // DELETE VEHICLE - when you click the garbage bin icon.
    $scope.deleteVehicle = function (vehicle) {
        //alert("Are you sure you want to delete?");
        $http.delete(vehicleApi + '/' + vehicle.Id)
            .then(function (data) {
                console.log(data);
                ReloadPage();
            });
    };

    $scope.go = function (path) {
        $location.path(path);
    };
});


// to control the 'Edit' and 'Add New Vehicle' dialog boxes.
function DialogController($scope, $mdDialog, $http, dataToPass) {

    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    var vehicleApi = "http://localhost:54542/api/Vehicles";

    var registrationNumber = '';
    var active = true;
    var defaultVehicle = false;

    $scope.vehicleModel = {
        registrationNumber: registrationNumber,
        active: active,
        defaultVehicle: defaultVehicle
    };

    if (dataToPass) {
        $scope.vehicleModel.registrationNumber = dataToPass.RegistrationNumber;
        $scope.vehicleModel.active = dataToPass.Active;
        $scope.vehicleModel.defaultVehicle = dataToPass.DefaultVehicle;
        $scope.vehicleModel.id = dataToPass.Id;
    }

    // Activate and inactivate vehicle with switch button.
    $scope.onActivationChange = function () {
        active = !active;
        if (active === false) {
            $scope.vehicleModel.defaultVehicle = false;
            defaultVehicle = false;
        }
        return active;
    };

    // Set vehicle as Default (or not) with switch button.
    $scope.onDefaultChange = function () {
        defaultVehicle = !defaultVehicle;
        if (defaultVehicle === true) {
            $scope.vehicleModel.active = true;
            active = true;
        }
        return defaultVehicle;
    };


    // ADD NEW VEHICLE - 'Save' button in the addVehicle dialog box.
    $scope.addNewVehicle = function () {
        console.log($scope.vehicleModel);
        $http({
            method: 'POST',
            url: vehicleApi,
            data: $scope.vehicleModel,
            headers: {
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (data) {
            console.log(data);
            $mdDialog.hide();
        });
    };

    // UPDATE VEHICLE - 'Update' button in the editVehicle dialog box.
    $scope.updateVehicle = function () {
        console.log($scope.vehicleModel);
        $http({
            method: 'PUT',
            url: vehicleApi + '/' + $scope.vehicleModel.id,
            data: $scope.vehicleModel,
            headers: {
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (data) {
            console.log(data);
            $mdDialog.hide();
        });
    };

}

