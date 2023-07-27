use db_fastwork;

INSERT IGNORE INTO categories (name)
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

INSERT INTO up (email, password, name, lastname, dni, province, city, tel, link, about_me, gender, birthdate, auth_number, img, category_id)
VALUES
('ana.lopez@example.com', 'contra_segura123', 'Ana', 'López', 34123456, 'Buenos Aires', 'CABA', '11-2345-6789', 'https://www.analopez.com', 'Electricista matriculada con experiencia en instalaciones eléctricas residenciales.', 'Female', '1990-06-15', 'ABC123', 'ana_lopez.jpg', 1),
('juan.gomez@example.com', 'clave_segura789', 'Juan', 'Gómez', 40234567, 'Buenos Aires', 'La Plata', '221-345-6789', 'https://www.juangomez.com', 'Plomero con amplia trayectoria y servicio de alta calidad.', 'Male', '1985-09-25', 'DEF456', 'juan_gomez.jpg', 2),
('carlos.martinez@example.com', 'segura_password', 'Carlos', 'Martínez', 49345678, 'Córdoba', 'Córdoba', '351-456-7890', 'https://www.carlosmartinez.com', 'Carpintero experto en muebles a medida y diseño de interiores.', 'Male', '1980-11-01', 'GHI567', 'carlos_martinez.jpg', 3),
('maria.fernandez@example.com', 'clave_firme123', 'María', 'Fernández', 76456789, 'Santa Fe', 'Rosario', '341-234-5678', 'https://www.mariafernandez.com', 'Jardinera profesional con pasión por el diseño de jardines.', 'Female', '1992-07-20', 'JKL890', 'maria_fernandez.jpg', 7),
('pedro.romero@example.com', 'password_fuerte', 'Pedro', 'Romero', 80567890, 'Tucumán', 'San Miguel de Tucumán', '381-456-7890', 'https://www.pedroromero.com', 'Especialista en sistemas de seguridad, brindando soluciones efectivas.', 'Male', '1995-03-10', 'MNO901', 'pedro_romero.jpg', 9),
('laura.gonzalez@example.com', 'contrasena123', 'Laura', 'González', 85678901, 'Buenos Aires', 'Quilmes', '11-9876-5432', 'https://www.lauragonzalez.com', 'Gasista matriculada con amplia experiencia en reparaciones y mantenimiento.', 'Female', '1984-06-20', 'PQR234', 'laura_gonzalez.jpg', 6),
('lucas.sanchez@example.com', 'clave_segura456', 'Lucas', 'Sánchez', 46789012, 'Córdoba', 'Río Cuarto', '351-765-4321', 'https://www.lucassanchez.com', 'Especialista en aires acondicionados y climatización.', 'Male', '1991-09-10', 'STU345', 'lucas_sanchez.jpg', 8),
('sofia.fernandez@example.com', 'password_fuerte123', 'Sofía', 'Fernández', 57890123, 'Santa Fe', 'Santa Fe', '341-876-5432', 'https://www.sofiafernandez.com', 'Cerrajera profesional con servicios de urgencias las 24 horas.', 'Female', '1987-12-05', 'VWX456', 'sofia_fernandez.jpg', 10),
('marcos.lopez@example.com', 'contrasena_firme123', 'Marcos', 'López', 58901234, 'Mendoza', 'Mendoza', '261-987-6543', 'https://www.marcoslopez.com', 'Experto vidriero con habilidades en instalaciones de vidrios y espejos.', 'Male', '1993-02-15', 'YZA567', 'marcos_lopez.jpg', 12),
('valentina.martinez@example.com', 'clave_segura89', 'Valentina', 'Martínez', 69012345, 'Neuquén', 'Neuquén', '299-876-5432', 'https://www.valentinamartinez.com', 'Instaladora de pisos con atención personalizada para cada cliente.', 'Female', '1990-08-30', 'BCD678', 'valentina_martinez.jpg', 14),
('felipe.gomez@example.com', 'clave_firme456', 'Felipe', 'Gómez', 71234567, 'Tucumán', 'San Miguel de Tucumán', '381-765-4321', 'https://www.felipegomez.com', 'Especialista en remodelación y diseño de interiores.', 'Male', '1989-04-25', 'EFG789', 'felipe_gomez.jpg', 15),
('carolina.rodriguez@example.com', 'clave1234', 'Carolina', 'Rodríguez', 82345678, 'Buenos Aires', 'Avellaneda', '11-8765-4321', 'https://www.carolinarodriguez.com', 'Jardinera apasionada por la creación de espacios verdes.', 'Female', '1986-07-12', 'HIJ890', 'carolina_rodriguez.jpg', 7),
('pablo.lopez@example.com', 'contrasena789', 'Pablo', 'López', 93456789, 'Córdoba', 'Villa María', '351-987-6543', 'https://www.pablolopez.com', 'Técnico en seguridad informática con amplia experiencia.', 'Male', '1982-10-28', 'KLM901', 'pablo_lopez.jpg', 14),
('andrea.suarez@example.com', 'pass1234', 'Andrea', 'Suárez', 14567890, 'Santa Fe', 'Rosario', '341-765-4321', 'https://www.andreasuarez.com', 'Gasista matriculada con servicio de instalación y mantenimiento.', 'Female', '1994-03-05', 'NOP012', 'andrea_suarez.jpg', 6),
('luis.molina@example.com', 'clave7890', 'Luis', 'Molina', 25678901, 'Mendoza', 'Godoy Cruz', '261-876-5432', 'https://www.luismolina.com', 'Especialista en instalaciones eléctricas y reparaciones.', 'Male', '1993-12-20', 'QRS123', 'luis_molina.jpg', 1),
('sara.gutierrez@example.com', 'pass7890', 'Sara', 'Gutiérrez', 36789012, 'Neuquén', 'San Martín de los Andes', '299-987-6543', 'https://www.saragutierrez.com', 'Techadora profesional con experiencia en construcciones de techo.', 'Female', '1988-05-15', 'TUV234', 'sara_gutierrez.jpg', 10);