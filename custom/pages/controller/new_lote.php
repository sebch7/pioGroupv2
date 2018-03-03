<?php
	require_once('../../controller/database.php');
	require_once('../../controller/conmysqli.php');

	require_once('../../start.php');
	$database = new database();
	$db = new conmysqli($database->server,$database->user,$database->pass,$database->database);

		
	if(mysqli_fetch_assoc($validacion))
	{
		header('location:../lotes.php?msg=DP');	
	}
	else
	{
		echo $consulta = $db->insertar('lotes','id,fechaIngreso,fechaSalida,idProveedor,cantidadMachos,cantidadHembras,tipoEmbarque,idGalpon,nombreTransportador,observacionesPlacaVehiculo',"'".$_POST["id"]."','".$_POST["fechaIngreso"]."','".$_POST["fechaSalida"]."','".$_POST["idProveedor"]."','".$_POST["cantidadHembras"]."','".$_POST["cantidadMachos"]."','".$_POST["tipoEmbarque"]."','".$_POST["idGalpon"]."','".$_POST["nombreTransportador"]."','".$_POST["observacionesPlacaVehiculo"]."','".date('Y-m-d')."'");

		$historial = $db->insertar('Historial','fecha,modulo,tabla,accion,textoAnterior,textoNuevo,idEmpleado','"'.date('Y-m-d h:i:s').'","lotes","lotes","Nuevo Lote","",'.$_SESSION['usuario']);

		header('location:../lotes.php?msg=CR');
	}


?>