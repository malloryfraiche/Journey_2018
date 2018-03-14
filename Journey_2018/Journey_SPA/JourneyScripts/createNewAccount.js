angular.module('app').controller('createNewAccount', function ($scope, $location) {

    $scope.message = "Create New Account";

    $scope.go = function (path) {
        $location.path(path);
        // show a "success" div in login.html (the path you are directed to) that you have created an account.
    };

});