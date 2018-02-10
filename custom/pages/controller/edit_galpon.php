<?php
	require_once('../../controller/database.php');
	require_once('../../controller/conmysqli.php');

	require_once('../../start.php');
	$database = new database();
	$db = new conmysqli($database->server,$database->user,$database->pass,$database->database);

	//campos-tabla-condicion
	
	$textoAnterior = $db->consulta('nombre,idGranja,idTipoClima,capacidad,idEstado','Galpon','id = '.$_POST['idGalpon']);

	while($_cap=mysqli_fetch_assoc($textoAnterior)) 
	{
		$arrayUser[]=$_cap;
		$_cap;
	}
	$anterior = $arrayUser[0]['nombre'].'-'.$arrayUser[0]['idGranja'].'-'.$arrayUser[0]['idTipoClima'].'-'.$arrayUser[0]['capacidad'].'-'.$arrayUser[0]['idEstado'];

	$consulta = $db->editar('Galpon',' nombre = "'.$_POST['nombre'].'", idGranja = "'.$_POST['idGranja'].'", idTipoClima = "'.$_POST['idTipoClima'].'", capacidad = "'.$_POST['capacidad'].'", idEstado = "'.$_POST['idEstado'].'"','id = '.$_POST['idGalpon']);

	$textoNuevo = $db->consulta('nombre,idGranja,idTipoClima,capacidad,idEstado','Galpon','id = '.$_POST['idGalpon']);

	while($_cap=mysqli_fetch_assoc($textoNuevo)) 
	{
		$arrayUser[]=$_cap;
		$_cap;
	}
	$nuevo = $arrayUser[0]['nombre'].'-'.$arrayUser[0]['idGranja'].'-'.$arrayUser[0]['idTipoClima'].'-'.$arrayUser[0]['capacidad'].'-'.$arrayUser[0]['idEstado'];

	//tabla-campos-valores
	echo $historial = $db->insertar('Historial','fecha,modulo,tabla,accion,textoAnterior,textoNuevo,idEmpleado','"'.date('Y-m-d h:i:s').'","Galpones","Galpon","Editar Galpon","'.$anterior.'","'.$nuevo.'",'.$_SESSION['usuario']);

	
	header('location:../galpones.php');
	

?>