<?php
	require_once('../start.php');

		$consulta = $db->consulta('id,nombre','ciudad','1');

		$valor = '';
		while($_cap=mysqli_fetch_assoc($consulta)) 
		{
			$arrayUser[]=$_cap;
		}

		for($i=0;$i<count($arrayUser);$i++)
		{
			echo $arrayUser[$i]['id'].'<br>';
		}
	?>
</body>
</html>