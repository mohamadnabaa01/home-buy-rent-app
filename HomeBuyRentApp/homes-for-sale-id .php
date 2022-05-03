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

$query = $mysqli->prepare("SELECT sale_home_id FROM sale_homes WHERE image1=? AND image2=? AND image3=? AND location=? AND price=? AND area=? AND living_rooms=? AND bedrooms=? AND bathrooms=? AND home_type=?");
$query->bind_param("sssssiiiis", $image1, $image2, $image3, $location, $price, $area, $living_rooms, $bedrooms, $bathrooms, $home_type);
$query->execute();

$array = $query->get_result();

$home_sale = $array->fetch_assoc();

$response = $home_sale["sale_home_id"];

$json_response = json_encode($response);
echo $json_response;
?>