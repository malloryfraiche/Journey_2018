angular.module('app').controller('createNewAccount', function ($scope, $location) {

    $scope.message = "Create New Account";

    $scope.go = function (path) {

        $location.path(path);

        // show a "success" div in login.html (the path you are directed to) that you have created an account.
        // $scope.successDiv = "Congrats! You have created an account. Please login below with your new info.";

    };

}).config(function ($mdIconProvider) {
    $mdIconProvider
        .iconSet("social", "../Content/angular-material-icons/social.svg")
        .iconSet("communication", "../Content/angular-material-icons/communication.svg")
        .iconSet("action", "../Content/angular-material-icons/action.svg")
        .iconSet("notification", "../Content/angular-material-icons/notification.svg");
});