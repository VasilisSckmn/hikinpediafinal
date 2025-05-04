<?php
// Make sure the form is submitted via POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize the input to prevent any malicious content
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    // Check if email and message are not empty (basic validation)
    if (!empty($email) && !empty($message)) {
        // Open the file for appending the message
        $file = fopen('messages.txt', 'a');
        
        if ($file) {
            // Write email and message into the file with a newline after each entry
            fwrite($file, "Email: $email\nMessage: $message\n\n");
            fclose($file);
            
            // Send a success message
            echo 'Message submitted successfully!';
        } else {
            echo 'There was an error saving your message.';
        }
    } else {
        echo 'Please fill out both the email and message fields.';
    }
} else {
    echo 'Invalid request.';
}
?>
