/*
    app.js includes the following:
    1. angularJS app information
    2. routing configuration
    3. navbar functionality
    4. loggning
*/

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


angular.module('app')
    .config(function ($mdIconProvider) {
        $mdIconProvider
            .iconSet("social", "../Content/angular-material-icons/social.svg")
            .iconSet("navigation", "../Content/angular-material-icons/navigation.svg");
    })
    .controller('navigationBar', function ($location) {

        // to hide the toolbar on the first load..
        //$("#toolbar").hide();

        // Navbar menu functionality.
        var originalEvent;
        this.openMainMenu = function ($mdMenu, event) {
            originalEvent = event;
            $mdMenu.open(event);
        };
        this.go = function (path) {
            $location.path(path);
        };

    });





