angular.module('pizzaApp',[])
.controller('CustomerController', function($scope, $window) {
    $scope.customer = {
        name: '',
        contact: '',
        address: ''
    };
    $scope.submitForm = function() {
        if ($scope.customerForm.$valid) {
            console.log("Customer Information submitted:", $scope.customer);
            localStorage.setItem('customer', JSON.stringify($scope.customer));
            $scope.customerCreated = true;
        } else {
            $window.alert("Please fill in all required fields correctly.");
        }
    };
    $scope.clearCustomer = function() {
        localStorage.removeItem('customer');
        $scope.customer = {
            name: '',
            contact: '',
            address: ''
        };
        $scope.customerCreated = false;
    };
});
