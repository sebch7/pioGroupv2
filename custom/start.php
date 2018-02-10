<?php
	
	session_start();
	if(!isset($_SESSION['usuario']))
	{
		header('location:index.php');
	}

	require_once('controller/database.php');
	require_once('controller/conmysqli.php');

	$database = new database();
	$db = new conmysqli($database->server,$database->user,$database->pass,$database->database);

	
	$validacion = $db->validacion();

	$validacion;

	if(!$validacion)
	{
		// remove all session variables
		session_unset(); 
		// destroy the session 
		session_destroy();

		header('location:index.php');
	}



?>