angular.module('app').controller('login', function ($scope, $location, $timeout, $http) {
    
    var token = '';

    $scope.login = {
        userName: '',
        password: ''
    };
    $scope.loginButton = function () {
        var data = "grant_type=password&username=" + $scope.login.userName + "&password=" + $scope.login.password;
        console.log(data);
        $http.post('/token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
            token = response.data.access_token;
            console.log(token);
            $location.path("/start");
        }, function (err, status) { console.log(err); });
    };



    
    $scope.go = function (path) {
        $location.path(path);
    };
});
