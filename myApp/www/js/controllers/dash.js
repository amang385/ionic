'use strict';

app.controller('DashCtrl', function($scope, Products) {

    $scope.products = Products.all();
   // console.log('the product',$scope.products);
});