<?php		
	require_once('controller/conmysqli.php');
	require_once('controller/database.php');

	$database = new database();
	$conmysqli = new conmysqli($database->server,$database->user,$database->pass,$database->database);

	echo $login = $conmysqli->iniciarSesion($_POST['user'], $_POST['password']);

	
	switch ($login) {
		case 'IN':
			// remove all session variables
			session_unset(); 
			// destroy the session 
			session_destroy(); 
			//envio pagina error login
			header('location:recuperarContrasena.php?op=IN');
		break;
		case 'SC':

			header('location:pages/home.php');
		break;
		case 'CE':
			// remove all session variables
			session_unset(); 
			// destroy the session 
			session_destroy(); 
			//envio pagina error login
			header('location:login_error.php');
		break;
		case 'UP':
			// remove all session variables
			session_unset(); 
			// destroy the session 
			session_destroy(); 
			//envio pagina error login
			header('location:login_error.php');
		break;
		default:
			// remove all session variables
			session_unset(); 
			// destroy the session 
			session_destroy(); 
			//envio pagina error login
			header('location:index.php');
		break;
	}
	

?>