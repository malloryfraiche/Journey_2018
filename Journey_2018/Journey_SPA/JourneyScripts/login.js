angular.module('app').controller('login', ['$scope', '$rootScope', '$location', '$timeout', '$http', function ($scope, $rootScope, $location, $timeout, $http) {

    $rootScope.token = '';

    $scope.login = {
        userName: '',
        password: ''
    };
    $scope.loginButton = function () {
        var data = "grant_type=password&username=" + $scope.login.userName + "&password=" + $scope.login.password;
        console.log(data);
        $http.post('/token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
            $rootScope.token = response.data.access_token;
            console.log($rootScope.token);
            $location.path("/start");
        }, function (err, status) {
            console.log(err);
            $scope.errorMessage = "The Username or Password is incorrect. Please try again.";
            $timeout(function () { $scope.errorMessage = false; }, 4000)
                .then(function () {
                    location.reload();
                    //$scope.login.userName = '';
                    //$scope.login.password = '';
                    //$location.path("/");
                });
        });
    };

    
    $scope.go = function (path) {
        $location.path(path);
    };
}]);
