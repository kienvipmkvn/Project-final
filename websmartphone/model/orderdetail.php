<?php
    class orderdetail extends db{
        private $conn;
        public $ID;
        public $OrderID;
        public $ProductID;
        public $Quantity;

        public function __construct($db)
        {
            $this->conn = $db;
        }

        public function read(){
            $query = "SELECT * FROM orderdetail ORDER BY ID DESC";

            $stmt = $this->conn->prepare($query);

            $stmt->execute();
            return $stmt;
        }

        public function show(){
            $query = "SELECT * FROM orderdetail WHERE OrderID=?";
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(1, $this->OrderID);
            $stmt->execute();

            return $stmt;
        }

        public function add(){
            $query = "INSERT INTO orderdetail SET OrderID=:OrderID , ProductID=:ProductID, Quantity=:Quantity";

            $stmt = $this->conn->prepare($query);

            $this->OrderID = htmlspecialchars(strip_tags($this->OrderID));
            $this->ProductID = htmlspecialchars(strip_tags($this->ProductID));
            $this->Quantity = htmlspecialchars(strip_tags($this->Quantity));

            $stmt->bindParam(':OrderID', $this->OrderID);
            $stmt->bindParam(':ProductID', $this->ProductID);
            $stmt->bindParam(':Quantity', $this->Quantity);

            if($stmt->execute()){
                return true;
            }
            printf("Error %s.\n" .$stmt->error);
            return false;
        }

        public function update(){
            $query = "UPDATE orderdetail SET OrderID=:OrderID , ProductID=:ProductID, Quantity=:Quantity WHERE ID=:ID";

            $stmt = $this->conn->prepare($query);

            $this->ID = htmlspecialchars(strip_tags($this->ID));
            $this->OrderID = htmlspecialchars(strip_tags($this->OrderID));
            $this->ProductID = htmlspecialchars(strip_tags($this->ProductID));
            $this->Quantity = htmlspecialchars(strip_tags($this->Quantity));

            $stmt->bindParam(':OrderID', $this->OrderID);
            $stmt->bindParam(':ProductID', $this->ProductID);
            $stmt->bindParam(':Quantity', $this->Quantity);
            $stmt->bindParam(':ID', $this->ID);

            if($stmt->execute()){
                return true;
            }
            printf("Error %s.\n" .$stmt->error);
            return false;
        }

        public function delete(){
            $query = "DELETE FROM  orderdetail WHERE ID=:ID";

            $stmt = $this->conn->prepare($query);

            $this->ID = htmlspecialchars(strip_tags($this->ID));
            
            $stmt->bindParam(':ID', $this->ID);

            if($stmt->execute()){
                return true;
            }
            printf("Error %s.\n" .$stmt->error);
            return false;
        }

    }
?>