<!DOCTYPE html>
<html>
<head>
	<?php
		include('header.php');
	?>
</head>
<body>
	<?php
		include('headerBody.php');
	?>
	<div id="container">
		<div id="container-central">
			<div class="android-more-section">
				<div class="android-section-title mdl-typography--display-1">Masivo para estudiantes</div>
				<fieldset class="left">
					<legend>Archivos </legend>
					<a href="../upload/formatoMasivoEstudiantes.xlsx" download="formatoMasivoEstudiantes.xlsx"><span class="left">Descargar Formato para carga masivo <i title="Descargar formato para carga masiva" class="material-icons">cloud_download</i></a></span>
					<br>
					<form method="post" enctype="multipart/form-data">
						<input type="file" name="documentoMasivo" id="documentoMasivo">
						<button class="mdl-button mdl-js-button btn-primary" type="submit"><i class="material-icons">add</i></button>
					</form>	
				</fieldset>
				<table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
				<?php

				if (isset($_FILES['documentoMasivo'])) 
				{	
					require_once('../controller/database.php');
					require_once('../controller/conmysqli.php');

					require_once('../start.php');
					$database = new database();
					$db = new conmysqli($database->server,$database->user,$database->pass,$database->database);
					$db1 = new conmysqli($database->server,$database->user,$database->pass,$database->database);

					
					$_tipoDocumento = array(
						"CC"=>"1",
						"CE"=>"3",
						"TI"=>"4",
						"RC"=>"5"
					);	

					$administradoraEps = array(
						"Empresas Publicas de Medellin Departamento Médico" => "1",
						"Fondo de Pasivo Social de Ferrocarriles" => "2",
						"Aliansalud EPS" => "3",
						"Salud Total S.A" => "4",
						"Cafesalud EPS" => "5",
						"E.P.S Sanitas" => "6",
						"Compensar Entidad Promotora de Salud" => "7",
						"Comfenalco Antioquia EPS" => "8",
						"EPS Sura" => "9",
						"Comfenalco Valle EPS" => "10",
						"Saludcoop E.P.S" => "11",
						"Humana Vivir EPS" => "12",
						"Salud Colpatria S.A. EPS" => "13",
						"Coomeva EPS" => "14",
						"Famisanar" => "15",
						"Servicio Occidental de Salud S.O.S. S.A." => "16",
						"Cruz Blanca S.A" => "17",
						"Solidaria de Salud Solsalud S.A" => "18",
						"Saludvida S.A EPS" => "19",
						"Nueva EPS" => "20",
						"Multimedicas Salud Con Calidad EPS S.A." => "21",
						"Golden Group EPS" => "22"
					);

					$_genero = array(
						"Masculino" => "1",
						"Femenino" => "2"
					);

					require_once '../lib/PHPExcel/Classes/PHPExcel.php';
					$archivo = $_FILES['documentoMasivo']['tmp_name'];
					$inputFileType = PHPExcel_IOFactory::identify($archivo);
					$objReader = PHPExcel_IOFactory::createReader($inputFileType);
					$objPHPExcel = $objReader->load($archivo);
					$sheet = $objPHPExcel->getSheet(0); 
					$highestRow = $sheet->getHighestRow();
					$highestColumn = $sheet->getHighestColumn();

					$contador = 3;

					for ($row = 3; $row <= $highestRow; $row++)
					{
						$data = $sheet->getCell("A".$row)->getValue();

						if($data != '' || $data != null)
						{
							$contador++;
						}
					}
					
					echo '<tr>';
					echo '<th>'.$sheet->getCell("A2")->getValue().'</th>';
					echo '<th>'.$sheet->getCell("B2")->getValue().'</th>';
					echo '<th>'.$sheet->getCell("C2")->getValue().'</th>';
					echo '<th>'.$sheet->getCell("D2")->getValue().'</th>';
					echo '<th>'.$sheet->getCell("E2")->getValue().'</th>';
					echo '<th>'.$sheet->getCell("F2")->getValue().'</th>';
					echo '<th>'.$sheet->getCell("G2")->getValue().'</th>';
					echo '<th>'.$sheet->getCell("H2")->getValue().'</th>';
					echo '<th>'.$sheet->getCell("I2")->getValue().'</th>';
					echo '<th>'.$sheet->getCell("J2")->getValue().'</th>';
					echo '<th>'.$sheet->getCell("K2")->getValue().'</th>';
					echo '<th>'.$sheet->getCell("L2")->getValue().'</th>';
					echo '<th>'.$sheet->getCell("M2")->getValue().'</th>';
					echo '<th>'.$sheet->getCell("N2")->getValue().'</th>';
					echo "</tr>";

					for ($row = 3; $row < $contador; $row++)
					{ 
						$data = $sheet->getCell("F".$row)->getValue();
						$data = date($format = "Y-m-d", PHPExcel_Shared_Date::ExcelToPHP($data));

						echo '<tr>';
						echo '<td>'.$sheet->getCell("A".$row)->getValue().'</td>';
						echo '<td>'.$sheet->getCell("B".$row)->getValue().'</td>';
						echo '<td>'.$sheet->getCell("C".$row)->getValue().'</td>';
						echo '<td>'.$sheet->getCell("D".$row)->getValue().'</td>';
						echo '<td>'.$sheet->getCell("E".$row)->getValue().'</td>';
						echo '<td>'.$data.'</td>';
						echo '<td>'.$sheet->getCell("G".$row)->getValue().'</td>';
						echo '<td>'.$sheet->getCell("H".$row)->getValue().'</td>';
						echo '<td>'.$sheet->getCell("I".$row)->getValue().'</td>';
						echo '<td>'.$sheet->getCell("J".$row)->getValue().'</td>';
						echo '<td>'.$sheet->getCell("K".$row)->getValue().'</td>';
						echo '<td>'.$sheet->getCell("L".$row)->getValue().'</td>';
						echo '<td>'.$sheet->getCell("M".$row)->getValue().'</td>';
						echo '<td>'.$sheet->getCell("N".$row)->getValue().'</td>';

						echo '<td>'.$sheet->getCell("O".$row)->getValue().'</td>';
						echo '<td>'.$sheet->getCell("P".$row)->getValue().'</td>';
						echo '<td>'.$sheet->getCell("Q".$row)->getValue().'</td>';
						echo '<td>'.$sheet->getCell("R".$row)->getValue().'</td>';
						echo '<td>'.$sheet->getCell("S".$row)->getValue().'</td>';
						echo "</tr>";


						$consulta = $db->insertar('Empleado','primerNombre,segundoNombre,primerApellido,segundoApellido,fechaNacimiento,idTipoDocumento,identificacion,idEstado,telefonoFijo,telefonoCelular,idAdministradoraEps,idPais,idDepartamento,idCiudad,direccion,idGenero,correoElectronico,idEmpresa,fechaCreacion',"'".$sheet->getCell("A".$row)->getValue()."','".$sheet->getCell("B".$row)->getValue()."','".$sheet->getCell("C".$row)->getValue()."','".$sheet->getCell("D".$row)->getValue()."','".$data."','".$_tipoDocumento[$sheet->getCell("G".$row)->getValue()]."','".$sheet->getCell("H".$row)->getValue()."','1','".$sheet->getCell("J".$row)->getValue()."','".$sheet->getCell("K".$row)->getValue()."','".$administradoraEps[$sheet->getCell("L".$row)->getValue()]."','57','11','11001','".$sheet->getCell("N".$row)->getValue()."','".$_genero[$sheet->getCell("M".$row)->getValue()]."','".$sheet->getCell("E".$row)->getValue()."','".$_SESSION["empresa"]."','".date('Y-m-d')."'");

						$consulta2 = $db1->insertar('Acudiente','nombre,apellido,numeroTelefono,numeroCelular,idEmpleado,correoElectronico',"'".$sheet->getCell("O".$row)->getValue()."','".$sheet->getCell("P".$row)->getValue()."','".$sheet->getCell("Q".$row)->getValue()."','".$sheet->getCell("R".$row)->getValue()."','".$sheet->getCell("H".$row)->getValue()."','".$sheet->getCell("S".$row)->getValue()."'");
						

	
				    $cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
				
				    $longitudCadena=strlen($cadena);
				     

				    $contrasena = "";

				    $longitudPass=6;
				     
				    for($i=1 ; $i<=$longitudPass ; $i++)
				    {
				        $pos=rand(0,$longitudCadena-1);
				    
				        $contrasena .= substr($cadena,$pos,1);
				    }
				  
					
					$consulta2 = $db->insertar('Usuario','contrasena,idEmpleado,idPerfil,idCurso','"'.md5($contrasena).'","'.$sheet->getCell("H".$row)->getValue().'","3","'.$sheet->getCell("I".$row)->getValue().'"');


					$historial = $db->insertar('Historial','fecha,modulo,tabla,accion,textoAnterior,textoNuevo,idEmpleado','"'.date('Y-m-d h:i:s').'","Estudiantes","Empleado","Nuevo Usuario Masivo","","'.$sheet->getCell("H".$row)->getValue().'",'.$_SESSION['usuario']);


					$destinatario = $sheet->getCell("E".$row)->getValue(); 

					$asunto = utf8_decode("Usuario y contraseña en mi colegio"); 
					$cuerpo = utf8_decode(' 
					<html> 
					<head><meta http-equiv="Content-Type" content="text/html; charset=big5"> 
					   <title>Bienvenido, </title> 
					</head> 
					<body> 
					<p> 
						Bienvenido,<br><br>
						A continuación encontrara sus credenciales para poder administrar sus servicio en mi colegio
						<br>
						<br>

						<b>Usuario: '.$sheet->getCell("H".$row)->getValue().'</b> 
						<br>
						<b>Contraseña: '.$contrasena.'</b> 

					</p> 
					<p>
					atentamente,
					</p>
					
					</body> 
					</html> 
					'); 

					//para el env¨ªo en formato HTML 
					$headers = "MIME-Version: 1.0\r\n"; 
					$headers .= "Content-type: text/html; charset=utf-8\r\n"; 

					//direcci¨®n del remitente 
					$headers .= "From: Pagina web <servicioalcliente@micolegio.com.co>\r\n"; 

					//echo $cuerpo;

					//mail($destinatario,$asunto,$cuerpo,$headers);
					}
				}	
				?>	
				</table>
			</div>
		</div>
	</div>
	<?php
		include('footer.php');
	?>
</body>
</html>