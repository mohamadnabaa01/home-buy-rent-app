<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include "db_info.php";

$home_id = $_GET['home_id'];

$query = $mysqli->prepare("SELECT user_id FROM user_rent_homes WHERE rent_home_id = ?");
$query->bind_param("i", $home_id);
$query->execute();

$array = $query->get_result();

$user_id = $array->fetch_assoc();

$query2 = $mysqli->prepare("SELECT first_name, last_name, email_address, phone_number FROM users WHERE user_id = ?");
$query2->bind_param("i", $user_id["user_id"]);
$query2->execute();

$array2 = $query2->get_result();

$user = $array2->fetch_assoc();

$response = $user;

$json_response = json_encode($response);
echo $json_response;
?>