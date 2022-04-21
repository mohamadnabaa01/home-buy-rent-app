<?php
header('Access-Control-Allow-Origin: *');
include("db_info.php");


$query = $mysqli->prepare("SELECT * FROM users");

$array = $query->get_result();

if($user = $array->fetch_assoc()){
    $response = $user;
}

$data_result = json_encode($response);
echo $data_result;
?>