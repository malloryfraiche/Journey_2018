﻿angular.module('app').controller('support', function ($scope, $location) {

    




    $scope.go = function (path) {
        $location.path(path);
    };
});

//<script type="text/javascript">
//    $(function () {

//    var chat = $.connection.supportHub;

//    chat.client.broadcastMessage = function (name, message) {
//        var enteredName = $('<div />').text(name).html();
//        var enteredMsg = $('<div />').text(message).html();
//        $('#discussion').append('<li><strong>' + enteredName + '</strong>:&nbsp;&nbsp;' + enteredMsg + '</li>');
//    };
//    $('#displayname').val(prompt('Enter your name:', ''));
//    $('#message').focus();

//    $.connection.hub.start().done(function () {
//        $('#sendmessage').click(function () {
//            chat.server.send($('#displayname').val(), $('#message').val());
//            $('#message').val('').focus();
//        });
//    });

//});
//</script>

