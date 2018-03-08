angular.module('app').controller('login', function ($scope, $location) {

    $scope.login = "Login";

    // on loginButton click you are redirected to start view.
    // have this location change happen in the $ajax sumbit later after the login is allowed.
    $scope.go = function (path) {
        $location.path(path);
    };

});