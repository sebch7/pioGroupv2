<?php
	require_once('start.php');
	// remove all session variables
	session_unset(); 
	// destroy the session 
	session_destroy();

	header('location:index.php');
?>