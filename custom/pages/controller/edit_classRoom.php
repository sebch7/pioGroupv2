<?php
	require_once('../../controller/database.php');
	require_once('../../controller/conmysqli.php');

	require_once('../../start.php');
	$database = new database();
	$db = new conmysqli($database->server,$database->user,$database->pass,$database->database);

	//campos-tabla-condicion
	$textoAnterior = $db->consulta('Curso.nombre as nombre,Curso.capacidad as capacidad,Jornada.nombre as jornada,Estado.nombre as estado','Curso LEFT JOIN Jornada ON Jornada.id = Curso.idJornada LEFT JOIN estado ON Estado.id = Curso.idEstado','curso.id = '.$_POST['idCurso']);

	while($_cap=mysqli_fetch_assoc($textoAnterior)) 
	{
		$arrayUser[]=$_cap;
		$_cap;
	}

	$anterior = 'Nombre: '.$arrayUser[0]['nombre'].', Capacidad:'.$arrayUser[0]['capacidad'].', Jornada: '.$arrayUser[0]['jornada'].', Estado: '.$arrayUser[0]['estado'];

	$consulta = $db->editar('Curso',' nombre = "'.$_POST['nombre'].'",capacidad = "'.$_POST['capacidad'].'", idJornada = "'.$_POST['idJornada'].'", idEstado = "'.$_POST['idEstado'].'"','Curso.id = '.$_POST['idCurso']);

	$nuevo = 'Nombre: '.$_POST['nombre'].', Capacidad: '.$_POST['capacidad'].', Jornada: '.$_POST['idJornada'].', Estado: '.$_POST['idEstado'];

	//tabla-campos-valores
	$historial = $db->insertar('Historial','fecha,modulo,tabla,accion,textoAnterior,textoNuevo,idEmpleado','"'.date('Y-m-d h:i:s').'","cursos","Curso","Editar Curso","'.$anterior.'","'.$nuevo.'",'.$_SESSION['usuario']);


	header('location:../curso.php');
	

?>