-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 30, 2022 at 12:01 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `final_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `img_tb`
--

CREATE TABLE `img_tb` (
  `img_id` int(11) NOT NULL,
  `user_id` tinyint(11) NOT NULL,
  `post_id` tinyint(11) NOT NULL,
  `imgName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `img_tb`
--

INSERT INTO `img_tb` (`img_id`, `user_id`, `post_id`, `imgName`) VALUES
(1, 5, 1, 'mario.png');

-- --------------------------------------------------------

--
-- Table structure for table `post_tb`
--

CREATE TABLE `post_tb` (
  `post_id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `postContent` varchar(1000) NOT NULL,
  `user_id` int(11) NOT NULL,
  `p_date` date NOT NULL DEFAULT current_timestamp(),
  `imgName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `post_tb`
--

INSERT INTO `post_tb` (`post_id`, `title`, `postContent`, `user_id`, `p_date`, `imgName`) VALUES
(1, 'test house', 'close to Tamwood school', 4, '2022-08-28', 'mario.png'),
(19, 'delicious restaurant', 'you can enjoy gyoza', 26, '2022-08-20', 'gyoza.jpg'),
(24, 'co-work space', 'business hours/ 9:00-22:00\nrental fee $14/hour\navailable/ wifi, drink, snack\noption/ rental labtop $25/hour', 28, '2022-08-30', 'header.jpg'),
(26, 'a', 'a', 30, '2022-08-17', 'header.jpg'),
(27, 'good mountain', 'you can enjoy hiking', 27, '2022-08-13', 'mountain (2).jpg'),
(30, 'title', 'test', 25, '2022-08-05', 'pic-2.jpg'),
(32, 'test house', 'test post', 54, '2022-09-15', 'calligraphy.jpg'),
(33, 'test', 'you can make whatever you want!', 59, '2022-09-17', 'pic-4.jpg'),
(40, 'sharehouse ', 'It is located close to Kyoto station', 90, '2022-09-14', 'yukata.jpg'),
(41, 'co-work place', 'you can use free wifi and free drink', 48, '2022-09-22', 'pic-6.jpg'),
(42, 'sharehouse ', 'available from in September 9th.\r\nPlease text me.', 48, '2022-09-10', 'banner.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `user_tb`
--

CREATE TABLE `user_tb` (
  `user_id` int(11) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `atype` varchar(10) NOT NULL,
  `dob` date NOT NULL,
  `email` varchar(50) NOT NULL,
  `pass` varchar(200) NOT NULL,
  `profImg` varchar(100) NOT NULL DEFAULT 'default.jpg',
  `refImg` varchar(100) NOT NULL,
  `badge1` varchar(15) NOT NULL,
  `tamImg` varchar(100) NOT NULL,
  `badge2` varchar(15) NOT NULL,
  `profileContent` varchar(500) NOT NULL,
  `loginIP` varchar(250) DEFAULT NULL,
  `loginDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_tb`
--

INSERT INTO `user_tb` (`user_id`, `firstName`, `lastName`, `atype`, `dob`, `email`, `pass`, `profImg`, `refImg`, `badge1`, `tamImg`, `badge2`, `profileContent`, `loginIP`, `loginDate`) VALUES
(4, 'haruka', 'nakamura', 'Student', '2022-08-12', 'test@gmail.com', 'qwe', 'pic-1.jpg', '', '0', '', '0', 'I&#039;m from Japan, nice to meet you', NULL, NULL),
(6, 'Gunnnn', 'McDougallll', 'Landlord', '2022-01-06', '12345@gmail.com', '$2y$10$gRQv1BpO2ur/qkCIt4s7Cu8JRe5zKxMqg88U/7PwHT3rjAq/sQ8EO', 'leaves.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(7, 'Gunn', 'McDougalli', 'Admin', '2022-08-10', 'TEST@gmail.com', '$2y$10$zm4Pdnx188qmrMwx/EVUj.F8yrgUaEYJC46B4LQoYv6ddB3AjmwJm', 'pic-1.jpg', '', 'unsubmitted', '', 'unsubmitted', 'I&#039;m from Japan, nice to meet you', NULL, NULL),
(8, 'ruke', 'kaba', 'Landlord', '2022-08-26', 'test2@gmail.com', '$2y$10$HW1LzUKZP8yigkVfpWhBMOu0DmnglFF.mkBYB5LRkbZRavOnZ7OvW', 'leaves.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(9, 'nak', 'nak', 'Landlord', '2022-08-01', 'nak@789.com', '$2y$10$UzV2/Y3VGG/9MEdFnLfs2OQVVZXUpfSwtaqRuzpIYHBzfiIqgr/dq', 'mario.png', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(10, 'haruka', 'McDougallll', 'Admin', '2022-08-17', '678@gmail.com', '$2y$05$FKoH9riI.fkgZo97f/W0v.Yn1PVCK.2v15tzKPuuOvsQe9Hd//UF.', 'mario.png', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(11, 'test', 'man', 'Admin', '1111-08-31', 'test@abc.com', '$2y$05$0V0odOEZ3aU8SaEP2HDcJuziO0jl0UkRyOVkGUTGuSkLY5LcGx9ZO', 'cloud.png', '', 'unsubmitted', 'mario.png', 'verified', 'no posted', NULL, NULL),
(13, 'jun', 'jun', 'Landlord', '2022-08-20', 'jun@com', '$2y$05$Ho9v8icuhzNgzNTpb/9I5e7fbJb1Gm.7gkgaF47vpklFV4xvzC4S2', 'luigi.png', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(14, 'jun', 'jun', 'Landlord', '2022-08-20', 'jun@com', '$2y$05$omorDUegjZY5YZnuQVl12.HfyDcgnUTJczR4oYswRI8B7zt3T3tsK', 'luigi.png', '', '0', '', '0', 'no posted', NULL, NULL),
(15, 'haruka', 'Scraneyyy', 'Student', '2022-08-05', 'haruka@com', '$2y$05$.l4xgU0DuIsqKiqCpU4V1OVKbTsfT7ROz8MovCIiv5lwUtCNVmPB.', 'mario.png', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(19, 'haruka', 'miku', 'Student', '2022-09-01', 'test@gmail.com', '$2y$05$3BMyE3G3m3hQVR1.Mb2CuuzmIxZ5/bhUHZtGgNGipwO3BUSbRFlBe', 'pic-1.jpg', '', 'unsubmitted', '', 'unsubmitted', 'I&#039;m from Japan, nice to meet you', NULL, NULL),
(20, 'test', 'test', 'Student', '2022-08-03', 'test@com', '$2y$05$Uazj5qiucm1ARftx81Z4PuTB9jhRDG74S2NO5x84xz8GSnfGJ9MOe', 'mario.png', '', 'unsubmitted', '', 'waiting', 'wario', NULL, NULL),
(22, 'aka', 'akane', 'Admin', '2022-08-25', 'akane@test.com', '$2y$05$4o2S64adj879b66IV6kGP.l5Cmx3OkOmb4SXvcoHq4p5rpkQwyb.q', '', '', 'unsubmitted', '', 'verified', 'no posted', '24.244.23.23', '2022-09-29 11:09:17'),
(23, 'testman', 'test', 'Landord', '2022-08-03', 'tes@icloud.com', 'tes', '', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(24, 'filename', 'confirmchanged', 'Landord', '2022-08-18', 'file@com', 'file', '', 'pic-4.jpg', 'waiting', 'banner.jpg', 'waiting', '', NULL, NULL),
(25, 'taka', 'oota', 'Student', '2022-08-05', 'taka@gmail.com', '', 'pic-06.jpg', '', '', '', '', 'post', NULL, NULL),
(26, 'new', 'haruka', 'Landlord', '2022-08-26', 'haru@gmail.com', '$2y$05$IgtSeb8uwuBU2xFI4BxC2.Wn5sihCHPB5h65Qzi3.IdBt9RlesCya', 'avocado-dish.jpg', 'features.jpg', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(27, 'haruka', 'nakamura', 'Student', '2022-08-05', 'test@icloud.com', '123', '', '', 'waiting', '', 'waiting', 'like japan', NULL, NULL),
(28, 'key', 'test', 'Landord', '2022-08-12', 'key@gmail.com', '$2y$05$q2url8gasS/foxXF5stW2e9sGjoJx8gfH0Lmn9cdG63y9rwAtlA6G', '', '', 'waiting', 'about-4.jpg', 'waiting', 'hi, I like watching movie in my free time', NULL, NULL),
(29, 'jay', 'Scraneyyy', 'Admin', '2022-08-03', 'jay@admin.com', '$2y$05$XoYFee2V5qnEQxde8OhnKe4SatR0i.11eUDWByTj/at7BVpumYg5.', 'about-4.jpg', '', 'unsubmitted', '', 'waiting', 'no posted', NULL, NULL),
(30, 'mayuko', 'okadata', 'Student', '2022-08-11', 'mayu@gmail.com', '$2y$05$oJ.kIwzF42nnO/IMfziiKO2LTkZbgSCUC5V8mn4xzpkFWBeZ2VIHu', '', 'header.png', 'unsubmitted', '', 'waiting', 'hi', NULL, NULL),
(31, 'filetest', 'a', 'Landlord', '2022-08-31', 'img@com', '$2y$05$yTYlMRe4F3j6cSqUpapjTemEYLpu7uBQnAtHfA6HRIxfEns7JGpwq', 'pic-3.jpg', 'header9.jpg', 'waiting', '', 'waiting', 'no posted', NULL, NULL),
(32, 'haruka', 'nakamura', 'Student', '2022-08-04', 'img@com', '$2y$05$R.CE3nR2vFidQ0axmxpYvODbXH6HSVi36DVwNDsCRkHM4WV8R5N.C', 'pic-4.jpg', 'header9.jpg', 'waiting', '', 'waiting', 'no posted', NULL, NULL),
(33, 'file', 'test', 'Student', '2022-08-03', 'img@com', '$2y$05$BoMCuNOHOjNc83ngrhzd1uEeUPYzPcc3ewIWctgmbJ5YF.nYb729.', 'header9.jpg', 'pic-4.jpg', 'waiting', '', 'waiting', 'no posted', NULL, NULL),
(34, 'file', 'test', 'Student', '2022-08-03', 'img@com', '$2y$05$/vGxYjpv02nmF50uPJgVBuwkAjz5B3a62LXDje72iHWziE1HNGWim', 'header9.jpg', 'pic-4.jpg', 'waiting', '', 'waiting', 'no posted', NULL, NULL),
(35, 'Gunnnn', 'test', 'Student', '2022-08-04', 'gun@test.com', '$2y$05$JCcd.q9v2IMgeNFIi3AIfexkrB080wKhGb3uDFzMM/iraAHEOcfai', '', '', 'waiting', '', 'waiting', 'no posted', NULL, NULL),
(36, 'file', 'tes', 'Student', '2022-08-18', 'tes@com', '$2y$05$ptYgapDEriCKxAa84fDda.hZaKlFRyjLgkLi7ywIPgDz.xX7h/nou', 'cherry blossom.jpg', 'mountain.jpg', 'waiting', '', 'waiting', 'no posted', NULL, NULL),
(37, 'aa', 'a', 'Admin', '2022-09-10', 'a@com', '$2y$05$7OXJ/Q0Md7fK0gtAB.RwfOIi5/GzrTNaOZTIhhZIgs6HXNWq9t1T6', 'calligraphy.jpg', 'pic-03.jpg', 'waiting', '', 'waiting', 'no posted', NULL, NULL),
(38, 'test', 'nakamura', 'Student', '2022-08-05', 'haru@com', '$2y$05$amZN0LoZvOWUFA4CdoLFy./iuhjmWRcOuH4.6/ccS5n3GZLA/a0Le', 'mountain.jpg', 'cherry blossom.jpg', '', '', '', 'no posted', NULL, NULL),
(39, 'haru', 'ka', 'Student', '2022-08-13', 'ka@com', '$2y$05$DjwQaSQcXAnClX2YTxLXn.zMiYN/krbNIiMDZoTmmXIKSRD9y8ezu', 'cherry blossom.jpg', 'pic-07.jpg', '', '', '', 'no posted', NULL, NULL),
(40, 'haru', 'ka', 'Student', '2022-08-13', 'ka@com', '$2y$05$MsM0Ehw/mR56PIgSj8dCW.0SXIXsvtOOGqiMocaaECoxYCNr31d5O', 'cherry blossom.jpg', 'pic-07.jpg', 'waiting', '', 'waiting', 'no posted', NULL, NULL),
(41, 'te', 'st', 'Student', '2022-08-12', 'te@co', '$2y$05$uxwMti2WH8iS36qK6lT.suwogU00bVRgeQ8Gzc3MVOkKFNF2SGUNe', 'calligraphy.jpg', 'cherry blossom.jpg', 'waiting', '', 'waiting', 'no posted', NULL, NULL),
(42, 'Gunn', 'test', 'Student', '2022-08-06', 'test@icloud.com', '', '', '', 'waiting', '', 'waiting', 'no posted', NULL, NULL),
(43, 'ha', 'y', 'Student', '2022-08-04', 'test@icloud.com', '', '', '', 'waiting', '', 'waiting', 'no posted', NULL, NULL),
(44, 'jay', 'McDougalli', 'Student', '2022-09-02', 'test@icloud.com', '', '', '', 'waiting', '', 'waiting', 'no posted', NULL, NULL),
(45, 'aa', 'a', 'Landlord', '2022-08-12', 'test@icloud.com', '', 'gallery-1.jpg', '', 'waiting', '', 'waiting', 'no posted', NULL, NULL),
(46, 'Gunn', 'McDougallll', 'Landlord', '2022-08-05', 'test@gmail.com', '$2y$05$rxHuGdhMgmFYgXBzfzoMvOSXBLJyA0GxoBM0oD23/0IlHdXg7Jmem', 'cherry blossom.jpg', '', 'waiting', '', 'waiting', 'no posted', NULL, NULL),
(47, 'file', 'Scraneyyy', 'Student', '2022-09-02', 'test@gmail.com', '$2y$05$Yyp3nCSyajvQvgC7FjCf9.Mrp/.R6EGvuUe/TtcBge0cTG3.fqwjC', 'gallery-2.jpg', '', 'waiting', '', 'waiting', 'no posted', NULL, NULL),
(48, 'haruka', 'kasugaaaa', 'Student', '2022-09-09', 'kasu@icloud.com', '$2y$05$zvvWawTkitSgX6oioj8UGezbaLbJui3azs2rdnSdMqMjk2zo3qgz2', 'profile.jpg', '', 'waiting', '', 'waiting', 'hi', NULL, NULL),
(49, 'mamiko', 'oota', 'Landlord', '2022-09-09', 'mamimami@icloud.com', '$2y$05$FEx7vJoaEVh/74gURhgtE.MMHV.fqzmkZWZjeMG91X8Tca.cC4e1y', 'calligraphy.jpg', '', 'waiting', '', 'waiting', 'no posted', NULL, NULL),
(50, 'file', 'Scraneyyy', 'Student', '2022-09-23', 'TEST@gmail.com', '$2y$05$i4YjYvupEG28bw2pWnuKzOKKB7UCltpX.FXdrnaSimVVCOtiOlI9G', 'gallery.png', '', 'waiting', '', 'waiting', 'no posted', NULL, NULL),
(51, 'test', 'signup', 'Landord', '2022-09-15', 'signupup@gmail.com', '$2y$05$RLoM/FUfdXy7PVzI4XJtDuFhE/6ESxpaGYRvjRE.oNxxwOmlaXu4C', 'cherry blossom.jpg', '', 'waiting', '', 'waiting', 'no posted', NULL, NULL),
(52, 'Gunnnn', 'McDougallll', 'Student', '2022-09-10', 'student123@gmail.com', '$2y$05$ifQBW7wk3TE4bbUguFwYIOeWYIUWPz1NZVl0QNbKGgdPOfX1iF9Eq', 'cherry blossom.jpg', '', '', '', '', 'no posted', NULL, NULL),
(53, 'Gunnnnnn', 'jun', 'Student', '2022-09-14', 'Gunnnnnn@outlook.com', '$2y$05$LRpdC43dDrlphj8XJqKhMOUwRjrxizn8Vwu97.mVJtDwwGqwYsaqa', 'calligraphy.jpg', '', '', '', '', 'no posted', NULL, NULL),
(54, 'Gunnnn', 'haru', 'Student', '2022-09-02', 'qwertyui@outlook.com', '$2y$05$tiR5ChgSIWRUJtTgTDsJYeFWrinogomjljUr4eSKwhYvS6Ulj29AC', '', '', '', '', '', '', NULL, NULL),
(55, 'Gunn', 'Scraneyyy', 'Student', '2022-09-30', 'poiuytre@outlook.com', '$2y$05$u3iQD/9.xgjZjGpAdOf.3.uOPuO6J8K/QN5/kTVnJWyotBbZ1XI5i', 'mountain (2).jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(56, 'Gunn', 'McDougallll', 'Student', '2022-09-17', 'McDougallll@outlook.com', '$2y$05$hhqZcVFdWlPs9E7k/LJUf.AvQprc5N6DP2rRyzHFBX7MHadtdJxJm', 'mountain (2).jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(57, 'Gunn', 'McDougallll', 'Student', '2022-09-17', 'McDougallll@outlook.com', '$2y$05$EMUSrECNIqBBNAjdeYlCauIMhaWXJalMHX8Yrp776Sqojm5TWy0vC', 'mountain (2).jpg', 'profile.jpg', 'waiting', '', 'unsubmitted', 'no posted', NULL, NULL),
(58, 'Gunn', 'McDougallll', 'Student', '2022-09-17', 'McDougallll@outlook.com', '$2y$05$fS9FkETH4YVIT071OUukTeg.yvgKZWlAKJ6B90.Tep6F8Kyj0lD4u', 'mountain (2).jpg', 'profile.jpg', 'waiting', '', 'unsubmitted', 'no posted', NULL, NULL),
(59, 'test', 'testtesttest', 'Landord', '2022-09-14', 'testtesttest@gmail.com', '$2y$05$f7j3CAF8H0ZgaHBv35dsmOA8izg424LqCXKVAY4zgbbiDnYAokddu', 'pic-3.jpg', 'pic-2.jpg', 'waiting', '', 'waiting', 'hi,I&#039;m test man.\r\nnice to meet you,guys', NULL, NULL),
(60, 'Gunnnn', 'Scraneyyy', 'Landlord', '2022-09-14', 'harukaharuka@gmail.com', '$2y$05$NwAtQfomITXqtrwPUmkOS.lZRiSQddfYGmnrxlBCLEn/4.eykslyu', 'pic-4.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(61, 'Gunnnn', 'jun', 'Student', '2022-09-23', 'testestes@docomo.com', '$2y$05$OQWUf9Gui6HSP1VBieG.oembI/1Hfx7myON53h/H7.7pCEu07U.R.', '', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(62, 'Gunnnn', 'jun', 'Student', '2022-09-23', 'testestes@docomo.com', '$2y$05$mIPWq9rqfzncBttPytW/.ePLiPTzzdmcj.yQO2BtFE.NdiDb472BK', '', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(63, 'Gunnnn', 'jun', 'Student', '2022-09-23', 'testestes@docomo.com', '$2y$05$b8id3LeBCcZwgKvBHIUkc.uIEFQvmUp0Pj1FBjEMmuygTwfoAoBum', 'pic-1.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(64, 'haruka', 'Scraneyyy', 'Landlord', '2022-09-15', 'haruharu@docomo.com', '$2y$05$9TNrctKvUGSpZtQe9BLW0eKHlBjUSk.vQISV7bMNf/qIwPwVKch1m', 'pic-1.jpg', '', '', '', '', 'no posted', NULL, NULL),
(65, 'test', 'Scraneyyy', 'Landlord', '2022-09-30', 'Scraneyyy@docomo.com', '$2y$05$N4AjmGBtYP6NBqsZLpFvYOifSHdGOspNv5gBQnlUB3hXTTKNY4NCW', 'pic-2.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(66, 'test', 'Scraneyyy', 'Landlord', '2022-09-30', 'Scraneyyy@docomo.com', '$2y$05$ET353Oo0Wzm5ZVeYUpdXoeJRDKEB.APOYiyHWGRp5M/r8aFPxYh1C', 'pic-2.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(67, 'test', 'Scraneyyy', 'Landlord', '2022-09-30', 'Scraneyyy@docomo.com', '$2y$05$NnWqpcQfF4tb5t5e5IVSbOk3EtBEiFcpUjRrEDIAXZakYAWmBIJga', 'pic-2.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(68, 'Gunnnn', 'gungungun', 'Admin', '2022-09-17', 'gungungun@mail.com', '$2y$05$osexMFH/TGED3xkpjNe8oeF4fFwIbk0ky0YMXxtzpz96Im8Fsm3Ru', 'profile.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(69, 'jay', 'McDougallll', 'Admin', '2022-09-22', 'McDougallll@outlook.com', '$2y$05$.8hy1XF3kOnTTfH2TubHHO7QIUoitJu3rTjZ3QlddpXKJMOrSDs8i', 'profile.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(70, 'test', 'ogata', 'Admin', '2022-09-28', 'ogataogata@mail.com', '$2y$05$rPAY7xWbzRj0K12xWdAxAeQB1PjomjTcswzj/wYbuUlNq/cI1Y3Ku', 'profile.jpg', '', '', '', '', 'no posted', NULL, NULL),
(71, 'test', 'ogata', 'Admin', '2022-09-28', 'ogataogata@mail.com', '$2y$05$G09DEiaENmw7awi0yaAPKOorTKMwYL/GE8WY14dMRnzXhBMXZ1KNy', 'profile.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(72, 'test', 'ogata', 'Admin', '2022-09-28', 'ogataogata@mail.com', '$2y$05$cnBQ2wsj1x7OAVFo/n0YH.m2JEznmYGu/FZvuvzx7KmWrK1Xopl6q', 'profile.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(73, 'test', 'ogata', 'Admin', '2022-09-28', 'ogataogata@mail.com', '$2y$05$z8haU5FuwvqbthLY.Fwg2ejWZpaeWwThn96zWdJGJEN2bBndArAJy', 'profile.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(74, 'test', 'ogata', 'Admin', '2022-09-28', 'ogataogata@mail.com', '$2y$05$x8BRQrw19LWlEKDglCVM6OQHNV.YRlJYfQNqVEAnd6zDKuLnDoos2', 'profile.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(75, 'test', 'ogata', 'Admin', '2022-09-28', 'ogataogata@mail.com', '$2y$05$NRrX0VsdGiOczCMT9kTXPe84mFoXNCSWSdl7nG06mTImXblGwgbW2', 'profile.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(76, 'test', 'ogata', 'Admin', '2022-09-28', 'ogataogata@mail.com', '$2y$05$//TSxnU.WZjSqGwXUZ7q5uy42RKSCT/hXvfFviJ5.WdFN5XKGvXw6', 'profile.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(77, 'admintest', 'a', 'Admin', '2022-09-14', 'admintest@mail.com', '$2y$05$I5tifxmft0xN0NL/2yk3/u9D23PEY.NywMeJQA8f4fDxmVH8pSd1y', 'profile.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(78, 'admintest', 'a', 'Admin', '2022-09-14', 'admintest@mail.com', '$2y$05$RqkmAh/4LLeph8.x7J2BAO4COegDKTdn1.lJMSXFYP6FcI0QfvWha', 'profile.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(79, 'Gunnnn', 'test', 'Admin', '2022-09-14', 'adminadmin@mail.com', '$2y$05$xv9PhCxvG2XgoaEkopel0OOE25f.4cFROescjGTiYaidEsy6mKTDO', 'profile.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(80, '09040613', 'test', 'Student', '2022-09-14', '09040613@dmail.com', '$2y$05$bwp9CgGtsFBvyr0EZ7CY4O9AU0N7EiAqhR0U.Wi60PlxKwD383tz6', 'sushi.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(81, 'haruka', 'muranaka', 'Student', '2022-09-15', 'muranaka@gmail.com', '$2y$05$grV485.rhniNXDUdvwhnBeEps8vxdgFVSo.iMclU8vQbAUxn24m9i', 'temple.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(82, 'haruka', 'test', 'Landlord', '2022-09-16', 'testtetete@gmail.com', '$2y$05$u8LuwN9yNAPBMVg2e2mk7exoVeuwpJDpnHypqoJks3n.hDOpzzNlS', 'cherry blossom.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(83, 'test', 'edword12', 'Landlord', '2022-09-29', 'edword12@gmail.com', '$2y$05$HJ3F0yn5s1Dct9yrtMQGEuRZwDGziSiT.HtOG8lxmqkE7CKKUdVHq', 'yukata.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(84, 'test', 'edword12', 'Landlord', '2022-09-29', 'edword12@gmail.com', '$2y$05$gcI.CaVgBGjsgKodqTz38.3htnt3/wPJRXcBqqGKCnJlhISEKe8/m', 'yukata.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(85, 'akane', 'morita', 'Student', '2022-09-15', 'moritamori@gmail.com', '$2y$05$xf5enVdwWzlCsIJixW3uOeGiDoNqVFER9QC/vPqr3fr8RTHTVWRQK', 'temple.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(86, 'Gunn', 'McDougallll', 'Student', '2022-09-16', 'McDougallll@mail.com', '$2y$05$xmhBggsgBcZZgc1e/yGs.OYJlgA1PL8fy3E/cuc5jgEHmZ77NWln.', 'tokyo.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(87, 'Gunn', 'McDougallll', 'Student', '2022-09-16', 'McDougallll@mail.com', '$2y$05$4195/aTXvTrHy8SV9FgKQOLu.WzL9gJPtKkJy1ue.d6tj89Y5hDv.', 'tokyo.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(88, 'test', 'McDougallll', 'Student', '2022-09-09', 'McDougallll@au.com', '$2y$05$bKJq90bDRM6lPvyoU2GuXOcRv0RD7D1xjjxNFw1/WAccz1TaKFG0i', 'sushi.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(89, 'test', 'Scraneyyy', 'Admin', '2022-09-01', 'Scraneyyy@au.com', '$2y$05$.2adrB16D8zf5I2tnzZ5..gzrmvZCyWtU//cvCzP6AwJFlCwpL6cy', 'winter.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(90, 'tomoka', 'arita', 'Student', '2022-09-03', 'ariari0123@icloud.com', '$2y$05$V7skv/wUzKHFNAvGe282B.ZMYZexFrcc576Z4aStBQv.Gl7URdLuC', 'temple.jpg', 'tokyo.jpg', 'waiting', '', 'waiting', 'Hi,I like Japanese culture', NULL, NULL),
(91, 'Gunnnnnnnn', 'jun', 'Student', '2022-09-02', 'Gunnnnnnnn@gmail.com', '$2y$05$p1Ivj3CaMHqPM4UIp36i4uaKcqJ/GGqW4mjbtuaxMo9HKUA3mq8jO', 'yukata.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(92, 'Gunnnnnnnn', 'jun', 'Student', '2022-09-02', 'Gunnnnnnnn@gmail.com', '$2y$05$5sQL5l5udJpBJVDhNlfsyeUikIvAQC/FC9ZMxTItn/Fg8Qvpe20Ka', 'yukata.jpg', '', 'unsubmitted', '', 'unsubmitted', 'no posted', NULL, NULL),
(93, 'Alyce', 'Lee', '', '0000-00-00', 'Alyce@table.com', '1234', '', '', '', '', '', '', NULL, NULL),
(94, 'Hitak', 'Lee', '', '0000-00-00', 'test@test.com', 'test123', '', '', '', '', '', '', NULL, NULL),
(95, 'Hitak', 'Lee', '', '0000-00-00', 'test@test.com', 'test123', '', '', '', '', '', '', NULL, NULL),
(96, 'Hitak', 'Lee', '', '0000-00-00', 'test@test.com', 'test123', '', '', '', '', '', '', NULL, NULL),
(97, 'Hitak', 'Lee', '', '0000-00-00', 'test@test.com', 'test1234', '', '', '', '', '', '', NULL, NULL),
(98, 'Hitak', 'Lee', '', '0000-00-00', 'test@test.com', '$2y$05$1CuzrpDzb2jr8.N8l/PMOOg/3rq4V3Ppr6js7OAAXafmwSVy2iqO6', '', '', '', '', '', '', NULL, NULL),
(99, 'test', 'test', '', '0000-00-00', 't@test.com', '$2y$05$RiuDN2bM2jQEZQ01EPx75undfIlcshiPS1edvhxMwcxpC2hslmdYS', '', '', '', '', '', '', '50.64.122.33', '2022-09-29 05:09:19'),
(100, 'Mamiko', 'pretty', '', '0000-00-00', 'ugly@test.com', '$2y$05$8vPTZXJjIiJ4SVotHOVS..SuSD3cPx0Uanoji5JB.ug96n8l/pyqG', '', '', '', '', '', '', '50.64.122.33', '2022-09-29 05:09:58'),
(101, 'Macerlo', 'lol', '', '0000-00-00', 'l@test.com', '$2y$05$lw0Yxl/jbgPRzGemwNnBnuALNM63vtwOpwAa49VsPE9Ft2.BIbZI2', '', '', '', '', '', '', '50.64.122.33', '2022-09-29 05:09:47'),
(102, 'Hitak', 'Lee', '', '0000-00-00', 'test@tests.com', '$2y$05$sRR0fsTju24Nmg4QZ70GKOe4qp4xoHmLV6.ieBzgIpliYKw98rNIS', 'default.jpg', '', '', '', '', '', '24.244.23.23', '2022-09-29 11:09:52'),
(103, 'li', 'li', '', '0000-00-00', 'te@test.com', '$2y$05$NKWZL8sBANugKoF4i381H.Hi8AGEMOL6k1Bga74r9P8xNsO3EBI5i', '', '', '', '', '', '', NULL, NULL),
(104, 'Hitak', 'Lee', '', '0000-00-00', 'test@ts.com', '$2y$05$YMhzNtqmLo0quRAps2RVIuK2nLsqES7CUEdAlZesgE3TD1/J1oiia', 'default.jpg', '', '', '', '', '', NULL, NULL),
(105, 'Alyce', 'Wonderland', '', '0000-00-00', 'aw@test.com', '$2y$05$6luW3f2Zj5MgHv.AKrFlu.LBxqU4NiupA5b4AHXo0pb0modTvJkpi', 'default.jpg', '', '', '', '', '', '24.244.23.23', '2022-09-29 11:09:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `img_tb`
--
ALTER TABLE `img_tb`
  ADD PRIMARY KEY (`img_id`);

--
-- Indexes for table `post_tb`
--
ALTER TABLE `post_tb`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `post_con` (`user_id`);

--
-- Indexes for table `user_tb`
--
ALTER TABLE `user_tb`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `img_tb`
--
ALTER TABLE `img_tb`
  MODIFY `img_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `post_tb`
--
ALTER TABLE `post_tb`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `user_tb`
--
ALTER TABLE `user_tb`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `post_tb`
--
ALTER TABLE `post_tb`
  ADD CONSTRAINT `post_con` FOREIGN KEY (`user_id`) REFERENCES `user_tb` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
