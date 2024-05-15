<?php
include("connection.php");
?>
<!DOCTYPE html>
<html lang="en" ng-app="pizzaApp">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lido Pizza Corner - Customer Information</title>
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="styles.css">
    </head>
    <body ng-controller="CustomerController">
        <div class="container">
            <h1>Welcome to Lido Pizza</h1>
            <hr class="divider">
            <nav>
                <a href="Lido.index.html">Home</a>
                <a href="Lido.pizzas.html">Pizzas</a>
                <a href="customer.info.php">Account</a>
                <a href="cart.html">Cart</a>
                <a href="order.html">Order</a>            
            </nav>
            <hr class="divider">
            <form name="customerForm" action="index.php" method="POST" ng-submit="submitForm()">
                <table class="customer-info">
                    <tr>
                        <td>NAME</td>
                        <td><input type="text" ng-model="customer.name" name="name" required></td>
                    </tr>
                    <tr>
                        <td>CONTACT</td>
                        <td>
                            <input type="tel" ng-model="customer.contact" name="contact" ng-minlength="10" ng-maxlength="10" required>
                            <div ng-show="customerForm.contact.$dirty && (customerForm.contact.$error.required || customerForm.contact.$error.minlength || customerForm.contact.$error.maxlength)">
                                <span style="color: black;">Contact number must have exactly 10 digits.</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>ADDRESS</td>
                        <td><input type="text" ng-model="customer.address" name="address" required></td>
                    </tr>
                </table>
                <center><center><input type="submit" id="btn" name="submit"/></center></center>
            </form>
            <div ng-show="customerCreated">
                <p><b>Your account has been created successfully!</b></p>
            </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
        <script src="customer.js"></script>
    </body>
</html>