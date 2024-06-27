-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: catalogo_sakita
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `categoryID` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`categoryID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Fornos'),(2,'Fogoes'),(3,'Assadores de Frango');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `productID` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) DEFAULT NULL,
  `product_category` varchar(50) DEFAULT NULL,
  `product_description` varchar(1000) DEFAULT NULL,
  `product_code` varchar(50) DEFAULT NULL,
  `product_image1` varchar(100) DEFAULT NULL,
  `product_image2` varchar(100) DEFAULT NULL,
  `product_image3` varchar(100) DEFAULT NULL,
  `product_image4` varchar(100) DEFAULT NULL,
  `product_link` varchar(255) DEFAULT NULL,
  `product_price` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`productID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Fogão Cefaz 1 Boca','Fogoes','Modelos:\nCFZG-113 - 1 BOCA SIMPLES BAIXA PRESSÃO\nCFZG-114 - 1 BOCA DUPLA BAIXA PRESSÃO\nCFZG-115 - 1 BOCA SIMPLES ALTA PRESSÃO\n','34197','../public/images/products/Fogao_Gold_1_Boca_Cefaz.jpg','','','','https://www.cefaz.com.br/produtos/fogoes-linha-gold/117/1-boca','R$ 620,00'),(2,'Forno para Fogão Cefaz','Fornos','Funcionamento a gás GLP baixa pressão;\nEstrutura em aço carbono com pintura a pó eletrostática;\nEspessura 0,9mm (Chapa 20); \nTubo de alimentação de gás de 1\";\n1 Grelha de ferro fundido 30x30;\nRegistro regulador Palito Durata;\nConsumo de gás Queimador Simples 0,175kg/h ;\nTotalmente desmontável para facilitar o transporte e armazenamento;','34027 / 34257 / 34158','../public/images/products/Forno_fogao_Cefaz.jpg','','','','https://www.cefaz.com.br/produtos/forno-para-fogao/128/forno-para-fogao/Entre','R$ 800,00'),(3,'Forno Assador para 20 Frangos Venâncio','Assadores de Frango','Equipamentos de acordo com a portaria 371/09 do Inmetro, com selo de conformidade expedido pelo mesmo;\nPossibilita assar vários tipos de alimentos;\nBivolt 127 V / 220 V, com chave seletora;\nAcabamento externo em aço inox AISI 430;\nAcabamento interno totalmente esmaltado à fogo;\nEspetos equipados com ganchos duplos e simples para melhor fixação dos frangos;\nEquipado de rodízios com trava para evitar o deslocamento do equipamento durante o uso;\nEstrutura reforçada em tubo SAE 1020 quadrado com 20x20mm;\nTransmissão de movimento de giro dos espetos através de sem fim e coroa;\nVidros amplos para melhor visualização do assado, equipados com roldanas para facilitar a abertura e fechamento;\nPorta de serviço com abertura integral movida através de dobradiças;\nA capacidade do forno irá variar de acordo com o peso do frango, sendo os códigos de 10, 20 e 30 a frangos somente uma referenda;','16022','../public/images/products/Forno_Assador_para_20_Frangos.jpg','','','','https://www.venanciometal.com.br/pt/p/produto/forno-assador-para-20-frangos','R$ 1500,00'),(4,'Fogão semi industrial lx alta pressão 1 boca Roa','Fogoes','Material: Chapa de Ferro Pintada\nQuantidade de Bocas: 01 Boca de Alta Pressão com 04 Caulins (bicos espalhadores de chama)\nFuncionamento: Gás GLP com Mangueira Normalizada para Alta Pressão e Registro de Alta Pressão\nDimensões do Fogão: A 130mm x L 205mm x P 270mm\nQuadro da mesa: 200x200 mm','29715','../public/images/products/Fogao_semi industrial_lx_alta pressão_1_boca.jpg','','','','https://roa.com.br/produto/fogao-semi-industrial-lx-alta-pressao-1-boca-sem-mangueira-com-caixa/roa/500828','R$ 200,00');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-27 17:37:13
