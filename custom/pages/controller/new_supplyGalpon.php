<?php
	require_once('../../controller/database.php');
	require_once('../../controller/conmysqli.php');

	require_once('../../start.php');
	$database = new database();
	$db = new conmysqli($database->server,$database->user,$database->pass,$database->database);

	$consulta = $db->insertar('insumoGalpon','idInsumo,idGalpon,cantidad,fechaInicio,fechaCreacion,idEmpleado',"'".$_POST["idInsumo"]."','".$_POST["idGalpon"]."','".$_POST["cantidad"]."','".$_POST["fechaInicio"]."','".date('Y-m-d h:i:s')."',".$_SESSION['usuario']);

	$historial = $db->insertar('Historial','fecha,modulo,tabla,accion,textoAnterior,textoNuevo,idEmpleado','"'.date('Y-m-d h:i:s').'","insumoGalpon","insumoGalpon","Nuevo Insumo a galpon","","'.$_POST['idGalpon'].'",'.$_SESSION['usuario']);

	header('location:../insumosGalpon.php?msg=CR');


?>