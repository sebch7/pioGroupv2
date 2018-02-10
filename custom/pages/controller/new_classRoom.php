<?php
	require_once('../../controller/database.php');
	require_once('../../controller/conmysqli.php');

	require_once('../../start.php');
	$database = new database();
	$db = new conmysqli($database->server,$database->user,$database->pass,$database->database);

	$consulta = $db->insertar('Curso','nombre,capacidad,idJornada,idEmpresa,idEstado,fechaCreacion',"'".$_POST["nombre"]."','".$_POST["capacidad"]."','".$_POST["idJornada"]."','".$_SESSION["empresa"]."','".$_POST["idEstado"]."','".date('Y-m-d')."'");


	$historial = $db->insertar('Historial','fecha,modulo,tabla,accion,textoAnterior,textoNuevo,idEmpleado','"'.date('Y-m-d h:i:s').'","Cursos","Curso","Nuevo curso","","'.$_POST['nombre'].'",'.$_SESSION['usuario']);

	header('location:../curso.php?msg=CR');


?>