<?php
	
	require_once('../../start.php');

	switch ($_REQUEST['accion']) 
	{
		case 'desactivarInsumo':
			$db->editar('insumo','idEstado = 2','id = '.$_POST['idInsumo']);
		break;
	}

?>