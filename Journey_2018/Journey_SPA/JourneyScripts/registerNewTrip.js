angular.module('app').controller('registerNewTrip', function ($scope, $location) {


    $scope.go = function (path) {
        $location.path(path);
    };

});