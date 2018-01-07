<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // trim() strips any white space from beginning and end of the string
    $sender = filter_var(trim($_POST["form_email"]), FILTER_SANITIZE_EMAIL);
    //  strip_tags() strips all HTML and PHP tags from a variable.
    $message = strip_tags($_POST["form_msg"]);

    // Check that data was sent to the mailer.
    if ( empty($message)) {
      // Set a 400 (bad request) response code and exit.
      http_response_code(400);
      echo "<h1>Oops! There was a problem with your submission. Please complete the form and try again.</h1>";
      exit;
    }

    $email = "me@magdalundberg.se";
    $recipient = "mimilundberg@icloud.com";
    $subject = "kontaktis";
    $body .= "Email: $sender\n\n";
    $body .= "Message: \n$message\n";
    $email_headers = "From: magdalundberg.se <$email>";

    $success = mail($recipient, $subject, $body, $email_headers);

    if ($success) {
      // Set a 200 (okay).
      http_response_code(200);
      echo "<h1>Thank You! Your message has been sent.</h1>";
    } else {
      // Set a 500 (internal server error).
      http_response_code(500);
      echo "<h1>Oops! Something went wrong and we couldn’t send your message.</h1>";
    }
  } else {
    http_response_code(403);
    echo "<h1>There was a problem with your submission, please try again.</h1>";
  }
?>
