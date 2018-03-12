angular.module('app').controller('createNewAccount', function ($scope, $location) {

    $scope.message = "Create New Account";

    $scope.go = function (path) {
        $location.path(path);
    };

});