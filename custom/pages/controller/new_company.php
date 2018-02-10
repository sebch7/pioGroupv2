<?php
	require_once('../../controller/database.php');
	require_once('../../controller/conmysqli.php');

	require_once('../../start.php');
	$database = new database();
	$db = new conmysqli($database->server,$database->user,$database->pass,$database->database);

	$validacion = $db->consulta('id','Empresa','nit = '.$_POST['nit']);
	
	if(mysqli_fetch_assoc($validacion))
	{
		header('location:../empresas.php?msg=DP');	
	}
	else
	{
		echo $consulta = $db->insertar('Empresa','nombre,nit,telefono,personaResponsable,idPais,idDepartamento,idCiudad,idEstado,idPlanComercial,fechaCreacion',"'".$_POST["nombre"]."','".$_POST["nit"]."','".$_POST["telefono"]."','".$_POST["personaResponsable"]."','".$_POST["idPais"]."','".$_POST["idDepartamento"]."','".$_POST["idCiudad"]."','".$_POST["idEstado"]."','".$_POST["idPlanComercial"]."','".date('Y-m-d')."'");

		$historial = $db->insertar('Historial','fecha,modulo,tabla,accion,textoAnterior,textoNuevo,idEmpleado','"'.date('Y-m-d h:i:s').'","Empresas","Empresa","Nueva Empresa","","'.$_POST['nombre'].'",'.$_SESSION['usuario']);

		header('location:../empresas.php?msg=CR');
	}


?>