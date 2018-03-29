angular.module('app').controller('start', function ($scope, $location) {
    
    $('#toolbar').show();

    $scope.go = function (path) {
        $location.path(path);
    };

});