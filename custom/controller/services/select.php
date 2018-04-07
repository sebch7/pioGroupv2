<?php
	
	require_once('../../start.php');

	switch ($_REQUEST['accion']) {



		case 'cargarComunicacionDocente':
			$arrayUser=array();

			$resultado = $db->consulta('tipoNovedad.nombre as novedad,novedad.informacion,novedad.fechaCreacion,CONCAT(Empleado.primerNombre," ",Empleado.primerApellido) as docente','novedad LEFT JOIN Empleado ON Empleado.identificacion = novedad.idEmpleado LEFT JOIN tipoNovedad ON tipoNovedad.id = Novedad.idTipoNovedad','Novedad.idEmpleado = '.$_SESSION['usuario']);
			
			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;


		case 'consultaUsuriosEmpresas':

			$arrayUser=array();

			$resultado = $db->consulta('Empleado.identificacion as identificacion,CONCAT(Empleado.primerNombre," ",Empleado.segundoNombre," ",Empleado.primerApellido," ",Empleado.segundoApellido) as nombre,Ciudad.nombre as ciudad,CONCAT(Empleado.telefonoFijo," - ",Empleado.telefonoCelular) as telefonos,Perfil.nombre as perfil,Estado.nombre as estado,Empresa.nombre as empresa','Empleado LEFT JOIN Ciudad ON Ciudad.id = Empleado.idCiudad LEFT JOIN Usuario ON Usuario.idEmpleado = Empleado.identificacion LEFT JOIN Perfil ON Usuario.idPerfil = Perfil.id LEFT JOIN Estado ON Estado.id = Empleado.idEstado LEFT JOIN Empresa ON Empresa.id = Empleado.idEmpresa','1');
			
			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'cargarProveedores':

			$arrayUser=array();

			$resultado = $db->consulta('nombre,identificacion as id','proveedor','idEmpresa = '.$_SESSION['empresa']);
			
			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'cargarTipoEmbarque':

			$arrayUser=array();

			$resultado = $db->consulta('nombre,id','tipoEmbarque','1');
			
			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'consultaUsurios':

			$consultaExtra = '';
			
			$arrayUser=array();

			$resultado = $db->consulta('CONCAT(Empleado.primerNombre," ",Empleado.segundoNombre," ",Empleado.primerApellido," ",Empleado.segundoApellido) as nombre,Empleado.identificacion as identificacion,Ciudad.nombre as ciudad,CONCAT(Empleado.telefonoFijo," - ",Empleado.telefonoCelular) as telefonos,Perfil.nombre as perfil,Estado.nombre as estado,IFNULL(Granja.nombre,"No Asignada") as granja','Empleado LEFT JOIN Ciudad ON Ciudad.id = Empleado.idCiudad LEFT JOIN Usuario ON Usuario.idEmpleado = Empleado.identificacion LEFT JOIN Perfil ON Usuario.idPerfil = Perfil.id LEFT JOIN Estado ON Estado.id = Empleado.idEstado LEFT JOIN Granja ON Granja.id = Empleado.idGranja','Empleado.idEmpresa = '.$_SESSION['empresa'].$consultaExtra);
			
			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;
		
		case 'consultaEmpresas':
			
			$consultaExtra = '';

			$arrayUser=array();
			//consulta los usuarios de una empresa
			$resultado = $db->consulta('Empresa.id as id,Empresa.nombre as nombre,Pais.nombre as pais,Empresa.telefono as telefono,Empresa.nit as nit,Empresa.personaResponsable as responsable,Departamento.nombre as departamento,Ciudad.nombre as ciudad,Estado.Nombre as estado,COUNT(Granja.id) as granja,PlanComercial.nombre as planComercial','Empresa INNER JOIN Pais ON Pais.id = Empresa.idPais INNER JOIN Departamento ON Departamento.id = Empresa.idDepartamento INNER JOIN Ciudad ON Ciudad.id = Empresa.idCiudad INNER JOIN Estado ON Estado.id = Empresa.idEstado LEFT JOIN Granja ON Granja.idEmpresa = Empresa.id INNER JOIN PlanComercial ON PlanComercial.id = Empresa.idPlanComercial','1 GROUP BY Empresa.id');

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'consultaGranjas':

			$arrayUser=array();
			//consulta los usuarios de una empresa
			$resultado = $db->consulta('Granja.id as id,Empresa.nombre as empresa,Granja.nombre as nombre,Pais.nombre as pais,Departamento.nombre as departamento,Ciudad.nombre as ciudad,Estado.Nombre as estado,COUNT(Galpon.id) as galpon','Granja INNER JOIN Pais ON Pais.id = Granja.idPais INNER JOIN Departamento ON Departamento.id = Granja.idDepartamento INNER JOIN Ciudad ON Ciudad.id = Granja.idCiudad INNER JOIN Estado ON Estado.id = Granja.idEstado INNER JOIN Empresa ON Empresa.id = Granja.idEmpresa LEFT JOIN Galpon ON Galpon.idGranja = Granja.id','1 AND Granja.idEmpresa = '.$_SESSION['empresa'].' GROUP BY Granja.id');

			//if($_SESSION['idPerfil'] == 1)
			//{
				//$consultaExtra = '';
				//if($_POST['idEmpresa'] != 0)
				//{
					//$consultaExtra = 'AND Granja.idEmpresa = '.$_POST['idEmpresa'];
				//}
				$resultado = $db->consulta('Granja.id as id,Granja.nombre as nombre,Pais.nombre as pais,Departamento.nombre as departamento,Ciudad.nombre as ciudad,Estado.Nombre as estado,COUNT(Galpon.id) as galpon','Granja INNER JOIN Pais ON Pais.id = Granja.idPais INNER JOIN Departamento ON Departamento.id = Granja.idDepartamento INNER JOIN Ciudad ON Ciudad.id = Granja.idCiudad INNER JOIN Estado ON Estado.id = Granja.idEstado INNER JOIN Empresa ON Empresa.id = Granja.idEmpresa LEFT JOIN Galpon ON Galpon.idGranja = Granja.id','1  GROUP BY Granja.id');
			//}

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'InformacionGranja':
		$consultaExtra = '';
			
			$arrayUser=array();
			//consulta los usuarios de una empresa
		 	$resultado = $db->consulta('Granja.id as idGranja,Granja.nombre as Granja,COUNT(DISTINCT Galpon.nombre) as galpon,COUNT(DISTINCT Insumo.nombre) as insumos','Empresa LEFT JOIN Granja ON Granja.idEmpresa = Empresa.id LEFT JOIN Galpon ON Galpon.idGranja = Granja.id LEFT JOIN Insumo ON Insumo.idGranja = Granja.id','Empresa.id = '.$_SESSION['empresa'].' GROUP BY granja.id');

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'InformacionGalpon':	
			$arrayUser=array();
			//consulta los usuarios de una empresa
			$resultado = $db->consulta('Galpon.id as idGalpon,Galpon.nombre as nombre,granja.nombre as granja,Galpon.disponibilidad as disponibilidad,TipoClima.nombre as clima,Galpon.capacidad,Estado.nombre as estado','Empresa INNER JOIN Granja ON Empresa.id = Granja.idEmpresa INNER JOIN Galpon ON galpon.idGranja = Granja.id INNER JOIN TipoClima ON TipoClima.id = Galpon.idTipoClima INNER JOIN Estado ON Estado.id = Galpon.idEstado','Granja.id = '.$_POST['idGranja']);

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;


		case 'consultaInsumos':
			$consultaExtra = '';
			/*
			if($_POST['idGranja'] != 0)
			{
				$consultaExtra = 'AND Insumo.idGranja = '.$_POST['idGranja'];
			}
			else
			{
				$consultaExtra = 'AND Granja.idEmpresa = '.$_SESSION['empresa'];
			}
			*/
			$arrayUser=array();
			//consulta los usuarios de una empresa
		 	$resultado = $db->consulta('insumo.id as id,Insumo.nombre as nombre,Insumo.fechaInicio as fechaInicio,Insumo.fechaFinal as fechaFinal,Insumo.Cantidad as cantidad, Insumo.cantidadUsada as cantidadUsada, Insumo.fechaCreacion as fechaCreacion,Granja.nombre as granja,Granja.id as idGranja,TipoCantidad.abreviatura as TipoCantidad','Insumo INNER JOIN Granja ON Insumo.idGranja = Granja.id INNER JOIN Empresa ON Empresa.id = Granja.idEmpresa LEFT JOIN TipoCantidad ON TipoCantidad.id = Insumo.idTipoCantidad','insumo.idEstado = 1');

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;


		
		case 'consultaInsumoGalpon':
			$consultaExtra = '';
			$arrayUser=array();
			
			$resultado = $db->consulta('Insumo.Nombre as insumo,Galpon.nombre as galpon,insumoGalpon.fechaInicio as fechaInicio, insumoGalpon.fechaFinal as fechaFinal,Insumo.cantidadUsada as cantidadUsada,"0" as cantidadUsada, insumoGalpon.cantidad as cantidad, TipoCantidad.nombre as tipo','insumoGalpon INNER JOIN Galpon ON insumoGalpon.idGalpon = Galpon.id INNER JOIN Insumo ON Insumo.id = insumoGalpon.idInsumo INNER JOIN TipoCantidad ON TipoCantidad.id = Insumo.idTipoCantidad','1 '.$consultaExtra.'');

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;


		case 'consultaGalpones':

			$consultaExtra = '';
			/*if($_POST['idGranja'] != 0)
			{
				$consultaExtra = 'Galpon.idGranja = '.$_POST['idGranja'];
			}
			else
			{
				$consultaExtra = 'Empresa.id = '.$_SESSION['empresa'];
			}*/
			
			$arrayUser=array();
			//consulta los usuarios de una empresa
			$resultado = $db->consulta('Galpon.id as id,Galpon.nombre as nombre,granja.nombre as granja,Galpon.disponibilidad as disponibilidad,TipoClima.nombre as clima,Galpon.capacidad,Estado.nombre as estado','Empresa INNER JOIN Granja ON Empresa.id = Granja.idEmpresa INNER JOIN Galpon ON galpon.idGranja = Granja.id INNER JOIN TipoClima ON TipoClima.id = Galpon.idTipoClima INNER JOIN Estado ON Estado.id = Galpon.idEstado','1 '.$consultaExtra);

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'cargarTipoClima':
			$arrayUser=array();
			//consulta los usuarios de una empresa
			$resultado = $db->consulta('id,nombre','TipoClima','1');

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'cargarInsumos':
			$arrayUser=array();
			//consulta los usuarios de una empresa
			$resultado = $db->consulta('id,nombre','Insumo','1');

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'cargarGranjas':
			$arrayUser=array();

			//consulta los usuarios de una empresa
			$resultado = $db->consulta('id,nombre','Granja','1 AND idEmpresa = '.$_SESSION['empresa']);

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'cargarGalpones':
			$arrayUser=array();

			//consulta los usuarios de una empresa
			$resultado = $db->consulta('Galpon.id,Galpon.nombre','Galpon INNER JOIN Granja ON Granja.id = Galpon.idGranja INNER JOIN Empresa ON Empresa.id = Granja.idEMpresa','1 AND Empresa.id = '.$_SESSION['empresa']);

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'cargarPaises':
			$arrayUser=array();
			//consulta los usuarios de una empresa
			$resultado = $db->consulta('id,nombre','Pais','1');

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'cargarEmpresas':
			$arrayUser=array();
			//consulta los usuarios de una empresa
			$resultado = $db->consulta('id,nombre','Empresa','1');

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		
		case 'cargarDepartamentos':
			$arrayUser=array();
			//consulta los usuarios de una empresa
			$resultado = $db->consulta('id,nombre','Departamento','1 order by nombre asc');

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'cargarTipoCantidad':
			$arrayUser=array();
			//consulta los usuarios de una empresa
			$resultado = $db->consulta('id,nombre','TipoCantidad','1 order by nombre asc');

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'cargarCiudades':
			$arrayUser=array();
			//consulta los usuarios de una empresa
			if($_POST['tipo'] == 2)
			{
				$resultado = $db->consulta('id,nombre','Ciudad','SUBSTRING(ciudad.id,1,2) = '.$_POST['idDepartamento']);
			}
			else
			{
				$resultado = $db->consulta('id,nombre','Ciudad','SUBSTRING(ciudad.id,1,1) = '.$_POST['idDepartamento']);	
			}

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'cargarEps':
			$arrayUser=array();
			//consulta los usuarios de una empresa
			$resultado = $db->consulta('id,nombre,nit','AdministradoraEps','1');

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'cargarEstados':
			$arrayUser=array();
			//consulta los usuarios de una empresa
			$resultado = $db->consulta('id,nombre','Estado','1');

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'cargarTipoDocumento':
			$arrayUser=array();
			//consulta los usuarios de una empresa
			$resultado = $db->consulta('id,nombre','TipoDocumento','1');

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'cargarGenero':
			$arrayUser=array();
			//consulta los usuarios de una empresa
			$resultado = $db->consulta('id,nombre','Genero','1');

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'cargarPlanComercial':
			$arrayUser=array();
			//consulta los usuarios de una empresa
			$resultado = $db->consulta('id,CONCAT(nombre," - ",descripcion) as nombre','PlanComercial','1');

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'cargarPerfiles':
			$consultaExtra = '';
			//consulta los usuarios de una empresa
			if($_SESSION['idPerfil'] != 1)
			{
				$consultaExtra = 'AND id != 1';
			}
			$arrayUser=array();
			//consulta los usuarios de una empresa
			$resultado = $db->consulta('id,nombre','Perfil','1 '.$consultaExtra);

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'consultaUsurio':
			$arrayUser=array();
			
			$resultado = $db->consulta('Empleado.primerNombre,Empleado.segundoNombre,Empleado.primerApellido,Empleado.segundoApellido,Empleado.fechaNacimiento,Empleado.idTipoDocumento,Empleado.identificacion,Empleado.idEstado,Empleado.telefonoFijo,Empleado.telefonoCelular,Empleado.idAdministradoraEps,Empleado.idPais,Empleado.idDepartamento,Empleado.idCiudad,Empleado.direccion,Empleado.idGenero,Empleado.idEmpresa,Usuario.idPerfil as idPerfil,Empleado.idGranja as idGranja','Empleado INNER JOIN Usuario ON Usuario.idEmpleado = Empleado.identificacion ','Empleado.identificacion = '.$_POST['idEmpleado']);

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'consultaEmpresa':
			$arrayUser=array();
			//consulta los usuarios de una empresa

			$resultado = $db->consulta('id,nombre,nit,telefono,personaResponsable,idEstado','Empresa','Empresa.id = '.$_POST['idEmpresa']);

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'consultaGranja':
			$arrayUser=array();
			//consulta los usuarios de una empresa

			$resultado = $db->consulta('id,nombre,idEmpresa,idEstado','Granja','Granja.id = '.$_POST['idGranja']);

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'consultaGalpon':
			$arrayUser=array();
			//consulta los usuarios de una empresa

			$resultado = $db->consulta('id,nombre,idTipoClima,idGranja,capacidad,idEstado','Galpon','Galpon.id = '.$_POST['idGalpon']);

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'cargarMenu':
			$arrayUser=array();
			//consulta los usuarios de una empresa
			$resultado = $db->consulta('Menu.nombre as nombre,Menu.enlace as enlace,Menu.img as img','MenuPerfil INNER JOIN Menu ON Menu.id = MenuPerfil.idMenu','idPerfil = '.$_SESSION['idPerfil'].' ORDER BY menu.orden ASC');

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;
		
	}

?>