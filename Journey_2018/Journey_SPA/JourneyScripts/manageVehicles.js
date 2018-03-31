angular.module('app').controller('manageVehicles', function ($scope, $location) {

    $scope.listOfVehicles = [
        {
            firstKey: 'mallory',
            secondKey: 'fraiche',
            thirdKey: 'test'
        },
        {
            firstKey: 'sara',
            secondKey: 'fraiche',
            thirdKey: 'test2'
        }
    ];


    $scope.go = function (path) {
        $location.path(path);
    };
    
});