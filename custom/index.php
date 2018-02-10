<?php
	session_start();

	if(isset($_SESSION['usuario']))
	{
		header('location:pages/home.php');
	}
	else
	{
		session_unset();
		session_destroy(); 
	}
?>
<!DOCTYPE html>
<html>
<head>
	<link rel="icon" type="image/png" href="img/icon.png">
	<title>Pio Group</title>
	<link rel="stylesheet" type="text/css" href="css/styleLogin.css">
	<link rel="stylesheet" type="text/css" href="css/modal.css">
	<meta charset="UTF-8">
</head>
<body>
<header>
</header>
<div id="modal">
	<div id="content-modal">
		
	</div>
</div>
<div id="container">
	<div id="container-central">
		<p>Bienvenido,<br>Inicia sesión para administrar tu empresa.</p>
		<div id="tarjeta">
				<div id="titulo_tarjeta">
					<div id="header-logo">
						<img src="img/logo.png">
					</div>
				</div>
			<form name="formulario" id="formulario" method="post" action="validation.php">
				<div id="contenido_tarjeta">
					<label>Usuario</label>
					<input type="text" name="user" id="user" class="inp" required="required">
					<label>Contraseña</label>
					<input type="password" name="password" ismap="password" class="inp" required="required">
					<button type="submit" class="btn success">Ingresar</button>
				</div>
			</form>
			<div id="pie_tarjeta">
			<a href="recuperarContrasena.php"><small>He olvidado mi contraseña</small></a>
			</div>
		</div>
	</div>	
</div>
<?php
	include('pages/footer.php');
?>
</body>
</html>