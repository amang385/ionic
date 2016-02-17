// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('myApp', ['ionic'])

.controller('nameCtrl', function($scope) {
  $scope.name = "amang";


  $scope.sayHi = function() {
    if ($scope.name == "test") {
      $scope.name = "amang";

    } else {
      $scope.name = "test";
    }

  }


  $scope.list = [

  ];
  //$scope.grade ;
  var total = 0;
  var i = 0;

  $scope.addItem = function() {
    var grade = 0;
    $scope.list.splice(i, i, $scope.num);
    total += ($scope.num * 1);
    console.log(total);
    i++;
    grade = total / i;
    console.log(grade);
    $scope.grade = grade;
    console.log($scope.grade);
  };
});




// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     if(window.cordova && window.cordova.plugins.Keyboard) {
//       // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//       // for form inputs)
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//
//       // Don't remove this line unless you know what you are doing. It stops the viewport
//       // from snapping when text inputs are focused. Ionic handles this internally for
//       // a much nicer keyboard experience.
//       cordova.plugins.Keyboard.disableScroll(true);
//     }
//     if(window.StatusBar) {
//       StatusBar.styleDefault();
//     }
//   });
// })
