<?php
require_once('database.php');

class conmysqli
{	
	private $conexion;
	#el sql de la última consulta
	public $sql;
	#el resultado de la última consulta
	private $resultado;

	private $consulta;
	#el último registro del último resultado
	private $registro;

	private $token;

	//private $resultado;


  public function __construct($server,$user,$pass,$database)
  {
		$this->server=$server;
		$this->user=$user;
		$this->pass=$pass;
		$this->database=$database;

		$this->conexion = mysqli_connect($server,$user,$pass,$database) or die("error en dataBase");
		mysqli_select_db($this->conexion,$this->database) or die(mysqli_error());
		mysqli_query($this->conexion,"SET NAMES 'utf8'");
		mysqli_query($this->conexion,"SET time_zone='-5:00';");
		date_default_timezone_set('America/Bogota');
	}

	public function consulta($campos,$tabla,$condicion)
	{
		$this->sql='SELECT '.$campos.' FROM '.$tabla.' WHERE '.$condicion.';';
		$this->resultado = mysqli_query($this->conexion, $this->sql);

 		return $this->resultado;
	}

	public function mostrarConsulta($campos,$tabla,$condicion)
	{
		$this->sql='SELECT '.$campos.' FROM '.$tabla.' WHERE '.$condicion.';';
		$this->resultado = mysqli_query($this->conexion, $this->sql);

 		echo $this->sql;
 		return $this->resultado;
	}

	public function insertar($tabla,$campos,$valores)
	{
		$this->sql= 'INSERT INTO '.$tabla.' ('.$campos.') VALUES ('.$valores.');';
		$this->consulta = mysqli_query($this->conexion, $this->sql);
		return $this->sql;
	}

	public function mostrarInsertar($tabla,$campos,$valores)
	{
		$this->sql= 'INSERT INTO '.$tabla.' ('.$campos.') VALUES ('.$valores.');';
		//$this->consulta = mysqli_query($this->conexion, $this->sql);
		echo $this->sql;
	}

	public function editar($tabla,$campos,$condicion)
	{
		if($condicion==null||$condicion=="")
		{
			return 'Error';
		}
		else
		{
			$this->sql= 'UPDATE '.$tabla.' SET '.$campos.' WHERE '.$condicion.';';
			$this->consulta = mysqli_query($this->conexion, $this->sql);
			return $this->sql;
		}
	}

	public function eliminar($tabla,$condicion)
	{
		if($condicion==null||$condicion=="")
		{
			return 'Error';
		}
		else
		{
			$this->sql= 'DELETE FROM '.$tabla.'  WHERE '.$condicion.';';
			$this->consulta = mysqli_query($this->conexion, $this->sql);
			//return $this->sql;
		}
	}

	public function mostrarEditar($tabla,$campos,$condicion)
	{
		if($condicion==null||$condicion=="")
		{
			return 'Error';
		}
		else
		{
			$this->sql= 'UPDATE '.$tabla.' SET '.$campos.' WHERE '.$condicion.';';
			//$this->consulta = mysqli_query($this->conexion, $this->sql);
			echo $this->sql;
		}
	}

	public function iniciarSesion($user,$password)
	{
		$password = md5($password);
		$consulta = $this->consulta('Usuario.idPerfil,Usuario.intentos','Usuario INNER JOIN Empleado ON Usuario.idEmpleado = Empleado.identificacion','idEmpleado = '.$user.' AND idEstado = 1');
		$this->resultado = mysqli_fetch_assoc($consulta);
		
		if($this->resultado)
		{
			if($this->resultado['intentos'] >= 3)
			{
				return 'IN';
			}
			else
			{
				$intentos = $this->resultado['intentos'];
				$consulta = $this->consulta('idPerfil,intentos','usuario','idEmpleado = '.$user.' and contrasena = "'.$password.'"');
				$this->resultado = mysqli_fetch_assoc($consulta);
			}

			if($this->resultado)
			{
				//funcion en caso de que concidan los registros
				if($this->resultado['intentos'] >= 3)
				{
					return 'IN';
				}
				else
				{

					$this->editar('Usuario','intentos = 0,ultimoLogin = "'.date('Y-m-d h:m:s').'"','idEmpleado = '.$user);
					$_SESSION['idPerfil'] = $this->resultado['idPerfil'];

					$this->mostrarConsulta('CONCAT(Empleado.primerNombre," ",Empleado.primerApellido) as empleado,Empleado.identificacion as usuario,Usuario.idPerfil as idPerfil,Perfil.nombre as perfil,Empleado.idEmpresa as Empresa,Empresa.nombre as nombreEmpresa,Usuario.contrasena as contrasena','Empleado INNER JOIN Usuario ON Usuario.idEmpleado = Empleado.identificacion INNER JOIN Perfil ON Perfil.id = Usuario.idPerfil INNER JOIN Empresa ON Empresa.id = Empleado.idEmpresa','Empleado.identificacion = '.$user);
					$this->resultado = mysqli_query($this->conexion,$this->sql) or die(mysqli_error($this->conexion));
					$this->resultado = mysqli_fetch_assoc($this->resultado);

					session_start();
					$_SESSION['empleado'] = $this->resultado['empleado'];//nombres
					$_SESSION['usuario'] = $this->resultado['usuario'];//identificacion
					$_SESSION['idPerfil'] = $this->resultado['idPerfil'];//idPefil
					$_SESSION['perfil'] = $this->resultado['perfil'];//nombrePerfil
					$_SESSION['empresa'] = $this->resultado['Empresa'];//idEmpresa
					$_SESSION['nombreEmpresa'] = $this->resultado['nombreEmpresa'];//idEmpresa
					$_SESSION['contrasena'] = $this->resultado['contrasena'];;
					return 'SC';
				}
			}
			else
			{
				$this->editar('Usuario','intentos = '.($intentos+1),'idEmpleado = '.$user);
				$this->consulta('intentos','Usuario','idEmpleado = '.$user);
				$this->resultado = mysqli_query($this->conexion,$this->sql) or die(mysqli_error($this->conexion));
				$this->resultado = mysqli_fetch_assoc($this->resultado);
				if($this->resultado['intentos'] >= 3)
				{
					return 'IN';
				}
				else
				{
					return 'CE';
				}
			}
		}
		else
		{
			return 'UP';
		}
	}

	public function validacion()
	{
		$this->consulta('Usuario.idPerfil as idPerfil,Perfil.nombre as perfil','Usuario INNER JOIN Perfil ON Perfil.id = Usuario.idPerfil ','Usuario.idEmpleado = '.$_SESSION['usuario'].' AND Usuario.contrasena = "'.$_SESSION['contrasena'].'"');
		$this->resultado = mysqli_query($this->conexion,$this->sql) or die(mysqli_error($this->conexion));
		$this->resultado = mysqli_fetch_assoc($this->resultado);

		$_SESSION['idPerfil'] = $this->resultado['idPerfil'];//idPefil
		$_SESSION['perfil'] = $this->resultado['perfil'];//nombrePerfil
		
		if($this->resultado > 0)
		{
			return true;
		}
		else
		{
			return false;
		}
	}


}
?>




































