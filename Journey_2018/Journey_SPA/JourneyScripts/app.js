// app.js includes the following:
// 1. angularJS app information
// 2. routing
// 3. logging
// 4. navbar functionality

angular.module('app', ['ngRoute', 'ngMaterial', 'ngMessages']);

angular.module('app').config(function ($routeProvider) {
    $routeProvider
        .when("/", { templateUrl: "login.html", controller: "login" })
        .when("/createNewAccount", { templateUrl: "createNewAccount.html", controller: "createNewAccount" })
        .when("/start", { templateUrl: "start.html", controller: "start" })
        .when("/myTrips", { templateUrl: "myTrips.html", controller: "myTrips" })
        .when("/registerNewTrip", { templateUrl: "registerNewTrip.html", controller: "registerNewTrip" })
        .when("/report", { templateUrl: "report.html", controller: "report" })
        .when("/manageVehicles", { templateUrl: "manageVehicles.html", controller: "manageVehicles" })
        .when("/support", { templateUrl: "support.html", controller: "support" })
        .otherwise({ redirectTo: "/" });

    // have a route to a newTrip with an id number...check the angular powerpoints...

});



angular.module('app').controller('navigationBar', function ($scope, $location) {


    // make the different navbar options "active" when clicked
    $scope.isActive = function (highlighted) {
        return highlighted === $location.path();
    };

    // hamburger menu toggle back up after an option is chosen...

});





