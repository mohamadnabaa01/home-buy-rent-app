<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include "db_info.php";

$data = json_decode(file_get_contents("php://input"));

$first_name = $data->first_name;
$last_name = $data->last_name;
$email_address = $data->email_address;
$phone_number = $data->phone_number;
$password = hash("sha256",$data->password);
$user_type = $data->user_type;


$query = $mysqli->prepare("INSERT INTO users (first_name, last_name, email_address, phone_number, password, user_type) VALUES (?, ?, ?, ?, ?, ?)");
$query->bind_param("sssiss", $first_name, $last_name, $email_address, $phone_number, $password, $user_type);
$query->execute();

$json_response = json_encode($email_address);
echo $json_response;
?>