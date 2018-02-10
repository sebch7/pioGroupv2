<?php

require_once('start.php');
//session_start();
setlocale(LC_MONETARY, 'es_CO');
setlocale(LC_TIME, "es_ES");
define('TIMEZONE', "America/Bogota");
date_default_timezone_set(TIMEZONE);

if(isset($_SESSION['id_Empleado']))
{
	$db->consulta("*","usuario","id_Empleado='".addslashes($_SESSION['id_Empleado'])."' And estado='on'");

	$autenticacion=$db->fetch_array();

	$_SESSION['perfil']=$autenticacion['id_Perfil'];

	$usuario_validado=true;
	if(!isset($_SESSION['id_Empleado'])||$_SESSION['id_Empleado']!=$autenticacion['identificacion'])
	{
		session_unregister('id_Empleado');
		session_destroy();
		$usuario_validado=false;
	}
}
else
{
	$db->editar("usuario","ultimoLogin='".getFechaTiempoActual()."'","id_Empleado='".$autenticacion['identificacion']."'");
		
	$db1->consulta("CONCAT(primerNombre,' ',segundoNombre) as nombres,CONCAT(primerApellido,' ',segundoApellidos) as apellidos,email,granja,empresa,identificacion","empleado","identificacion='".$autenticacion['id_Empleado']."'");
	
	$cuenta=$db1->fetch_array();
	$autenticacion['email']=$cuenta['email'];
	$autenticacion['nombres']=$cuenta['nombres'];
	$autenticacion['apellidos']=$cuenta['apellidos'];
		
	$autenticacion['granja']=$cuenta['granja'];
	$autenticacion['empresa']=$cuenta['empresa'];
		
	$autenticacion['identificacion']=$cuenta['identificacion'];
		
	session_unregister('identificacion');
	session_destroy();
	$usuario_validado=false;
}

?>
