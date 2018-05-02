angular.module('app').controller('start', ['$scope', '$location', '$rootScope', function ($scope, $location, $rootScope) {

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
        $rootScope.token = '';
        console.log($rootScope.token);
        console.log("EMPTY token.");
        $location.path("/");
    };

}])
    .config(['$mdThemingProvider', function ($mdThemingProvider) {

        $mdThemingProvider.theme('dark-grey').backgroundPalette('blue-grey');
        $mdThemingProvider.theme('backOrLogout').backgroundPalette('blue-grey').dark();

    }]);