angular.module('app').controller('support', function ($scope, $location) {

    $scope.go = function (path) {
        $location.path(path);
    };

});