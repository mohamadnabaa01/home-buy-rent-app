<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include "db_info.php";

$user_id = $_GET['user_id'];

$query = $mysqli->prepare("SELECT * FROM users WHERE user_id=?");
$query->bind_param("i",$user_id);
$query->execute();


$array = $query->get_result();

if($user = $array->fetch_assoc()){
    $response = $user;
}

$json_response = json_encode($response);
echo $json_response;
?>