<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // $name = strip_tags(trim($_POST[“form_name”]));
    // $name = str_replace(array(“\r”,”\n”),array(” “,” “),$name);
    $email = filter_var(trim($_POST["formEmail"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["formMsg"]);

    // Check that data was sent to the mailer.
    if ( empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set a 400 (bad request) response code and exit.
        http_response_code(400);
        echo "Oops! There was a problem with your submission. Please complete the form and try again.";
        exit;
    }

    // Set the recipient email address.
    $recipient = "mimilundberg@icloud.com";

    // Set the email subject.
    $subject = "New message from $email Via React Site";

    // Build the email content.
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message: \n$message\n";

    // Build the email headers.
    $email_headers = "From: <$email>";

    // Send the email.
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Set a 200 (okay) response code.
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        // Set a 500 (internal server error) response code.
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn’t send your message.";
    }

} else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}

// 
// $email = $_POST["formEmail"];
// $message = $_POST["formMsg"];
//
// $sendEmailTo = "mimilundberg@icloud.com";
// $subject = "magdalundberg.se";
//
// $body = "Email: ";
// $body .= $email;
// $body .= "\n";
//
// $body .= "Message: \n";
// $body .= $message;
// $body .= "\n";
//
// // send email
// $success = mail($sendEmailTo, $subject, $body, "From:".$email);
//
// // redirect to success page
// if ($success){
//   echo "success";
// } else {
//   echo "invalid";
// }

?>
