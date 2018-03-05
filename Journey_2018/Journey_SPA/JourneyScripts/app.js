// app.js includes the following:
// 1. angularJS app information
// 2. routing
// 3. logging

angular.module('app', []);

angular.module('app').controller('login', function ($scope) {

    $scope.login = "Login";

});

angular.module('app').controller('start', function ($scope) {

    $scope.start = "This is a div in start controller";

});

