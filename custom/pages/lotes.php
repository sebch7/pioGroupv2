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
    //mostrarTablaGalpones();
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
				<div class="android-section-title mdl-typography--display-1">Mis Lotes
					<!-- Colored mini FAB button --><button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab btn-primary" id="nuevoLote"><i class="material-icons">add</i></button></div>
					<div id="msg">
					<?php
						if(isset($_GET['msg']))
						{
							switch ($_GET['msg']) {
								case 'CR':
									echo $mensaje = 'El lote ha sido creado.';
								break;

								case 'DP':
									echo $mensaje = 'El lote ya se encuentra registrado.';
								break;	
							}
						}
					?>
				</div>
				<table id="example" class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
					<thead id="tablaInfoHead">
						<th>id</th>
						<th>Fecha de Ingreso</th>
						<th>Fecha de Salida</th>
						<th>Proveedor</th>
						<!--<th>Machos</th>-->
						<!--<th>Hembras</th>-->
						<!--<th>Tipo de Embarque</th>-->
						<!--<th>Transportador</th>-->
						<!--<th>Observaciones</th>-->
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