// app.js includes the following:
// 1. angularJS app information
// 2. routing
// 3. logging
// 4. navbar functionality

angular.module('app', ['ngRoute']);

angular.module('app').config(function ($routeProvider) {
    $routeProvider
        .when("/", { templateUrl: "login.html", controller: "login" })
        .when("/start", { templateUrl: "start.html", controller: "start" })
        .when("/myTrips", { templateUrl: "myTrips.html", controller: "myTrips" })
        .otherwise({ redirectTo: "/" });
});



angular.module('app').controller('navigationBar', function ($scope, $location) {


    // make the different navbar options "active" when clicked
    $scope.isActive = function (highlighted) {
        return highlighted === $location.path();
    };

});



