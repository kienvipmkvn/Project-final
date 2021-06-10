<?php
    header('Access-Control-Allow-Origin:*');
    header('Content-Type: application/json');

    include_once('../../config/db.php');
    include_once('../../model/orderdetail.php');

    $dtb = new db();
    $connect = $dtb->connect();

    $orderdetail = new orderdetail($connect);
    $orderdetail->OrderID = isset($_GET['orderID']) ? $_GET['orderID'] : die();
    
    $read = $orderdetail->show();
    $num = $read->rowCount();

    if($num > 0){
        $orders_array = [];
        $orders_array['data'] = [];

        while($row = $read->fetch(PDO::FETCH_ASSOC)){
            extract($row);

            $orders_item = array(
                'ID' => $ID,
                'OrderID' => $OrderID,
                'ProductID' => $ProductID,
                'Quantity' => $Quantity,
            );
            array_push($orders_array['data'], $orders_item);
        }
        echo json_encode($orders_array);
    }
?>