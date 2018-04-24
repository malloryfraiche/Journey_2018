angular.module('app').controller('createNewAccount', function ($scope, $location, $http) {

    var registerUserApi = "https://localhost:44399/api/Users/Register";

    $scope.createAccountInput = {
        FirstName: '',
        LastName: '',
        Email: '',
        UserName: '',
        Password: '',
        ConfirmPassword: ''
    };

    $scope.createAccount = function () {
        $http({
            method: 'POST',
            url: registerUserApi,
            data: $scope.createAccountInput,
            headers: {
                'Accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).then(function (data) {
            console.log(data);
            
        });
    };

    






    //$scope.go = function (path) {

    //    $location.path(path);

    //    // show a "success" div in login.html (the path you are directed to) that you have created an account.
    //    // $scope.successDiv = "Congrats! You have created an account. Please login below with your new info.";

    //};
});

