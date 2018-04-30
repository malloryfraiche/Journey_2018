angular.module('app').controller('support', function ($scope, $location, $http, $rootScope) {
    
    var connection = $.hubConnection();
    connection.qs = { 'access_token': $rootScope.token };
    var supportHubProxy = connection.createHubProxy('SupportHub');

    supportHubProxy.on('broadcastMessage', function (name, message) {
        var enteredName = $('<div />').text(name).html();
        var enteredMsg = $('<div />').text(message).html();
        $('#discussion').append('<strong>' + enteredName + '</strong>:&nbsp;&nbsp;' + enteredMsg + '<md-divider></md-divider><br />');
    });

    $('#displayname').val(prompt('Enter your name:', ''));
    $('#message').focus();

    connection.start().done(function () {
        $scope.sendMessage = function () {
            supportHubProxy.invoke('send', $('#displayname').val(), $('#message').val());
            $('#message').val('').focus();
        };
    });




    $scope.go = function (path) {
        $location.path(path);
    };
});