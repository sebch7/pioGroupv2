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
    mostrarTablaUsuariosEmpresas();
  });
  	
  </script>
</head>
<body>
	<?php
		include('headerBody.php');
	?>
	<div id="container">
		<div id="container-central">
			<div class="android-more-section">
				<div class="android-section-title mdl-typography--display-1">Administrar Usuarios principales
					<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab btn-primary" id="nuevoUsuarioEmpresa"><i class="material-icons">add</i></button></div>
					<div id="msg">
					<?php
						if(isset($_GET['msg']))
						{
							switch ($_GET['msg']) {
								case 'CR':
									echo $mensaje = 'El usuario princpal ha sido creado.';
								break;

								case 'DP':
									echo $mensaje = 'El usuario principal ya se encuentra registrado.';
								break;	
							}
						}
					?>
				</div>
				<table id="example" class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
					<thead id="tablaInfoHead">
						<th>Nombres</th>
						<th>Identificacion</th>
						<th>Empresa</th>
						<th>Ciudad</th>
						<th>Telefonos</th>
						<th>Estado</th>
						<th>Editar</th>
					</thead>
			</table>
			</div>
		</div>
	</div>
	<?php
		include('footer.php');
	?>
</body>
</html>