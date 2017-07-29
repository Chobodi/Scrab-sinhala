<?php

require_once './db/dbConnection.php';



$id = $_POST['id'];


$sql = "SELECT * FROM scrab WHERE id='" . $id . "';";
$result = $conn->query($sql);    
    if ($result->num_rows > 0) {
                        
        while ($row = $result->fetch_assoc()) {

            $word = $row["word"];
            $xml .= "<COMBINATION>" . trim($word) . "</COMBINATION>\n";
            file_put_contents("all_words.xml",$xml, FILE_APPEND);
            $sql = "UPDATE scrab SET status='Accept' WHERE id='".$id."'";
        }
    }


if (mysqli_query($conn, $sql)) {
    
    echo '<script>
        alert("Updated");
        window.location = "./admin.php";
      </script>';
} else {
    echo '<script>
        alert("Save Failed");
        window.location = "./admin.php";
      </script>';
}
mysqli_close($conn);
?>
