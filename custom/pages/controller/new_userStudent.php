<?php
	header('Content-type: text/html; charset=utf-8');

	require_once('../../controller/database.php');
	require_once('../../controller/conmysqli.php');

	require_once('../../start.php');
	$database = new database();
	$db = new conmysqli($database->server,$database->user,$database->pass,$database->database);
	$db1 = new conmysqli($database->server,$database->user,$database->pass,$database->database);

	$validacion = $db->consulta('identificacion','Empleado','identificacion = '.$_POST['identificacion']);
	
	if(mysqli_fetch_assoc($validacion))
	{
		header('location:../estudiante.php?msg=DP');	
	}
	else
	{
		$consulta = $db->insertar('Empleado','primerNombre,segundoNombre,primerApellido,segundoApellido,fechaNacimiento,idTipoDocumento,identificacion,idEstado,telefonoFijo,telefonoCelular,idAdministradoraEps,idPais,idDepartamento,idCiudad,direccion,idGenero,correoElectronico,idEmpresa,fechaCreacion',"'".$_POST["primerNombre"]."','".$_POST["segundoNombre"]."','".$_POST["primerApellido"]."','".$_POST["segundoApellido"]."','".$_POST["fechaNacimiento"]."','".$_POST["idTipoDocumento"]."','".$_POST["identificacion"]."','".$_POST["idEstado"]."','".$_POST["telefonoFijo"]."','".$_POST["telefonoCelular"]."','".$_POST["idAdministradoraEps"]."','".$_POST["idPais"]."','".$_POST["idDepartamento"]."','".$_POST["idCiudad"]."','".$_POST["direccion"]."','".$_POST["idGenero"]."','".$_POST["correoElectronico"]."','".$_SESSION["empresa"]."','".date('Y-m-d')."'");

		$consulta2 = $db1->insertar('Acudiente','nombre,apellido,numeroTelefono,numeroCelular,idEmpleado,correoElectronico',"'".$_POST["nombreAcudiente"]."','".$_POST["apellidoAcudiente"]."','".$_POST["telefonoAcudiente"]."','".$_POST["celularAcudiente"]."','".$_POST["identificacion"]."','".$_POST["emailAcudiente"]."'");

	
	    $cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
	
	    $longitudCadena=strlen($cadena);
	     

	    $contrasena = "";
	    $longitudPass=6;
	     
	    for($i=1 ; $i<=$longitudPass ; $i++)
	    {
	        $pos=rand(0,$longitudCadena-1);
	    
	        $contrasena .= substr($cadena,$pos,1);
	    }

		$consulta2 = $db->insertar('Usuario','contrasena,idEmpleado,idPerfil,idCurso','"'.md5($contrasena).'","'.$_POST['identificacion'].'","3","'.$_POST['idCurso'].'"');

		$historial = $db->insertar('Historial','fecha,modulo,tabla,accion,textoAnterior,textoNuevo,idEmpleado','"'.date('Y-m-d h:i:s').'","Usuarios","Usuario","Nuevo Usuario","","'.$_POST['identificacion'].'",'.$_SESSION['usuario']);

		$destinatario = $_POST['correoElectronico']; 
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

			<b>Usuario: '.$_POST['identificacion'].'</b> 
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


		mail($destinatario,$asunto,$cuerpo,$headers);

		header('location:../estudiante.php?msg=CR');
	}


?>