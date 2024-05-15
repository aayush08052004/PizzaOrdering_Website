angular.module('pizzaApp', [])
.controller('PizzaController', function($scope, $window) 
{
  // Retrieve stored customer information from local storage
  var storedCustomer = localStorage.getItem('customer');
  $scope.customer = storedCustomer ? JSON.parse(storedCustomer) : {};
  // Retrieve stored cart items from local storage
  var storedCart = localStorage.getItem('cart');
  $scope.cart = storedCart ? JSON.parse(storedCart) : [];
  // Function to calculate total price of items in the cart
  $scope.getTotal = function() 
  {
      var total = 0;
      $scope.cart.forEach(function(item) 
      {
          total += item.price * item.quantity;
      });
      return total;
  };
  // Function to confirm order
  $scope.confirmOrder = function() 
  {
    var confirmation = $window.confirm("Are you sure you want to place the order?");
    if (confirmation) 
    {
      // Display order confirmation message
      var placeOrder = $window.confirm("Your order total is RS " + $scope.getTotal() + ". Confirm placing the order?");
      if (placeOrder) 
      {
        var confirmYes = $window.confirm("Your order has been placed!!");
        if (confirmYes) 
        {
          // Clear cart after placing order
          $scope.cart = [];
          localStorage.setItem('cart', JSON.stringify([])); // Clear cart in local storage
        }
      }
    } 
    else 
    {
      // Continue with the order
      $window.location.href = 'order.html';
    }
  };
  // Function to display order information
  $scope.displayOrderInfo = function() 
  {
      console.log("Customer Name:", $scope.customer.name);
      console.log("Contact:", $scope.customer.contact);
      console.log("Address:", $scope.customer.address);
      console.log("Cart Items:", $scope.cart);
      console.log("Total Price:", $scope.getTotal());
  };
});
