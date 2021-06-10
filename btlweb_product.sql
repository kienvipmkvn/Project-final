CREATE DATABASE  IF NOT EXISTS `btlweb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `btlweb`;
-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: btlweb
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `ID` int unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Detail` text,
  `Price` decimal(15,4) NOT NULL,
  `ImageLink` text CHARACTER SET utf8 COLLATE utf8_bin,
  `BrandID` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `BrandID` (`BrandID`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (9,'Samsung Galaxy Note 20','Tháng 8/2020, Galaxy Note 20 chính thức được lên kệ, với thiết kế camera trước nốt ruồi quen thuộc, cụm camera hình chữ nhật mới lạ cùng với vi xử lý Exynos 990 cao cấp của chính Samsung chắc hẳn sẽ mang lại một trải nghiệm thú vị cùng hiệu năng mạnh mẽ.',35490000.0000,'https://cdn.tgdd.vn/Products/Images/42/218355/samsung-galaxy-note-20-062220-122200-fix-600x600.jpg',4),(10,'iPhone 12 Pro Max 256GB 123','Chiếc điện thoại iPhone 12 Pro Max 256 GB là mẫu smartphone sở hữu nhiều tính năng nổi bật với hệ thống camera chất lượng, hiệu năng vượt trội hay hỗ trợ kết nối 5G hứa hẹn sẽ là mẫu sản phẩm mang lại cảm giác trải nghiệm tối ưu cho người dùng.',32490000.0000,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYbh6LdP78aBfRVllIeoTNwZBgLSITREnfdL5eFKMBVdsGlbPeipcG7SWIn6HP43qcDB3yIEw&amp;amp;amp;usqp=CAc',3),(12,'Xiaomi Mi 11 Lite','Xiaomi Mi 11 Lite là phiên bản thu gọn của Xiaomi Mi 11 5G được ra mắt trước đó. Thừa hưởng nhiều ưu điểm của đàn anh, Mi 11 Lite hoàn toàn có thể đáp ứng tốt các tác vụ thông thường một cách dễ dàng và đặc biệt hơn máy có thiết kế vô cùng mỏng nhẹ và thời trang.',7990000.0000,'https://cdn.tgdd.vn/Products/Images/42/233241/xiaomi-mi-11-lite-4g-blue-600x600.jpg',5),(13,'Vsmart Joy 4','',3990000.0000,'https://cdn.tgdd.vn/Products/Images/42/231992/vsmart-joy-4-6gb-xanh-600x600-600x600.jpg',8),(14,'iPhone 11 64GB','Tháng 09/2019, Apple đã chính thức trình làng bộ 3 siêu phẩm iPhone 11, trong đó phiên bản iPhone 11 64GB có mức giá rẻ nhất nhưng vẫn được nâng cấp mạnh mẽ như iPhone Xr ra mắt trước đó.',17490000.0000,'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-do-600x600.jpg',3),(15,'Vivo Y51 (2020)','Vivo đã mang chiếc điện thoại Vivo Y51 một lần nữa quay trở lại với người dùng trong một thiết kế hoàn toàn mới, nâng cấp từ công nghệ màn hình, cụm camera đến hệ điều hành với tên gọi Vivo Y51 (2020).',5790000.0000,'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-bac-600x600-600x600.jpg',11),(16,'Samsung Galaxy Z Fold2 5G','Galaxy Z Fold 2 là tên gọi chính thức của điện thoại màn hình gập cao cấp của Samsung. Với nhiều nâng cấp tiên phong về thiết kế, hiệu năng và camera, hứa hẹn đây sẽ là một siêu phẩm thành công tiếp theo đến từ “ông trùm” sản xuất điện thoại lớn nhất thế giới. ',50000000.0000,'https://cdn.tgdd.vn/Products/Images/42/226099/samsung-galaxy-z-fold-2-vang-dong-600x600.jpg',4),(17,'OPPO Find X3 Pro 5G','OPPO đã làm khuynh đảo thị trường smartphone khi cho ra đời chiếc điện thoại OPPO Find X3 Pro 5G. Đây là một sản phẩm có thiết kế độc đáo, sở hữu cụm camera khủng, cấu hình thuộc top đầu trong thế giới Android.',26990000.0000,'https://cdn.tgdd.vn/Products/Images/42/232190/oppo-find-x3-pro-black-001-1-600x600.jpg',9),(18,'OPPO Reno5 Marvel','Bạn là một fans các siêu anh hùng trong biệt đội Avengers? Thế thì không thể nào bỏ qua',9690000.0000,'https://cdn.tgdd.vn/Products/Images/42/236024/oppo-reno5-marvel-thumb-600x600-600x600.jpg',9),(19,' Xiaomi Redmi Note 10 (6GB/128GB)','Xiaomi đã trình làng chiếc điện thoại mang tên gọi là Xiaomi Redmi Note 10 với điểm nhấn chính là cụm 4 camera 48 MP, chip rồng Snapdragon 678 mạnh mẽ cùng nhiều nâng cấp như dung lượng pin 5.000 mAh và hỗ trợ sạc nhanh 33 W tiện lợi.',5490000.0000,'https://cdn.tgdd.vn/Products/Images/42/222758/xiaomi-redmi-note-10-thumb-green-600x600.jpg',5),(20,'Vivo V20 SE','Dù được định vị ở phân khúc điện thoại tầm trung, Vivo V20 SE vẫn sở hữu những nét riêng biệt, đủ để thu hút sự chú ý của những ai yêu công nghệ. Hãy cùng tìm hiểu xem chiếc smartphone này có gì khác biệt với các đối thủ khác.',6490000.0000,'https://cdn.tgdd.vn/Products/Images/42/228141/vivo-v20-se-600x600-600x600.jpg',11),(21,'Realme 8 Pro','Bên cạnh Realme 8, Realme 8 Pro cũng được giới thiệu đến người tiêu dùng với điểm nhấn chính là sự xuất hiện của camera 108 MP siêu nét cùng công nghệ sạc SuperDart 50 W và đi kèm mức giá bán tầm trung rất lý tưởng.',8690000.0000,'https://cdn.tgdd.vn/Products/Images/42/235986/realme-8-pro-balck-600x600.jpg',10),(22,'Samsung Galaxy S21 Ultra 5G 256GB','Samsung từng bước khẳng định thương hiệu của mình bằng việc cho ra đời những mẫu flagship ngày càng hiện đại với công nghệ tiến bộ. Điển hình là chiếc điện thoại Samsung Galaxy S21 Ultra 5G 256 GB tích hợp mọi tính năng gần như trở thành mẫu smartphone hoàn hảo nhất.',28990000.0000,'https://cdn.tgdd.vn/Products/Images/42/234308/samsung-galaxy-s21-ultra-256gb-bac-600x600-1-600x600.jpg',4),(23,'Vsmart Aris Pro','Thương hiệu smartphone Việt - Vsmart chính thức trình làng Vsmart Aris Pro. Mẫu điện thoại này đánh dấu một bước ngoặc lớn trong làng smartphone với công nghệ camera ẩn trong màn hình, mức giá hợp lý giúp người Việt có cơ hội tiếp cận những công nghệ mới nhất.',8490000.0000,'https://cdn.tgdd.vn/Products/Images/42/228531/vsmart-aris-pro-green-600jpg-600x600.jpg',8),(24,'Realme 6 Pro','Realme 6 Pro là mẫu smartphone cao cấp hơn trong bộ đôi Realme 6 Series của Realme. Vẫn với tiêu chí smartphone cấu hình mạnh - giá tốt, Realme 6 Pro còn nổi bật với cụm 6 camera ấn tượng, màn hình siêu mượt 90 Hz theo xu hướng.',6990000.0000,'https://cdn.tgdd.vn/Products/Images/42/214645/realme-6-pro-do-600x600.jpg',10);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-10 13:55:59
