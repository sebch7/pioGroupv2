<?php
	require_once('../start.php');
?>
<!DOCTYPE html>
<html>
<head>
	<link rel="icon" type="image/png" href="../img/icon.png">
	<title>Pio Group</title>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="../css/style.css">
	<script type="text/javascript" src="../js/jquery.js"></script>
	<script type="text/javascript" src="../js/jquery-ui.js"></script>
	<script type="text/javascript" src="../js/functions.js"></script>
  <script>
  	menuPrincipal();
  </script>
</head>
<body>	
	<header>
		<div id="header-logo">
			<img id="header-logo-img" src="../img/logo.png">
		</div>
	</header>
	
	<div id="container">
		<div id="container-central">
			<h1 id="nombreModulo">Menú Principal - <?php echo $_SESSION['nombreEmpresa'] ?></h1>
			<div id="menuPrincipal">
				
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