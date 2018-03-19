# ************************************************************
# Sequel Pro SQL dump
# Versión 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.5-10.1.30-MariaDB)
# Base de datos: piogroup
# Tiempo de Generación: 2018-03-17 12:49:41 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Volcado de tabla administradoraeps
# ------------------------------------------------------------

CREATE TABLE `administradoraeps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL DEFAULT '',
  `nit` varchar(20) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `administradoraeps` WRITE;
/*!40000 ALTER TABLE `administradoraeps` DISABLE KEYS */;

INSERT INTO `administradoraeps` (`id`, `nombre`, `nit`)
VALUES
	(1,'Empresas Publicas de Medellin Departamento Médico','890904996'),
	(2,'Fondo de Pasivo Social de Ferrocarriles','800112806'),
	(3,'Aliansalud EPS','830113831'),
	(4,'Salud Total S.A','800130907'),
	(5,'Cafesalud EPS','800140949'),
	(6,'E.P.S Sanitas','800251440'),
	(7,'Compensar Entidad Promotora de Salud','860066942'),
	(8,'Comfenalco Antioquia EPS','890900842'),
	(9,'EPS Sura','800088702'),
	(10,'Comfenalco Valle EPS','890303093'),
	(11,'Saludcoop E.P.S','800250119'),
	(12,'Humana Vivir EPS','830006404'),
	(13,'Salud Colpatria S.A. EPS','860512237'),
	(14,'Coomeva EPS','805000427'),
	(15,'Famisanar','830003564'),
	(16,'Servicio Occidental de Salud S.O.S. S.A.','805001157'),
	(17,'Cruz Blanca S.A','830009783'),
	(18,'Solidaria de Salud Solsalud S.A','804001273'),
	(19,'Saludvida S.A EPS','830074184'),
	(20,'Nueva EPS','900156264'),
	(21,'Multimedicas Salud Con Calidad EPS S.A.','900112778'),
	(22,'Golden Group EPS','900074992');

/*!40000 ALTER TABLE `administradoraeps` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla ciudad
# ------------------------------------------------------------

CREATE TABLE `ciudad` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `ciudad` WRITE;
/*!40000 ALTER TABLE `ciudad` DISABLE KEYS */;

INSERT INTO `ciudad` (`id`, `nombre`)
VALUES
	(5001,'medellín'),
	(5004,'abriaquí'),
	(5021,'alejandría'),
	(5030,'amagá'),
	(5031,'amalfi'),
	(5034,'andes'),
	(5036,'angelópolis'),
	(5038,'angostura'),
	(5040,'anorí'),
	(5042,'santa Fé De Antioqui'),
	(5044,'anzá'),
	(5045,'apartadó'),
	(5051,'arboletes'),
	(5059,'armenia'),
	(5079,'barbosa'),
	(5086,'belmira'),
	(5088,'bello'),
	(5093,'betulia'),
	(5101,'ciudad Bolívar'),
	(5107,'briceño'),
	(5113,'buriticá'),
	(5120,'cáceres'),
	(5125,'caicedo'),
	(5129,'caldas'),
	(5134,'campamento'),
	(5138,'cañasgordas'),
	(5142,'caracolí'),
	(5145,'caramanta'),
	(5147,'carepa'),
	(5148,'el Carmen De Viboral'),
	(5150,'carolina'),
	(5154,'caucasia'),
	(5172,'chigorodó'),
	(5190,'cisneros'),
	(5197,'cocorná'),
	(5206,'concepción'),
	(5209,'concordia'),
	(5212,'copacabana'),
	(5234,'dabeiba'),
	(5237,'donmatías'),
	(5240,'ebéjico'),
	(5250,'el Bagre'),
	(5264,'entrerríos'),
	(5266,'envigado'),
	(5284,'frontino'),
	(5306,'giraldo'),
	(5308,'girardota'),
	(5310,'gómez Plata'),
	(5313,'granada'),
	(5315,'guadalupe'),
	(5318,'guarne'),
	(5321,'guatapé'),
	(5347,'heliconia'),
	(5353,'hispania'),
	(5360,'itagüí'),
	(5361,'ituango'),
	(5364,'jardín'),
	(5368,'jericó'),
	(5376,'la Ceja'),
	(5380,'la Estrella'),
	(5390,'la Pintada'),
	(5400,'la Unión'),
	(5411,'liborina'),
	(5425,'maceo'),
	(5440,'marinilla'),
	(5467,'montebello'),
	(5475,'murindó'),
	(5480,'mutatá'),
	(5483,'nariño'),
	(5490,'necoclí'),
	(5495,'nechí'),
	(5501,'olaya'),
	(5541,'peñol'),
	(5543,'peque'),
	(5576,'pueblorrico'),
	(5579,'puerto Berrío'),
	(5585,'puerto Nare'),
	(5591,'puerto Triunfo'),
	(5604,'remedios'),
	(5607,'retiro'),
	(5615,'rionegro'),
	(5628,'sabanalarga'),
	(5631,'sabaneta'),
	(5642,'salgar'),
	(5647,'san Andrés De Cuerqu'),
	(5649,'san Carlos'),
	(5652,'san Francisco'),
	(5656,'san Jerónimo'),
	(5658,'san José De La Monta'),
	(5659,'san Juan De Urabá'),
	(5660,'san Luis'),
	(5664,'san Pedro De Los Mil'),
	(5665,'san Pedro De Urabá'),
	(5667,'san Rafael'),
	(5670,'san Roque'),
	(5674,'san Vicente Ferrer'),
	(5679,'santa Bárbara'),
	(5686,'santa Rosa De Osos'),
	(5690,'santo Domingo'),
	(5697,'el Santuario'),
	(5736,'segovia'),
	(5756,'sonsón'),
	(5761,'sopetrán'),
	(5789,'támesis'),
	(5790,'tarazá'),
	(5792,'tarso'),
	(5809,'titiribí'),
	(5819,'toledo'),
	(5837,'turbo'),
	(5842,'uramita'),
	(5847,'urrao'),
	(5854,'valdivia'),
	(5856,'valparaíso'),
	(5858,'vegachí'),
	(5861,'venecia'),
	(5873,'vigía Del Fuerte'),
	(5885,'yalí'),
	(5887,'yarumal'),
	(5890,'yolombó'),
	(5893,'yondó'),
	(5895,'zaragoza'),
	(8001,'barranquilla'),
	(8078,'baranoa'),
	(8137,'campo De La Cruz'),
	(8141,'candelaria'),
	(8296,'galapa'),
	(8372,'juan De Acosta'),
	(8421,'luruaco'),
	(8433,'malambo'),
	(8436,'manatí'),
	(8520,'palmar De Varela'),
	(8549,'piojó'),
	(8558,'polonuevo'),
	(8560,'ponedera'),
	(8573,'puerto Colombia'),
	(8606,'repelón'),
	(8634,'sabanagrande'),
	(8638,'sabanalarga'),
	(8675,'santa Lucía'),
	(8685,'santo Tomás'),
	(8758,'soledad'),
	(8770,'suan'),
	(8832,'tubará'),
	(8849,'usiacurí'),
	(11001,'Bogotá'),
	(13001,'cartagena De Indias'),
	(13006,'achí'),
	(13030,'altos Del Rosario'),
	(13042,'arenal'),
	(13052,'arjona'),
	(13062,'arroyohondo'),
	(13074,'barranco De Loba'),
	(13140,'calamar'),
	(13160,'cantagallo'),
	(13188,'cicuco'),
	(13212,'córdoba'),
	(13222,'clemencia'),
	(13244,'el Carmen De Bolívar'),
	(13248,'el Guamo'),
	(13268,'el Peñón'),
	(13300,'hatillo De Loba'),
	(13430,'magangué'),
	(13433,'mahates'),
	(13440,'margarita'),
	(13442,'maría La Baja'),
	(13458,'montecristo'),
	(13468,'mompós'),
	(13473,'morales'),
	(13490,'norosí'),
	(13549,'pinillos'),
	(13580,'regidor'),
	(13600,'río Viejo'),
	(13620,'san Cristóbal'),
	(13647,'san Estanislao'),
	(13650,'san Fernando'),
	(13655,'san Jacinto Del Cauc'),
	(13657,'san Juan Nepomuceno'),
	(13667,'san Martín De Loba'),
	(13670,'san Pablo'),
	(13673,'santa Catalina'),
	(13683,'santa Rosa'),
	(13688,'santa Rosa Del Sur'),
	(13744,'simití'),
	(13760,'soplaviento'),
	(13780,'talaigua Nuevo'),
	(13810,'tiquisio'),
	(13836,'turbaco'),
	(13838,'turbaná'),
	(13873,'villanueva'),
	(13894,'zambrano'),
	(15001,'tunja'),
	(15022,'almeida'),
	(15047,'aquitania'),
	(15051,'arcabuco'),
	(15087,'belén'),
	(15090,'berbeo'),
	(15092,'betéitiva'),
	(15097,'boavita'),
	(15104,'boyacá'),
	(15106,'briceño'),
	(15109,'buenavista'),
	(15114,'busbanzá'),
	(15131,'caldas'),
	(15135,'campohermoso'),
	(15162,'cerinza'),
	(15172,'chinavita'),
	(15176,'chiquinquirá'),
	(15180,'chiscas'),
	(15183,'chita'),
	(15185,'chitaraque'),
	(15187,'chivatá'),
	(15189,'ciénega'),
	(15204,'cómbita'),
	(15212,'coper'),
	(15215,'corrales'),
	(15218,'covarachía'),
	(15223,'cubará'),
	(15224,'cucaita'),
	(15226,'cuítiva'),
	(15232,'chíquiza'),
	(15236,'chivor'),
	(15238,'duitama'),
	(15244,'el Cocuy'),
	(15248,'el Espino'),
	(15272,'firavitoba'),
	(15276,'floresta'),
	(15293,'gachantivá'),
	(15296,'gámeza'),
	(15299,'garagoa'),
	(15317,'guacamayas'),
	(15322,'guateque'),
	(15325,'guayatá'),
	(15332,'güicán'),
	(15362,'iza'),
	(15367,'jenesano'),
	(15368,'jericó'),
	(15377,'labranzagrande'),
	(15380,'la Capilla'),
	(15401,'la Victoria'),
	(15403,'la Uvita'),
	(15407,'villa De Leyva'),
	(15425,'macanal'),
	(15442,'maripí'),
	(15455,'miraflores'),
	(15464,'mongua'),
	(15466,'monguí'),
	(15469,'moniquirá'),
	(15476,'motavita'),
	(15480,'muzo'),
	(15491,'nobsa'),
	(15494,'nuevo Colón'),
	(15500,'oicatá'),
	(15507,'otanche'),
	(15511,'pachavita'),
	(15514,'páez'),
	(15516,'paipa'),
	(15518,'pajarito'),
	(15522,'panqueba'),
	(15531,'pauna'),
	(15533,'paya'),
	(15537,'paz De Río'),
	(15542,'pesca'),
	(15550,'pisba'),
	(15572,'puerto Boyacá'),
	(15580,'quípama'),
	(15599,'ramiriquí'),
	(15600,'ráquira'),
	(15621,'rondón'),
	(15632,'saboyá'),
	(15638,'sáchica'),
	(15646,'samacá'),
	(15660,'san Eduardo'),
	(15664,'san José De Pare'),
	(15667,'san Luis De Gaceno'),
	(15673,'san Mateo'),
	(15676,'san Miguel De Sema'),
	(15681,'san Pablo De Borbur'),
	(15686,'santana'),
	(15690,'santa María'),
	(15693,'santa Rosa De Viterb'),
	(15696,'santa Sofía'),
	(15720,'sativanorte'),
	(15723,'sativasur'),
	(15740,'siachoque'),
	(15753,'soatá'),
	(15755,'socotá'),
	(15757,'socha'),
	(15759,'sogamoso'),
	(15761,'somondoco'),
	(15762,'sora'),
	(15763,'sotaquirá'),
	(15764,'soracá'),
	(15774,'susacón'),
	(15776,'sutamarchán'),
	(15778,'sutatenza'),
	(15790,'tasco'),
	(15798,'tenza'),
	(15804,'tibaná'),
	(15806,'tibasosa'),
	(15808,'tinjacá'),
	(15810,'tipacoque'),
	(15814,'toca'),
	(15816,'togüí'),
	(15820,'tópaga'),
	(15822,'tota'),
	(15832,'tununguá'),
	(15835,'turmequé'),
	(15837,'tuta'),
	(15839,'tutazá'),
	(15842,'úmbita'),
	(15861,'ventaquemada'),
	(15879,'viracachá'),
	(15897,'zetaquira'),
	(17001,'manizales'),
	(17013,'aguadas'),
	(17042,'anserma'),
	(17050,'aranzazu'),
	(17088,'belalcázar'),
	(17174,'chinchiná'),
	(17272,'filadelfia'),
	(17380,'la Dorada'),
	(17388,'la Merced'),
	(17433,'manzanares'),
	(17442,'marmato'),
	(17444,'marquetalia'),
	(17446,'marulanda'),
	(17486,'neira'),
	(17495,'norcasia'),
	(17513,'pácora'),
	(17524,'palestina'),
	(17541,'pensilvania'),
	(17614,'riosucio'),
	(17616,'risaralda'),
	(17653,'salamina'),
	(17662,'samaná'),
	(17665,'san José'),
	(17777,'supía'),
	(17867,'victoria'),
	(17873,'villamaría'),
	(17877,'viterbo'),
	(18001,'florencia'),
	(18029,'albania'),
	(18094,'belén De Los Andaquí'),
	(18150,'cartagena Del Chairá'),
	(18205,'curillo'),
	(18247,'el Doncello'),
	(18256,'el Paujíl'),
	(18410,'la Montañita'),
	(18460,'milán'),
	(18479,'morelia'),
	(18592,'puerto Rico'),
	(18610,'san José Del Fragua'),
	(18753,'san Vicente Del Cagu'),
	(18756,'solano'),
	(18785,'solita'),
	(18860,'valparaíso'),
	(19001,'popayán'),
	(19022,'almaguer'),
	(19050,'argelia'),
	(19075,'balboa'),
	(19100,'bolívar'),
	(19110,'buenos Aires'),
	(19130,'cajibío'),
	(19137,'caldono'),
	(19142,'caloto'),
	(19212,'corinto'),
	(19256,'el Tambo'),
	(19290,'florencia'),
	(19300,'guachené'),
	(19318,'guapí'),
	(19355,'inzá'),
	(19364,'jambaló'),
	(19392,'la Sierra'),
	(19397,'la Vega'),
	(19418,'lópez De Micay'),
	(19450,'mercaderes'),
	(19455,'miranda'),
	(19473,'morales'),
	(19513,'padilla'),
	(19517,'páez'),
	(19532,'patía'),
	(19533,'piamonte'),
	(19548,'piendamó'),
	(19573,'puerto Tejada'),
	(19585,'puracé'),
	(19622,'rosas'),
	(19693,'san Sebastián'),
	(19698,'santander De Quilich'),
	(19701,'santa Rosa'),
	(19743,'silvia'),
	(19760,'sotara'),
	(19780,'suárez'),
	(19785,'sucre'),
	(19807,'timbío'),
	(19809,'timbiquí'),
	(19824,'totoró'),
	(19845,'villa Rica'),
	(20001,'valledupar'),
	(20011,'aguachica'),
	(20013,'agustín Codazzi'),
	(20032,'astrea'),
	(20045,'becerril'),
	(20060,'bosconia'),
	(20175,'chimichagua'),
	(20178,'chiriguaná'),
	(20228,'curumaní'),
	(20238,'el Copey'),
	(20250,'el Paso'),
	(20295,'gamarra'),
	(20310,'gonzález'),
	(20383,'la Gloria'),
	(20400,'la Jagua De Ibirico'),
	(20443,'manaure Balcón Del C'),
	(20517,'pailitas'),
	(20550,'pelaya'),
	(20570,'pueblo Bello'),
	(20614,'río De Oro'),
	(20621,'la Paz'),
	(20710,'san Alberto'),
	(20750,'san Diego'),
	(20770,'san Martín'),
	(20787,'tamalameque'),
	(23001,'montería'),
	(23068,'ayapel'),
	(23079,'buenavista'),
	(23090,'canalete'),
	(23162,'cereté'),
	(23168,'chimá'),
	(23182,'chinú'),
	(23189,'ciénaga De Oro'),
	(23300,'cotorra'),
	(23350,'la Apartada'),
	(23417,'lorica'),
	(23419,'los Córdobas'),
	(23464,'momil'),
	(23466,'montelíbano'),
	(23500,'moñitos'),
	(23555,'planeta Rica'),
	(23570,'pueblo Nuevo'),
	(23574,'puerto Escondido'),
	(23580,'puerto Libertador'),
	(23586,'purísima De La Conce'),
	(23660,'sahagún'),
	(23670,'san Andrés De Sotave'),
	(23672,'san Antero'),
	(23675,'san Bernardo Del Vie'),
	(23678,'san Carlos'),
	(23682,'san José De Uré'),
	(23686,'san Pelayo'),
	(23807,'tierralta'),
	(23815,'tuchín'),
	(23855,'valencia'),
	(25001,'agua De Dios'),
	(25019,'albán'),
	(25035,'anapoima'),
	(25040,'anolaima'),
	(25053,'arbeláez'),
	(25086,'beltrán'),
	(25095,'bituima'),
	(25099,'bojacá'),
	(25120,'cabrera'),
	(25123,'cachipay'),
	(25126,'cajicá'),
	(25148,'caparrapí'),
	(25151,'cáqueza'),
	(25154,'carmen De Carupa'),
	(25168,'chaguaní'),
	(25175,'chía'),
	(25178,'chipaque'),
	(25181,'choachí'),
	(25183,'chocontá'),
	(25200,'cogua'),
	(25214,'cota'),
	(25224,'cucunubá'),
	(25245,'el Colegio'),
	(25258,'el Peñón'),
	(25260,'el Rosal'),
	(25269,'facatativá'),
	(25279,'fómeque'),
	(25281,'fosca'),
	(25286,'funza'),
	(25288,'fúquene'),
	(25290,'fusagasugá'),
	(25293,'gachalá'),
	(25295,'gachancipá'),
	(25297,'gachetá'),
	(25299,'gama'),
	(25307,'girardot'),
	(25312,'granada'),
	(25320,'guaduas'),
	(25322,'guasca'),
	(25324,'guataquí'),
	(25326,'guatavita'),
	(25328,'guayabal De Síquima'),
	(25335,'guayabetal'),
	(25339,'gutiérrez'),
	(25368,'jerusalén'),
	(25372,'junín'),
	(25377,'la Calera'),
	(25386,'la Mesa'),
	(25394,'la Palma'),
	(25398,'la Peña'),
	(25402,'la Vega'),
	(25407,'lenguazaque'),
	(25426,'machetá'),
	(25430,'madrid'),
	(25436,'manta'),
	(25438,'medina'),
	(25473,'mosquera'),
	(25483,'nariño'),
	(25486,'nemocón'),
	(25488,'nilo'),
	(25489,'nimaima'),
	(25491,'nocaima'),
	(25506,'venecia'),
	(25513,'pacho'),
	(25518,'paime'),
	(25524,'pandi'),
	(25530,'paratebueno'),
	(25535,'pasca'),
	(25572,'puerto Salgar'),
	(25580,'pulí'),
	(25592,'quebradanegra'),
	(25594,'quetame'),
	(25596,'quipile'),
	(25599,'apulo'),
	(25612,'ricaurte'),
	(25645,'san Antonio Del Tequ'),
	(25649,'san Bernardo'),
	(25653,'san Cayetano'),
	(25658,'san Francisco'),
	(25662,'san Juan De Rioseco'),
	(25718,'sasaima'),
	(25736,'sesquilé'),
	(25740,'sibaté'),
	(25743,'silvania'),
	(25745,'simijaca'),
	(25754,'soacha'),
	(25758,'sopó'),
	(25769,'subachoque'),
	(25772,'uesca'),
	(25777,'supatá'),
	(25779,'susa'),
	(25781,'sutatausa'),
	(25785,'tabio'),
	(25793,'tausa'),
	(25797,'tena'),
	(25799,'tenjo'),
	(25805,'tibacuy'),
	(25807,'tibirita'),
	(25815,'tocaima'),
	(25817,'tocancipá'),
	(25823,'topaipí'),
	(25839,'ubalá'),
	(25841,'ubaque'),
	(25843,'villa De San Diego D'),
	(25845,'une'),
	(25851,'útica'),
	(25862,'vergara'),
	(25867,'vianí'),
	(25871,'villagómez'),
	(25873,'villapinzón'),
	(25875,'villeta'),
	(25878,'viotá'),
	(25885,'yacopí'),
	(25898,'zipacón'),
	(25899,'zipaquirá');

/*!40000 ALTER TABLE `ciudad` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla ckequipos
# ------------------------------------------------------------

CREATE TABLE `ckequipos` (
  `id` int(11) NOT NULL,
  `fechaLista` int(11) DEFAULT NULL,
  `idGalpon` int(11) NOT NULL,
  `bebedorManual` int(11) DEFAULT NULL,
  `bebedorAutomatico` int(11) DEFAULT NULL,
  `bandejaRecibimiento` int(11) DEFAULT NULL,
  `criadora` int(11) DEFAULT NULL,
  `alturaCriadora` int(11) DEFAULT NULL,
  `guardaCriadora` int(11) DEFAULT NULL,
  `bascula` int(11) DEFAULT NULL,
  `cortinas` int(11) DEFAULT NULL,
  `termometro` int(11) DEFAULT NULL,
  `flameador` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ckEquipos_Galpon1_idx` (`idGalpon`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Volcado de tabla ckinstalacion
# ------------------------------------------------------------

CREATE TABLE `ckinstalacion` (
  `id` int(11) NOT NULL,
  `fechaLista` date NOT NULL,
  `idGalpon` int(11) NOT NULL,
  `paredBloque` int(11) NOT NULL,
  `paredMalla` int(11) NOT NULL,
  `idTipoTecho` int(11) NOT NULL,
  `idTipoPiso` int(11) NOT NULL,
  `sobreTecho` int(11) NOT NULL,
  `distanciaGalpon` int(11) NOT NULL,
  `pocetaDesinfeccion` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ckInstalacion_Galpon1_idx` (`idGalpon`),
  KEY `fk_ckInstalacion_tipoTecho1_idx` (`idTipoTecho`),
  KEY `fk_ckInstalacion_tipoPiso1_idx` (`idTipoPiso`),
  CONSTRAINT `fk_ckInstalacion_tipoPiso1` FOREIGN KEY (`idTipoPiso`) REFERENCES `tipopiso` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_ckInstalacion_tipoTecho1` FOREIGN KEY (`idTipoTecho`) REFERENCES `tipotecho` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Volcado de tabla ckpreparaciongalpon
# ------------------------------------------------------------

CREATE TABLE `ckpreparaciongalpon` (
  `id` int(11) NOT NULL,
  `idGalpon` int(11) NOT NULL,
  `ceboRoedor` int(11) DEFAULT NULL,
  `fechaLista` date DEFAULT NULL,
  `limpiezaComedor` int(11) DEFAULT NULL,
  `limpiezaGallinaza` int(11) DEFAULT NULL,
  `limpiezaTecho` int(11) DEFAULT NULL,
  `limpiezaPared` int(11) DEFAULT NULL,
  `limpiezaMalla` int(11) DEFAULT NULL,
  `limpiezaExterior` int(11) DEFAULT NULL,
  `desinfectacionQuimica` int(11) DEFAULT NULL,
  `desinfectacionFisica` int(11) DEFAULT NULL,
  `fumigacion` int(11) DEFAULT NULL,
  `desinfectarTanques` int(11) DEFAULT NULL,
  `encortinarGalpon` int(11) DEFAULT NULL,
  `instalacionCriadora` int(11) DEFAULT NULL,
  `instalacionGuardaCriadora` int(11) DEFAULT NULL,
  `isntalacionTermometro` int(11) DEFAULT NULL,
  `instalacionBandejaRecibimiento` int(11) DEFAULT NULL,
  `instalarPocetaDesinfeccion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ckPreparacionGalpon_Galpon1_idx` (`idGalpon`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Volcado de tabla departamento
# ------------------------------------------------------------

CREATE TABLE `departamento` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL DEFAULT '',
  `idPais` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Departamento_Pais1_idx` (`idPais`),
  CONSTRAINT `fk_Departamento_Pais1` FOREIGN KEY (`idPais`) REFERENCES `pais` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `departamento` WRITE;
/*!40000 ALTER TABLE `departamento` DISABLE KEYS */;

INSERT INTO `departamento` (`id`, `nombre`, `idPais`)
VALUES
	(5,'Antioquia',57),
	(8,'Atlantico',57),
	(11,'Bogotá D.C',57),
	(13,'Bolivar',57),
	(15,'Boyacá',57),
	(17,'Caldas',57),
	(18,'Caqueta',57),
	(19,'Cauca',57),
	(20,'Cesar',57),
	(23,'Córdoba',57),
	(25,'Cundinamarca',57),
	(27,'Choco',57),
	(41,'Huila',57),
	(44,'La Guajira',57),
	(47,'Magdalena',57),
	(50,'Meta',57),
	(52,'Nariño',57),
	(54,'Norte de Santander',57),
	(63,'Quindio',57),
	(66,'Risaralda',57),
	(70,'Sucre',57),
	(73,'Tolima',57),
	(76,'Valle del Cauca',57),
	(81,'Arauca',57),
	(85,'Casanare',57),
	(86,'Putumayo',57),
	(88,'San Andres Providencia y Santa Catalina',57),
	(91,'Amazonas',57),
	(94,'Guainía',57),
	(95,'Guaviare',57),
	(97,'Vaupés',57),
	(99,'Vichada',57);

/*!40000 ALTER TABLE `departamento` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla empleado
# ------------------------------------------------------------

CREATE TABLE `empleado` (
  `identificacion` bigint(20) NOT NULL,
  `primerNombre` varchar(20) NOT NULL DEFAULT '',
  `segundoNombre` varchar(20) DEFAULT '',
  `primerApellido` varchar(20) NOT NULL,
  `segundoApellido` varchar(20) DEFAULT '',
  `telefonoCelular` varchar(15) DEFAULT '',
  `telefonoFijo` varchar(15) NOT NULL DEFAULT '',
  `direccion` varchar(25) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `idTipoDocumento` int(11) NOT NULL,
  `idAdministradoraEps` int(11) NOT NULL,
  `idCiudad` int(11) NOT NULL,
  `idGenero` int(11) NOT NULL,
  `idPais` int(11) NOT NULL,
  `idEstado` int(11) NOT NULL,
  `idDepartamento` int(11) NOT NULL,
  `idEmpresa` int(11) NOT NULL,
  `fechaCreacion` date NOT NULL,
  `idGranja` int(11) NOT NULL,
  `correoElectronico` varchar(60) NOT NULL DEFAULT '',
  PRIMARY KEY (`identificacion`),
  UNIQUE KEY `identificacion` (`identificacion`),
  KEY `fk_Empleados_TipoDocumento1_idx` (`idTipoDocumento`),
  KEY `fk_Empleados_AdministradoraEps1_idx` (`idAdministradoraEps`),
  KEY `fk_Empleados_Genero1_idx` (`idGenero`),
  KEY `fk_Empleados_Pais1_idx` (`idPais`),
  KEY `fk_Empleado_estado1_idx` (`idEstado`),
  KEY `fk_Empleado_Departamento1_idx` (`idDepartamento`),
  KEY `fk_Empleados_Ciudad1_idx` (`idCiudad`),
  KEY `fk_Empleado_Empresa` (`idEmpresa`),
  CONSTRAINT `fk_Administradora1` FOREIGN KEY (`idAdministradoraEps`) REFERENCES `administradoraeps` (`id`),
  CONSTRAINT `fk_Empleado_Ciudad` FOREIGN KEY (`idCiudad`) REFERENCES `ciudad` (`id`),
  CONSTRAINT `fk_Empleado_Departamento` FOREIGN KEY (`idDepartamento`) REFERENCES `departamento` (`id`),
  CONSTRAINT `fk_Empleado_Empresa` FOREIGN KEY (`idEmpresa`) REFERENCES `empresa` (`id`),
  CONSTRAINT `fk_Empleado_Estado` FOREIGN KEY (`idEstado`) REFERENCES `estado` (`id`),
  CONSTRAINT `fk_Empleado_Genero` FOREIGN KEY (`idGenero`) REFERENCES `genero` (`id`),
  CONSTRAINT `fk_Empleado_Pais` FOREIGN KEY (`idPais`) REFERENCES `pais` (`id`),
  CONSTRAINT `fk_Empleado_TipoDocumento` FOREIGN KEY (`idTipoDocumento`) REFERENCES `tipodocumento` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `empleado` WRITE;
/*!40000 ALTER TABLE `empleado` DISABLE KEYS */;

INSERT INTO `empleado` (`identificacion`, `primerNombre`, `segundoNombre`, `primerApellido`, `segundoApellido`, `telefonoCelular`, `telefonoFijo`, `direccion`, `fechaNacimiento`, `idTipoDocumento`, `idAdministradoraEps`, `idCiudad`, `idGenero`, `idPais`, `idEstado`, `idDepartamento`, `idEmpresa`, `fechaCreacion`, `idGranja`, `correoElectronico`)
VALUES
	(76543,'qwertyu','wert','erty','dfgh','345678','23456','dfsfd 6543','2018-02-16',1,2,5004,2,57,1,5,7,'2018-02-16',0,''),
	(765432,'nombre','segundo','apellido','apellidos','15431','65342','765432q','2018-12-31',2,3,8137,2,57,2,81,7,'2018-02-16',0,''),
	(453423412,'qwertytre','ytre','hgfdsa','fgfdg','567','45678','876543hgdg','2018-01-31',1,3,5004,1,57,1,5,1,'2018-02-16',0,''),
	(1022399551,'Sebastian','','Chaparro','','3168642973','4502134','cra 80 f # 54 a 77','1994-12-08',2,1,11001,1,57,1,11,1,'2018-02-03',0,'sebass7@live.com');

/*!40000 ALTER TABLE `empleado` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla empresa
# ------------------------------------------------------------

CREATE TABLE `empresa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `nit` varchar(20) DEFAULT '',
  `telefono` varchar(50) NOT NULL DEFAULT '',
  `personaResponsable` varchar(50) NOT NULL,
  `idPais` int(11) NOT NULL,
  `idDepartamento` int(11) NOT NULL,
  `idCiudad` int(11) NOT NULL,
  `idEstado` int(11) NOT NULL,
  `idPlanComercial` int(11) NOT NULL,
  `fechaCreacion` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Empresa_Pais` (`idPais`),
  KEY `fk_Empresa_Departamento` (`idDepartamento`),
  KEY `fk_Empresa_Ciudad` (`idCiudad`),
  KEY `fk_Empresa_Estado` (`idEstado`),
  KEY `fk_Empresa_PlanComercial` (`idPlanComercial`),
  CONSTRAINT `fk_Empresa_Ciudad` FOREIGN KEY (`idCiudad`) REFERENCES `ciudad` (`id`),
  CONSTRAINT `fk_Empresa_Departamento` FOREIGN KEY (`idDepartamento`) REFERENCES `departamento` (`id`),
  CONSTRAINT `fk_Empresa_Estado` FOREIGN KEY (`idEstado`) REFERENCES `estado` (`id`),
  CONSTRAINT `fk_Empresa_Pais` FOREIGN KEY (`idPais`) REFERENCES `pais` (`id`),
  CONSTRAINT `fk_Empresa_PlanComercial` FOREIGN KEY (`idPlanComercial`) REFERENCES `plancomercial` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;

INSERT INTO `empresa` (`id`, `nombre`, `nit`, `telefono`, `personaResponsable`, `idPais`, `idDepartamento`, `idCiudad`, `idEstado`, `idPlanComercial`, `fechaCreacion`)
VALUES
	(1,'admin','1','333','admin',57,11,11001,1,1,'1994-12-08'),
	(7,'qwertyu','765432','56789','ertyui',57,5,5001,1,1,'2018-02-16');

/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla estado
# ------------------------------------------------------------

CREATE TABLE `estado` (
  `id` int(11) NOT NULL,
  `nombre` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `estado` WRITE;
/*!40000 ALTER TABLE `estado` DISABLE KEYS */;

INSERT INTO `estado` (`id`, `nombre`)
VALUES
	(1,'Activo'),
	(2,'Desactivado');

/*!40000 ALTER TABLE `estado` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla galpon
# ------------------------------------------------------------

CREATE TABLE `galpon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  `idGranja` int(11) NOT NULL,
  `idTipoClima` int(11) NOT NULL,
  `capacidad` int(11) NOT NULL,
  `disponibilidad` int(11) NOT NULL,
  `idEstado` int(11) NOT NULL,
  `fechaCreacion` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Galpon_Granja1_idx` (`idGranja`),
  KEY `fk_Galpon_Estado` (`idEstado`),
  KEY `fk_Galpon_TipoClima` (`idTipoClima`),
  CONSTRAINT `fk_Galpon_Estado` FOREIGN KEY (`idEstado`) REFERENCES `estado` (`id`),
  CONSTRAINT `fk_Galpon_Granja` FOREIGN KEY (`idGranja`) REFERENCES `granja` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Galpon_TipoClima` FOREIGN KEY (`idTipoClima`) REFERENCES `tipoclima` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `galpon` WRITE;
/*!40000 ALTER TABLE `galpon` DISABLE KEYS */;

INSERT INTO `galpon` (`id`, `nombre`, `idGranja`, `idTipoClima`, `capacidad`, `disponibilidad`, `idEstado`, `fechaCreacion`)
VALUES
	(14,'galpon 2',24,1,1000,1000,1,'2018-02-07'),
	(15,'galpon 1',24,1,2000,1000,2,'2018-02-11');

/*!40000 ALTER TABLE `galpon` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla genero
# ------------------------------------------------------------

CREATE TABLE `genero` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `genero` WRITE;
/*!40000 ALTER TABLE `genero` DISABLE KEYS */;

INSERT INTO `genero` (`id`, `nombre`)
VALUES
	(1,'Masculino'),
	(2,'Femenino');

/*!40000 ALTER TABLE `genero` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla granja
# ------------------------------------------------------------

CREATE TABLE `granja` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `idEmpresa` int(11) NOT NULL,
  `idPais` int(11) NOT NULL,
  `idDepartamento` int(11) NOT NULL,
  `idCiudad` int(11) NOT NULL,
  `idEstado` int(11) NOT NULL,
  `fechaCreacion` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Granja_Empresa1_idx` (`idEmpresa`),
  KEY `fk_Granja_Pais1_idx` (`idPais`),
  KEY `fk_Granja_Ciudad1_idx` (`idCiudad`),
  KEY `fk_Departamento` (`idDepartamento`),
  KEY `fk_Estado` (`idEstado`),
  CONSTRAINT `fk_Ciudad` FOREIGN KEY (`idCiudad`) REFERENCES `ciudad` (`id`),
  CONSTRAINT `fk_Departamento` FOREIGN KEY (`idDepartamento`) REFERENCES `departamento` (`id`),
  CONSTRAINT `fk_Empresa` FOREIGN KEY (`idEmpresa`) REFERENCES `empresa` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Estado` FOREIGN KEY (`idEstado`) REFERENCES `estado` (`id`),
  CONSTRAINT `fk_Pais` FOREIGN KEY (`idPais`) REFERENCES `pais` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `granja` WRITE;
/*!40000 ALTER TABLE `granja` DISABLE KEYS */;

INSERT INTO `granja` (`id`, `nombre`, `idEmpresa`, `idPais`, `idDepartamento`, `idCiudad`, `idEstado`, `fechaCreacion`)
VALUES
	(24,'granja 1',1,57,11,11001,1,'2018-02-07'),
	(25,'prueba',1,57,81,8137,1,'2018-03-10');

/*!40000 ALTER TABLE `granja` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla historial
# ------------------------------------------------------------

CREATE TABLE `historial` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` datetime DEFAULT NULL,
  `modulo` varchar(45) DEFAULT NULL,
  `tabla` varchar(45) DEFAULT NULL,
  `accion` varchar(45) DEFAULT NULL,
  `textoAnterior` text,
  `textoNuevo` text,
  `idEmpleado` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Historial_Empleado1_idx` (`idEmpleado`),
  CONSTRAINT `fk_Historial_Empleado` FOREIGN KEY (`idEmpleado`) REFERENCES `empleado` (`identificacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `historial` WRITE;
/*!40000 ALTER TABLE `historial` DISABLE KEYS */;

INSERT INTO `historial` (`id`, `fecha`, `modulo`, `tabla`, `accion`, `textoAnterior`, `textoNuevo`, `idEmpleado`)
VALUES
	(65,'2018-02-07 06:58:40','Granjas','Granja','Nueva Granja','','granja 1',1022399551),
	(66,'2018-02-07 07:02:35','Galpones','Galpon','Nuevo Galpon','','galpon 1',1022399551),
	(67,'2018-02-11 02:38:04','Galpones','Galpon','Nuevo Galpon','','galpon 1',1022399551),
	(68,'2018-02-11 02:42:39','Insumos','Insumo','Nuevo Insumo','','aaaa',1022399551),
	(69,'2018-02-11 05:42:01','Galpones','Galpon','Editar Galpon','galpon 1-24-1-1000-1','galpon 1-24-1-1000-1',1022399551),
	(70,'2018-02-12 08:39:50','Empresas','Empresa','Nueva Empresa','','los olivos',1022399551),
	(71,'2018-02-16 06:11:11','Galpones','Galpon','Editar Galpon','galpon 1-24-1-1000-1','galpon 1-24-1-1000-1',1022399551),
	(72,'2018-02-16 06:11:40','Galpones','Galpon','Editar Galpon','galpon 1-24-1-1000-2','galpon 1-24-1-1000-2',1022399551),
	(73,'2018-02-16 06:40:13','Empresas','Empresa','Nueva Empresa','','pio group',1022399551),
	(74,'2018-02-16 06:41:08','Empresas','Empresa','Nueva Empresa','','qwertyu',1022399551),
	(75,'2018-02-16 06:41:51','Empresas','Empresa','Nueva Empresa','','qwertyu',1022399551),
	(76,'2018-02-16 06:42:29','Empresas','Empresa','Nueva Empresa','','qwertyu',1022399551),
	(77,'2018-02-16 06:42:36','Empresas','Empresa','Editar Empresa','admin-1-0-admin-1','admin-1-0-admin-1',1022399551),
	(78,'2018-02-16 06:54:49','Usuarios','Usuario','Nuevo Usuario','','76543',1022399551),
	(79,'2018-02-16 06:54:49','UsuariosEmpresa','Usuario','Nuevo UsuarioEmpresa','','76543',1022399551),
	(80,'2018-02-16 06:56:36','Usuarios','Usuario','Nuevo Usuario','','765432',1022399551),
	(81,'2018-02-16 06:56:36','UsuariosEmpresa','Usuario','Nuevo UsuarioEmpresa','','765432',1022399551),
	(82,'2018-02-16 07:01:36','UsuariosEmpresa','Usuario','Nuevo UsuarioEmpresa','','453423412',1022399551),
	(83,'2018-02-16 07:09:56','usuariosEmpresa','Usuario','Editar UsuarioEmpresa','qqqqqq-wwwww-eeeee--15431-65342-765432q-3-1-2-1','qqqqqq-wwwww-eeeee--15431-65342-765432q-3-1-2-1',1022399551),
	(84,'2018-02-16 07:10:18','usuariosEmpresa','Usuario','Editar UsuarioEmpresa','qqqqqq-wwwww-eeeee--15431-65342-765432q-3-1-2-7','qqqqqq-wwwww-eeeee--15431-65342-765432q-3-1-2-7',1022399551),
	(85,'2018-03-10 08:22:03','insumoGalpon','insumoGalpon','Nuevo Insumo a galpon','','',1022399551),
	(86,'2018-03-10 08:22:58','insumoGalpon','insumoGalpon','Nuevo Insumo a galpon','','',1022399551),
	(87,'2018-03-10 08:23:16','insumoGalpon','insumoGalpon','Nuevo Insumo a galpon','','14',1022399551),
	(88,'2018-03-10 08:24:21','insumoGalpon','insumoGalpon','Nuevo Insumo a galpon','','14',1022399551),
	(89,'2018-03-10 08:24:40','insumoGalpon','insumoGalpon','Nuevo Insumo a galpon','','14',1022399551),
	(90,'2018-03-10 08:25:03','insumoGalpon','insumoGalpon','Nuevo Insumo a galpon','','14',1022399551),
	(91,'2018-03-10 08:33:04','insumoGalpon','insumoGalpon','Nuevo Insumo a galpon','','14',1022399551),
	(92,'2018-03-10 08:34:35','Insumos','Insumo','Nuevo Insumo','','agua destilada',1022399551),
	(93,'2018-03-10 09:44:00','Granjas','Granja','Nueva Granja','','prueba',1022399551),
	(94,'2018-03-10 09:44:31','Usuarios','Usuario','Editar Usuario','qwertytre-ytre-hgfdsa-fgfdg-567-45678-876543hgdg-3-1-0-2','qwertytre-ytre-hgfdsa-fgfdg-567-45678-876543hgdg-3-1-0-2',1022399551);

/*!40000 ALTER TABLE `historial` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla insumo
# ------------------------------------------------------------

CREATE TABLE `insumo` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Consecutivo',
  `nombre` varchar(50) NOT NULL DEFAULT '',
  `cantidad` float NOT NULL,
  `idTipoCantidad` int(11) NOT NULL,
  `fechaInicio` date NOT NULL,
  `fechaFinal` date NOT NULL,
  `fechaCreacion` date NOT NULL,
  `cantidadUsada` float NOT NULL,
  `idGranja` int(11) NOT NULL,
  `idEstado` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `fk_Insumo_TipoCantidad` (`idTipoCantidad`),
  KEY `fk_Insumo_Granja` (`idGranja`),
  CONSTRAINT `fk_Insumo_Granja` FOREIGN KEY (`idGranja`) REFERENCES `granja` (`id`),
  CONSTRAINT `fk_Insumo_TipoCantidad` FOREIGN KEY (`idTipoCantidad`) REFERENCES `tipocantidad` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `insumo` WRITE;
/*!40000 ALTER TABLE `insumo` DISABLE KEYS */;

INSERT INTO `insumo` (`id`, `nombre`, `cantidad`, `idTipoCantidad`, `fechaInicio`, `fechaFinal`, `fechaCreacion`, `cantidadUsada`, `idGranja`, `idEstado`)
VALUES
	(7,'aaaa',1000,1,'2018-02-11','0000-00-00','2018-02-11',1000,24,2),
	(8,'agua destilada',300,2,'2018-03-10','0000-00-00','2018-03-10',140,24,1);

/*!40000 ALTER TABLE `insumo` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla insumoGalpon
# ------------------------------------------------------------

CREATE TABLE `insumoGalpon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idInsumo` int(11) NOT NULL,
  `idGalpon` int(11) NOT NULL,
  `cantidad` float NOT NULL DEFAULT '0',
  `fechaInicio` date NOT NULL,
  `fechaFinal` date DEFAULT '0000-00-00',
  `fechaCreacion` datetime NOT NULL,
  `idEmpleado` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_InsumoGalpon_Insumo` (`idInsumo`),
  KEY `fk_InsumoGalpon_Galpon` (`idGalpon`),
  KEY `fk_empleado` (`idEmpleado`),
  CONSTRAINT `fk_InsumoGalpon_Galpon` FOREIGN KEY (`idGalpon`) REFERENCES `galpon` (`id`),
  CONSTRAINT `fk_InsumoGalpon_Insumo` FOREIGN KEY (`idInsumo`) REFERENCES `insumo` (`id`),
  CONSTRAINT `fk_empleado` FOREIGN KEY (`idEmpleado`) REFERENCES `empleado` (`identificacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `insumoGalpon` WRITE;
/*!40000 ALTER TABLE `insumoGalpon` DISABLE KEYS */;

INSERT INTO `insumoGalpon` (`id`, `idInsumo`, `idGalpon`, `cantidad`, `fechaInicio`, `fechaFinal`, `fechaCreacion`, `idEmpleado`)
VALUES
	(1,7,14,10,'2018-03-10','0000-00-00','2018-03-10 08:24:40',1022399551),
	(2,7,14,10,'2018-03-10','0000-00-00','2018-03-10 08:25:03',1022399551),
	(3,7,14,30,'2018-03-11','0000-00-00','2018-03-10 08:33:04',1022399551);

/*!40000 ALTER TABLE `insumoGalpon` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla lote
# ------------------------------------------------------------

CREATE TABLE `lote` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `fechaCreacion` datetime NOT NULL,
  `fechaSalida` datetime DEFAULT '0000-00-00 00:00:00',
  `cantidadMacho` int(11) DEFAULT '0',
  `cantidadHembra` int(11) DEFAULT '0',
  `idProveedor` int(11) unsigned NOT NULL,
  `idTipoEmbarque` int(11) NOT NULL,
  `idEmpleado` bigint(11) NOT NULL,
  `mortandad` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Volcado de tabla menu
# ------------------------------------------------------------

CREATE TABLE `menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL DEFAULT '',
  `enlace` varchar(255) NOT NULL DEFAULT '',
  `img` varchar(50) NOT NULL DEFAULT '',
  `orden` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;

INSERT INTO `menu` (`id`, `nombre`, `enlace`, `img`, `orden`)
VALUES
	(1,'Empresas','empresas','card_travel',1),
	(2,'Usuario Principal','UsuariosEmpresa','account_circle',2),
	(3,'Granjas','granjas','home',3),
	(4,'Usuarios','usuarios','people',4),
	(5,'Galpones','galpones','developer_board',5),
	(6,'Bodega','insumos','dashboard',7),
	(7,'Insumos a Galpon','insumosGalpon','insert_chart',8),
	(8,'Reportes','reporte','assignment_returned',9),
	(9,'Lotes','lotes','loupe',6);

/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla menuperfil
# ------------------------------------------------------------

CREATE TABLE `menuperfil` (
  `idMenu` int(11) NOT NULL,
  `idPerfil` int(11) NOT NULL,
  KEY `fk_Perfil` (`idPerfil`),
  KEY `fk_Menu` (`idMenu`),
  CONSTRAINT `fk_Menu` FOREIGN KEY (`idMenu`) REFERENCES `menu` (`id`),
  CONSTRAINT `fk_Perfil` FOREIGN KEY (`idPerfil`) REFERENCES `perfil` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `menuperfil` WRITE;
/*!40000 ALTER TABLE `menuperfil` DISABLE KEYS */;

INSERT INTO `menuperfil` (`idMenu`, `idPerfil`)
VALUES
	(1,1),
	(2,1),
	(3,1),
	(4,1),
	(5,1),
	(3,2),
	(4,2),
	(5,2),
	(6,2),
	(7,2),
	(8,3),
	(6,1),
	(7,1),
	(8,1),
	(9,1);

/*!40000 ALTER TABLE `menuperfil` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla pais
# ------------------------------------------------------------

CREATE TABLE `pais` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `pais` WRITE;
/*!40000 ALTER TABLE `pais` DISABLE KEYS */;

INSERT INTO `pais` (`id`, `nombre`)
VALUES
	(57,'Colombia');

/*!40000 ALTER TABLE `pais` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla perfil
# ------------------------------------------------------------

CREATE TABLE `perfil` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `perfil` WRITE;
/*!40000 ALTER TABLE `perfil` DISABLE KEYS */;

INSERT INTO `perfil` (`id`, `nombre`)
VALUES
	(1,'Administrador'),
	(2,'Usuario Principal'),
	(3,'Galponero'),
	(4,'Veterinario');

/*!40000 ALTER TABLE `perfil` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla plancomercial
# ------------------------------------------------------------

CREATE TABLE `plancomercial` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) NOT NULL DEFAULT '',
  `descripcion` text NOT NULL,
  `valor` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `plancomercial` WRITE;
/*!40000 ALTER TABLE `plancomercial` DISABLE KEYS */;

INSERT INTO `plancomercial` (`id`, `nombre`, `descripcion`, `valor`)
VALUES
	(1,'Free','Versión de prueba  por 7 días',0);

/*!40000 ALTER TABLE `plancomercial` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla proveedor
# ------------------------------------------------------------

CREATE TABLE `proveedor` (
  `nombre` varchar(45) NOT NULL DEFAULT '',
  `identificacion` int(11) unsigned NOT NULL,
  `digitoVerificacion` int(11) NOT NULL,
  `direccion` varchar(45) NOT NULL DEFAULT '',
  `personaResponsable` varchar(30) NOT NULL DEFAULT '',
  `numeroResponsable` varchar(20) NOT NULL DEFAULT '',
  `idEmpresa` int(11) NOT NULL,
  KEY `fk_empresa_proveedor` (`idEmpresa`),
  CONSTRAINT `fk_empresa_proveedor` FOREIGN KEY (`idEmpresa`) REFERENCES `empresa` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `proveedor` WRITE;
/*!40000 ALTER TABLE `proveedor` DISABLE KEYS */;

INSERT INTO `proveedor` (`nombre`, `identificacion`, `digitoVerificacion`, `direccion`, `personaResponsable`, `numeroResponsable`, `idEmpresa`)
VALUES
	('prueba',11111,2,'cra 80 f','nombre de prueba','22222222',1);

/*!40000 ALTER TABLE `proveedor` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla tipocantidad
# ------------------------------------------------------------

CREATE TABLE `tipocantidad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL DEFAULT '',
  `abreviatura` varchar(5) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `tipocantidad` WRITE;
/*!40000 ALTER TABLE `tipocantidad` DISABLE KEYS */;

INSERT INTO `tipocantidad` (`id`, `nombre`, `abreviatura`)
VALUES
	(1,'Kilogramos','Kg'),
	(2,'Litros','Lt');

/*!40000 ALTER TABLE `tipocantidad` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla tipoclima
# ------------------------------------------------------------

CREATE TABLE `tipoclima` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `tipoclima` WRITE;
/*!40000 ALTER TABLE `tipoclima` DISABLE KEYS */;

INSERT INTO `tipoclima` (`id`, `nombre`)
VALUES
	(1,'Frio');

/*!40000 ALTER TABLE `tipoclima` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla tipodocumento
# ------------------------------------------------------------

CREATE TABLE `tipodocumento` (
  `id` int(11) NOT NULL,
  `abreviatura` varchar(3) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `tipodocumento` WRITE;
/*!40000 ALTER TABLE `tipodocumento` DISABLE KEYS */;

INSERT INTO `tipodocumento` (`id`, `abreviatura`, `nombre`)
VALUES
	(1,'CC','Cedula de Ciudadania'),
	(2,'NIT','NIT'),
	(3,'CE','Cedula deExtranjeria');

/*!40000 ALTER TABLE `tipodocumento` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla tipoEmbarque
# ------------------------------------------------------------

CREATE TABLE `tipoEmbarque` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(225) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `tipoEmbarque` WRITE;
/*!40000 ALTER TABLE `tipoEmbarque` DISABLE KEYS */;

INSERT INTO `tipoEmbarque` (`id`, `nombre`)
VALUES
	(1,'Canastilla plastica'),
	(2,'Canastilla metalica'),
	(3,'Canastilla carton'),
	(4,'Canastilla madera');

/*!40000 ALTER TABLE `tipoEmbarque` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla tipopiso
# ------------------------------------------------------------

CREATE TABLE `tipopiso` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Volcado de tabla tipotecho
# ------------------------------------------------------------

CREATE TABLE `tipotecho` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Volcado de tabla usuario
# ------------------------------------------------------------

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `contrasena` varchar(45) NOT NULL,
  `ultimoLogin` datetime NOT NULL,
  `intentos` int(11) NOT NULL,
  `idEmpleado` bigint(20) NOT NULL,
  `idPerfil` int(11) NOT NULL,
  `token` varchar(225) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `fk_Usuario_Empleado1_idx` (`idEmpleado`),
  KEY `fk_Usuario_Perfil1_idx` (`idPerfil`),
  CONSTRAINT `fk_Usuario_Empleado` FOREIGN KEY (`idEmpleado`) REFERENCES `empleado` (`identificacion`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Usuario_Perfil1` FOREIGN KEY (`idPerfil`) REFERENCES `perfil` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;

INSERT INTO `usuario` (`id`, `contrasena`, `ultimoLogin`, `intentos`, `idEmpleado`, `idPerfil`, `token`)
VALUES
	(1,'21232f297a57a5a743894a0e4a801fc3','2018-03-12 06:03:56',0,1022399551,1,'c2a28a04ad7c1509e0e525ab530d2a12'),
	(3,'6f2dabcf36293d56be27f7433e47ac7a','0000-00-00 00:00:00',0,765432,2,''),
	(4,'7a102baf91fde414fcc757ffd5509045','0000-00-00 00:00:00',0,453423412,2,'');

/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
