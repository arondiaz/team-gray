CREATE DATABASE IF NOT EXISTS db_fastwork; 
USE db_fastwork;

CREATE TABLE IF NOT EXISTS `professional_user` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `email` VARCHAR(100) UNIQUE NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `lastname` VARCHAR(50) NOT NULL,
  `dni` VARCHAR(20) NOT NULL,
  `province` VARCHAR(50) NOT NULL,
  `city` VARCHAR(50) NOT NULL,
  `tel` VARCHAR(50) NOT NULL,
  `link` VARCHAR(300),
  `about_me` TEXT,
  `gender` ENUM('Male', 'Female', 'Other') NOT NULL,
  `birthdate` DATE NOT NULL,
  `auth_number` VARCHAR(50),
  `img` TEXT DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `category_id` INT NOT NULL
);

CREATE TABLE IF NOT EXISTS `categories` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` ENUM ('Electricista', 'Plomero', 'Carpintero', 'Pintor', 'Albañil', 'Gasista', 'Jardinero', 'Técnico en aire acondicionado', 'Cerrajero', 'Techador', 'Instalador de sistema de seguridad', 'Vidriero', 'Instalador de pisos', 'Fontanero', 'Remodelador de interiores', 'Soporte técnico en informática') NOT NULL UNIQUE
);

ALTER TABLE `professional_user` ADD FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);