angular.module('app').controller('login', function ($scope, $location, $timeout) {

    $scope.login = "Login";

    //$scope.test = 5;

    //$timeout(function () {

    //    $scope.test = 4;

    //}, 3000);

    //$scope.emailErrorMessage = "Please enter username in e-mail format.";

    // on loginButton click you are redirected to start view.
    // have this location change happen in the $ajax sumbit later after the login is allowed.
    $scope.go = function (path) {
        $location.path(path);
    };

});
