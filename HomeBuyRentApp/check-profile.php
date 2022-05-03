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

$query = $mysqli->prepare("SELECT * FROM users WHERE first_name = ? AND last_name = ? AND phone_number = ? AND email_address=?");
$query->bind_param("ssss",$first_name, $last_name, $phone_number, $email_address);
$query->execute();

$array = $query->get_result();

if($profile = $array->fetch_assoc())
    echo json_encode($user_id);
else{
    $query2 = $mysqli->prepare("UPDATE users SET first_name = ?, last_name = ?, phone_number = ?, email_address = ? WHERE user_id = ?");
    $query2->bind_param("ssssi", $first_name, $last_name, $phone_number, $email_address, $user_id);
    $query2->execute();
}

?>