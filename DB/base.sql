CREATE DATABASE IF NOT EXISTS empresa_180644;
USE empresa_180644;
CREATE TABLE empleados(
id INT(11) NOT NULL AUTO_INCREMENT,
nombre VARCHAR(45) DEFAULT NULL,
salario decimal(12,2) DEFAULT 0.0,
primary key (id)
);

DESCRIBE empleados;

INSERT INTO empleados values 
(default, 'Ryan Ray', 20000.00),
(default, 'Joe McMilan', 40000.00),
(default, 'Jhon Carter', 50000.00);

SELECT *FROM empleados;
