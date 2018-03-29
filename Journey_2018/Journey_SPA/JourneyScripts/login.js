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

}).config(function ($mdIconProvider) {
    $mdIconProvider
        .iconSet("social", "../Content/angular-material-icons/social.svg")
        .iconSet("communication", "../Content/angular-material-icons/communication.svg")
        .iconSet("action", "../Content/angular-material-icons/action.svg")
        .iconSet("notification", "../Content/angular-material-icons/notification.svg");
});