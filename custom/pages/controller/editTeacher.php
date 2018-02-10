<?php
	require_once('../../controller/database.php');
	require_once('../../controller/conmysqli.php');

	require_once('../../start.php');
	$database = new database();
	$db = new conmysqli($database->server,$database->user,$database->pass,$database->database);

	//campos-tabla-condicion
	$textoAnterior = $db->consulta('Empleado.primerNombre,Empleado.segundoNombre,Empleado.primerApellido,Empleado.segundoApellido,Empleado.telefonoCelular,Empleado.telefonoFijo,Empleado.direccion,Empleado.idEstado,Usuario.idPerfil','Empleado INNER JOIN Usuario ON Usuario.idEmpleado = Empleado.identificacion','identificacion = '.$_POST['identificacion']);

	while($_cap=mysqli_fetch_assoc($textoAnterior)) 
	{
		$arrayUser[]=$_cap;
		$_cap;
	}

	$anterior = 'Primer nombre:'.$arrayUser[0]['primerNombre'].', Segundo nombre: '.$arrayUser[0]['segundoNombre'].', Primer apellido: '.$arrayUser[0]['primerApellido'].', Segundo apellido: '.$arrayUser[0]['segundoApellido'].', Telefono celular: '.$arrayUser[0]['telefonoCelular'].', Telefono fijo:'.$arrayUser[0]['telefonoFijo'].', Direccion: '.$arrayUser[0]['direccion'].', Estado: '.$arrayUser[0]['idEstado'];

	$consulta = $db->editar('Empleado',' primerNombre = "'.$_POST['primerNombre'].'", segundoNombre = "'.$_POST['segundoNombre'].'", primerApellido = "'.$_POST['primerApellido'].'", segundoApellido = "'.$_POST['segundoApellido'].'", telefonoCelular = "'.$_POST['telefonoCelular'].'", telefonoFijo = "'.$_POST['telefonoFijo'].'", direccion = "'.$_POST['direccion'].'", idEstado = '.$_POST['idEstado'],'identificacion = '.$_POST['identificacion']);

	$nuevo = 'Primer nombre:'.$_POST['primerNombre'].', Segundo nombre: '.$_POST['segundoNombre'].', Primer apellido: '.$_POST['primerApellido'].', Segundo apellido: '.$_POST['segundoApellido'].', Telefono celular: '.$_POST['telefonoCelular'].', Telefono fijo:'.$_POST['telefonoFijo'].', Direccion: '.$_POST['direccion'].', Estado: '.$_POST['idEstado'];


	//tabla-campos-valores
	$historial = $db->insertar('Historial','fecha,modulo,tabla,accion,textoAnterior,textoNuevo,idEmpleado','"'.date('Y-m-d h:i:s').'","Estudiante","Estudiante","Editar estudiante","'.$anterior.'","'.$nuevo.'",'.$_SESSION['usuario']);


	header('location:../docente.php');
	

?>