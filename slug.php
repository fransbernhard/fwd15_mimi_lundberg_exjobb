

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = filter_var(trim($_POST["form_email"]), FILTER_SANITIZE_EMAIL);
//   $message = trim($_POST["form_msg"]);
//
//   // Check that data was sent to the mailer.
//   if ( empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
//     // Set a 400 (bad request) response code and exit.
//     http_response_code(400);
//     echo "Oops! There was a problem with your submission. Please complete the form and try again.";
//     exit;
//   }
//
//   // Set the recipient email address.
//   $recipient = "mimilundberg@icloud.com";
//   // Set the email subject.
//   $subject = "Message to magdalundberg.se from: $email";
//
//   // Build the email content.
//   $body .= "Email: $email\n\n";
//   $body .= "Message: \n$message\n";
//
//   // success
//   $success = mail($recipient, $subject, $body, "From:".<$email>);
//
//   // Send the email.
//   if (mail()) {
//     // Set a 200 (okay) response code.
//     http_response_code(200);
//     echo "Thank You! Your message has been sent.";
//   } else {
//     // Set a 500 (internal server error) response code.
//     http_response_code(500);
//     echo "Oops! Something went wrong and we couldn’t send your message.";
//   }
//
// } else {
//   // Not a POST request, set a 403 (forbidden) response code.
//   http_response_code(403);
//   echo "There was a problem with your submission, please try again.";
// }
