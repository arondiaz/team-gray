use db_fastwork;

INSERT INTO CATEGORIES( name ) 
VALUES
	('Electricista'),
	('Plomero'),
	('Carpintero'),
	('Pintor'),
	('Albañil'),
	('Gasista'),
	('Jardinero'),
	('Técnico en aire acondicionado'),
	('Cerrajero'),
	('Techador'),
	('Instalador de sistema de seguridad'),
	('Vidriero'),
	('Instalador de pisos'),
	('Fontanero'),
	('Remodelador de interiores'),
	('Soporte técnico en informática');

INSERT INTO `up` (`email`, `password`, `name`, `lastname`, `dni`, `province`, `city`, `tel`, `link`, `about_me`, `gender`, `birthdate`, `auth_number`, `img`, `category`)
VALUES
('juan.perez@example.com', 'contraseña1', 'Juan', 'Pérez', 12345678, 'Provincia 1', 'Ciudad 1', '123456789', 'https://link1.com', 'Soy Juan Pérez, un entusiasta de la tecnología.', 'Male', '1990-01-01', 'AUTH001', 'imagen1.jpg', 1),
('maria.gomez@example.com', 'contraseña2', 'María', 'Gómez', 23456789, 'Provincia 2', 'Ciudad 2', '987654321', 'https://link2.com', 'Hola, soy María Gómez y me encanta viajar.', 'Female', '1985-05-10', 'AUTH002', 'imagen2.jpg', 2),
('carlos.gonzalez@example.com', 'contraseña3', 'Carlos', 'González', 34567890, 'Provincia 3', 'Ciudad 3', '456789123', 'https://link3.com', '¡Hola! Soy Carlos González y me apasiona la fotografía.', 'Male', '1995-11-20', 'AUTH003', 'imagen3.jpg', 1),
('laura.fernandez@example.com', 'contraseña4', 'Laura', 'Fernández', 45678901, 'Provincia 2', 'Ciudad 2', '987654321', 'https://link4.com', 'Ingeniera de profesión y amante de los deportes extremos.', 'Female', '1992-07-15', 'AUTH004', 'imagen4.jpg', 3),
('pedro.ramirez@example.com', 'contraseña5', 'Pedro', 'Ramírez', 56789012, 'Provincia 4', 'Ciudad 4', '654321987', 'https://link5.com', 'Hola, soy Pedro Ramírez y disfruto leer y escribir poesía.', 'Male', '1988-04-03', 'AUTH005', 'imagen5.jpg', 2),
('ana.lopez@example.com', 'contraseña6', 'Ana', 'López', 67890123, 'Provincia 3', 'Ciudad 3', '789123456', 'https://link6.com', '¡Hola a todos! Soy Ana López y me encanta el arte.', 'Female', '1993-12-25', 'AUTH006', 'imagen6.jpg', 4),
('jorge.martinez@example.com', 'contraseña7', 'Jorge', 'Martínez', 78901234, 'Provincia 5', 'Ciudad 5', '321987654', 'https://link7.com', 'Soy Jorge Martínez, un apasionado de la tecnología y los videojuegos.', 'Male', '1987-09-08', 'AUTH007', 'imagen7.jpg', 3),
('silvia.torres@example.com', 'contraseña8', 'Silvia', 'Torres', 89012345, 'Provincia 1', 'Ciudad 1', '987654321', 'https://link8.com', '¡Hola a todos! Soy Silvia Torres y me encanta la naturaleza.', 'Female', '1991-06-12', 'AUTH008', 'imagen8.jpg', 1),
('daniel.vega@example.com', 'contraseña9', 'Daniel', 'Vega', 90123456, 'Provincia 4', 'Ciudad 4', '123456789', 'https://link9.com', 'Soy Daniel Vega y disfruto de la música y la fotografía.', 'Male', '1994-03-27', 'AUTH009', 'imagen9.jpg', 2),
('lucia.sanchez@example.com', 'contraseña10', 'Lucía', 'Sánchez', 12345678, 'Provincia 2', 'Ciudad 2', '654321987', 'https://link10.com', '¡Hola a todos! Soy Lucía Sánchez y me apasiona la cocina.', 'Female', '1989-02-14', 'AUTH010', 'imagen10.jpg', 5);

