<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include "db_info.php";

$query = $mysqli->prepare("SELECT * FROM rent_homes");

$query->execute();

$array = $query->get_result();

$response = [];

while($home_rent = $array->fetch_assoc()){
    $response[] = $home_rent;
}

$json_response = json_encode($response);
echo $json_response;
?>