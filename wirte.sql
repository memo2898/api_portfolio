
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema portfolio_bd
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema portfolio_bd
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `portfolio_bd` DEFAULT CHARACTER SET utf8mb4 ;
USE `portfolio_bd` ;

-- -----------------------------------------------------
-- Table `portfolio_bd`.`tblm_experiencias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_bd`.`tblm_experiencias` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `posicion` VARCHAR(70) NOT NULL,
  `institucion` VARCHAR(70) NOT NULL,
  `pais` VARCHAR(70) NOT NULL,
  `descripcion` LONGTEXT NOT NULL,
  `fecha_inicio` DATE NOT NULL,
  `fecha_fin` DATE NULL DEFAULT NULL,
  `agregado_por` VARCHAR(45) NOT NULL,
  `agregado_en` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `modificado_por` VARCHAR(45) NULL DEFAULT NULL,
  `modificado_en` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `portfolio_bd`.`tblm_proyectos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_bd`.`tblm_proyectos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `id_experiencia` INT(11) NULL,
  `nombre` VARCHAR(200) NOT NULL,
  `descripcion` LONGTEXT NOT NULL,
  `portada` LONGTEXT NOT NULL,
  `agregado_por` VARCHAR(45) NOT NULL,
  `agregado_en` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `modificado_por` VARCHAR(45) NULL DEFAULT NULL,
  `modificado_en` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_id_exp_pr_idx` (`id_experiencia`),
  CONSTRAINT `fk_id_exp_pr`
    FOREIGN KEY (`id_experiencia`)
    REFERENCES `portfolio_bd`.`tblm_experiencias` (`id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `portfolio_bd`.`tblm_btn_opciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_bd`.`tblm_btn_opciones` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `label` VARCHAR(45) NOT NULL,
  `icono` LONGTEXT NOT NULL,
  `agregado_por` VARCHAR(45) NOT NULL,
  `agregado_en` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `modificado_por` VARCHAR(45) NULL DEFAULT NULL,
  `modificado_en` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `portfolio_bd`.`tbl_btns_x_proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_bd`.`tbl_btns_x_proyecto` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `id_proyecto` INT(11) NOT NULL,
  `id_btn` INT(11) NOT NULL,
  `src` LONGTEXT NOT NULL,
  `agregado_por` VARCHAR(45) NOT NULL,
  `agregado_en` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `modificado_por` VARCHAR(45) NULL DEFAULT NULL,
  `modificado_en` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_btn_pyect_idx` (`id_proyecto`),
  INDEX `fk_btns_idx` (`id_btn`),
  CONSTRAINT `fk_btn_pyect`
    FOREIGN KEY (`id_proyecto`)
    REFERENCES `portfolio_bd`.`tblm_proyectos` (`id`)
    ON UPDATE CASCADE,
  CONSTRAINT `fk_btns`
    FOREIGN KEY (`id_btn`)
    REFERENCES `portfolio_bd`.`tblm_btn_opciones` (`id`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `portfolio_bd`.`tblm_tipos_habilidades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_bd`.`tblm_tipos_habilidades` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NULL DEFAULT NULL,
  `agregado_por` VARCHAR(45) NOT NULL,
  `agregado_en` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `modificado_por` VARCHAR(45) NULL DEFAULT NULL,
  `modificado_en` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `portfolio_bd`.`tblm_habilidades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_bd`.`tblm_habilidades` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `id_tipo_habilidad` INT(11) NOT NULL,
  `habilidad` VARCHAR(75) NOT NULL,
  `descripcion` LONGTEXT NOT NULL,
  `imagen` LONGTEXT NOT NULL,
  `imagen_alt` LONGTEXT NOT NULL,
  `tiempo_inicio_aprendizaje` DATE NOT NULL,
  `agregado_por` VARCHAR(45) NOT NULL,
  `agregado_en` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `modificado_por` VARCHAR(45) NULL DEFAULT NULL,
  `modificado_en` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_tipo_hab_idx` (`id_tipo_habilidad`),
  CONSTRAINT `fk_tipo_hab`
    FOREIGN KEY (`id_tipo_habilidad`)
    REFERENCES `portfolio_bd`.`tblm_tipos_habilidades` (`id`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `portfolio_bd`.`tbld_habilidades_x_proyectos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_bd`.`tbld_habilidades_x_proyectos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `id_proyecto` INT(11) NOT NULL,
  `id_habilidad` INT(11) NOT NULL,
  `agregado_por` VARCHAR(45) NOT NULL,
  `agregado_en` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `modificado_por` VARCHAR(45) NULL DEFAULT NULL,
  `modificado_en` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_hab_idx` (`id_habilidad`),
  INDEX `fk_proy_idx` (`id_proyecto`),
  CONSTRAINT `fk_hab`
    FOREIGN KEY (`id_habilidad`)
    REFERENCES `portfolio_bd`.`tblm_habilidades` (`id`)
    ON UPDATE CASCADE,
  CONSTRAINT `fk_proy`
    FOREIGN KEY (`id_proyecto`)
    REFERENCES `portfolio_bd`.`tblm_proyectos` (`id`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `portfolio_bd`.`tlbm_bloques_multimedia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_bd`.`tlbm_bloques_multimedia` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `index` INT(11) NOT NULL,
  `id_proyecto` INT(11) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `agregado_por` VARCHAR(45) NOT NULL,
  `agregado_en` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `modificado_por` VARCHAR(45) NULL DEFAULT NULL,
  `modificado_en` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_pr_cat_multimedia_idx` (`id_proyecto`),
  CONSTRAINT `fk_pr_cat_multimedia`
    FOREIGN KEY (`id_proyecto`)
    REFERENCES `portfolio_bd`.`tblm_proyectos` (`id`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `portfolio_bd`.`tblm_contenido_multimedia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_bd`.`tblm_contenido_multimedia` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `id_categoria` INT(11) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `contenido` LONGTEXT NOT NULL,
  `descripcion` LONGTEXT NOT NULL,
  `agregado_por` VARCHAR(45) NOT NULL,
  `agregado_en` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `modificado_por` VARCHAR(45) NULL DEFAULT NULL,
  `modificado_en` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cat_mul_mult_idx` (`id_categoria`),
  CONSTRAINT `fk_cat_mul_mult`
    FOREIGN KEY (`id_categoria`)
    REFERENCES `portfolio_bd`.`tlbm_bloques_multimedia` (`id`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `portfolio_bd`.`tblm_educacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_bd`.`tblm_educacion` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `carrera` VARCHAR(75) NOT NULL,
  `institucion` VARCHAR(70) NOT NULL,
  `pais` VARCHAR(70) NOT NULL,
  `descripcion` LONGTEXT NOT NULL,
  `fecha_inicio` DATE NOT NULL,
  `fecha_fin` DATE NULL DEFAULT NULL,
  `agregado_por` VARCHAR(45) NOT NULL,
  `agregado_en` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `modificado_por` VARCHAR(45) NULL DEFAULT NULL,
  `modificado_en` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `portfolio_bd`.`tblm_usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_bd`.`tblm_usuarios` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `nombres` VARCHAR(100) NOT NULL,
  `apellidos` VARCHAR(100) NOT NULL,
  `agregado_por` VARCHAR(45) NOT NULL,
  `agregado_en` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `modificado_por` VARCHAR(45) NULL DEFAULT NULL,
  `modificado_en` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
