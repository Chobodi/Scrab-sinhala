<?php

require_once './db/dbConnection.php';



$id = $_POST['id'];


$sql = "UPDATE scrab SET status='Reject'  WHERE id='" . $id . "';";
if (mysqli_query($conn, $sql)) {

    echo '<script>
        alert("Rejected");
        window.location = "./admin.php";
      </script>';
} else {
    echo '<script>
        alert("Reject Failed");
        window.location = "./admin.php";
      </script>';
}
mysqli_close($conn);
?>
