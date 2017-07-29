-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 29, 2017 at 12:55 AM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `scrabble`
--
CREATE DATABASE IF NOT EXISTS `scrabble` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `scrabble`;

-- --------------------------------------------------------

--
-- Table structure for table `scrab`
--

CREATE TABLE IF NOT EXISTS `scrab` (
  `id` int(11) NOT NULL,
  `word` varchar(200) NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'NO',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `scrab`
--

INSERT INTO `scrab` (`id`, `word`, `status`) VALUES
(1, 'Road', 'Accept'),
(2, 'Map', 'Reject'),
(3, 'Mother', 'NO'),
(4, 'Mountain', 'NO'),
(5, 'Range', 'NO'),
(6, 'Which', 'Reject'),
(7, 'Name', 'NO'),
(8, 'Correspondence', 'NO'),
(9, 'Main', 'NO');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(1, 'chobodi', '123'),
(2, 'upeksha', 'u@123'),
(3, 'janani', 'jana'),
(4, 'Dup', '123');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
