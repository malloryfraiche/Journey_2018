angular.module('app').controller('createNewAccount', function ($scope, $location, $http) {

    var userApi = "http://localhost:54542/api/Users";

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

    



    $scope.go = function (path) {

        $location.path(path);

        // show a "success" div in login.html (the path you are directed to) that you have created an account.
        // $scope.successDiv = "Congrats! You have created an account. Please login below with your new info.";

    };

});












//$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    //var param = function (obj) {
    //    var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

    //    for (name in obj) {
    //        value = obj[name];

    //        if (value instanceof Array) {
    //            for (i = 0; i < value.length; ++i) {
    //                subValue = value[i];
    //                fullSubName = name + '[' + i + ']';
    //                innerObj = {};
    //                innerObj[fullSubName] = subValue;
    //                query += param(innerObj) + '&';
    //            }
    //        }
    //        else if (value instanceof Object) {
    //            for (subName in value) {
    //                subValue = value[subName];
    //                fullSubName = name + '[' + subName + ']';
    //                innerObj = {};
    //                innerObj[fullSubName] = subValue;
    //                query += param(innerObj) + '&';
    //            }
    //        }
    //        else if (value !== undefined && value !== null)
    //            query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
    //    }

    //    return query.length ? query.substr(0, query.length - 1) : query;
    //};
    //// Override $http service's default transformRequest
    //$httpProvider.defaults.transformRequest = [function (data) {
    //    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    //}];