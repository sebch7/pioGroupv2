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
    mostrarTablaUsuariosEstudiantes();
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
				<div class="android-section-title mdl-typography--display-1">Mis estudiantes
					<!-- Colored mini FAB button --><button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab btn-primary" id="nuevoUsuarioEstudiante"><i class="material-icons">add</i></button></div>
					<div id="msg">
					<?php
						if(isset($_GET['msg']))
						{
							switch ($_GET['msg']) {
								case 'CR':
									echo $mensaje = 'El estudiante ha sido creado.';
								break;

								case 'DP':
									echo $mensaje = 'El estudiante ya se encuentra registrado.';
								break;	
							}
						}
					?>
				</div>
				<table id="example" class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
					<thead id="tablaInfoHead">
						<th>Nombres</th>
						<th>Identificación</th>
						<th>Curso</th>
						<th>Ciudad</th>
						<th>Teléfonos</th>
						<!--<th>Nombre del acudiente</th>
						<th>Telefono del acudiente</th>
						<th>E-mail del acudiente</th>-->
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