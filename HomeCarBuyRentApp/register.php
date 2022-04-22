<?php
header('Access-Control-Allow-Origin: *');
header('Access-COntrol-Allow-Headers:Content-Type');

include("db_info.php");

$data = json_decode(file_get_contents("php://input"));

$first_name = $data->first_name;
$last_name = $data->last_name;
$email_address = $data->email_address;
$phone_number = intval($data->phone_number);
$password = hash("sha256",$data->password);
$user_type = $data->user_type;

$response["first_name"] = $first_name;
$response["last_name"] = $last_name;
$response["email_address"] = $email_address;
$response["phone_number"] = $phone_number;
$response["password"] = $password;
$response["user_type"] = $user_type;  

$query = $mysqli->prepare("INSERT INTO users (first_name, last_name, email_address, phone_number, password, user_type) VALUES (?, ?, ?, ?, ?, ?)");
$query->bind_param("sssiss", $first_name, $last_name, $email_address, $phone_number, $password, $user_type);
$query->execute(); 

$data_result = json_encode($response);
echo $data_result;
?>