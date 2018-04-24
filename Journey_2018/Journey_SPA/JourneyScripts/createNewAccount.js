angular.module('app').controller('createNewAccount', function ($scope, $location, $http) {

    var registerUserApi = "https://localhost:44399/api/Users/Register";

    var emailUsername = '';

    $scope.createAccountInput = {
        firstName: '',
        lastName: '',
        email: emailUsername,
        userName: emailUsername,
        password: '',
        confirmPassword: ''
    };

    $scope.createAccount = function () {
        $http({
            method: 'POST',
            url: registerUserApi,
            data: $scope.createAccountInput,
            headers: {
                //'Content-Type': 'application/x-www-form-urlencoded'
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (data) {
            console.log(data);
            //$scope.createAccountInput.trigger("reset");
        });
    };

    






    //$scope.go = function (path) {

    //    $location.path(path);

    //    // show a "success" div in login.html (the path you are directed to) that you have created an account.
    //    // $scope.successDiv = "Congrats! You have created an account. Please login below with your new info.";

    //};
});

