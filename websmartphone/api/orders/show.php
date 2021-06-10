<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
    header("Access-Control-Allow-Headers: *");

    include_once('../../config/db.php');
    include_once('../../model/orders.php');

    $dtb = new db();
    $connect = $dtb->connect();

    $orders = new orders($connect);
    $orders->ID = isset($_GET['id']) ? $_GET['id'] : die();
    
    $orders->show();

    $orders_item = array(
        'ID' => $orders->ID,
        'Name' => $orders->Name,
        'UserPhone' => $orders->UserPhone,
        'UserAddress' => $orders->UserAddress,
        'Guid' => $orders->Guid,
        'Amount' => $orders->Amount,
        'Note' => $orders->Note,
        'Status' => $orders->Status,
    );

    print_r(json_encode($orders_item));

?>