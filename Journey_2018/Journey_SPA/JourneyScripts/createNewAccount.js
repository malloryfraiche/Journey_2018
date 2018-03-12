angular.module('app').controller('createNewAccount', function ($scope) {

    $scope.message = "In the Create New Account view/controller";

    $scope.go = function (path) {
        $location.path(path);
    };

});