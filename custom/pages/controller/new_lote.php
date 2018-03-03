<?php
	require_once('../../controller/database.php');
	require_once('../../controller/conmysqli.php');

	require_once('../../start.php');
	$database = new database();
	$db = new conmysqli($database->server,$database->user,$database->pass,$database->database);

	
		//$consulta = $db->insertar('lote','fechaCreacion,cantidadMacho,cantidadHembra,idProveedor,idTipoEmbarque,idEmpleado,mortandad','"'.date('Y-m-d h:i:s').'",'$_POST['macho'].','.$_POST['hembra'].','.$_POST['idProveedor'].','.$_POST['idTipoEmbarque'].','.$_SESSION['usuario'].','$_POST['mortandad']);

		$consulta = $db->insertar('lote','fechaCreacion,cantidadMacho,cantidadHembra,idProveedor,idTipoEmbarque,idEmpleado,mortandad','"'.date("Y-m-d h:i:s").'","'.$_POST['macho'].'","'.$_POST['hembra'].'","'.$_POST['idProveedor'].'","'.$_POST['idTipoEmbarque'].'","'.$_SESSION['usuario'].'","'.$_POST['mortandad'].'"');

		//$historial = $db->insertar('Historial','fecha,modulo,tabla,accion,textoAnterior,textoNuevo,idEmpleado','"'.date('Y-m-d h:i:s').'","lotes","lotes","Nuevo Lote","",'.$_SESSION['usuario']);

		//header('location:../lotes.php?msg=CR');


?>