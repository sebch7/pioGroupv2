<?php
	require_once('../../controller/database.php');
	require_once('../../controller/conmysqli.php');

	require_once('../../start.php');
	$database = new database();
	$db = new conmysqli($database->server,$database->user,$database->pass,$database->database);

	$validacion = $db->consulta('identificacion','Empleado','identificacion = '.$_POST['identificacion']);
	
	if(mysqli_fetch_assoc($validacion))
	{
		header('location:../usuarios.php?msg=DP');	
	}
	else
	{
		$consulta = $db->insertar('Empleado','primerNombre,segundoNombre,primerApellido,segundoApellido,fechaNacimiento,idTipoDocumento,identificacion,idEstado,telefonoFijo,telefonoCelular,idAdministradoraEps,idPais,idDepartamento,idCiudad,direccion,idGenero,idEmpresa,fechaCreacion',"'".$_POST["primerNombre"]."','".$_POST["segundoNombre"]."','".$_POST["primerApellido"]."','".$_POST["segundoApellido"]."','".$_POST["fechaNacimiento"]."','".$_POST["idTipoDocumento"]."','".$_POST["identificacion"]."','1','".$_POST["telefonoFijo"]."','".$_POST["telefonoCelular"]."','".$_POST["idAdministradoraEps"]."','".$_POST["idPais"]."','".$_POST["idDepartamento"]."','".$_POST["idCiudad"]."','".$_POST["direccion"]."','".$_POST["idGenero"]."','".$_POST["idEmpresa"]."','".date('Y-m-d')."'");

		$contrasena = 'Pass'.$_POST['identificacion'].'PG';

		$consulta2 = $db->insertar('Usuario','contrasena,idEmpleado,idPerfil','"'.$contrasena.'","'.$_POST['identificacion'].'","6"');

		$historial = $db->insertar('Historial','fecha,modulo,tabla,accion,textoAnterior,textoNuevo,idEmpleado','"'.date('Y-m-d h:i:s').'","UsuariosEmpresa","Usuario","Nuevo UsuarioEmpresa","","'.$_POST['identificacion'].'",'.$_SESSION['usuario']);

		header('location:../UsuariosEmpresa.php?msg=CR');
	}


?>