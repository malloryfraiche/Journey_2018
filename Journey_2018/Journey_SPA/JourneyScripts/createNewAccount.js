angular.module('app').controller('createNewAccount', function ($scope, $location, $http) {

    var userApi = "https://localhost:44399/api/Users";

    $scope.createAccountInput = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    $scope.createAccount = function () {
        $http({
            method: 'POST',
            url: userApi,
            data: $scope.createAccountInput,
            headers: {
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

