'use strict';

app.controller('LoginCtrl', function ($scope, $state, $ionicPopup, Auth) {
    $scope.emailLogin = function(){
        console.log('button was clicked on login ');


       // $scope.showPopup = function() {
            $scope.user = {};
            console.log('showing popup');

            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
                templateUrl: 'templates/partials/login.html',

                title: 'Sign in',
                //subTitle: 'Please use normal things',
                scope: $scope,
                buttons: [
                    {
                        text: '<b>Login</b>',
                        type: 'button-energized',
                        onTap: function(user) {
                            /*if (!$scope.data.wifi) {
                             //don't allow the user to close unless he enters wifi password
                             e.preventDefault();
                             } else {
                             return $scope.data.wifi;
                             }*/
                            user = $scope.user;
                           // console.log('Login the user is ',user);
                            //log user in
                            //send to dashbord
                            Auth.login(user).then(function(){
                                $state.go('tab.dash');
                            },  function(err){
                                    console.log('Error...',err);
                            });
                        }
                    },
                    {
                        text: '<b>Register</b>',
                        type: 'button-calm',
                        onTap: function(user) {
                            /*if (!$scope.data.wifi) {
                                //don't allow the user to close unless he enters wifi password
                                e.preventDefault();
                            } else {
                                return $scope.data.wifi;
                            }*/
                            user = $scope.user;
                           // console.log('Register the user is ',user);
                          //  Auth.register(user);
                            //register
                            Auth.register(user).then(function(){
                                console.log('user is the registered successfully!');
                                $state.go('tab.dash');
                            },function(err){
                                    console.log('Error...',err);
                                });
                            // send them to dashboard
                           // $state.go(tab.dash);
                        }
                    }
                ]
            });

           /* myPopup.then(function(res) {
                console.log('Tapped!', res);
            });*/

           /* $timeout(function() {
                myPopup.close(); //close the popup after 3 seconds for some reason
            }, 3000);*/
        };
  //  }
});