<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $link = filter_var($_POST['link'], FILTER_SANITIZE_URL);

    // Here, you can add code to send an email, save to a database, etc.
    
    // For demonstration purposes, we'll just echo the data
    echo "Submitted Link: $link<br>";
} else {
    echo "Invalid request.";
}
?>