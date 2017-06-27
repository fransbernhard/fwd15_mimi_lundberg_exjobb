<?php
  // $servername = "localhost";
  // $username = "root";
  // $password = "root";
  //
  // try {
  //     $conn = new PDO("mysql:host=$servername;dbname=maggan", $username, $password);
  //     // set the PDO error mode to exception
  //     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  //     echo "Connected successfully";
  // } catch(PDOException $e) {
  //     echo "Connection failed: " . $e->getMessage();
  //     die();
  // }

  $servername = "localhost";
  $username = "root";
  $password = "root";
  $dbname = "maggan";

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  $sql = "SELECT * FROM Items";
  $result = $conn->query($sql);
  while($row = mysqli_fetch_assoc($result))
  $items[] = $row;
  echo json_encode($items);
  // header('Content-type:application/json;charset=utf-8');

  $conn->close();

?>
