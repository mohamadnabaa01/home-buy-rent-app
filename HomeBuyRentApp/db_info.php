<?php

$db_host = "localhost";
$db_user = "root";
$db_pass = "1807";
$db_name = "home_buy_rent_db";

$mysqli = new mysqli($db_host, $db_user, $db_pass, $db_name);

if(mysqli_connect_errno()){
    die("Connection to database failed!");
}

?>