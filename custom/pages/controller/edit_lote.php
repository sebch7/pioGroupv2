<?php
	require_once('../../controller/database.php');
	require_once('../../controller/conmysqli.php');

	require_once('../../start.php');
	$database = new database();
	$db = new conmysqli($database->server,$database->user,$database->pass,$database->database);

	//campos-tabla-condicion
	
	$textoAnterior = $db->consulta('nombre,idEmpresa,idEstado','Granja','id = '.$_POST['idGranja']);

	while($_cap=mysqli_fetch_assoc($textoAnterior)) 
	{
		$arrayUser[]=$_cap;
		$_cap;
	}
	$anterior = $arrayUser[0]['nombre'].'-'.$arrayUser[0]['idEmpresa'].'-'.$arrayUser[0]['idEstado'];

	$consulta = $db->editar('Granja',' nombre = "'.$_POST['nombre'].'", idEstado = "'.$_POST['idEstado'].'"','id = '.$_POST['idGranja']);

	$textoNuevo = $db->consulta('nombre,idEmpresa,idEstado','Granja','id = '.$_POST['idGranja']);

	while($_cap=mysqli_fetch_assoc($textoNuevo)) 
	{
		$arrayUser[]=$_cap;
		$_cap;
	}
	$nuevo = $arrayUser[0]['nombre'].'-'.$arrayUser[0]['idEmpresa'].'-'.$arrayUser[0]['idEstado'];

	//tabla-campos-valores
	echo $historial = $db->insertar('Historial','fecha,modulo,tabla,accion,textoAnterior,textoNuevo,idEmpleado','"'.date('Y-m-d h:i:s').'","Granjas","Granja","Editar Granja","'.$anterior.'","'.$nuevo.'",'.$_SESSION['usuario']);

	
	header('location:../granjas.php');
	

?>