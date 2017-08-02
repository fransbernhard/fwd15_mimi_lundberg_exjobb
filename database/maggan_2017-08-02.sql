# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Värd: localhost (MySQL 5.6.34)
# Databas: maggan
# Genereringstid: 2017-08-02 10:03:25 +0000
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
	(1,'Paints'),
	(2,'Prints'),
	(3,'Plexi'),
	(4,'Places');

/*!40000 ALTER TABLE `Categories` ENABLE KEYS */;
UNLOCK TABLES;


# Tabelldump Items
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Items`;

CREATE TABLE `Items` (
  `itemId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `modalDesc` varchar(50) DEFAULT NULL,
  `stocked` tinyint(1) NOT NULL,
  `thumbnail` varchar(30) DEFAULT NULL,
  `previewImg` varchar(30) DEFAULT NULL,
  `limited` varchar(30) DEFAULT NULL,
  `type` varchar(30) DEFAULT NULL,
  `price` varchar(30) DEFAULT NULL,
  `available` varchar(30) DEFAULT NULL,
  `size` varchar(30) DEFAULT NULL,
  `catId_` int(11) NOT NULL,
  `desc` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`itemId`),
  KEY `cat_fk` (`catId_`),
  CONSTRAINT `cat_fk` FOREIGN KEY (`catId_`) REFERENCES `Categories` (`catId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Items` WRITE;
/*!40000 ALTER TABLE `Items` DISABLE KEYS */;

INSERT INTO `Items` (`itemId`, `name`, `modalDesc`, `stocked`, `thumbnail`, `previewImg`, `limited`, `type`, `price`, `available`, `size`, `catId_`, `desc`)
VALUES
	(1,'vertical',NULL,0,'vertical-sm.jpg','vertical.jpg',NULL,'matt emulsion',NULL,NULL,'100x120',1,NULL),
	(3,'optics',NULL,1,'optics-sm.jpg','optics.jpg',NULL,'matt emulsion/olja/akryl',NULL,NULL,'100x150',1,NULL),
	(4,'moby',NULL,1,'moby-sm.jpg','main.jpg',NULL,'matt emulsion/olja/akryl',NULL,NULL,'65x85',1,NULL),
	(5,'twink',NULL,0,'twink-sm.jpg','twink.jpg',NULL,'matt emulsion/olja',NULL,NULL,'60x80',1,NULL),
	(6,'käft',NULL,0,'kaft-sm.jpg','kaft.jpg',NULL,'matt emulsion/olja/akryl',NULL,NULL,'120x150',1,NULL),
	(7,'roy',NULL,0,'roy2-sm.png','roy2.png',NULL,'matt emulsion/olja/akryl',NULL,NULL,'120x150',1,NULL),
	(8,'tvätt tid',NULL,0,'daligsikt-sm.jpg','daligsikt.jpg',NULL,'matt emulsion/olja',NULL,NULL,'80x100',1,NULL),
	(9,'dålig sikt',NULL,0,'tvatttid-sm.jpg','tvatttid.jpg',NULL,'matt emulsion/olja/akryl',NULL,NULL,'80x100',1,NULL),
	(10,'piotr',NULL,0,'piotr-sm.jpg','piotr.jpg',NULL,'matt emulsion/olja/akryl',NULL,NULL,'100x150',1,NULL),
	(11,'stora blå',NULL,0,'storabla-sm.jpg','storabla.jpg',NULL,'matt emulsion/olja/akryl',NULL,NULL,'60x80',1,NULL),
	(12,'chili',NULL,0,'chili-sm.jpg','chili.jpg',NULL,'matt emulsion',NULL,NULL,'50x50',1,NULL),
	(13,'strössel',NULL,0,'strossel-sm.jpg','strossel.jpg',NULL,'matt emulsion/olja/akryl',NULL,NULL,'120x150',1,NULL),
	(15,'popiscle',NULL,0,'popsicle-sm.jpg','popsicle.jpg',NULL,'matt emulsion/akryl',NULL,NULL,'100x150',1,NULL),
	(16,'anja',NULL,0,'anja-sm.jpg','anja.jpg',NULL,'matt emulsion',NULL,NULL,'100x130',1,NULL),
	(17,'penser',NULL,0,'penser-sm.jpg','penser.jpg',NULL,'akvarellppr',NULL,NULL,'100x130',1,NULL),
	(18,'pink',NULL,1,'2-sm.png','2.png',NULL,'uppspänd canvas',NULL,NULL,'100x130',1,NULL),
	(19,'pink',NULL,1,'1-sm.png','1.png',NULL,'akvarellppr',NULL,NULL,'100x130',1,NULL),
	(20,'clowd',NULL,1,'clowd-sm.jpg','clowd.jpg',NULL,'matt emulsion',NULL,NULL,'120x190',1,NULL),
	(21,'pink',NULL,1,'20-sm.png','20.png',NULL,'matt emulsion',NULL,NULL,'100x200',1,NULL),
	(22,'pink',NULL,1,'25-sm.png','25.png',NULL,'matt emulsion',NULL,NULL,'200x100',1,NULL),
	(97,'mimi - second edition',NULL,1,'mimi2-sm.jpg','mimi2.jpg','30','akvarellppr, 70x100','3,000','28',NULL,2,NULL),
	(98,'elphnt',NULL,1,'elphnt-sm.jpg','elphnt.jpg','16','akvarellppr, 70x100','5,000','8',NULL,2,NULL),
	(99,'dig in',NULL,1,'digin-sm.jpg','digin.jpg','30','akvarellppr, 80x120','5,000','25',NULL,2,NULL),
	(100,'les dames',NULL,1,'lesdames-sm.jpg','lesdames.jpg','30','matt fotoppr, 50x70','2,500','28',NULL,2,NULL),
	(101,'bubblephnt',NULL,1,'bubblephnt-sm.jpg','bubblephnt.jpg','30','akvarellppr, 50x94','4,500','28',NULL,2,NULL),
	(102,'checka ut',NULL,1,'checkaut-sm.jpg','checkaut.jpg','30','valfri material & strlk','pris: inte valfritt','28',NULL,2,NULL),
	(103,'hybrid',NULL,1,'hybrid-sm.jpg','hybrid.jpg','16','akvarellppr, 70x100','4,000','14',NULL,2,NULL),
	(104,'strössla',NULL,1,'strossel-sm.jpg','strossel.jpg','15','plexiglas, 80x120','5,000','14',NULL,2,NULL),
	(105,'mopp',NULL,1,'mopp-sm.jpg','mopp.jpg',NULL,'valfri material & strlk','pris: inte valfritt',NULL,NULL,2,'kontakta vid förfrågan ( . )( . )'),
	(106,'shrine',NULL,1,'shrine-sm.jpg','shrine.jpg',NULL,'valfri material & strlk','pris: inte valfritt',NULL,NULL,2,NULL),
	(107,'piglet wtf',NULL,1,'pigletwtf-sm.jpg','pigletwtf.jpg',NULL,'valfri material & strlk','pris: inte valfritt',NULL,NULL,2,'kontakta vid förfrågan ( . )( . )'),
	(108,'bellies naked skin prty - part',NULL,1,'nakedskin-sm.jpg','nakedskin.jpg','15','matt fotoppr, 70x100','1,500','14',NULL,2,NULL),
	(109,'bellies naked skin prty',NULL,1,'nakedskin2-sm.jpg','nakedskin2.jpg','15','matt fotoppr, 70x100','1,500','14',NULL,2,NULL),
	(110,'gösta',NULL,1,'gosta-sm.jpg','gosta.jpg','15','valfri material & strlk','pris: inte valfritt','14',NULL,2,'kontakta vid förfrågan ( . )( . )'),
	(111,'trettitre',NULL,1,'trettitre-sm.jpg','trettitre.jpg','5','akvarellppr, 105x120','8,000','3',NULL,2,NULL),
	(112,'two',NULL,1,'two-sm.jpg','two.jpg',NULL,'valfri material & strlk','pris: inte valfritt',NULL,NULL,2,'kontakta vid förfrågan ( . )( . )'),
	(113,'tweed',NULL,1,'tweed-sm.jpg','tweed.jpg','16','plexiglas, 60x80','4,000','9',NULL,2,NULL),
	(114,'max',NULL,1,'max-sm.jpg','max.jpg','30','uppspänd canvas, 95x120','7,000','28',NULL,2,NULL),
	(115,'lingerie',NULL,1,'lingerie-sm.jpg','lingerie.jpg','10','glansigt fotopapper, 70x100','pris: inte valfritt','8',NULL,2,NULL),
	(116,'fresi',NULL,1,'fresi-sm.jpg','fresi.jpg',NULL,'valfri material & strlk','pris: inte valfritt',NULL,NULL,2,'kontakta vid förfrågan ( . )( . )'),
	(117,'delara',NULL,1,'delara-sm.jpg','delara.jpg',NULL,'valfri material & strlk','pris: inte valfritt',NULL,NULL,2,'kontakta vid förfrågan ( . )( . )'),
	(118,'gubb',NULL,1,'gubb-sm.jpg','gubb.jpg',NULL,'valfri material & strlk','pris: inte valfritt',NULL,NULL,2,'kontakta vid förfrågan ( . )( . )'),
	(119,'petter',NULL,1,'petter-sm.jpg','petter.jpg','7','akvarellppr, 70x100','1,500','5',NULL,2,NULL),
	(120,'basen',NULL,1,'basen-sm.jpg','basen.jpg',NULL,'valfri material & strlk','pris: inte valfritt',NULL,NULL,2,'kontakta vid förfrågan ( . )( . )'),
	(121,'heavy lies de crown',NULL,1,'heavyliesthecrowd-sm.jpg','heavyliesthecrowd-sm.jpg','10','akvarellppr, 50x70','3,000','7',NULL,2,NULL),
	(122,'mimi',NULL,0,'mimi-sm.jpg','mimi.jpg','7','plexiglas, 80x120','7,000','0',NULL,2,NULL),
	(123,'slav',NULL,1,'slav-sm.jpg','slav.jpg',NULL,'akvarellppr, 50x70','1,200',NULL,NULL,2,NULL),
	(124,'vissn',NULL,1,'vissn-sm.jpg','vissn.jpg',NULL,'valfri material & strlk','pris: inte valfria',NULL,NULL,2,'kontakta vid förfrågan ( . )( . )'),
	(125,'ännu mer vissn',NULL,1,'vissnSv-sm.jpg','vissnSv.jpg',NULL,'valfri material & strlk','pris: inte valfria',NULL,NULL,2,'kontakta vid förfrågan ( . )( . )'),
	(126,'splashwars',NULL,1,'splashwars-sm.jpg','splashwars.jpg','7','matt fotopapper, 70x70','3,000','4',NULL,2,NULL),
	(127,'torsk compilation',NULL,1,'torskcompilation-sm.jpg','torskcompilation.jpg',NULL,'valfri material & strlk',NULL,NULL,NULL,2,'kontakta vid förfrågan ( . )( . )'),
	(128,'segt',NULL,1,'segt-sm.jpg','segt.jpg',NULL,'valfri material & strlk',NULL,NULL,NULL,2,'kontakta vid förfrågan ( . )( . )'),
	(129,'i kön till kaffet',NULL,1,'ikotillkaffet-sm.jpg','ikotillkaffet.jpg',NULL,'valfri material & strlk',NULL,NULL,NULL,2,'kontakta vid förfrågan ( . )( . )'),
	(130,'damn you pear',NULL,1,'damnupear-sm.jpg','damnupear.jpg',NULL,'valfri material & strlk',NULL,NULL,NULL,2,'kontakta vid förfrågan ( . )( . )'),
	(200,NULL,'Vernisage Strössel @ Linnégatan, sthlm 2015',1,'17.png','17.png',NULL,NULL,NULL,NULL,NULL,4,NULL),
	(201,NULL,'Max @ Nybergsgatan, sthlm 2016',1,'26.png','26.png',NULL,NULL,NULL,NULL,NULL,4,NULL),
	(202,NULL,'Elphnt @ Karlavägen, sthlm 2016',1,'6.png','6.png',NULL,NULL,NULL,NULL,NULL,4,NULL),
	(203,NULL,'Max @ Karlavägen, sthlm 2016',1,'18.png','18.png',NULL,NULL,NULL,NULL,NULL,4,NULL),
	(204,NULL,'Utställning @ Kocksgatan, sthlm 2017',1,'7.png','7.png',NULL,NULL,NULL,NULL,NULL,4,NULL),
	(205,NULL,'Dig in @ Roslagsgatan, sthlm 2015',1,'8.png','8.png',NULL,NULL,NULL,NULL,NULL,4,NULL),
	(206,NULL,'Vernisage Dålig sikt @ Riddargatan, sthlm 2016',1,'9.png','9.png',NULL,NULL,NULL,NULL,NULL,4,NULL),
	(207,NULL,'Twink @ Klippgatan, sthlm 2016',1,'10.png','10.png',NULL,NULL,NULL,NULL,NULL,4,NULL),
	(208,NULL,'Twink @ Friisgatan, malmö 2016',1,'11.png','11.png',NULL,NULL,NULL,NULL,NULL,4,NULL),
	(209,NULL,'Strössel @ Sturegatan, sthlm 2015',1,'12.png','12.png',NULL,NULL,NULL,NULL,NULL,4,NULL),
	(210,NULL,'Chili @ Nybergsgatan, sthml 2015',1,'13.png','13.png',NULL,NULL,NULL,NULL,NULL,4,NULL),
	(211,NULL,'Chili | Twink | Agnes @ Klippgatan, sthlm 2016',1,'14.png','14.png',NULL,NULL,NULL,NULL,NULL,4,NULL),
	(212,NULL,'Mimi | Dig in @ Bråvallagatan, sthlm 2016',1,'15.png','15.png',NULL,NULL,NULL,NULL,NULL,4,NULL),
	(213,NULL,'Headaches @ Sturegatan, sthlm 2015',1,'16.png','16.png',NULL,NULL,NULL,NULL,NULL,4,NULL),
	(214,'strössel','',1,'strossel-sm.jpg','strossel.jpg','15','plexiglas, 80x120','5,000','14',NULL,3,NULL),
	(215,'mimi','',1,'mimi-sm.jpg','mimi.jpg','7','plexiglas, 80x120','5,000','0',NULL,3,NULL),
	(216,'bubblelfnt','',1,'bubblephnt-sm.jpg','bubblephnt.jpg','15','plexiglas, 80x120','5,000','10',NULL,3,NULL),
	(217,'pink','',1,'20-sm.png','20.png','15','plexiglas, 80x120','5,000','11',NULL,3,NULL),
	(218,'dig in','',1,'digin-sm.jpg','digin.jpg','15','plexiglas, 80x120','5,000','11',NULL,3,NULL),
	(219,'tweed','',1,'tweed-sm.jpg','tweed.jpg','15','plexiglas, 80x120','5,000','11',NULL,3,NULL);

/*!40000 ALTER TABLE `Items` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
