<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include "db_info.php";

$home_id = $_GET['home_id'];

$query = $mysqli->prepare("SELECT * FROM rent_homes WHERE rent_home_id = ?");
$query->bind_param("i", $home_id);
$query->execute();

$array = $query->get_result();

$home_rent = $array->fetch_assoc();

$response = $home_rent;

$json_response = json_encode($response);
echo $json_response;
?>