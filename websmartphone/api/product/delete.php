<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: DELETE");
    header("Access-Control-Allow-Headers:*");

    include_once('../../config/db.php');
    include_once('../../model/product.php');

    $db = new db();
    $connect = $db->connect();

    $product = new product($connect);

    $data = json_decode(file_get_contents("php://input"));

    $product->ID = $data->ID;
    

    if($product->delete()){
        echo json_encode(array('message','xoa thanh cong'));
    }else{
        echo json_encode(array('message', 'xoa that bai'));
    }

?>