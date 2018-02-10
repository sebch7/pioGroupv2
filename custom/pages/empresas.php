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
    mostrarTablaEmpresas();
  });
  	
  </script>
</head>
<body>
	<?php
		include('headerBody.php');
	?>
	
	<div id="container">
		<div id="container-central">
			<h1 id="nombreModulo">Administrar Empresas - <?php echo $_SESSION['nombreEmpresa'] ?></h1>
		<div id="msg">
			<?php
				if(isset($_GET['msg']))
				{
					switch ($_GET['msg']) {
						case 'CR':
							echo $mensaje = 'La empresa ha sido creada.';
						break;

						case 'DP':
							echo $mensaje = 'La empresa ya se encuentra registrada.';
						break;	
					}
				}
			?>
		</div>
			<div id="actionMenu">
				<button class="btn success agregar" id="nuevaEmpresa"><i class="material-icons">add</i></button>
			</div>
			<table id="tablaInfo">
				<thead id="tablaInfoHead"></thead>
				<tbody id="tablaInfoBody"></tbody>
			</table>
		</div>
	</div>
	<?php
		include('footer.php');
	?>
</body>
</html>