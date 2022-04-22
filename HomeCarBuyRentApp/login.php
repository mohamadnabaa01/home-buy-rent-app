<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include "db_info.php";

$data = json_decode(file_get_contents("php://input"));

$email_address = $data->email_address;
$password = hash("sha256",$data->password);

$query = $mysqli->prepare("SELECT email_address FROM users WHERE email_address=? AND password=?");
$query->bind_param("ss",$email_address, $password);
$query->execute();

$array = $query->get_result();

$user = $array->fetch_assoc();

$response = $user;

if(empty($response)){
    echo "";
}
else{
    echo json_encode($email_address);
}
?>