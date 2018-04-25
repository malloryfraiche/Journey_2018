angular.module('app').controller('createNewAccount', function ($scope, $location, $http, $timeout) {
    
    var registerUserApi = "https://localhost:44399/api/Users/Register";

    $scope.createAccountInput = {
        FirstName: '',
        LastName: '',
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
            $scope.successDiv = "Congrats! You have created an account...you will be redirected back to the Login page.";
            $timeout(function () { $scope.successDiv = false; }, 3000).then(function () { $location.path("/"); });
        });
            //.then(function (err, status) {
            //    console.log(err);
            //});
    };

    






    //$scope.go = function (path) {

    //    $location.path(path);

    //    // show a "success" div in login.html (the path you are directed to) that you have created an account.
    //    // $scope.successDiv = "Congrats! You have created an account. Please login below with your new info.";

    //};
});

