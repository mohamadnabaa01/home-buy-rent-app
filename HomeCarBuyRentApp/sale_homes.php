<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include "db_info.php";

$data = json_decode(file_get_contents("php://input"));

$image1 = $data->image1;
$image2 = $data->image2;
$image3 = $data->image3;
$location = $data->location;
$price = $data->price;
$area = $data->area;
$living_rooms = $data->living_rooms;
$bedrooms = $data->bedrooms;
$bathrooms = $data->bathrooms;
$home_type = $data->home_type;

$query = $mysqli->prepare("INSERT INTO sale_homes (image1, image2, image3, location, price, area, living_rooms, bedrooms, bathrooms, home_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$query->bind_param("ssssiiiiis", $image1, $image2, $image3, $location, $price, $area, $living_rooms, $bedrooms, $bathrooms, $home_type);
$query->execute();

$query2 = $mysqli->prepare("SELECT `sale_home_id` from `sale_homes` ORDER BY `sale_home_id` DESC LIMIT 1");
$query2->execute();

$array = $query2->get_result();

if($home_id = $array->fetch_assoc()){
    $response = $home_id["sale_home_id"];
}

$json_response = json_encode($response);
echo $json_response;
?>