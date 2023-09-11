CREATE DATABASE IF NOT EXISTS db_fastwork; 
USE db_fastwork;

CREATE TABLE IF NOT EXISTS `professional_user` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `email` VARCHAR(100) UNIQUE NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `dni` VARCHAR(20) NOT NULL,
  `province` VARCHAR(50) NOT NULL,
  `city` VARCHAR(50) NOT NULL,
  `tel` VARCHAR(50) NOT NULL,
  `link` VARCHAR(300),
  `about_me` TEXT,
  `gender` ENUM('Male', 'Female', 'Non-binary') NOT NULL,
  `birth_date` DATE NOT NULL,
  `auth_number` VARCHAR(50),
  `img` TEXT DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `category_id` INT NOT NULL,
  `state` BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS `categories` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR (50) NOT NULL UNIQUE
);

ALTER TABLE `professional_user` ADD FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);