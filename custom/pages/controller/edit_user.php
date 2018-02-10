<?php
	require_once('../../controller/database.php');
	require_once('../../controller/conmysqli.php');

	require_once('../../start.php');
	$database = new database();
	$db = new conmysqli($database->server,$database->user,$database->pass,$database->database);

	//campos-tabla-condicion
	$textoAnterior = $db->consulta('Empleado.primerNombre,Empleado.segundoNombre,Empleado.primerApellido,Empleado.segundoApellido,Empleado.telefonoCelular,Empleado.telefonoFijo,Empleado.direccion,Empleado.idAdministradoraEps,Empleado.idEstado,Empleado.idGranja,Usuario.idPerfil','Empleado INNER JOIN Usuario ON Usuario.idEmpleado = Empleado.identificacion','identificacion = '.$_POST['identificacion']);

	while($_cap=mysqli_fetch_assoc($textoAnterior)) 
	{
		$arrayUser[]=$_cap;
		$_cap;
	}

	$anterior = $arrayUser[0]['primerNombre'].'-'.$arrayUser[0]['segundoNombre'].'-'.$arrayUser[0]['primerApellido'].'-'.$arrayUser[0]['segundoApellido'].'-'.$arrayUser[0]['telefonoCelular'].'-'.$arrayUser[0]['telefonoFijo'].'-'.$arrayUser[0]['direccion'].'-'.$arrayUser[0]['idAdministradoraEps'].'-'.$arrayUser[0]['idEstado'].'-'.$arrayUser[0]['idGranja'].'-'.$arrayUser[0]['idPerfil'];

	echo $consulta = $db->editar('Empleado',' primerNombre = "'.$_POST['primerNombre'].'", segundoNombre = "'.$_POST['segundoNombre'].'", primerApellido = "'.$_POST['primerApellido'].'", segundoApellido = "'.$_POST['segundoApellido'].'", telefonoCelular = "'.$_POST['telefonoCelular'].'", telefonoFijo = "'.$_POST['telefonoFijo'].'", direccion = "'.$_POST['direccion'].'", idAdministradoraEps = '.$_POST['idAdministradoraEps'].', idGranja = '.$_POST['idGranja'].', idEstado = '.$_POST['idEstado'],'identificacion = '.$_POST['identificacion']);

	$perfil = $db->editar('Usuario','idPerfil = '.$_POST['idPerfil'],'idEmpleado = '.$_POST['identificacion']);

	$textoNuevo = $db->consulta('Empleado.primerNombre,Empleado.segundoNombre,Empleado.primerApellido,Empleado.segundoApellido,Empleado.telefonoCelular,Empleado.telefonoFijo,Empleado.direccion,Empleado.idAdministradoraEps,Empleado.idEstado,Empleado.idGranja,Usuario.idPerfil','Empleado INNER JOIN Usuario ON Usuario.idEmpleado = Empleado.identificacion','identificacion = '.$_POST['identificacion']);

	while($_cap=mysqli_fetch_assoc($textoNuevo)) 
	{
		$arrayUser[]=$_cap;
		$_cap;
	}
	$nuevo = $arrayUser[0]['primerNombre'].'-'.$arrayUser[0]['segundoNombre'].'-'.$arrayUser[0]['primerApellido'].'-'.$arrayUser[0]['segundoApellido'].'-'.$arrayUser[0]['telefonoCelular'].'-'.$arrayUser[0]['telefonoFijo'].'-'.$arrayUser[0]['direccion'].'-'.$arrayUser[0]['idAdministradoraEps'].'-'.$arrayUser[0]['idEstado'].'-'.$arrayUser[0]['idGranja'].'-'.$arrayUser[0]['idPerfil'];

	//tabla-campos-valores
	$historial = $db->insertar('Historial','fecha,modulo,tabla,accion,textoAnterior,textoNuevo,idEmpleado','"'.date('Y-m-d h:i:s').'","Usuarios","Usuario","Editar Usuario","'.$anterior.'","'.$nuevo.'",'.$_SESSION['usuario']);


	header('location:../usuarios.php');
	

?>