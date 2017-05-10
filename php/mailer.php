<?php

  $email = $_POST["form_email"];
  $message = $_POST["form_msg"];

  // Set the recipient email address.
  $recipient = "mimilundberg@icloud.com";
  // Set the email subject.
  $subject = "Message to magdalundberg.se from: $email";

  // Build the email content.
  $body .= "Email: $email\n\n";
  $body .= "Message: \n$message\n";

  // success
  $success = mail($recipient, $subject, $body, "From:" . $email);

  // Send the email.
  if ($success) {
    // Set a 200 (okay) response code.
    http_response_code(200);
    echo "Thank You! Your message has been sent.";
  } else {
    // Set a 500 (internal server error) response code.
    http_response_code(500);
    echo "Oops! Something went wrong and we couldn’t send your message.";
  }

?>
