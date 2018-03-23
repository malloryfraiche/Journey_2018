angular.module('app').controller('report', function ($scope, $location) {

    $scope.go = function (path) {
        $location.path(path);
    };

});