'use strict';

app.controller('PhotoDetailCtrl', function($scope, Chats, Products) {


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
});