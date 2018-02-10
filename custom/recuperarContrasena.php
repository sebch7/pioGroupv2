<?php
	session_start();

	if(isset($_SESSION['empleado']))
	{
		header('location:pages/menuPrincipal.php');
	}
	else
	{
		// remove all session variables
		session_unset(); 
		// destroy the session 
		session_destroy(); 
	}
?>
<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
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
		<p>
			<?php
				if(!isset($_GET['op']))
				{
					$_GET['op'] = 'U';
				}
				if($_GET['op'] == 'IN')
					echo "Has superado el limite de intentos, <br>genera una contraseña nueva.";
			?>
		</p>
		<div id="tarjeta">
			<div id="titulo_tarjeta">
					<div id="header-logo">
						<img src="img/logo.png">
					</div>
				</div>
			<div id="contenido_tarjeta">
				 <input type="text" name="" class="inp" placeholder="Ingrese su Usuario">
				 <input type="text" name="" class="inp" placeholder="Ingrese su correo electronico">
				 <button class="btn success" onclick="location.assign('index.php')">Enviar</button>
				 <button class="btn success" onclick="location.assign('index.php')">volver</button>
			</div>
			<div id="pie_tarjeta">
				<small>A continuación se enviará un mensaje con la nueva clave</small>
			</div>
		</div>
	</div>	
</div>
<footer>
	<a href="acercade.html"><small class="left">Acerca de Pio Group ®</small></a>
	<a href="Privacidad.html"><small class="left">Privacidad</small></a>
	<a href="ayuda.html"><small class="left">Ayuda</small></a>
	<br>
	<small>© Todos los derechos reservados 2017</small>
</footer>
</body>
</html>