<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
    header("Access-Control-Allow-Headers: *");

    include_once('../../config/db.php');
    include_once('../../model/orderdetail.php');

    $db = new db();
    $connect = $db->connect();

    $orderdetail = new orderdetail($connect);

    $data = json_decode(file_get_contents("php://input"));

    $orderdetail->OrderID = $data->OrderID;
    $orderdetail->ProductID = $data->ProductID;
    $orderdetail->Quantity = $data->Quantity;

    if ($orderdetail->add()) {
        echo json_encode(array('message', 'Add thanh cong'));
    } else {
        echo json_encode(array('message', 'Add that bai'));
    }

?>