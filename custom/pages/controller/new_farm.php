<?php
	require_once('../../controller/database.php');
	require_once('../../controller/conmysqli.php');

	require_once('../../start.php');
	$database = new database();
	$db = new conmysqli($database->server,$database->user,$database->pass,$database->database);

	$validacion = $db->consulta('id','Granja','nombre = '.$_POST['nombre']);
	
	if(mysqli_fetch_assoc($validacion))
	{
		header('location:../empresas.php?msg=DP');	
	}
	else
	{
		echo $consulta = $db->insertar('Granja','nombre,idEmpresa,idPais,idDepartamento,idCiudad,idEstado,fechaCreacion',"'".$_POST["nombre"]."','".$_SESSION["empresa"]."','".$_POST["idPais"]."','".$_POST["idDepartamento"]."','".$_POST["idCiudad"]."','".$_POST["idEstado"]."','".date('Y-m-d')."'");

		$historial = $db->insertar('Historial','fecha,modulo,tabla,accion,textoAnterior,textoNuevo,idEmpleado','"'.date('Y-m-d h:i:s').'","Granjas","Granja","Nueva Granja","","'.$_POST['nombre'].'",'.$_SESSION['usuario']);

		header('location:../granjas.php?msg=CR');
	}


?>