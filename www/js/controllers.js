angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('shopCtrl', function($scope, Friends) {
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
})

.controller('cartCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
