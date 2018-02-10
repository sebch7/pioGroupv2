<?php
	require_once('../start.php');
?>
<!DOCTYPE html>
<html>
<head>
	<?php
		include('header.php');
	?>
  <script>
  $(function() 
  {
    mostrarTablaGalpones();
  });
  	
  </script>
</head>
<body>
	<?php
		include('headerBody.php');
	?>
	<div id="container">
		<div id="container-central">
			<h1 id="nombreModulo"><?php echo $_SESSION['nombreEmpresa'] ?></h1>
			<div class="container-Granja">
				<h2>Nombre de la granja</h2>
				<h5>Bogota D.C, Colombia</h5>
				<h5>Cantidad de galpones: <b>3</b></h5>
				<br>
				<h3>Galpon 1:</h3>
				<h5>Capacidad: 3000 - Disponible: 200</h5>
				<br>
				<h3>Insumos:</h3>
				<div class="container-Granja-itemInsumo"><span>Agua destilada (30%):</span><div class="porcentajeUso30"></div></div>
				<div class="container-Granja-itemInsumo"><span>Clorox (40%):</span><div class="porcentajeUso40"></div></div>
				<div class="container-Granja-itemInsumo"><span>Concentrado (70%):</span><div class="porcentajeUso70"></div></div>
				<div class="container-Granja-itemInsumo"><span>Vitamina C (90%):</span><div class="porcentajeUso90"></div></div>
				<h6>Ultima actualizacion: 12 de marzo de 2017</h6>
			</div>
			<div class="container-Granja">
				<h2>Nombre de la granja</h2>
				<h5>Bogota D.C, Colombia</h5>
				<h5>Cantidad de galpones: <b>3</b></h5>
				<br>
				<h3>Galpon 1:</h3>
				<h5>Capacidad: 3000 - Disponible: 200</h5>
				<br>
				<h3>Insumos:</h3>
				<div class="container-Granja-itemInsumo"><span>Agua destilada (30%):</span><div class="porcentajeUso30"></div></div>
				<div class="container-Granja-itemInsumo"><span>Clorox (40%):</span><div class="porcentajeUso40"></div></div>
				<div class="container-Granja-itemInsumo"><span>Concentrado (70%):</span><div class="porcentajeUso70"></div></div>
				<div class="container-Granja-itemInsumo"><span>Vitamina C (90%):</span><div class="porcentajeUso90"></div></div>
				<h6>Ultima actualizacion: 12 de marzo de 2017</h6>
			</div>
			<div class="container-Granja">
				<h2>Nombre de la granja</h2>
				<h5>Bogota D.C, Colombia</h5>
				<h5>Cantidad de galpones: <b>3</b></h5>
				<br>
				<h3>Galpon 1:</h3>
				<h5>Capacidad: 3000 - Disponible: 200</h5>
				<br>
				<h3>Insumos:</h3>
				<div class="container-Granja-itemInsumo"><span>Agua destilada (30%):</span><div class="porcentajeUso30"></div></div>
				<div class="container-Granja-itemInsumo"><span>Clorox (40%):</span><div class="porcentajeUso40"></div></div>
				<div class="container-Granja-itemInsumo"><span>Concentrado (70%):</span><div class="porcentajeUso70"></div></div>
				<div class="container-Granja-itemInsumo"><span>Vitamina C (90%):</span><div class="porcentajeUso90"></div></div>
				<h6>Ultima actualizacion: 12 de marzo de 2017</h6>
			</div>
		</div>
	</div>
	<?php
		include('footer.php');
	?>
</body>
</html>