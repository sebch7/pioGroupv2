<?php
	require_once('../../controller/database.php');
	require_once('../../controller/conmysqli.php');

	require_once('../../start.php');
	$database = new database();
	$db = new conmysqli($database->server,$database->user,$database->pass,$database->database);

	$consulta = $db->insertar('Insumo','nombre,fechaInicio,cantidad,idTipoCantidad,idGranja,cantidadUsada,fechaCreacion',"'".$_POST["nombre"]."','".$_POST["fechaInicio"]."','".$_POST["cantidad"]."','".$_POST["idTipoCantidad"]."','".$_POST["idGranja"]."','".$_POST["cantidad"]."','".date('Y-m-d')."'");

	$historial = $db->insertar('Historial','fecha,modulo,tabla,accion,textoAnterior,textoNuevo,idEmpleado','"'.date('Y-m-d h:i:s').'","Insumos","Insumo","Nuevo Insumo","","'.$_POST['nombre'].'",'.$_SESSION['usuario']);

	header('location:../insumos.php?msg=CR');


?>