-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 20, 2022 at 06:48 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `memorable_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `assets`
--

CREATE TABLE `assets` (
  `id` int(15) NOT NULL,
  `type` varchar(20) DEFAULT NULL,
  `filename` varchar(200) DEFAULT NULL,
  `extension` varchar(10) DEFAULT NULL,
  `score_type_1` decimal(10,0) DEFAULT 0,
  `score_type_2` decimal(10,0) DEFAULT 0,
  `score_type_3` decimal(10,0) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `assets`
--

INSERT INTO `assets` (`id`, `type`, `filename`, `extension`, `score_type_1`, `score_type_2`, `score_type_3`, `created_at`, `updated_at`) VALUES
(1, 'video', 'file.mp4', 'mp4', '23', '5', '89', '2022-03-14 10:41:25', '2022-03-20 10:42:12'),
(2, 'image', 'file.mp4', 'png', '2', '67', '87', '2022-03-20 13:37:47', '2022-03-20 13:37:47'),
(3, 'pdf', 'file.mp4', 'pdf', '13', '5', '25', '2022-03-20 17:31:53', '2022-03-20 17:31:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assets`
--
ALTER TABLE `assets`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assets`
--
ALTER TABLE `assets`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
