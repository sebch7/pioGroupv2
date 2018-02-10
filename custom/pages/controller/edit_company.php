<?php
	require_once('../../controller/database.php');
	require_once('../../controller/conmysqli.php');

	require_once('../../start.php');
	$database = new database();
	$db = new conmysqli($database->server,$database->user,$database->pass,$database->database);

	//campos-tabla-condicion
	
	$textoAnterior = $db->consulta('nombre,nit,telefono,personaResponsable,idEstado','Empresa','id = '.$_POST['idEmpresa']);

	while($_cap=mysqli_fetch_assoc($textoAnterior)) 
	{
		$arrayUser[]=$_cap;
		$_cap;
	}
	$anterior = 'Nombre: '.$arrayUser[0]['nombre'].', nit: '.$arrayUser[0]['nit'].', telefono: '.$arrayUser[0]['telefono'].', Persona responsable: '.$arrayUser[0]['personaResponsable'].', Estado: '.$arrayUser[0]['idEstado'];

	$consulta = $db->editar('Empresa',' nombre = "'.$_POST['nombre'].'", nit = "'.$_POST['nit'].'", telefono = "'.$_POST['telefono'].'", personaResponsable = "'.$_POST['personaResponsable'].'", idEstado = "'.$_POST['idEstado'].'"','id = '.$_POST['idEmpresa']);

	$nuevo = $_POST['nombre'].'-'.$_POST['nit'].'-'.$_POST['telefono'].'-'.$_POST['personaResponsable'].'-'.$_POST['idEstado'];

	//tabla-campos-valores
	echo $historial = $db->insertar('Historial','fecha,modulo,tabla,accion,textoAnterior,textoNuevo,idEmpleado','"'.date('Y-m-d h:i:s').'","Empresas","Empresa","Editar Empresa","'.$anterior.'","'.$nuevo.'",'.$_SESSION['usuario']);

	
	header('location:../empresas.php');
	

?>