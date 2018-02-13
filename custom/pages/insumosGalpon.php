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
    mostrarTablaInsumosGalpon();
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
				<div class="android-section-title mdl-typography--display-1">Asignar insumos a galpon
					<!-- Colored mini FAB button --><button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab btn-primary" id="nuevoInsumoGalpon"><i class="material-icons">add</i></button></div>
					<div id="msg">
				</div>
				
			</div>
		</div>
	</div>
	<?php
		include('footer.php');
	?>
</body>
</html>