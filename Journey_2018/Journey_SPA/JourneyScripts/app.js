/*
    app.js includes the following:
    1. angularJS app information
    2. routing configuration
    3. mdIconProvider
    4. navbar controller
*/
angular.module('app', ['ngRoute', 'ngMaterial', 'ngMessages', 'chart.js']);
angular.module('app').config(['$routeProvider', function ($routeProvider) {
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
}]);
angular.module('app').config(['$mdIconProvider', function ($mdIconProvider) {
    $mdIconProvider
        .iconSet("social", "../Content/angular-material-icons/social.svg")
        .iconSet("communication", "../Content/angular-material-icons/communication.svg")
        .iconSet("action", "../Content/angular-material-icons/action.svg")
        .iconSet("notification", "../Content/angular-material-icons/notification.svg")
        .iconSet("av", "../Content/angular-material-icons/av.svg")
        .iconSet("navigation", "../Content/angular-material-icons/navigation.svg")
        .iconSet("maps", "../Content/angular-material-icons/maps.svg")
        .iconSet("image", "../Content/angular-material-icons/image.svg")
        .iconSet("pdf", "../Content/angular-material-icons/ic_picture_as_pdf_black_48px.svg")
        .iconSet("editor", "../Content/angular-material-icons/editor.svg")
        .iconSet("content", "../Content/angular-material-icons/content.svg");
}]);
angular.module('app').controller('navigationBar', ['$location', '$scope', '$rootScope', function ($location, $scope, $rootScope) {
    // Navbar menu functionality.
    var originalEvent;
    this.openMainMenu = function ($mdMenu, event) {
        originalEvent = event;
        $mdMenu.open(event);
    };
    this.go = function (path) {
        $location.path(path);
    };
    $scope.Logout = function () {
        console.log("Logging out...");
        $rootScope.token = '';
        console.log($rootScope.token);
        console.log("EMPTY token.");
        $location.path("/");
    };
}]);