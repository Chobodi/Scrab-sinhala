<?php

require_once 'db/dbConnection.php';


$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT MAX(id) FROM user;";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {

        $id = $row["MAX(id)"];
    }
}
// Output "no suggestion" if no hint was found or output correct values 
$id += 1;

$sql = "INSERT INTO user(id,username,password) VALUES('" . $id . "','".$username."','".$password."');";

if (mysqli_query($conn, $sql)) {
    echo '<script>
                    window.location = "index.php";
                </script>';
} else {
    echo '<script>
                    alert("Could not register");
                    window.location = "register.php";
                </script>';
}

mysqli_close($conn);
?>
