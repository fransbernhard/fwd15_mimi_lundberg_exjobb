# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Värd: localhost (MySQL 5.6.34)
# Databas: maggan
# Genereringstid: 2017-07-23 13:38:25 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Tabelldump Categories
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Categories`;

CREATE TABLE `Categories` (
  `catId` int(11) NOT NULL AUTO_INCREMENT,
  `catName` varchar(11) NOT NULL,
  PRIMARY KEY (`catId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Categories` WRITE;
/*!40000 ALTER TABLE `Categories` DISABLE KEYS */;

INSERT INTO `Categories` (`catId`, `catName`)
VALUES
	(1,'Paint'),
	(2,'Prints'),
	(3,'Places');

/*!40000 ALTER TABLE `Categories` ENABLE KEYS */;
UNLOCK TABLES;


# Tabelldump Items
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Items`;

CREATE TABLE `Items` (
  `itemId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `description` varchar(50) DEFAULT NULL,
  `stocked` tinyint(1) NOT NULL,
  `thumbnail` varchar(30) DEFAULT NULL,
  `previewImg` varchar(30) DEFAULT NULL,
  `limited` varchar(30) DEFAULT NULL,
  `type` varchar(30) DEFAULT NULL,
  `price` varchar(30) DEFAULT NULL,
  `available` varchar(30) DEFAULT NULL,
  `size` varchar(30) DEFAULT NULL,
  `catId_` int(11) NOT NULL,
  PRIMARY KEY (`itemId`),
  KEY `cat_fk` (`catId_`),
  CONSTRAINT `cat_fk` FOREIGN KEY (`catId_`) REFERENCES `Categories` (`catId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Items` WRITE;
/*!40000 ALTER TABLE `Items` DISABLE KEYS */;

INSERT INTO `Items` (`itemId`, `name`, `description`, `stocked`, `thumbnail`, `previewImg`, `limited`, `type`, `price`, `available`, `size`, `catId_`)
VALUES
	(1,'strechmarks',NULL,0,'strechmarks-sm.jpg','strechmarks.jpg',NULL,'matt emulsion/olja/akryl',NULL,NULL,'100x130',1),
	(2,'popsicle',NULL,0,'storabla-sm.jpg','strechmarks.jpg',NULL,'matt emulsion',NULL,NULL,'100x120',1),
	(3,'strössel',NULL,0,'storabla-sm.jpg','strechmarks.jpg',NULL,'matt emulsion/olja/akryl',NULL,NULL,'100x150',1),
	(4,'pense',NULL,0,'storabla-sm.jpg','strechmarks.jpg',NULL,'matt emulsion/olja/akryl',NULL,NULL,'65x85',1),
	(5,'chili',NULL,0,'storabla-sm.jpg','strechmarks.jpg',NULL,'matt emulsion/olja',NULL,NULL,'60x80',1),
	(6,'stora blå',NULL,0,'storabla-sm.jpg','storabla.jpg',NULL,'matt emulsion/olja/akryl',NULL,NULL,'120x150',1),
	(7,'piotr',NULL,0,'piotr-sm.jpg','piotr.jpg',NULL,'matt emulsion/olja/akryl',NULL,NULL,'120x150',1),
	(8,'dålig sikt',NULL,0,'daligsikt-sm.jpg','daligsikt.jpg',NULL,'matt emulsion/olja',NULL,NULL,'80x100',1),
	(9,'tvätt tid',NULL,0,'tvatttid-sm.jpg','tvatttid.jpg',NULL,'matt emulsion/olja/akryl',NULL,NULL,'80x100',1),
	(10,'käft',NULL,0,'kaft-sm.jpg','kaft.jpg',NULL,'matt emulsion/olja/akryl',NULL,NULL,'100x150',1),
	(11,'roy',NULL,1,'storabla-sm.jpg','strechmarks.jpg',NULL,'matt emulsion/olja/akryl',NULL,NULL,'60x80',1),
	(12,'clowd',NULL,1,'clowd-sm.jpg','clowd.jpg',NULL,'matt emulsion',NULL,NULL,'50x50',1),
	(13,'twink',NULL,1,'twink-sm.jpg','twink.jpg',NULL,'matt emulsion/olja/akryl',NULL,NULL,'120x150',1),
	(14,'moby',NULL,1,'moby-sm.jpg','main.jpg',NULL,'matt emulsion',NULL,NULL,'120x190',1),
	(15,'optics',NULL,1,'optics-sm.jpg','optics.jpg',NULL,'matt emulsion/akryl',NULL,NULL,'100x150',1),
	(16,'vertical',NULL,0,'vertical-sm.jpg','vertical.jpg',NULL,'matt emulsion',NULL,NULL,'100x130',1),
	(17,'MIMI | 2nd edition',NULL,1,'mimisecond-sm.jpg','mimisecond.jpg','30','akvarellppr, 70x100','3,000','28',NULL,2),
	(18,'max',NULL,1,'max-sm.jpg','max.jpg','30','uppspänd canvas, 95x120','7,000','28',NULL,2),
	(19,'elephnt',NULL,1,'elphnt-sm.jpg','elphnt.jpg','16','akvarellppr, 70x100','5,000','8',NULL,2),
	(20,'dig in',NULL,1,'digin-sm.jpg','digin.jpg','30','plexiglas, 80x120','6,000','28',NULL,2),
	(21,'les dames',NULL,1,'lesdames-sm.jpg','lesdames.jpg','30','matt fotoppr, 50x70','2,500','28',NULL,2),
	(22,'bubblephnt',NULL,1,'bubblephnt-sm.jpg','bubblephnt.jpg','30','akvarellppr, 50x94','4,500','28',NULL,2),
	(23,'checka ut',NULL,1,'checkaut-sm.jpg','checkaut.jpg','30','valfri material & strlk','pris: inte valfritt','28',NULL,2),
	(24,'hybrid',NULL,1,'hybrid-sm.jpg','hybrid.jpg','16','akvarellppr, 70x100','4,000','14',NULL,2),
	(25,'strössla',NULL,1,'strossel-sm.jpg','strossel.jpg','15','plexiglas, 80x120','5,000','14',NULL,2),
	(26,'bellies naked skin prty - part',NULL,1,'nakedskin-sm.jpg','nakedskin.jpg','15','matt fotoppr, 70x100','1,500','14',NULL,2),
	(27,'bellies naked skin prty',NULL,1,'nakedskin2-sm.jpg','nakedskin2.jpg','15','matt fotoppr, 70x100','1,500','14',NULL,2),
	(28,'gösta',NULL,1,'gosta-sm.jpg','gosta.jpg','15','valfri material & strlk','1,500','14',NULL,2),
	(29,'petter',NULL,1,'petter-sm.jpg','petter.jpg','15','akvarellppr, 70x100','1,500','14',NULL,2),
	(30,NULL,'Vernisage Strössel @ Linnégatan, sthlm 2015',0,'17.png','17.png',NULL,NULL,NULL,NULL,NULL,3),
	(31,NULL,'Max @ Nybergsgatan, sthlm 2016',0,'26.png','26.png',NULL,NULL,NULL,NULL,NULL,3),
	(32,NULL,'Elphnt @ Karlavägen, sthlm 2016',0,'6.png','6.png',NULL,NULL,NULL,NULL,NULL,3),
	(33,NULL,'Max @ Karlavägen, sthlm 2016',0,'18.png','18.png',NULL,NULL,NULL,NULL,NULL,3),
	(34,NULL,'Utställning @ Kocksgatan, sthlm 2017',0,'7.png','7.png',NULL,NULL,NULL,NULL,NULL,3),
	(35,NULL,'Dig in @ Roslagsgatan, sthlm 2015',0,'8.png','8.png',NULL,NULL,NULL,NULL,NULL,3),
	(36,NULL,'Vernisage Dålig sikt @ Riddargatan, sthlm 2016',0,'9.png','9.png',NULL,NULL,NULL,NULL,NULL,3),
	(37,NULL,'Twink @ Klippgatan, sthlm 2016',0,'10.png','10.png',NULL,NULL,NULL,NULL,NULL,3),
	(38,NULL,'Twink @ Friisgatan, malmö 2016',0,'11.png','11.png',NULL,NULL,NULL,NULL,NULL,3),
	(39,NULL,'Strössel @ Sturegatan, sthlm 2015',0,'12.png','12.png',NULL,NULL,NULL,NULL,NULL,3),
	(40,NULL,'Chili @ Nybergsgatan, sthml 2015',0,'13.png','13.png',NULL,NULL,NULL,NULL,NULL,3),
	(41,NULL,'Chili | Twink | Agnes @ Klippgatan, sthlm 2016',0,'14.png','14.png',NULL,NULL,NULL,NULL,NULL,3),
	(42,NULL,'Mimi | Dig in @ Bråvallagatan, sthlm 2016',0,'15.png','15.png',NULL,NULL,NULL,NULL,NULL,3),
	(43,NULL,'Headaches @ Sturegatan, sthlm 2015',0,'16.png','16.png',NULL,NULL,NULL,NULL,NULL,3);

/*!40000 ALTER TABLE `Items` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
