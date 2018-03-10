angular.module('app').controller('start', function ($scope, $location) {

    $scope.go = function (path) {
        $location.path(path);
    };

});