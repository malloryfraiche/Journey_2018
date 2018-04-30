angular.module('app').controller('start', function ($scope, $location, $rootScope) {

    $('#toolbar').show();

    $scope.go = function (path) {
        if ($rootScope.token === '') {
            $location.path("/");
        } else {
            $location.path(path);
        }
    };

    $scope.Logout = function () {
        console.log("Logging out...");
        //sessionStorage.removeItem('');
        $location.path("/");
    };

})
    .config(function ($mdThemingProvider) {

        $mdThemingProvider.theme('dark-grey').backgroundPalette('blue-grey');
        $mdThemingProvider.theme('backOrLogout').backgroundPalette('blue-grey').dark();

    });