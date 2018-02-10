-- MySQL Script generated by MySQL Workbench
-- Mon Aug 14 20:34:06 2017
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema pioGroup
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `pioGroup` ;

-- -----------------------------------------------------
-- Schema pioGroup
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pioGroup` DEFAULT CHARACTER SET utf8 ;
USE `pioGroup` ;

-- -----------------------------------------------------
-- Table `pioGroup`.`TipoDocumento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pioGroup`.`TipoDocumento` ;

CREATE TABLE IF NOT EXISTS `pioGroup`.`TipoDocumento` (
  `id` INT NOT NULL,
  `abreviatura` VARCHAR(3) NOT NULL,
  `nombre` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pioGroup`.`AdministradoraEps`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pioGroup`.`AdministradoraEps` ;

CREATE TABLE IF NOT EXISTS `pioGroup`.`AdministradoraEps` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(20) NOT NULL,
  `nit` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pioGroup`.`Ciudad`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pioGroup`.`Ciudad` ;

CREATE TABLE IF NOT EXISTS `pioGroup`.`Ciudad` (
  `id` FLOAT NOT NULL,
  `nombre` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pioGroup`.`Genero`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pioGroup`.`Genero` ;

CREATE TABLE IF NOT EXISTS `pioGroup`.`Genero` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pioGroup`.`Pais`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pioGroup`.`Pais` ;

CREATE TABLE IF NOT EXISTS `pioGroup`.`Pais` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pioGroup`.`Estado`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pioGroup`.`Estado` ;

CREATE TABLE IF NOT EXISTS `pioGroup`.`Estado` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(15) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pioGroup`.`Departamento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pioGroup`.`Departamento` ;

CREATE TABLE IF NOT EXISTS `pioGroup`.`Departamento` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `idPais` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Departamento_Pais1_idx` (`idPais` ASC),
  CONSTRAINT `fk_Departamento_Pais1`
    FOREIGN KEY (`idPais`)
    REFERENCES `pioGroup`.`Pais` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pioGroup`.`Empleado`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pioGroup`.`Empleado` ;

CREATE TABLE IF NOT EXISTS `pioGroup`.`Empleado` (
  `identificacion` INT NOT NULL,
  `primerNombre` VARCHAR(20) NOT NULL,
  `segundoNombre` VARCHAR(20) NULL,
  `primerApellido` VARCHAR(20) NOT NULL,
  `segundoApellido` VARCHAR(20) NULL,
  `telefonoCelular` VARCHAR(15) NOT NULL,
  `telefonoFijo` VARCHAR(15) NULL,
  `direccion` VARCHAR(25) NOT NULL,
  `fechaNacimiento` DATE NOT NULL,
  `idTipoDocumento` INT NOT NULL,
  `idAdministradoraEps` INT NOT NULL,
  `idCiudad` FLOAT NOT NULL,
  `idGenero` INT NOT NULL,
  `idPais` INT NOT NULL,
  `idEstado` INT NOT NULL,
  `idDepartamento` INT NOT NULL,
  PRIMARY KEY (`identificacion`),
  INDEX `fk_Empleados_TipoDocumento1_idx` (`idTipoDocumento` ASC),
  INDEX `fk_Empleados_AdministradoraEps1_idx` (`idAdministradoraEps` ASC),
  INDEX `fk_Empleados_Ciudad1_idx` (`idCiudad` ASC),
  INDEX `fk_Empleados_Genero1_idx` (`idGenero` ASC),
  INDEX `fk_Empleados_Pais1_idx` (`idPais` ASC),
  INDEX `fk_Empleado_estado1_idx` (`idEstado` ASC),
  INDEX `fk_Empleado_Departamento1_idx` (`idDepartamento` ASC),
  CONSTRAINT `fk_Empleados_TipoDocumento1`
    FOREIGN KEY (`idTipoDocumento`)
    REFERENCES `pioGroup`.`TipoDocumento` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Empleados_AdministradoraEps1`
    FOREIGN KEY (`idAdministradoraEps`)
    REFERENCES `pioGroup`.`AdministradoraEps` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Empleados_Ciudad1`
    FOREIGN KEY (`idCiudad`)
    REFERENCES `pioGroup`.`Ciudad` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Empleados_Genero1`
    FOREIGN KEY (`idGenero`)
    REFERENCES `pioGroup`.`Genero` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Empleados_Pais1`
    FOREIGN KEY (`idPais`)
    REFERENCES `pioGroup`.`Pais` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Empleado_estado1`
    FOREIGN KEY (`idEstado`)
    REFERENCES `pioGroup`.`Estado` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Empleado_Departamento1`
    FOREIGN KEY (`idDepartamento`)
    REFERENCES `pioGroup`.`Departamento` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pioGroup`.`Empresa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pioGroup`.`Empresa` ;

CREATE TABLE IF NOT EXISTS `pioGroup`.`Empresa` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(30) NOT NULL,
  `nit` VARCHAR(20) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pioGroup`.`Granja`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pioGroup`.`Granja` ;

CREATE TABLE IF NOT EXISTS `pioGroup`.`Granja` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(30) NOT NULL,
  `idEmpresa` INT NOT NULL,
  `idPais` INT NOT NULL,
  `idCiudad` FLOAT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Granja_Empresa1_idx` (`idEmpresa` ASC),
  INDEX `fk_Granja_Pais1_idx` (`idPais` ASC),
  INDEX `fk_Granja_Ciudad1_idx` (`idCiudad` ASC),
  CONSTRAINT `fk_Granja_Empresa1`
    FOREIGN KEY (`idEmpresa`)
    REFERENCES `pioGroup`.`Empresa` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Granja_Pais1`
    FOREIGN KEY (`idPais`)
    REFERENCES `pioGroup`.`Pais` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Granja_Ciudad1`
    FOREIGN KEY (`idCiudad`)
    REFERENCES `pioGroup`.`Ciudad` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pioGroup`.`Galpon`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pioGroup`.`Galpon` ;

CREATE TABLE IF NOT EXISTS `pioGroup`.`Galpon` (
  `id` INT NOT NULL,
  `idGranja` INT NOT NULL,
  `nombre` VARCHAR(20) NOT NULL,
  `dimension` INT NOT NULL,
  `clima` INT NOT NULL,
  `estado` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Galpon_Granja1_idx` (`idGranja` ASC),
  CONSTRAINT `fk_Galpon_Granja1`
    FOREIGN KEY (`idGranja`)
    REFERENCES `pioGroup`.`Granja` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pioGroup`.`Perfil`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pioGroup`.`Perfil` ;

CREATE TABLE IF NOT EXISTS `pioGroup`.`Perfil` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pioGroup`.`LotePollo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pioGroup`.`LotePollo` ;

CREATE TABLE IF NOT EXISTS `pioGroup`.`LotePollo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fechaIngreso` DATE NULL,
  `cantidadPollo` VARCHAR(45) NULL,
  `cantidadMacho` INT NULL,
  `cantidadHembra` VARCHAR(45) NULL,
  `fechaSalida` DATE NULL,
  `LotePollocol` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pioGroup`.`TipoTecho`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pioGroup`.`TipoTecho` ;

CREATE TABLE IF NOT EXISTS `pioGroup`.`TipoTecho` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(20) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pioGroup`.`TipoPiso`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pioGroup`.`TipoPiso` ;

CREATE TABLE IF NOT EXISTS `pioGroup`.`TipoPiso` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(20) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pioGroup`.`CkInstalacion`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pioGroup`.`CkInstalacion` ;

CREATE TABLE IF NOT EXISTS `pioGroup`.`CkInstalacion` (
  `id` INT NOT NULL,
  `fechaLista` DATE NOT NULL,
  `idGalpon` INT NOT NULL,
  `paredBloque` INT NOT NULL,
  `paredMalla` INT NOT NULL,
  `idTipoTecho` INT NOT NULL,
  `idTipoPiso` INT NOT NULL,
  `sobreTecho` INT NOT NULL,
  `distanciaGalpon` INT NOT NULL,
  `pocetaDesinfeccion` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ckInstalacion_Galpon1_idx` (`idGalpon` ASC),
  INDEX `fk_ckInstalacion_tipoTecho1_idx` (`idTipoTecho` ASC),
  INDEX `fk_ckInstalacion_tipoPiso1_idx` (`idTipoPiso` ASC),
  CONSTRAINT `fk_ckInstalacion_Galpon1`
    FOREIGN KEY (`idGalpon`)
    REFERENCES `pioGroup`.`Galpon` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_ckInstalacion_tipoTecho1`
    FOREIGN KEY (`idTipoTecho`)
    REFERENCES `pioGroup`.`TipoTecho` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_ckInstalacion_tipoPiso1`
    FOREIGN KEY (`idTipoPiso`)
    REFERENCES `pioGroup`.`TipoPiso` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pioGroup`.`CkEquipos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pioGroup`.`CkEquipos` ;

CREATE TABLE IF NOT EXISTS `pioGroup`.`CkEquipos` (
  `id` INT NOT NULL,
  `fechaLista` INT NULL,
  `idGalpon` INT NOT NULL,
  `bebedorManual` INT NULL,
  `bebedorAutomatico` INT NULL,
  `bandejaRecibimiento` INT NULL,
  `criadora` INT NULL,
  `alturaCriadora` INT NULL,
  `guardaCriadora` INT NULL,
  `bascula` INT NULL,
  `cortinas` INT NULL,
  `termometro` INT NULL,
  `flameador` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ckEquipos_Galpon1_idx` (`idGalpon` ASC),
  CONSTRAINT `fk_ckEquipos_Galpon1`
    FOREIGN KEY (`idGalpon`)
    REFERENCES `pioGroup`.`Galpon` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pioGroup`.`CkPreparacionGalpon`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pioGroup`.`CkPreparacionGalpon` ;

CREATE TABLE IF NOT EXISTS `pioGroup`.`CkPreparacionGalpon` (
  `id` INT NOT NULL,
  `idGalpon` INT NOT NULL,
  `ceboRoedor` INT NULL,
  `fechaLista` DATE NULL,
  `limpiezaComedor` INT NULL,
  `limpiezaGallinaza` INT NULL,
  `limpiezaTecho` INT NULL,
  `limpiezaPared` INT NULL,
  `limpiezaMalla` INT NULL,
  `limpiezaExterior` INT NULL,
  `desinfectacionQuimica` INT NULL,
  `desinfectacionFisica` INT NULL,
  `fumigacion` INT NULL,
  `desinfectarTanques` INT NULL,
  `encortinarGalpon` INT NULL,
  `instalacionCriadora` INT NULL,
  `instalacionGuardaCriadora` INT NULL,
  `isntalacionTermometro` INT NULL,
  `instalacionBandejaRecibimiento` INT NULL,
  `instalarPocetaDesinfeccion` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ckPreparacionGalpon_Galpon1_idx` (`idGalpon` ASC),
  CONSTRAINT `fk_ckPreparacionGalpon_Galpon1`
    FOREIGN KEY (`idGalpon`)
    REFERENCES `pioGroup`.`Galpon` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pioGroup`.`ProveedorPollo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pioGroup`.`ProveedorPollo` ;

CREATE TABLE IF NOT EXISTS `pioGroup`.`ProveedorPollo` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `nit` VARCHAR(45) NULL,
  `numero` VARCHAR(20) NULL,
  `contato` VARCHAR(30) NULL,
  `direccion` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pioGroup`.`LotePolloGalpon`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pioGroup`.`LotePolloGalpon` ;

CREATE TABLE IF NOT EXISTS `pioGroup`.`LotePolloGalpon` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `idLotePollo` INT NOT NULL,
  `idGalpon` INT NOT NULL,
  `fechaIngreso` DATE NULL,
  `cantidadEntrante` INT NULL,
  `cantidadSaliente` INT NULL,
  `idProveedorPollo` INT NOT NULL,
  INDEX `fk_lotePolloGalpon_LotePollo1_idx` (`idLotePollo` ASC),
  INDEX `fk_lotePolloGalpon_Galpon1_idx` (`idGalpon` ASC),
  INDEX `fk_lotePolloGalpon_ProveedorPollos1_idx` (`idProveedorPollo` ASC),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_lotePolloGalpon_LotePollo1`
    FOREIGN KEY (`idLotePollo`)
    REFERENCES `pioGroup`.`LotePollo` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_lotePolloGalpon_Galpon1`
    FOREIGN KEY (`idGalpon`)
    REFERENCES `pioGroup`.`Galpon` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_lotePolloGalpon_ProveedorPollos1`
    FOREIGN KEY (`idProveedorPollo`)
    REFERENCES `pioGroup`.`ProveedorPollo` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pioGroup`.`Insumos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pioGroup`.`Insumos` ;

CREATE TABLE IF NOT EXISTS `pioGroup`.`Insumos` (
  `id` INT NOT NULL,
  `nombreInsumo` VARCHAR(45) NULL,
  `fechaCompra` DATETIME NULL,
  `cantidad` FLOAT NULL,
  `fechaFinal` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pioGroup`.`InsumosLotePollo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pioGroup`.`InsumosLotePollo` ;

CREATE TABLE IF NOT EXISTS `pioGroup`.`InsumosLotePollo` (
  `id` INT NOT NULL,
  `idInsumos` INT NOT NULL,
  `idLotePollo` INT NOT NULL,
  `cantidad` FLOAT NULL,
  `fecha` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_InsumosLotePollo_Insumos1_idx` (`idInsumos` ASC),
  INDEX `fk_InsumosLotePollo_LotePollo1_idx` (`idLotePollo` ASC),
  CONSTRAINT `fk_InsumosLotePollo_Insumos1`
    FOREIGN KEY (`idInsumos`)
    REFERENCES `pioGroup`.`Insumos` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_InsumosLotePollo_LotePollo1`
    FOREIGN KEY (`idLotePollo`)
    REFERENCES `pioGroup`.`LotePollo` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pioGroup`.`Usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pioGroup`.`Usuario` ;

CREATE TABLE IF NOT EXISTS `pioGroup`.`Usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `contrasena` VARCHAR(45) NOT NULL,
  `ultimoLogin` DATETIME NOT NULL,
  `intentos` INT NOT NULL,
  `idEmpleado` INT NOT NULL,
  `idPerfil` INT NOT NULL,
  INDEX `fk_Usuario_Empleado1_idx` (`idEmpleado` ASC),
  INDEX `fk_Usuario_Perfil1_idx` (`idPerfil` ASC),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_Usuario_Empleado1`
    FOREIGN KEY (`idEmpleado`)
    REFERENCES `pioGroup`.`Empleado` (`identificacion`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Usuario_Perfil1`
    FOREIGN KEY (`idPerfil`)
    REFERENCES `pioGroup`.`Perfil` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pioGroup`.`Historial`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pioGroup`.`Historial` ;

CREATE TABLE IF NOT EXISTS `pioGroup`.`Historial` (
  `id` INT NOT NULL,
  `fecha` DATETIME NULL,
  `modulo` VARCHAR(45) NULL,
  `tabla` VARCHAR(45) NULL,
  `accion` VARCHAR(45) NULL,
  `textoAnterior` TEXT NULL,
  `textoNuevo` TEXT NULL,
  `idEmpleado` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Historial_Empleado1_idx` (`idEmpleado` ASC),
  CONSTRAINT `fk_Historial_Empleado1`
    FOREIGN KEY (`idEmpleado`)
    REFERENCES `pioGroup`.`Empleado` (`identificacion`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;