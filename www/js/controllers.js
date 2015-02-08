angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('shopCtrl', function($scope, Friends) {
})

.controller('cartCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
