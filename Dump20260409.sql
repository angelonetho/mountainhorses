-- MySQL dump 10.13  Distrib 8.0.42, for macos15 (arm64)
--
-- Host: localhost    Database: mountainhorses
-- ------------------------------------------------------
-- Server version	8.0.42

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
-- Table structure for table `horses`
--

DROP TABLE IF EXISTS `horses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `horses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `breed` varchar(100) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `weight` decimal(6,2) DEFAULT NULL,
  `height` decimal(4,2) DEFAULT NULL,
  `health_status` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horses`
--

LOCK TABLES `horses` WRITE;
/*!40000 ALTER TABLE `horses` DISABLE KEYS */;
INSERT INTO `horses` VALUES (1,'Trovão','Campolina',7,'Alazão',480.50,1.58,'Saudável','2026-04-09 04:07:47'),(2,'Trovão','Campolina',7,'Alazão',480.50,1.58,'Saudável','2026-04-09 04:07:56'),(3,'Trovão','Campolina',7,'Alazão',480.50,1.58,'Saudável','2026-04-09 04:10:15'),(4,'Trovão','Campolina',7,'Alazão',480.50,1.58,'Saudável','2026-04-09 04:14:02'),(5,'Trovão','Campolina',7,'Alazão',480.50,1.58,'Saudável','2026-04-09 04:14:17'),(6,'Trovão','Campolina',7,'Alazão',480.50,1.58,'Saudável','2026-04-09 04:14:23'),(7,'Trovão','Campolina',7,'Alazão',480.50,1.58,'Saudável','2026-04-09 04:14:47'),(8,'Trovão','Campolina',7,'Alazão',480.50,1.58,'Saudável','2026-04-09 04:17:19');
/*!40000 ALTER TABLE `horses` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-09  1:22:44
