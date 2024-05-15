<?php
    include('connection.php');
    if (isset($_POST["submit"])) {
        $name = mysqli_real_escape_string($conn, $_POST['name']);
        $contact = mysqli_real_escape_string($conn, $_POST['contact']); // Assuming you meant to store contact info
        $address = mysqli_real_escape_string($conn, $_POST['address']); // Assuming you have an address field
        // Insert new record
        $sql_insert = "INSERT INTO customers(name, contact, address) VALUES ('$name', '$contact', '$address')";
        $result_insert = mysqli_query($conn, $sql_insert);
        if ($result_insert) {
            // Redirect to index.php upon successful submission
            header("Location: Lido.index.html");
            exit(); // Stop further execution
        } else {
            echo '<script>
                    alert("Error: Unable to store data!");
                  </script>';
            exit(); // Stop further execution
        }
    }

