<?php
	require_once('../../controller/database.php');
	require_once('../../controller/conmysqli.php');

	require_once('../../start.php');
	$database = new database();
	$db = new conmysqli($database->server,$database->user,$database->pass,$database->database);

	$validacion = $db->consulta('id','Galpon','nombre = '.$_POST['nombre']);
	
	if(mysqli_fetch_assoc($validacion))
	{
		header('location:../galpones.php?msg=DP');	
	}
	else
	{
		echo $consulta = $db->insertar('Galpon','nombre,idGranja,idTipoClima,capacidad,disponibilidad,idEstado,fechaCreacion',"'".$_POST["nombre"]."','".$_POST["idGranja"]."','".$_POST["idTipoClima"]."','".$_POST["capacidad"]."','".$_POST["capacidad"]."','".$_POST["idEstado"]."','".date('Y-m-d')."'");

		$historial = $db->insertar('Historial','fecha,modulo,tabla,accion,textoAnterior,textoNuevo,idEmpleado','"'.date('Y-m-d h:i:s').'","Galpones","Galpon","Nuevo Galpon","","'.$_POST['nombre'].'",'.$_SESSION['usuario']);

		header('location:../galpones.php?msg=CR');
	}


?>