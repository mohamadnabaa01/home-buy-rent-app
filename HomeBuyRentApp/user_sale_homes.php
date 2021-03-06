<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include "db_info.php";

$data = json_decode(file_get_contents("php://input"));

$user_id = intval($data->user_id);
$sale_home_id = intval($data->home_id);

$query = $mysqli->prepare("INSERT INTO user_sale_homes (user_id, sale_home_id) VALUES (?, ?)");
$query->bind_param("ii", $user_id, $sale_home_id);
$query->execute();

$json_response = json_encode($sale_home_id);
echo $json_response;
?>