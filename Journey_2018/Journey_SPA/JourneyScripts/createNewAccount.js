angular.module('app').controller('createNewAccount', function ($scope, $location, $http) {

    var addUserApi = "http://localhost:54542/api/Users";

    $scope.createAccount = function () {
        $http({
            headers: {
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'POST',
            url: addUserApi,
            data: $httpParamSerializer($scope.createAccountForm)
        }).then(function (data) {
            console.log(data);
        });
    };


    $scope.go = function (path) {

        $location.path(path);

        // show a "success" div in login.html (the path you are directed to) that you have created an account.
        // $scope.successDiv = "Congrats! You have created an account. Please login below with your new info.";

    };

});