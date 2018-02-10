<?php
	
	require_once('../../start.php');

	switch ($_REQUEST['accion']) {

		case 'consultaUsuariosPrincipales':

			$arrayUser=array();

			$resultado = $db->consulta('Empleado.identificacion as identificacion,CONCAT(Empleado.primerNombre," ",Empleado.segundoNombre," ",Empleado.primerApellido," ",Empleado.segundoApellido) as nombres,Empleado.identificacion as identificacion,Ciudad.nombre as ciudad,CONCAT(Empleado.telefonoFijo," - ",Empleado.telefonoCelular) as telefonos,Perfil.nombre as perfil,Estado.nombre as estado,Empresa.nombre as empresa','Empleado LEFT JOIN Ciudad ON Ciudad.id = Empleado.idCiudad LEFT JOIN Usuario ON Usuario.idEmpleado = Empleado.identificacion LEFT JOIN Perfil ON Usuario.idPerfil = Perfil.id LEFT JOIN Estado ON Estado.id = Empleado.idEstado LEFT JOIN Empresa ON Empresa.id = Empleado.idEmpresa','Usuario.idPerfil = 2');
			
			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

<<<<<<< HEAD
			$arrayUser=array();

			$resultado = $db->consulta('Empleado.identificacion,CONCAT(Empleado.primerNombre," ",Empleado.segundoNombre," ",Empleado.primerApellido," ",Empleado.segundoApellido) as nombres,Empleado.identificacion as identificacion,Ciudad.nombre as ciudad,CONCAT(Empleado.telefonoFijo," - ",Empleado.telefonoCelular) as telefonos,Perfil.nombre as perfil,Estado.nombre as estado,IFNULL(Granja.nombre,"No Asignada") as granja','Empleado LEFT JOIN Ciudad ON Ciudad.id = Empleado.idCiudad LEFT JOIN Usuario ON Usuario.idEmpleado = Empleado.identificacion LEFT JOIN Perfil ON Usuario.idPerfil = Perfil.id LEFT JOIN Estado ON Estado.id = Empleado.idEstado LEFT JOIN Granja ON Granja.id = Empleado.idGranja','Empleado.idEmpresa = '.$_SESSION['empresa']);
=======
		case 'consultaUsuriosEstudiantes':

>>>>>>> e2536ef2cf20fb1624212151dc01c596b7d259b3
			
			$arrayUser=array();

			$resultado = $db->consulta('CONCAT(Empleado.primerNombre," ",Empleado.segundoNombre," ",Empleado.primerApellido," ",Empleado.segundoApellido) as nombres,Empleado.identificacion as identificacion,Ciudad.nombre as ciudad,CONCAT(Empleado.telefonoFijo," - ",Empleado.telefonoCelular) as telefonos,Perfil.nombre as perfil,Estado.nombre as estado,Curso.nombre as curso,CONCAT(Acudiente.nombre," ", Acudiente.apellido) as nombreAcudiente ,CONCAT(Acudiente.numeroTelefono,"-",Acudiente.numeroCelular) as telefonoAcudiente, Acudiente.correoElectronico as emailAcudiente','Empleado LEFT JOIN Ciudad ON Ciudad.id = Empleado.idCiudad LEFT JOIN Usuario ON Usuario.idEmpleado = Empleado.identificacion LEFT JOIN Perfil ON Usuario.idPerfil = Perfil.id LEFT JOIN Estado ON Estado.id = Empleado.idEstado LEFT JOIN Curso ON  Curso.id = Usuario.idCurso LEFT JOIN Acudiente ON Acudiente.idEmpleado = Empleado.identificacion','Usuario.idPerfil = 3 and Empleado.idEmpresa = '.$_SESSION['empresa']);
			
			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'consultaUsuriosDocentes':

			$arrayUser=array();

			$resultado = $db->consulta('CONCAT(Empleado.primerNombre," ",Empleado.segundoNombre," ",Empleado.primerApellido," ",Empleado.segundoApellido) as nombres,Empleado.identificacion as identificacion,Ciudad.nombre as ciudad,CONCAT(Empleado.telefonoFijo," - ",Empleado.telefonoCelular) as telefonos,Estado.nombre as estado','Empleado LEFT JOIN Ciudad ON Ciudad.id = Empleado.idCiudad LEFT JOIN Usuario ON Usuario.idEmpleado = Empleado.identificacion LEFT JOIN Perfil ON Usuario.idPerfil = Perfil.id LEFT JOIN Estado ON Estado.id = Empleado.idEstado','Usuario.idPerfil = 4 and Empleado.idEmpresa = '.$_SESSION['empresa']);
			
			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;
		
		case 'consultaEmpresas':
			
			$arrayUser=array();
			//consulta los usuarios de una empresa
			$resultado = $db->consulta('Empresa.id as id,Empresa.nombre as nombre,Pais.nombre as pais,Empresa.telefono as telefono,Empresa.nit as nit,Empresa.personaResponsable as responsable,Departamento.nombre as departamento,Ciudad.nombre as ciudad,Estado.Nombre as estado,COUNT(DISTINCT Curso.id) as cursos, PlanComercial.nombre as planComercial','Empresa LEFT JOIN Pais ON Pais.id = Empresa.idPais LEFT JOIN Departamento ON Departamento.id = Empresa.idDepartamento LEFT JOIN Ciudad ON Ciudad.id = Empresa.idCiudad LEFT JOIN Estado ON Estado.id = Empresa.idEstado LEFT JOIN Curso ON Curso.idEmpresa = Empresa.id LEFT JOIN PlanComercial ON PlanComercial.id = Empresa.idPlanComercial','1 GROUP BY Empresa.id');

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

	

		case 'consultarCursos':
			$arrayUser=array();
			//consulta los usuarios de una empresa
<<<<<<< HEAD
		 	$resultado = $db->consulta('Insumo.id as id,Insumo.nombre as nombre,Insumo.fechaInicio as fechaInicio,Insumo.fechaFinal as fechaFinal,Insumo.Cantidad as cantidad,Insumo.fechaCreacion as fechaCreacion,Insumo.cantidadUsada as cantidadUsada,Granja.nombre as Granja,Granja.id as idGranja,TipoCantidad.abreviatura as TipoCantidad','Insumo LEFT JOIN Granja ON Insumo.idGranja = Granja.id LEFT JOIN Empresa ON Empresa.id = Granja.idEmpresa LEFT JOIN TipoCantidad ON TipoCantidad.id = Insumo.idTipoCantidad','1 '.$consultaExtra.'');

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;


		
		case 'consultaInsumoGalpon':
			$arrayUser=array();
			
			$resultado = $db->consulta('Insumo.Nombre as insumo,Galpon.nombre as galpon,InsumoGalpon.fechaInicio as fechaInicio,InsumoGalpon.cantidad as cantidad, TipoCantidad.nombre as tipo','InsumoGalpon LEFT JOIN Galpon ON InsumoGalpon.idGalpon = Galpon.id LEFT JOIN Insumo ON Insumo.id = InsumoGalpon.idInsumo LEFT JOIN TipoCantidad ON TipoCantidad.id = Insumo.idTipoCantidad','');
=======
		 	$resultado = $db->consulta('Curso.id as id,Curso.nombre as nombre,Empresa.nombre as empresa, Curso.capacidad as capacidad,Jornada.nombre as jornada,Estado.nombre as estado','Curso LEFT JOIN Jornada ON Jornada.id = Curso.idJornada LEFT JOIN Estado ON Estado.id = Curso.idEstado LEFT JOIN Empresa ON Empresa.id = Curso.idEmpresa','Curso.idEmpresa = '.$_SESSION['empresa']);
>>>>>>> e2536ef2cf20fb1624212151dc01c596b7d259b3

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'consultarDocentes':
			$consultaExtra = '';
			if($_POST['idCurso'] != 0)
			{
				$consultaExtra = '';
			}
			else
			{
				$consultaExtra = '';
			}
			$arrayUser=array();
			//consulta los usuarios de una empresa
		 	$resultado = $db->consulta('Docente.id,CONCAT(Docente.nombre,Docente.apellido) as nombre,Curso.nombre as curso,Docente.telefonoFijo as fijo, Docente.telefonoMovil as movil','Docente LEFT JOIN Curso ON Curso.id = Docente.idCurso','1 '.$consultaExtra.'');

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


		case 'cargarCrusos':
			$arrayUser=array();
			//consulta los usuarios de una empresa
			$resultado = $db->consulta('id,nombre','Curso','idEmpresa = "'.$_SESSION['empresa'].'" and idEstado = 1');

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;


		case 'cargarJornadas':
			$arrayUser=array();
			//consulta los usuarios de una empresa
			$resultado = $db->consulta('id,nombre','Jornada','1');

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


		
		case 'cargarCursos':
			$arrayUser=array();
			//consulta los usuarios de una empresa
			$resultado = $db->consulta('id,nombre','Curso','idEstado = 1 and idEmpresa = '.$_SESSION['empresa']);

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

		case 'consultaUsurioPrincipal':
			$arrayUser=array();
			
			$resultado = $db->consulta('Empleado.primerNombre,Empleado.segundoNombre,Empleado.primerApellido,Empleado.segundoApellido,Empleado.fechaNacimiento,Empleado.idTipoDocumento,Empleado.identificacion,Empleado.idEstado,Empleado.telefonoFijo,Empleado.telefonoCelular,Empleado.direccion,Empleado.idGenero,Empleado.idEmpresa','Empleado','Empleado.identificacion = '.$_POST['idEmpleado']);

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'consultaEstudiante':
			$arrayUser=array();
			
			$resultado = $db->consulta('Empleado.primerNombre,Empleado.segundoNombre,Empleado.primerApellido,Empleado.segundoApellido,Empleado.fechaNacimiento,Empleado.idTipoDocumento,Empleado.identificacion,Empleado.idEstado,Empleado.telefonoFijo,Empleado.telefonoCelular,Empleado.idAdministradoraEps,Empleado.idPais,Empleado.idDepartamento,Empleado.idCiudad,Empleado.direccion,Empleado.idGenero,Empleado.idEmpresa,Usuario.idPerfil as idPerfil,Usuario.idCurso as idCurso','Empleado LEFT JOIN Usuario ON Usuario.idEmpleado = Empleado.identificacion ','Empleado.identificacion = '.$_POST['idEmpleado']);

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


		case 'consultaCurso':
			$arrayUser=array();
			//consulta los usuarios de una empresa

			$resultado = $db->consulta('id,nombre,idEmpresa,idEstado,idJornada,capacidad','Curso','Curso.id = '.$_POST['idCurso']);

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;

		case 'cargarMenu':
			$arrayUser=array();
			//consulta los usuarios de una empresa
			$resultado = $db->consulta('Menu.nombre as nombre,Menu.enlace as enlace,Menu.img as img','MenuPerfil LEFT JOIN Menu ON Menu.id = MenuPerfil.idMenu','idPerfil = '.$_SESSION['idPerfil'].' ORDER BY id ASC');

			while($_cap=mysqli_fetch_assoc($resultado)) 
			{
				$arrayUser[]=$_cap;
			}

			echo json_encode($arrayUser);
		break;
		
	}

?>