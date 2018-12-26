-- phpMyAdmin SQL Dump
-- version 3.5.8.1
-- http://www.phpmyadmin.net
--
-- Host: magdalundberg.se.mysql:3306
-- Generation Time: Dec 04, 2018 at 08:53 PM
-- Server version: 10.1.30-MariaDB-1~xenial
-- PHP Version: 5.4.45-0+deb7u13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `magdalundberg_se_fri`
--

-- --------------------------------------------------------

--
-- Table structure for table `Categories`
--

CREATE TABLE IF NOT EXISTS `Categories` (
  `catId` int(11) NOT NULL AUTO_INCREMENT,
  `catName` varchar(11) NOT NULL,
  PRIMARY KEY (`catId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `Categories`
--

INSERT INTO `Categories` (`catId`, `catName`) VALUES
(1, 'Paints'),
(2, 'Prints'),
(3, 'Plexi'),
(4, 'Places');

-- --------------------------------------------------------

--
-- Table structure for table `Items`
--

CREATE TABLE IF NOT EXISTS `Items` (
  `itemId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `modalDesc` varchar(50) DEFAULT NULL,
  `stocked` tinyint(1) NOT NULL,
  `thumbnail` varchar(30) DEFAULT NULL,
  `previewImg` varchar(30) DEFAULT NULL,
  `limited` varchar(30) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `price` varchar(30) DEFAULT NULL,
  `available` varchar(30) DEFAULT NULL,
  `size` varchar(30) DEFAULT NULL,
  `catId_` int(11) NOT NULL,
  `desc` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`itemId`),
  KEY `cat_fk` (`catId_`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=306 ;

--
-- Dumping data for table `Items`
--

INSERT INTO `Items` (`itemId`, `name`, `modalDesc`, `stocked`, `thumbnail`, `previewImg`, `limited`, `type`, `price`, `available`, `size`, `catId_`, `desc`) VALUES
(23, 'deep blue she ', NULL, 0, 'deepblueshe-sm.jpg', 'deepblueshe.jpg', NULL, 'matt emulsion/akvarell/torrpastell', NULL, NULL, '104x124', 1, NULL),
(24, 'drama smog', NULL, 0, 'dramasmog-sm.jpg', 'dramasmog.jpg', NULL, 'matt emulsion/akvarell/torrpastell', NULL, NULL, '64x84', 1, NULL),
(25, 'eat a burger', NULL, 0, 'eataburger-sm.jpg', 'eataburger.jpg', NULL, 'matt emulsion/akvarell/torrpastell', NULL, NULL, '64x84', 1, NULL),
(26, 'merde', NULL, 0, 'merde-sm.jpg', 'merde.jpg', NULL, 'matt emulsion/akvarell/torrpastell', NULL, NULL, '84x104', 1, NULL),
(27, 'nerve', NULL, 0, 'nerve-sm.jpg', 'nerve.jpg', NULL, 'matt emulsion/akvarell/torrpastell', NULL, NULL, '83x103', 1, NULL),
(28, 'gut', NULL, 0, 'gut-sm.jpg', 'gut.jpg', NULL, 'matt emulsion/akvarell/torrpastell', NULL, NULL, '104x124', 1, NULL),
(29, 'tropics isch', NULL, 1, 'tropics-sm.jpg', 'tropics.jpg', NULL, 'matt emulsion/akvarell/torrpastell', NULL, NULL, '50x50', 1, NULL),
(30, 'vy', NULL, 0, 'vy-sm.jpg', 'vy.jpg', NULL, 'matt emulsion @ uppspänd korkduk', NULL, NULL, '95x135', 1, NULL),
(31, 'vertical', NULL, 0, 'vertical-sm.jpg', 'vertical.jpg', NULL, 'matt emulsion', NULL, NULL, '100x120', 1, NULL),
(32, 'optics', NULL, 1, 'optics-sm.jpg', 'optics.jpg', NULL, 'matt emulsion/olja/akryl', NULL, NULL, '100x150', 1, NULL),
(33, 'moby', NULL, 0, 'moby-sm.jpg', 'main.jpg', NULL, 'matt emulsion/olja/akryl', NULL, NULL, '65x85', 1, NULL),
(34, 'twink', NULL, 1, 'twink-sm.jpg', 'twink.jpg', NULL, 'matt emulsion/olja', NULL, NULL, '100x150', 1, NULL),
(35, 'käft', NULL, 0, 'kaft-sm.jpg', 'kaft.jpg', NULL, 'matt emulsion/olja/akryl', NULL, NULL, '120x150', 1, NULL),
(36, 'roy', NULL, 0, 'roy2-sm.png', 'roy2.png', NULL, 'matt emulsion/olja/akryl', NULL, NULL, '120x150', 1, NULL),
(37, 'dålig sikt', NULL, 0, 'daligsikt-sm.jpg', 'daligsikt.jpg', NULL, 'matt emulsion/olja', NULL, NULL, '80x100', 1, NULL),
(38, 'tvätt tid', NULL, 0, 'tvatttid-sm.jpg', 'tvatttid.jpg', NULL, 'matt emulsion/olja/akryl', NULL, NULL, '80x100', 1, NULL),
(39, 'piotr', NULL, 0, 'piotr-sm.jpg', 'piotr.jpg', NULL, 'matt emulsion/olja/akryl', NULL, NULL, '100x150', 1, NULL),
(40, 'stora blå', NULL, 0, 'storabla-sm.jpg', 'storabla.jpg', NULL, 'matt emulsion/olja/akryl', NULL, NULL, '60x80', 1, NULL),
(41, 'chili', NULL, 0, 'chili-sm.jpg', 'chili.jpg', NULL, 'matt emulsion', NULL, NULL, '50x50', 1, NULL),
(42, 'strössel', NULL, 0, 'strossel-sm.jpg', 'strossel.jpg', NULL, 'matt emulsion/olja/akryl', NULL, NULL, '120x150', 1, NULL),
(43, 'popiscle', NULL, 0, 'popsicle-sm.jpg', 'popsicle.jpg', NULL, 'matt emulsion/akryl', NULL, NULL, '100x150', 1, NULL),
(44, 'anja', NULL, 0, 'anja-sm.jpg', 'anja.jpg', NULL, 'matt emulsion', NULL, NULL, '100x130', 1, NULL),
(45, 'penser', NULL, 0, 'penser-sm.jpg', 'penser.jpg', NULL, 'akvarellppr', NULL, NULL, '100x130', 1, NULL),
(48, 'clowd', NULL, 1, 'clowd-sm.jpg', 'clowd.jpg', NULL, 'matt emulsion', NULL, NULL, '50x50', 1, NULL),
(97, 'mimi - second edition', NULL, 1, 'mimi2-sm.jpg', 'mimi2.jpg', '30', 'akvarellppr, 70x100', '3,000', '28', NULL, 2, NULL),
(98, 'elphnt', NULL, 1, 'elphnt-sm.jpg', 'elphnt.jpg', '16', 'akvarellppr, 70x100', '5,000', '6', NULL, 2, NULL),
(100, 'les dames', NULL, 1, 'lesdames-sm.jpg', 'lesdames.jpg', '30', 'matt fotoppr, 50x70', '2,500', '28', NULL, 2, NULL),
(101, 'bubblephnt', NULL, 1, 'bubblephnt-sm.jpg', 'bubblephnt.jpg', NULL, 'valfri material & strlk', 'pris: inte valfritt', NULL, NULL, 2, 'kontakta vid förfrågan ( . )( . )'),
(102, 'checka ut', NULL, 1, 'checkaut-sm.jpg', 'checkaut.jpg', NULL, 'valfri material & strlk', 'pris: inte valfritt', NULL, NULL, 2, 'kontakta vid förfrågan ( . )( . )'),
(103, 'hybrid', NULL, 1, 'hybrid-sm.jpg', 'hybrid.jpg', '16', 'akvarellppr, 70x100', '4,000', '12', NULL, 2, NULL),
(105, 'mopp', NULL, 1, 'mopp-sm.jpg', 'mopp.jpg', NULL, 'valfri material & strlk', 'pris: inte valfritt', NULL, NULL, 2, 'kontakta vid förfrågan ( . )( . )'),
(106, 'shrine', NULL, 1, 'shrine-sm.jpg', 'shrine.jpg', NULL, 'valfri material & strlk', 'pris: inte valfritt', NULL, NULL, 2, 'kontakta vid förfrågan ( . )( . )'),
(107, 'piglet wtf', NULL, 1, 'pigletwtf-sm.jpg', 'pigletwtf.jpg', NULL, 'valfri material & strlk', 'pris: inte valfritt', NULL, NULL, 2, 'kontakta vid förfrågan ( . )( . )'),
(108, 'bellies naked skin prty - part', NULL, 1, 'nakedskin-sm.jpg', 'nakedskin.jpg', '15', 'matt fotoppr, 70x100', '1,500', '13', NULL, 2, NULL),
(109, 'bellies naked skin prty', NULL, 1, 'nakedskin2-sm.jpg', 'nakedskin2.jpg', '15', 'matt fotoppr, 70x100', '1,500', '13', NULL, 2, NULL),
(110, 'gösta', NULL, 1, 'gosta-sm.jpg', 'gosta.jpg', NULL, 'valfri material & strlk', 'pris: inte valfritt', NULL, NULL, 2, 'kontakta vid förfrågan ( . )( . )'),
(111, 'trettitre', NULL, 1, 'trettitre-sm.jpg', 'trettitre.jpg', '5', 'akvarellppr, 105x120', '8,000', '1', NULL, 2, NULL),
(112, 'two', NULL, 1, 'two-sm.jpg', 'two.jpg', NULL, 'valfri material & strlk', 'pris: inte valfritt', NULL, NULL, 2, 'kontakta vid förfrågan ( . )( . )'),
(114, 'max', NULL, 1, 'max-sm.jpg', 'max.jpg', '30', 'uppspänd canvas, 95x120', '7,000', '23', NULL, 2, NULL),
(115, 'lingerie', NULL, 1, 'lingerie-sm.jpg', 'lingerie.jpg', '10', 'glansigt fotopapper, 70x100', 'pris: inte valfritt', '8', NULL, 2, NULL),
(118, 'gubb', NULL, 1, 'gubb-sm.jpg', 'gubb.jpg', NULL, 'valfri material & strlk', 'pris: inte valfritt', NULL, NULL, 2, 'kontakta vid förfrågan ( . )( . )'),
(119, 'petter', NULL, 1, 'petter-sm.jpg', 'petter.jpg', '7', 'akvarellppr, 70x100', '1,500', '5', NULL, 2, NULL),
(120, 'basen', NULL, 1, 'basen-sm.jpg', 'basen.jpg', NULL, 'valfri material & strlk', 'pris: inte valfritt', NULL, NULL, 2, 'kontakta vid förfrågan ( . )( . )'),
(123, 'slav', NULL, 1, 'slav-sm.jpg', 'slav.jpg', NULL, 'akvarellppr, 50x70', '1,200', NULL, NULL, 2, NULL),
(124, 'vissn', NULL, 1, 'vissn-sm.jpg', 'vissn.jpg', NULL, 'valfri material & strlk', 'pris: inte valfria', NULL, NULL, 2, 'kontakta vid förfrågan ( . )( . )'),
(125, 'ännu mer vissn', NULL, 1, 'vissnSv-sm.jpg', 'vissnSv.jpg', NULL, 'valfri material & strlk', 'pris: inte valfria', NULL, NULL, 2, 'kontakta vid förfrågan ( . )( . )'),
(126, 'splashwars', NULL, 1, 'splashwars-sm.jpg', 'splashwars.jpg', '7', 'matt fotopapper, 70x70', '3,000', '4', NULL, 2, NULL),
(127, 'torsk compilation', NULL, 1, 'torskcompilation-sm.jpg', 'torskcompilation.jpg', NULL, 'valfri material & strlk', NULL, NULL, NULL, 2, 'kontakta vid förfrågan ( . )( . )'),
(128, 'segt', NULL, 1, 'segt-sm.jpg', 'segt.jpg', NULL, 'valfri material & strlk', NULL, NULL, NULL, 2, 'kontakta vid förfrågan ( . )( . )'),
(129, 'i kön till kaffet', NULL, 1, 'ikotillkaffet-sm.jpg', 'ikotillkaffet.jpg', NULL, 'valfri material & strlk', NULL, NULL, NULL, 2, 'kontakta vid förfrågan ( . )( . )'),
(130, 'damn you pear', NULL, 1, 'damnupear-sm.jpg', 'damnupear.jpg', NULL, 'valfri material & strlk', NULL, NULL, NULL, 2, 'kontakta vid förfrågan ( . )( . )'),
(193, NULL, '@ Observatoriegatan, sthlm 2017', 1, '41.jpg', '41.jpg', NULL, NULL, NULL, NULL, NULL, 4, NULL),
(194, NULL, '@ Klippgatan, sthlm 2017', 1, '37.jpg', '37.jpg', NULL, NULL, NULL, NULL, NULL, 4, NULL),
(199, NULL, '@ Layered (vernissage), sthlm 2017', 1, '36.jpg', '36.jpg', NULL, NULL, NULL, NULL, NULL, 4, NULL),
(200, NULL, '@ Strössel (vernissage), sthlm 2015', 1, '17.png', '17.png', NULL, NULL, NULL, NULL, NULL, 4, NULL),
(201, NULL, 'Max @ Nybergsgatan, sthlm 2016', 1, '26.png', '26.png', NULL, NULL, NULL, NULL, NULL, 4, NULL),
(202, NULL, 'Elphnt @ Klippgatan, sthlm 2016', 1, '6.png', '6.png', NULL, NULL, NULL, NULL, NULL, 4, NULL),
(203, NULL, 'Max, gbg 2017', 1, '18.png', '18.png', NULL, NULL, NULL, NULL, NULL, 4, NULL),
(204, NULL, '@ Pop - up Kocksgatan, sthlm 2017', 1, '7.png', '7.png', NULL, NULL, NULL, NULL, NULL, 4, NULL),
(206, NULL, 'Dålig sikt (vernissage) @ Riddargatan, sthlm 2016', 1, '9.png', '9.png', NULL, NULL, NULL, NULL, NULL, 4, NULL),
(207, NULL, '@ Klippgatan, sthlm 2016', 1, '10.png', '10.png', NULL, NULL, NULL, NULL, NULL, 4, NULL),
(208, NULL, 'Twink @ Friisgatan, malmö 2016', 1, '11.png', '11.png', NULL, NULL, NULL, NULL, NULL, 4, NULL),
(209, NULL, '@ Sturegatan, sthlm 2015', 1, '12.png', '12.png', NULL, NULL, NULL, NULL, NULL, 4, NULL),
(210, NULL, '@ Nybergsgatan, sthml 2015', 1, '13.png', '13.png', NULL, NULL, NULL, NULL, NULL, 4, NULL),
(211, NULL, '@ Erik Penser Bank, sthlm 2016', 1, '14.png', '14.png', NULL, NULL, NULL, NULL, NULL, 4, NULL),
(212, NULL, '@ Bråvallagatan, sthlm 2016', 1, '15.png', '15.png', NULL, NULL, NULL, NULL, NULL, 4, NULL),
(213, NULL, '@ Linnégatan, sthlm 2015', 1, '16.png', '16.png', NULL, NULL, NULL, NULL, NULL, 4, NULL),
(214, NULL, '@ Katarina bangata, sthlm 2017', 1, '27.png', '27.png', NULL, NULL, NULL, NULL, NULL, 4, NULL),
(221, NULL, 'ior @ Kullavik 2016', 1, '32.png', '32.png', NULL, NULL, NULL, NULL, NULL, 4, NULL),
(222, NULL, 'Max, Sthlm 2016', 1, '33.png', '33.png', NULL, NULL, NULL, NULL, NULL, 4, NULL),
(223, NULL, '@ Riddargatan, stockholm 2016', 1, '35.png', '35.png', NULL, NULL, NULL, NULL, NULL, 4, NULL),
(224, NULL, '@ Inezco, sthlm 2016', 1, '34.png', '34.png', NULL, NULL, NULL, NULL, NULL, 4, NULL),
(225, NULL, '@ Roslagsgatan, sthlm 2016', 1, '8.png', '8.png', NULL, NULL, NULL, NULL, NULL, 4, NULL),
(300, 'strössla', '', 1, 'strossel-sm.jpg', 'strossel.jpg', '15', 'plexiglas, 80x120', '5,000', '11', NULL, 3, NULL),
(301, 'dig in', '', 1, 'digin-sm.jpg', 'digin.jpg', '15', 'plexiglas, 80x120', '5,000', '11', NULL, 3, NULL),
(302, 'mordor', NULL, 1, 'pinkplexi-sm.jpg', 'pinkplexi.jpg', '20', 'plexiglas, 93x120', '5,000', '19', NULL, 3, NULL),
(305, 'tweed', '', 1, 'tweed-sm.jpg', 'tweed.jpg', '16', 'plexiglas, 80x120', '4,000', '9', NULL, 3, NULL);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Items`
--
ALTER TABLE `Items`
  ADD CONSTRAINT `cat_fk` FOREIGN KEY (`catId_`) REFERENCES `Categories` (`catId`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
