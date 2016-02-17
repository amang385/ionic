'use strict';

app.controller('PhotoCtrl', function($scope) {
    $scope.takePhoto = function(){
        console.log('takePhoto was clicked');
    }

    $scope.choosePhoto = function(){
        console.log('Choose photo was clicked');
    }
});