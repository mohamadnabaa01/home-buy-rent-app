<?php

include("db_info.php");

$email_address = $_GET["email_address"];
$password = hash("sha256",$_GET["password"]); 

$query = $mysqli->prepare("SELECT * FROM users WHERE email_address = ? AND password = ?");
$query->bind_param("ss", $email_address, $password);
$query->execute(); 

$array = $query->get_result();

if($user = $array->fetch_assoc()){
    $response = $user;
}

$data_result = json_encode($response);
echo $data_result;
?>