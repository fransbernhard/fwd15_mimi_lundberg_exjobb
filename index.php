<?php
$con = new mysqli("127.0.0.1", "root", "mimi", "mimi");
$message = $con->query("SELECT message FROM myTable")->fetch_object()->message;
$con->close();
echo "$message <br/>";
echo "Hello From Sites Folder!";
phpinfo();
