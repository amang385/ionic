'use strict';

app.controller('AccountCtrl', function ($scope , Auth) {
   /* $scope.settings = {
        enableFriends: true
    };*/
    $scope.logout = function(){
        console.log('clicked the logout');
      Auth.logout();
    }

    $scope.tip = function(){
        console.log('tip clicked');
    }


});