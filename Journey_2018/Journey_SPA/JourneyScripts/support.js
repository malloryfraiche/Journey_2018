angular.module('app').controller('support', ['$scope', '$location', '$http', '$rootScope', function ($scope, $location, $http, $rootScope) {
    $scope.supportWelcomeMessage = "Welcome! What would you like help with?";
    var connection = $.hubConnection();
    connection.qs = { 'access_token': $rootScope.token };
    var supportHubProxy = connection.createHubProxy('SupportHub');
    supportHubProxy.on('broadcastMessage', function (name, message) {
        var inloggedUser = $('<div />').text(name).html().toUpperCase();
        var enteredMsg = $('<div />').text(message).html();
        $('#discussion').append('<strong>' + inloggedUser + '</strong>:&nbsp;&nbsp;' + enteredMsg + '<md-divider></md-divider><br />');
    });
    connection.start().done(function () {
        $scope.sendMessage = function () {
            supportHubProxy.invoke('send', $('#displayname').val(), $('#message').val());
            $('#message').val('').focus();
        };
    });
    $scope.go = function (path) {
        $location.path(path);
    };
}]);