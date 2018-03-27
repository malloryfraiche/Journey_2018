
angular.module('app').controller('registerNewTrip', function ($scope, $location) {

    $scope.myDate = new Date();

    $scope.go = function (path) {
        $location.path(path);
    };
    
});


