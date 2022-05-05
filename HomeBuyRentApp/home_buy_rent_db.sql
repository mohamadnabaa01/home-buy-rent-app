-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2022 at 09:19 PM
-- Server version: 8.0.23
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `home_buy_rent_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `rent_homes`
--

CREATE TABLE `rent_homes` (
  `rent_home_id` int NOT NULL,
  `image1` varchar(225) NOT NULL,
  `image2` varchar(225) NOT NULL,
  `image3` varchar(225) NOT NULL,
  `location` varchar(225) NOT NULL,
  `price` varchar(50) NOT NULL,
  `area` int NOT NULL,
  `living_rooms` int NOT NULL,
  `bedrooms` int NOT NULL,
  `bathrooms` int NOT NULL,
  `home_type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `rent_homes`
--

INSERT INTO `rent_homes` (`rent_home_id`, `image1`, `image2`, `image3`, `location`, `price`, `area`, `living_rooms`, `bedrooms`, `bathrooms`, `home_type`) VALUES
(1, 'home', 'home', 'home', 'aramoun', '20000', 105, 1, 2, 2, 'building'),
(4, '', '', '', 'aramoun', '20000', 120, 2, 2, 2, 'building'),
(5, '', '', '', 'beirut', '20000', 120, 2, 2, 2, 'building');

-- --------------------------------------------------------

--
-- Table structure for table `sale_homes`
--

CREATE TABLE `sale_homes` (
  `sale_home_id` int NOT NULL,
  `image1` varchar(225) NOT NULL,
  `image2` varchar(225) NOT NULL,
  `image3` varchar(225) NOT NULL,
  `location` varchar(225) NOT NULL,
  `price` varchar(50) NOT NULL,
  `area` int NOT NULL,
  `living_rooms` int NOT NULL,
  `bedrooms` int NOT NULL,
  `bathrooms` int NOT NULL,
  `home_type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `sale_homes`
--

INSERT INTO `sale_homes` (`sale_home_id`, `image1`, `image2`, `image3`, `location`, `price`, `area`, `living_rooms`, `bedrooms`, `bathrooms`, `home_type`) VALUES
(1, 'home', '', '', 'Beirut', '20000', 120, 2, 2, 2, 'building'),
(2, 'home', '', '', 'beirut', '20000', 120, 2, 2, 2, 'building'),
(3, 'home', '', '', 'beirut', '20000', 120, 2, 2, 2, 'building'),
(4, 'home', '', '', 'beirut', '20000', 120, 2, 2, 2, 'building'),
(20, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'beirut', '20000', 120, 2, 2, 2, 'building'),
(21, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'beirut', '20000', 120, 2, 2, 2, 'building'),
(22, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'beirut', '20000', 120, 2, 2, 2, 'building'),
(23, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'beirut', '20000', 120, 2, 2, 2, 'building'),
(24, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'beirut', '1', 1, 1, 1, 1, 'building'),
(25, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'beirut', '20000', 120, 2, 2, 2, 'building'),
(26, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'beirut', '1', 1, 1, 1, 1, 'building'),
(27, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'b', '1', 1, 1, 1, 1, 'n'),
(28, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'beirut', '20000', 120, 2, 2, 2, 'building'),
(29, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'beirut', '20000', 120, 2, 2, 2, 'building'),
(30, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'beirut', '20000', 120, 2, 2, 2, 'building'),
(31, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 's', '1', 11, 1, 1, 1, 'b'),
(32, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'beirut', '20000', 120, 2, 2, 2, 'building'),
(33, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'beirut', '20000', 120, 2, 2, 2, 'building'),
(34, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'b', '2', 1, 1, 1, 1, '1'),
(35, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'beirut', '20000', 120, 2, 2, 2, 'building'),
(36, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'a', '1', 1, 1, 1, 1, 'b'),
(37, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'd', '1', 1, 1, 1, 1, 'b'),
(38, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'd', '1', 1, 1, 1, 1, 'b'),
(39, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'b', '20', 1, 1, 1, 1, 'buidling'),
(40, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'b', '1', 1, 1, 1, 1, 'b'),
(41, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'b', '1', 1, 1, 1, 1, 'b'),
(42, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'b', '1', 1, 1, 1, 1, 'b'),
(43, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'b', '1', 1, 1, 1, 1, '1'),
(44, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'b', '1', 1, 1, 1, 1, '1'),
(45, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'b', '1', 1, 1, 1, 1, '1'),
(46, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'b', '1', 1, 1, 1, 1, '1'),
(47, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'b', '1', 1, 1, 1, 1, '1'),
(48, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'b', '1', 1, 1, 1, 1, '1'),
(49, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'b', '1', 1, 1, 1, 1, '1'),
(50, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'b', '1', 1, 1, 1, 1, '1'),
(51, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'b', '1', 1, 1, 1, 1, '1'),
(52, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'b', '1', 1, 1, 1, 1, '1'),
(53, 'C:\\fakepath\\circuit.jpg', '', '', 'b', '1', 1, 1, 1, 1, '1'),
(54, 'C:\\fakepath\\287E3F52-10FC-4FCD-BC8F-B28BF7C012ED (1).png', '', '', 'b', '1', 1, 1, 1, 1, 'b');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int NOT NULL,
  `first_name` varchar(225) NOT NULL,
  `last_name` varchar(225) NOT NULL,
  `email_address` varchar(225) NOT NULL,
  `phone_number` varchar(100) NOT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_type` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `email_address`, `phone_number`, `password`, `user_type`) VALUES
(11, '', '', 'mnabaa53@gmail.com', '', 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', 'seller'),
(12, '', '', '', '', 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', 'seller'),
(13, 'Mhmd', 'Nabaa', 'mnabaa53@gmail.com', '96171123805', 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', 'seller'),
(14, '', '', '', '123', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 'seller'),
(15, 'Mohamad', 'Nabaa', 'mohamad.nabaa01@lau.edu', '96171123805', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 'seller'),
(16, 'Mohamad', 'Nabaa', 'mohamad.nabaa01@lau.edu', '96171123805', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 'seller');

-- --------------------------------------------------------

--
-- Table structure for table `user_rent_homes`
--

CREATE TABLE `user_rent_homes` (
  `user_rent_home_id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `rent_home_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_rent_homes`
--

INSERT INTO `user_rent_homes` (`user_rent_home_id`, `user_id`, `rent_home_id`) VALUES
(1, NULL, NULL),
(2, 11, 4);

-- --------------------------------------------------------

--
-- Table structure for table `user_sale_homes`
--

CREATE TABLE `user_sale_homes` (
  `user_sale_home_id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `sale_home_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_sale_homes`
--

INSERT INTO `user_sale_homes` (`user_sale_home_id`, `user_id`, `sale_home_id`) VALUES
(1, 0, 0),
(2, 11, 18),
(3, 11, 1),
(4, 0, 0),
(5, 15, 5),
(6, 0, 0),
(7, 15, 20),
(8, 0, 0),
(9, 15, 21),
(10, 0, 0),
(11, 15, 22),
(12, 0, 0),
(13, 15, 23),
(14, 0, 0),
(15, 15, 24),
(16, 0, 0),
(17, 15, 25),
(18, 0, 0),
(19, 15, 26),
(20, 0, 0),
(21, 15, 27),
(22, 0, 0),
(23, 15, 28),
(24, 0, 0),
(25, 15, 29),
(26, 0, 0),
(27, 15, 30),
(28, 0, 0),
(29, 15, 31),
(30, 0, 0),
(31, 15, 32),
(32, 0, 0),
(33, 15, 33),
(34, 0, 0),
(35, 15, 34),
(36, 0, 0),
(37, 15, 35),
(38, 0, 0),
(39, 15, 36),
(40, 0, 0),
(41, 15, 37),
(42, 0, 0),
(43, 15, 38),
(44, 0, 0),
(45, 15, 39),
(46, 0, 0),
(47, 15, 40),
(48, 0, 0),
(49, 15, 41),
(50, 0, 0),
(51, 15, 41),
(52, 0, 0),
(53, 15, 41),
(54, 0, 0),
(55, 15, 41),
(56, 0, 0),
(57, 15, 41),
(58, 0, 0),
(59, 15, 41),
(60, 0, 0),
(61, 15, 47),
(62, 0, 0),
(63, 15, 47),
(64, 0, 0),
(65, 15, 47),
(66, 0, 0),
(67, 15, 47),
(68, 0, 0),
(69, 15, 47),
(70, 0, 0),
(71, 15, 47),
(72, 0, 0),
(73, 15, 47),
(74, 0, 0),
(75, 15, 47),
(76, 0, 0),
(77, 15, 47);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rent_homes`
--
ALTER TABLE `rent_homes`
  ADD PRIMARY KEY (`rent_home_id`);

--
-- Indexes for table `sale_homes`
--
ALTER TABLE `sale_homes`
  ADD PRIMARY KEY (`sale_home_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `user_rent_homes`
--
ALTER TABLE `user_rent_homes`
  ADD PRIMARY KEY (`user_rent_home_id`),
  ADD KEY `INDEX` (`rent_home_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `home_id` (`rent_home_id`);

--
-- Indexes for table `user_sale_homes`
--
ALTER TABLE `user_sale_homes`
  ADD PRIMARY KEY (`user_sale_home_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `sale_home_id` (`sale_home_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `rent_homes`
--
ALTER TABLE `rent_homes`
  MODIFY `rent_home_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `sale_homes`
--
ALTER TABLE `sale_homes`
  MODIFY `sale_home_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `user_rent_homes`
--
ALTER TABLE `user_rent_homes`
  MODIFY `user_rent_home_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user_sale_homes`
--
ALTER TABLE `user_sale_homes`
  MODIFY `user_sale_home_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
