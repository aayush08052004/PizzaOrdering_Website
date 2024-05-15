angular.module('pizzaApp', [])
    .controller('CartController', function($scope) {
        $scope.cart = JSON.parse(localStorage.getItem('cart')) || [];
        $scope.getTotal = function() {
            var total = 0;
            $scope.cart.forEach(function(item) {
                total += item.price * item.quantity;
            });
            return total;
        };
        $scope.storeCart = function() {
            localStorage.setItem('cart', JSON.stringify($scope.cart));
            alert("Cart submitted successfully!");
        };
        $scope.addToCart = function(name, size, price) {
            var newItem = {
                name: name,
                size: size,
                price: price,
                quantity: 1
            };
            var existingItem = $scope.cart.find(function(item) {
                return item.name === name && item.size === size;
            });
            if (existingItem) {
                existingItem.quantity++;
            } else {
                $scope.cart.push(newItem);
            }
        };
        $scope.removeFromCart = function(index) {
            var item = $scope.cart[index];
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                $scope.cart.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify($scope.cart));
        };        
    });