angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Products) {

  $scope.products = Products.all();
  console.log('the product',$scope.products);
})

.controller('ChatsCtrl', function($scope, Chats, Products) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
  $scope.image = 'http://res.cloudinary.com/dnzfw8qxl/image/upload/t_media_lib_thumb/v1454397274/anonymous_vnakfc.png';
  $scope.button = function(product){
    console.log('button was clicked' , product , $scope.image);
    //console.log(product.name);
    Products.saveProduct(product, $scope.image);
    console.log(product);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


.controller('AccountCtrl', function ($scope , Auth ) {
  $scope.settings = {
    enableFriends: true

  };
  $scope.logout = function(){
    console.log('clicked the logout');
    Auth.logout();
  }

});
