// app.js includes the following:
// 1. angularJS app information
// 2. routing
// 3. logging

angular.module('app', ['ngRoute']);

angular.module('app').config(function ($routeProvider) {
    $routeProvider
        .when("/", { templateUrl: "login.html", controller: "login" })
        .when("/start", { templateUrl: "start.html", controller: "start" })
        .when("/myTrips", { templateUrl: "myTrips.html", controller: "myTrips" })
        .otherwise({ redirectTo: "/" });

});

//angular.module('app').controller('main', function ($scope) {

//    $scope.main = "Main";

//});

