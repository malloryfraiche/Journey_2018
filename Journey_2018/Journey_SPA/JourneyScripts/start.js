angular.module('app').controller('start', function ($scope, $location) {

    $scope.start = "This is a div in start controller";

    $scope.go = function (path) {
        $location.path(path);
    };

});