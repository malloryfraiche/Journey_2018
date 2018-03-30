angular.module('app').controller('start', function ($scope, $location) {

    $('#toolbar').show();

    $scope.go = function (path) {
        $location.path(path);
    };

})
    .config(function ($mdThemingProvider) {

        $mdThemingProvider.theme('dark-grey').backgroundPalette('blue-grey');
        $mdThemingProvider.theme('backOrLogout').backgroundPalette('blue-grey').dark();

    });