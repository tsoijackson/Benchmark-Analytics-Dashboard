CREATE DATABASE  IF NOT EXISTS `performance` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `performance`;
-- MySQL dump 10.13  Distrib 8.0.15, for macos10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: performance
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `benchmark`
--

DROP TABLE IF EXISTS `benchmark`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `benchmark` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `branch_id` int(11) NOT NULL,
  `os_id` int(11) NOT NULL,
  `create_time` datetime NOT NULL,
  `commit_hash` varchar(100) DEFAULT NULL,
  `cpu` float DEFAULT NULL,
  `mem` float DEFAULT NULL,
  `note` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `benchmark`
--

LOCK TABLES `benchmark` WRITE;
/*!40000 ALTER TABLE `benchmark` DISABLE KEYS */;
INSERT INTO `benchmark` VALUES (10,1,1,'2019-04-20 17:01:49',NULL,5,10,NULL),(11,2,3,'2019-04-20 17:01:49',NULL,30,50,NULL),(12,4,4,'2019-04-20 17:01:49','merging changes',5,20,NULL),(13,1,1,'2019-04-20 17:01:49',NULL,40,10,'random note 1'),(14,2,3,'2019-04-20 17:01:49',NULL,5,10,NULL),(15,4,4,'2019-04-20 17:01:49',NULL,70,30,NULL),(16,3,3,'2019-04-20 17:05:34',NULL,5,30,'random note 2'),(17,1,2,'2019-04-20 17:05:34','feature 1 finished',40,30,NULL),(18,2,4,'2019-04-20 17:05:34',NULL,10,30,NULL),(19,3,2,'2019-04-20 17:05:34','fixed error',12,30,NULL),(20,4,2,'2019-04-20 17:06:55',NULL,19,30,'random note 3'),(21,1,1,'2019-04-20 17:06:55',NULL,13,30,NULL),(22,1,3,'2019-04-20 17:06:55','removed feature',70,30,NULL),(23,4,2,'2019-04-20 23:04:11',NULL,35,40,NULL),(24,2,1,'2019-04-20 23:05:45',NULL,25,15,'random note 4'),(25,2,1,'2019-04-20 23:05:53','merged branches',25,15,NULL),(26,3,2,'2019-04-20 23:05:53',NULL,30,15,NULL),(27,1,4,'2019-04-20 23:05:53',NULL,25,15,NULL),(28,4,4,'2019-04-20 23:05:53','fixed feature 2 error',47,37,'random note 5'),(29,3,1,'2019-04-20 23:50:56',NULL,15,20,NULL),(30,4,3,'2019-04-20 23:50:56',NULL,15,20,NULL),(31,1,3,'2019-04-20 23:50:56',NULL,40,20,'random note 6'),(32,1,1,'2019-04-20 23:50:56',NULL,15,20,NULL),(33,1,4,'2019-04-20 23:50:56',NULL,35,20,NULL),(34,3,2,'2019-04-20 23:50:56',NULL,15,20,'random note 7'),(35,2,1,'2019-04-20 23:50:56',NULL,45,20,NULL),(36,2,3,'2019-04-20 23:50:56',NULL,15,20,NULL),(37,2,1,'2019-04-20 23:50:56',NULL,15,20,'random note 8'),(38,1,3,'2019-04-20 23:50:56',NULL,15,20,NULL),(39,1,1,'2019-04-20 23:50:56',NULL,50,20,NULL),(40,4,1,'2019-04-20 23:50:56',NULL,15,20,NULL),(41,4,2,'2019-04-20 23:50:56',NULL,15,20,NULL),(42,1,4,'2019-04-20 23:50:56',NULL,20,20,'random note 9'),(43,1,2,'2019-04-20 23:50:56',NULL,81,20,NULL),(44,1,1,'2019-04-20 23:50:56',NULL,15,20,NULL);
/*!40000 ALTER TABLE `benchmark` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `branch`
--

DROP TABLE IF EXISTS `branch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `branch` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branch`
--

LOCK TABLES `branch` WRITE;
/*!40000 ALTER TABLE `branch` DISABLE KEYS */;
INSERT INTO `branch` VALUES (1,'development'),(3,'integration'),(5,'production'),(2,'qa'),(4,'staging');
/*!40000 ALTER TABLE `branch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `os`
--

DROP TABLE IF EXISTS `os`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `os` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `os`
--

LOCK TABLES `os` WRITE;
/*!40000 ALTER TABLE `os` DISABLE KEYS */;
INSERT INTO `os` VALUES (1,'ios'),(2,'android'),(3,'windows'),(4,'macos');
/*!40000 ALTER TABLE `os` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-21  7:08:49
