angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('shopCtrl', function($scope, Friends, $location) {
    $scope.categorydata = [];
    $scope.categorydata = [
    {
        "id": "1",
        "name": "ALCOHOL",
        "image": "img/catalcohol.png"
    },
    {
        "id": "2",
        "name": "GROCERY",
        "image": "img/catgrocery.png"
    },
    {
        "id": "3",
        "name": "FAST FOOD",
        "image": "img/catfastfood.png"
    },
    {
        "id": "4",
        "name": "FLOWERS",
        "image": "img/catflowers.png"
    },
    {
        "id": "5",
        "name": "PRESCRIPTION",
        "image": "img/catprescription.png"
    },
    {
        "id": "6",
        "name": "GIFTS",
        "image": "img/catgift.png"
    }
];
    
    $scope.opencategory = function()
    {
        console.log("button clicked");
        window.location.replace(window.location.origin + window.location.pathname + "#/tabs/products");
    };
})
.controller('productsCtrl', function($scope) {
    $scope.productdata = [];
    $scope.productdata = [{"id":"65","cat_id":"48","item_title":"Alpine Lager 12","item_price":"18.99","pro_size":"341 ml","item_desc":"Alpine Lager 12\r\n","pro_unit":"","item_image":"2"},{"id":"92","cat_id":"48","item_title":"BEER","item_price":"41.98","pro_size":"341","item_desc":"Alpine Lager 24\r\n","pro_unit":"","item_image":"2"},{"id":"93","cat_id":"48","item_title":"BEER","item_price":"3.24","pro_size":"473 ml","item_desc":"Alpine Lager 473ml Can\/Canette\r\n","pro_unit":"","item_image":"2"},{"id":"94","cat_id":"48","item_title":"BEER","item_price":"11.35","pro_size":"341 ml","item_desc":"Alpine Lager 6\r\n","pro_unit":"","item_image":"2"},{"id":"95","cat_id":"48","item_title":"BEER","item_price":"17.35","pro_size":"355 ml","item_desc":"Alpine Lager 8 Cans\/Canettes\r\n","pro_unit":"","item_image":"2"},{"id":"96","cat_id":"48","item_title":"BEER","item_price":"22.99","pro_size":"341 ml","item_desc":"Alpine Light 12\r\n","pro_unit":"","item_image":"2"},{"id":"97","cat_id":"48","item_title":"BEER","item_price":"22.99","pro_size":"355 ml","item_desc":"Alpine Light 12 Cans\/Canettes\r\n","pro_unit":"","item_image":"2"},{"id":"98","cat_id":"48","item_title":"BEER","item_price":"40.98","pro_size":"341 ml","item_desc":"Alpine Light 24\r\n","pro_unit":"","item_image":"2"}];

})

.controller('cartCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
