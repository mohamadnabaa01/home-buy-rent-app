<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include "db_info.php";

$query = $mysqli->prepare("SELECT car_name, price FROM rent_cars");

$query->execute();

$array = $query->get_result();

$response = [];

while($rent_car = $array->fetch_assoc()){
    $response[] = $rent_car;
}

$json_response = json_encode($response);
echo $json_response;
?>