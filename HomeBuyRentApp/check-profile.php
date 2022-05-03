<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include "db_info.php";

$data = json_decode(file_get_contents("php://input"));

$user_id = $_GET['user_id'];
$first_name = $data->first_name;
$last_name = $data->last_name;
$phone_number = $data->phone_number;
$email_address = $data->email_address;
$password = hash("sha256",$data->password);

$query = $mysqli->prepare("SELECT * FROM users WHERE first_name = ? AND last_name = ? AND phone_number = ? AND email_address=? AND password=?");
$query->bind_param("sssss",$first_name, $last_name, $phone_number, $email_address, $password);
$query->execute();

$array = $query->get_result();

$profile = $array->fetch_assoc();
   
if(empty($profile)){
    $query2 = $mysqli->prepare("UPDATE users SET first_name = ?, last_name = ?, phone_number = ?, email_address = ?, password = ? WHERE user_id = ?");
    $query2->bind_param("sssssi", $first_name, $last_name, $phone_number, $email_address, $password, $user_id);
    $query2->execute();
}

$query3 = $mysqli->prepare("SELECT * FROM users WHERE user_id = ?");
$query3->bind_param("i", $user_id);
$query3->execute();

$array2 = $query3->get_result();

$user = $array2->fetch_assoc();

$json_response = json_encode($user);
echo $json_response;
?>